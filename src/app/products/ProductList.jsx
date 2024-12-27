"use client";

import { useEffect, useState } from "react";
import PocketBase from "pocketbase";

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

    console.log("shuld only run once");
  }, []);

  // Fetch products whenever selectedCategory changes
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const filter = selectedCategory
          ? `category.id ?= "${selectedCategory}"`
          : "";

        const records = await pb.collection("products").getList(1, 10, {
          $autoCancel: false,
          filter: filter,
        });

        setItems(records.items);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchProducts();

    console.log("shuld run when selectedCategory changes");
  }, [selectedCategory]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24 lg:px-8 text-black ">
      <h2 className="mb-4">Products</h2>
      <div className="mb-8">
        <label htmlFor="category-filter" className="mr-2 font-semibold">
          Filter by Category:
        </label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 rounded p-2"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.category}
            </option>
          ))}
        </select>
      </div>

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
            <h3 className="mt-4 text-sm text-gray-700">{item.product_name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
