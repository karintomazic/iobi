"use client";

import { useState, useEffect } from "react";
import NavigationLinks from "./NavigationLinks";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 lg:px-8 ${
        scrolled ? "pt-0 pb-0" : "pt-3 pb-1"
      }`}
    >
      <nav
        className={`relative mx-auto max-w-7xl flex items-center justify-between px-4 lg:px-5 py-2 rounded-full transition-all duration-300 ${
          scrolled
            ? "shadow-md shadow-black/10 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md"
            : "shadow-md shadow-black/5 bg-white dark:bg-gray-900"
        }`}
        aria-label="Global"
      >
        <a href="/" className="flex-shrink-0">
          <div className="w-11 h-11 rounded-full bg-[#EEF2E8] dark:bg-gray-800 flex items-center justify-center">
            <img src="/img/iobi_logo.png" alt="IOBI" className="h-8 w-8 object-contain" />
          </div>
        </a>

        <div className="flex lg:hidden">
          <MobileMenuButton onClick={() => setMobileMenuOpen(true)} />
        </div>

        <div className="hidden lg:flex lg:gap-x-8 absolute left-1/2 -translate-x-1/2">
          <NavigationLinks />
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+38641814262"
            className="flex items-center gap-1.5 text-sm text-stone-400 dark:text-gray-500 hover:text-primary transition-colors duration-150"
          >
            <FontAwesomeIcon icon={faPhone} className="h-2.5 w-2.5" />
            <span>+386 41 814 262</span>
          </a>
          <span className="w-px h-4 bg-stone-200 dark:bg-gray-700" />
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </nav>

      <MobileMenu
        onClose={() => setMobileMenuOpen(false)}
        isOpen={mobileMenuOpen}
      />
    </header>
  );
}
