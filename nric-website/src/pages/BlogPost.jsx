import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

// --- Mock Data ---
// In a real app, you'd fetch this from your backend:
// const response = await axios.get(`/api/posts/${slug}`);
// const post = response.data;
const allPosts = [
  {
    id: 1,
    slug: "tech-club-wins-competition",
    title: "NIC Tech Club Wins Inter-Collegiate Competition",
    date: "October 28, 2025",
    imageUrl: "/src/assets/news-1.jpg",
    category: "Campus Life",
    content: `
      <p>Our talented students from the NIC Tech Club brought home the first prize in the state-level inter-collegiate competition. The event, which saw participation from over 30 colleges, tested students on web development, competitive programming, and UI/UX design.</p>
      <p>The winning team, "NIC Innovators," credited their success to the mentorship of their faculty and the collaborative environment at the college. "We are trained not just to use technology, but to understand its principles and ethics," said the team captain.</p>
      <p>The Principal congratulated the students on their outstanding achievement and reiterated the college's commitment to fostering innovation.</p>
    `,
  },
  // ... (other posts would be here)
];
// --- End Mock Data ---

export default function BlogPost() {
  const { slug } = useParams(); // Gets the 'slug' from the URL
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // --- Mock Fetch ---
    // Simulating an API call
    const foundPost = allPosts.find((p) => p.slug === slug);
    if (foundPost) {
      setPost(foundPost);
    }
    setIsLoading(false);
    // --- End Mock Fetch ---
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen container mx-auto py-24">Loading...</div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen container mx-auto py-24 text-center">
        <h1 className="font-serif text-4xl">Post not found</h1>
        <Link to="/blog" className="text-nic-green mt-4 inline-block">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-nic-dark py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* --- 1. Post Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Link
            to="/blog"
            className="text-nic-green font-bold mb-4 inline-block"
          >
            ← Back to All Posts
          </Link>
          <div className="mb-4">
            <span className="text-sm font-semibold text-nic-green">
              {post.category}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {" "}
              • {post.date}
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-nic-dark dark:text-white mb-6">
            {post.title}
          </h1>
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-8"
          />
        </motion.div>

        {/* --- 2. Post Content --- */}
        <motion.div
          className="prose dark:prose-invert lg:prose-lg max-w-none text-gray-700 dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: post.content }} // Renders the HTML content
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        />
      </div>
    </div>
  );
}
