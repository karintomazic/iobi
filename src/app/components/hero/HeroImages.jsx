import ImageCard from "./HeroImageCard";

export default function HeroImages() {

  const imagesGroup = [
    {
      "id": "group-1",
      "images": [{ "src": "/img/hero_img6.jpg", "alt": "Okrasni betonski izdelek" }],
      "containerClasses": "ml-auto w-64 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
    },
    {
      "id": "group-2",
      "images": [
        { "src": "/img/hero_img2.jpg", "alt": "Betonska klop" },
        { "src": "/img/hero_img3.jpg", "alt": "Betonska fontana" }
      ],
      "containerClasses": "mr-auto w-64 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36"
    },
    {
      "id": "group-3",
      "images": [
        { "src": "/img/hero_img4.jpg", "alt": "Betonski žar" },
        { "src": "/img/hero_img5.jpg", "alt": "Okrasni betonski kip" }
      ],
      "containerClasses": "w-64 flex-none space-y-8 pt-32 sm:pt-0"
    }
  ]

  return (
    <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0 lg:w-2/3">
      {imagesGroup.map((group) => (
        <div
          key={group.id}
          className={`w-64 flex-none space-y-8 ${group.containerClasses}`}
        >
          {group.images.map((image) => (
            <ImageCard key={image.src} src={image.src} alt={image.alt} />
          ))}
        </div>
      ))}
    </div>
  );
}
