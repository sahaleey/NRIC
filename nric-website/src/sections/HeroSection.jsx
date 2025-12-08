import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import logo from "../assets/logo.png"; // Keeping your current logo import

// --- 2. Text Reveal Component ---
const TextReveal = ({ text, className, delay = 0 }) => {
  const words = text.split(" ");
  return (
    <motion.h1
      className={`flex flex-wrap justify-center gap-x-3 gap-y-1 ${className}`}
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.1, delayChildren: delay } },
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="relative block"
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};

// --- 3. Animation Variants ---
const itemVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function HeroSection() {
  const ref = useRef(null);

  // --- Parallax Mouse Effect Logic ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left - width / 2);
    mouseY.set(clientY - top - height / 2);
  };

  // Background moves slightly OPPOSITE to mouse (Depth Effect)
  const bgX = useTransform(mouseX, [-500, 500], [15, -15]);
  const bgY = useTransform(mouseY, [-500, 500], [15, -15]);

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-900 perspective-1000"
    >
      {/* --- LAYER 1: Alive Background (Parallax) --- */}
      <motion.div
        className="absolute inset-0 z-0 scale-110" // Scale up to prevent edges showing
        style={{ x: bgX, y: bgY }} // Mouse movement applied here
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-zinc-900 z-10" />

        {/* Grain Overlay for Texture */}
        <div className="absolute inset-0 opacity-20 z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/images/dji-hero-mobile.webp"
            type="image/webp"
          />
          <source srcSet="/images/dji-hero-desktop.avif" type="image/avif" />
          <img
            src="/images/dji-hero-desktop.jpg"
            alt="Nahjurrashad Campus"
            className="w-full h-full object-cover"
          />
        </picture>
      </motion.div>

      {/* --- LAYER 3: Main Content --- */}
      <div className="relative z-30 px-6 text-center max-w-7xl mx-auto flex flex-col items-center mt-10">
        {/* Floating Logo */}
        <motion.div
          variants={itemVariant}
          initial="hidden"
          animate="visible"
          className="relative mb-6 group"
        >
          {/* Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-amber-400/20 rounded-full blur-[50px] group-hover:bg-amber-400/40 transition-colors duration-500"></div>

          <motion.img
            src={logo}
            alt="Anniversary Logo"
            className="relative w-32 md:w-52 lg:w-48 object-contain drop-shadow-2xl"
            animate={{ y: [0, -10, 0] }} // Gentle float animation
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Text Section */}
        <div className="mb-6 space-y-2">
          <TextReveal
            text="NAHJURRASHAD"
            className="font-secondary font-medium text-5xl md:text-7xl lg:text-8xl text-white tracking-wide drop-shadow-lg"
            delay={0.5}
          />

          <motion.h2
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
            className="font-secondary font-thin text-xl md:text-3xl text-emerald-400 uppercase tracking-widest"
          >
            Islamic College Chamakkala
          </motion.h2>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="text-lg md:text-2xl text-gray-300 font-light mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Celebrating{" "}
          <span className="text-amber-400 font-serif italic text-2xl">
            20 Years
          </span>{" "}
          of Illuminating Minds with{" "}
          <span className="text-white font-medium">Knowledge</span> & Guidance.
        </motion.p>

        {/* Location */}
        <motion.div
          className="flex items-center justify-center text-gray-300 mb-8"
          variants={itemVariant}
          initial="hidden"
          animate="visible"
        >
          <FaLocationDot className="size-5 mr-3 text-emerald-500" />
          <span className="text-lg mr-5">
            Thrissur, Kerala - Where Tradition Meets Excellence
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariant}
          initial="hidden"
          animate="visible"
        >
          <Link
            to="/about"
            className="group bg-emerald-600 hover:bg-green-900 text-white font-semibold py-4 px-10 rounded-full 
                       transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20
                       border-2 border-emerald-600 hover:border-green-400 shadow-lg
                       flex items-center justify-center min-w-56 relative overflow-hidden"
          >
            {/* Button Shine */}
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-12" />

            <span className="relative">Explore Campus</span>
            <svg
              className="size-5 ml-2 transform group-hover:translate-x-1 transition-transform relative"
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
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 60 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-emerald-400 to-emerald-600"
      />
    </section>
  );
}
