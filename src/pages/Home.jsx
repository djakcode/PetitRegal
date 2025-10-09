import Products from "../components/Products";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import { products } from "../data/products";
import { Link } from "react-router-dom";

const Home = () => {
  // 1️⃣ Trie des produits par prix croissant
  const sortedProducts = [...products].sort((a, b) => a.price - b.price);

  // 2️⃣ Sélection des 8 produits les moins chers
  const cheapestProducts = sortedProducts.slice(0, 8);

  return (
    <>
      {/* Section d'accueil (bannière principale) */}
      <Hero />

      {/* Section "Nos délices" avec les 8 produits les moins chers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Composant Produits */}
          <Products
            currentProducts={cheapestProducts} // ✅ seulement les 8 moins chers
            searchTerm=""
            setSearchTerm={() => {}}
            filteredCount={cheapestProducts.length}
            showSearch={false}
          />

          {/* Bouton pour aller au catalogue complet */}
          <div className="text-center mt-10">
            <Link
              to="/catalogue"
              className="inline-block bg-pink-500 text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-pink-600 transition-colors duration-300"
            >
              Voir tout le catalogue 🍦
            </Link>
          </div>
        </div>
      </section>

      {/* Témoignages des clients */}
      <Testimonials />

      {/* Section contact */}
      <Contact />
    </>
  );
};

export default Home;
