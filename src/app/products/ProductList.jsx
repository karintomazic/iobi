"use client";

import { useEffect, useState } from "react";
import { playfairDisplay } from "../utils/fonts";
import ProductPagination from "./ProductPagination";
import ProductCards from "./ProductCards";
import CategoryFilters from "./CategoryFilters";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function ProductList({
  onNextPage,
  onPreviousPage,
  totalPages,
  currentPage,
  items,
  loading,
  categories,
  selectedCategory,
  setSelectedCategory,
  setCurrentPage,
}) {
  const { language } = useLanguage();
  const categoriesText = translations[language].categories;
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(false);
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, [items]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:py-16 lg:px-8 text-black dark:text-white">
      <h2 className="text-center pb-2 text-base/7 font-semibold text-primary">
        {categoriesText.subtitle}
      </h2>
      <h2
        className={`text-5xl text-center font-bold tracking-tight text-gray-900 dark:text-white ${playfairDisplay.className}`}
      >
        {categoriesText.title}
      </h2>

      <div className="flex pt-8 gap-6 flex-col">
        <CategoryFilters
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setCurrentPage={setCurrentPage}
        />

        <div className="relative flex-auto min-h-[200px]">
          {loading && (
            <div className="absolute inset-0 flex items-start justify-center pt-16 z-10">
              <div className="w-8 h-8 border-4 border-gray-200 dark:border-gray-700 border-t-primary rounded-full animate-spin" />
            </div>
          )}
          <div className={`transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}>
            <ProductCards items={items} />
            <ProductPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onNextPage={onNextPage}
              onPreviousPage={onPreviousPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
