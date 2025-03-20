import { useWebsites } from "@/app/dashboard/websites/WebsitesContext";
import {  
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Plus } from "lucide-react";

export default function SideNav({ onSelectPage }: { onSelectPage: (pageName: string) => void }) {
  const { pages, addPage, addSection } = useWebsites();
  const [newPage, setNewPage] = useState('');
  const [newSection, setNewSection] = useState({ pageName: '', sectionName: '' });

  return (
    <div className="bg-muted/50 w-1/6 rounded-xl p-4">
      <h3 className="mb-6 font-bold">Pages</h3>
      <Accordion type="single" collapsible>
        {pages.map((page) => (
          <AccordionItem key={page.name} value={page.name} >
            <AccordionTrigger 
              onClick={() => onSelectPage(page.name)} // Pass selected page
            >
              {page.name}
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                {page.sections.map((section) => (
                  <li className="mb-4" key={section.name}>&nbsp;&nbsp;&nbsp;{section.name}</li>
                ))}
              </ul>
              <div className="mt-4 flex gap-2">
              &nbsp;
                <input
                  type="text"
                  value={newSection.sectionName}
                  onChange={(e) => setNewSection({ ...newSection, sectionName: e.target.value })}
                  placeholder="Enter new section name"
                  className="border p-2 rounded mb-2"
                  required
                />
                <Button onClick={() => addSection(page.name, newSection.sectionName)}>
                  <Plus />
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
        <div className="mt-4 flex gap-2">
          <input
            type="text"
            value={newPage}
            onChange={(e) => setNewPage(e.target.value)}
            placeholder="Add New Page"
            className="border p-2 rounded mb-2"
            required
          />
          <Button onClick={() => addPage(newPage)}>
            <Plus />
          </Button>
        </div>
      </Accordion>
    </div>
  );
}
