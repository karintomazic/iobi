"use client";

import { playfairDisplay } from "../../utils/fonts";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";

export default function HeroContent() {
  const { language } = useLanguage();
  const navText = translations[language].hero;

  return (
    <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl lg:w-1/3">
      <h1
        className={`text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl ${playfairDisplay.className}`}
      >
        {navText.title}
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 sm:max-w-md lg:max-w-none">
        {navText.subtitle}
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-x-6">
        <a
          href="/products"
          className="w-full sm:w-auto text-center rounded-md bg-primary px-4 py-2 text-base transition-all duration-100 ease text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {navText.heroButton}
        </a>

        <a
          href="#contact"
          className="w-full sm:w-auto inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900 focus:ring-primary"
        >
          {navText.heroButton2}
        </a>
      </div>
    </div>
  );
}
