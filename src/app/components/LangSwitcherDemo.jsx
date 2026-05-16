"use client";

import { useLanguage } from "../context/LanguageContext";

const languages = ["sl", "en", "de"];

function PillVariant({ language, changeLanguage }) {
  return (
    <div className="flex items-center gap-1">
      {languages.map((code) => (
        <button
          key={code}
          onClick={() => changeLanguage(code)}
          className={`text-sm uppercase tracking-widest px-2.5 py-1 rounded-full transition-colors duration-150 ${
            language === code
              ? "bg-primary text-white font-semibold"
              : "text-stone-400 hover:text-stone-600"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

function UnderlineVariant({ language, changeLanguage }) {
  return (
    <div className="flex items-center gap-3">
      {languages.map((code) => (
        <button
          key={code}
          onClick={() => changeLanguage(code)}
          className={`text-sm uppercase tracking-widest pb-0.5 border-b-2 transition-all duration-150 ${
            language === code
              ? "border-primary text-primary font-semibold"
              : "border-transparent text-stone-400 hover:text-stone-600"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

function OutlinedVariant({ language, changeLanguage }) {
  return (
    <div className="flex items-center gap-1.5">
      {languages.map((code) => (
        <button
          key={code}
          onClick={() => changeLanguage(code)}
          className={`text-sm uppercase tracking-widest px-2 py-0.5 rounded border transition-all duration-150 ${
            language === code
              ? "border-primary text-primary font-semibold"
              : "border-transparent text-stone-400 hover:text-stone-600"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

function SlashVariant({ language, changeLanguage }) {
  return (
    <div className="flex items-center gap-1.5 text-sm uppercase tracking-widest">
      {languages.map((code, i) => (
        <span key={code} className="flex items-center gap-1.5">
          <button
            onClick={() => changeLanguage(code)}
            className={`transition-colors duration-150 ${
              language === code
                ? "text-primary font-bold"
                : "text-stone-400 hover:text-stone-600"
            }`}
          >
            {code}
          </button>
          {i < languages.length - 1 && <span className="text-stone-300">/</span>}
        </span>
      ))}
    </div>
  );
}

export default function LangSwitcherDemo() {
  const { language, changeLanguage } = useLanguage();

  const variants = [
    { label: "1 — Pill", component: <PillVariant language={language} changeLanguage={changeLanguage} /> },
    { label: "2 — Underline", component: <UnderlineVariant language={language} changeLanguage={changeLanguage} /> },
    { label: "3 — Outlined", component: <OutlinedVariant language={language} changeLanguage={changeLanguage} /> },
    { label: "4 — Slash", component: <SlashVariant language={language} changeLanguage={changeLanguage} /> },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white rounded-2xl shadow-xl border border-gray-100 px-6 py-4 flex items-center gap-8">
      {variants.map(({ label, component }) => (
        <div key={label} className="flex flex-col items-center gap-2">
          <span className="text-[10px] text-stone-400 font-medium">{label}</span>
          {component}
        </div>
      ))}
    </div>
  );
}
