import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// --- Mock Data ---
// This would come from your Node.js backend
const allPosts = [
  {
    id: 1,
    slug: "tech-club-wins-competition",
    title: "NIC Tech Club Wins Inter-Collegiate Competition",
    date: "October 28, 2025",
    imageUrl: "/src/assets/news-1.jpg",
    category: "Campus Life",
    excerpt:
      "Our talented students from the NIC Tech Club brought home the first prize...",
  },
  {
    id: 2,
    slug: "annual-sports-meet-2025",
    title: "Highlights from the Annual Sports Meet 2025",
    date: "October 25, 2025",
    imageUrl: "/src/assets/news-2.jpg",
    category: "Events",
    excerpt: "The grounds were alive with energy and sportsmanship...",
  },
  {
    id: 3,
    slug: "new-research-journal",
    title: "College Launches New Islamic Research Journal",
    date: "October 20, 2025",
    imageUrl: "/src/assets/news-3.jpg",
    category: "Academics",
    excerpt:
      "A new platform for our faculty and students to publish their scholarly work...",
  },
  {
    id: 4,
    slug: "guest-lecture-on-leadership",
    title: "Guest Lecture on Islamic Leadership in the Modern World",
    date: "October 15, 2025",
    imageUrl: "/src/assets/academics-hero.jpg", // ❗ Use a different image
    category: "Events",
    excerpt:
      "We were honored to host Dr. Ahmad Al-Faruqi for an inspiring session...",
  },
  // ... add more posts here
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function Blog() {
  return (
    <div className="bg-white dark:bg-nic-dark py-16 md:py-24 min-h-screen">
      <div className="container mx-auto px-4">
        {/* --- 1. Page Header --- */}
        <div className="text-center mb-12">
          <motion.h1
            className="font-serif text-5xl md:text-6xl font-bold text-nic-dark dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Blog & News
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Stay updated with the latest stories, events, and reflections from
            our campus.
          </motion.p>
        </div>

        {/* --- 2. Posts Grid --- */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {allPosts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg 
                         overflow-hidden flex flex-col group"
              variants={cardVariants}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="block h-48 overflow-hidden"
              >
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover 
                             transition-transform duration-300 
                             group-hover:scale-110"
                />
              </Link>

              <div className="p-6 flex-grow flex flex-col">
                <div className="mb-2">
                  <span className="text-sm font-semibold text-nic-green">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {" "}
                    • {post.date}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-nic-dark dark:text-white mb-3">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="hover:text-nic-green"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="font-bold text-nic-green flex items-center"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
