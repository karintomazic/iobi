import { Dialog } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import NavigationLinks from "./NavigationLinks";
import LanguageSwitcher from "./LanguageSwitcher";
export default function MobileMenu({ isOpen, onClose }) {
  return (
    <>
      <Dialog as="div" className="lg:hidden" open={isOpen} onClose={onClose}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-20 w-auto"
                src="/img/iobi_logo.png"
                alt="Company Logo"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
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
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NavigationLinks className="-mx-3 block rounded-lg px-3 py-2 leading-7 hover:bg-gray-50" />
              </div>
              <div className="py-6">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}

