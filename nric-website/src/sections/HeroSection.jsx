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
// --- 3. Animated Tagline  ---
const AnimatedTagline = () => {
  const sentence = [
    { text: "Celebrating", type: "text" },
    {
      text: "20 Years",
      type: "highlight",
      color: "text-amber-400 font-bold text-2xl",
    },
    { text: "of Illuminating Minds with", type: "text" },
    { text: "Knowledge", type: "highlight" },
    { text: "& Guidance.", type: "text" },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 1.8 }, // Wait for title to finish
    },
  };

  const wordVariant = {
    hidden: { opacity: 0, y: 15, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="text-lg md:text-2xl text-gray-300 font-light mb-10 max-w-3xl mx-auto leading-relaxed flex flex-wrap justify-center gap-x-1.5 items-baseline px-4"
    >
      {sentence.map((part, index) => {
        if (part.type === "text") {
          return part.text.split(" ").map((word, wIndex) => (
            <motion.span key={`${index}-${wIndex}`} variants={wordVariant}>
              {word}
            </motion.span>
          ));
        } else {
          return (
            <motion.span
              key={index}
              variants={wordVariant}
              className={part.color}
            >
              {part.text}
            </motion.span>
          );
        }
      })}
    </motion.div>
  );
};

// --- 4. NEW: Pro Scroll Indicator (Mouse + Wheel) ---
const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3, duration: 1 }}
      className="absolute bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-40"
    >
      <span className="text-[10px] font-medium tracking-[0.2em] text-emerald-400/80 uppercase animate-pulse">
        Scroll Down
      </span>

      {/* Mouse Body */}
      <div className="w-[26px] h-[42px] border-2 border-white/20 rounded-full flex justify-center p-2 bg-black/20 backdrop-blur-sm shadow-lg">
        {/* The Wheel */}
        <motion.div
          className="w-1 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.8)]"
          animate={{
            y: [0, 12, 0],
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
};
// --- 5. Animation Variants ---
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
            className="font-primary font-bold text-5xl md:text-7xl lg:text-8xl text-white tracking-wide drop-shadow-lg"
            delay={0.5}
          />

          <motion.h2
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
            className="font-secondary font-medium text-xl md:text-3xl text-gray-300 uppercase tracking-widest"
          >
            Islamic College Chamakkala
          </motion.h2>
        </div>

        {/* --- The Animated Tagline --- */}
        <AnimatedTagline />

        {/* Location */}
        <motion.div
          variants={itemVariant}
          initial="hidden"
          animate="visible"
          className="mb-10"
        >
          {/* Divider */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent mx-auto mb-1" />

          {/* Identity Line */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-gray-300 text-sm md:text-base tracking-wide">
            <p className="mt-4 text-xs tracking-widest text-gray-200 uppercase">
              <FaLocationDot className="inline-block mr-2 h-4 w-3 text-emerald-400" />
              Thrissur · Kerala · India
            </p>
          </div>
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
              viewBox="0 0 24 24"
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

      {/* --- REPLACED: New Pro Scroll Indicator --- */}
      <ScrollIndicator />
    </section>
  );
}
