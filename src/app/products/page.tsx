"use client";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Footer from "../components/Footer";
import ProductList from "./ProductList";
import { pb, type CategoryRecord, type ProductRecord } from "@/lib/pocketbase";

function ProductsContent() {
  const searchParams = useSearchParams();
  const [items, setItems] = useState<ProductRecord[]>([]);
  const [categories, setCategories] = useState<CategoryRecord[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const PAGE_SIZE = 20;

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const categoryRecords = await pb.collection("category").getList(1, 50, {
          requestKey: null,
        });
        setCategories(categoryRecords.items);

        const categoryParam = searchParams.get("category");

        if (categoryParam) {
          const match = categoryRecords.items.find((cat) => cat.category === categoryParam);

          if (match) setSelectedCategory(match.id);
        }
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
        const filter = selectedCategory ? `category.id ?= "${selectedCategory}"` : "";

        const records = await pb.collection("products").getList(currentPage, PAGE_SIZE, {
          requestKey: null,
          filter: filter,
        });

        setItems(records.items);
        setTotalItems(records.totalItems);
        setTotalPages(records.totalPages || Math.ceil(records.totalItems / PAGE_SIZE));
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
      <main className="bg-surface dark:bg-gray-900">
        {error && (
          <div className="mx-auto max-w-7xl px-6 py-8">
            <div className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700">
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
            totalItems={totalItems}
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

// useSearchParams() only works in the browser. Suspense tells Next.js to
// build the rest of the page ahead of time and fill this part in there.
export default function Products() {
  return (
    <Suspense>
      <ProductsContent />
    </Suspense>
  );
}
