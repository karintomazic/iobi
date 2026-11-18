"use client";

import { toggleTheme } from "@/lib/theme";
import Icon from "../Icon";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggle() {
  return (
    <button
      onClick={toggleTheme}
      className="text-stone-400 transition-colors duration-150 hover:text-stone-600 dark:text-gray-500 dark:hover:text-gray-300"
      aria-label="Toggle dark mode"
    >
      <Icon icon={faMoon} className="h-3.5 w-3.5 dark:hidden" />
      <Icon icon={faSun} className="hidden h-3.5 w-3.5 dark:inline-block" />
    </button>
  );
}
