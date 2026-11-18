import Icon from "../Icon";
import { faBars } from "@fortawesome/free-solid-svg-icons";

type MobileMenuButtonProps = {
  onClick: () => void;
};
export default function MobileMenuButton({ onClick }: MobileMenuButtonProps) {
  return (
    <>
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
        onClick={onClick}
      >
        <span className="sr-only">Open main menu</span>
        <Icon className="h-6 w-6" aria-hidden="true" icon={faBars} />
      </button>
    </>
  );
}
