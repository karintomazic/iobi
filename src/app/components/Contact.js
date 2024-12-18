import { playfairDisplay } from "../layout";

export default function Contact() {
  return (
    <div className="relative isolate bg-white">
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2
              className={`text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl ${playfairDisplay.className}`}
            >
              Stopite v stik
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Obiščite nas ali nas pokličite
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <a
              className="bg-white hover:bg-gray-200 cursor-pointer transition-colors duration-100 rounded-lg py-4"
              href="https://www.google.com/maps/dir/46.5926691,15.8582616/Drvanja+29,+2234+Benedikt/@46.6149404,15.8415657,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x476f6d40fd067adf:0xe2e2db5c83e11dc3!2m2!1d15.8831273!2d46.6351533?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              <h3 className="border-l border-gray-200 pl-6 font-semibold text-gray-900">
                Naslov
              </h3>
              <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                <p>Drvanja 29, 2234 Benedikt</p>
              </address>
            </a>

            <a
              href="tel:+386 41 814 262"
              className="bg-white hover:bg-gray-200 cursor-pointer transition-colors duration-100 rounded-lg py-4"
            >
              <h3 className="border-l border-gray-200 pl-6 font-semibold text-gray-900">
                Telefon
              </h3>
              <div className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                <div className="hover:text-gray-900">+386 41 814 262</div>
              </div>
            </a>

            <a
              href="mailto:tomazics@gmail.com"
              className="bg-white hover:bg-gray-200 cursor-pointer transition-colors duration-100 rounded-lg py-4"
            >
              <h3 className="border-l border-gray-200 pl-6 font-semibold text-gray-900">
                Email
              </h3>
              <div className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                <div className="hover:text-gray-900">tomazics@gmail.com</div>
              </div>
            </a>

            <div className="bg-white hover:bg-gray-200 cursor-pointer transition-colors duration-100 rounded-lg py-4">
              <h3 className="border-l border-gray-200 pl-6 font-semibold text-gray-900">
                Delovni cas
              </h3>
              <div className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                <p>Pon - Pet: 08:00 - 17:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
