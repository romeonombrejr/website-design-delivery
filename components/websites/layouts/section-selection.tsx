import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useWebsites } from "@/app/dashboard/websites/WebsitesContext";
import { placeholderSection } from "@/lib/placeholder-data"; // Import sections from placeholder-data
import RenderElement from "@/components/websites/pages/render-element";

interface SectionSelectionProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onClose: () => void;
}

export default function SectionSelection({ isOpen, onClose }: SectionSelectionProps) {
    const { selectedPage, selectedSection, updateSectionLayout } = useWebsites();

    const handleSelectLayout = (newSectionName: string) => {
        const newLayout = placeholderSection.find((section) => section.name === newSectionName);
        if (newLayout) {
          if (selectedSection) {
            updateSectionLayout(selectedPage, selectedSection, newLayout.elements);
          }
          onClose(); // Close the dialog after selection
        }
      };
    
    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="min-w-5/6">
          <DialogHeader>
            <DialogTitle>Select a new layout for {selectedSection}</DialogTitle>
          </DialogHeader>
          <div className="w-full rounded-xl p-4">
          {placeholderSection.map((section) => (
            <div 
                key={section.name}
                onClick={() => handleSelectLayout(section.name)}
                className="cursor-pointer p-2 mb-2">
              <p className="font-bold text-sm mb-2 ms-4">{section.name}</p>
              <div className="border rounded-lg cursor-pointer hover:bg-muted mb-4">
                <div>
                  {section.elements.map((element, index) => (
                    <RenderElement key={index} element={element} />
                  ))}
                </div>
              </div>
            </div>
          ))}

          {placeholderSection.length === 0 && (
            <p className="text-gray-500">No sections available.</p>
          )}
        </div>
        </DialogContent>
      </Dialog>
  );
}
