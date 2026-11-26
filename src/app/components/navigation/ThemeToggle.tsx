"use client";

import { toggleTheme } from "@/lib/theme";
import Icon from "../Icon";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";

export default function ThemeToggle() {
  const { language } = useLanguage();
  const t = translations[language].navigation;

  return (
    <button
      onClick={toggleTheme}
      className="text-stone-400 transition-colors duration-150 hover:text-stone-600 dark:text-gray-500 dark:hover:text-gray-300"
      aria-label={t.toggleTheme}
    >
      <Icon icon={faMoon} className="h-3.5 w-3.5 dark:hidden" />
      <Icon icon={faSun} className="hidden h-3.5 w-3.5 dark:inline-block" />
    </button>
  );
}
