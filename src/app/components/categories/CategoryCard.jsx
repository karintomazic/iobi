export default function CategoryCard({
  title,
  description,
  image,
  alt,
  aspect,
}) {
  return (
    <div
      className={`group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg ${aspect}`}
    >
      <img
        src={image}
        alt={alt}
        className="object-cover object-center group-hover:opacity-75"
      />
      <div
        aria-hidden="true"
        className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
      />
      <div className="flex items-end p-6 sm:absolute sm:inset-0">
        <div>
          <h3 className="font-semibold text-white">
            <a href="#">
              <span className="absolute inset-0" />
              {title}
            </a>
          </h3>
          <p aria-hidden="true" className="mt-1 text-sm text-white">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
