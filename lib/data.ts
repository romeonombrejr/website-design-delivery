// lib/data.ts
import { PrismaClient } from '@prisma/client';
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
                  include: { children: true }
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
function transformElements(elements: any[]): Element[] {
  return elements.map(dbElement => ({
    id: dbElement.id,
    tag: dbElement.tag as Element['tag'], // Ensures correct tag type
    key: dbElement.key || dbElement.id, // Fallback to id if key is missing
    className: dbElement.className,
    content: dbElement.content,
    src: dbElement.src,
    alt: dbElement.alt,
    link: dbElement.link,
    children: dbElement.children.length > 0 
      ? transformElements(dbElement.children)
      : undefined
  }));
}