import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLocationDot, FaAward } from "react-icons/fa6";
import logo from "../assets/20th logo.png";

// --- Enhanced Animation Variants ---
const heroTextVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.3,
    },
  },
};

const itemVariant = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const backgroundVariants = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

// Floating animation for decorative elements
const floatVariant = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-900">
      {/* Enhanced Background with Gradient Overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-gray-900/80 via-gray-800/60 to-gray-900/80 z-10" />
        <div className="absolute inset-0 bg-black/40 z-20" />
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/images/dji-hero-mobile.webp"
            type="image/webp"
          />
          <source srcSet="/images/dji-hero-desktop.avif" type="image/avif" />
          <source srcSet="/images/dji-hero-desktop.webp" type="image/webp" />
          <img
            src="/images/dji-hero-desktop.jpg"
            alt="Nahjurrashad Islamic College Campus"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </picture>
      </motion.div>

      {/* Decorative Islamic Geometric Patterns */}

      {/* Main Hero Content */}
      <motion.div
        className="relative z-30 px-6 text-center max-w-6xl mx-auto mt-10"
        variants={heroTextVariants}
        initial="hidden"
        animate="visible"
      >
        {/* --- FIXED: 20th Anniversary Logo --- */}
        <motion.div
          variants={itemVariant}
          className="flex justify-center items-center px-3 rounded-lg md:mb-6 w-fit mx-auto"
        >
          <div
            className="flex justify-center items-center 
  bg-white/40 backdrop-blur-md 
  px-4 py-2 rounded-2xl shadow-lg 
  border border-white/50 w-fit mx-auto"
          >
            {/* The Logo Image */}
            <img
              src={logo}
              alt="20th Anniversary Logo"
              className="relative w-35 md:w-52 lg:w-64 h-auto object-contain "
            />
          </div>
        </motion.div>
        {/* Main Heading */}
        <motion.h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          variants={itemVariant}
        >
          <span className="block text-white font-secondary font-medium [text-shadow:0_4px_12px_rgb(0_0_0_/50%)]">
            NAHJURRASHAD
          </span>
          <span className="block text-3xl md:text-4xl font-secondary lg:text-5xl mt-2 text-green-500 font-thin">
            ISLAMIC COLLEGE
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-gray-200 font-light mb-8 max-w-4xl mx-auto leading-relaxed [text-shadow:0_2px_8px_rgb(0_0_0_/40%)]"
          variants={itemVariant}
        >
          Illuminating Minds with{" "}
          <span className="text-amber-100 font-semibold">Knowledge</span> and{" "}
          <span className="text-emerald-400 font-semibold">Guidance</span>
        </motion.p>

        {/* Location */}
        <motion.div
          className="flex items-center justify-center text-gray-300 mb-8"
          variants={itemVariant}
        >
          <FaLocationDot className="size-5 max-sm:size-5 mr-3  max-sm:ml-9 max-sm:mb-6" />
          <span className="text-lg mr-5">
            Thrissur, Kerala - Where Tradition Meets Excellence
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariant}
        >
          <Link
            to="/about"
            className="group bg-emerald-600 hover:bg-green-900 text-white font-semibold py-4 px-10 rounded-full 
                       transition-all duration-300 hover:shadow-2xl
                       border-2 border-emerald-600 hover:border-green-400 shadow-lg
                       flex items-center justify-center min-w-56"
          >
            <span>Explore Campus</span>
            <svg
              className="size-5 ml-2 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5-5 5M6 7l5 5-5 5"
              />
            </svg>
          </Link>

          <Link
            to="/about/leadership"
            className="group bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-10 rounded-full 
                       transition-all duration-300
                       border-2 border-white/50 hover:border-white backdrop-blur-sm
                       flex items-center justify-center min-w-56"
            s
          >
            <span>Know our leaders</span>
            <svg
              className="size-5 ml-2 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
