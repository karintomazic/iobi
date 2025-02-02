import { useState, useEffect } from "react";
import { Item } from "react-photoswipe-gallery";

export default function ImageWithLoader({ item }) {
  const [isLoading, setIsLoading] = useState(true);
  const [dimensions, setDimensions] = useState(null);
  const imageUrl = `http://localhost:${process.env.NEXT_PUBLIC_PB_LOCAL_PORT}/api/files/${item.collectionId}/${item.id}/${item.product_image}`;

  // Calculate image dimensions on mount
  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      setDimensions({ width: img.naturalWidth, height: img.naturalHeight });
    };
    // Optionally handle errors if needed
    img.onerror = (error) => {
      console.error("Failed to load image for dimensions", error);
    };
  }, [imageUrl]);

  return (
    <div className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        {dimensions ? (
          <Item
            original={imageUrl}
            thumbnail={imageUrl}
            width={dimensions.width}
            height={dimensions.height}
          >
            {({ ref, open }) => (
              <div className="relative h-full w-full">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
                  </div>
                )}
                <img
                  ref={ref}
                  onClick={open}
                  src={imageUrl}
                  alt={item.product_name}
                  className={`h-full w-full object-cover object-center group-hover:opacity-75 cursor-pointer ${
                    isLoading ? "opacity-0" : "opacity-100"
                  }`}
                  loading="lazy"
                  onLoad={() => setIsLoading(false)}
                />
              </div>
            )}
          </Item>
        ) : (
          <div className="flex items-center justify-center h-full">
            Loading image...
          </div>
        )}
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{item.product_name}</h3>
    </div>
  );
}
