"use client";

import Navigation from "../components/navigation/Navigation";
import Footer from "../components/Footer";
import { playfairDisplay } from "../utils/fonts";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const allImages = [
  { src: "/img/category-1.jpg", alt: "Betonska klop v vrtu" },
  { src: "/img/category-2.jpg", alt: "Fontana v vrtu" },
  { src: "/img/category-3.jpg", alt: "Okrasni kip v vrtu" },
  { src: "/img/category-4.jpg", alt: "Betonski žar v vrtu" },
  { src: "/img/category-5.jpg", alt: "Betonska fontana" },
  { src: "/img/category-6.jpg", alt: "Okrasni kipec" },
];

export default function GalleryPage() {
  const { language } = useLanguage();
  const t = translations[language].gardenGallery;

  return (
    <>
      <section className="bg-gray-50">
        <Navigation />
      </section>
      <main className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="mb-12">
            <h2 className="pb-2 text-base/7 font-semibold text-primary">
              {t.subtitle}
            </h2>
            <h2 className={`text-5xl font-bold tracking-tight text-gray-900 ${playfairDisplay.className}`}>
              {t.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">{t.description}</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {allImages.map((image) => (
              <div
                key={image.src}
                className="relative overflow-hidden rounded-2xl bg-gray-200 aspect-[4/3]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-300"
                  onError={(e) => { e.target.style.display = "none"; }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 -z-10">
                  <p className="text-gray-400 text-sm">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
