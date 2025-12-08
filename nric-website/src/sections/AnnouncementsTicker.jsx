import { HiOutlineMegaphone } from "react-icons/hi2";

const announcements = [
  "🎓 Admissions for 2026–2027 are now open — apply early!",
  "🗓️ Download the final exam schedule for Senior Secondary.",
  "🏆 NRIC Munazara wins first prize at the inter-collegiate competition!",
];

export default function AnnouncementsTicker() {
  return (
    <div className="relative w-full overflow-hidden border-y border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-[#111] dark:via-[#141414] dark:to-[#111]">
      {/* Soft glow line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent blur-sm" />

      {/* Internal Style for Keyframes (Keeps this component self-contained) */}
      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker-scroll 40s linear infinite;
        }
        .paused {
          animation-play-state: paused;
        }
      `}</style>

      <div className="flex items-center h-10">
        {/* Static Label */}
        <div className="flex items-center gap-2 px-4 shrink-0 z-50 dark:bg-[#111] bg-white relative shadow-[5px_0_10px_rgba(255,255,255,1)] dark:shadow-[5px_0_10px_rgba(17,17,17,1)]">
          <div className="p-1.5 rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/30">
            <HiOutlineMegaphone className="text-emerald-500 text-lg" />
          </div>
          <span className="text-[0.8rem] tracking-wider font-semibold uppercase text-emerald-600 dark:text-emerald-400">
            Announcements
          </span>
        </div>

        {/* Scrolling Content */}
        {/* Logic: We duplicate the list. The animation moves -50% (the width of one list). 
            When it hits -50%, it snaps back to 0% instantly, creating a seamless loop. 
            'hover:paused' stops it immediately. */}
        <div className="w-full overflow-hidden">
          <div className="flex whitespace-nowrap animate-ticker hover:paused w-max">
            {/* Render the list TWICE to create the seamless loop */}
            {[...announcements, ...announcements].map((text, i) => (
              <span
                key={i}
                className="mx-6 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-500 transition-colors duration-200 cursor-default inline-flex items-center"
              >
                {/* Optional: Add a small dot separator between items for polish */}
                {i % announcements.length !== 0 && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/30 mr-4 inline-block" />
                )}
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
