"use client";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function ProductPagination({
  currentPage,
  totalPages,
  onNextPage,
  onPreviousPage,
}) {
  const { language } = useLanguage();
  const t = translations[language].pagination;

  const btnClass =
    "inline-flex items-center gap-2 rounded-full bg-white dark:bg-gray-900 border-2 border-stone-300 dark:border-gray-600 px-6 py-3 text-sm font-semibold text-stone-600 dark:text-gray-300 hover:border-primary hover:text-primary transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-stone-300 disabled:hover:text-stone-600";

  return (
    <div className="mt-12 flex items-center justify-between border-t border-stone-200 dark:border-gray-800 pt-8">
      <button onClick={onPreviousPage} disabled={currentPage === 1} className={btnClass}>
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        {t.previous}
      </button>

      <span className="text-sm font-medium text-stone-500 dark:text-gray-400">
        <span className="text-gray-900 dark:text-white font-semibold">{currentPage}</span>
        <span className="mx-1.5">/</span>
        <span>{totalPages}</span>
      </span>

      <button onClick={onNextPage} disabled={currentPage === totalPages} className={btnClass}>
        {t.next}
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}
