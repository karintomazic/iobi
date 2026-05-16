"use client";

import { useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

const images = [
  { src: "/img/hero_img6.jpg", alt: "Okrasni betonski izdelek", className: "absolute top-4 left-4 w-40 h-52 rounded-3xl overflow-hidden shadow-lg -rotate-[2deg]" },
  { src: "/img/hero_img2.jpg", alt: "Betonska klop",            className: "absolute top-4 right-4 w-40 h-52 rounded-3xl overflow-hidden shadow-lg rotate-[2deg]" },
  { src: "/img/hero_img3.jpg", alt: "Betonska fontana",         className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-56 rounded-3xl overflow-hidden shadow-xl" },
  { src: "/img/hero_img4.jpg", alt: "Betonski žar",             className: "absolute bottom-4 left-4 w-40 h-52 rounded-3xl overflow-hidden shadow-lg rotate-[1.5deg]" },
  { src: "/img/hero_img5.jpg", alt: "Okrasni kip",              className: "absolute bottom-4 right-4 w-40 h-52 rounded-3xl overflow-hidden shadow-lg -rotate-[1.5deg]" },
];

const mobileImages = [
  { src: "/img/hero_img6.jpg", alt: "Okrasni betonski izdelek", className: "w-36 h-48 rounded-2xl overflow-hidden shadow-lg -rotate-1" },
  { src: "/img/hero_img2.jpg", alt: "Betonska klop",            className: "w-36 h-48 rounded-2xl overflow-hidden shadow-lg rotate-1 mt-6" },
];

export default function HeroImages() {
  const [dims, setDims] = useState({});

  const handleLoad = (e, src) => {
    setDims((prev) => ({
      ...prev,
      [src]: { width: e.target.naturalWidth, height: e.target.naturalHeight },
    }));
  };

  return (
    <Gallery>
      {/* Desktop */}
      <div className="hidden lg:block relative flex-1 h-[600px]">
        {images.map((img) => (
          <div key={img.src} className={img.className}>
            <Item
              original={img.src}
              thumbnail={img.src}
              width={dims[img.src]?.width || 1200}
              height={dims[img.src]?.height || 900}
            >
              {({ ref, open }) => (
                <img
                  ref={ref}
                  onClick={open}
                  src={img.src}
                  alt={img.alt}
                  onLoad={(e) => handleLoad(e, img.src)}
                  className="w-full h-full object-cover cursor-pointer hover:brightness-90 transition-[filter] duration-200"
                />
              )}
            </Item>
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex gap-4 justify-center">
        {mobileImages.map((img) => (
          <div key={img.src} className={img.className}>
            <Item
              original={img.src}
              thumbnail={img.src}
              width={dims[img.src]?.width || 1200}
              height={dims[img.src]?.height || 900}
            >
              {({ ref, open }) => (
                <img
                  ref={ref}
                  onClick={open}
                  src={img.src}
                  alt={img.alt}
                  onLoad={(e) => handleLoad(e, img.src)}
                  className="w-full h-full object-cover cursor-pointer hover:brightness-90 transition-[filter] duration-200"
                />
              )}
            </Item>
          </div>
        ))}
      </div>
    </Gallery>
  );
}
