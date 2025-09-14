import { products } from "../data/products";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Products = () => {
  return (
    <section className="py-12 px-4 container mx-auto">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-pink-600 tracking-tight">
        🍦 Nos délices glacés
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center text-center group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-56 object-cover rounded-2xl mb-4 transform transition-transform duration-300 group-hover:scale-105"
            />
            <h3 className="text-2xl font-bold mb-1 text-gray-800">
              {product.name}
            </h3>
            <p className="text-pink-500 font-semibold text-lg mb-4">
              {product.price}
            </p>
            <div className="flex gap-4 w-full justify-center">
              {/* Bouton pour une future fonctionnalité "Ajouter au panier" */}
              <button className="bg-gray-200 text-gray-800 p-3 rounded-full hover:bg-pink-100 transition duration-300">
                <ShoppingCart className="w-5 h-5" />
              </button>
              {/* Bouton WhatsApp avec icône */}
              <a
                href={`https://wa.me/22376222240?text=Je veux commander ${product.name} à ${product.price}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-pink-500 text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-pink-600 transition-colors duration-300"
              >
                <FaWhatsapp className="w-5 h-5" /> Acheter
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Products;
