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
      <section className="bg-[#F8F5F0] dark:bg-gray-900">
        <Hero />
      </section>
      <main>
        <section>
          <FeaturedProducts />
        </section>
        <section>
          <Categories />
        </section>
        <section>
          <GardenGallery />
        </section>
        <section>
          <Testimonials />
        </section>
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
