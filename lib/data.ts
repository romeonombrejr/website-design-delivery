'use server';

import { Website, Page, Section } from "@/lib/definitions";
import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchWebsitefromDB(): Promise<Website[]> {
  try {
    // 1. Fetch the Website (only "My Website" for now)
    const [website] = await sql<Website[]>`
      SELECT id, name, domain, created_at, updated_at 
      FROM websites 
      WHERE name = 'My Website';
    `;

    // 2. Fetch the Pages related to the Website
    if (!website) {
      throw new Error("Website not found");
    }

    const pages = await sql<Page[]>`
      SELECT id, name, slug, website_id, created_at, updated_at 
      FROM pages
      WHERE website_id = ${website.id!};
    `;

    // 3. Fetch Sections for each Page
    for (const page of pages) {
      if (!page.id) {
        throw new Error(`Page ID is undefined for page: ${page.name}`);
      }
      const sections = await sql<Section[]>`
        SELECT id, name, page_id, elements, created_at, updated_at
        FROM sections
        WHERE page_id = ${page.id}
      `;
      
      // Parse the elements field if it's a string (to ensure it's an array)
      page.sections = sections.map((section) => ({
        ...section,
        elements: typeof section.elements === 'string' ? JSON.parse(section.elements) : section.elements,
      }));
    }

    // 4. Attach pages to the website and return the result
    website.pages = pages;

    return [website];  // We return an array of Website (for consistency with the model)
  } catch (error) {
    console.error("Error fetching pages from DB:", error);
    throw new Error("Failed to fetch data");
  }
}
