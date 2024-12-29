"use client";

import { playfairDisplay } from "../utils/fonts";
import { useEffect, useState } from "react";
import PocketBase from "pocketbase";

import ProductPagination from "./ProductPagination";

const isDev = process.env.NEXT_PUBLIC_ENVIRONMENT === "dev";
const pb = new PocketBase(
  isDev
    ? `${process.env.NEXT_PUBLIC_POCKETBASE_URL}:${process.env.NEXT_PUBLIC_PB_LOCAL_PORT}`
    : process.env.NEXT_PUBLIC_POCKETBASE_URL
);

export default function ProductList() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const PAGE_SIZE = 20;

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryRecords = await pb.collection("category").getList(1, 50, {
          $autoCancel: false,
        });
        setCategories(categoryRecords.items);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  // Fetch products whenever selectedCategory or currentPage changes
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const filter = selectedCategory
          ? `category.id ?= "${selectedCategory}"`
          : "";

        const records = await pb
          .collection("products")
          .getList(currentPage, PAGE_SIZE, {
            $autoCancel: false,
            filter: filter,
          });

        setItems(records.items);
        setTotalPages(
          records.totalPages || Math.ceil(records.totalItems / PAGE_SIZE)
        );
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, [selectedCategory, currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:py-20 lg:px-8 text-black ">
      <h2 className="text-center pb-2 text-base/7 font-semibold text-primary">
        filtritajte po izdelkih
      </h2>
      <h2
        className={`text-5xl text-center font-bold tracking-tight text-gray-900 ${playfairDisplay.className}`}
      >
        Kategorije
      </h2>

      <div className="flex pt-8 gap-6 flex-col">
        {/* Category Filters */}
        <div className="mt-8 flex-1 flex flex-col">
          <div className="p-2 flex justify-center flex-wrap gap-4">
            {/* All items */}
            <div
              className={`flex items-center mb-2 border border-primary px-4 py-2 rounded hover:bg-primary hover:text-white cursor-pointer ${
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
              <label htmlFor="no-filter" className="font-medium cursor-pointer capitalize">
                Vsi izdelki
              </label>
            </div>

            {/* Category Radio Buttons */}
            {categories.map((cat) => (
              <div
                key={cat.id}
                className={`flex items-center mb-2 border border-primary px-4 py-2 rounded hover:bg-primary hover:text-white cursor-pointer ${
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
                  {cat.category}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-auto">
          {/* Product Cards */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {items.map((item) => (
              <div key={item.id} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={`http://localhost:${process.env.NEXT_PUBLIC_PB_LOCAL_PORT}/api/files/${item.collectionId}/${item.id}/${item.product_image}`}
                    alt={item.product_name}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">
                  {item.product_name}
                </h3>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {/* <ProductPagination totalPages={totalPages}/> */}


          <div className="mt-8 flex justify-between">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-300 rounded disabled:opacity-50"
            >
              Nazaj
            </button>
            <span>
              Stran {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-gray-300 rounded disabled:opacity-50"
            >
              Naprej
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
