"use client";

import { playfairDisplay } from "../../utils/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faClock, faLocationDot, faPhone, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";

function ContactItem({ icon, title, content, link }) {
  const inner = (
    <div className="flex items-start gap-4">
      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
        <FontAwesomeIcon icon={icon} className="text-primary w-3.5 h-3.5" />
      </div>
      <div>
        <p className="text-xs tracking-[0.15em] uppercase text-stone-400 dark:text-gray-500 font-medium mb-1">{title}</p>
        <p className="text-stone-800 dark:text-white font-medium">{content}</p>
      </div>
    </div>
  );

  if (!link) return <div>{inner}</div>;
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity duration-150 block">
      {inner}
    </a>
  );
}

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;

  return (
    <section className="bg-white dark:bg-gray-900 py-16 sm:py-24" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 rounded-3xl overflow-hidden shadow-sm">

          {/* Left dark panel */}
          <div className="lg:col-span-2 bg-[#7A9A6B] p-10 lg:p-14 flex flex-col justify-between min-h-[320px]">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-white/30 mb-4">{t.subtitle}</p>
              <h2 className={`text-4xl lg:text-5xl font-bold text-white leading-tight ${playfairDisplay.className}`}>
                {t.title}
              </h2>
              <p className="mt-5 text-white/50 text-sm leading-relaxed max-w-xs">
                {t.description}
              </p>
            </div>
            <a
              href="https://www.google.com/maps/dir/46.5926691,15.8582616/Drvanja+29,+2234+Benedikt/@46.6149404,15.8415657,13z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200 mt-10 group"
            >
              <span>{t.directionsLabel}</span>
              <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>

          {/* Right contact details */}
          <div className="lg:col-span-3 bg-[#F8F5F0] dark:bg-gray-800 p-10 lg:p-14 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
            <ContactItem
              icon={faLocationDot}
              title={t.adress}
              content="Drvanja 29, 2234 Benedikt"
              link="https://www.google.com/maps/dir/46.5926691,15.8582616/Drvanja+29,+2234+Benedikt/@46.6149404,15.8415657,13z"
            />
            <ContactItem
              icon={faPhone}
              title={t.phone}
              content="+386 41 814 262"
              link="tel:+38641814262"
            />
            <ContactItem
              icon={faEnvelope}
              title={t.email}
              content="tomazics@gmail.com"
              link="mailto:tomazics@gmail.com"
            />
            <ContactItem
              icon={faClock}
              title={t.workHours}
              content={t.workHoursContent}
              link=""
            />
          </div>

        </div>
      </div>
    </section>
  );
}
