import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

export default function About() {
  return (
    <div className="bg-white ">
      <SEO
        title="About Us"
        description="Learn about NRIC's history, leadership, and mission to shape the future of Islamic education."
        canonical="https://nric-chamakkala.vercel.app/about"
      />

      <section className="relative h-72 flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black/60 z-0">
          <img
            src="/images/dji-hero-desktop.jpg"
            alt="NRIC Campus"
            className="w-full h-full object-cover"
          />
        </div>
        <motion.h1
          className="relative z-10 font-primary text-5xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          About Nahjurrashad
        </motion.h1>
      </section>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
