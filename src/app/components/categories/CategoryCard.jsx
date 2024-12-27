export default function CategoryCard({
  src,
  alt,
  overlayText,
  classes1,
  classes2,
  imgClass,
}) {
  return (
    <div className={`relative cursor-pointer group ${classes1}`}>
      <div
        className={`relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] ${classes2}`}
      >
        <img className={`${imgClass}`} src={src} alt={alt} />
        <div
          className={`absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 flex items-center justify-center overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] ${classes2}`}
        >
          <span className="text-white text-lg font-semibold">
            {overlayText}
          </span>
        </div>
      </div>
    </div>
  );
}
