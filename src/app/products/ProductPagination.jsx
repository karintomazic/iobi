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
    "inline-flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 px-5 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-primary dark:hover:border-primary transition-colors duration-150 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white dark:disabled:hover:bg-gray-800 disabled:hover:border-gray-200 dark:disabled:hover:border-gray-700";

  return (
    <div className="mt-10 flex items-center justify-between border-t border-gray-100 dark:border-gray-800 pt-6">
      <button onClick={onPreviousPage} disabled={currentPage === 1} className={btnClass}>
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        {t.previous}
      </button>

      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
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
