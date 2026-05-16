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
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-secondary transition-colors duration-150"
          >
            {t.viewAll}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
            </svg>
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
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-secondary transition-colors duration-150"
          >
            {t.viewAll}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
