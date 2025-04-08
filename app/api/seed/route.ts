import { placeholderSection } from "@/lib/placeholder-data"; // this is a Section[]
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function GET() {
  try {
    await sql.begin(async (sql) => {
    //   // 1. Create Website
    //   const [website] = await sql`
    //     INSERT INTO websites (name, created_at, updated_at)
    //     VALUES ('My Website', NOW(), NOW())
    //     RETURNING id
    //   `;

    //   // 2. Create Page under the website
    //   const [page] = await sql`
    //     INSERT INTO pages (name, slug, website_id, created_at, updated_at)
    //     VALUES ('Home', 'home', ${website.id}, NOW(), NOW())
    //     RETURNING id
    //   `;

    //   // 3. Insert Section 0 with page_id
    //   await sql`
    //     INSERT INTO sections (name, page_id, elements, created_at, updated_at)
    //     VALUES (
    //       ${placeholderSection[0].name},
    //       ${page.id},
    //       ${sql.json(JSON.stringify(placeholderSection[0].elements))},
    //       NOW(),
    //       NOW()
    //     )
    //   `;

      // 4. Insert Sections 1 & 2 without page_id
      await sql`
        INSERT INTO sections (name, elements, created_at, updated_at)
        VALUES
          (
            ${placeholderSection[0].name},
            ${sql.json(JSON.stringify(placeholderSection[1].elements))},
            NOW(),
            NOW()
          )
      `;
    });

    return Response.json({
      message: "Seeded Website, Page, and Sections successfully!"
    });
  } catch (error) {
    console.error("Seeding error:", error);
    return Response.json({ error }, { status: 500 });
  }
}
