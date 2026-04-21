import React from "react";

export default function MozartTextBlock({ block }) {
  if (!block) return null;

  return (
    <section
      aria-label={block.name}
      className="my-10 space-y-4 text-[15px] leading-7 text-gray-700"
    >
      <h2 className="sr-only">{block.name}</h2>
      {block.paragraphs.map((paragraph, index) => (
        <p key={`${block.id}-${index}`}>{paragraph}</p>
      ))}
    </section>
  );
}
