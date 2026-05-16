"use client";

import { playfairDisplay } from "../../utils/fonts";
import CategoryCard from "./CategoryCard";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";

export default function Categories() {
  const { language } = useLanguage();
  const t = translations[language].categories;

  const categories = [
    {
      src: "/img/category-2.jpg",
      alt: "Fontane",
      overlayText: t.categories.fountains,
      description: t.descriptions.fountains,
      href: "/products?category=fontane",
      classes: "lg:row-span-2",
    },
    {
      src: "/img/category-1.jpg",
      alt: "Korita",
      overlayText: t.categories.korita,
      description: t.descriptions.korita,
      href: "/products?category=korita",
      classes: "",
    },
    {
      src: "/img/category-3.jpg",
      alt: "Palčki",
      overlayText: t.categories.palcki,
      description: t.descriptions.palcki,
      href: "/products?category=palcki",
      classes: "",
    },
    {
      src: "/img/category-4.jpg",
      alt: "Živali",
      overlayText: t.categories.animals,
      description: t.descriptions.animals,
      href: "/products?category=zivali",
      classes: "",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-800 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4 lg:h-[580px]">
          <CategoryCard {...categories[0]} />

          <CategoryCard {...categories[1]} />

          {/* Editorial text + CTA panel */}
          <div className="rounded-2xl bg-[#EDF2E8] dark:bg-gray-700 p-8 flex flex-col justify-between min-h-[220px]">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-primary font-medium mb-4">
                {t.subtitle}
              </p>
              <h2 className={`text-4xl font-bold leading-tight text-stone-800 dark:text-white ${playfairDisplay.className}`}>
                {t.title}
              </h2>
            </div>
            <a
              href="/products"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-secondary transition-colors duration-200 w-fit mt-6"
            >
              {t.categories.allProducts} &rarr;
            </a>
          </div>

          <CategoryCard {...categories[2]} />

          <CategoryCard {...categories[3]} />
        </div>

      </div>
    </section>
  );
}
