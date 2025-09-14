import Products from "../components/Products";
import { motion } from "framer-motion";

const Catalogue = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-16 px-4">
        {/* En-tête de la page catalogue */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 mb-4">
            Découvrez nos saveurs
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explorez notre sélection de glaces artisanales et de gâteaux
            gourmands, faits avec des ingrédients frais et locaux.
          </p>
        </motion.div>

        {/* Composant des produits amélioré */}
        <Products />

        {/* Section de promotion ou d'appel à l'action */}
        <div className="bg-pink-500 text-white rounded-xl p-8 text-center mt-16 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Une occasion spéciale ?
          </h2>
          <p className="text-lg mb-6">
            Commandez votre gâteau ou votre glace sur mesure pour vos
            événements.
          </p>
          <a
            href="/contact"
            className="bg-white text-pink-500 font-bold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
