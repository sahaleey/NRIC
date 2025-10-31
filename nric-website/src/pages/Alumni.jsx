import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiUsers, FiAward, FiMapPin, FiTrendingUp } from "react-icons/fi";
import { Helmet } from "react-helmet-async";

// --- Class-based Alumni Data ---
const alumniClasses = [
  {
    year: "2023",
    batch: "Class of 2023",
    totalGraduates: "45",
    notableAchievements: [
      "15 students pursued higher studies in Islamic universities",
      "10 graduates placed in IT companies",
      "5 students started their own businesses",
      "3 research papers published in international journals",
    ],
    careerPaths: [
      "Higher Education",
      "Technology",
      "Entrepreneurship",
      "Research",
    ],
    imageUrl: "/images/class-2023.jpg",
    color: "emerald",
  },
  {
    year: "2022",
    batch: "Class of 2022",
    totalGraduates: "42",
    notableAchievements: [
      "12 students admitted to DHIU for advanced studies",
      "8 graduates working in software development",
      "Community service projects in 5 districts",
      "2 alumni awarded national scholarships",
    ],
    careerPaths: [
      "Islamic Studies",
      "Software Development",
      "Social Work",
      "Education",
    ],
    imageUrl: "/images/class-2022.jpg",
    color: "blue",
  },
  {
    year: "2021",
    batch: "Class of 2021",
    totalGraduates: "38",
    notableAchievements: [
      "First batch with 100% placement record",
      "3 alumni published books on Islamic topics",
      "Digital literacy program for rural communities",
      "Alumni mentorship program established",
    ],
    careerPaths: [
      "Academic Research",
      "Content Creation",
      "Community Development",
      "Corporate Sector",
    ],
    imageUrl: "/images/class-2021.jpg",
    color: "amber",
  },
  {
    year: "2020",
    batch: "Class of 2020",
    totalGraduates: "35",
    notableAchievements: [
      "Pioneering online Islamic education initiatives",
      "5 alumni pursuing PhD programs abroad",
      "Successful tech startups launched",
      "International conference presentations",
    ],
    careerPaths: [
      "Higher Education",
      "Tech Entrepreneurship",
      "Islamic Finance",
      "Academic Publishing",
    ],
    imageUrl: "/images/class-2020.jpg",
    color: "violet",
  },
  {
    year: "2019",
    batch: "Class of 2019",
    totalGraduates: "32",
    notableAchievements: [
      "First international research collaborations",
      "Alumni association formally established",
      "8 graduates in teaching positions",
      "Community development projects scaled",
    ],
    careerPaths: [
      "Teaching",
      "Research",
      "Social Entrepreneurship",
      "Islamic Banking",
    ],
    imageUrl: "/images/class-2019.jpg",
    color: "red",
  },
  {
    year: "2018",
    batch: "Class of 2018",
    totalGraduates: "30",
    notableAchievements: [
      "Silver jubilee batch achievements",
      "International recognition for research work",
      "Alumni network expanded globally",
      "Industry partnerships established",
    ],
    careerPaths: [
      "International Education",
      "Corporate Leadership",
      "Non-profit Management",
      "Consulting",
    ],
    imageUrl: "/images/class-2018.jpg",
    color: "green",
  },
];

const alumniStats = [
  { number: "200+", label: "Total Graduates", icon: FiUsers },
  { number: "6", label: "Active Batches", icon: FiAward },
  { number: "15+", label: "Countries", icon: FiMapPin },
  { number: "95%", label: "Further Education Rate", icon: FiTrendingUp },
];

export default function Alumni() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
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
    red: {
      bg: "bg-red-500",
      text: "text-red-600",
      light: "bg-red-50 dark:bg-red-900/20",
    },
    green: {
      bg: "bg-green-500",
      text: "text-green-600",
      light: "bg-green-50 dark:bg-green-900/20",
    },
  };

  return (
    <div className="bg-linear-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50">
      <Helmet>
        <title>Nahjurrashad Islamic College | Alumni</title>
        <meta
          name="description"
          content="Official website of Nahjurrashad Islamic College (NRIC), Chamakkala. An institute blending Islamic scholarship with modern education and moral excellence."
        />

        <link
          rel="canonical"
          href="https://nric-chamakkala.vercel.app/alumni"
        />
      </Helmet>
      {/* --- 1. Alumni Hero Section --- */}
      <section className="relative h-96 flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-0">
          <img
            src="/images/IMG_4094.jpg"
            alt="Nahjurrashad Islamic College Alumni Network"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-gray-900/80 via-gray-800/60 to-gray-900/80 z-5"></div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Our <span className="text-amber-300">Alumni</span>
          </h1>

          <p className="text-xl md:text-2xl text-emerald-100 font-light max-w-2xl mx-auto leading-relaxed">
            Celebrating generations of graduates making impacts worldwide
            through Islamic values and modern education
          </p>
        </motion.div>
      </section>

      {/* --- 2. Alumni Statistics --- */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {alumniStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-600"
                >
                  <div className="inline-flex size-16 bg-emerald-500 rounded-xl items-center justify-center mb-4 mx-auto">
                    <IconComponent className="size-7 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* --- 3. Alumni Classes Grid --- */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 px-4 py-2 rounded-full text-sm font-semibold border border-amber-200 dark:border-amber-700">
                <FiAward className="size-4" />
                Graduating Classes
              </div>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Our{" "}
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Graduating Classes
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              Each graduating class represents a unique chapter in our college's
              history, carrying forward the legacy of integrated Islamic and
              modern education.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {alumniClasses.map((classData, index) => {
              const colors = colorMap[classData.color];

              return (
                <motion.div
                  key={classData.year}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 h-full">
                    {/* Class Header */}
                    <div
                      className={`${colors.bg} p-6 text-white relative overflow-hidden`}
                    >
                      <div className="absolute top-4 right-4 opacity-20">
                        <FiUsers className="size-16" />
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-serif text-2xl font-bold">
                            {classData.batch}
                          </h3>
                          <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                            {classData.totalGraduates} Graduates
                          </span>
                        </div>
                        <p className="text-white/90">
                          Graduation Year: {classData.year}
                        </p>
                      </div>
                    </div>

                    {/* Class Content */}
                    <div className="p-6">
                      {/* Notable Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                          <FiAward className={`size-4 ${colors.text}`} />
                          Notable Achievements
                        </h4>
                        <ul className="space-y-2">
                          {classData.notableAchievements.map(
                            (achievement, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div
                                  className={`size-1.5 ${colors.bg} rounded-full mt-2 flex-shrink-0`}
                                ></div>
                                <span className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                  {achievement}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      {/* Career Paths */}
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                          <FiTrendingUp className={`size-4 ${colors.text}`} />
                          Career Paths
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {classData.careerPaths.map((path, idx) => (
                            <span
                              key={idx}
                              className={`inline-block ${colors.light} ${colors.text} px-3 py-1 rounded-full text-xs font-semibold`}
                            >
                              {path}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
