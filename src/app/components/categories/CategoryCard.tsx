import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";

type CategoryCardProps = {
  src: string;
  alt: string;
  overlayText: string;
  description?: string;
  classes?: string;
  href: string;
};

export default function CategoryCard({
  src,
  alt,
  overlayText,
  description,
  classes,
  href,
}: CategoryCardProps) {
  const { language } = useLanguage();
  const t = translations[language].categories;

  return (
    <Link href={href} className={`group relative block h-full min-h-[220px] ${classes ?? ""}`}>
      <div className="relative h-full overflow-hidden rounded-2xl">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />

        <div className="absolute right-0 bottom-0 left-0 p-5">
          {description && (
            <p className="mb-2 text-xs tracking-widest text-white/60 uppercase">{description}</p>
          )}
          <div className="flex items-center justify-between">
            <span className="text-xl font-semibold text-white drop-shadow-sm">{overlayText}</span>
            <span className="translate-x-2 rounded-full bg-white/20 px-3 py-1 text-xs whitespace-nowrap text-white opacity-0 backdrop-blur-xs transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              {t.viewCategory} &rarr;
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
