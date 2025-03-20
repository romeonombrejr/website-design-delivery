"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useWebsites } from "@/app/dashboard/websites/WebsitesContext";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

export default function LayoutsSideNav() {
  const { pages } = useWebsites();
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedPage = searchParams.get("selectedPage") || "Home";
  const selectedSection = searchParams.get("selectedSection") || "";

  // Find the selected page from context
  const activePage = pages.find((page) => page.name === selectedPage);

  // Handle section click to update the URL with the new selected section
  const handleSectionClick = (sectionName: string) => {
    router.push(
      `/dashboard/websites/layouts?selectedPage=${encodeURIComponent(
        selectedPage
      )}&selectedSection=${encodeURIComponent(sectionName)}`
    );
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
