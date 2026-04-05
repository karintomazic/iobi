"use client";

import { playfairDisplay } from "../../utils/fonts";
import CategoryCard from "./CategoryCard";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";

export default function Categories() {
  const { language } = useLanguage();
  const categoryText = translations[language].categories;

  const categories = [
    {
      src: "/img/category-2.jpg",
      alt: "Category 2",
      overlayText: categoryText.categories.fountains,
      categoryKey: "fontane",
      classes: "lg:row-span-2",
      imgClass: "size-full object-cover object-top",
    },
    {
      src: "/img/category-1.jpg",
      alt: "Category 1",
      overlayText: categoryText.categories.korita,
      categoryKey: "korita",
      classes: "max-lg:row-start-1",
      imgClass:
        "w-full h-full max-w-full object-cover sm:max-h-90 lg:max-h-full",
    },
    {
      src: "/img/category-3.jpg",
      alt: "Category 6",
      overlayText: categoryText.categories.palcki,
      categoryKey: "palcki",
      classes: "max-lg:row-start-3 lg:col-start-2 lg:row-start-2",
      imgClass:
        "w-full h-full max-w-full object-cover sm:max-h-90 lg:max-h-full",
    },
    {
      src: "/img/category-4.jpg",
      alt: "Category 5",
      overlayText: categoryText.categories.animals,
      categoryKey: "zivali",
      classes: "lg:row-span-2",
      imgClass: "size-full object-cover object-top",
    },
  ];

  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div>
          <div className="mx-auto max-w-2xl px-0 lg:max-w-7xl lg:px-8">
            <h2 className="text-center pb-2 text-base/7 font-semibold text-primary">
              {categoryText.subtitle}
            </h2>
            <h2
              className={`text-5xl text-center font-bold tracking-tight text-gray-900 dark:text-white ${playfairDisplay.className}`}
            >
              {categoryText.title}
            </h2>
            <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2 lg:max-h-[900px]">
              {categories.map((category) => (
                <CategoryCard
                  key={category.src}
                  src={category.src}
                  alt={category.alt}
                  overlayText={category.overlayText}
                  classes={category.classes}
                  imgClass={category.imgClass}
                  href={`/products?category=${category.categoryKey}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
