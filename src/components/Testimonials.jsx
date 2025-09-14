import { motion } from "framer-motion";

const avis = [
  {
    name: "Awa",
    text: "Les meilleures glaces de Bamako ! 😍",
    title: "Cliente fidèle",
  },
  {
    name: "Moussa",
    text: "Super service et qualité incroyable.",
    title: "Client satisfait",
  },
  {
    name: "Fatou",
    text: "J’adore la glace à la mangue 🍹",
    title: "Amateur de fruits",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Ce que nos clients 💖 disent de nous
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {avis.map((avi, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col justify-between"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div>
                <p className="text-gray-700 italic text-lg leading-relaxed mb-6">
                  “{avi.text}”
                </p>
              </div>
              <div className="flex items-center">
                {/* Vous pouvez ajouter une image de profil ici pour plus d'authenticité */}
                <div className="flex flex-col">
                  <h4 className="font-bold text-xl text-pink-600">
                    - {avi.name}
                  </h4>
                  <p className="text-sm text-gray-500">{avi.title}</p>
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
