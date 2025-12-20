import { HiOutlineMegaphone } from "react-icons/hi2";
import { useEffect, useState } from "react";

const announcements = [
  "🎉 Nahjurrashad 20th Anniversary Final Celebration Ongoing!",
  "🗓️ Download the final exam schedule for Senior Secondary.",
  "🏆 Spelling Bee Champions Announced!",
];

export default function AnnouncementsTicker({ speed = 40 }) {
  const [paused, setPaused] = useState(false);

  // Pause animation when tab is hidden
  useEffect(() => {
    const onVisibilityChange = () => {
      setPaused(document.hidden);
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  return (
    <div className="relative w-full overflow-hidden border-y border-gray-200 bg-gradient-to-r from-gray-50 via-white to-gray-50">
      {/* Top glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent blur-sm" />

      {/* Component-scoped CSS */}
      <style>{`
        @keyframes ticker-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ticker-track {
            animation: none !important;
          }
        }
      `}</style>

      <div className="flex items-center h-10">
        {/* Label */}
        <div className="flex items-center gap-2 px-4 shrink-0 bg-white z-10 shadow-[5px_0_10px_rgba(255,255,255,1)]">
          <div className="p-1.5 rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/30">
            <HiOutlineMegaphone className="text-emerald-500 text-lg" />
          </div>
          <span className="text-[0.8rem] tracking-wider font-semibold uppercase text-emerald-600">
            Announcements
          </span>
        </div>

        {/* Ticker */}
        <div
          className="w-full overflow-hidden"
          aria-live="polite"
        >
          <div
            className="ticker-track flex whitespace-nowrap w-max"
            style={{
              animation: `ticker-scroll ${speed}s linear infinite`,
              animationPlayState: paused ? "paused" : "running",
            }}
          >
            {[...announcements, ...announcements].map((text, i) => (
              <span
                key={i}
                aria-hidden={i >= announcements.length}
                className="mx-6 text-sm font-medium text-gray-700 inline-flex items-center cursor-default hover:text-emerald-500 transition-colors"
              >
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
