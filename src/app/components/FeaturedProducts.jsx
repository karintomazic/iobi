"use client";

import { useEffect, useState } from "react";
import PocketBase from "pocketbase";
import { Gallery } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import ImageWithLoader from "../products/ImageWithLoader";

const isDev = process.env.NEXT_PUBLIC_ENVIRONMENT === "dev";
const pb = new PocketBase(
  isDev
    ? `${process.env.NEXT_PUBLIC_POCKETBASE_URL}:${process.env.NEXT_PUBLIC_PB_LOCAL_PORT}`
    : process.env.NEXT_PUBLIC_POCKETBASE_URL,
);

export default function FeaturedProducts() {
  const { language } = useLanguage();
  const t = translations[language].featuredProducts;
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    pb.collection("products")
      .getList(1, 4, { requestKey: null })
      .then((res) => setItems(res.items))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (!loading && items.length === 0) return null;

  return (
    <section className="bg-white py-16 sm:py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-base font-semibold text-primary">{t.subtitle}</p>
            <h2
              className={`mt-2 font-display text-4xl font-bold tracking-tight text-gray-900 dark:text-white`}
            >
              {t.title}
            </h2>
          </div>
          <Link
            href="/products"
            className="hidden rounded-full border-2 border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-600 transition-colors duration-200 hover:border-primary hover:text-primary sm:inline-flex dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300"
          >
            {t.viewAll}
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-80 animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-800"
              />
            ))}
          </div>
        ) : (
          <Gallery>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((item) => (
                <ImageWithLoader key={item.id} item={item} />
              ))}
            </div>
          </Gallery>
        )}

        <div className="mt-10 text-center sm:hidden">
          <Link
            href="/products"
            className="inline-flex rounded-full border-2 border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-600 transition-colors duration-200 hover:border-primary hover:text-primary dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300"
          >
            {t.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}
