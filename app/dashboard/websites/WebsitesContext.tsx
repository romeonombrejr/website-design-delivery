"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface Element {
  tag: "div" | "a" | "p" | "h1" | "h2" | "h3" | "img" | "button" | "video";
  className?: string;
  content?: string; // For text content
  src?: string; // For media elements like <img> or <video>
  alt?: string; // Alt text for accessibility
  link?: string; // Optional link for clickable elements
  onClick?: () => void; // For interactive elements like buttons
  children?: Element[]; // For nesting elements
}

interface Section {
  name: string;
  elements: Element[];
}

interface Page {
  name: string;
  sections: Section[];
}

interface WebsiteContextType {
  pages: Page[];
  addPage: (pageName: string) => void;
  addSection: (pageName: string, sectionName: string) => void;
}

const WebsitesContext = createContext<WebsiteContextType | undefined>(
  undefined
);

export function WebsitesProvider({ children }: { children: ReactNode }) {
  const [pages, setPages] = useState<Page[]>([
    {
      name: "Home",
      sections: [
        {
          name: "Menu",
          elements: [
            {
              tag: "div",
            },
          ],
        },
      ],
    },
  ]);
  console.log(pages);

  const addPage = (pageName: string) => {
    setPages((prevPages) => [
      ...prevPages,
      {
        name: pageName,
        sections: [
          {
            name: "Menu",
            elements: [
              {
                tag: "div",
              },
            ],
          },
        ],
      },
    ]);
  };

  const addSection = (
    pageName: string,
    sectionName: string,
    elements: Element[] = []
  ) => {
    setPages((prevPages) =>
      prevPages.map((page) =>
        page.name === pageName
          ? {
              ...page,
              sections: [...page.sections, { name: sectionName, elements }],
            }
          : page
      )
    );
  };

  return (
    <WebsitesContext.Provider value={{ pages, addPage, addSection }}>
      {children}
    </WebsitesContext.Provider>
  );
}

export function useWebsites() {
  const context = useContext(WebsitesContext);
  if (!context) {
    throw new Error("useWebsites must be used within a WebsitesProvider");
  }
  return context;
}

