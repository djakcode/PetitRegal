import { motion } from "framer-motion";
import { Star } from "lucide-react"; // Importation de l'icône étoile

const avis = [
  {
    name: "Awa K.", // Initiales pour plus de professionnalisme
    text: "Les meilleurs gâteaux de Bamako ! La qualité des ingrédients et la créativité dépassent toutes les attentes. Une véritable expérience gourmande à chaque commande.",
    title: "Cliente fidèle",
    rating: 5,
  },
  {
    name: "Moussa S.",
    text: "Super service et qualité incroyable. Mon gâteau d'anniversaire était non seulement magnifique, mais aussi parfaitement équilibré en saveurs. Je recommande vivement !",
    title: "Client satisfait",
    rating: 5,
  },
  {
    name: "Fatou L.",
    text: "J’adore la glace ! Leur crème glacée est un vrai délice de fraîcheur. C'est l'endroit idéal pour se faire plaisir sans culpabilité. Un vrai régal.",
    title: "Amateur de glaces",
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Légèrement plus rapide
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

// Composant pour afficher les étoiles
const RatingStars = ({ count }) => (
  <div className="flex justify-center mb-4">
    {[...Array(count)].map((_, i) => (
      <Star
        key={i}
        className="w-5 h-5 fill-or-500 text-or-500 mx-0.5" // Etoiles Or
      />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="bg-fond-50 py-16 lg:py-28 px-4 min-h-screen">
      <div className="container mx-auto">
        {/* Titre de la Section */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-chocolat-900 mb-16 tracking-tighter">
          Le <span className="text-or-500">livre d'or</span> de Petit Régal
        </h2>
        {/* Grille des témoignages avec animation en cascade */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden" // Utilisation de whileInView pour déclencher l'animation quand la section apparaît à l'écran
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Animation jouée une seule fois
        >
          {avis.map((avi, index) => (
            <motion.div
              key={index} // Carte témoignage stylisée
              className="bg-praline-100 rounded-[30px] border-4 border-fond-100 shadow-sm shadow-praline-300/60 transition-all duration-300 p-8 flex flex-col justify-between"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.01 }} // Effet 3D léger au survol
            >
              <RatingStars count={avi.rating || 5} />
              {/* Texte du témoignage */}
              <p className="text-chocolat-800 italic text-xl leading-relaxed mb-8">
                “{avi.text}”
              </p>
              {/* Auteur de l'avis */}

              <div className="flex items-center justify-end">
                <div className="flex flex-col text-right">
                  <h4 className="font-bold text-lg text-cerise-600">
                    {avi.name}
                  </h4>

                  <p className="text-sm text-chocolat-500 font-medium">
                    {avi.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
