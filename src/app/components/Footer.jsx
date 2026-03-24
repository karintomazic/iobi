"use client";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function Footer() {
  const { language } = useLanguage();
  const footerText = translations[language].footerText;

  return (
    <footer className="bg-white border-t border-gray-100" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <p className="text-xs leading-5 text-gray-500 text-center">{footerText.text}</p>
      </div>
    </footer>
  );
}
