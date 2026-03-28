"use client";

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
  categories,
  selectedCategory,
  setSelectedCategory,
  setCurrentPage,
}) {

  const { language } = useLanguage();
  const categoriesText = translations[language].categories;

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
        <div className="flex-auto">
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
  );
}
