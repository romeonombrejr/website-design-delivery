import { Section } from "@/lib/definitions";

export const placeholderMenu: Section[] = [
  {
    name: "Menu",
    elements: [
      {
        tag: "div",
        className: "container flex h-14 items-center gap-2 md:gap-4 p-4",
        key: "menu",
        children: [
          {
            tag: "div",
            className: "mr-4 hidden md:flex",
            key: "logo-container-wrapper",
            children: [
              {
                tag: "div",
                key: "logo-container",
                className: "mr-4 flex items-center gap-2 lg:mr-6",
                children: [
                  {
                    tag: "div",
                    key: "logo",
                    className: "text-xl font-bold text-primary",
                    content: "Logo",
                  },
                ],
              },
              {
                tag: "div",
                key: "nav-links",
                className: "flex items-center gap-4 text-sm xl:gap-6",
                children: [
                  {
                    tag: "a",
                    key: "home",
                    content: "Home",
                    className: "hover:text-primary",
                    link: "#",
                  },
                  {
                    tag: "a",
                    key: "about",
                    content: "About",
                    className: "hover:text-primary",
                    link: "#",
                  },
                  {
                    tag: "a",
                    key: "services",
                    content: "Services",
                    className: "hover:text-primary",
                    link: "#",
                  },
                  {
                    tag: "a",
                    key: "contact",
                    content: "Contact",
                    className: "hover:text-primary",
                    link: "#",
                  },
                ],
              },
              {
                tag: "div",
                key: "cta-button",
                className:
                  "ml-auto flex items-center gap-2 md:flex-1 md:justify-end",
              },
            ],
          },
        ],
      },
    ],
  },
];
