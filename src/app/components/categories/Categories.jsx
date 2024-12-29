import { playfairDisplay } from "../../utils/fonts";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  const categories = [
    {
      src: "/img/category-2.jpg",
      alt: "Category 2",
      overlayText: "Lorem Ipsum",
      classes1: "lg:row-span-2",
      classes2: "lg:rounded-l-[calc(2rem+1px)]",
      imgClass: "size-full object-cover object-top",
    },
    {
      src: "/img/category-1.jpg",
      alt: "Category 1",
      overlayText: "Lorem Ipsum",
      classes1: "max-lg:row-start-1",
      classes2: "max-lg:rounded-t-[calc(2rem+1px)]",
      imgClass:
        "w-full h-full max-w-full object-cover sm:max-h-90 lg:max-h-full",
    },
    {
      src: "/img/category-6.jpg",
      alt: "Category 6",
      overlayText: "Lorem Ipsum",
      classes1: "max-lg:row-start-3 lg:col-start-2 lg:row-start-2",
      classes2: "",
      imgClass:
        "w-full h-full max-w-full object-cover sm:max-h-90 lg:max-h-full",
    },
    {
      src: "/img/category-5.jpg",
      alt: "Category 5",
      overlayText: "Lorem Ipsum",
      classes1: "lg:row-span-2",
      classes2:
        "max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)",
      imgClass: "size-full object-cover object-top",
    },
  ];

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div>
          <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-center pb-2 text-base/7 font-semibold text-primary">
              filtritajte po izdelkih
            </h2>
            <h2
              className={`text-5xl text-center font-bold tracking-tight text-gray-900 ${playfairDisplay.className}`}
            >
              Kategorije
            </h2>
            <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
              {categories.map((category, index) => (
                <CategoryCard
                  key={index}
                  src={category.src}
                  alt={category.alt}
                  overlayText={category.overlayText}
                  classes1={category.classes1}
                  classes2={category.classes2}
                  imgClass={category.imgClass}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
