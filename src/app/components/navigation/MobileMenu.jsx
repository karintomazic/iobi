import { Dialog } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import NavigationLinks from "./NavigationLinks";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";

export default function MobileMenu({ isOpen, onClose }) {
  const { language } = useLanguage();
  return (
    <>
      <Dialog as="div" className="lg:hidden" open={isOpen} onClose={onClose}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-white/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">IOBI</span>
              <img
                className="h-20 w-auto"
                src="/img/iobi_logo.png"
                alt="Company Logo"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
              onClick={onClose}
            >
              <span className="sr-only">Close menu</span>
              <FontAwesomeIcon
                className="h-6 w-6"
                aria-hidden="true"
                icon={faXmark}
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-700/50">
              <div className="space-y-2 py-6">
                <NavigationLinks className="-mx-3 block px-3 py-2 leading-7 hover:bg-gray-50 dark:hover:bg-gray-800" />
              </div>
              <div className="py-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <LanguageSwitcher />
                  <ThemeToggle />
                </div>
                <a
                  href="tel:+38641814262"
                  className="flex items-center gap-2 text-sm font-medium text-primary"
                >
                  <FontAwesomeIcon icon={faPhone} className="h-3 w-3" />
                  <span>{translations[language].navigation.callUs}: +386 41 814 262</span>
                </a>
                <a
                  href="https://maps.google.com/?q=Drvanja+29,+2234+Benedikt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-primary"
                >
                  <FontAwesomeIcon icon={faLocationDot} className="h-3 w-3" />
                  <span>Drvanja 29, 2234 Benedikt</span>
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
