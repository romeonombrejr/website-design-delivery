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
    const { selectedSection } = useWebsites();
    
    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="min-w-5/6">
          <DialogHeader>
            <DialogTitle>Select a new layout for {selectedSection}</DialogTitle>
          </DialogHeader>
          <div className="w-full bg-muted/50 rounded-xl p-4">
          {placeholderSection.map((section) => (
            <div key={section.name}>
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
