import { useState, useEffect } from "react"; // Import useState
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import ImageWithLoader from "./ImageWithLoader";

export default function ProductCards({ items }) {
  return (
    <Gallery>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {items.map((item) => (
          <ImageWithLoader key={item.id} item={item} />
        ))}
      </div>
    </Gallery>
  );
}
