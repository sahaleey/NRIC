import { motion } from "framer-motion";
import { FiAward, FiUsers, FiTarget } from "react-icons/fi";
import { GrBlockQuote } from "react-icons/gr";

const leadershipTeam = [
  {
    role: "Chairman",
    name: "Hayder Haji",
    quote:
      "Nahjurrashad was founded not merely to build careers, but to forge character. We are guided by the light of faith, illuminating a path where modern knowledge serves timeless truths.",
    image: "/src/assets/Chairman.jpg",

    color: "emerald",
  },
  {
    role: "Principal",
    name: "Muhammed Shafi Hudawi",
    quote:
      "At NRIC, we believe excellence is a form of Ihsan. Our mission is to seamlessly integrate rigorous academic inquiry with profound Islamic scholarship, creating well-rounded individuals.",
    image: "/src/assets/Principal.jpg",

    color: "blue",
  },
  {
    role: "Vice Principal",
    name: "Anwer Muhyidheen Hudawi",
    quote:
      "Our campus is more than just classrooms; it's a community. We are dedicated to the holistic development of every student—intellectually, spiritually, and personally.",
    image: "/src/assets/vice-principal.jpg",

    color: "amber",
  },
];

const leadershipPrinciples = [
  {
    icon: FiTarget,
    title: "Visionary Guidance",
    description:
      "Strategic direction rooted in Islamic principles and educational excellence",
    color: "emerald",
  },
  {
    icon: FiUsers,
    title: "Student-Centered",
    description:
      "Putting student growth and development at the heart of all decisions",
    color: "blue",
  },
  {
    icon: FiAward,
    title: "Academic Excellence",
    description:
      "Commitment to highest standards in both Islamic and modern education",
    color: "amber",
  },
  {
    icon: GrBlockQuote,
    title: "Moral Leadership",
    description:
      "Leading by example with integrity, compassion, and ethical values",
    color: "violet",
  },
];

export default function Leadership() {
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
      border: "border-emerald-200",
      text: "text-emerald-600",
    },
    blue: {
      bg: "bg-blue-500",
      border: "border-blue-200",
      text: "text-blue-600",
    },
    amber: {
      bg: "bg-amber-500",
      border: "border-amber-200",
      text: "text-amber-600",
    },
    violet: {
      bg: "bg-violet-500",
      border: "border-violet-200",
      text: "text-violet-600",
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
              <FiUsers className="size-4" />
              Meet Our Leadership
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Guiding{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Hearts & Minds
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            Our leadership team brings together decades of experience in Islamic
            scholarship and modern education, united by a shared vision to
            nurture the next generation of Muslim leaders.
          </motion.p>
        </motion.div>

        {/* Leadership Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
        >
          {leadershipTeam.map((leader, index) => {
            const colors = colorMap[leader.color];

            return (
              <motion.div
                key={leader.role}
                variants={cardVariants}
                whileHover="hover"
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 h-full">
                  {/* Profile Header */}
                  <div
                    className={`${colors.bg} p-6 text-white relative overflow-hidden`}
                  >
                    <div className="absolute top-4 right-4 opacity-20">
                      <GrBlockQuote className="size-16" />
                    </div>
                    <div className="relative z-10">
                      <h3 className="font-serif text-2xl font-bold mb-1">
                        {leader.name}
                      </h3>
                      <p className="text-white/90 font-medium">{leader.role}</p>
                    </div>
                  </div>

                  {/* Profile Image and Content */}
                  <div className="p-6">
                    {/* Profile Image */}
                    <div className="flex justify-center -mt-16 mb-6">
                      <div className="relative">
                        <div className="size-24 bg-white dark:bg-gray-800 rounded-full p-1 shadow-lg">
                          <img
                            src={leader.image}
                            alt={leader.name}
                            className="size-full object-cover rounded-full border-4 border-white dark:border-gray-800"
                          />
                        </div>
                        <div
                          className={`absolute -bottom-2 -right-2 size-8 ${colors.bg} rounded-full flex items-center justify-center border-2 border-white dark:border-gray-800`}
                        >
                          <GrBlockQuote className="size-3 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Quote */}
                    <blockquote className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-center mb-6 italic">
                      "{leader.quote}"
                    </blockquote>

                    {/* Role Badge */}
                    <div className="text-center">
                      <span
                        className={`inline-flex items-center gap-2 ${colors.text} bg-${leader.color}-50 dark:bg-${leader.color}-900/20 px-4 py-2 rounded-full text-sm font-semibold border ${colors.border}`}
                      >
                        <div
                          className={`size-2 ${colors.bg} rounded-full`}
                        ></div>
                        {leader.role}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Leadership Principles */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="font-serif text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12"
          >
            Our Leadership Philosophy
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipPrinciples.map((principle, index) => {
              const IconComponent = principle.icon;
              const colors = colorMap[principle.color];

              return (
                <motion.div
                  key={principle.title}
                  variants={cardVariants}
                  className="group text-center"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 h-full transition-all duration-300 hover:shadow-lg">
                    <div
                      className={`inline-flex size-16 ${colors.bg} rounded-xl items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="size-7 text-white" />
                    </div>

                    <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {principle.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
