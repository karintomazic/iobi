import Link from "next/link";

export default function CategoryCard({ src, alt, overlayText, description, classes, href }) {
  return (
    <Link href={href} className={`relative group h-full min-h-[220px] block ${classes}`}>
      <div className="relative h-full overflow-hidden rounded-2xl">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-5">
          {description && (
            <p className="text-white/60 text-xs uppercase tracking-widest mb-2">{description}</p>
          )}
          <div className="flex items-center justify-between">
            <span className="text-white text-xl font-semibold drop-shadow">
              {overlayText}
            </span>
            <span className="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs whitespace-nowrap">
              Poglej &rarr;
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
