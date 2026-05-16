"use client";

import { useEffect, useState } from "react";
import PocketBase from "pocketbase";
import { Gallery } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Link from "next/link";
import { playfairDisplay } from "../utils/fonts";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import ImageWithLoader from "../products/ImageWithLoader";

const isDev = process.env.NEXT_PUBLIC_ENVIRONMENT === "dev";
const pb = new PocketBase(
  isDev
    ? `${process.env.NEXT_PUBLIC_POCKETBASE_URL}:${process.env.NEXT_PUBLIC_PB_LOCAL_PORT}`
    : process.env.NEXT_PUBLIC_POCKETBASE_URL
);

export default function FeaturedProducts() {
  const { language } = useLanguage();
  const t = translations[language].featuredProducts;
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    pb.collection("products")
      .getList(1, 4, { $autoCancel: false })
      .then((res) => setItems(res.items))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (!loading && items.length === 0) return null;

  return (
    <section className="bg-white dark:bg-gray-900 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-base font-semibold text-primary">{t.subtitle}</p>
            <h2 className={`mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white ${playfairDisplay.className}`}>
              {t.title}
            </h2>
          </div>
          <Link
            href="/products"
            className="hidden sm:inline-flex rounded-full bg-white dark:bg-gray-900 border-2 border-stone-300 dark:border-gray-600 px-6 py-3 text-sm font-semibold text-stone-600 dark:text-gray-300 hover:border-primary hover:text-primary transition-colors duration-200"
          >
            {t.viewAll}
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-80 rounded-2xl bg-gray-200 dark:bg-gray-800 animate-pulse" />
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

        <div className="mt-10 sm:hidden text-center">
          <Link
            href="/products"
            className="inline-flex rounded-full bg-white dark:bg-gray-900 border-2 border-stone-300 dark:border-gray-600 px-6 py-3 text-sm font-semibold text-stone-600 dark:text-gray-300 hover:border-primary hover:text-primary transition-colors duration-200"
          >
            {t.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}
