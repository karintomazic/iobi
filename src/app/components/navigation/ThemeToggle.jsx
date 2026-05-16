"use client";

import { useTheme } from "../../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="text-stone-400 dark:text-gray-500 hover:text-stone-600 dark:hover:text-gray-300 transition-colors duration-150"
      aria-label="Toggle dark mode"
    >
      <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} className="h-3.5 w-3.5" />
    </button>
  );
}
