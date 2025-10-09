import { useEffect, useState } from "react";
import Products from "../components/Products";
import { motion } from "framer-motion";
import { products } from "../data/products";

const productsPerPage = 8;

const Catalogue = () => {
  // state
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Logique de tri et de filtrage
  // 1. Trie (Création d'une copie puis tri par prix croissant)
  const sortedProducts = [...products].sort((a, b) => a.price - b.price);

  // 2. Filtrage (basé sur le terme de recherche)
  const filteredProducts = sortedProducts.filter((product) => {
    const term = searchTerm.toLowerCase().trim();
    const matchesName = product.name.toLowerCase().includes(term);
    const matchesPrice = String(product.price).includes(term);

    return matchesName || matchesPrice;
  });

  // 3. Réinitialiser la page actuelle à 1 si le filtrage change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // Logique de pagination
  // Calcul du nombre total de pages nécessaires
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // calcul des indices pour découper le tableau 'filteredProducts'
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  // Les produits réellement affichés sur la page actuelle
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Fonction de gestion du changement de page
  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Génération de numéros de pages pour l'affichage des boutons
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-16 px-4">
        {/* En-tête de la page catalogue */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-2"
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
        <Products
          currentProducts={currentProducts}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filteredCount={filteredProducts.length}
        />

        {/* Controles de pagination */}
        {totalPages > 1 && filteredProducts.length > 0 && (
          <div className="flex flex-wrap justify-center items-center mt-12 gap-2 px-2">
            {/* Bouton précédent */}
            <button
              onClick={() => handlePaginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-2 md:px-4 md:py-2 rounded-lg font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 transition duration-200"
            >
              Précédent
            </button>

            {/* Numéros de page */}
            <div className="flex flex-wrap justify-center gap-2">
              {pageNumbers.map((number) => (
                <button
                  key={number}
                  onClick={() => handlePaginate(number)}
                  className={`px-3 py-2 md:px-4 md:py-2 rounded-lg font-bold transition duration-200 ${
                    currentPage === number
                      ? "bg-pink-600 text-white shadow-md"
                      : "bg-gray-200 text-gray-700 hover:bg-pink-100"
                  }`}
                >
                  {number}
                </button>
              ))}
            </div>

            {/* Bouton suivant */}
            <button
              onClick={() => handlePaginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-2 md:px-4 md:py-2 rounded-lg font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 transition duration-200"
            >
              Suivant
            </button>
          </div>
        )}

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
