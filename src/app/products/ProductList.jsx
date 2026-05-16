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
  const t = translations[language].categories;
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(false);
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, [items]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
      <div className="mb-10">
        <p className="text-base font-semibold text-primary">{t.subtitle}</p>
        <h1 className={`mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white ${playfairDisplay.className}`}>
          {t.title}
        </h1>
      </div>

      <div className="flex flex-col gap-8">
        <CategoryFilters
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setCurrentPage={setCurrentPage}
        />

        <div className="relative min-h-[200px]">
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
