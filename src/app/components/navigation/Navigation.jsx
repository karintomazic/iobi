"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import NavigationLinks from "./NavigationLinks";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import Icon from "../Icon";
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
      className={`fixed top-0 right-0 left-0 z-50 px-4 transition-all duration-300 lg:px-8 ${
        scrolled ? "pt-0 pb-0" : "pt-3 pb-1"
      }`}
    >
      <nav
        className={`relative mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-2 transition-all duration-300 lg:px-5 ${
          scrolled
            ? "bg-white/95 shadow-md shadow-black/10 backdrop-blur-md dark:bg-gray-900/95"
            : "bg-white shadow-md shadow-black/5 dark:bg-gray-900"
        }`}
        aria-label="Global"
      >
        <Link href="/" className="shrink-0">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-surface dark:bg-gray-800">
            <img src="/img/iobi_logo.png" alt="IOBI" className="h-8 w-8 object-contain" />
          </div>
        </Link>

        <div className="flex lg:hidden">
          <MobileMenuButton onClick={() => setMobileMenuOpen(true)} />
        </div>

        <div className="absolute left-1/2 hidden -translate-x-1/2 lg:flex lg:gap-x-8">
          <NavigationLinks />
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+38641814262"
            className="flex items-center gap-1.5 text-sm text-stone-400 transition-colors duration-150 hover:text-primary dark:text-gray-500"
          >
            <Icon icon={faPhone} className="h-2.5 w-2.5" />
            <span>+386 41 814 262</span>
          </a>
          <span className="h-4 w-px bg-stone-200 dark:bg-gray-700" />
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </nav>

      <MobileMenu onClose={() => setMobileMenuOpen(false)} isOpen={mobileMenuOpen} />
    </header>
  );
}
