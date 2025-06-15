import ImageCard from "./HeroImageCard";

export default function HeroImages() {

  const imagesGroup = [
    {
      "images": [{ "src": "/img/hero_img6.jpg" }],
      "containerClasses": "ml-auto w-64 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
    },
    {
      "images": [
        { "src": "/img/hero_img2.jpg" },
        { "src": "/img/hero_img3.jpg" }
      ],
      "containerClasses": "mr-auto w-64 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36"
    },
    {
      "images": [
        { "src": "/img/hero_img4.jpg" },
        { "src": "/img/hero_img5.jpg" }
      ],
      "containerClasses": "w-64 flex-none space-y-8 pt-32 sm:pt-0"
    }
  ]

  return (
    <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0 lg:w-2/3">
      {imagesGroup.map((group, groupIndex) => (
        <div
          key={groupIndex}
          className={`w-64 flex-none space-y-8 ${group.containerClasses}`}
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
