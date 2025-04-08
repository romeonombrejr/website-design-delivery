import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function migrateWebsites() {
  await sql`CREATE EXTENSION IF NOT EXISTS "pgcrypto";`;

  await sql`
    CREATE TABLE IF NOT EXISTS websites (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name TEXT NOT NULL,
      domain TEXT,
      created_at TIMESTAMP,
      updated_at TIMESTAMP
    );
  `;
}

async function migratePages() {
  await sql`
    CREATE TABLE IF NOT EXISTS pages (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name TEXT NOT NULL,
      slug TEXT,
      website_id UUID REFERENCES websites(id) ON DELETE CASCADE,
      created_at TIMESTAMP,
      updated_at TIMESTAMP
    );
  `;
}

async function migrateSections() {
  await sql`
    CREATE TABLE IF NOT EXISTS sections (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name TEXT NOT NULL,
      page_id UUID REFERENCES pages(id) ON DELETE CASCADE,
      elements JSONB DEFAULT '[]'::jsonb, -- Store elements as an array of JSON objects
      created_at TIMESTAMP,
      updated_at TIMESTAMP
    );
  `;
}

export async function GET() {
  try {
    await sql.begin(async (sql) => {
      await migrateWebsites();
      await migratePages();
      await migrateSections();
    });

    return Response.json({
      message: "Tables created with UUIDs and JSONB elements!"
    });
  } catch (error) {
    console.error('Migration error:', error);
    return Response.json({ error }, { status: 500 });
  }
}
