"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function CTABanner() {
  const { language } = useLanguage();
  const t = translations[language].ctaBanner;

  return (
    <section className="bg-white py-16 sm:py-20 dark:bg-gray-800">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 sm:flex-row lg:px-8">
        <div>
          <h2
            className={`font-display text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white`}
          >
            {t.title}
          </h2>
          <p className="mt-3 max-w-xl text-base text-gray-600 dark:text-gray-300">{t.subtitle}</p>
        </div>
        <div className="flex shrink-0 gap-3">
          <Link
            href={`/${language}/products`}
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-secondary"
          >
            {t.button1}
          </Link>
          <Link
            href={`/${language}/contact`}
            className="rounded-full border-2 border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-600 transition-colors duration-200 hover:border-primary hover:text-primary"
          >
            {t.button2}
          </Link>
        </div>
      </div>
    </section>
  );
}
