import { motion } from "framer-motion";
import { FaUserTie } from "react-icons/fa6";
import { trustMembers } from "../data/trustee";

// Dummy Data - Add more to make the loop smoother

const MemberCard = ({ member }) => (
  <div className="group relative w-[260px] h-[360px] flex-shrink-0 mx-4 overflow-hidden rounded-2xl bg-white  shadow-sm hover:shadow-xl transition-all duration-500 border border-zinc-100 ">
    {/* Image Container */}
    <div className="h-[75%] w-full relative overflow-hidden bg-zinc-200 ">
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-all duration-700  group-hover:scale-110"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-zinc-300 ">
          <FaUserTie className="size-20" />
        </div>
      )}

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>

    {/* Text Content */}
    <div className="absolute bottom-0 left-0 w-full p-5 bg-white   group-hover:text-white transition-colors duration-300">
      <h4 className="font-serif text-xl font-bold text-zinc-900   mb-1 ">
        {member.name.toUpperCase()}
      </h4>
      <p className="text-emerald-600  text-sm font-medium tracking-wide uppercase ">
        {member.role}
      </p>
    </div>
  </div>
);

export default function TrustMembersSlider() {
  return (
    <section className="py-24 bg-linear-to-b from-zinc-50 via-white to-zinc-50    overflow-hidden relative">
      {/* Section Header */}

      <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row items-end justify-between gap-6">
        <div>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-zinc-900 ">
            Our <span className=" text-emerald-600">Trustees</span>
          </h3>
          <p className="text-zinc-500  mt-2 max-w-lg">
            Guiding our institution with wisdom and foresight for over two
            decades.
          </p>
        </div>
        <div className="hidden md:block h-px flex-1 bg-gray-400  ml-12 mb-4" />
      </div>

      {/* Slider Area */}
      <div className="relative w-full">
        {/* Marquee Track */}
        <div className="flex overflow-hidden group">
          {" "}
          {/* 'group' here allows pausing on hover */}
          <motion.div
            className="flex"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40,
            }}
            // Pause animation when user hovers over the track
            style={{ width: "fit-content" }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {/* Double the list for seamless loop */}
            {[...trustMembers, ...trustMembers, ...trustMembers].map(
              (member, index) => (
                <MemberCard key={`${member.name}-${index}`} member={member} />
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
