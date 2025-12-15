import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiClock,
  FiUsers,
  FiHome,
  FiAward,
  FiArrowRight,
  FiStar,
} from "react-icons/fi";

// =====================
// Animation Variants
// =====================

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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
};

// =====================
// Data
// =====================

const quickLinks = [
  {
    title: "Our History & Vision",
    description:
      "Explore our founding principles, rich heritage, and future goals that guide our institution.",
    path: "/about/history",
    icon: FiClock,
    color: "emerald",
    stats: "20+ Years",
  },
  {
    title: "Our Leadership",
    description:
      "Meet the visionary team and esteemed scholars guiding our institution towards excellence.",
    path: "/about/leadership",
    icon: FiUsers,
    color: "blue",
    stats: "Expert Team",
  },
  {
    title: "Campus Life",
    description:
      "Discover our state-of-the-art facilities, masjid, library, and vibrant student community.",
    path: "/about/campus",
    icon: FiHome,
    color: "amber",
    stats: "Modern Facilities",
  },
  {
    title: "Affiliation",
    description:
      "Learn about our prestigious affiliation with DHIU and academic recognition.",
    path: "/about/accreditation",
    icon: FiAward,
    color: "violet",
    stats: "DHIU Affiliated",
  },
];

const colorMap = {
  emerald: {
    bg: "bg-emerald-500",
    text: "text-emerald-600",
    light: "bg-emerald-50 ",
  },
  blue: {
    bg: "bg-blue-500",
    text: "text-blue-600",
    light: "bg-blue-50 ",
  },
  amber: {
    bg: "bg-amber-500",
    text: "text-amber-600",
    light: "bg-amber-50 ",
  },
  violet: {
    bg: "bg-violet-500",
    text: "text-violet-600",
    light: "bg-violet-50 ",
  },
};

// =====================
// Component
// =====================

export default function AboutOverview() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-white via-emerald-50/50 to-green-50/50   ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* =====================
              Header Section
          ====================== */}
          <motion.div
            variants={itemVariants}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-50  text-emerald-700  px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-emerald-200 ">
              <FiStar className="size-4" />
              About Our Institution
            </div>

            <h1 className="font-primary text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900  mb-6">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Nahjurrashad
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600  leading-relaxed mb-8">
              Founded on the timeless principles of integrating spiritual
              enlightenment with academic excellence, Nahjurrashad Islamic
              College stands as a beacon of knowledge and moral guidance in the
              heart of Kerala.
            </p>

            {/* =====================
                Key Stats
            ====================== */}
            <div className="flex justify-between  gap-6 max-w-2xl mx-auto">
              {[
                { value: "2006", label: "Established" },
                { value: "300+", label: "Students" },
                { value: "20+", label: "Faculty" },
                { value: "Hadith and science", label: "Departments" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl  md:text-3xl font-bold text-emerald-600 ">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500  mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* =====================
              Quick Links Grid
          ====================== */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {quickLinks.map((link) => {
              const colors = colorMap[link.color];
              const IconComponent = link.icon;

              return (
                <motion.div
                  key={link.title}
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <Link to={link.path} className="block group">
                    <div
                      className={`relative ${colors.light} rounded-2xl p-6 lg:p-8 border border-gray-200  hover:border-${link.color}-300  transition-all duration-300 h-full overflow-hidden`}
                    >
                      {/* Background Pattern */}
                      <div className="absolute top-4 right-4 opacity-5">
                        <IconComponent className="size-24 text-gray-900 " />
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Icon and Stats */}
                        <div className="flex items-center justify-between mb-6">
                          <div
                            className={`size-14 ${colors.bg} rounded-xl flex items-center justify-center shadow-lg`}
                          >
                            <IconComponent className="size-6 text-white" />
                          </div>
                          <span
                            className={`text-xs font-semibold ${colors.text} bg-white  px-3 py-1 rounded-full border border-${link.color}-200 `}
                          >
                            {link.stats}
                          </span>
                        </div>

                        {/* Title and Description */}
                        <h3 className="font-primary text-2xl lg:text-3xl font-bold text-gray-900  mb-4 leading-tight">
                          {link.title}
                        </h3>
                        <p className="text-gray-600  leading-relaxed mb-6">
                          {link.description}
                        </p>

                        {/* CTA */}
                        <div className="flex items-center gap-2 text-emerald-600  font-semibold group-hover:gap-3 transition-all duration-300">
                          <span>Learn More</span>
                          <motion.div
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <FiArrowRight className="size-5" />
                          </motion.div>
                        </div>
                      </div>

                      {/* Hover Shine Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
