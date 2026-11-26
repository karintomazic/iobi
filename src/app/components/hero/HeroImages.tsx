"use client";

import { useState, type SyntheticEvent } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";

interface ImageSize {
  width: number;
  height: number;
}

export default function HeroImages() {
  const { language } = useLanguage();
  const alts = translations[language].imageAlts;

  const images = [
    {
      src: "/img/hero_img6.jpg",
      alt: alts.hero6,
      className: "absolute top-4 left-4 w-40 h-52 rounded-3xl overflow-hidden shadow-lg -rotate-2",
    },
    {
      src: "/img/hero_img2.jpg",
      alt: alts.hero2,
      className: "absolute top-4 right-4 w-40 h-52 rounded-3xl overflow-hidden shadow-lg rotate-2",
    },
    {
      src: "/img/hero_img3.jpg",
      alt: alts.hero3,
      className:
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-56 rounded-3xl overflow-hidden shadow-xl",
    },
    {
      src: "/img/hero_img4.jpg",
      alt: alts.hero4,
      className:
        "absolute bottom-4 left-4 w-40 h-52 rounded-3xl overflow-hidden shadow-lg rotate-[1.5deg]",
    },
    {
      src: "/img/hero_img5.jpg",
      alt: alts.hero5,
      className:
        "absolute bottom-4 right-4 w-40 h-52 rounded-3xl overflow-hidden shadow-lg rotate-[-1.5deg]",
    },
  ];

  const mobileImages = [
    {
      src: "/img/hero_img6.jpg",
      alt: alts.hero6,
      className: "w-36 h-48 rounded-2xl overflow-hidden shadow-lg -rotate-1",
    },
    {
      src: "/img/hero_img2.jpg",
      alt: alts.hero2,
      className: "w-36 h-48 rounded-2xl overflow-hidden shadow-lg rotate-1 mt-6",
    },
  ];

  const [dims, setDims] = useState<Record<string, ImageSize>>({});

  const handleLoad = (e: SyntheticEvent<HTMLImageElement>, src: string) => {
    const { naturalWidth: width, naturalHeight: height } = e.currentTarget;
    setDims((prev) => ({
      ...prev,
      [src]: { width, height },
    }));
  };

  return (
    <Gallery>
      {/* Desktop */}
      <div className="relative hidden h-[600px] flex-1 lg:block">
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
                  className="h-full w-full cursor-pointer object-cover transition-[filter] duration-200 hover:brightness-90"
                />
              )}
            </Item>
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div className="flex justify-center gap-4 lg:hidden">
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
                  className="h-full w-full cursor-pointer object-cover transition-[filter] duration-200 hover:brightness-90"
                />
              )}
            </Item>
          </div>
        ))}
      </div>
    </Gallery>
  );
}
