"use client";

import navigationData from "../../data/navigation.json";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationLinks({ className }) {
  const pathname = usePathname();

  return (
    <>
      {navigationData.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`pb-1 text-base font-semibold text-gray-900 text-[1.2rem] border-b-[3px] hover:border-primary transition-all duration-100 ease ${className} ${
              isActive ? "border-primary" : "border-transparent"
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </>
  );
}
