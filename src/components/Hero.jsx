import { easeInOut, motion } from "framer-motion";
import { Link } from "react-router-dom";
// import gateau_mariage_4etages_fleurs from "../images/Gateau-mariage-sucre.jpg";
import petit_regal_hero from "../images/petit-regal-hero.png";

// Texte à animer
const text = "Le Petit Régal";
const letters = Array.from(text);

// 1. Variantes pour l'animation des lettres (Typewriter en boucle)
const charVariants = {
  hidden: { opacity: 0, y: 5, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.1,
      ease: easeInOut,
    },
  },
};

const textContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07, // Délai entre chaque lettre
      repeat: Infinity, // Boucle infinie
      repeatType: "reverse", // Les lettres disparaissent à l'envers
      repeatDelay: 1.5, // Délai avant de recommencer la séquence
    },
  },
};

// Composant qui gère l'animation lettre par lettre
const AnimatedText = ({ text }) => {
  const letters = Array.from(text);

  return (
    <motion.span
      style={{ display: "inline-block" }}
      variants={textContainerVariants}
      initial="hidden"
      animate="visible"
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={charVariants}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
          {/* Gère les espaces non-sécables */}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Définir des variantes pour des animations en cascade
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Décalage de 0.3s entre chaque enfant
      delayChildren: 0.5, // Délai avant de commencer l'animation des enfants
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

function Hero() {
  return (
    <section className="bg-fond-50 text-chocolat-900 py-16 lg:py-24  h-[calc(100vh-96px)] flex items-center justify-center">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Colonne de gauche (texte) */}
        <motion.div
          className="text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-chocolat-900 drop-shadow-md leading-tight mb-4">
            {/* 🎯 Utilisation du nouveau composant pour l'animation du nom */}
            <AnimatedText text="Le Petit Régal" />
            <br />
            <span className="block text-praline-600 text-2xl font-medium mt-2">
              Pâtissière Professionnelle De Gâteau à Bamako.
            </span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-chocolat-700 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8"
            variants={itemVariants}
          >
            Le Petit Régal, pâtisserie de référence à Bamako et ses environs,
            vous propose une expérience gourmande d’exception. Découvrez
            l’alliance parfaite entre élégance et saveurs raffinées : des
            gâteaux frais, imaginés avec passion et savoir-faire.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              to="/catalogue"
              className="inline-block bg-cerise-600 text-fond-50 font-bold py-4 px-10 rounded-full shadow-xl hover:bg-cerise-700 transition-all duration-300 ease-out"
            >
              Découvrir le Catalogue
            </Link>
          </motion.div>
        </motion.div>

        {/* Colonne de droite (image) */}
        <motion.div
          className="hidden lg:flex justify-center"
          initial={{ opacity: 0, x: 50, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.8,
            type: "spring",
            stiffness: 80,
          }}
        >
          {/* Remplacez ceci par l'URL de votre image */}
          <img
            src={petit_regal_hero}
            alt="Magnifique gateau de mariage artisanale"
            className="rounded-3xl shadow-2xl w-full max-w-md object-cover max-h-96"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
