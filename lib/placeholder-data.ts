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

export const placeholderSection: Section[] = [
    {
        name: "Default Section",
        elements: [
            {
                tag: "div",
                className: "flex h-80 justify-center items-center pb-6",
                key: "def-section",
                children: [
                    {
                        tag: "div",
                        className: "text-center max-w-6xl mx-10",
                        key: "section-wrapper",
                        children: [
                            {
                                tag: "p",
                                className: "my-3 text-lg font-bold tracking-tight md:text-5xl",
                                key: "section-title",
                                content: "Fast & SEO friendly"
                            },
                            {
                                tag: "h1",
                                className: "my-3 text-lg font-bold tracking-tight md:text-5xl",
                                key: "section-subtitle",
                                content: "Best Service Offered Here"
                            },
                            {
                                tag: "div",
                                key: "section-content-wrapper",
                                children: [
                                    {
                                        tag: "p",
                                        className: "max-w-md mx-auto my-2 text-xs md:leading-relaxed",
                                        key: "section-content-1",
                                        content: "Introducing our latest service offering. Get started quickly and efficiently with our range of solutions. Designed to meet your needs using the latest technologies."
                                    },
                                ]
                            },
                            {
                                tag: "div",
                                className: "flex flex-col items-center justify-center gap-5 mt-6 md:flex-row mb-4",
                                key: "section-content-wrapper-2",
                                children: [
                                    {
                                        tag: "a",
                                        className: "inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b dark:shadow-blue-900 shadow-blue-200 hover:shadow-2xl hover:shadow-blue-400 hover:-tranneutral-y-px ",
                                        key: "section-content-2",
                                        content: "Browse All Examples",
                                        link: "#"
                                    },
                                    {
                                        tag: "a",
                                        className: "inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all bg-gray-700 dark:bg-white dark:text-gray-800 rounded-md shadow-xl sm:w-auto hover:bg-gray-900 hover:text-white shadow-neutral-300 dark:shadow-neutral-700 hover:shadow-2xl hover:shadow-neutral-400 hover:-tranneutral-y-px",
                                        key: "section-content-3",
                                        content: "Seach Examples",
                                        link: "#"
                                    },
                                ]
                            },
                        ]
                    }
                ]
            }
        ]
    }
];