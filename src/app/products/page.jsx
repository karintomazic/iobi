import Navigation from "../components/navigation/Navigation";
import Footer from "../components/Footer";
import ProductList from "./ProductList";

export default function Products() {
  return (
    <>
      <section className="bg-gray-50">
        <Navigation />
      </section>
      <main className="bg-gray-50">
        <section>
          <ProductList />
        </section>
      </main>
      <Footer />
    </>
  );
}
