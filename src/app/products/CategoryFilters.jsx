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

  return (
    <div className="flex-1 flex flex-col">
      <div className="p-2 flex justify-center flex-wrap gap-4">
        {/* All items */}
        <div
          className={`flex items-center border border-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white cursor-pointer ${
            selectedCategory === "" ? "bg-primary text-white" : ""
          } `}
        >
          <input
            type="radio"
            id="no-filter"
            name="category-filter"
            value=""
            checked={selectedCategory === ""}
            onChange={() => {
              setSelectedCategory(""); // Clear filters
              setCurrentPage(1); // Reset to first page
            }}
            className="mr-2 hidden"
          />
          <label
            htmlFor="no-filter"
            className="font-medium cursor-pointer capitalize"
          >
            {categoriesText.categories.allProducts}
          </label>
        </div>

        {/* Category Radio Buttons */}
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`flex items-center border border-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white cursor-pointer ${
              selectedCategory === cat.id ? "bg-primary text-white" : ""
            }`}
          >
            <input
              type="radio"
              id={`category-${cat.id}`}
              name="category-filter"
              value={cat.id}
              checked={selectedCategory === cat.id}
              onChange={() => {
                const updatedCategory =
                  selectedCategory === cat.id ? "" : cat.id;
                setSelectedCategory(updatedCategory); // Clear selection if the same category is clicked
                setCurrentPage(1); // Reset to first page when filters change
              }}
              className="mr-2 hidden"
            />
            <label
              htmlFor={`category-${cat.id}`}
              className="font-medium cursor-pointer capitalize"
            >
              {categoriesText.categories[cat.category] || cat.category}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
