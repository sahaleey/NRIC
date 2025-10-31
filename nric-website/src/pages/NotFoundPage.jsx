import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiHome, FiArrowLeft, FiSearch, FiCompass } from "react-icons/fi";

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

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const quickLinks = [
    { name: "Home", path: "/", icon: FiHome },
    { name: "Academics", path: "/academics", icon: FiCompass },
    { name: "About", path: "/about", icon: FiSearch },
    { name: "Contact", path: "/contact", icon: FiArrowLeft },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50/30 to-green-50/30 dark:from-gray-900 dark:via-emerald-900/10 dark:to-green-900/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Animated 404 */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="mb-8"
          >
            <h1 className="font-serif text-8xl md:text-9xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              404
            </h1>
          </motion.div>

          {/* Main Message */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold border border-emerald-200 dark:border-emerald-700 mb-6">
              <FiSearch className="size-4" />
              Page Not Found
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Lost in the{" "}
              <span className="text-emerald-600">Digital Pages</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
              The page you're looking for seems to have wandered off into the
              digital wilderness. Don't worry, even the best explorers sometimes
              take wrong turns.
            </p>
          </motion.div>

          {/* Illustration/Graphic */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="max-w-md mx-auto">
              <div className="relative">
                {/* Background Circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="size-64 bg-emerald-200/20 dark:bg-emerald-800/20 rounded-full"></div>
                </div>

                {/* Compass Icon */}
                <div className="relative z-10 flex items-center justify-center">
                  <div className="size-32 bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl flex items-center justify-center shadow-2xl">
                    <FiCompass className="size-16 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Navigation */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-6">
              Quick Navigation
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {quickLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <motion.div
                    key={link.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={link.path}
                      className="group bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all duration-300 block"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <div className="size-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 group-hover:scale-110 transition-all duration-300">
                          <IconComponent className="size-6 text-emerald-600 dark:text-emerald-400 group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {link.name}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Primary CTA */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/"
              className="group bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
            >
              <FiHome className="size-5" />
              <span>Return to Homepage</span>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="group bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl border border-gray-300 dark:border-gray-600 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all duration-300 hover:scale-105 flex items-center gap-3"
            >
              <FiArrowLeft className="size-5" />
              <span>Go Back</span>
            </button>
          </motion.div>

          {/* Additional Help */}
          <motion.div variants={itemVariants} className="mt-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
              <h4 className="font-serif text-lg font-bold text-gray-900 dark:text-white mb-3">
                Need Further Assistance?
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                If you can't find what you're looking for or believe this is an
                error, our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/contact"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline text-sm"
                >
                  Contact Support ›
                </Link>
                <Link
                  to="/sitemap"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline text-sm"
                >
                  View Sitemap ›
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-24 -left-24 size-72 bg-emerald-200/10 dark:bg-emerald-800/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 size-72 bg-green-200/10 dark:bg-green-800/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
