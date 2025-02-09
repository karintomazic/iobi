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
        className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
      >
        Nazaj
      </button>
      <span>
        Stran {currentPage} of {totalPages}
      </span>
      <button
        onClick={onNextPage}
        disabled={currentPage === totalPages}
        className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
      >
        Naprej
      </button>
    </div>
  );
}
