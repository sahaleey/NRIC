// src/pages/Academics.jsx
import { Outlet } from "react-router-dom"; // Import Outlet
import { motion } from "framer-motion";

export default function Academics() {
  return (
    <div className="bg-white dark:bg-black">
      {/* --- 1. Academics Hero Section --- */}
      <section className="relative h-72 flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black/60 z-0">
          <img
            src="/src/assets/acd.jpg"
            alt="Students in a library"
            className="w-full h-full object-cover"
          />
        </div>
        <motion.h1
          className="relative z-10 font-serif text-5xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Academic <span className="text-amber-400">Excellence</span>
        </motion.h1>
      </section>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
