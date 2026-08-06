import React from "react";

export default function MozartPhotoRow({ getPreviewPath, onSelectPhoto, row }) {
  if (!row) return null;

  return (
    <section aria-label={row.name} className="my-8">
      <h2 className="sr-only">{row.name}</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {row.slides.map((slideNumber) => (
          <button
            aria-label={`Open Mozart photo ${slideNumber}`}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-sm transition duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2"
            key={slideNumber}
            onClick={() => onSelectPhoto(row.id, slideNumber)}
            type="button"
          >
            <img
              alt="Mozart project"
              className="h-full w-full object-cover"
              loading="lazy"
              src={getPreviewPath(slideNumber)}
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-black/5 transition duration-200 hover:bg-black/10"
            ></span>
          </button>
        ))}
      </div>
    </section>
  );
}
