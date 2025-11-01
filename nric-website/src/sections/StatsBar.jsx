import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
  HiUsers,
  HiCalendar,
  HiBuildingLibrary,
  HiAcademicCap,
} from "react-icons/hi2";

// --- Enhanced stats data with icons and descriptions ---
const stats = [
  {
    value: 300,
    label: "Students Enrolled",
    suffix: "+",
    icon: HiUsers,
    description: "Active learners",
    color: "blue",
  },
  {
    value: 20,
    label: "Years of Excellence",
    suffix: "+",
    icon: HiCalendar,
    description: "Trusted education",
    color: "emerald",
  },
  {
    value: "Hadith and Related Science",
    label: "Academic Department",
    suffix: "",
    icon: HiBuildingLibrary,
    description: "Comprehensive programs",
    color: "amber",
    isText: true, // custom flag
  },

  {
    value: 98,
    label: "Graduation Success",
    suffix: "%",
    icon: HiAcademicCap,
    description: "Alumni achievement",
    color: "violet",
  },
];

// --- Animation variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8,
  },
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

const floatVariants = {
  float: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function StatsBar() {
  const colorMap = {
    blue: {
      bg: "bg-blue-500/10",
      border: "border-blue-200/20",
      text: "text-blue-300",
      icon: "text-blue-400",
    },
    emerald: {
      bg: "bg-emerald-500/10",
      border: "border-emerald-200/20",
      text: "text-emerald-300",
      icon: "text-emerald-400",
    },
    amber: {
      bg: "bg-amber-500/10",
      border: "border-amber-200/20",
      text: "text-amber-300",
      icon: "text-amber-400",
    },
    violet: {
      bg: "bg-violet-500/10",
      border: "border-violet-200/20",
      text: "text-violet-300",
      icon: "text-violet-400",
    },
  };

  return (
    <section className="relative py-20 md:py-28 bg-linear-to-b from-gray-700 via-gray-700 to-gray-900 overflow-hidden ">
      {/* Background decorative elements */}
      <div className="absolute inset-0 ">
        {/* Islamic geometric pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="w-full h-full bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50 L80 20 L80 80 L50 50 L20 80 L20 20 Z' fill='%23ffffff'/%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative m-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring" }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full border border-white/20 mb-6"
          >
            <div className="size-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-emerald-100 font-semibold text-sm uppercase tracking-wider">
              By The Numbers
            </span>
          </motion.div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Excellence in{" "}
            <span className="text-amber-400">Islamic Education</span>
          </h2>
          <p className="text-lg md:text-xl text-emerald-100 leading-relaxed">
            Decades of dedication to nurturing minds, souls, and future leaders
            through integrated learning
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const colors = colorMap[stat.color];

            return (
              <motion.div
                key={stat.label}
                className="group"
                variants={itemVariants}
              >
                <motion.div
                  className={`relative ${colors.bg} backdrop-blur-lg rounded-2xl p-6 lg:p-8 border ${colors.border} hover:border-white/40 transition-all duration-500 h-full overflow-hidden`}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                >
                  {/* Floating background icon */}
                  <motion.div
                    className="absolute -top-4 -right-4 opacity-10"
                    variants={floatVariants}
                    animate="float"
                  >
                    <IconComponent className="size-24 text-white" />
                  </motion.div>

                  {/* Animated border effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                      className="mb-6"
                    >
                      <div
                        className={`size-14 bg-white/10 rounded-xl flex items-center justify-center border ${colors.border}`}
                      >
                        <IconComponent className={`size-7 ${colors.icon}`} />
                      </div>
                    </motion.div>

                    {/* Number */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.7, duration: 0.6 }}
                      className={`flex items-baseline mb-2 gap-1 justify-start ${
                        stat.isText ? "text-left" : "text-center"
                      }`}
                      key={stat.label}
                    >
                      {stat.isText ? (
                        <span className="font-sans text-2xl lg:text-3xl xl:text-3xl font-bold text-white">
                          {stat.value}
                          {stat.suffix}
                        </span>
                      ) : (
                        <>
                          <CountUp
                            key={stat.value}
                            end={stat.value}
                            duration={3.5}
                            enableScrollSpy
                            scrollSpyOnce
                            formattingFn={(value) => value.toLocaleString()}
                          >
                            {({ countUpRef }) => (
                              <span
                                ref={countUpRef}
                                className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-white"
                              />
                            )}
                          </CountUp>
                          <motion.span
                            initial={{ opacity: 0, y: 5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 1.0 }}
                            className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-white"
                          >
                            {stat.suffix}
                          </motion.span>
                        </>
                      )}
                    </motion.div>

                    {/* Label */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.9 }}
                      className="text-lg lg:text-xl font-semibold text-white mb-1"
                    >
                      {stat.label}
                    </motion.p>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 1.1 }}
                      className={`text-sm ${colors.text} font-medium`}
                    >
                      {stat.description}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-lg px-8 py-4 rounded-2xl border border-white/10">
            <div className="size-3 bg-amber-400 rounded-full animate-pulse"></div>
            <p className="text-emerald-100 text-lg font-medium">
              Join our legacy of educational excellence
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
