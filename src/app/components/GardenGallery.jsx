"use client";

import { playfairDisplay } from "../utils/fonts";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const galleryImages = [
  { src: "/img/category-1.jpg", alt: "Betonska klop v vrtu", span: "lg:col-span-2" },
  { src: "/img/category-2.jpg", alt: "Fontana v vrtu", span: "" },
  { src: "/img/category-3.jpg", alt: "Okrasni kip v vrtu", span: "" },
  { src: "/img/category-4.jpg", alt: "Betonski žar v vrtu", span: "lg:col-span-2" },
];

export default function GardenGallery() {
  const { language } = useLanguage();
  const t = translations[language].gardenGallery;

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="pb-2 text-base/7 font-semibold text-primary">
            {t.subtitle}
          </h2>
          <h2 className={`text-5xl font-bold tracking-tight text-gray-900 ${playfairDisplay.className}`}>
            {t.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{t.description}</p>
        </div>
        <div className="mx-auto mt-12 sm:mt-16 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className={`relative overflow-hidden rounded-2xl bg-gray-200 ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-64 w-full object-cover object-center lg:h-72"
                onError={(e) => { e.target.style.display = "none"; }}
              />
              {/* Placeholder shown until real images are added */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 -z-10">
                <p className="text-gray-400 text-sm">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
