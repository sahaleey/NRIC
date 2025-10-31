// src/pages/Alumni.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiLink } from "react-icons/fi";

// --- Mock Data for Featured Alumni ---
// In a real app, this would come from your backend
const featuredAlumni = [
  {
    name: "Dr. Ahmad Farooq",
    batch: "Class of 2012",
    role: "Professor of Islamic Studies, IIUM",
    bio: "A leading researcher in contemporary Fiqh and its application in modern finance.",
    imageUrl: "/src/assets/alumni-1.jpg", // ❗ Add placeholder image
  },
  {
    name: "Saleem Abdul-Kareem",
    batch: "Class of 2015",
    role: "Full-Stack Developer, Google",
    bio: "Specializing in AI and machine learning, bridging the gap between technology and community.",
    imageUrl: "/src/assets/alumni-2.jpg", // ❗ Add placeholder image
  },
  {
    name: "Yusuf Ibrahim",
    batch: "Class of 2018",
    role: "Founder, Insaf Foundation (NGO)",
    bio: "Running a non-profit organization dedicated to providing education and resources in rural areas.",
    imageUrl: "/src/assets/alumni-3.jpg", // ❗ Add placeholder image
  },
];

export default function Alumni() {
  return (
    <div className="bg-white dark:bg-nic-dark">
      {/* --- 1. Alumni Hero Section --- */}
      <section className="relative h-72 flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black/60 z-0">
          <img
            src="/src/assets/IMG_4094.jpg" // Using the same image from your card
            alt="NIC Alumni"
            className="w-full h-full object-cover"
          />
        </div>
        <motion.h1
          className="relative z-10 font-serif text-5xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Our Alumni Network
        </motion.h1>
      </section>

      {/* --- 2. Intro Section --- */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.h2
            className="font-serif text-3xl md:text-4xl font-bold text-nic-dark dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Graduates Making an Impact
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Our graduates are our greatest ambassadors. Grounded in the values
            of Nahjurrashad, they have gone on to excel in diverse fields,
            serving as leaders, scholars, entrepreneurs, and compassionate
            community members across the globe.
          </motion.p>
        </div>
      </section>

      {/* --- 3. Featured Alumni Grid --- */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-nic-dark dark:text-white">
              Featured Alumni
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredAlumni.map((alumnus, index) => (
              <motion.div
                key={alumnus.name}
                className="bg-white dark:bg-nic-dark rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={alumnus.imageUrl}
                  alt={alumnus.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-nic-dark dark:text-white">
                    {alumnus.name}
                  </h3>
                  <p className="text-sm font-semibold text-nic-green mb-2">
                    {alumnus.batch}
                  </p>
                  <p className="text-md font-bold text-gray-700 dark:text-gray-300 mb-3">
                    {alumnus.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    "{alumnus.bio}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. CTA Section --- */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <FiLink className="text-4xl text-nic-gold mx-auto mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-nic-dark dark:text-white mb-4">
              Are You an Alumnus?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              We would love to reconnect with you! Join our official alumni
              network to stay in touch, mentor current students, and find out
              about upcoming events.
            </p>
            <Link
              to="/contact" // Or a dedicated alumni registration link
              className="bg-nic-green text-white font-bold py-3 px-8 
                         rounded-full text-lg hover:bg-opacity-90 
                         transition-colors duration-300 shadow-lg"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
