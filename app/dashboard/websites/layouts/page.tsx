"use client";

import LayoutsSideNav from "@/components/websites/layouts/layouts-sidenav";
import { useWebsites } from "../WebsitesContext";
import RenderElement from "@/components/websites/pages/render-element";
import { Suspense } from "react";
import { Monitor, Smartphone, Tablet } from "lucide-react";

export default function Page() {

  const { pages, selectedPage, selectedSection, setSelectedSection } = useWebsites();

  const activePage = pages.find((page) => page.name === selectedPage);
  const activeSection = activePage?.sections.find(
    (section) => section.name === selectedSection
  );

  return (
    <div className="flex gap-4 min-h-[100vh] h-full rounded-xl md:min-h-min">
      <Suspense>
        <LayoutsSideNav />
      </Suspense>

      <div className="w-5/6 bg-muted/50 rounded-xl p-4">
        <div className="flex justify-between">
          <h4 className="mb-6 font-bold">Selected Page: {activePage?.name}</h4>
          <div className="flex gap-4">
            <Monitor />
            <Tablet />
            <Smartphone height="22" />
          </div>
        </div>

        {activePage?.sections.map((section) => (
          <div key={section.name}>
            {section.elements.map((element, index) => (
              <RenderElement key={index} element={element} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
