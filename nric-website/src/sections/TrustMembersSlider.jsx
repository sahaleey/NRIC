import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { FaUserTie } from "react-icons/fa6";
import { trustMembers } from "../data/trustee";

// --- Constants ---
const SLIDE_DURATION = 3000;
const CLONES = 3;

// --- Member Card ---
const MemberCard = ({ member }) => (
  <div className="group relative w-[300px] h-[350px] flex-shrink-0 overflow-hidden rounded-2xl bg-white  shadow-lg hover:shadow-xl transition-all duration-500 border border-zinc-100 ">
    {/* Image */}
    <div className="h-[70%] w-full relative overflow-hidden bg-zinc-200 ">
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-zinc-300">
          <FaUserTie className="size-20" />
        </div>
      )}
    </div>

    {/* Name + Role Only */}
    <div className="absolute bottom-0 left-0 w-full p-5 bg-white ">
      <h4 className="font-primary text-xl font-bold text-zinc-900  leading-tight">
        {member.name.toUpperCase()}
      </h4>

      <p className="text-emerald-600  text-xs font-medium tracking-wide uppercase mt-1">
        {member.role}
      </p>
    </div>
  </div>
);

export default function TrustMembersSlider() {
  const [currentIndex, setCurrentIndex] = useState(CLONES);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const totalReal = trustMembers.length;

  // Loop members
  const displayMembers = useMemo(() => {
    if (totalReal === 0) return [];
    return [
      ...trustMembers.slice(-CLONES),
      ...trustMembers,
      ...trustMembers.slice(0, CLONES),
    ];
  }, [totalReal]);

  const totalDisplay = displayMembers.length;

  // Autoplay logic
  useEffect(() => {
    if (totalReal <= 1) return;

    const timer = setInterval(() => {
      if (currentIndex === totalDisplay - CLONES - 1) {
        setIsTransitioning(false);
      }
      setCurrentIndex((prev) => prev + 1);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [currentIndex, totalReal, totalDisplay]);

  // Handle infinite loop jump
  const handleTransitionEnd = () => {
    if (currentIndex >= totalReal + CLONES) {
      setIsTransitioning(false);
      setCurrentIndex(CLONES);
      setTimeout(() => setIsTransitioning(true), 50);
    }
  };

  if (totalReal === 0) return null;

  const CARD_WIDTH = 300;
  const GAP_SIZE = 24;
  const CARD_WIDTH_WITH_GAP = CARD_WIDTH + GAP_SIZE;

  const xOffset = -(currentIndex * CARD_WIDTH_WITH_GAP);

  const transition = isTransitioning
    ? { type: "spring", stiffness: 100, damping: 20 }
    : { duration: 0 };

  return (
    <section className="py-24 bg-gray-50  overflow-hidden relative">
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl md:text-5xl font-primary font-bold text-zinc-900 ">
            Our <span className="text-emerald-600">Trustees</span>
          </h3>
          <p className="text-zinc-500  mt-2 max-w-lg">
            Guiding our institution with wisdom and foresight for over two
            decades.
          </p>
        </motion.div>
      </div>

      <div className="relative w-full">
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: xOffset }}
            transition={transition}
            onAnimationComplete={handleTransitionEnd}
            style={{
              width: "fit-content",
              transform: `translateX(calc(${xOffset}px + 50vw - 150px))`,
            }}
          >
            {displayMembers.map((member, i) => (
              <MemberCard key={`${member.name}-${i}`} member={member} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
