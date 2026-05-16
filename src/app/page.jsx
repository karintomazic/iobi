import Hero from "./components/hero/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Categories from "./components/categories/Categories";
import GardenGallery from "./components/GardenGallery";
import Testimonials from "./components/Testimonials";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <section className="bg-[#EDF2E8] dark:bg-gray-900">
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
