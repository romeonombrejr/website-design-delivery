import { sql } from "@vercel/postgres";
import { Page } from "./definitions";

// export async function fetchPages(): Promise<Page[]> {
//     try {
//         const pagesData = await sql<Page>`SELECT id, name FROM pages`;

//         const sectionsData = await sql<Section>`SELECT id, name, page_id FROM sections`;

//         const elementsData = await sql<Element>`SELECT id, tag, key, class_name, content, src, alt, link, section_id FROM elements`;

//         const pages: Page[] = pagesData.rows.map((page) => ({
//             name: page.name,
//             sections: sectionsData.rows
//                 .filter((section) => section.page_id === page.id)
//                 .map((section) => ({
//                     name: section.name,
//                     elements: elementsData.rows
//                         .filter((element) => element.section_id === section.id)
//                         .map((element) => ({
//                             tag: element.tag,
//                             key: element.key,
//                             className: element.className,
//                             content: element.content,
//                             src: element.src,
//                             alt: element.alt,
//                             link: element.link,
//                             children: [], // Assuming children are stored in another way
//                         })),
//                 })),
//         }));

//         return pages;
//     } catch (error) {
//         console.error("Database Error:", error);
//         throw new Error("Failed to fetch pages from database.");
//     }
// }

export async function fetchPagesFromDB(): Promise<Page[]> {
  try {
    // Fetch all pages
    const pagesData = await sql`SELECT id, name FROM pages`;

    // Fetch all sections
    const sectionsData = await sql`SELECT id, name, page_id FROM sections`;

    // Fetch all elements
    const elementsData = await sql`SELECT id, tag, key, class_name, content, src, alt, link, section_id FROM elements`;

    // Transform the data into structured objects
    const pages: Page[] = pagesData.rows.map((page) => ({
      name: page.name,
      sections: sectionsData.rows
        .filter((section) => section.page_id === page.id)
        .map((section) => ({
          name: section.name,
          elements: elementsData.rows
            .filter((element) => element.section_id === section.id)
            .map((element) => ({
              tag: element.tag,
              key: element.key,
              className: element.class_name,
              content: element.content,
              src: element.src,
              alt: element.alt,
              link: element.link,
              children: [], // Assuming children are stored in another way
            })),
        })),
    }));

    return pages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch pages from database.");
  }
}
