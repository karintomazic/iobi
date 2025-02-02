import { useLanguage } from "../../context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="text-sm font-semibold leading-6 text-gray-900"
    >
      {language === "sl" ? "Slovensko" : "Deutsch"}
    </button>
  );
}
