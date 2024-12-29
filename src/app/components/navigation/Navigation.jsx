"use client";

import { useState } from "react";
import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section>
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
