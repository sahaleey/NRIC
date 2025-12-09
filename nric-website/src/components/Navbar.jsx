import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

// --- Navigation Links ---
const navItems = [
  { name: "Home", path: "/" },
  {
    name: "About",
    path: "/about",
    dropdown: [
      { name: "History & Vision", path: "/about/history" },
      { name: "Leadership", path: "/about/leadership" },
      { name: "Campus", path: "/about/campus" },
      { name: "Accreditation", path: "/about/accreditation" },
    ],
  },
  {
    name: "Academics",
    path: "/academics",
    dropdown: [
      { name: "Curriculum", path: "/academics/curriculum" },
      { name: "Faculty", path: "/academics/faculty" },
    ],
  },
  { name: "Department", path: "/departments" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  // Scroll Progress Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Click away listener
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`w-full fixed top-0 z-100 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 shadow-lg backdrop-blur-xl"
          : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 md:py-3">
          {/* --- LOGO SECTION --- */}
          <Link
            to="/"
            className="flex items-center space-x-2 md:space-x-3 group overflow-hidden"
          >
            {/* Logo Icon (Scaled for Mobile) */}
            <motion.img
              src="/images/logo.jpg"
              alt="NRIC Emblem"
              className="h-8 w-8 md:h-10 md:w-10 object-contain rounded-full"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 1 }}
            />

            {/* Text/Calligraphy Block */}
            <motion.div
              className="flex flex-col justify-center"
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1.7 }}
            >
              {/* 1. CALLIGRAPHY IMAGE */}
              {/* Adjusted Height: h-6 (24px) for mobile, h-9 (36px) for desktop */}
              <img
                src="/images/logocal.png"
                alt="Nahjurrashad Calligraphy"
                className="h-5 sm:h-6 md:h-8 lg:h-9 object-contain mb-0.5 md:mb-1 self-start"
              />

              {/* 2. Subtitle Text */}
              {/* Adjusted Font Size: text-[9px] for mobile, text-xs for desktop */}
              <motion.span
                className="text-[9px] sm:text-[10px] md:text-xs font-medium text-gray-600 dark:text-gray-300 tracking-wide leading-none"
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 2.2 }}
              >
                Nahjurrashad Islamic College
              </motion.span>
            </motion.div>
          </Link>

          {/* --- DESKTOP NAVIGATION (Hidden on Mobile/Tablet) --- */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <motion.div
                    onMouseEnter={() => setActiveDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="relative"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <button
                      className={`flex items-center space-x-1 px-3 py-2 xl:px-4 xl:py-3 font-medium transition-all duration-200 rounded-lg text-sm xl:text-base ${
                        location.pathname.startsWith(item.path)
                          ? "text-emerald-700 bg-emerald-50 dark:bg-emerald-900/20"
                          : "text-gray-700 dark:text-gray-300 hover:text-emerald-600 hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                    >
                      <span>{item.name}</span>
                      <motion.div
                        animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FiChevronDown className="size-4" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {activeDropdown === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 backdrop-blur-lg"
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.path}
                              className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 transition-colors first:rounded-t-xl last:rounded-b-xl"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`px-3 py-2 xl:px-4 xl:py-3 font-medium transition-all duration-200 rounded-lg text-sm xl:text-base ${
                        location.pathname === item.path
                          ? "text-emerald-700 bg-emerald-50 dark:bg-emerald-900/20"
                          : "text-gray-700 dark:text-gray-300 hover:text-emerald-600 hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* --- RIGHT SIDE ACTIONS --- */}
          <div className="flex items-center gap-2">
            {/* Mobile/Tablet Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {isMobileMenuOpen ? (
                <FiX className="size-6" />
              ) : (
                <FiMenu className="size-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-400 to-green-600 origin-left"
        style={{ scaleX }}
      />

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div className="space-y-1">
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="flex items-center justify-between w-full px-4 py-3 text-left font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                      >
                        <span>{item.name}</span>
                        <motion.div
                          animate={{
                            rotate: activeDropdown === index ? 180 : 0,
                          }}
                        >
                          <FiChevronDown className="size-4" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {activeDropdown === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 space-y-1 border-l-2 border-emerald-200 dark:border-emerald-800"
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.path}
                                className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-r-lg transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="block px-4 py-3 font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
