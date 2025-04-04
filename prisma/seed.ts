// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import { placeholderSection } from '../lib/placeholder-data';

const prisma = new PrismaClient();

async function main() {
  // Create the website with page and section first
  const website = await prisma.website.create({
    data: {
      name: 'My Website',
      pages: {
        create: {
          name: 'Home',
          slug: 'home',
          sections: {
            create: {
              name: placeholderSection[0].name,
            },
          },
        },
      },
    },
    include: {
      pages: {
        include: {
          sections: true,
        },
      },
    },
  });

  const sectionId = website.pages[0].sections[0].id;

  // Create root elements first
  for (const element of placeholderSection[0].elements) {
    await createElementWithChildren(element, sectionId);
  }

  console.log('Seeding completed!');
}

async function createElementWithChildren(element: any, sectionId: string, parentId: string | null = null) {
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

  if (element.children && element.children.length > 0) {
    for (const child of element.children) {
      await createElementWithChildren(child, sectionId, createdElement.id);
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });