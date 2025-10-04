import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import gateau_mariage_4etages_fleurs from "../images/Gateau-mariage-sucre.jpg";

// Définir des variantes pour des animations en cascade
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Décalage de 0.3s entre chaque enfant
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function Hero() {
  return (
    <section className="bg-pink-50 text-gray-800 py-16 lg:py-24  h-[calc(100vh-96px)] flex items-center justify-center">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Colonne de gauche (texte) */}
        <motion.div
          className="text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-pink-600 leading-tight mb-4"
            variants={itemVariants}
          >
            Le goût unique de tout moment,
            <span className="block text-gray-900">créé pour vous.</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0"
            variants={itemVariants}
          >
            Découvrez nos gâteaux artisanaux et glaces, préparés avec passion à
            Bamako et environ pour un plaisir glacé inoubliable.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              to="/catalogue"
              className="inline-block bg-pink-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-pink-600 transition-colors duration-300"
            >
              Découvrir le Catalogue
            </Link>
          </motion.div>
        </motion.div>

        {/* Colonne de droite (image) */}
        <motion.div
          className="hidden lg:flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          {/* Remplacez ceci par l'URL de votre image */}
          <img
            src={gateau_mariage_4etages_fleurs}
            alt="Magnifique glace artisanale"
            className="rounded-3xl shadow-2xl w-full max-w-md object-cover max-h-96"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
