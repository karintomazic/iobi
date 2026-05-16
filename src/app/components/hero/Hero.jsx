import HeroContent from "./HeroContent";
import HeroImages from "./HeroImages";

export default function Hero() {
  return (
    <section className="bg-[#F8F5F0] dark:bg-gray-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-8">
          <HeroContent />
          <HeroImages />
        </div>
      </div>
    </section>
  );
}
