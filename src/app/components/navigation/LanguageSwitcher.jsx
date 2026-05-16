"use client";

import { useLanguage } from '../../context/LanguageContext';

const languages = ['sl', 'en', 'de'];

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1.5 text-xs tracking-widest uppercase">
      {languages.map((code, i) => (
        <span key={code} className="flex items-center gap-1.5">
          <button
            onClick={() => changeLanguage(code)}
            className={`transition-colors duration-150 ${
              language === code
                ? 'text-primary font-bold'
                : 'text-stone-400 dark:text-gray-500 font-medium hover:text-stone-600 dark:hover:text-gray-300'
            }`}
          >
            {code}
          </button>
          {i < languages.length - 1 && (
            <span className="text-stone-200 dark:text-gray-700">|</span>
          )}
        </span>
      ))}
    </div>
  );
}
