import Link from "next/link";

export default function CategoryCard({
  src,
  alt,
  overlayText,
  classes,
  imgClass,
  href,
}) {
  return (
    <Link href={href} className={`relative group ${classes}`}>
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl">
        <img
          className={`${imgClass} transition-transform duration-500 ease-in-out group-hover:scale-105`}
          src={src}
          alt={alt}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent rounded-2xl transition-opacity duration-300 group-hover:opacity-80" />
        <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
          <span className="text-white text-xl font-semibold drop-shadow">
            {overlayText}
          </span>
          <span className="text-white/80 text-sm font-medium translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
            &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
