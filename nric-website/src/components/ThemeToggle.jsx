import { useTheme } from "../contexts/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.9, rotate: -15 }}
      className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-nic-gold
                 focus:outline-none focus:ring-2 focus:ring-offset-2
                 focus:ring-nic-gold dark:focus:ring-offset-gray-900"
      aria-label="Toggle light/dark theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ opacity: 0, y: -10, rotate: -90 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          exit={{ opacity: 0, y: 10, rotate: 90 }}
          transition={{ duration: 0.2 }}
        >
          {/* Show Moon icon in light mode, Sun icon in dark mode */}
          {theme === "light" ? (
            <FiMoon size={18} />
          ) : (
            <FiSun size={18} className="text-white" />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}
