'use client';

import React, { JSX } from 'react';

interface Element {
  tag: keyof JSX.IntrinsicElements; // Ensures only valid HTML tags
  className?: string;
  content?: string;
  src?: string;
  alt?: string;
  link?: string;
  onClick?: () => void;
  children?: Element[];
}

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
      {element.children?.map((child, index) => (
        <RenderElement key={index} element={child} />
      ))}
    </>
  );
}

