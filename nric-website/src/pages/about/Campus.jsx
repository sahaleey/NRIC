import { motion } from "framer-motion";
import {
  FiMapPin,
  FiWifi,
  FiBook,
  FiHome,
  FiCoffee,
  FiActivity,
  FiUsers, // 👈 1. Add FiUsers to the import
} from "react-icons/fi";

// --- Data from your component ---
const campusFacilities = [
  // ... (Your full array)
  {
    icon: FiBook,
    title: "Central Library",
    description:
      "Well-stocked library with extensive collections of Islamic literature, academic texts, and digital resources.",
    image: "/images/campus/library.jpg",
    features: [
      "10,000+ Books",
      "Digital Archives",
      "Reading Rooms",
      "Research Section",
    ],
    color: "emerald",
  },
  {
    icon: FiHome,
    title: "Students Hostel",
    description:
      "Comfortable accommodation with modern amenities, creating a home away from home for our students.",
    image: "/images/campus/hostel.jpg",
    features: [
      "Spacious Rooms",
      "Medical Facilities",
      "Study Areas",
      "Common Rooms",
    ],
    color: "blue",
  },
  {
    icon: FiMapPin,
    title: "College Masjid",
    description:
      "Beautiful masjid serving as the spiritual heart of our campus, accommodating daily prayers and religious activities.",
    image: "/images/campus/masjid.jpg",
    features: [
      "Daily Prayers",
      "Jumu'ah Services",
      "Quran Classes",
      "Spiritual Programs",
    ],
    color: "amber",
  },
  {
    icon: FiActivity,
    title: "Sports Beach",
    description:
      "Modern sports facilities promoting physical fitness and team spirit among students.",
    image: "/images/campus/beach.png",
    features: [
      "Volleyball Court",
      "Football Ground",
      "Indoor Games",
      "Karate Dojo",
    ],
    color: "violet",
  },
  {
    icon: FiCoffee,
    title: "Canteen",
    description:
      "Hygienic and spacious canteen serving nutritious meals in a comfortable environment.",
    image: "/images/canteen.jpg",
    features: ["Halal Food", "Multiple Counters", "Snack Bar", "Dining Hall"],
    color: "red",
  },
  {
    icon: FiWifi,
    title: "Digital Campus",
    description:
      "Fully Wi-Fi enabled campus with smart classrooms and computer labs for modern learning.",
    image: "/images/campus/digital.jpg",
    features: ["Wi-Fi Campus", "Smart Classes", "Computer Labs", "E-Library"],
    color: "green",
  },
];

const campusStats = [
  { value: "2", label: "Acres Campus", suffix: "+" }, // Note: Header says 25, stats say 5. I'll keep your data.
  { value: "10", label: "Classrooms", suffix: "+" },
  { value: "1", label: "Academic Blocks", suffix: "" },
  { value: "300", label: "Hostel Capacity", suffix: "+" },
];
// ... (Your component logic: variants, colorMap)
const colorMap = {
  emerald: {
    bg: "bg-emerald-500",
    text: "text-emerald-600",
    border: "border-emerald-200",
  },
  blue: { bg: "bg-blue-500", text: "text-blue-600", border: "border-blue-200" },
  amber: {
    bg: "bg-amber-500",
    text: "text-amber-600",
    border: "border-amber-200",
  },
  violet: {
    bg: "bg-violet-500",
    text: "text-violet-600",
    border: "border-violet-200",
  },
  red: { bg: "bg-red-500", text: "text-red-600", border: "border-red-200" },
  green: {
    bg: "bg-green-500",
    text: "text-green-600",
    border: "border-green-200",
  },
};

