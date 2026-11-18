"use client";

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
      overlayText: t.categories.fontane,
      description: t.descriptions.fontane,
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
      overlayText: t.categories.zivali,
      description: t.descriptions.zivali,
      href: "/products?category=zivali",
      classes: "",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:h-[580px] lg:grid-cols-3 lg:grid-rows-2">
          <CategoryCard {...categories[0]} />

          <CategoryCard {...categories[1]} />

          {/* Editorial text + CTA panel */}
          <div className="flex min-h-[220px] flex-col justify-between rounded-2xl bg-surface p-8 dark:bg-gray-700">
            <div>
              <p className="mb-4 text-xs font-medium tracking-[0.2em] text-primary uppercase">
                {t.subtitle}
              </p>
              <h2
                className={`font-display text-4xl leading-tight font-bold text-stone-800 dark:text-white`}
              >
                {t.title}
              </h2>
            </div>
            <a
              href="/products"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-secondary"
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
