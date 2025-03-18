import { WebsitesProvider } from "./WebsitesContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WebsitesLayout({ children }: { children: React.ReactNode }) {
  return (
    <WebsitesProvider>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="bg-muted/50 grid auto-rows-min gap-4 md:grid-cols-2 h-32 rounded-xl">
          <div className="rounded-xl h-32 flex justify-around items-center px-8 md:grid-cols-3 w-md">
            <Button variant="outline" asChild className="p-8">
              <Link href="/dashboard/websites/pages">Pages</Link>
            </Button>
            <Button variant="outline" asChild className="p-8">
              <Link href="/dashboard/websites/layouts">Layout</Link>
            </Button>
            <Button variant="outline" asChild className="p-8">
              <Link href="/dashboard/websites/content">Content</Link>
            </Button>
          </div>
          <div className="ml-auto rounded-xl h-32 flex justify-around items-center px-8 md:grid-cols-2 w-md">
            <h4>Happy with your layout?</h4>
            <Button variant="outline" asChild>
              <Link href="#">Request a website</Link>
            </Button>
          </div>
        </div>
        {children}
      </div>
    </WebsitesProvider>
  );
}
