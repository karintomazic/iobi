"use client";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function Footer() {
  const { language } = useLanguage();
  const footerText = translations[language].footerText;

  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-10 sm:pt-10 lg:px-8 lg:pt-10">
        <p className="text-xs leading-5 text-gray-500">{footerText.text}</p>
      </div>
    </footer>
  );
}
