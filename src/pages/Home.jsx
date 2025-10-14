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
    <div className="bg-fond-50">
      {/* Section d'accueil (bannière principale) */}
      <Hero />

      {/* Section "Nos délices" avec les 8 produits les moins chers */}
      <section className="pt-12 pb-20 bg-fond-100">
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
              className="inline-flex items-center gap-3 bg-cerise-600 text-fond-50 font-bold py-4 px-10 rounded-full shadow shadow-cerise-500/50 hover:bg-or-500 hover:text-chocolat-900 transition-all duration-300 transform hover:scale-[1.03] text-lg"
            >
              Voir tout le catalogue 🍦
            </Link>
          </div>
        </div>
      </section>

      {/* Séparateur visuel */}
      <hr className="border-t-2 border-praline-300" />

      {/* Témoignages des clients */}
      <Testimonials />

      {/* Séparateur visuel */}
      <hr className="border-t-2 border-praline-300" />

      {/* Section contact */}
      <Contact />
    </div>
  );
};

export default Home;
