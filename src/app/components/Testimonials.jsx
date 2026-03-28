"use client";

import { playfairDisplay } from "../utils/fonts";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const testimonials = [
  {
    name: "Marija K.",
    location: "Maribor",
    quote:
      "Izjemna kakovost! Betonska klop, ki smo jo kupili, je že dve leti v vrtu in izgleda kot nova. Stojan je bil zelo prijazen in nam pomagal izbrati pravo velikost.",
    rating: 5,
  },
  {
    name: "Peter N.",
    location: "Benedikt",
    quote:
      "Naročil sem fontano in žar. Dostava je bila hitra, pakiranje vrhunsko. Sosedje me vsako poletje sprašujejo, kje sem ju kupil. Priporočam vsem!",
    rating: 5,
  },
  {
    name: "Ana M.",
    location: "Ptuj",
    quote:
      "Lepi izdelki po zelo dostopnih cenah. Vrt je dobil popolnoma novo podobo. Zagotovo bom naročila še kakšen kip.",
    rating: 5,
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5 text-primary">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { language } = useLanguage();
  const t = translations[language].testimonials;

  return (
    <section id="testimonials" className="bg-white dark:bg-gray-800 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="pb-2 text-base/7 font-semibold text-primary">
            {t.subtitle}
          </h2>
          <h2 className={`text-5xl font-bold tracking-tight text-gray-900 dark:text-white ${playfairDisplay.className}`}>
            {t.title}
          </h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-4 rounded-2xl bg-gray-50 dark:bg-gray-700 p-6 border border-gray-100 dark:border-gray-600"
            >
              <StarRating count={t.rating} />
              <p className="text-gray-600 dark:text-gray-300 leading-7 flex-1">"{t.quote}"</p>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{t.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
