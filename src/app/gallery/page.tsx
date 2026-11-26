"use client";

import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function GalleryPage() {
  const { language } = useLanguage();
  const t = translations[language].gardenGallery;
  const alts = translations[language].imageAlts;

  const allImages = [
    { src: "/img/hero_img1.jpg", alt: alts.hero1, w: 800, h: 600 },
    { src: "/img/category-1.jpg", alt: alts.category1, w: 800, h: 600 },
    { src: "/img/hero_img2.jpg", alt: alts.hero2, w: 800, h: 600 },
    { src: "/img/category-2.jpg", alt: alts.category2, w: 800, h: 600 },
    { src: "/img/hero_img3.jpg", alt: alts.hero3, w: 800, h: 600 },
    { src: "/img/category-3.jpg", alt: alts.category3, w: 800, h: 600 },
    { src: "/img/hero_img4.jpg", alt: alts.hero4, w: 800, h: 600 },
    { src: "/img/category-4.jpg", alt: alts.category4, w: 800, h: 600 },
    { src: "/img/hero_img5.jpg", alt: alts.hero5, w: 800, h: 600 },
    { src: "/img/hero_img6.jpg", alt: alts.hero6, w: 800, h: 600 },
  ];

  return (
    <>
      <main className="min-h-screen bg-surface dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          {/* Header */}
          <div className="mb-10">
            <p className="mb-1 text-base font-semibold text-primary">{t.subtitle}</p>
            <h1
              className={`font-display text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl dark:text-white`}
            >
              {t.title}
            </h1>
            <p className="mt-3 max-w-2xl text-base text-stone-600 dark:text-gray-300">
              {t.description}
            </p>
          </div>

          {/* Gallery grid */}
          <Gallery>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {allImages.map((image, i) => (
                <Item
                  key={image.src}
                  original={image.src}
                  thumbnail={image.src}
                  width={image.w}
                  height={image.h}
                  alt={image.alt}
                >
                  {({ ref, open }) => (
                    <div
                      ref={ref}
                      onClick={open}
                      className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-xs transition-shadow duration-300 hover:shadow-md dark:bg-gray-800 ${
                        i === 0 || i === 6 ? "sm:col-span-2 lg:col-span-1" : ""
                      }`}
                    >
                      <div className="aspect-4/3 overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            const card = e.currentTarget.parentElement?.parentElement;
                            if (card) card.style.display = "none";
                          }}
                        />
                      </div>
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
                        <div className="rounded-full bg-white/90 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <svg
                            className="h-5 w-5 text-stone-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 15.803m10.607 0A7.5 7.5 0 0 1 5.196 15.803M10.5 7.5v6m3-3h-6"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                </Item>
              ))}
            </div>
          </Gallery>
        </div>
      </main>
      <Footer />
    </>
  );
}
