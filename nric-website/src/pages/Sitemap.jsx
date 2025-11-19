import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiLayers, FiFileText, FiUsers, FiArrowRight } from "react-icons/fi";
import { Helmet } from "react-helmet-async";
import { siteSections } from "../data/sitemapData";

export default function Sitemap() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
    hover: {
      y: -5,
      scale: 1.03,
      transition: { type: "spring", stiffness: 400, damping: 25 },
    },
  };

  const colorMap = {
    emerald: {
      bg: "bg-emerald-500",
      text: "text-emerald-600",
      light: "bg-emerald-50 dark:bg-emerald-900/20",
    },
    blue: {
      bg: "bg-blue-500",
      text: "text-blue-600",
      light: "bg-blue-50 dark:bg-blue-900/20",
    },
    amber: {
      bg: "bg-amber-500",
      text: "text-amber-600",
      light: "bg-amber-50 dark:bg-amber-900/20",
    },
    violet: {
      bg: "bg-violet-500",
      text: "text-violet-600",
      light: "bg-violet-50 dark:bg-violet-900/20",
    },
  };

  return (
    <div className="bg-linear-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50 py-20 md:py-28 min-h-screen">
      <Helmet>
        <title>Nahjurrashad Islamic College | Sitemap</title>
        <meta
          name="description"
          content="Official website of Nahjurrashad Islamic College (NRIC), Chamakkala. An institute blending Islamic scholarship with modern education and moral excellence."
        />

        <link
          rel="canonical"
          href="https://nric-chamakkala.vercel.app/sitemap"
        />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.header
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold border border-emerald-200 dark:border-emerald-700">
              <FiLayers className="size-4" />
              Complete Website Guide
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Website{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Sitemap
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            Explore our complete website structure. Every page, neatly organized
            by category.
          </motion.p>
        </motion.header>

        {/* Stats */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mb-16"
          aria-label="Sitemap statistics"
        >
          {[
            { number: "5", label: "Main Categories", icon: FiLayers },
            { number: "15+", label: "Total Pages", icon: FiFileText },
            { number: "2", label: "Academic Departments", icon: FiUsers },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 "
              >
                <div className="inline-flex size-16 bg-emerald-500 rounded-xl items-center justify-center mb-4 mx-auto">
                  <Icon className="size-7 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium text-sm">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.section>

        {/* Sitemap Grid */}
        <nav aria-label="Full site structure">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {siteSections.map((section) => {
              const Icon = section.icon;
              const colors = colorMap[section.color];
              return (
                <motion.div
                  key={section.section}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group"
                >
                  <div
                    className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-${section.color}-200 border border-gray-200 dark:border-gray-700 p-6 h-full transition-all duration-300`}
                  >
                    {/* Section Header */}
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                      <div
                        className={`size-12 ${colors.bg} rounded-xl flex items-center justify-center`}
                      >
                        <Icon className="size-6 text-white" />
                      </div>
                      <h2 className="font-serif text-xl font-bold text-gray-900 dark:text-white">
                        {section.section}
                      </h2>
                    </div>

                    {/* Pages List */}
                    <ul className="space-y-4">
                      {section.pages.map((page) => (
                        <li key={page.name}>
                          <Link
                            to={page.path}
                            className="group/link block p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                          >
                            <div className="flex items-start gap-3">
                              <div
                                className={`size-2 ${colors.bg} rounded-full mt-2 flex-shrink-0`}
                              ></div>
                              <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-gray-900 dark:text-white group-hover/link:text-emerald-600 dark:group-hover/link:text-emerald-400 flex items-center gap-2 transition-colors">
                                  {page.name}
                                  <FiArrowRight className="size-3 opacity-0 group-hover/link:opacity-100 transform group-hover/link:translate-x-1 transition-all" />
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 leading-relaxed">
                                  {page.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </nav>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-8 lg:p-12 text-white shadow-2xl">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
              Need Help Navigating?
            </h3>
            <p className="text-emerald-100 text-lg max-w-2xl mx-auto leading-relaxed mb-6">
              Can’t find what you’re looking for? Our team can guide you through
              admissions, programs, or campus info.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Contact Support
              </Link>
              <Link
                to="/"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
              >
                Return to Homepage
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
