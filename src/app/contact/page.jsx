"use client";

import Footer from "../components/Footer";
import { playfairDisplay } from "../utils/fonts";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import ContactCard from "../components/contact/ContactCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faClock,
  faLocationDot,
  faPhone,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

const MAPS_URL =
  "https://www.google.com/maps/dir/46.5926691,15.8582616/Drvanja+29,+2234+Benedikt/@46.6149404,15.8415657,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x476f6d40fd067adf:0xe2e2db5c83e11dc3!2m2!1d15.8831273!2d46.6351533?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D";

export default function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language].contact;

  return (
    <>
      <main className="bg-[#EDF2E8] dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:py-16 lg:px-8">

          {/* Header */}
          <div className="mb-10 max-w-2xl">
            <p className="text-base font-semibold text-primary mb-1">{t.subtitle}</p>
            <h1 className={`text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white ${playfairDisplay.className}`}>
              {t.title}
            </h1>
            <p className="mt-3 text-base text-stone-600 dark:text-gray-300">{t.description}</p>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

            {/* Contact cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 content-start">
              <ContactCard
                link={MAPS_URL}
                icon={faLocationDot}
                title={t.adress}
                content="Drvanja 29, 2234 Benedikt"
              />
              <ContactCard
                link="tel:+38641814262"
                icon={faPhone}
                title={t.phone}
                content="+386 41 814 262"
              />
              <ContactCard
                link="mailto:tomazics@gmail.com"
                icon={faEnvelope}
                title={t.email}
                content="tomazics@gmail.com"
              />
              <ContactCard
                link=""
                icon={faClock}
                title={t.workHours}
                content={t.workHoursContent}
              />
            </div>

            {/* Map card */}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl bg-white dark:bg-gray-800 border border-stone-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
            >
              <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center px-8 py-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                  <FontAwesomeIcon icon={faLocationDot} className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">Drvanja 29</p>
                  <p className="text-stone-500 dark:text-gray-300 text-sm mt-0.5">2234 Benedikt, Slovenija</p>
                </div>
                <div className="mt-2 inline-flex items-center gap-2 rounded-full border-2 border-primary text-primary px-5 py-2 text-sm font-semibold group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                  <span>{t.directionsLabel}</span>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-3 w-3" />
                </div>
              </div>
            </a>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
