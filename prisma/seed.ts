// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import { placeholderSection } from '../lib/placeholder-data';

const prisma = new PrismaClient();

async function main() {
  // Create the website with page and section first
  // const website = await prisma.website.create({
  //   data: {
  //     name: 'My Website',
  //     pages: {
  //       create: {
  //         name: 'Home',
  //         slug: 'home',
  //         sections: {
  //           create: {
  //             name: placeholderSection[0].name,
  //           },
  //         },
  //       },
  //     },
  //   },
  //   include: {
  //     pages: {
  //       include: {
  //         sections: true,
  //       },
  //     },
  //   },
  // });

  // const sectionId = website.pages[0].sections[0].id;

  // // Create root elements first
  // for (const element of placeholderSection[0].elements) {
  //   await createElementWithChildren(element, sectionId);
  // }
  
  for (const sectionData of placeholderSection.slice(1)) {
    const section = await prisma.section.create({
      data: {
        name: sectionData.name,
        // No pageId means it's pageless
      },
    });

    console.log(`Created pageless section: ${section.name} with ID: ${section.id}`);

    // Create elements for this section
    let sectionElementCount = 0;
    for (const element of sectionData.elements) {
      sectionElementCount += await createElementWithChildren(element, section.id);
    }
    console.log(`Created ${sectionElementCount} elements for ${section.name} section`);
  }

  console.log('Seeding completed!');
}

async function createElementWithChildren(element: any, sectionId: string, parentId: string | null = null): Promise<number> {
  const createdElement = await prisma.element.create({
    data: {
      tag: element.tag,
      key: element.key,
      className: element.className,
      content: element.content,
      src: element.src,
      alt: element.alt,
      link: element.link,
      sectionId: sectionId,
      parent: parentId ? { connect: { id: parentId } } : undefined,
    },
  });

  let count = 1; // Count the current element

  if (element.children && element.children.length > 0) {
    for (const child of element.children) {
      count += await createElementWithChildren(child, sectionId, createdElement.id);
    }
  }

  return count;
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });