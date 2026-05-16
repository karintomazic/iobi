"use client";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function Footer() {
  const { language } = useLanguage();
  const footerText = translations[language].footerText;

  return (
    <footer className="bg-[#7A9A6B] dark:bg-gray-950" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          <div>
            <img src="/img/iobi_logo.png" alt="IOBI" className="h-16 w-auto brightness-0 invert opacity-90" />
            <p className="mt-4 text-sm text-white/40 leading-relaxed max-w-xs">
              Ročno izdelani betonski okrasni izdelki iz Benedikta v Slovenskih goricah.
            </p>
          </div>

          <div>
            <h3 className="text-xs tracking-[0.18em] uppercase text-white/30 mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm text-white/50">
              <li>
                <a href="https://maps.google.com/?q=Drvanja+29,+2234+Benedikt" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">
                  Drvanja 29, 2234 Benedikt
                </a>
              </li>
              <li>
                <a href="tel:+38641814262" className="hover:text-white/80 transition-colors">+386 41 814 262</a>
              </li>
              <li>
                <a href="mailto:tomazics@gmail.com" className="hover:text-white/80 transition-colors">tomazics@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs tracking-[0.18em] uppercase text-white/30 mb-4">Strani</h3>
            <ul className="space-y-2 text-sm text-white/50">
              <li><a href="/" className="hover:text-white/80 transition-colors">Domov</a></li>
              <li><a href="/products" className="hover:text-white/80 transition-colors">Izdelki</a></li>
              <li><a href="/gallery" className="hover:text-white/80 transition-colors">Galerija</a></li>
              <li><a href="/contact" className="hover:text-white/80 transition-colors">Kontakt</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex items-center justify-between">
          <p className="text-xs text-white/25">{footerText.text}</p>
          <a
            href="https://www.facebook.com/tomazicstojan/?locale=sl_SI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/25 hover:text-white/60 transition-colors duration-200"
            aria-label="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
