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
    <div className="flex flex-wrap gap-2">
      {allFilters.map((filter) => {
        const isActive = selectedCategory === filter.id;
        return (
          <button
            key={filter.id}
            onClick={() => handleSelect(filter.id)}
            className={`rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 ${
              isActive
                ? "bg-primary text-white border-2 border-primary"
                : "bg-white dark:bg-gray-900 border-2 border-stone-300 dark:border-gray-600 text-stone-600 dark:text-gray-300 hover:border-primary hover:text-primary"
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
