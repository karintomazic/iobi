"use client";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import { playfairDisplay } from "../utils/fonts";

export default function Footer() {
  const { language } = useLanguage();
  const footerText = translations[language].footerText;

  return (
    <footer className="bg-[#7A9A6B] dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-8 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6">
          <img src="/img/iobi_logo.png" alt="IOBI" className="h-12 w-12 object-contain" />
        </div>
        <p className={`text-2xl font-bold text-white mb-3 ${playfairDisplay.className}`}>Ročno z ljubeznijo</p>
        <p className="text-sm text-white/70 max-w-xs leading-relaxed mb-10">
          Ročno izdelani betonski okrasni izdelki iz Benedikta v Slovenskih goricah.
        </p>

        <nav className="flex flex-wrap justify-center gap-6 mb-10">
          {[["Domov", "/"], ["Izdelki", "/products"], ["Galerija", "/gallery"], ["Kontakt", "/contact"]].map(([label, href]) => (
            <a key={href} href={href} className="text-sm text-white/70 hover:text-white transition-colors duration-200">{label}</a>
          ))}
        </nav>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm text-white/70 mb-12">
          <a href="https://maps.google.com/?q=Drvanja+29,+2234+Benedikt" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Drvanja 29, 2234 Benedikt</a>
          <span className="text-white/30 hidden sm:inline">·</span>
          <a href="tel:+38641814262" className="hover:text-white transition-colors">+386 41 814 262</a>
          <span className="text-white/30 hidden sm:inline">·</span>
          <a href="mailto:tomazics@gmail.com" className="hover:text-white transition-colors">tomazics@gmail.com</a>
        </div>

        <div className="w-full border-t border-white/10 pt-8 flex items-center justify-between">
          <p className="text-xs text-white/50">{footerText.text}</p>
          <a href="https://www.facebook.com/tomazicstojan/?locale=sl_SI" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors duration-200" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
