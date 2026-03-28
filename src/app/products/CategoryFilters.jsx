import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function CategoryFilters({
  categories,
  selectedCategory,
  setSelectedCategory,
  setCurrentPage,
}) {
  const { language } = useLanguage();
  const categoriesText = translations[language].categories;

  const handleSelect = (value) => {
    const next = selectedCategory === value ? "" : value;
    setSelectedCategory(next);
    setCurrentPage(1);
  };

  const allFilters = [
    { id: "", label: categoriesText.categories.allProducts },
    ...categories.map((cat) => ({
      id: cat.id,
      label: categoriesText.categories[cat.category] || cat.category,
    })),
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-2">
      {allFilters.map((filter) => {
        const isActive = selectedCategory === filter.id;
        return (
          <button
            key={filter.id}
            onClick={() => handleSelect(filter.id)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-150 border ${
              isActive
                ? "bg-primary border-primary text-white shadow-sm"
                : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary"
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
