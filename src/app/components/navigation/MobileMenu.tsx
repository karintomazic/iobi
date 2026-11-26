import Link from "next/link";
import { Dialog, DialogPanel } from "@headlessui/react";
import Icon from "../Icon";
import { faXmark, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import NavigationLinks from "./NavigationLinks";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";
import { contact } from "@/app/data/contact";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { language } = useLanguage();
  return (
    <>
      <Dialog as="div" className="lg:hidden" open={isOpen} onClose={onClose}>
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900 dark:sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={onClose}>
              <img className="h-20 w-auto" src="/img/iobi_logo.png" alt="IOBI" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
              onClick={onClose}
            >
              <span className="sr-only">{translations[language].navigation.closeMenu}</span>
              <Icon className="h-6 w-6" aria-hidden="true" icon={faXmark} />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-700/50">
              <div className="space-y-2 py-6">
                <NavigationLinks
                  className="-mx-3 block px-3 py-2 leading-7 hover:bg-gray-50 dark:hover:bg-gray-800"
                  onNavigate={onClose}
                />
              </div>
              <div className="flex flex-col gap-4 py-6">
                <LanguageSwitcher />
                <a
                  href={contact.phoneLink}
                  className="flex items-center gap-2 text-sm font-medium text-primary"
                >
                  <Icon icon={faPhone} className="h-3 w-3" />
                  <span>
                    {translations[language].navigation.callUs}: {contact.phone}
                  </span>
                </a>
                <a
                  href={contact.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-primary"
                >
                  <Icon icon={faLocationDot} className="h-3 w-3" />
                  <span>{contact.address}</span>
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}
