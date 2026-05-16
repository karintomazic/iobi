"use client";

import { useState } from "react";
import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  const navText = translations[language].navigation;

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-stone-100 dark:border-gray-800">
      <div className="h-0.5 bg-primary w-full" />
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Logo />
        </div>

        <div className="flex lg:hidden">
          <MobileMenuButton onClick={() => setMobileMenuOpen(true)} />
        </div>

        <div className="hidden lg:flex lg:gap-x-10">
          <NavigationLinks />
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <a
            href="tel:+38641814262"
            className="flex items-center gap-1.5 text-xs text-stone-400 dark:text-gray-500 hover:text-primary transition-colors duration-150"
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
