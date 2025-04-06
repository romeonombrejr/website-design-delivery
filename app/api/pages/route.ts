// // app/api/pages/route.ts
// import { NextResponse } from 'next/server';
// import { prisma } from '@/lib/prisma'; // Your Prisma client instance
// import { Element } from '@/lib/definitions'; 

// export async function GET() {
//   try {
//     const website = await prisma.website.findFirst({
//       where: { name: "My Website" },
//       include: {
//         pages: {
//           include: {
//             sections: {
//               include: {
//                 elements: {
//                   include: { children: true }
//                 }
//               }
//             }
//           }
//         }
//       }
//     });

//     if (!website) {
//       return NextResponse.json([], { status: 200 });
//     }

//     const transformedPages = website.pages.map(dbPage => ({
//       id: dbPage.id,
//       name: dbPage.name,
//       slug: dbPage.slug ?? undefined,
//       createdAt: dbPage.createdAt,
//       updatedAt: dbPage.updatedAt,
//       websiteId: dbPage.websiteId ?? undefined,
//       sections: dbPage.sections.map(dbSection => ({
//         id: dbSection.id,
//         name: dbSection.name,
//         createdAt: dbSection.createdAt,
//         updatedAt: dbSection.updatedAt,
//         pageId: dbSection.pageId ?? undefined,
//         elements: transformElements(dbSection.elements)
//       }))
//     }));

//     console.log('Fetched pages:', transformedPages);
//     return NextResponse.json(transformedPages);
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Failed to fetch pages" },
//       { status: 500 }
//     );
//   }
// }

// function transformElements(elements: any[]): Element[] {
//   return elements.map(dbElement => ({
//     id: dbElement.id,
//     tag: dbElement.tag as Element['tag'], // Ensures correct tag type
//     key: dbElement.key || dbElement.id, // Fallback to id if key is missing
//     className: dbElement.className,
//     content: dbElement.content,
//     src: dbElement.src,
//     alt: dbElement.alt,
//     link: dbElement.link,
//     children: dbElement.children.length > 0 
//       ? transformElements(dbElement.children)
//       : undefined
//   }));
// }