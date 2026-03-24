import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactCard({ link, icon, title, content }) {
  const wrapperClass =
    "bg-white hover:scale-110 transform transition-transform duration-100 rounded-lg p-4 flex items-center gap-4 lg:flex-col flex-row";

  const inner = (
    <>
      <div>
        <FontAwesomeIcon icon={icon} className="text-primary w-10 h-8" />
      </div>
      <div className="lg:text-center text-left">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <address className="pt-0 md:pt-2 not-italic text-gray-600">
          <p>{content}</p>
        </address>
      </div>
    </>
  );

  if (!link) {
    return <div className={wrapperClass}>{inner}</div>;
  }

  return (
    <a className={`${wrapperClass} cursor-pointer`} href={link} rel="noopener noreferrer" target="_blank">
      {inner}
    </a>
  );
}
