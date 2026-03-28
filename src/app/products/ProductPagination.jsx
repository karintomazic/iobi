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
    "inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white dark:disabled:hover:bg-gray-800";

  return (
    <div className="mt-10 flex justify-between">
      <button onClick={onPreviousPage} disabled={currentPage === 1} className={btnClass}>
        {t.previous}
      </button>
      <span className="text-sm text-gray-500 dark:text-gray-400 self-center">
        {t.page} {currentPage} {t.of} {totalPages}
      </span>
      <button onClick={onNextPage} disabled={currentPage === totalPages} className={btnClass}>
        {t.next}
      </button>
    </div>
  );
}
