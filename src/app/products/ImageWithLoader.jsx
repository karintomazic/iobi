import { useState } from "react";
import { Item } from "react-photoswipe-gallery";

export default function ImageWithLoader({ item }) {
  const [isLoading, setIsLoading] = useState(true);
  const [dimensions, setDimensions] = useState(null);
  const [hasError, setHasError] = useState(false);
  const imageUrl = `http://localhost:${process.env.NEXT_PUBLIC_PB_LOCAL_PORT}/api/files/${item.collectionId}/${item.id}/${item.product_image}`;

  const handleImageLoad = (event) => {
    const { naturalWidth: width, naturalHeight: height } = event.target;
    setDimensions({ width, height });
    setIsLoading(false);
  };

  const handleImageError = (error) => {
    console.error("Failed to load image", error);
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        {hasError ? (
          <div className="flex items-center justify-center h-full">
            <span>Error loading image</span>
          </div>
        ) : (
          <Item
            original={imageUrl}
            thumbnail={imageUrl}
            width={dimensions?.width || 1024}
            height={dimensions?.height || 768}
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
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                />
              </div>
            )}
          </Item>
        )}
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{item.product_name}</h3>
    </div>
  );
}
