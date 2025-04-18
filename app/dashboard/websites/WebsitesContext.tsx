"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Element, Page, WebsiteContextType } from "@/lib/definitions";
import { fetchWebsitefromDB } from "@/lib/data";
import { placeholderSection } from "@/lib/placeholder-data";

const WebsitesContext = createContext<WebsiteContextType | undefined>(
  undefined
);

export function WebsitesProvider({ children }: { children: ReactNode }) {
  const [selectedPage, setSelectedPage] = useState<string>("Home");
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const [pages, setPages] = useState<Page[]>([]);

  useEffect(() => {
    async function loadPages() {
      console.log("Loading pages from DB...");
      const dbWebsite = await fetchWebsitefromDB();
      if (dbWebsite.length > 0) {
        setPages(dbWebsite[0].pages);
        console.log("Pages loaded from DB:", dbWebsite[0].pages);
      } 
      // else {
      //   // Fallback to placeholder data if no pages found
      //   setPages([{
      //     name: "Home",
      //     sections: [placeholderSection[0]]
      //   }]);
      // }
    }
    loadPages();
  }, []);

  const addPage = (pageName: string) => {
    setPages((prevPages) => [
      ...prevPages,
      {
        name: pageName,
        sections: [
          placeholderSection[0]
        ],
      },
    ]);
  };

  const addSection = (
    pageName: string,
    sectionName: string,
    elements: Element[] = []
  ) => {
    const defaultElements = elements.length > 0 ? elements : placeholderSection[1].elements;
  
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

  const deleteSection = (pageName: string, sectionName: string) => {
    setPages((prevPages) =>
      prevPages.map((page) =>
        page.name === pageName
          ? {
              ...page,
              sections: page.sections.filter((section) => section.name !== sectionName),
            }
          : page
      )
    );
  };
  

  const updateSectionLayout = (pageName: string, sectionName: string, newElements: Element[]) => {
    setPages((prevPages) =>
      prevPages.map((page) =>
        page.name === pageName
          ? {
              ...page,
              sections: page.sections.map((section) =>
                section.name === sectionName ? { ...section, elements: newElements } : section
              ),
            }
          : page
      )
    );
  };
  

  return (
    <WebsitesContext.Provider value={{ 
      pages, 
      addPage, 
      addSection,
      deleteSection, 
      selectedPage, 
      setSelectedPage, 
      selectedSection, 
      setSelectedSection,
      updateSectionLayout }}>
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
