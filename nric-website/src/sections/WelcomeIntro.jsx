import { motion } from "framer-motion";

export default function WelcomeIntro() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(16,185,129,0.03),transparent_70%)] pointer-events-none" />

      <div className="relative container mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* --- Left Column: Virtual Tour Video --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-emerald-100 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-zinc-900 border border-gray-100">
           <iframe
  src="https://www.youtube-nocookie.com/embed/njHQ1_zqMxI"
  title="NRIC Virtual Tour"
  loading="lazy"
  referrerPolicy="strict-origin-when-cross-origin"
  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  className="w-full h-full"
/>

            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg hidden md:block border border-gray-50">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                Virtual Tour
              </p>
            </div>
          </motion.div>

          {/* --- Right Column: Welcome Content --- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-emerald-700 uppercase bg-emerald-50 rounded-full">
              Established 2006
            </div>

            <h2 className="font-primary text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">
                Nahjurrashad
              </span>
            </h2>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                For over{" "}
                <span className="font-bold text-green-600">20 years</span>,
                Nahjurrashad Islamic College has stood as a beacon of knowledge
                in Kerala. Celebrating two decades of excellence, we continue
                our mission of integrating spiritual enlightenment with academic
                brilliance, molding a generation that leads with both intellect
                and heart.
              </p>
              <p>
                A center of Islamic scholarship integrated with modern education
                — fostering moral excellence, academic depth, and spiritual
                growth.
              </p>
              <p>
                We aim to nurture individuals who embody knowledge, empathy, and
                leadership — serving their communities with intellect and heart.
              </p>
            </div>

            <motion.div className="mt-10" whileHover={{ x: 5 }}>
              <a
                href="/about"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-xl"
              >
                Learn More About Our Vision
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
