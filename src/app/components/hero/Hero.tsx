import HeroContent from "./HeroContent";
import HeroImages from "./HeroImages";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-surface dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-8">
          <HeroContent />
          <HeroImages />
        </div>
      </div>
    </section>
  );
}
