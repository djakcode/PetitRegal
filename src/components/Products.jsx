import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { products } from "../data/products";
import { useState } from "react";

const Products = ({
  currentProducts,
  searchTerm,
  setSearchTerm,
  filteredCount,
  showSearch = true,
}) => {
  // NOUVEL ÉTAT : Pour gérer l'ouverture et l'image de la lightbox
  const [selectedImage, setSelectedImage] = useState(null);

  // NOUVELLE FONCTION : Ouvrir la lightbox
  const openLightbox = (imgUrl) => {
    setSelectedImage(imgUrl);
  };

  // NOUVELLE FONCTION : Fermer la lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-12 px-4 container mx-auto bg-fond-100 min-h-screen">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-chocolat-900 tracking-tighter">
        🍦 Nos délices frais
      </h2>
      {/* input for product search */}
      {showSearch && (
        <input
          type="text"
          placeholder="Rechercher un produit par nom ou par prix"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full mb-10 p-4 border-2border-praline-300 bg-fond-50 text-chocolat-800 rounded-xl placeholder-chocolat-400 focus:outline-none focus:ring-4 focus:ring-or-400 focus:border-or-500 transition duration-300 text-lg shadow-inner"
        />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* Products conditional rendering based on search term */}
        {currentProducts.map((product) => (
          <motion.div
            key={product.id}
            className="bg-fond-50 rounded-[30px] shadow-2xl shadow-chocolat-300/40 border-4 border-fond-50 hover:shadow-chocolat-400/60 transition-all duration-300 p-6 flex flex-col items-center text-center group"
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 12 }}
          >
            {/* MODIFICATION ICI : Ajout du onClick pour ouvrir la lightbox */}
            <div
              onClick={() => openLightbox(product.img)}
              className="cursor-pointer overflow-hidden rounded-2xl w-full"
              aria-label={`Voir l'image de ${product.name} en grand`}
            >
              {/* Image du produit avec effet de zoom au survol */}
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-56 object-cover rounded-2xl mb-4 transform transition-transform duration-300 group-hover:scale-103"
              />
            </div>

            <h3 className="text-2xl font-bold mb-1 text-chocolat-900 mt-2">
              {product.name}
            </h3>
            <p className="text-cerise-600 font-extrabold text-2xl mb-4">
              {product.price} FCFA
            </p>
            <div className="flex gap-4 w-full justify-center">
              {/* Bouton Panier : Chocolat/Or élégant */}
              <motion.button
                className="bg-chocolat-800 text-praline-100 p-3 rounded-full hover:bg-or-400 hover:text-chocolat-900 transition duration-300 shadow-md"
                whileTap={{ scale: 0.9 }}
                aria-label="Ajouter au panier"
              >
                <ShoppingCart className="w-5 h-5" />
              </motion.button>

              {/* Bouton WhatsApp avec icône */}
              <a
                href={`https://wa.me/22376222240?text=Je veux commander ${product.name} à ${product.price} FCFA`}
                target="_blank"
                rel="noopener noreferrer"
                as={motion.a}
                whiletap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-cerise-600 text-fond-50 px-5 py-3 rounded-full text-sm font-medium hover:bg-cerise-700 transition-colors duration-300 shadow shadow-cerise-500/50"
              >
                {/* Icône de message (remplace FaWhatsapp) */}
                <FaWhatsapp className="w-5 h-5" /> Acheter
              </a>
            </div>
          </motion.div>
        ))}

        {/* Message si aucun produit trouvé après filtrage */}
        {filteredCount === 0 && (
          <p className="col-span-full text-center text-xl text-cerise-600 mt-8 font-semibold">
            Désolé, aucun délice ne correspond à votre recherche. 😥 Essayez un
            autre mot-clé.
          </p>
        )}
      </div>

      {/* Lightbox Modale */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox} // Ferme au clic sur l'arrière-plan
            className="fixed inset-0 bg-chocolat-900/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()} // Empêche la fermeture au clic sur l'image
              className="relative max-w-4xl max-h-[90vh] bg-fond-50 rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src={selectedImage}
                alt="Zoom sur le produit"
                className="w-full h-full object-contain"
              />

              {/* Bouton de Fermeture */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 p-3 bg-cerise-500 text-fond-50 rounded-full hover:bg-cerise-600 transition duration-200 shadow-lg z-10"
                aria-label="Fermer la vue agrandie"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Products;
