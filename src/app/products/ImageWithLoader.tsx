"use client";

import { useState, type SyntheticEvent } from "react";
import { Item } from "react-photoswipe-gallery";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { getImageUrl as getProductImageUrl, type ProductRecord } from "@/lib/pocketbase";
import { formatPrice } from "@/lib/format";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { contact } from "@/app/data/contact";

interface ImageWithLoaderProps {
  item: ProductRecord;
}

interface ImageSize {
  width: number;
  height: number;
}

export default function ImageWithLoader({ item }: ImageWithLoaderProps) {
  const { language } = useLanguage();
  const t = translations[language].errors;
  const tp = translations[language].products;

  const images = item.product_image;

  const [loadingStates, setLoadingStates] = useState(() => images.map(() => true));
  const [dimensions, setDimensions] = useState<(ImageSize | null)[]>(() => images.map(() => null));
  const [hasError, setHasError] = useState(false);

  const getImageUrl = (image: string) => getProductImageUrl(item, image);

  const handleImageLoad = (event: SyntheticEvent<HTMLImageElement>, index: number) => {
    const { naturalWidth: width, naturalHeight: height } = event.currentTarget;
    setDimensions((prev) => prev.map((d, i) => (i === index ? { width, height } : d)));
    setLoadingStates((prev) => prev.map((s, i) => (i === index ? false : s)));
  };

  const handleImageError = (error: SyntheticEvent<HTMLImageElement>, index: number) => {
    console.error("Failed to load image", error);
    setLoadingStates((prev) => prev.map((s, i) => (i === index ? false : s)));
    setHasError(true);
  };

  const price = formatPrice(item.price, "sl");

  return (
    <div className="group rounded-[20px] border border-stone-200 bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <div className="w-full overflow-hidden rounded-lg bg-stone-100 dark:bg-gray-700">
        {hasError ? (
          <div className="flex h-full items-center justify-center text-gray-500 dark:text-gray-400">
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
              <SwiperSlide key={image} className="bg-gray-100 dark:bg-gray-800">
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
                          <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-primary dark:border-gray-600"></div>
                        </div>
                      )}
                      <img
                        ref={ref}
                        onClick={open}
                        src={getImageUrl(image)}
                        alt={`${item.product_name} - Image ${index + 1}`}
                        className={`h-[400px] w-full cursor-pointer rounded-[16px] object-cover object-center transition-opacity duration-300 ${
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
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-[1.1rem] font-bold text-gray-800 capitalize dark:text-gray-100">
            {item.product_name}
          </h3>
          <span className="shrink-0 text-xs text-gray-400 dark:text-gray-500">
            {tp.productId}: {item.id}
          </span>
        </div>
        <div className="mt-2 flex flex-col gap-0.5">
          {item.size && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {tp.size}: <span className="text-gray-700 dark:text-gray-200">{item.size}</span>
            </p>
          )}
          {item.weight && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {tp.weight}: <span className="text-gray-700 dark:text-gray-200">{item.weight}</span>
            </p>
          )}
        </div>
        <div className="mt-3 flex items-center justify-between">
          {price && <p className="text-lg font-semibold text-primary">{price}</p>}
          <a
            href={`${contact.emailLink}?subject=${encodeURIComponent(`${item.product_name} - ${tp.productId}: ${item.id}`)}`}
            className="rounded-lg bg-primary px-3 py-1.5 text-sm text-white transition-colors duration-150 hover:bg-secondary"
          >
            {tp.inquire}
          </a>
        </div>
      </div>
    </div>
  );
}
