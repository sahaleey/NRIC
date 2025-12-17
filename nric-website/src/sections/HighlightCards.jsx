import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiBook, FiUsers, FiAward, FiStar } from "react-icons/fi";

// --- Enhanced Card Data ---
const cards = [
  {
    title: "Academic Excellence",
    description:
      "Explore our comprehensive curriculum, specialized departments, and state-of-the-art learning resources.",
    link: "/academics",
    imageUrl: "/images/Nahj.jpg",
    icon: FiBook,
    stats: "20+ Programs",
    gradient: "from-blue-500/20 to-purple-600/20",
    color: "blue",
  },
  {
    title: "Vibrant Campus Life",
    description:
      "Discover student clubs, hostel facilities, cultural events, and spiritual activities on campus.",
    link: "/about/campus",
    imageUrl: "/images/dji-hero-desktop.jpg",
    icon: FiUsers,
    stats: "15+ Clubs",
    gradient: "from-emerald-500/20 to-green-600/20",
    color: "emerald",
  },
  {
    // --- UPDATED ALUMNI CARD ---
    title: "NAFIA Alumni Network",
    description:
      "Connect with NAFIA, the official network of our successful graduates making impacts worldwide.",
    link: "/alumni",
    imageUrl: "/images/nafia_action.jpg",
    icon: FiAward,
    stats: "500+ NAFIA Members", // Updated text
    gradient: "from-amber-500/20 to-orange-600/20",
    color: "amber",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      duration: 0.8,
    },
  },
};

const hoverVariants = {
  hover: {
    y: -12,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
};

export default function HighlightCards() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-white to-gray-50/50   ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 m-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-50  text-emerald-700  px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-emerald-200 ">
            <FiStar className="size-4" />
            Explore Our Campus
          </div>
          <h2 className="font-primary text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900  mb-4">
            Discover{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Nahjurrashad
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600  leading-relaxed">
            Experience the perfect blend of traditional Islamic values and
            modern academic excellence in a nurturing campus environment.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {cards.map((card) => {
            const IconComponent = card.icon;
            const colorClasses = {
              blue: "text-blue-600 ",
              emerald: "text-emerald-400 ",
              amber: "text-amber-600 ",
            };

            return (
              <motion.div
                key={card.title}
                variants={cardVariants}
                whileHover="hover"
              >
                <Link to={card.link}>
                  <motion.div
                    className="group relative h-96 rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
                    variants={hoverVariants}
                  >
                    {/* Background Image with Overlays */}
                    <div className="absolute inset-0">
                      <img
                        src={card.imageUrl}
                        alt={card.title}
                        role="img"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    {/* Card Content */}
                    <div className="relative h-full flex flex-col justify-end p-6 lg:p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div
                          className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-md ${
                            colorClasses[card.color]
                          } px-3 py-1.5 rounded-full text-sm font-semibold border border-white/20`}
                        >
                          <IconComponent className="size-4" />
                          {card.stats}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="font-primary text-2xl lg:text-3xl font-bold text-white leading-tight">
                          {card.title}
                        </h3>
                        <p className="text-gray-200 text-lg leading-relaxed opacity-90">
                          {card.description}
                        </p>

                        <motion.div
                          className="flex items-center gap-3 pt-4 border-t border-white/20"
                          initial={{ opacity: 0, x: -20 }}
                          whileHover={{ opacity: 1, x: 0 }}
                        >
                          <span className="text-white font-semibold text-lg">
                            Explore More
                          </span>
                          <motion.div
                            animate={{ x: [0, 6, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <FiArrowRight className="size-5 text-white" />
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Hover Effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
