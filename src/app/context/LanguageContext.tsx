"use client";

import { createContext, useContext, type ReactNode } from "react";
import { type Language } from "../data/translations";
import { usePathname, useRouter } from "next/navigation";

type LanguageContextValue = {
  language: Language;
  changeLanguage: (newLanguage: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

type LanguageProviderProps = {
  language: Language;
  children: ReactNode;
};

export function LanguageProvider({ language, children }: LanguageProviderProps) {
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = (newLanguage: Language) => {
    const pathWithLanguage = pathname.slice(3);
    router.push(`/${newLanguage}${pathWithLanguage}${window.location.search}`);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside <LanguageProvider>");
  }
  return context;
}
