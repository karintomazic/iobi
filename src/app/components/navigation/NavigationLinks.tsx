"use client";

import navigationData from "../../data/navigation.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../../context/LanguageContext";

type NavigationLinksProps = {
  className?: string;
  onNavigate?: () => void;
};

export default function NavigationLinks({ className, onNavigate }: NavigationLinksProps) {
  const pathname = usePathname();
  const { language } = useLanguage();

  return (
    <>
      {navigationData.map((item) => {
        const href = item.href === "/" ? `/${language}` : `/${language}${item.href}`;
        const isActive = pathname === href;
        const linkText = item.name[language];

        return (
          <Link
            key={item.id}
            href={href}
            onClick={onNavigate}
            className={`border-b-2 pb-0.5 text-base font-medium tracking-wide text-stone-600 transition-all duration-150 hover:border-primary hover:text-primary dark:text-gray-300 ${className ?? ""} ${
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
