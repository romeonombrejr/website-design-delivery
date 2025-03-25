"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useWebsites } from "@/app/dashboard/websites/WebsitesContext";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

export default function LayoutsSideNav() {
  const { pages, selectedPage, setSelectedSection } = useWebsites();
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedSection = searchParams.get("selectedSection") || "";


  const activePage = pages.find((page) => page.name === selectedPage);


  const handleSectionClick = (sectionName: string) => {
    setSelectedSection(sectionName); // Store in context
    router.push("/dashboard/websites/layouts"); // Navigate to layouts page
  };

  return (
    <div className="bg-muted/50 w-1/6 rounded-xl p-4">
      <h3 className="mb-6 font-bold">Layouts</h3>
      
      <h5 className="mb-4">Sections for {selectedPage}</h5>

      {activePage?.sections.map((section) => (
        <Button
          variant="outline"
          key={section.name}
          onClick={() => handleSectionClick(section.name)}
          className={clsx(
            "w-full text-left mb-2",
            selectedSection === section.name
          )}
        >
          {section.name}
        </Button>
      ))}

      {activePage?.sections.length === 0 && (
        <p className="text-gray-500">No sections available for this page.</p>
      )}
    </div>
  );
}
