export default function CategoryCard({
  src,
  alt,
  overlayText,
  classes,
  imgClass,
}) {
  return (
    <div className={`relative cursor-pointer group ${classes}`}>
      <div
        className="relative flex h-full flex-col overflow-hidden rounded-2xl"
      >
        <img className={`${imgClass}`} src={src} alt={alt} />
        <div
          className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 flex items-center justify-center overflow-hidden rounded-2xl"
        >
          <span className="text-white text-lg font-semibold">
            {overlayText}
          </span>
        </div>
      </div>
    </div>
  );
}
