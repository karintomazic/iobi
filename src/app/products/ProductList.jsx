"use client";

import { playfairDisplay } from "../utils/fonts";
import { useEffect, useState } from "react";
import PocketBase from "pocketbase";
import ProductPagination from "./ProductPagination";
import ProductCards from "./ProductCards";
import CategoryFilters from "./CategoryFilters";

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
        Filtritajte po izdelkih
      </h2>
      <h2
        className={`text-5xl text-center font-bold tracking-tight text-gray-900 ${playfairDisplay.className}`}
      >
        Kategorije
      </h2>

      <div className="flex pt-8 gap-6 flex-col">
        <CategoryFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onSetSelectedCategory={setSelectedCategory}
          onSetCurrentPage={setCurrentPage}
        />
        <div className="flex-auto">
          <ProductCards items={items} />
          <ProductPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onNextPage={handleNextPage}
            onPreviousPage={handlePreviousPage}
          />
        </div>
      </div>
    </div>
  );
}
