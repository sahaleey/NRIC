import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBookOpen,
  FaMosque,
  FaUsers,
} from "react-icons/fa6";

const BentoItem = ({ children, className, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className={`relative overflow-hidden rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 transition-colors group ${className}`}
  >
    {children}
  </motion.div>
);

export default function BentoGrid() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-zinc-950">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 dark:text-white">
            Life at{" "}
            <span className="italic text-emerald-600">Nahjurrashad</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          {/* Tile 1: Academics (Large Vertical) */}
          <BentoItem
            className="md:col-span-2 md:row-span-2 relative group"
            delay={0.1}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
            <img
              src="/images/campus/academic.jpg"
              alt="Academics"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 p-8 z-20">
              <div className="bg-emerald-500 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white">
                <FaGraduationCap size={20} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Academic Excellence
              </h3>
              <p className="text-zinc-200 text-sm">
                Combining religious studies with modern higher secondary
                education.
              </p>
            </div>
          </BentoItem>

          {/* Tile 2: Moral Studies (Horizontal) */}
          <BentoItem
            className="md:col-span-2 bg-emerald-900 text-white p-8 flex flex-col justify-between"
            delay={0.2}
          >
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-serif text-black dark:text-white font-bold">
                Spiritual Guidance
              </h3>
              <FaMosque className="text-emerald-700 size-8" />
            </div>
            <p className="text-emerald-700 mt-4 max-w-md">
              Our curriculum is rooted in the "Dars" system, fostering deep
              moral and ethical values alongside standard education.
            </p>
          </BentoItem>

          {/* Tile 3: Stats (Small) */}
          <BentoItem
            className="bg-zinc-100 dark:bg-zinc-900 p-6 flex flex-col items-center justify-center text-center"
            delay={0.3}
          >
            <h4 className="text-5xl font-bold text-emerald-600 mb-2">20+</h4>
            <p className="text-zinc-500 font-medium">Years of Legacy</p>
          </BentoItem>

          {/* Tile 4: Community (Small with Image) */}
          <BentoItem className="relative group" delay={0.4}>
            <img
              src="/images/campus/library.jpg"
              alt="Library"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white bg-white/80 dark:bg-black/80 px-4 py-2 rounded-full backdrop-blur-md">
                Research & Library
              </h3>
            </div>
          </BentoItem>
        </div>
      </div>
    </section>
  );
}
