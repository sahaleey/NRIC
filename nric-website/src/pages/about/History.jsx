import { motion } from "framer-motion";
import { FiTarget, FiEye, FiAward, FiUsers } from "react-icons/fi";

export default function History() {
  const timelineEvents = [
    {
      year: "2006",
      title: "Founded with DHIU Affiliation",
      description:
        "Began its journey under the affiliation of Darul Huda Islamic University, with a mission to blend Islamic scholarship and modern education.",
    },
    {
      year: "2015",
      title: "Campus Expansion",
      description:
        "Expanded facilities to accommodate growing student community",
    },
    {
      year: "2016",
      title: "First Batch Graduated",
      description:
        "Marked a major milestone as the first batch of students successfully completed their graduation from Nahjurrashad.",
    },
    {
      year: "2023",
      title: "Digital Transformation",
      description:
        "Implemented modern learning management systems and digital resources",
    },
  ];

  const visionPillars = [
    {
      icon: FiTarget,
      title: "Our Mission",
      description:
        "To provide holistic education that integrates Islamic values with academic excellence, nurturing students who excel in both Deen and Dunya.",
      color: "emerald",
    },
    {
      icon: FiEye,
      title: "Our Vision",
      description:
        "To be a leading institution that produces compassionate leaders and scholars who serve humanity with knowledge and integrity.",
      color: "blue",
    },
    {
      icon: FiAward,
      title: "Our Values",
      description:
        "Excellence, Integrity, Compassion, and Service - the core principles guiding every aspect of our institution.",
      color: "amber",
    },
    {
      icon: FiUsers,
      title: "Our Community",
      description:
        "Building a vibrant learning community where students, faculty, and alumni grow together in knowledge and faith.",
      color: "violet",
    },
  ];

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
    <motion.div
      className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 m-8">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold border border-emerald-200 dark:border-emerald-700">
              <FiAward className="size-4" />
              Our Legacy & Future
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              History & Vision
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            From humble beginnings to becoming a beacon of integrated education,
            our journey reflects our unwavering commitment to nurturing minds
            and souls.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* History Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="font-serif text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8"
            >
              Our Journey
            </motion.h2>

            <div className="space-y-8 relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-emerald-200 dark:bg-emerald-800"></div>

              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  variants={itemVariants}
                  className="flex items-start gap-6 relative"
                >
                  {/* Year Marker */}
                  <div className="flex-shrink-0 size-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg z-10">
                    <span className="text-white font-bold text-sm">
                      {event.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                    <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Founding Story */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="font-serif text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8"
            >
              Our Foundation
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                Founded on the principles of integrating spiritual enlightenment
                with academic excellence, Nahjurrashad Islamic College began as
                a humble endeavor to nurture a generation of scholars and
                leaders grounded in both Islamic tradition and modern knowledge.
              </p>

              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                Affiliated with the esteemed{" "}
                <strong className="text-emerald-600 dark:text-emerald-400">
                  Darul Huda Islamic University (DHIU)
                </strong>
                , our curriculum represents a carefully balanced blend of{" "}
                <em>Deen</em> and <em>Dunya</em>. We are committed to providing
                a holistic education that prepares students for the challenges
                of the modern world while anchoring them in strong moral and
                ethical values.
              </p>

              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Our vision is to be a beacon of knowledge, radiating the light
                of faith and wisdom, and producing graduates who serve their
                communities with integrity, compassion, and excellence in all
                their endeavors.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Vision & Mission Pillars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="font-serif text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12"
          >
            Our Guiding Principles
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visionPillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              const colors = colorMap[pillar.color];

              return (
                <motion.div
                  key={pillar.title}
                  variants={cardVariants}
                  className="group"
                >
                  <div
                    className={`${colors.light} rounded-2xl p-6 border border-gray-200 dark:border-gray-700 h-full text-center transition-all duration-300 hover:shadow-lg`}
                  >
                    <div
                      className={`inline-flex size-16 ${colors.bg} rounded-xl items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="size-7 text-white" />
                    </div>

                    <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {pillar.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* DHIU Affiliation Highlight */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-8 lg:p-12 text-white shadow-2xl">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
              Proudly Affiliated with Darul Huda Islamic University
            </h3>
            <p className="text-emerald-100 text-lg max-w-2xl mx-auto leading-relaxed">
              Our partnership with DHIU ensures the highest standards of Islamic
              education while maintaining academic excellence in modern
              disciplines.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
