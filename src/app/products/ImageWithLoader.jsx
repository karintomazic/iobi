import { useState } from "react";
import { Item } from "react-photoswipe-gallery";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ImageWithLoader({ item }) {
  const [isLoading, setIsLoading] = useState(true);
  const [dimensions, setDimensions] = useState(null);
  const [hasError, setHasError] = useState(false);

  const getImageUrl = (image) => `http://localhost:${process.env.NEXT_PUBLIC_PB_LOCAL_PORT}/api/files/${item.collectionId}/${item.id}/${image}`;

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

  const images = Array.isArray(item.product_image) ? item.product_image : [item.product_image];

  return (
    <div className="group border border-gray-100 rounded-[20px] p-4 bg-gray-100">
      <div className=" w-full overflow-hidden rounded-lg bg-gray-100">
        {hasError ? (
          <div className="flex items-center justify-center h-full">
            <span>Error loading image</span>
          </div>
        ) : (
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="pb-12 bg-gray-10">
                <Item
                  original={getImageUrl(image)}
                  thumbnail={getImageUrl(image)}
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
                        src={getImageUrl(image)}
                        alt={`${item.product_name} - Image ${index + 1}`}
                        className={`h-[400px] w-full object-cover object-center cursor-pointer rounded-[16px] ${
                          isLoading ? "opacity-0" : "opacity-100"
                        }`}
                        loading="lazy"
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                      />
                    </div>
                  )}
                </Item>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      <h3 className="mt-0 text-gray-700 text-center font-bold text-[1.2rem] mb-2">{item.product_name}</h3>
    </div>
  );
}
