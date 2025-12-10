import { motion } from "framer-motion";
import {
  FiAward,
  FiCheck,
  FiBook,
  FiGlobe,
  FiUsers,
  FiStar,
} from "react-icons/fi";

const affiliations = [
  {
    icon: FiBook,
    name: "Darul Huda Islamic University",
    shortName: "DHIU",
    description:
      "Premier Islamic university providing comprehensive Islamic and modern education with global recognition.",
    status: "Primary Affiliate",
    since: "2005",
    benefits: [
      "Internationally Recognized Degrees",
      "Standardized Curriculum",
      "Faculty Exchange Programs",
      "Research Collaboration",
    ],
    color: "emerald",
  },
];

const accreditationFeatures = [
  {
    icon: FiCheck,
    title: "Quality Education",
    description:
      "Rigorous academic standards maintained through regular audits and assessments",
    color: "emerald",
  },
  {
    icon: FiUsers,
    title: "Expert Faculty",
    description:
      "Qualified teachers and scholars with national and international recognition",
    color: "blue",
  },
  {
    icon: FiStar,
    title: "Global Recognition",
    description:
      "Degrees and certificates recognized by educational institutions worldwide",
    color: "amber",
  },
  {
    icon: FiBook,
    title: "Comprehensive Curriculum",
    description:
      "Balanced integration of Islamic studies and modern academic disciplines",
    color: "violet",
  },
];

const recognitionStats = [
  { number: "20+", label: "Years of Excellence" },
  { number: "500+", label: "Successful Graduates" },
  { number: "20+", label: "Qualified Faculty" },
  { number: "Hadith and Science", label: "Academic Departments" },
];

export default function Accreditation() {
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
      border: "border-emerald-200",
      light: "bg-emerald-50",
    },
    blue: {
      bg: "bg-blue-500",
      text: "text-blue-600",
      border: "border-blue-200",
      light: "bg-blue-50",
    },
    amber: {
      bg: "bg-amber-500",
      text: "text-amber-600",
      border: "border-amber-200",
      light: "bg-amber-50",
    },
    violet: {
      bg: "bg-violet-500",
      text: "text-violet-600",
      border: "border-violet-200",
      light: "bg-violet-50",
    },
  };

  return (
    <motion.div
      className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50/50  "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 bg-emerald-50  text-emerald-700  px-4 py-2 rounded-full text-sm font-semibold border border-emerald-200 ">
              <FiAward className="size-4" />
              Quality & Recognition
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900  mb-6"
          >
            Accreditation &{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Affiliation
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600  leading-relaxed"
          >
            Nahjurrashad Islamic College maintains prestigious affiliations and
            accreditations that ensure the highest standards of education,
            combining Islamic scholarship with modern academic excellence.
          </motion.p>
        </motion.div>

        {/* Recognition Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {recognitionStats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center bg-white  rounded-2xl p-6 shadow-lg border border-gray-200 "
            >
              <div className="text-3xl md:text-4xl font-bold text-emerald-600  mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600  font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Affiliations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="font-serif text-3xl md:text-4xl font-bold text-gray-900  text-center mb-12"
          >
            Our Prestigious Affiliations
          </motion.h2>

          <div className="flex justify-center mb-16">
            {affiliations.map((affiliation) => {
              const IconComponent = affiliation.icon;
              const colors = colorMap[affiliation.color];

              return (
                <motion.div
                  key={affiliation.name}
                  variants={cardVariants}
                  whileHover="hover"
                  className="w-full max-w-md"
                >
                  <div className="bg-white  rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200  overflow-hidden transition-all duration-300 h-full flex flex-col">
                    {/* Header */}
                    <div
                      className={`${colors.bg} p-6 text-white relative overflow-hidden`}
                    >
                      <div className="absolute top-4 right-4 opacity-20">
                        <IconComponent className="size-16" />
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="size-12 bg-white/20 rounded-xl flex items-center justify-center">
                            <IconComponent className="size-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">
                              {affiliation.shortName}
                            </h3>
                            <p className="text-white/80 text-sm">
                              {affiliation.status}
                            </p>
                          </div>
                        </div>
                        <p className="text-white/90 font-semibold">
                          {affiliation.name}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-grow">
                      <p className="text-gray-600  leading-relaxed mb-4">
                        {affiliation.description}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-500  mb-4">
                        <span>Affiliated since {affiliation.since}</span>
                        <span
                          className={`px-2 py-1 ${colors.light} ${colors.text} rounded-full text-xs font-semibold`}
                        >
                          Active
                        </span>
                      </div>

                      {/* Benefits */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900  text-sm mb-2">
                          Key Benefits:
                        </h4>
                        {affiliation.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <FiCheck
                              className={`size-4 ${colors.text} flex-shrink-0`}
                            />
                            <span className="text-sm text-gray-600 ">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Accreditation Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="font-serif text-3xl md:text-4xl font-bold text-gray-900  text-center mb-12"
          >
            Why Our Accreditations Matter
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accreditationFeatures.map((feature) => {
              const IconComponent = feature.icon;
              const colors = colorMap[feature.color];

              return (
                <motion.div
                  key={feature.title}
                  variants={cardVariants}
                  className="group text-center"
                >
                  <div className="bg-white  rounded-2xl p-6 border border-gray-200  h-full transition-all duration-300 hover:shadow-lg">
                    <div
                      className={`inline-flex size-16 ${colors.bg} rounded-xl items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="size-7 text-white" />
                    </div>

                    <h3 className="font-serif text-xl font-bold text-gray-900  mb-3">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600  leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* DHIU Special Highlight */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-8 lg:p-12 text-white shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <FiBook className="size-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold">
                      Darul Huda Islamic University
                    </h3>
                    <p className="text-emerald-100">Primary Academic Partner</p>
                  </div>
                </div>
                <p className="text-emerald-100 text-lg leading-relaxed mb-6">
                  Our strategic partnership with DHIU ensures that students
                  receive a comprehensive education that balances traditional
                  Islamic knowledge with contemporary academic disciplines,
                  preparing them for success in both worlds.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    International Curriculum
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    Qualified Scholars
                  </span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
                  <FiAward className="size-16 text-white mx-auto mb-4" />
                  <p className="text-emerald-100 font-semibold">
                    Premium Islamic Education
                  </p>
                  <p className="text-emerald-200 text-sm">Since 2005</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Verification Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white  rounded-2xl p-8 shadow-lg border border-gray-200 ">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900  mb-4">
              Verify Our Credentials
            </h3>
            <p className="text-gray-600  text-lg mb-6 max-w-2xl mx-auto">
              All our affiliations and accreditations are verifiable through the
              respective governing bodies. Contact our administration office for
              official documentation.
            </p>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
              Request Verification Documents
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
