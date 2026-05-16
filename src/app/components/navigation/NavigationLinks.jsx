"use client";

import navigationData from "../../data/navigation.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../../context/LanguageContext";

export default function NavigationLinks({ className }) {
  const pathname = usePathname();
  const { language } = useLanguage();

  return (
    <>
      {navigationData.map((item) => {
        const isActive = pathname === item.href;
        const linkText = item.name[language] || item.name.sl;

        return (
          <Link
            key={item.id}
            href={item.href}
            className={`pb-0.5 text-base font-medium tracking-wide text-stone-600 dark:text-gray-300 border-b-2 hover:text-primary hover:border-primary transition-all duration-150 ${className} ${
              isActive ? "border-primary text-primary" : "border-transparent"
            }`}
          >
            {linkText}
          </Link>
        );
      })}
    </>
  );
}

