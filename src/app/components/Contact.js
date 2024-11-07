import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <div className="relative isolate bg-white">
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Stopite v stik
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Obiščite nas ali nas pokličite
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <div>
              <h3 className="border-l border-gray-200 pl-6 font-semibold text-gray-900">
                Naslov
              </h3>
              <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                <p>Drvanja 29, 2234 Benedikt</p>
              </address>
            </div>
            <div>
              <h3 className="border-l border-gray-200 pl-6 font-semibold text-gray-900">
                Telefon
              </h3>
              <p className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                <a className="hover:text-gray-900" href="tel:+386 41 814 262">
                  +386 41 814 262
                </a>
              </p>
            </div>
            <div>
              <h3 className="border-l border-gray-200 pl-6 font-semibold text-gray-900">
                Email
              </h3>
              <div className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                <a
                  className="hover:text-gray-900"
                  href="mailto:tomazics@gmail.com"
                >
                  tomazics@gmail.com
                </a>
              </div>
            </div>
            <div>
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
