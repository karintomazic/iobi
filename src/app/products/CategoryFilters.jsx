import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function CategoryFilters({
  categories,
  selectedCategory,
  setSelectedCategory,
  setCurrentPage,
  sidebar = false,
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

  if (sidebar) {
    return (
      <nav className="flex flex-col gap-1">
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-stone-400 mb-3">
          {categoriesText.title}
        </p>
        {allFilters.map((filter) => {
          const isActive = selectedCategory === filter.id;
          return (
            <button
              key={filter.id}
              onClick={() => handleSelect(filter.id)}
              className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                isActive
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-stone-600 dark:text-gray-300 hover:bg-white hover:text-stone-900"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </nav>
    );
  }

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
