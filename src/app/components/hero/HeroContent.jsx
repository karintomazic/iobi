"use client";

import { playfairDisplay } from "../../utils/fonts";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";

export default function HeroContent() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <div className="relative w-full lg:w-1/2 lg:shrink-0">
      <div className="inline-flex items-center gap-2 border border-primary/40 text-primary text-xs tracking-[0.18em] uppercase px-4 py-1.5 rounded-full mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
        {t.badge}
      </div>
      <h1
        className={`text-5xl sm:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-stone-800 dark:text-white ${playfairDisplay.className}`}
      >
        {t.title}
      </h1>
      <p className="mt-6 text-base leading-relaxed text-stone-500 dark:text-gray-400 max-w-md">
        {t.subtitle}
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="/products"
          className="rounded-full bg-primary px-8 py-3 text-sm font-medium text-white hover:bg-secondary transition-colors duration-200"
        >
          {t.heroButton}
        </a>
        <a
          href="/contact"
          className="rounded-full border border-stone-300 dark:border-gray-600 px-8 py-3 text-sm font-medium text-stone-600 dark:text-gray-300 hover:border-primary hover:text-primary transition-colors duration-200"
        >
          {t.heroButton2}
        </a>
      </div>
    </div>
  );
}
