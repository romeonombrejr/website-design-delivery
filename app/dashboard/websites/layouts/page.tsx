"use client";

import LayoutsSideNav from "@/components/websites/layouts/layouts-sidenav";
import { useSearchParams } from "next/navigation";
import { useWebsites } from "../WebsitesContext";
import RenderElement from "@/components/websites/pages/render-element";
import { Suspense } from "react";

export default function LayoutsPage() {
  const { pages } = useWebsites();
  const searchParams = useSearchParams();

  const selectedPage = searchParams.get("selectedPage") || "Unknown Page";
  const selectedSection =
    searchParams.get("selectedSection") || "Unknown Section";

  const activePage = pages.find((page) => page.name === selectedPage);

  return (
    <Suspense>
    <div className="flex gap-4 min-h-[100vh] h-full rounded-xl md:min-h-min">
      
      <LayoutsSideNav />
      <div className="w-5/6 bg-muted/50 rounded-xl p-4">
        <h4 className="mb-6 font-bold">Selected Page: {selectedPage}</h4>

        {activePage?.sections.map((section) => (
          <div key={section.name}>
            {section.elements.map((element, index) => (
              <RenderElement key={index} element={element} />
            ))}
          </div>
        ))}

      </div>
    </div>
    </Suspense></Suspense>
  );
}
