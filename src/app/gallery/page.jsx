"use client";

import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Footer from "../components/Footer";
import { playfairDisplay } from "../utils/fonts";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const allImages = [
  { src: "/img/hero_img1.jpg", alt: "Betonski okras v vrtu", w: 800, h: 600 },
  { src: "/img/category-1.jpg", alt: "Betonska klop v vrtu", w: 800, h: 600 },
  { src: "/img/hero_img2.jpg", alt: "Ročno izdelan betonski kos", w: 800, h: 600 },
  { src: "/img/category-2.jpg", alt: "Fontana v vrtu", w: 800, h: 600 },
  { src: "/img/hero_img3.jpg", alt: "Betonska dekoracija", w: 800, h: 600 },
  { src: "/img/category-3.jpg", alt: "Okrasni kip v vrtu", w: 800, h: 600 },
  { src: "/img/hero_img4.jpg", alt: "Vrtni kos iz betona", w: 800, h: 600 },
  { src: "/img/category-4.jpg", alt: "Betonski žar v vrtu", w: 800, h: 600 },
  { src: "/img/hero_img5.jpg", alt: "Ročno izdelana dekoracija", w: 800, h: 600 },
  { src: "/img/hero_img6.jpg", alt: "Betonski okras za vrt", w: 800, h: 600 },
];

export default function GalleryPage() {
  const { language } = useLanguage();
  const t = translations[language].gardenGallery;

  return (
    <>
      <main className="bg-[#EDF2E8] dark:bg-gray-900 min-h-screen">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:py-16 lg:px-8">

          {/* Header */}
          <div className="mb-10">
            <p className="text-base font-semibold text-primary mb-1">{t.subtitle}</p>
            <h1 className={`text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white ${playfairDisplay.className}`}>
              {t.title}
            </h1>
            <p className="mt-3 text-base text-stone-600 dark:text-gray-300 max-w-2xl">{t.description}</p>
          </div>

          {/* Gallery grid */}
          <Gallery>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {allImages.map((image, i) => (
                <Item
                  key={image.src}
                  original={image.src}
                  thumbnail={image.src}
                  width={image.w}
                  height={image.h}
                  alt={image.alt}
                >
                  {({ ref, open }) => (
                    <div
                      ref={ref}
                      onClick={open}
                      className={`relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 cursor-pointer group shadow-sm hover:shadow-md transition-shadow duration-300 ${
                        i === 0 || i === 6 ? "sm:col-span-2 lg:col-span-1" : ""
                      }`}
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => { e.target.parentElement.parentElement.style.display = "none"; }}
                        />
                      </div>
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                          <svg className="w-5 h-5 text-stone-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 15.803m10.607 0A7.5 7.5 0 0 1 5.196 15.803M10.5 7.5v6m3-3h-6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                </Item>
              ))}
            </div>
          </Gallery>

        </div>
      </main>
      <Footer />
    </>
  );
}
