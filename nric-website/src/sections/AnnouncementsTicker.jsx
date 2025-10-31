import { motion } from "framer-motion";
import { HiOutlineMegaphone } from "react-icons/hi2";

const announcements = [
  "🎓 Admissions for 2026–2027 are now open — apply early!",
  "🗓️ Download the final exam schedule for Senior Secondary.",
  "🏆 NRIC Tech Club wins first prize at the inter-collegiate competition!",
];

const tickerVariants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 40,
        ease: "linear",
      },
    },
  },
};

export default function AnnouncementsTicker() {
  return (
    <div className="relative w-full overflow-hidden border-y border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-[#111] dark:via-[#141414] dark:to-[#111]">
      {/* soft glow line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent blur-sm" />

      <div className="flex items-center h-10">
        {/* Label */}
        <div className="flex items-center gap-2 px-4 shrink-0 z-50 dark:bg-[#111] bg-white">
          <div className="p-1.5 rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/30">
            <HiOutlineMegaphone className="text-emerald-500 text-lg" />
          </div>
          <span className="text-[0.8rem] tracking-wider font-semibold uppercase text-emerald-600 dark:text-emerald-400">
            Announcements
          </span>
        </div>

        {/* Scrolling content */}
        <motion.div
          className="flex whitespace-nowrap text-sm font-medium text-gray-700 dark:text-gray-300"
          variants={tickerVariants}
          animate="animate"
        >
          {[...announcements, ...announcements].map((text, i) => (
            <span
              key={i}
              className="mx-6 hover:text-emerald-500 transition-colors duration-200 cursor-default"
            >
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
