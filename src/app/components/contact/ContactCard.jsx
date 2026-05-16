import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactCard({ link, icon, title, content }) {
  const wrapperClass =
    "group rounded-2xl border border-stone-100 dark:border-gray-700 bg-[#EDF2E8] dark:bg-gray-800 p-6 flex flex-col items-center text-center gap-3 hover:border-primary/40 hover:shadow-sm transition-all duration-200";

  const inner = (
    <>
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
        <FontAwesomeIcon icon={icon} className="text-primary w-4 h-4" />
      </div>
      <div>
        <h3 className="text-xs tracking-[0.15em] uppercase text-stone-400 dark:text-gray-400 font-medium mb-1">{title}</h3>
        <p className="text-stone-700 dark:text-gray-200 font-medium text-sm">{content}</p>
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
