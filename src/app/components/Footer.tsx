"use client";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import { contact } from "@/app/data/contact";

export default function Footer() {
  const { language } = useLanguage();
  const footerText = translations[language].footerText;

  return (
    <footer className="bg-primary dark:bg-gray-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 pt-16 pb-8 text-center lg:px-8">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white">
          <img src="/img/iobi_logo.png" alt="IOBI" className="h-12 w-12 object-contain" />
        </div>
        <p className={`mb-3 font-display text-2xl font-bold text-white`}>{footerText.tagline}</p>
        <p className="mb-10 max-w-xs text-sm leading-relaxed text-white/70">
          {footerText.description}
        </p>

        <nav className="mb-10 flex flex-wrap justify-center gap-6">
          {[
            ["Domov", "/"],
            ["Izdelki", "/products"],
            ["Galerija", "/gallery"],
            ["Kontakt", "/contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="mb-12 flex flex-wrap justify-center gap-4 text-sm text-white/70 sm:gap-8">
          <a
            href={contact.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            {contact.address}
          </a>
          <span className="hidden text-white/30 sm:inline">·</span>
          <a href={contact.phoneLink} className="transition-colors hover:text-white">
            {contact.phone}
          </a>
          <span className="hidden text-white/30 sm:inline">·</span>
          <a href={contact.emailLink} className="transition-colors hover:text-white">
            {contact.email}
          </a>
        </div>

        <div className="flex w-full items-center justify-between border-t border-white/10 pt-8">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {footerText.text}
          </p>
          <a
            href={contact.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 transition-colors duration-200 hover:text-white"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
