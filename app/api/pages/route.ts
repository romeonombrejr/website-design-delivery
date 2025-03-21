import { NextResponse } from "next/server";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function GET() {
  try {
    const pages = await sql`
      SELECT * FROM pages;
    `;
    
    const sections = await sql`
      SELECT * FROM sections;
    `;

    const elements = await sql`
      SELECT * FROM elements;
    `;

    // Structure the data: Attach sections and elements to their respective pages
    const pagesWithSections = pages.map((page) => ({
      ...page,
      sections: sections
        .filter((section) => section.page_id === page.id)
        .map((section) => ({
          ...section,
          elements: elements.filter((element) => element.section_id === section.id),
        })),
    }));

    return NextResponse.json(pagesWithSections);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
