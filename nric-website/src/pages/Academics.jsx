import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function Academics() {
  return (
    <div className="bg-white dark:bg-black">
      <Helmet>
        <title>Nahjurrashad Islamic College | Academics</title>
        <meta
          name="description"
          content="Official website of Nahjurrashad Islamic College (NRIC), Chamakkala. An institute blending Islamic scholarship with modern education and moral excellence."
        />

        <link
          rel="canonical"
          href="https://nric-chamakkala.vercel.app/academics"
        />
      </Helmet>
      {/* --- 1. Academics Hero Section --- */}
      <section className="relative h-72 flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black/60 z-0">
          <img
            src="/images/acd.jpg"
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
