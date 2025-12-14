import { useVerseOfTheDay } from "../hooks/useVerseOfTheDay";
import { motion } from "framer-motion";

export default function WelcomeIntro() {
  const verse = useVerseOfTheDay();

  return (
    <section className="relative overflow-hidden bg-linear-to-b    py-20 md:py-28">
      {/* Islamic geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50 L80 20 L80 80 L50 50 L20 80 L20 20 Z' fill='%23ffffff'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>
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
              className="relative bg-white  backdrop-blur-sm p-10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 "
            >
              <div className="absolute -top-3 left-6 text-xs uppercase tracking-wider text-white font-semibold bg-emerald-500  px-3 py-1 rounded-full">
                Verse of the Day
              </div>

              <blockquote className="mt-6 font-serif text-2xl md:text-3xl leading-relaxed text-gray-800 ">
                “{verse.text}”
              </blockquote>
              <p className="text-right text-gray-500  mt-6 font-medium">
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
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900  mb-6">
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">
                Nahjurrashad
              </span>
            </h2>
            <p className="text-gray-600  text-lg leading-relaxed mb-5">
              For over{" "}
              <span className="font-semibold text-emerald-600 ">20 years</span>,
              Nahjurrashad Islamic College has stood as a beacon of knowledge in
              Kerala. Celebrating two decades of excellence, we continue our
              mission of integrating spiritual enlightenment with academic
              brilliance, molding a generation that leads with both intellect
              and heart.
            </p>
            <p className="text-gray-600  text-lg leading-relaxed mb-5">
              A center of Islamic scholarship integrated with modern education —
              fostering moral excellence, academic depth, and spiritual growth.
            </p>
            <p className="text-gray-600  text-lg leading-relaxed mb-8">
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
