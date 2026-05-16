"use client";

import Link from "next/link";
import { playfairDisplay } from "../utils/fonts";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function CTABanner() {
  const { language } = useLanguage();
  const t = translations[language].ctaBanner;

  return (
    <section className="bg-[#F8F5F0] dark:bg-gray-800 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-8">
        <div>
          <h2 className={`text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white ${playfairDisplay.className}`}>
            {t.title}
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 text-base max-w-xl">{t.subtitle}</p>
        </div>
        <div className="flex gap-3 shrink-0">
          <Link
            href="/products"
            className="px-5 py-3 rounded-full bg-primary text-white font-semibold text-sm hover:bg-secondary transition-colors duration-150"
          >
            {t.button1}
          </Link>
          <Link
            href="/contact"
            className="px-5 py-3 rounded-full border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors duration-150"
          >
            {t.button2}
          </Link>
        </div>
      </div>
    </section>
  );
}
