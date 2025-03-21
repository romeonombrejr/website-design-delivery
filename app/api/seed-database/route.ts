import postgres from "postgres";
import { placeholderMenu } from "@/lib/placeholder-data";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

async function seedPages() {
  // Enable the uuid-ossp extension
  await sql`
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS pages (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL UNIQUE
    );
  `;

  const homePage = await sql`
    INSERT INTO pages (name)
    VALUES ('Home')
    ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name
    RETURNING id;
  `;

  return homePage[0]?.id;
}

async function seedSections(pageId: string) {
  if (!pageId) {
    throw new Error("pageId is undefined");
  }

  await sql`
    CREATE TABLE IF NOT EXISTS sections (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      page_id UUID NOT NULL REFERENCES pages(id) ON DELETE CASCADE
    );
  `;

  const insertedSections = await Promise.all(
    placeholderMenu.map(async (section) => {
      if (!section.name) {
        throw new Error(`Section name is undefined for section: ${JSON.stringify(section)}`);
      }

      console.log("Inserting section:", section.name, "with pageId:", pageId);

      const result = await sql`
        INSERT INTO sections (name, page_id)
        VALUES (${section.name}, ${pageId})
        RETURNING id;
      `;

      return { id: result[0]?.id, section };
    })
  );

  return insertedSections;
}

async function seedElements(sectionsWithIds: { id: string; section: any }[]) {
  await sql`
    CREATE TABLE IF NOT EXISTS elements (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      key TEXT,
      tag VARCHAR(50) NOT NULL,
      className TEXT,
      content TEXT,
      src TEXT,
      alt TEXT,
      link TEXT,
      onClick BOOLEAN DEFAULT false,
      section_id UUID NOT NULL REFERENCES sections(id) ON DELETE CASCADE,
      parent_id UUID REFERENCES elements(id) ON DELETE CASCADE
    );
  `;

  for (const { id: sectionId, section } of sectionsWithIds) {
    await insertElementsRecursively(section.elements, sectionId);
  }
}

async function insertElementsRecursively(
  elements: any[],
  sectionId: string,
  parentId: string | null = null
) {
  for (const element of elements) {
    const result = await sql`
      INSERT INTO elements (key, tag, className, content, src, alt, link, onClick, section_id, parent_id)
      VALUES (
        ${element.key || null},
        ${element.tag},
        ${element.className || null},
        ${element.content || null},
        ${element.src || null},
        ${element.alt || null},
        ${element.link || null},
        ${element.onClick ? true : false},
        ${sectionId},
        ${parentId}
      )
      RETURNING id;
    `;

    const elementId = result[0]?.id;

    if (element.children) {
      await insertElementsRecursively(element.children, sectionId, elementId);
    }
  }
}

export async function GET() {
  try {
    const pageId = await seedPages();
    const sectionsWithIds = await seedSections(pageId);
    await seedElements(sectionsWithIds);

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    console.error("Seeding error:", error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return Response.json({ error: errorMessage }, { status: 500 });
  }
}