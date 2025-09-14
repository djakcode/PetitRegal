import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
          Nous sommes là pour vous
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          Contactez-nous pour toute question ou commande spéciale.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Section d'information de contact */}
          <div className="bg-pink-100 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-pink-800 mb-6">
              Nos coordonnées
            </h3>
            <div className="space-y-6 text-lg">
              <div className="flex items-center space-x-4 text-gray-700">
                <Mail className="w-6 h-6 text-pink-500" />
                <a
                  href="mailto:contact@petitregal.ml"
                  className="hover:underline"
                >
                  contact@petitregal.ml
                </a>
              </div>
              <div className="flex items-center space-x-4 text-gray-700">
                <Phone className="w-6 h-6 text-pink-500" />
                <a href="tel:+22370000000" className="hover:underline">
                  +223 76 22 22 40
                </a>
              </div>
              <div className="flex items-start space-x-4 text-gray-700">
                <MapPin className="w-6 h-6 text-pink-500 flex-shrink-0" />
                <p>
                  Rue du Marché, Quartier du fleuve, <br />
                  Bamako, Mali
                </p>
              </div>
            </div>
            {/* Vous pouvez ajouter une carte ici, comme une carte Google Maps */}
            <div className="mt-8">
              <p className="text-gray-500 italic">
                Nous sommes ouverts du lundi au samedi, de 10h à 20h.
              </p>
            </div>
          </div>

          {/* Section du formulaire de contact */}
          <motion.form
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gray-50 p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Envoyez-nous un message
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
              />
              <input
                type="email"
                placeholder="Votre email"
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
              />
              <textarea
                rows="5"
                placeholder="Votre message..."
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-pink-600 text-white font-bold px-6 py-4 rounded-full hover:bg-pink-700 transition duration-300"
              >
                Envoyer le message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
