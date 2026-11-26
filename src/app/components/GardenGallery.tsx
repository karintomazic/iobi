"use client";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function GardenGallery() {
  const { language } = useLanguage();
  const t = translations[language].gardenGallery;
  const alts = translations[language].imageAlts;

  const galleryImages = [
    { src: "/img/category-1.jpg", alt: alts.category1 },
    { src: "/img/category-2.jpg", alt: alts.category2 },
    { src: "/img/category-3.jpg", alt: alts.category3 },
    { src: "/img/category-4.jpg", alt: alts.category4 },
  ];

  return (
    <section id="gallery" className="bg-surface py-16 sm:py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-medium tracking-[0.2em] text-primary uppercase">
              {t.subtitle}
            </p>
            <h2
              className={`font-display text-4xl font-bold tracking-tight text-stone-800 sm:text-5xl dark:text-white`}
            >
              {t.title}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-stone-500 dark:text-gray-400">
              {t.description}
            </p>
          </div>
          <a
            href="/gallery"
            className="shrink-0 rounded-full border-2 border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-600 transition-colors duration-200 hover:border-primary hover:text-primary dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300"
          >
            {t.viewAll}
          </a>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Left: large feature image */}
          <div className="h-72 overflow-hidden rounded-2xl lg:col-span-2 lg:h-[480px]">
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          {/* Right: two stacked images */}
          <div className="flex flex-col gap-4">
            <div className="h-48 overflow-hidden rounded-2xl lg:h-[232px]">
              <img
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
            <div className="h-48 overflow-hidden rounded-2xl lg:h-[232px]">
              <img
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
