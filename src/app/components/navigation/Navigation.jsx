"use client";

import { useState } from "react";
import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  const navText = translations[language].navigation;

  return (
    <section>
      <div className="bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-1.5 flex justify-end items-center gap-6">
          <a
            href="https://maps.google.com/?q=Drvanja+29,+2234+Benedikt"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 text-white text-sm hover:text-white/80 transition-colors duration-150"
          >
            <FontAwesomeIcon icon={faLocationDot} className="h-3 w-3" />
            <span>Drvanja 29, 2234 Benedikt</span>
          </a>
          <a
            href="tel:+38641814262"
            className="flex items-center gap-2 text-white text-sm hover:text-white/80 transition-colors duration-150"
          >
            <FontAwesomeIcon icon={faPhone} className="h-3 w-3" />
            <span>{navText.callUs}: +386 41 814 262</span>
          </a>
        </div>
      </div>
      <header className="bg-white">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Logo />
          </div>

          <div className="flex lg:hidden">
            <MobileMenuButton onClick={() => setMobileMenuOpen(true)} />
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            <NavigationLinks className="leading-6" />
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <LanguageSwitcher />
          </div>
        </nav>

        <MobileMenu
          onClose={() => setMobileMenuOpen(false)}
          isOpen={mobileMenuOpen}
        />
      </header>
    </section>
  );
}
