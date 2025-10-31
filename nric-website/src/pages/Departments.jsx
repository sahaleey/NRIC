import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiBookOpen,
  FiGlobe,
  FiUsers,
  FiAward,
  FiTrendingUp,
} from "react-icons/fi";
import { Helmet } from "react-helmet-async";

// --- Actual Departments Data ---
const departments = [
  {
    name: "Hadith & Related Sciences",
    description:
      "Comprehensive study of Prophetic traditions, authentication methods, and Islamic scholarship with modern research approaches.",

    icon: <FiBookOpen className="text-4xl text-emerald-600" />,
    features: [
      "Mustalah al-Hadith (Hadith Terminology)",
      "Chain Analysis & Authentication",
      "Study of Major Hadith Collections",
      "Contemporary Application of Hadith",
      "Research Methodology in Islamic Sciences",
    ],
    facultyCount: "8+ Scholars",
    programs: ["Bachelor's in Hadith Sciences", "Advanced Research Programs"],
    color: "emerald",
  },
  {
    name: "Arabic Language & Literature",
    description:
      "Advanced Arabic studies focusing on grammar, literature, rhetoric, and professional language application in Islamic contexts.",

    icon: <FiGlobe className="text-4xl text-blue-600" />,
    features: [
      "Advanced Nahv & Sarf (Grammar)",
      "Balagha (Rhetoric) & Adab (Literature)",
      "Classical & Modern Arabic Texts",
      "Professional Translation Skills",
      "Arabic for Islamic Scholarship",
    ],
    facultyCount: "6+ Language Experts",
    programs: ["Bachelor's in Arabic Literature"],
    color: "blue",
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      duration: 0.8,
    },
  },
};

const hoverVariants = {
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
};

export default function Departments() {
  const colorMap = {
    emerald: {
      bg: "bg-emerald-500",
      text: "text-emerald-600",
      light: "bg-emerald-50 dark:bg-emerald-900/20",
      border: "border-emerald-200",
    },
    blue: {
      bg: "bg-blue-500",
      text: "text-blue-600",
      light: "bg-blue-50 dark:bg-blue-900/20",
      border: "border-blue-200",
    },
  };

  return (
    <div className="bg-linear-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50 py-20 md:py-28 min-h-screen">
      <Helmet>
        <title>Nahjurrashad Islamic College | Department</title>
        <meta
          name="description"
          content="Official website of Nahjurrashad Islamic College (NRIC), Chamakkala. An institute blending Islamic scholarship with modern education and moral excellence."
        />

        <link
          rel="canonical"
          href="https://nric-chamakkala.vercel.app/department"
        />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- 1. Page Header --- */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold border border-emerald-200 dark:border-emerald-700 mb-6">
            <FiUsers className="size-4" />
            Academic Departments
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Our{" "}
            <span className="bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Departments
            </span>
          </h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Specialized departments offering in-depth knowledge in Hadith
            sciences and Arabic language, combining traditional Islamic
            scholarship with contemporary academic excellence.
          </motion.p>
        </motion.div>

        {/* Department Statistics */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="text-center bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
              2
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              Specialized Departments
            </div>
          </div>
          <div className="text-center bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              14+
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              Expert Faculty
            </div>
          </div>
          <div className="text-center bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">
              4+
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              Degree Programs
            </div>
          </div>
        </motion.div>

        {/* --- 2. Departments Grid --- */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {departments.map((dept) => {
            const colors = colorMap[dept.color];

            return (
              <motion.div
                key={dept.slug}
                variants={cardVariants}
                whileHover="hover"
                className="group"
              >
                <div
                  className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 h-full`}
                >
                  {/* Department Header */}
                  <div
                    className={`${colors.bg} p-6 text-white relative overflow-hidden`}
                  >
                    <div className="absolute top-4 right-4 opacity-20">
                      {dept.icon}
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="size-14 bg-white/20 rounded-xl flex items-center justify-center">
                          {dept.icon}
                        </div>
                        <div>
                          <h3 className="font-serif text-2xl font-bold">
                            {dept.name}
                          </h3>
                          <p className="text-white/90 flex items-center gap-2 mt-1">
                            <FiUsers className="size-4" />
                            {dept.facultyCount}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Department Content */}
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {dept.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        <FiAward className={`size-4 ${colors.text}`} />
                        Key Focus Areas
                      </h4>
                      <div className="space-y-2">
                        {dept.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div
                              className={`size-2 ${colors.bg} rounded-full flex-shrink-0`}
                            ></div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Programs Offered */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <FiTrendingUp className={`size-4 ${colors.text}`} />
                        Programs Offered
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {dept.programs.map((program, index) => (
                          <span
                            key={index}
                            className={`inline-block ${colors.light} ${colors.text} px-3 py-1 rounded-full text-xs font-semibold border ${colors.border}`}
                          >
                            {program}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Explore Department
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-8 lg:p-12 text-white shadow-2xl">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
              Integrated Learning Approach
            </h3>
            <p className="text-emerald-100 text-lg max-w-3xl mx-auto leading-relaxed mb-6">
              Both departments work collaboratively to provide students with a
              comprehensive education that combines deep Islamic knowledge with
              language proficiency, preparing them for scholarly excellence and
              professional success.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
