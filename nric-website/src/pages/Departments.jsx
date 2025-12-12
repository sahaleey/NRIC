import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiBookOpen,
  FiGlobe,
  FiUsers,
  FiAward,
  FiTrendingUp,
  FiUserCheck,
  FiCheckCircle, // Added for authority badge
} from "react-icons/fi";
import SEO from "../components/SEO";

// --- Actual Departments Data ---
const departments = [
  {
    slug: "hadith",
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
    hod: {
      name: "Shuaib Hudawi Vallapuzha",
      role: "Head of Department",
      image: "/images/faculty/shuhaib.jpg",
      message:
        "We strive to revive the legacy of Hadith scholarship by combining traditional chain analysis with contemporary critical thinking.",
    },
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

export default function Departments() {
  const colorMap = {
    emerald: {
      bg: "bg-emerald-500",
      text: "text-emerald-600",
      light: "bg-emerald-50 ",
      border: "border-emerald-200",
      darkText: "text-emerald-800 ",
      hodBg: "bg-emerald-50/50 ",
      hodBorder: "border-emerald-100 ",
    },
    blue: {
      bg: "bg-blue-500",
      text: "text-blue-600",
      light: "bg-blue-50 ",
      border: "border-blue-200",
      darkText: "text-blue-800 ",
      hodBg: "bg-blue-50/50 ",
      hodBorder: "border-blue-100 ",
    },
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50/50   py-20 md:py-28 min-h-screen">
      <SEO
        title="Our Departments"
        description="Explore the various academic departments at NRIC, from Islamic Studies to Modern Sciences."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- 1. Page Header --- */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-emerald-50  text-emerald-700  px-4 py-2 rounded-full text-sm font-semibold border border-emerald-200  mb-6">
            <FiUsers className="size-4" />
            Academic Departments
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900  mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Departments
            </span>
          </h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600  mt-4 max-w-3xl mx-auto leading-relaxed"
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
          <div className="text-center bg-white  rounded-2xl p-6 shadow-lg border border-gray-200 ">
            <div className="text-3xl font-bold text-emerald-600  mb-2">
              Hadith & Science
            </div>
            <div className="text-gray-600  font-medium">
              Specialized Department
            </div>
          </div>
          <div className="text-center bg-white  rounded-2xl p-6 shadow-lg border border-gray-200 ">
            <div className="text-3xl font-bold text-blue-600  mb-2">14+</div>
            <div className="text-gray-600  font-medium">Expert Faculty</div>
          </div>
          <div className="text-center bg-white  rounded-2xl p-6 shadow-lg border border-gray-200 ">
            <div className="text-3xl font-bold text-amber-600  mb-2">
              3 Years
            </div>
            <div className="text-gray-600  font-medium">Degree Programs</div>
          </div>
        </motion.div>

        {/* --- 2. Departments Grid --- */}
        <motion.div
          className="flex justify-center mb-16"
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
                className="group w-full max-w-4xl"
              >
                <div className="bg-white  rounded-3xl shadow-xl border border-gray-200  overflow-hidden transition-all duration-300">
                  {/* Department Header */}
                  <div
                    className={`${colors.bg} p-8 text-white relative overflow-hidden`}
                  >
                    <div className="absolute top-4 right-4 opacity-20 transform scale-150">
                      {dept.icon}
                    </div>
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                      <div className="size-16 bg-white/20 rounded-2xl flex items-center justify-center shadow-inner backdrop-blur-sm">
                        {dept.icon}
                      </div>
                      <div>
                        <h3 className="font-serif text-3xl font-bold">
                          {dept.name}
                        </h3>
                        <p className="text-white/90 flex items-center gap-2 mt-2 font-medium">
                          <FiUsers className="size-4" />
                          {dept.facultyCount}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Main Content Area */}
                  <div className="p-8 grid md:grid-cols-2 gap-8">
                    {/* Left Column: Info & Features */}
                    <div className="space-y-8">
                      <div>
                        <h4 className="font-bold text-lg text-gray-900  mb-3">
                          About the Department
                        </h4>
                        <p className="text-gray-600  leading-relaxed text-sm md:text-base">
                          {dept.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900  mb-3 flex items-center gap-2">
                          <FiAward className={`size-5 ${colors.text}`} />
                          Key Focus Areas
                        </h4>
                        <ul className="space-y-2">
                          {dept.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <span
                                className={`mt-1.5 size-1.5 ${colors.bg} rounded-full flex-shrink-0`}
                              />
                              <span className="text-sm text-gray-600  font-medium">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900  mb-3 flex items-center gap-2">
                          <FiTrendingUp className={`size-5 ${colors.text}`} />
                          Programs Offered
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {dept.programs.map((program, index) => (
                            <span
                              key={index}
                              className={`inline-block ${colors.light} ${colors.darkText} px-3 py-1.5 rounded-lg text-xs font-bold border ${colors.border}`}
                            >
                              {program}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: HoD Profile Card (IMPROVED UI) */}
                    <div
                      className={`rounded-2xl p-6 border ${colors.hodBorder} ${colors.hodBg} flex flex-col transition-all duration-300`}
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 ">
                          <FiUserCheck className="size-4" />
                          Leadership
                        </div>
                        {/* Optional: Add Department Icon here faintly */}
                      </div>

                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative">
                          <img
                            src={dept.hod.image}
                            alt={dept.hod.name}
                            className="size-16 md:size-20 rounded-full object-cover border-4 border-white  shadow-md"
                          />
                          <div
                            className={`absolute bottom-0 right-0 p-1 bg-white  rounded-full border border-gray-200 `}
                          >
                            <FiCheckCircle
                              className={`size-4 ${colors.text}`}
                            />
                          </div>
                        </div>
                        <div>
                          <h5 className="font-serif text-lg md:text-xl font-bold text-gray-900  leading-tight">
                            {dept.hod.name}
                          </h5>
                          <p
                            className={`text-sm font-medium ${colors.text} mt-1`}
                          >
                            {dept.hod.role}
                          </p>
                        </div>
                      </div>

                      <div className="relative bg-white  p-5 rounded-xl shadow-sm border border-gray-100  italic text-gray-600  text-sm leading-relaxed">
                        {/* Watermark Quote Icon */}
                        <span className="absolute -top-3 left-4 text-5xl text-gray-900/40  leading-none select-none font-serif">
                          "
                        </span>
                        <p className="relative z-10">{dept.hod.message}</p>
                      </div>
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
          <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Decorative Background Circle */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 relative z-10">
              Integrated Learning Approach
            </h3>
            <p className="text-emerald-100 text-lg max-w-3xl mx-auto leading-relaxed mb-6 relative z-10">
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
