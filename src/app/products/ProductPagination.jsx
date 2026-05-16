"use client";

export default function ProductPagination({
  currentPage,
  totalPages,
  onNextPage,
  onPreviousPage,
}) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const getVisiblePages = () => {
    if (totalPages <= 7) return pages;
    if (currentPage <= 4) return [...pages.slice(0, 5), "...", totalPages];
    if (currentPage >= totalPages - 3) return [1, "...", ...pages.slice(totalPages - 5)];
    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="mt-12 flex items-center justify-center gap-1.5">
      <button
        onClick={onPreviousPage}
        disabled={currentPage === 1}
        className="w-9 h-9 rounded-full border-2 border-stone-300 bg-white flex items-center justify-center text-stone-500 hover:border-primary hover:text-primary transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-stone-300 disabled:hover:text-stone-500"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {visiblePages.map((p, i) =>
        p === "..." ? (
          <span key={`ellipsis-${i}`} className="w-9 h-9 flex items-center justify-center text-stone-400 text-sm">
            …
          </span>
        ) : (
          <button
            key={p}
            onClick={() => {
              if (p > currentPage) onNextPage();
              else if (p < currentPage) onPreviousPage();
            }}
            className={`w-9 h-9 rounded-full text-sm font-semibold transition-colors duration-200 ${
              p === currentPage
                ? "bg-primary text-white"
                : "bg-white border-2 border-stone-300 text-stone-600 hover:border-primary hover:text-primary"
            }`}
          >
            {p}
          </button>
        )
      )}

      <button
        onClick={onNextPage}
        disabled={currentPage === totalPages}
        className="w-9 h-9 rounded-full border-2 border-stone-300 bg-white flex items-center justify-center text-stone-500 hover:border-primary hover:text-primary transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-stone-300 disabled:hover:text-stone-500"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}
