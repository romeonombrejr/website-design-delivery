"use client";

import SideNav from "@/components/websites/pages/sidenav";
import { useWebsites } from "../WebsitesContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import RenderElement from "@/components/websites/pages/render-element";

export default function Page() {
  const router = useRouter();
  const { pages, selectedPage, setSelectedPage, setSelectedSection } = useWebsites();

  const activePage = pages.find((page) => page.name === selectedPage);

  const handleSectionClick = (sectionName: string) => {
    setSelectedSection(sectionName); // Store in context
    router.push("/dashboard/websites/layouts"); // Navigate to layouts page
  };

  return (
    <div className="flex gap-4 min-h-[100vh] h-full rounded-xl md:min-h-min">
      <SideNav onSelectPage={setSelectedPage} />

      <div className="w-5/6 bg-muted/50 rounded-xl p-4">
        <h4 className="mb-6 font-bold">Selected Page: {activePage?.name}</h4>

        {activePage?.sections.map((section) => (
          <div key={section.name} onClick={() => handleSectionClick(section.name)}>
            <p className="font-bold text-sm mb-2 ms-4">{section.name}</p>
            <div className="border rounded-lg cursor-pointer hover:bg-muted mb-4">
              {Array.isArray(section.elements) ? (
                section.elements.map((element, index) => (
                  <RenderElement key={index} element={element} />
                ))
              ) : (
                <p>No elements available for this section.</p>
              )}
            </div>
          </div>
        ))}

        {activePage?.sections.length === 0 && (
          <p className="text-gray-500">No sections available for this page.</p>
        )}
      </div>
    </div>
  );
}
