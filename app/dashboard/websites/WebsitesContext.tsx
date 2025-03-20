"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Element, Page, WebsiteContextType } from "@/lib/definitions";
import { placeholderMenu, placeholderSection } from "@/lib/placeholder-data";

const WebsitesContext = createContext<WebsiteContextType | undefined>(
  undefined
);

export function WebsitesProvider({ children }: { children: ReactNode }) {
    const [pages, setPages] = useState<Page[]>([
        {
          name: "Home",
          sections: [
           placeholderMenu[0]
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
         placeholderMenu[0]
        ],
      },
    ]);
  };

  const addSection = (
    pageName: string,
    sectionName: string,
    elements: Element[] = []
  ) => {
    const defaultElements = elements.length > 0 ? elements : placeholderSection[0].elements;
  
    setPages((prevPages) =>
      prevPages.map((page) =>
        page.name === pageName
          ? {
              ...page,
              sections: [...page.sections, { name: sectionName, elements: defaultElements }],
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
