export default function ImageCard({ src, alt }) {
  return (
    <div className="relative">
      <img
        src={src}
        alt={alt || ""}
        className="aspect-[2/3] w-full rounded-2xl object-cover shadow-lg"
      />
    </div>
  );
}
