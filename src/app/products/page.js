import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import CategoryFilter from "../components/CategoryFilter";

export default function Products() {
  return (
    <>
      <section className="bg-white">
        <Navigation />
        <h1 className="text-3xl font-bold text-center mt-8">Our Products</h1>
      </section>
      <main className="bg-white">
        <section>
          <p className="text-center mt-4">
            Here you can find all our amazing products.
          </p>

          <ProductList />
       

        </section>
      </main>
      <Footer />
    </>
  );
}
