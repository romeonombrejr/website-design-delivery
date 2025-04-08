import { useWebsites } from "@/app/dashboard/websites/WebsitesContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Plus, EllipsisVertical } from "lucide-react";

export default function SideNav({ onSelectPage }: { onSelectPage: (pageName: string) => void }) {
  const { pages, addPage, addSection, deleteSection, selectedPage, selectedSection } = useWebsites();
  const [newPage, setNewPage] = useState('');
  const [newSection, setNewSection] = useState({ pageName: '', sectionName: '' });
  const activePage = pages.find((page) => page.name === selectedPage);

  return (
    <div className="bg-muted/50 w-1/6 rounded-xl p-4 overflow-auto">
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
                  <li className="mb-4 h-" key={section.name}>
                    <div className="flex justify-between align-middle">
                      <p className="my-auto">&nbsp;&nbsp;&nbsp;{section.name}</p>

                      <DropdownMenu>
                        <DropdownMenuTrigger><EllipsisVertical size={"16"} /></DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem
                            onClick={() => deleteSection(page.name, section.name)}
                          >
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex gap-2 justify-start w-full">
                &nbsp;
                <input
                  type="text"
                  value={newSection.sectionName}
                  onChange={(e) => setNewSection({ ...newSection, sectionName: e.target.value })}
                  placeholder="New section"
                  className="border p-2 rounded mb-2 h-[32px] w-5/6"
                  required
                />
                <Button
                  className="h-[32px] w-1/6"
                  onClick={() => {
                    addSection(page.name, newSection.sectionName);
                    setNewSection({ ...newSection, sectionName: "" }); // Clear input
                  }}
                  disabled={!newSection.sectionName.trim()} // Disable if empty or whitespace
                >
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
            placeholder="New Page"
            className="border p-2 rounded mb-2 h-[32px] w-5/6"
            required
          />
          <Button
            className="h-[32px] w-1/6"
            onClick={() => {
              addPage(newPage);
              setNewPage(""); // Clear input
            }}
            disabled={!newPage.trim()}
          >
            <Plus />
          </Button>


        </div>
      </Accordion>
    </div>
  );
}
