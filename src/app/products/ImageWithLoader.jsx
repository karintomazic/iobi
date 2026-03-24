import { useState } from "react";
import { Item } from "react-photoswipe-gallery";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const isDev = process.env.NEXT_PUBLIC_ENVIRONMENT === "dev";
const baseUrl = isDev
  ? `${process.env.NEXT_PUBLIC_POCKETBASE_URL}:${process.env.NEXT_PUBLIC_PB_LOCAL_PORT}`
  : process.env.NEXT_PUBLIC_POCKETBASE_URL;

export default function ImageWithLoader({ item }) {
  const images = Array.isArray(item.product_image) ? item.product_image : [item.product_image];

  const [loadingStates, setLoadingStates] = useState(() => images.map(() => true));
  const [dimensions, setDimensions] = useState(() => images.map(() => null));
  const [hasError, setHasError] = useState(false);

  const getImageUrl = (image) => `${baseUrl}/api/files/${item.collectionId}/${item.id}/${image}`;

  const handleImageLoad = (event, index) => {
    const { naturalWidth: width, naturalHeight: height } = event.target;
    setDimensions((prev) => prev.map((d, i) => (i === index ? { width, height } : d)));
    setLoadingStates((prev) => prev.map((s, i) => (i === index ? false : s)));
  };

  const handleImageError = (error, index) => {
    console.error("Failed to load image", error);
    setLoadingStates((prev) => prev.map((s, i) => (i === index ? false : s)));
    setHasError(true);
  };

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
              <SwiperSlide key={image} className="pb-12 bg-gray-10">
                <Item
                  original={getImageUrl(image)}
                  thumbnail={getImageUrl(image)}
                  width={dimensions[index]?.width || 1024}
                  height={dimensions[index]?.height || 768}
                >
                  {({ ref, open }) => (
                    <div className="relative h-full w-full">
                      {loadingStates[index] && (
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
                          loadingStates[index] ? "opacity-0" : "opacity-100"
                        }`}
                        loading="lazy"
                        onLoad={(e) => handleImageLoad(e, index)}
                        onError={(e) => handleImageError(e, index)}
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
