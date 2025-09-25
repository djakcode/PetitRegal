import { useState } from "react";
import { products } from "../data/products";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Commande = () => {
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const encodedMessage = encodeURIComponent(
      `Bonjour, je souhaite commander ${quantity} portion(s) de ${product}. Mon nom est ${name}.`
    );
    const whatsappUrl = `https://wa.me/22376222240?text=${encodedMessage}`;

    // Ouvre le lien WhatsApp dans un nouvel onglet
    window.open(whatsappUrl, "_blank");

    // Réinitialise le formulaire après l'envoi
    setIsSent(true);
    setName("");
    setProduct("");
    setQuantity(1);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 md:px-20">
      <div className="container mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 mb-4">
            Passez votre commande
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Sélectionnez votre glace favorite et la quantité. Votre commande
            sera envoyée directement via WhatsApp pour une confirmation rapide.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-white shadow-2xl p-8 rounded-3xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Champ Nom */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Votre nom
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
              placeholder="Ex: Awa Diallo"
              required
            />
          </div>

          {/* Champ Produit (Liste déroulante) */}
          <div className="mb-6">
            <label
              htmlFor="product"
              className="block text-gray-700 font-bold mb-2"
            >
              Produit
            </label>
            <select
              id="product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
              required
            >
              <option value="" disabled>
                Sélectionnez un produit
              </option>
              {products.map((p) => (
                <option key={p.id} value={p.name}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>

          {/* Champ Quantité */}
          <div className="mb-8">
            <label
              htmlFor="quantity"
              className="block text-gray-700 font-bold mb-2"
            >
              Quantité
            </label>
            <input
              id="quantity"
              type="number"
              value={quantity}
              min="1"
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
              className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
              required
            />
          </div>

          {/* Bouton de commande */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 rounded-full shadow-lg transition duration-300"
          >
            <FaWhatsapp className="w-6 h-6" />
            Commander via WhatsApp
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Commande;
