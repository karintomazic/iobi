import BackgroundShape from "./BacgroundShape";
import HeroContent from "./HeroContent";
import HeroImages from "./HeroImages";

export default function Hero() {
  return (
    <section>
      <main>
        <div className="relative isolate">
          <BackgroundShape />
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-10 lg:px-8">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <HeroContent />
                <HeroImages />
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
