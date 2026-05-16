import { Gallery } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import ImageWithLoader from "./ImageWithLoader";

export default function ProductCards({ items }) {
  return (
    <Gallery>
      <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <ImageWithLoader key={item.id} item={item} />
        ))}
      </div>
    </Gallery>
  );
}
