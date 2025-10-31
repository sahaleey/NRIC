import { useVerseOfTheDay } from "../hooks/useVerseOfTheDay";
import { motion } from "framer-motion";

export default function WelcomeIntro() {
  const verse = useVerseOfTheDay();

  return (
    <section className="relative overflow-hidden bg-linear-to-t dark:from-gray-500 dar:via-gray-500 dark:to-gray-700 py-20 md:py-28">
      {/* Soft background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(16,185,129,0.05),transparent_70%)] pointer-events-none" />

      <div className="relative container mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* --- Verse of the Day --- */}
          {verse && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative bg-white dark:bg-gray-800/60 backdrop-blur-sm p-10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 dark:border-gray-700"
            >
              <div className="absolute -top-3 left-6 text-xs uppercase tracking-wider text-white font-semibold bg-emerald-500 dark:bg-emerald-500/50 px-3 py-1 rounded-full">
                Verse of the Day
              </div>

              <blockquote className="mt-6 font-serif text-2xl md:text-3xl leading-relaxed text-gray-800 dark:text-gray-100">
                “{verse.text}”
              </blockquote>
              <p className="text-right text-gray-500 dark:text-gray-400 mt-6 font-medium">
                — {verse.surah}
              </p>
            </motion.div>
          )}

          {/* --- Welcome Message --- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">
                Nahjurrashad
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-5">
              A center of Islamic scholarship integrated with modern education —
              fostering moral excellence, academic depth, and spiritual growth.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-8">
              We aim to nurture individuals who embody knowledge, empathy, and
              leadership — serving their communities with intellect and heart.
            </p>
            <a
              href="/about"
              className="inline-block px-6 py-3 rounded-full font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm"
            >
              Learn More About Our Vision
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
