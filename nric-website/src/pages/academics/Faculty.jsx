import { motion } from "framer-motion";
import {
  FiBook,
  FiAward,
  FiUsers,
  FiMail,
  FiPhone,
  FiGlobe,
  FiCheck,
  FiStar,
} from "react-icons/fi";
import { facultyMembers } from "../../data/faculty";

const facultyStats = [
  { number: "20+", label: "Qualified Faculty", icon: FiUsers },
  { number: "5+", label: "Years Average Experience", icon: FiAward },
  {
    number: "Hadith and Related Science",
    label: "Academic Department",
    icon: FiBook,
  },
  { number: "100%", label: "DHIU Certified", icon: FiStar },
];

export default function Faculty() {
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

  return (
    <motion.div
      className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 px-4 py-2 rounded-full text-sm font-semibold border border-amber-200 dark:border-amber-700">
              <FiUsers className="size-4" />
              Meet Our Educators
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Distinguished Faculty
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            Learn from experienced scholars and educators who combine deep
            Islamic knowledge with modern academic expertise, dedicated to
            nurturing the next generation of Muslim leaders and professionals.
          </motion.p>
        </motion.div>

        {/* Faculty Statistics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {facultyStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="inline-flex size-16 bg-amber-500 rounded-xl items-center justify-center mb-4 mx-auto">
                  <IconComponent className="size-7 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium text-sm">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Faculty by Department */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {facultyMembers.map((department, deptIndex) => (
            <motion.div variants={itemVariants} className="relative">
              {/* Faculty Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {department.members.map((faculty, facultyIndex) => (
                  <motion.div
                    key={faculty.name}
                    variants={cardVariants}
                    whileHover="hover"
                    className="group"
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 h-full">
                      {/* Faculty Image */}
                      <div className="relative h-64 overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center">
                          {faculty.image ? (
                            <img
                              src={faculty.image}
                              alt={faculty.name}
                              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <FiUsers className="size-16 text-gray-400 dark:text-gray-500" />
                          )}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="font-serif text-xl font-bold">
                            {faculty.name}
                          </h3>
                          <p className="text-white/90 text-sm">
                            {faculty.position}
                          </p>
                        </div>
                      </div>

                      {/* Faculty Details */}
                      <div className="p-6">
                        <div className="mb-4">
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            <strong className="text-gray-900 dark:text-white">
                              Experience:
                            </strong>{" "}
                            {faculty.experience}
                          </p>
                        </div>

                        {/* Specialization */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">
                            Specialization:
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {faculty.specialization}
                          </p>
                        </div>

                        {/* Bio */}
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                          {faculty.bio}
                        </p>

                        {/* Contact Information */}
                        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                          <div className="flex items-center justify-between text-xs">
                            <a
                              href={`mailto:${faculty.email}`}
                              className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                            >
                              <FiMail className="size-3" />
                              Email
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Teaching Philosophy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-8 lg:p-12 text-white shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                  Our Teaching Philosophy
                </h3>
                <p className="text-amber-100 text-lg leading-relaxed mb-6">
                  Our faculty believes in the holistic development of students,
                  combining rigorous academic training with spiritual and moral
                  guidance. We emphasize mentorship, research, and practical
                  application of knowledge in both Islamic and modern contexts.
                </p>
                <div className="space-y-3">
                  {[
                    "Student-centered learning approach",
                    "Integration of Islamic values in modern education",
                    "Research and innovation focus",
                    "Community engagement and service",
                  ].map((point, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <FiCheck className="size-5 text-amber-300" />
                      <span className="text-amber-100">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
                  <FiUsers className="size-16 text-amber-300 mx-auto mb-4" />
                  <p className="text-amber-100 font-semibold">
                    Mentorship Focus
                  </p>
                  <p className="text-amber-200 text-sm">
                    1:1 guidance for every student
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Join Our Team CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Join Our Academic Team
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              We're always looking for passionate educators and scholars who
              want to contribute to our mission of integrated Islamic and modern
              education.
            </p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
              View Faculty Opportunities
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
