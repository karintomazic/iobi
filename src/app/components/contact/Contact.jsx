import { playfairDisplay } from "../../utils/fonts";
import {
  faEnvelope,
  faClock,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import ContactCard from "./ContactCard";

export default function Contact() {
  return (
    <div className="relative isolate">
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="pb-2 text-base/7 font-semibold text-primary">
              Obiščite nas ali nas pokličite
            </h2>
            <h2
              className={`text-5xl font-bold tracking-tight text-gray-900 ${playfairDisplay.className}`}
            >
              Kontakti
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <ContactCard
              link="https://www.google.com/maps/dir/46.5926691,15.8582616/Drvanja+29,+2234+Benedikt/@46.6149404,15.8415657,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x476f6d40fd067adf:0xe2e2db5c83e11dc3!2m2!1d15.8831273!2d46.6351533?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
              icon={faLocationDot}
              title="Naslov"
              content="Drvanja 29, 2234 Benedikt"
            />
            <ContactCard
              link="tel:+386 41 814 262"
              icon={faPhone}
              title="Telefon"
              content="+386 41 814 262"
            />
            <ContactCard
              link="mailto:tomazics@gmail.com"
              icon={faEnvelope}
              title="Email"
              content="tomazics@gmail.com"
            />
            <ContactCard
              link=""
              icon={faClock}
              title="Delovni cas"
              content="Pon - Pet: 08:00 - 17:00"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
