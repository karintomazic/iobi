"use client";

import { playfairDisplay } from "../../utils/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";

export default function HeroContent() {
  const { language } = useLanguage();
  const navText = translations[language].hero;

  return (
    <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
      <h1
        className={`text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl ${playfairDisplay.className}`}
      >
        {navText.title}
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
        {navText.subtitle}
      </p>
      <div className="mt-10 flex items-center gap-x-6">
        <a
          href="#"
          className="rounded-md bg-primary px-4 py-2 text-base transition-all duration-100 ease text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {navText.heroButton}
        </a>

        <a
          href="#"
          className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
        >
          {navText.heroButton2}
        </a>
      </div>
    </div>
  );
}
