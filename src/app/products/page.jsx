"use client";
import { useEffect, useState } from "react";
import PocketBase from "pocketbase";

import Navigation from "../components/navigation/Navigation";
import Footer from "../components/Footer";
import ProductList from "./ProductList";

const isDev = process.env.NEXT_PUBLIC_ENVIRONMENT === "dev";
const pb = new PocketBase(
  isDev
    ? `${process.env.NEXT_PUBLIC_POCKETBASE_URL}:${process.env.NEXT_PUBLIC_PB_LOCAL_PORT}`
    : process.env.NEXT_PUBLIC_POCKETBASE_URL
);

export default function Products() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const PAGE_SIZE = 20;

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const categoryRecords = await pb.collection("category").getList(1, 50, {
          $autoCancel: false,
        });
        setCategories(categoryRecords.items);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setError("Napaka pri nalaganju kategorij. Prosimo, poskusite znova.");
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  // Fetch products whenever selectedCategory or currentPage changes
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
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
        setError("Napaka pri nalaganju izdelkov. Prosimo, poskusite znova.");
      } finally {
        setLoading(false);
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
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <Navigation />
      </section>
      <main className="bg-gray-50 dark:bg-gray-900">
        {error && (
          <div className="mx-auto max-w-7xl px-6 py-8">
            <div className="rounded-md bg-red-50 border border-red-200 p-4 text-red-700 text-sm">
              {error}
            </div>
          </div>
        )}
        <section>
          <ProductList
            onNextPage={handleNextPage}
            onPreviousPage={handlePreviousPage}
            loading={loading}
            totalPages={totalPages}
            currentPage={currentPage}
            items={items}
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            setCurrentPage={setCurrentPage}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
