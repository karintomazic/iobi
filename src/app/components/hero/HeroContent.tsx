"use client";

import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";
import Link from "next/link";

export default function HeroContent() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <div className="relative w-full lg:w-1/2 lg:shrink-0">
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-white px-4 py-1.5 text-xs tracking-[0.18em] text-primary uppercase">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
        {t.badge}
      </div>
      <h1
        className={`font-display text-5xl leading-[1.05] font-bold tracking-tight text-stone-800 sm:text-6xl xl:text-7xl dark:text-white`}
      >
        {t.title}
      </h1>
      <p className="mt-6 max-w-md text-base leading-relaxed text-stone-500 dark:text-gray-400">
        {t.subtitle}
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href={`/${language}/products`}
          className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-secondary"
        >
          {t.heroButton}
        </Link>
        <Link
          href={`/${language}/contact`}
          className="rounded-full border-2 border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-600 transition-colors duration-200 hover:border-primary hover:text-primary dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300"
        >
          {t.heroButton2}
        </Link>
      </div>
    </div>
  );
}
