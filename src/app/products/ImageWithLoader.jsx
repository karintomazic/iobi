"use client";

import { useState } from "react";
import { Item } from "react-photoswipe-gallery";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
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
  const { language } = useLanguage();
  const t = translations[language].errors;
  const tp = translations[language].products;

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
    <div className="group border border-gray-200 rounded-[20px] p-4 bg-gray-100">
      <div className=" w-full overflow-hidden rounded-lg bg-gray-100">
        {hasError ? (
          <div className="flex items-center justify-center h-full">
            <span>{t.imageLoad}</span>
          </div>
        ) : (
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
          >
            {images.map((image, index) => (
              <SwiperSlide key={image} className="bg-gray-10">
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
                          <div className="w-8 h-8 border-4 border-gray-200 border-t-primary rounded-full animate-spin"></div>
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
      <div className="mt-3 px-1">
        <h3 className="text-gray-800 font-bold text-[1.1rem]">{item.product_name}</h3>
        <p className="text-sm text-gray-500 mt-1">
          {tp.dimensions}: <span className="text-gray-700">{item.dimensions || "50 × 30 × 25 cm"}</span>
        </p>
        <div className="flex items-center justify-between mt-3">
          <p className="text-primary font-semibold text-lg">{item.price || "od 45 €"}</p>
          <a
            href={`mailto:tomazics@gmail.com?subject=${encodeURIComponent(item.product_name)}`}
            className="text-sm px-3 py-1.5 rounded-lg bg-primary text-white hover:bg-secondary transition-colors duration-150"
          >
            {tp.inquire}
          </a>
        </div>
      </div>
    </div>
  );
}
