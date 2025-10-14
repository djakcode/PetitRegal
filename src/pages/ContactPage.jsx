import Contact from "../components/Contact";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="bg-fond-50 min-h-screen py-16 px-4 font-inter">
      <div className="container mx-auto">
        {/* Section d'en-tête de la page */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-extrabold text-or-600 mb-4 drop-shadow-md">
            Entrons en contact
          </h1>
          <p className="text-xl text-chocolat-700 max-w-3xl mx-auto">
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
