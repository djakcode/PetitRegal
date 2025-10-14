import { useEffect, useState } from "react";
import Products from "../components/Products";
import { motion } from "framer-motion";
import { products } from "../data/products";
import { Link } from "react-router-dom";

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
    <div className="bg-fond-50 min-h-screen font-inter">
      <div className="container mx-auto py-16 px-4">
        {/* En-tête de la page catalogue */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-extrabold text-or-600 mb-4 drop-shadow-md">
            Les Saveurs de Petit Régal
          </h1>
          <p className="text-xl text-chocolat-700 max-w-3xl mx-auto">
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
              className="px-4 py-2 rounded-xl font-bold bg-praline-500 text-chocolat-900 shadow-md hover:bg-praline-400 disabled:opacity-50 transition duration-200"
            >
              Précédent
            </button>

            {/* Numéros de page */}
            <div className="flex flex-wrap justify-center gap-2">
              {pageNumbers.map((number) => (
                <button
                  key={number}
                  onClick={() => handlePaginate(number)}
                  className={`w-10 h-10 rounded-full font-extrabold transition duration-200 shadow-lg ${
                    currentPage === number
                      ? "bg-cerise-500 text-fond-50 ring-4 ring-cerise-300"
                      : "bg-praline-300 text-chocolat-800 hover:bg-praline-400"
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
              className="px-4 py-2 rounded-xl font-bold bg-praline-500 text-chocolat-900 shadow-md hover:bg-praline-400 disabled:opacity-50 transition duration-200"
            >
              Suivant
            </button>
          </div>
        )}

        {/* Section de promotion ou d'appel à l'action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-chocolat-900 text-fond-50 rounded-2xl p-10 text-center mt-20 shadow-2xl border-b-4 border-cerise-500"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-or-500">
            Un événement à célébrer ?
          </h2>
          <p className="text-lg mb-8 text-praline-200 max-w-4xl mx-auto">
            Commandez votre gâteau ou votre glace sur mesure. Notre équipe est
            prête à créer le régal parfait pour vos mariages, anniversaires ou
            fêtes d'entreprise.
          </p>
          <Link
            to="/contact"
            className="bg-cerise-500 text-fond-50 font-bold py-2 md:py-3.5 px-4 md:px-10 rounded-full text-lg shadow-xl hover:bg-or-500 transition-colors duration-500 transform hover:scale-105 block w-full sm:inline-block sm:w-auto "
          >
            Commander sur Mesure
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Catalogue;
