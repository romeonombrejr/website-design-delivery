export interface Element {
  tag: "div" | "a" | "p" | "h1" | "h2" | "h3" | "img" | "button" | "video" | "span";
  key?: string
  className?: string;
  content?: string; // For text content
  src?: string; // For media elements like <img> or <video>
  alt?: string; // Alt text for accessibility
  link?: string; // Optional link for clickable elements
  onClick?: () => void; // For interactive elements like buttons
  children?: Element[]; // For nesting elements
}

export interface Section {
  name: string;
  elements: Element[];
}

export interface Page {
  name: string;
  sections: Section[];
}

export interface WebsiteContextType {
  pages: Page[];
  addPage: (pageName: string) => void;
  addSection: (pageName: string, sectionName: string) => void;
}
