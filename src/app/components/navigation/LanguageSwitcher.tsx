"use client";

import { useLanguage } from "../../context/LanguageContext";
import { languages } from "../../data/translations";

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1.5 text-sm tracking-widest uppercase">
      {languages.map((code, i) => (
        <span key={code} className="flex items-center gap-1.5">
          <button
            onClick={() => changeLanguage(code)}
            className={`transition-colors duration-150 ${
              language === code
                ? "font-bold text-primary"
                : "font-medium text-stone-400 hover:text-stone-600 dark:text-gray-500 dark:hover:text-gray-300"
            }`}
          >
            {code}
          </button>
          {i < languages.length - 1 && <span className="text-stone-200 dark:text-gray-700">|</span>}
        </span>
      ))}
    </div>
  );
}
