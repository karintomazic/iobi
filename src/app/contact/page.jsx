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
      <main className="bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          {/* Header */}
          <div className="mb-12 max-w-2xl">
            <h2 className="pb-2 text-base/7 font-semibold text-primary">
              {t.subtitle}
            </h2>
            <h1
              className={`text-5xl font-bold tracking-tight text-gray-900 dark:text-white ${playfairDisplay.className}`}
            >
              {t.title}
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{t.description}</p>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
              className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
            >
              <div className="bg-primary/10 dark:bg-primary/20 px-8 pt-10 pb-6 flex-1 flex flex-col items-center justify-center gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 dark:bg-primary/30">
                  <FontAwesomeIcon icon={faLocationDot} className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">Drvanja 29</p>
                  <p className="text-gray-600 dark:text-gray-300">2234 Benedikt</p>
                  <p className="text-gray-600 dark:text-gray-300">Slovenija</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 bg-primary px-6 py-4 text-sm font-medium text-white group-hover:bg-secondary transition-colors duration-150">
                <span>{t.directionsLabel}</span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-3.5 w-3.5" />
              </div>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
