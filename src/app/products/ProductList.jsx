"use client";

import { useEffect, useRef, useState } from "react";
import { playfairDisplay } from "../utils/fonts";
import ProductPagination from "./ProductPagination";
import ProductCards from "./ProductCards";
import CategoryFilters from "./CategoryFilters";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

function SkeletonGrid() {
  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 xl:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="rounded-[20px] border border-stone-200 bg-white p-4 animate-pulse">
          <div className="rounded-lg bg-stone-200 h-64 w-full mb-4" />
          <div className="h-4 bg-stone-200 rounded w-3/4 mb-2" />
          <div className="h-3 bg-stone-200 rounded w-1/2 mb-1" />
          <div className="h-3 bg-stone-200 rounded w-1/3 mb-4" />
          <div className="flex justify-between items-center">
            <div className="h-5 bg-stone-200 rounded w-16" />
            <div className="h-8 bg-stone-200 rounded-lg w-28" />
          </div>
        </div>
      ))}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-stone-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 15.803m10.607 0A7.5 7.5 0 0 1 5.196 15.803" />
        </svg>
      </div>
      <p className="text-lg font-semibold text-stone-700">V tej kategoriji trenutno ni izdelkov</p>
      <p className="mt-1 text-sm text-stone-400">Poskusite izbrati drugo kategorijo</p>
    </div>
  );
}

export default function ProductList({
  onNextPage,
  onPreviousPage,
  totalPages,
  totalItems,
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
  const topRef = useRef(null);

  const activeCategory = categories.find((c) => c.id === selectedCategory);

  useEffect(() => {
    setVisible(false);
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, [items]);

  useEffect(() => {
    if (currentPage > 1) {
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentPage]);

  return (
    <div ref={topRef} className="mx-auto max-w-7xl px-6 py-10 lg:py-16 lg:px-8">

      {/* Mobile filters */}
      <div className="lg:hidden mb-6">
        <p className="text-base font-semibold text-primary mb-1">{t.subtitle}</p>
        <h1 className={`text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-4 ${playfairDisplay.className}`}>
          {t.title}
        </h1>
        <CategoryFilters
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setCurrentPage={setCurrentPage}
        />
      </div>

      {/* Desktop: sidebar + grid */}
      <div className="flex gap-10 items-start">

        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-44 shrink-0 sticky top-[76px]">
          <p className="text-sm font-semibold text-primary">{t.subtitle}</p>
          <h1 className={`mt-1 text-3xl font-bold tracking-tight text-gray-900 dark:text-white ${playfairDisplay.className}`}>
            {t.title}
          </h1>
          {!loading && (
            <div className="mt-3 inline-flex items-center gap-2 bg-white dark:bg-gray-800 border border-stone-200 dark:border-gray-700 rounded-full px-3 py-1 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <span className="text-xs font-semibold text-stone-600 dark:text-gray-300">
                {totalItems} {totalItems === 1 ? "izdelek" : "izdelkov"}
                {activeCategory && (
                  <span className="text-stone-400 font-normal"> · {t.categories[activeCategory.category] || activeCategory.category}</span>
                )}
              </span>
            </div>
          )}
          <div className="mt-8">
            <CategoryFilters
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              setCurrentPage={setCurrentPage}
              sidebar
            />
          </div>
        </aside>

        {/* Product grid */}
        <div className="flex-1 min-w-0">
          {loading ? (
            <SkeletonGrid />
          ) : items.length === 0 ? (
            <EmptyState />
          ) : (
            <div className={`transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}>
              <ProductCards items={items} />
              <ProductPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onNextPage={onNextPage}
                onPreviousPage={onPreviousPage}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
