export default function ImageCard({ src }) {
  return (
    <div className="relative transform transition-transform hover:scale-110 cursor-pointer">
      <img
        src={src}
        alt=""
        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
      />
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
    </div>
  );
}
