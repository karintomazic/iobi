"use client";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Footer from "../components/Footer";
import ProductList from "./ProductList";
import { pb, type CategoryRecord, type ProductRecord } from "@/lib/pocketbase";

function ProductsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedCategory = searchParams.get("category") ?? "";
  const currentPage = Number(searchParams.get("page")) || 1;

  const [items, setItems] = useState<ProductRecord[]>([]);
  const [categories, setCategories] = useState<CategoryRecord[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const PAGE_SIZE = 20;

  const updateUrl = (category: string, page: number) => {
    const params = new URLSearchParams();

    if (category) {
      params.set("category", category);
    }

    if (page > 1) {
      params.set("page", String(page));
    }

    const query = params.toString();
    router.push(query ? `/products?${query}` : "/products", { scroll: false });
  };

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const categoryRecords = await pb.collection("category").getList(1, 50, {
          requestKey: null,
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
    let ignore = false;

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const filter = selectedCategory
          ? pb.filter("category.category = {:category}", { category: selectedCategory })
          : "";

        const records = await pb.collection("products").getList(currentPage, PAGE_SIZE, {
          requestKey: null,
          filter: filter,
        });

        if (ignore) return;
        setItems(records.items);
        setTotalItems(records.totalItems);
        setTotalPages(records.totalPages || Math.ceil(records.totalItems / PAGE_SIZE));
      } catch (err) {
        if (ignore) return;
        console.error("Error fetching products:", err);
        setError("Napaka pri nalaganju izdelkov. Prosimo, poskusite znova.");
      } finally {
        if (!ignore) setLoading(false);
      }
    };
    fetchProducts();

    return () => {
      ignore = true;
    };
  }, [selectedCategory, currentPage]);

  const handlePageChange = (page: number) => {
    updateUrl(selectedCategory, page);
  };

  const handleCategoryChange = (category: string) => {
    updateUrl(category, 1);
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
            onPageChange={handlePageChange}
            onCategoryChange={handleCategoryChange}
            loading={loading}
            totalPages={totalPages}
            totalItems={totalItems}
            currentPage={currentPage}
            items={items}
            categories={categories}
            selectedCategory={selectedCategory}
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
