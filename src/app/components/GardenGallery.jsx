"use client";

import { playfairDisplay } from "../utils/fonts";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const galleryImages = [
  { src: "/img/category-1.jpg", alt: "Betonska klop v vrtu" },
  { src: "/img/category-2.jpg", alt: "Fontana v vrtu" },
  { src: "/img/category-3.jpg", alt: "Okrasni kip v vrtu" },
  { src: "/img/category-4.jpg", alt: "Betonski žar v vrtu" },
];

export default function GardenGallery() {
  const { language } = useLanguage();
  const t = translations[language].gardenGallery;

  return (
    <section id="gallery" className="bg-[#F8F5F0] dark:bg-gray-900 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.2em] uppercase text-primary font-medium mb-3">
              {t.subtitle}
            </p>
            <h2 className={`text-4xl sm:text-5xl font-bold tracking-tight text-stone-800 dark:text-white ${playfairDisplay.className}`}>
              {t.title}
            </h2>
            <p className="mt-4 text-base text-stone-500 dark:text-gray-400 leading-relaxed max-w-md">{t.description}</p>
          </div>
          <a
            href="/gallery"
            className="shrink-0 rounded-full border border-stone-300 dark:border-gray-600 px-6 py-2.5 text-sm font-medium text-stone-600 dark:text-gray-300 hover:border-primary hover:text-primary transition-colors duration-200"
          >
            {t.viewAll}
          </a>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left: large feature image */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden h-72 lg:h-[480px]">
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              onError={(e) => { e.target.style.display = "none"; }}
            />
          </div>

          {/* Right: two stacked images */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden h-48 lg:h-[232px]">
              <img
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                onError={(e) => { e.target.style.display = "none"; }}
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-48 lg:h-[232px]">
              <img
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                onError={(e) => { e.target.style.display = "none"; }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
