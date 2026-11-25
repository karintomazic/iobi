"use client";

import { useEffect, useRef } from "react";
import ProductPagination from "./ProductPagination";
import ProductCards from "./ProductCards";
import CategoryFilters from "./CategoryFilters";
import { useLanguage } from "../context/LanguageContext";
import { translations, isCategoryKey } from "../data/translations";
import { type CategoryRecord, type ProductRecord } from "@/lib/pocketbase";

function SkeletonGrid() {
  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 xl:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="animate-pulse rounded-[20px] border border-stone-200 bg-white p-4">
          <div className="mb-4 h-64 w-full rounded-lg bg-stone-200" />
          <div className="mb-2 h-4 w-3/4 rounded-sm bg-stone-200" />
          <div className="mb-1 h-3 w-1/2 rounded-sm bg-stone-200" />
          <div className="mb-4 h-3 w-1/3 rounded-sm bg-stone-200" />
          <div className="flex items-center justify-between">
            <div className="h-5 w-16 rounded-sm bg-stone-200" />
            <div className="h-8 w-28 rounded-lg bg-stone-200" />
          </div>
        </div>
      ))}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-stone-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-8 w-8 text-stone-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 15.803m10.607 0A7.5 7.5 0 0 1 5.196 15.803"
          />
        </svg>
      </div>
      <p className="text-lg font-semibold text-stone-700">V tej kategoriji trenutno ni izdelkov</p>
      <p className="mt-1 text-sm text-stone-400">Poskusite izbrati drugo kategorijo</p>
    </div>
  );
}

interface ProductListProps {
  onNextPage: () => void;
  onPreviousPage: () => void;
  totalPages: number;
  totalItems: number;
  currentPage: number;
  items: ProductRecord[];
  loading: boolean;
  categories: CategoryRecord[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  setCurrentPage: (page: number) => void;
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
}: ProductListProps) {
  const { language } = useLanguage();
  const t = translations[language].categories;
  const tp = translations[language].products;
  const topRef = useRef<HTMLDivElement>(null);

  const activeCategory = categories.find((c) => c.id === selectedCategory);

  useEffect(() => {
    if (currentPage > 1) {
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentPage]);

  return (
    <div ref={topRef} className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
      {/* Mobile filters */}
      <div className="mb-6 lg:hidden">
        <p className="mb-1 text-base font-semibold text-primary">{t.subtitle}</p>
        <h1
          className={`mb-4 font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white`}
        >
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
      <div className="flex items-start gap-10">
        {/* Sidebar */}
        <aside className="sticky top-[76px] hidden w-44 shrink-0 flex-col lg:flex">
          <p className="text-sm font-semibold text-primary">{t.subtitle}</p>
          <h1
            className={`mt-1 font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white`}
          >
            {t.title}
          </h1>
          {!loading && (
            <div className="mt-3 inline-flex w-fit items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1 dark:border-gray-700 dark:bg-gray-800">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span className="text-xs font-semibold text-stone-600 dark:text-gray-300">
                {totalItems} {totalItems === 1 ? tp.itemSingular : tp.itemPlural}
                {activeCategory && (
                  <span className="font-normal text-stone-400">
                    {" · "}
                    {isCategoryKey(activeCategory.category)
                      ? t.categories[activeCategory.category]
                      : activeCategory.category}
                  </span>
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
        <div className="min-w-0 flex-1">
          {loading ? (
            <SkeletonGrid />
          ) : items.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="animate-fade-in motion-reduce:animate-none">
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
