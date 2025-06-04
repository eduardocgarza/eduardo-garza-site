"use client";

import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const PinterestPortfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  // Generate portfolio images with random sizes for masonry effect
  useEffect(() => {
    const generateImages = () => {
      const imageData = [
        {
          id: 1,
          title: "Architectural Marvel",
          description:
            "A stunning display of modern architecture blending form and function in perfect harmony.",
          height: 400,
        },
        {
          id: 2,
          title: "Nature's Serenity",
          description: "Capturing the tranquil beauty of untouched landscapes.",
          height: 300,
        },
        {
          id: 3,
          title: "Urban Elegance",
          description:
            "The sophisticated interplay of light and shadow in metropolitan settings.",
          height: 500,
        },
        {
          id: 4,
          title: "Minimalist Vision",
          description:
            "Clean lines and purposeful space create timeless beauty.",
          height: 350,
        },
        {
          id: 5,
          title: "Golden Hour",
          description:
            "When light transforms the ordinary into the extraordinary.",
          height: 450,
        },
        {
          id: 6,
          title: "Textural Symphony",
          description:
            "The rich tapestry of materials and surfaces in contemporary design.",
          height: 320,
        },
        {
          id: 7,
          title: "Cultural Heritage",
          description:
            "Preserving the stories and artistry of our shared human experience.",
          height: 480,
        },
        {
          id: 8,
          title: "Innovation Meets Tradition",
          description: "Where cutting-edge design honors timeless principles.",
          height: 380,
        },
        {
          id: 9,
          title: "Ethereal Moments",
          description:
            "Capturing the fleeting beauty that exists between seconds.",
          height: 420,
        },
        {
          id: 10,
          title: "Design Philosophy",
          description:
            "The thoughtful consideration of space, purpose, and human experience.",
          height: 360,
        },
        {
          id: 11,
          title: "Artisanal Craft",
          description:
            "The meticulous attention to detail that elevates ordinary objects.",
          height: 440,
        },
        {
          id: 12,
          title: "Sustainable Beauty",
          description:
            "Harmonizing environmental consciousness with aesthetic excellence.",
          height: 390,
        },
        {
          id: 13,
          title: "Light Studies",
          description:
            "Exploring how illumination shapes perception and emotion.",
          height: 310,
        },
        {
          id: 14,
          title: "Geometric Harmony",
          description:
            "The mathematical poetry found in architectural proportions.",
          height: 460,
        },
        {
          id: 15,
          title: "Seasonal Transitions",
          description:
            "The ephemeral beauty of nature's cyclical transformations.",
          height: 340,
        },
      ];

      return imageData.map((item) => ({
        ...item,
        src: `https://picsum.photos/400/${item.height}?random=${item.id}`,
        width: 400,
      }));
    };

    setImages(generateImages());
  }, []);

  const openModal = (image, index) => {
    setSelectedImage({ ...image, index });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;

    const currentIndex = selectedImage.index;
    let newIndex;

    if (direction === "next") {
      newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    }

    setSelectedImage({ ...images[newIndex], index: newIndex });
  };

  // Masonry layout calculation
  const getMasonryColumns = () => {
    const columns = [[], [], [], []]; // 4 columns for desktop
    let columnHeights = [0, 0, 0, 0];

    images.forEach((image, index) => {
      // Find the shortest column
      const shortestColumnIndex = columnHeights.indexOf(
        Math.min(...columnHeights)
      );
      columns[shortestColumnIndex].push({ ...image, index });
      columnHeights[shortestColumnIndex] += image.height + 20; // 20px gap
    });

    return columns;
  };

  const columns = getMasonryColumns();

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-neutral-100">
      <main className="mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-6">
              {column.map((image) => (
                <div
                  key={image.id}
                  className="group cursor-pointer"
                  onClick={() => openModal(image, image.index)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-1000">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-auto object-cover"
                      style={{ height: `${image.height}px` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-medium text-lg mb-1">
                          {image.title}
                        </h3>
                        <p className="text-white/80 text-sm line-clamp-2">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-stone-300 transition-colors z-10"
            >
              <X size={32} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-stone-300 transition-colors z-10 bg-black/20 rounded-full p-2 hover:bg-black/40"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={() => navigateImage("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-stone-300 transition-colors z-10 bg-black/20 rounded-full p-2 hover:bg-black/40"
            >
              <ChevronRight size={24} />
            </button>

            {/* Modal Content */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-h-full flex flex-col lg:flex-row">
              {/* Image */}
              <div className="flex-1 relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover max-h-96 lg:max-h-full"
                />
              </div>

              {/* Content */}
              <div className="lg:w-80 p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-light text-stone-800 mb-4">
                  {selectedImage.title}
                </h2>
                <p className="text-stone-600 leading-relaxed mb-6">
                  {selectedImage.description}
                </p>
                <div className="space-y-3 text-sm text-stone-500">
                  <div className="flex justify-between">
                    <span>Dimensions</span>
                    <span>
                      {selectedImage.width} × {selectedImage.height}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Collection</span>
                    <span>Featured Works</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PinterestPortfolio;
