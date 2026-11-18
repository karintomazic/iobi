import Icon from "../Icon";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type ContactCardProps = {
  link?: string;
  icon: IconDefinition;
  title: string;
  content: string;
};

export default function ContactCard({ link, icon, title, content }: ContactCardProps) {
  const wrapperClass =
    "group rounded-2xl border border-stone-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 flex flex-col items-center text-center gap-3 hover:border-primary/40 hover:shadow-md transition-all duration-200";

  const inner = (
    <>
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
        <Icon icon={icon} className="h-4 w-4 text-primary" />
      </div>
      <div>
        <h3 className="mb-1 text-xs font-medium tracking-[0.15em] text-stone-400 uppercase dark:text-gray-400">
          {title}
        </h3>
        <p className="text-sm font-medium text-stone-700 dark:text-gray-200">{content}</p>
      </div>
    </>
  );

  if (!link) {
    return <div className={wrapperClass}>{inner}</div>;
  }

  return (
    <a
      className={`${wrapperClass} cursor-pointer`}
      href={link}
      rel="noopener noreferrer"
      target="_blank"
    >
      {inner}
    </a>
  );
}
