import Hero from "@/app/components/hero/Hero";
import FeaturedProducts from "@/app/components/FeaturedProducts";
import Categories from "@/app/components/categories/Categories";
import GardenGallery from "@/app/components/GardenGallery";
import CTABanner from "@/app/components/CTABanner";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <section className="bg-surface dark:bg-gray-900">
        <Hero />
      </section>
      <main>
        <section>
          <Categories />
        </section>
        <section>
          <FeaturedProducts />
        </section>
        <section>
          <GardenGallery />
        </section>
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
