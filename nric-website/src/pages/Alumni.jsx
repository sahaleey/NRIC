import { motion } from "framer-motion";
import {
  FiAward,
  FiUsers,
  FiGlobe,
  FiMessageCircle,
  FiLink,
} from "react-icons/fi";
import SEO from "../components/SEO";

// Define NAFIA key details
const nafiyaDetails = [
  {
    icon: FiUsers,
    title: "Official Name",
    value: "NAFIA (Nahjurrashad Alumni Forum for Islamic Activities)",
    color: "blue",
  },
  {
    icon: FiGlobe,
    title: "Our Reach",
    value: "Graduates working across the Middle East, Europe, and India.",
    color: "emerald",
  },
  {
    icon: FiMessageCircle,
    title: "Mission",
    value: "Fostering collaboration, mentorship, and community service.",
    color: "amber",
  },
];

// Reusable animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const colorMap = {
  blue: {
    bg: "bg-blue-100/50",
    text: "text-blue-600",
    border: "border-blue-200",
    shadow: "shadow-blue-100",
    iconBg: "bg-blue-500",
  },
  emerald: {
    bg: "bg-emerald-100/50",
    text: "text-emerald-600",
    border: "border-emerald-200",
    shadow: "shadow-emerald-100",
    iconBg: "bg-emerald-500",
  },
  amber: {
    bg: "bg-amber-100/50",
    text: "text-amber-600",
    border: "border-amber-200",
    shadow: "shadow-amber-100",
    iconBg: "bg-amber-500",
  },
};

export default function Alumni() {
  return (
    <div className="bg-linear-to-b from-white to-gray-50/50 py-20 md:py-28">
      <SEO
        title="Alumni Network (NAFIA)"
        description="Connect with NAFIA, the official Nahjurrashad Alumni Forum for Islamic Activities."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- 1. Header & Logo Section (Centered Focus) --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          {/* NAFIA Logo Slot */}
          <motion.div variants={itemVariants} className="mb-6">
            <img
              // Assuming 'nafia.jpg' is the correct logo path
              src="/images/nafia.jpg"
              alt="NAFIA Alumni Association Logo"
              className="mx-auto rounded-full w-32 h-32 object-contain mb-4 filter drop-shadow-lg ring-4 ring-amber-500/30"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold border border-amber-200">
              <FiAward className="size-4" />
              Alumni Association
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            NAFIA{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Alumni Network
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            NAFIA (Nahjurrashad Alumni Forum for Islamic Activities) is the
            vibrant, global community connecting our esteemed graduates. Our
            members are scholars, professionals, and global leaders dedicated to
            upholding the values and intellectual excellence instilled during
            their time at Nahjurrashad.
          </motion.p>
        </motion.div>

        {/* --- 2. NAFIA Key Details (Enhanced 3-Column Grid) --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16 max-w-6xl mx-auto"
        >
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-10">
            Core Pillars of NAFIA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nafiyaDetails.map((detail, index) => {
              const IconComponent = detail.icon;
              const colors = colorMap[detail.color];

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`bg-white rounded-2xl p-8 shadow-xl border ${colors.border} ${colors.shadow} transition-all duration-500 hover:shadow-2xl hover:scale-[1.01]`}
                >
                  <div
                    className={`flex-shrink-0 size-14 ${colors.iconBg} rounded-xl flex items-center justify-center mx-auto mb-6`}
                  >
                    <IconComponent className="size-6 text-white" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-gray-900 mb-3">
                    {detail.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-md">
                    {detail.value}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
