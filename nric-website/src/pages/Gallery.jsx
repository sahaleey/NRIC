// src/pages/Gallery.jsx
import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiZoomIn,
  FiFilter,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import SEO from "../components/SEO";

/**
 * Optimized Gallery (With Categories)
 * - No LayoutGroup or heavy layoutId usage
 * - Memoized filter
 * - lazy loading + decode="async"
 * - lightweight fade/scale modal animation
 * - simple hover CSS transform (GPU accelerated)
 * - preloads next image for snappy navigation
 */

/* ---------------- sample data ---------------- */
const galleryImages = [
  {
    id: 1,
    src: "/images/campus/masjid.jpg",
    category: "Campus",
    title: "Grand Masjid",
  },
  {
    id: 2,
    src: "/images/campus/library.jpg",
    category: "Campus",
    title: "Central Library",
  },
  {
    id: 3,
    src: "/images/campus/academic.jpg",
    category: "Campus",
    title: "Academic Block",
  },
  {
    id: 4,
    src: "/images/dji-hero-desktop.jpg",
    category: "Campus",
    title: "Aerial View",
  },
  {
    id: 5,
    src: "/images/campus/digital.jpg",
    category: "Students",
    title: "Digital Lab",
  },
  {
    id: 6,
    src: "/images/campus/hostel.jpg",
    category: "Campus",
    title: "Student Hostel",
  },
  {
    id: 7,
    src: "/images/img_4094.jpg",
    category: "Events",
    title: "Convocation",
  },
  {
    id: 8,
    src: "/images/img_2589.jpg",
    category: "Students",
    title: "Classroom Session",
  },
];

const categories = ["All", "Campus", "Events", "Students"];

/* ---------------- component ---------------- */
export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  // Memoize filtered images so re-renders are cheap
  const filteredImages = useMemo(() => {
    return filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);
  }, [filter]);

  // Navigate next/prev within the current filtered array
  const handleNavigate = useCallback(
    (direction) => {
      if (!selectedImage) return;
      const idx = filteredImages.findIndex(
        (img) => img.id === selectedImage.id
      );
      if (idx === -1) return;
      const nextIdx =
        direction === "next"
          ? (idx + 1) % filteredImages.length
          : (idx - 1 + filteredImages.length) % filteredImages.length;
      setSelectedImage(filteredImages[nextIdx]);
    },
    [selectedImage, filteredImages]
  );

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (!selectedImage) return;
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight") handleNavigate("next");
      if (e.key === "ArrowLeft") handleNavigate("prev");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedImage, handleNavigate]);

  // Lock body scroll when modal open (clean)
  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [selectedImage]);

  // Preload next image for snappy navigation
  useEffect(() => {
    if (!selectedImage) return;
    const idx = filteredImages.findIndex((img) => img.id === selectedImage.id);
    if (idx === -1) return;
    const next = filteredImages[(idx + 1) % filteredImages.length];
    const prev =
      filteredImages[(idx - 1 + filteredImages.length) % filteredImages.length];
    [next, prev].forEach((img) => {
      const i = new Image();
      i.src = img.src;
    });
  }, [selectedImage, filteredImages]);

  /* ---------------- simple motion variants ---------------- */
  const cardVariants = {
    initial: { opacity: 0, scale: 0.98 },
    enter: { opacity: 1, scale: 1 },
  };

  const modalImgVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 py-20 md:py-28">
      <SEO
        title="Gallery"
        description="Explore campus moments at Nahjurrashad Islamic College."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Campus <span className="text-emerald-600">Moments</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            A visual journey through our history, daily life, and celebrations.
          </motion.p>
        </div>

        {/* categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const active = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  active
                    ? "text-white"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-zinc-800"
                }`}
                aria-pressed={active}
              >
                {active && (
                  <span
                    className="absolute inset-0 bg-emerald-600 rounded-full"
                    aria-hidden
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* grid (no heavy Framer layout animations) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <motion.button
              key={image.id}
              onClick={() => setSelectedImage(image)}
              initial="initial"
              animate="enter"
              variants={cardVariants}
              transition={{ duration: 0.28 }}
              className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer aspect-[4/3] bg-gray-200 dark:bg-gray-800 p-0 border-0"
              aria-label={`Open ${image.title}`}
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              {/* Use plain <img> with lazy loading — browser handles memory better */}
              <img
                src={image.src}
                alt={image.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 will-change-transform group-hover:scale-110"
                width={1200}
                height={900}
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center text-white">
                <FiZoomIn className="size-8 mb-2" />
                <h3 className="font-serif text-lg font-bold">{image.title}</h3>
                <span className="text-sm text-emerald-300">
                  {image.category}
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <FiFilter className="size-10 mx-auto mb-2 opacity-50" />
            <p>No images for this category.</p>
          </div>
        )}
      </div>

      {/* modal (only thing using AnimatePresence) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[150] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setSelectedImage(null)}
            aria-modal="true"
            role="dialog"
          >
            {/* backdrop */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

            {/* controls */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-6 right-6 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition z-20"
            >
              <FiX className="size-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNavigate("prev");
              }}
              className="absolute left-4 md:left-8 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition z-20 hidden md:block"
              aria-label="Previous image"
            >
              <FiChevronLeft className="size-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNavigate("next");
              }}
              className="absolute right-4 md:right-8 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition z-20 hidden md:block"
              aria-label="Next image"
            >
              <FiChevronRight className="size-8" />
            </button>

            {/* image container */}
            <div className="relative z-10 p-4 max-w-6xl w-full flex flex-col items-center pointer-events-none">
              <motion.img
                key={selectedImage.id}
                src={selectedImage.src}
                alt={selectedImage.title}
                loading="eager"
                decoding="async"
                className="max-h-[80vh] w-auto max-w-full rounded-lg shadow-2xl object-contain pointer-events-auto"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={modalImgVariants}
                transition={{ type: "spring", stiffness: 220, damping: 26 }}
                style={{ willChange: "transform, opacity" }}
              />

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ delay: 0.06 }}
                className="mt-4 text-center pointer-events-auto"
              >
                <h3 className="text-2xl font-serif text-white font-bold">
                  {selectedImage.title}
                </h3>
                <p className="text-emerald-400">{selectedImage.category}</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
