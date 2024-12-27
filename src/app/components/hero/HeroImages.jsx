import ImageCard from "./HeroImageCard";
import imagesGroup from "../../data/imagesGroup.json";

export default function HeroImages() {
  return (
    // <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">


    //   <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
    //     <div className="relative transform transition-transform hover:scale-110 cursor-pointer">
    //       <img
    //         src="/img/hero_img6.jpg"
    //         alt=""
    //         className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
    //       />
    //       <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
    //     </div>
    //   </div>

    //   <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
    //     <div className="relative transform transition-transform hover:scale-110 cursor-pointer">
    //       <img
    //         src="/img/hero_img2.jpg"
    //         alt=""
    //         className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
    //       />
    //       <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
    //     </div>
    //     <div className="relative transform transition-transform hover:scale-110 cursor-pointer">
    //       <img
    //         src="/img/hero_img3.jpg"
    //         alt=""
    //         className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
    //       />
    //       <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
    //     </div>
    //   </div>

    //   <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
    //     <div className="relative transform transition-transform hover:scale-110 cursor-pointer">
    //       <img
    //         src="/img/hero_img4.jpg"
    //         alt=""
    //         className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
    //       />
    //       <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
    //     </div>
    //     <div className="relative transform transition-transform hover:scale-110 cursor-pointer ">
    //       <img
    //         src="/img/hero_img5.jpg"
    //         alt=""
    //         className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
    //       />
    //       <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
    //     </div>
    //   </div>
    // </div>
    <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
      {imagesGroup.map((group, groupIndex) => (
        <div
          key={groupIndex}
          className={`w-44 flex-none space-y-8 ${group.containerClasses}`}
          id={groupIndex}
        >
          {group.images.map((image, imageIndex) => (
            <ImageCard key={imageIndex} src={image.src} />
          ))}
        </div>
      ))}
    </div>
  );
}
