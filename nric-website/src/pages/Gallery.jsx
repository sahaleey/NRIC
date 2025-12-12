import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiZoomIn,
  FiFilter,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiLoader,
  FiDownload,
  FiChevronUp,
} from "react-icons/fi";
import SEO from "../components/SEO";
import { galleryImages } from "../data/gallery";

const categories = ["All", "Campus", "Events", "Students"];
const ITEMS_PER_PAGE = 12;

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [observerEnabled, setObserverEnabled] = useState(false);

  const loadMoreRef = useRef(null);
  const modalRef = useRef(null);

  // 1. Filter Logic
  const filteredImages = useMemo(() => {
    return filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);
  }, [filter]);

  // 2. Visible Images (Infinite Scroll Chunking)
  const visibleImages = useMemo(() => {
    return filteredImages.slice(0, visibleCount);
  }, [filteredImages, visibleCount]);

  // 3. Related Images (With "Pinterest" Infinite Feel)
  const relatedImages = useMemo(() => {
    if (!selectedImage) return [];

    const related = filteredImages.filter(
      (img) =>
        img.id !== selectedImage.id && img.category === selectedImage.category
    );

    // ⚠️ Logic: If fewer than 10 items, duplicate them to ensure the sidebar scrolls nicely
    let displayList = [...related];
    if (displayList.length > 0) {
      while (displayList.length < 12) {
        displayList = [...displayList, ...related];
      }
    }

    // Assign unique keys for rendering
    return displayList.map((img, index) => ({
      ...img,
      uniqueKey: `${img.id}-${index}`,
    }));
  }, [selectedImage, filteredImages]);

  // 4. Infinite Scroll Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          !isLoadingMore &&
          visibleCount < filteredImages.length
        ) {
          setIsLoadingMore(true);
          // Small delay to show the "Loading..." spinner for UX
          setTimeout(() => {
            setVisibleCount((prev) =>
              Math.min(prev + ITEMS_PER_PAGE, filteredImages.length)
            );
            setIsLoadingMore(false);
          }, 800);
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    const currentRef = loadMoreRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [visibleCount, filteredImages.length, isLoadingMore]);

  // Reset when filter changes
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [filter]);

  // 5. Navigation Logic (Next/Prev)
  const handleNavigate = useCallback(
    (direction) => {
      if (!selectedImage || filteredImages.length === 0) return;

      const currentIndex = filteredImages.findIndex(
        (img) => img.id === selectedImage.id
      );
      if (currentIndex === -1) return;

      const nextIndex =
        direction === "next"
          ? (currentIndex + 1) % filteredImages.length
          : (currentIndex - 1 + filteredImages.length) % filteredImages.length;

      setSelectedImage(filteredImages[nextIndex]);
    },
    [selectedImage, filteredImages]
  );

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      switch (e.key) {
        case "Escape":
          setSelectedImage(null);
          break;
        case "ArrowRight":
          handleNavigate("next");
          break;
        case "ArrowLeft":
          handleNavigate("prev");
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, handleNavigate]);

  // Scroll Detection (for "Back to Top" button)
  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "unset";
    const handleScroll = () => setIsScrolled(window.scrollY > 300);
    if (!selectedImage) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [selectedImage]);

  // Scroll to Top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    if (visibleCount === 0 && filteredImages.length > 0) {
      setVisibleCount(ITEMS_PER_PAGE);
    }
  }, [filteredImages]);
  useEffect(() => {
    setVisibleCount(Math.min(ITEMS_PER_PAGE, filteredImages.length));
  }, []);
  useEffect(() => {
    requestAnimationFrame(() => {
      setObserverEnabled(true);
    });
  }, []);

  // Download Handler
  const handleDownload = async (imageSrc, imageTitle) => {
    try {
      const response = await fetch(imageSrc);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${imageTitle.replace(/\s+/g, "-").toLowerCase()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50  py-20 md:py-28 transition-colors duration-300">
      <SEO
        title="Gallery | Nahjurrashad Islamic College"
        description="Explore our campus moments through stunning photography of campus life, events, and student activities."
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Page Header --- */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-6xl font-bold text-gray-900  mb-4"
          >
            Campus <span className="text-emerald-600">Moments</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600  max-w-2xl mx-auto"
          >
            A visual journey through our history, daily life, and celebrations.
          </motion.p>
        </div>

        {/* --- Filters (Sticky) --- */}
        <div className="sticky max-sm:top-14 top-20 z-30 bg-gray-50/95  backdrop-blur-sm py-4 mb-8 -mx-4 px-4 flex justify-center">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const isActive = filter === category;
              return (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white shadow-lg shadow-emerald-500/25"
                      : "text-gray-600  hover:bg-gray-200 "
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="filter-pill"
                      className="absolute inset-0 bg-emerald-600 rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* --- MASONRY GRID (Pinterest Style) --- */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5">
          {visibleImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className="break-inside-avoid mb-5"
            >
              <div
                onClick={() => setSelectedImage(image)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer bg-gray-200  shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                  <FiZoomIn className="size-8 mb-2 opacity-80" />
                  <h3 className="font-serif text-lg font-bold text-center leading-tight">
                    {image.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Load More Spinner --- */}
        {visibleCount < filteredImages.length && (
          <div ref={loadMoreRef} className="py-16 flex justify-center w-full">
            {isLoadingMore && (
              <div className="flex flex-col items-center gap-3 text-emerald-600">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                >
                  <FiLoader className="size-8" />
                </motion.div>
                <span className="text-sm font-medium text-gray-500">
                  Discovering more...
                </span>
              </div>
            )}
          </div>
        )}

        {filteredImages.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <FiFilter className="size-12 mx-auto mb-3 opacity-30" />
            <p className="text-lg">No moments found in this category.</p>
            <button
              onClick={() => setFilter("All")}
              className="mt-4 text-emerald-600 font-medium hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* --- DETAIL MODAL (Pinterest Style) --- */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-0 sm:p-4 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
              onClick={() => setSelectedImage(null)}
            />

            {/* Modal Card */}
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl h-full sm:h-[90vh] bg-white  sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button (Mobile Absolute) */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 left-4 z-50 p-2 bg-black/50 text-white rounded-full lg:hidden backdrop-blur-md"
              >
                <FiX className="size-5" />
              </button>

              {/* --- LEFT: Main Image --- */}
              <div className="lg:w-[65%] h-[50vh] lg:h-full bg-black relative flex items-center justify-center group">
                <img
                  key={selectedImage.id}
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />

                {/* Desktop Nav Arrows */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigate("prev");
                  }}
                  className="absolute left-6 p-4 bg-black/20 hover:bg-black/50 text-white rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 hidden lg:block"
                >
                  <FiChevronLeft className="size-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigate("next");
                  }}
                  className="absolute right-6 p-4 bg-black/20 hover:bg-black/50 text-white rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 hidden lg:block"
                >
                  <FiChevronRight className="size-6" />
                </button>
              </div>

              {/* --- RIGHT: Details & Suggestions --- */}
              {/* Flex-1 ensures it takes remaining height on mobile */}
              <div className="lg:w-[35%] flex-1 flex flex-col bg-white  border-l border-gray-100  h-full overflow-hidden">
                {/* Info Header */}
                <div className="p-6 border-b border-gray-100  flex-shrink-0">
                  <div className="flex justify-between items-start mb-1">
                    <h2 className="text-2xl font-serif font-bold text-gray-900  line-clamp-2">
                      {selectedImage.title}
                    </h2>
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="hidden lg:block p-2 hover:bg-gray-100  rounded-full transition-colors"
                    >
                      <FiX className="size-6 text-gray-500" />
                    </button>
                  </div>
                  <span className="inline-block px-3 py-1 bg-emerald-50  text-emerald-600  text-xs font-bold uppercase tracking-wider rounded-full">
                    {selectedImage.category}
                  </span>
                </div>

                {/* Scrollable Suggestions Area */}
                <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                  <h4 className="text-sm font-bold text-gray-900  mb-4 top-0 bg-white  z-10 py-2 flex items-center gap-2">
                    More like this
                  </h4>

                  {relatedImages.length > 0 ? (
                    <div className="grid grid-cols-2 gap-3">
                      {relatedImages.map((image) => (
                        <div
                          key={image.uniqueKey}
                          onClick={() => setSelectedImage(image)}
                          className="cursor-pointer group relative rounded-xl overflow-hidden aspect-square bg-gray-100 "
                        >
                          <img
                            src={image.src}
                            alt={image.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-sm italic">
                      No related images found.
                    </p>
                  )}
                </div>

                {/* Footer Buttons */}
                <div className="p-6 border-t border-gray-100  flex-shrink-0">
                  <button
                    onClick={() =>
                      handleDownload(selectedImage.src, selectedImage.title)
                    }
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-gray-100  hover:bg-emerald-600 hover:text-white  text-gray-900  font-bold rounded-xl transition-all duration-300"
                  >
                    <FiDownload className="size-5" />
                    Download Image
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Back to Top */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-xl shadow-emerald-600/30 z-40 transition-transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <FiChevronUp className="size-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