export default function Campus() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: { type: "spring", stiffness: 400, damping: 25 },
    },
  };

  return (
    <motion.div
      className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50/50  "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 m-8">
        {/* --- Header Section (Your Code) --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 bg-emerald-50  text-emerald-700  px-4 py-2 rounded-full text-sm font-semibold border border-emerald-200 ">
              <FiMapPin className="size-4" />
              Campus Life
            </div>
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="font-primary text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900  mb-6"
          >
            Explore Our{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Campus
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600  leading-relaxed"
          >
            {/* I updated this text to match your "5-acre" stat */}
            Discover our sprawling 5-acre campus in Thrissur, designed to
            provide a perfect environment for learning, spiritual growth, and
            community living.
          </motion.p>
        </motion.div>

        {/* --- Campus Stats (Your Code) --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {campusStats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center bg-white  rounded-2xl p-6 shadow-lg border border-gray-200 "
            >
              <div className="text-3xl md:text-4xl font-bold text-emerald-600  mb-2">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-gray-600  font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Campus Facilities Grid (Your Code) --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {campusFacilities.map((facility) => {
            const IconComponent = facility.icon;
            const colors = colorMap[facility.color];
            return (
              <motion.div
                key={facility.title}
                variants={cardVariants}
                whileHover="hover"
                className="group"
              >
                <div className="bg-white  rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200  overflow-hidden transition-all duration-300 h-full">
                  {/* ... (Your full card layout: Image, Content, Features) ... */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div
                        className={`size-12 ${colors.bg} rounded-xl flex items-center justify-center shadow-lg`}
                      >
                        <IconComponent className="size-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-primary text-xl font-bold text-gray-900  mb-3">
                      {facility.title}
                    </h3>
                    <p className="text-gray-600  leading-relaxed mb-4">
                      {facility.description}
                    </p>
                    <div className="space-y-2">
                      {facility.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-3"
                        >
                          <div
                            className={`size-2 ${colors.bg} rounded-full`}
                          ></div>
                          <span className="text-sm text-gray-600 ">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* --- 3. HISAN SECTION (MERGED) --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 bg-blue-50  text-blue-700  px-4 py-2 rounded-full text-sm font-semibold border border-blue-200  mb-6">
                <FiUsers className="size-4" />
                Student Life
              </div>
              <h2 className="font-primary text-3xl md:text-4xl font-bold text-gray-900  mb-6">
                Hisan: The Student Union
              </h2>
              <div className="space-y-4 text-gray-600  text-lg leading-relaxed">
                <p>
                  Hisan, our official student union, is the vibrant, student-led
                  body that serves as the bridge between the students and the
                  college administration.
                </p>
                <p>
                  It is responsible for organizing a wide array of academic,
                  cultural, and spiritual programs throughout the year. From
                  literary festivals and tech expos to sports meets and
                  spiritual gatherings, Hisan ensures a dynamic and enriching
                  campus life for all.
                </p>
                <p>
                  The union is structured with various wings (like the Urdu
                  Wing, Arts Wing, etc.) to cater to the diverse talents of our
                  students, fostering leadership, creativity, and a spirit of
                  service.
                </p>
              </div>
            </motion.div>

            {/* Image for Hisan */}
            <motion.div variants={itemVariants}>
              <div className="bg-gray-200  rounded-2xl aspect-video overflow-hidden shadow-lg">
                <img
                  src="/images/hisan.jpg"
                  alt="Hisan Student Union Event"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Location & Contact (Your Code) --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* ... (Your full location & map layout) ... */}
          <div>
            <h2 className="font-primary text-3xl md:text-4xl font-bold text-gray-900  mb-6">
              Visit Our Campus
            </h2>
            <div className="space-y-4 text-gray-600 ">
              <p className="text-lg leading-relaxed">
                Located in the serene surroundings of Chamakkala, Thrissur, our
                campus offers the perfect environment for focused learning and
                spiritual growth.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FiMapPin className="size-5 text-emerald-600 flex-shrink-0" />
                  <span>
                    Nahjurrashad Islamic College, Chamakkala, Thrissur, Kerala
                    680687
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FiMapPin className="size-5 text-emerald-600 flex-shrink-0" />
                  <span>
                    2-acre campus with modern infrastructure and green spaces
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FiMapPin className="size-5 text-emerald-600 flex-shrink-0" />
                  <span>
                    Easily accessible from Thrissur city and major
                    transportation hubs
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-200  rounded-2xl aspect-video overflow-hidden shadow-lg">
            <iframe
              src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Nahjurrashad%20Islamic%20College&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
