import { useState } from "react";
export default function LanguageSwitcher() {
  const [language, setLanguage] = useState("sl");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "sl" ? "de" : "sl"));
  };

  return (
    <button
      onClick={toggleLanguage}
      className="text-sm font-semibold leading-6 text-gray-900"
    >
      {language === "sl" ? "Slovensko" : "German"}
    </button>
  );
}
