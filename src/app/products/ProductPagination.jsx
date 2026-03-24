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

  return (
    <div className="mt-10 flex justify-between">
      <button
        onClick={onPreviousPage}
        disabled={currentPage === 1}
        className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
      >
        {t.previous}
      </button>
      <span className="text-sm text-gray-500 self-center">
        {t.page} {currentPage} {t.of} {totalPages}
      </span>
      <button
        onClick={onNextPage}
        disabled={currentPage === totalPages}
        className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
      >
        {t.next}
      </button>
    </div>
  );
}
