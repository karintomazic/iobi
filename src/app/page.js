import Hero from "./components/Hero.js";
import Navigation from "./components/Navigation.js";
import Categories from "./components/Categories.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";

import { GoogleMapsEmbed } from "@next/third-parties/google";

export default function Home() {
  return (
    <>
      <section className="bg-white">
        <Navigation />
        <Hero />
      </section>
      <main className="bg-white">
        <section>
          <Categories />
        </section>
        <section>
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}
