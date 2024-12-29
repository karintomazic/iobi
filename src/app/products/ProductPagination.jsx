export default function ProductPagination({
  currentPage,
  totalPages,
  onNextPage,
  onPreviousPage,
}) {
  return (
    <div className="mt-8 flex justify-between">
      <button
        onClick={onPreviousPage}
        disabled={currentPage === 1}
        className="px-4 py-2 border border-gray-300 rounded disabled:opacity-50"
      >
        Nazaj
      </button>
      <span>
        Stran {currentPage} of {totalPages}
      </span>
      <button
        onClick={onNextPage}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border border-gray-300 rounded disabled:opacity-50"
      >
        Naprej
      </button>
    </div>
  );
}
