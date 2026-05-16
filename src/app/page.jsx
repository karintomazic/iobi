import Hero from "./components/hero/Hero";
import Navigation from "./components/navigation/Navigation";
import Categories from "./components/categories/Categories";
import GardenGallery from "./components/GardenGallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <section className="bg-[#F8F5F0] dark:bg-gray-900">
        <Navigation />
        <Hero />
      </section>
      <main>
        <section>
          <Categories />
        </section>
        <section>
          <GardenGallery />
        </section>
        <section>
          <Testimonials />
        </section>
        <section>
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}
