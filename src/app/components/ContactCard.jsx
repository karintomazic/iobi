import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactCard({ link, icon, title, content }) {
  const wrapperClass =
    "bg-white hover:scale-110 transform transition-transform cursor-pointer duration-100 rounded-lg p-4 flex items-center gap-6 lg:flex-col flex-row";
  return (
    <>
      <a className={wrapperClass} href={link} target="_blank">
        <div>
          <FontAwesomeIcon icon={icon} className="text-primary w-10" />
        </div>
        <div className="lg:text-center text-left">
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <address className="pt-2 not-italic text-gray-600">
            <p>{content}</p>
          </address>
        </div>
      </a>
    </>
  );
}
