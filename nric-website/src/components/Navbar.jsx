import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

// --- Navigation Links with Dropdown Support ---
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
  {
    name: "Departments",
    path: "/departments",
  },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`w-full fixed top-0 z-100 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 shadow-lg backdrop-blur-xl"
          : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo Section */}
          <motion.div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3">
              {/* College Emblem */}
              <img
                src="/images/logo.jpg"
                alt="NRIC Emblem"
                className="h-10 w-10 object-contain rounded-full "
              />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-emerald-800 leading-tight">
                  Nahjurrashad
                </span>
                <span className="text-xs text-gray-600 dark:text-gray-300">
                  Islamic College
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <motion.div whileHover={{ scale: 1.02 }} className="relative">
                    <button
                      onClick={() => toggleDropdown(index)}
                      className={`flex items-center space-x-1 px-4 py-3 font-medium transition-all duration-200 rounded-lg ${
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
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <Link
                      to={item.path}
                      className={`px-4 py-3 font-medium transition-all duration-200 rounded-lg ${
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

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FiX className="size-6" />
            ) : (
              <FiMenu className="size-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-xl"
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
                          transition={{ duration: 0.2 }}
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
                      className="block px-4 py-3 font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="pt-4 border-t border-gray-200 flex items-center justify-center dark:border-gray-800"
              >
                <ThemeToggle />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
