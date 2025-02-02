"use client";

import navigationData from "../../data/navigation.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../../context/LanguageContext";

export default function NavigationLinks({ className }) {
  const pathname = usePathname();
  const { language } = useLanguage();

  console.log(language);

  return (
    <>
      {navigationData.map((item) => {
        const isActive = pathname === item.href;
        const linkText = item.name[language] || item.name.sl;

        return (
          <Link
            key={item.id}
            href={item.href}
            className={`pb-1 text-base font-semibold text-gray-900 text-[1.2rem] border-b-[3px] hover:border-primary transition-all duration-100 ease ${className} ${
              isActive ? "border-primary" : "border-transparent"
            }`}
          >
            {linkText}
          </Link>
        );
      })}
    </>
  );
}

