'use client';

import SideNav from '@/components/websites/pages/sidenav';
import { useWebsites } from '../WebsitesContext';
import { useState } from "react";
import RenderElement from '@/components/websites/pages/render-element';

export default function Page() {
  const { pages } = useWebsites();
  const [selectedPage, setSelectedPage] = useState<string>('Home');

  const activePage = pages.find((page) => page.name === selectedPage);

  return (
    <div className="flex gap-4 min-h-[100vh] h-full rounded-xl md:min-h-min">
      <SideNav onSelectPage={setSelectedPage} />
      <div className="w-5/6 bg-muted/50 rounded-xl p-4">
        <h4 className="mb-4">Selected Page: {activePage?.name}</h4>

        {activePage?.sections.map((section) => (
          <div key={section.name} className="p-4 border rounded-lg mb-4">
            <h3 className="text-lg font-bold">{section.name}</h3>
            {section.elements.map((element, index) => (
              <RenderElement key={index} element={element} />
            ))}
          </div>
        ))}

        {activePage?.sections.length === 0 && (
          <p className="text-gray-500">No sections available for this page.</p>
        )}
      </div>
    </div>
  );
}
