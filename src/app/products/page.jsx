import Navigation from "../components/navigation/Navigation";
import Footer from "../components/Footer";
import ProductList from "./ProductList";

export default function Products() {
  return (
    <>
      <section className="bg-white">
        <Navigation />
        <h1 className="text-3xl font-bold text-center mt-8">Our Products</h1>
      </section>
      <main className="bg-white">
        <section>
          <ProductList />
        </section>
      </main>
      <Footer />
    </>
  );
}
