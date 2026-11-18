"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { isLanguage, type Language } from "../data/translations";

type LanguageContextValue = {
  language: Language;
  changeLanguage: (newLanguage: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("sl");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (isLanguage(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
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
