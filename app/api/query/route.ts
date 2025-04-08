import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function GET() {
  try {
    const websites = await sql`
      SELECT id, name, domain, created_at, updated_at FROM websites;
    `;

    const pages = await sql`
      SELECT id, name, slug, website_id, created_at, updated_at FROM pages;
    `;

    const sections = await sql`
      SELECT id, name, page_id, elements, created_at, updated_at FROM sections;
    `;

    return Response.json({
      websites,
      pages,
      sections,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return Response.json({ error }, { status: 500 });
  }
}
