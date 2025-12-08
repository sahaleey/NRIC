import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiHome,
  FiArrowLeft,
  FiSearch,
  FiCompass,
  FiBookOpen,
} from "react-icons/fi";
import { Helmet } from "react-helmet-async";

// --- 1. The "Pro" Student Animation Component ---
const LostStudentAnimation = () => {
  return (
    <div className="relative w-80 h-80 mx-auto flex items-center justify-center">
      {/* Ambient Background Glow */}
      <div className="absolute inset-0 bg-emerald-400/20 dark:bg-emerald-500/10 blur-[60px] rounded-full" />

      <svg
        viewBox="0 0 400 400"
        className="w-full h-full drop-shadow-2xl z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* --- FLOATING BACKGROUND ELEMENTS (Papers/Books) --- */}
        <FloatingElement
          d="M50 100 L80 100 L80 140 L50 140 Z"
          color="#A7F3D0"
          delay={0}
          x={-10}
          y={-20}
        />
        <FloatingElement
          d="M320 80 L350 80 L350 110 L320 110 Z"
          color="#6EE7B7"
          delay={1}
          x={10}
          y={15}
        />
        <FloatingElement
          d="M40 300 L70 300 L70 330 L40 330 Z"
          color="#34D399"
          delay={2}
          x={-5}
          y={10}
        />

        {/* --- THE STUDENT CHARACTER --- */}
        <motion.g
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* 1. Body (Gown) */}
          <path
            d="M140 240 Q200 400 260 240 L240 380 L160 380 Z"
            className="fill-gray-800 dark:fill-gray-200"
          />
          {/* Gown Collar */}
          <path
            d="M140 240 L200 280 L260 240"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            className="text-emerald-500"
          />

          {/* 2. Head Group (Bobbing Animation) */}
          <motion.g
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Face */}
            <circle
              cx="200"
              cy="180"
              r="50"
              className="fill-emerald-100 dark:fill-emerald-900"
            />

            {/* 3. Graduation Cap */}
            <g transform="translate(0, -10)">
              <path
                d="M130 160 L200 130 L270 160 L200 190 Z"
                className="fill-emerald-600 dark:fill-emerald-500"
              />
              <path
                d="M200 190 L200 150" // Center strut invisible
                stroke="none"
              />
              {/* Cap Base */}
              <path
                d="M145 166 L145 185 Q200 210 255 185 L255 166"
                className="fill-emerald-700 dark:fill-emerald-600"
              />
              {/* Tassel */}
              <motion.g
                animate={{ rotate: [-5, 5, -5] }}
                style={{ originX: "200px", originY: "160px" }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <line
                  x1="200"
                  y1="160"
                  x2="250"
                  y2="190"
                  stroke="#F59E0B"
                  strokeWidth="4"
                />
                <circle cx="250" cy="190" r="6" fill="#F59E0B" />
              </motion.g>
            </g>

            {/* 4. Eyes (Scanning) */}
            <motion.g
              animate={{ x: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <circle
                cx="185"
                cy="185"
                r="6"
                className="fill-gray-900 dark:fill-white"
              />
              <circle
                cx="215"
                cy="185"
                r="6"
                className="fill-gray-900 dark:fill-white"
              />
            </motion.g>
          </motion.g>

          {/* 5. Magnifying Glass (The Searcher) */}
          <motion.g
            animate={{
              rotate: [-15, 15, -15],
              x: [-20, 20, -20],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ originX: "200px", originY: "250px" }}
          >
            {/* Handle */}
            <rect
              x="195"
              y="240"
              width="10"
              height="60"
              rx="5"
              className="fill-gray-700 dark:fill-gray-400"
            />
            {/* Glass Rim */}
            <circle
              cx="200"
              cy="220"
              r="40"
              fill="none"
              strokeWidth="6"
              className="stroke-emerald-500"
            />
            {/* Glass Lens (Semi-transparent) */}
            <circle
              cx="200"
              cy="220"
              r="37"
              className="fill-blue-100/30 dark:fill-blue-400/20"
            />
            {/* Reflection on Glass */}
            <path
              d="M180 200 Q190 190 205 195"
              fill="none"
              stroke="white"
              strokeWidth="3"
              opacity="0.6"
            />
          </motion.g>
        </motion.g>
      </svg>
    </div>
  );
};

// --- Helper Component for Floating Background Items ---
const FloatingElement = ({ d, color, delay, x, y }) => (
  <motion.path
    d={d}
    fill={color}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0.3, 0.6, 0.3],
      y: [0, -15, 0],
      rotate: [0, 10, 0],
    }}
    transition={{
      duration: 4,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="dark:opacity-20"
  />
);

// --- 2. Main 404 Page Component ---
export default function NotFoundPage() {
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

  const quickLinks = [
    { name: "Home", path: "/", icon: FiHome },
    { name: "Academics", path: "/academics", icon: FiBookOpen },
    { name: "About", path: "/about", icon: FiSearch },
    { name: "Contact", path: "/contact", icon: FiArrowLeft },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50/30 to-green-50/30 dark:from-black dark:via-black dark:to-black flex items-center justify-center relative overflow-hidden">
      <Helmet>
        <title>Page Not Found | Nahjurrashad Islamic College</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      {/* Decorative Background Blob */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-blue-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* --- The New Pro Animation --- */}
          <motion.div variants={itemVariants} className="mb-2">
            <LostStudentAnimation />
          </motion.div>

          {/* 404 Text */}
          <motion.div
            variants={itemVariants}
            className="mb-6 relative inline-block"
          >
            <h1 className="font-serif text-6xl md:text-8xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              404
            </h1>
          </motion.div>

          {/* Main Message */}
          <motion.div variants={itemVariants} className="mb-10">
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Looks like this page skipped class.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mx-auto">
              We searched high and low, but the page you are looking for seems
              to be missing from our library.
            </p>
          </motion.div>

          {/* Quick Navigation Cards */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {quickLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="group bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 shadow-sm hover:shadow-lg border border-gray-200 dark:border-gray-700 hover:border-emerald-400 dark:hover:border-emerald-500 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className="size-10 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 group-hover:scale-110 transition-all duration-300">
                        <IconComponent className="size-5 text-emerald-600 dark:text-emerald-400 group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                        {link.name}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* Back Button */}
          <motion.div variants={itemVariants}>
            <button
              onClick={() => window.history.back()}
              className="px-8 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-all duration-300 shadow-lg hover:shadow-emerald-500/20"
            >
              Go Back Previous Page
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
