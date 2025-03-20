"use client";

import React, { JSX } from "react";
import { Element } from "@/lib/definitions";

export default function RenderElement({ element }: { element: Element }) {
  return React.createElement(
    element.tag, // Dynamic tag
    {
      className: element.className,
      onClick: element.onClick,
      src: element.src,
      alt: element.alt,
    },
    <>
      {element.content}
      {element.children?.map((child) => (
        <RenderElement key={child.key} element={child} />
      ))}
    </>
  );
}
