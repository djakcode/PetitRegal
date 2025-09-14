import Contact from "../components/Contact";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-16 px-4">
        {/* Section d'en-tête de la page */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 mb-4">
            Entrons en contact
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Que ce soit pour une commande spéciale, une question ou simplement
            pour nous dire "merci", nous serions ravis de vous entendre.
          </p>
        </motion.div>

        {/* Le composant Contact amélioré que nous avons créé précédemment */}
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
