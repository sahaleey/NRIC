import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCalendar,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { galleryImages } from "../data/gallery";

export default function EventsSection() {
  // 1. Get Latest 5 Events
  const latestEvents = galleryImages
    .filter((img) => img.category === "Events")
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  const [currentIndex, setCurrentIndex] = useState(0);

  // 2. Auto-Slide Logic (5 Seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % latestEvents.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [latestEvents.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % latestEvents.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + latestEvents.length) % latestEvents.length
    );
  };

  if (latestEvents.length === 0) return null;

  return (
    <section className="relative bg-zinc-900 overflow-hidden">
      {/* --- Section Title (Overlaid) --- */}
      <div className="absolute top-8 left-0 right-0 z-20 pointer-events-none">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-start">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-black/40 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10"
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <span className="text-white font-bold tracking-wider uppercase text-xs sm:text-sm">
                  Latest Highlights
                </span>
              </div>
            </motion.div>

            {/* View All Button */}
            <Link
              to="/gallery"
              className="pointer-events-auto hidden sm:flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-white text-sm font-semibold transition-all"
            >
              All Events <FiArrowRight />
            </Link>
          </div>
        </div>
      </div>

      {/* --- Full Width Slider --- */}
      <div className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Background Image */}
            <img
              src={latestEvents[currentIndex].src}
              alt={latestEvents[currentIndex].title}
              className="w-full h-full object-cover"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-20">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="max-w-4xl"
                >
                  {/* Date Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-600/90 text-white text-xs font-bold uppercase tracking-widest rounded-md mb-4">
                    <FiCalendar className="size-3" />
                    {new Date(
                      latestEvents[currentIndex].date
                    ).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>

                  {/* Title */}
                  <h2 className="font-primary text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                    {latestEvents[currentIndex].title}
                  </h2>

                  {/* Progress Bar (Visual Timer) */}
                  <div className="w-full max-w-md h-1 bg-white/20 rounded-full mt-8 overflow-hidden">
                    <motion.div
                      key={currentIndex} // Reset animation on slide change
                      className="h-full bg-emerald-500"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5, ease: "linear" }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* --- Navigation Controls (Arrows) --- */}
        <div className="absolute bottom-8 right-4 sm:right-8 z-30 flex gap-2">
          <button
            onClick={handlePrev}
            className="p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/10 transition-all hover:scale-105"
            aria-label="Previous slide"
          >
            <FiChevronLeft className="size-6" />
          </button>
          <button
            onClick={handleNext}
            className="p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/10 transition-all hover:scale-105"
            aria-label="Next slide"
          >
            <FiChevronRight className="size-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
