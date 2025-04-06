export interface Element {
  id?: string;
  tag: "div" | "a" | "p" | "h1" | "h2" | "h3" | "img" | "button" | "video" | "span";
  key?: string
  className?: string;
  content?: string; 
  src?: string; 
  alt?: string; 
  link?: string; 
  onClick?: () => void; 
  children?: Element[]; 
}

export interface Section {
  id?: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  pgeId?: string;
  elements: Element[];
}

export interface Page {
  id?: string;
  name: string;
  slug?: string;
  createdAt?: Date;
  updatedAt?: Date;
  websiteId?: string;
  sections: Section[];
}

export interface Website {
  id?: string;
  name: string;
  domain?: string;
  createdAt?: Date;
  updatedAt?: Date; 
  pages: Page[];
}

export interface WebsiteContextType {
  pages: Page[];
  addPage: (pageName: string) => void;
  addSection: (pageName: string, sectionName: string, elements?: Element[]) => void;
  selectedPage: string;
  setSelectedPage: (page: string) => void;
  selectedSection: string | null;
  setSelectedSection: (section: string | null) => void;
  updateSectionLayout: (pageName: string, sectionName: string, newElements: Element[]) => void;
}

