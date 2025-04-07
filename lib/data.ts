'use server';

import { PrismaClient } from 'generated/prisma'; // Adjust the import based on your Prisma setup
import { Element, Section, Page } from '@/lib/definitions';

const prisma = new PrismaClient();

export async function fetchPagesFromDB(): Promise<Page[]> {
  try {
    const website = await prisma.website.findFirst({
      where: { name: "My Website" },
      include: {
        pages: {
          include: {
            sections: {
              include: {
                elements: {
                  include: { children: true, parent: true } // Include children and parent for recursive structure
                }
              }
            }
          }
        }
      }
    });

    if (!website) {
      console.warn('No website found with name "My Website"');
      return [];
    }

    return website.pages.map(dbPage => ({
      id: dbPage.id,
      name: dbPage.name,
      slug: dbPage.slug ?? undefined,
      createdAt: dbPage.createdAt,
      updatedAt: dbPage.updatedAt,
      websiteId: dbPage.websiteId ?? undefined,
      sections: dbPage.sections.map(dbSection => ({
        id: dbSection.id,
        name: dbSection.name,
        createdAt: dbSection.createdAt,
        updatedAt: dbSection.updatedAt,
        pageId: dbSection.pageId ?? undefined,
        elements: transformElements(dbSection.elements)
      }))
    }));
  } catch (error) {
    console.error('Error fetching pages from DB:', error);
    return [];
  } finally {
    await prisma.$disconnect();
  }
}

// Helper function to recursively transform elements
function transformElements(elements: any[] | undefined): Element[] {
  if (!elements) return [];

  const elementMap = new Map<string, any>();
  const childrenMap = new Map<string, any[]>();

  // Step 1: Organize elements into maps
  for (const el of elements) {
    elementMap.set(el.id, el);
    if (el.parent?.length) {
      for (const parent of el.parent) {
        if (!childrenMap.has(parent.id)) {
          childrenMap.set(parent.id, []);
        }
        childrenMap.get(parent.id)!.push(el);
      }
    }
  }

  // Step 2: Find root elements (those that have no parent)
  const rootElements = elements.filter(el => !el.parent?.length);

  // Step 3: Transform with recursion
  const transform = (dbElement: any): Element => ({
    id: dbElement.id,
    tag: dbElement.tag as Element['tag'],
    key: dbElement.key || dbElement.id,
    className: dbElement.className || null,
    content: dbElement.content || null,
    src: dbElement.src || null,
    alt: dbElement.alt || null,
    link: dbElement.link || null,
    sectionId: dbElement.sectionId ?? undefined,
    children: childrenMap.has(dbElement.id)
      ? childrenMap.get(dbElement.id)!.map(transform)
      : undefined
  });

  return rootElements.map(transform);
}

