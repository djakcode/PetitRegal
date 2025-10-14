import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-fond-50 py-16 lg:py-28 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-chocolat-900 mb-4">
          <span className="text-cerise-600 italic">Le Petit Régal</span> à votre
          service
        </h2>
        <p className="text-xl text-center text-chocolat-500 mb-16 max-w-2xl mx-auto">
          Contactez-nous pour toute question ou commande spéciale.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Section d'information de contact */}
          <div className="bg-chocolat-600/95 p-8 lg:p-12 rounded-[30px] shadow-sm shadow-chocolat-500/50">
            <h3 className="text-3xl font-bold text-or-500 mb-8">
              Nos coordonnées
            </h3>
            <div className="space-y-6 text-lg">
              <motion.div
                className="flex items-start space-x-4 text-fond-50 border-b border-praline-300/30 pb-4"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-7 h-7 text-cerise-500 flex-shrink-0 mt-1" />

                <div>
                  <span className="font-semibold block text-praline-100">
                    Email Direct
                  </span>

                  <a
                    href="mailto:contact@petitregal.com"
                    className="hover:text-or-500 transition-colors"
                  >
                    contact@petitregal.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-4 text-fond-50 border-b border-praline-300/30 pb-4"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-7 h-7 text-cerise-500 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold block text-praline-100">
                    Téléphone / WhatsApp
                  </span>

                  <a
                    href="tel:+22376222240"
                    className="hover:text-or-500 transition-colors"
                  >
                    +223 76 22 22 40
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-4 text-fond-50"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-7 h-7 text-cerise-500 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold block text-praline-100">
                    Notre Boutique
                  </span>

                  <p>
                    Kalabancoro Chicoro, <br />
                    Bamako, Mali
                  </p>
                </div>
              </motion.div>
            </div>
            {/* Vous pouvez ajouter une carte ici, comme une carte Google Maps */}
            <div className="mt-12 p-4 bg-chocolat-700 rounded-xl text-center">
              <p className="text-praline-100 italic font-medium">
                Nous sommes ouverts du lundi au samedi, de 10h à 20h.
              </p>
            </div>
          </div>

          {/* Section du formulaire de contact */}
          <motion.form
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-fond-100 p-8 lg:p-12 rounded-[30px] shadow-sm shadow-praline-300/50 border border-praline-200"
          >
            <h3 className="text-3xl font-bold text-chocolat-900 mb-8">
              Envoyez-nous un message
            </h3>
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full p-4 rounded-xl border border-praline-300 bg-fond-50 text-chocolat-800 focus:outline-none focus:ring-2 focus:ring-cerise-300 transition-all"
              />
              <input
                type="email"
                placeholder="Votre email"
                className="w-full p-4 rounded-xl border border-praline-300 bg-fond-50 text-chocolat-800 focus:outline-none focus:ring-2 focus:ring-cerise-300 transition-all"
              />
              <textarea
                rows="5"
                placeholder="Votre message..."
                className="w-full p-4 rounded-xl border border-praline-300 bg-fond-50 text-chocolat-800 focus:outline-none focus:ring-2 focus:ring-cerise-300 transition-all"
              ></textarea>
              <button
                type="submit"
                className="w-full inline-flex justify-center items-center gap-2 bg-cerise-600 text-fond-50 font-bold px-6 py-4 rounded-full shadow-sm shadow-cerise-500/50 hover:bg-or-500 hover:text-chocolat-900 transition-all duration-300 transform hover:scale-[1.01] text-lg mt-4"
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
