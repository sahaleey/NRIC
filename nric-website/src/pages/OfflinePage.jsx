import { motion, AnimatePresence } from "framer-motion";
import { FiRefreshCw, FiWifiOff, FiAlertCircle } from "react-icons/fi";
import { Helmet } from "react-helmet-async";

// --- 1. Enhanced "Signal Seeker" Animation ---
const SignalSeekerAnimation = () => {
  return (
    <div className="relative w-80 h-80 mx-auto flex items-center justify-center">
      {/* Dynamic Background Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0 bg-red-400/20 blur-[80px] rounded-full" 
      />
      <div className="absolute inset-0 bg-orange-400/10 blur-[60px] rounded-full translate-x-10" />

      <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-2xl z-10" xmlns="http://www.w3.org/2000/svg">
        {/* --- FLOATING ERROR ELEMENTS --- */}
        <FloatingIcon d="M50 120 L70 120 L60 100 Z" color="#FECACA" delay={0} x={-20} />
        <FloatingIcon d="M330 250 L350 250 L340 230 Z" color="#FEE2E2" delay={1} x={20} />

        <motion.g
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* 1. Body (Gown) */}
          <path d="M140 240 Q200 400 260 240 L240 380 L160 380 Z" className="fill-gray-900" />
          
          {/* 2. Head & Cap Group (The "Searching" Look) */}
          <motion.g
            animate={{ 
              rotate: [-3, 3, -3],
              y: [-5, 5, -5] 
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <circle cx="200" cy="180" r="50" className="fill-emerald-100" />
            
            {/* Cap */}
            <g transform="translate(0, -5)">
              <path d="M130 160 L200 130 L270 160 L200 190 Z" className="fill-gray-700" />
              <path d="M145 166 L145 185 Q200 210 255 185 L255 166" className="fill-gray-800" />
            </g>

            {/* Scanning Eyes */}
            <motion.g
              animate={{ x: [-8, 8, -8] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <circle cx="185" cy="182" r="5" className="fill-gray-900" />
              <circle cx="215" cy="182" r="5" className="fill-gray-900" />
            </motion.g>
          </motion.g>

          {/* 3. The "No Signal" Floating Radar */}
          <motion.g
            animate={{ 
              y: [-15, 15, -15],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Outer Rings */}
            {[1, 2, 3].map((i) => (
              <motion.circle
                key={i}
                cx="200"
                cy="80"
                r={15 + i * 12}
                fill="none"
                stroke="#EF4444"
                strokeWidth="2"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.4, 0], scale: [0.8, 1.2, 1.4] }}
                transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
              />
            ))}
            <circle cx="200" cy="80" r="15" className="fill-red-500 shadow-lg" />
            <FiWifiOff x="190" y="70" size="20" className="text-white" />
          </motion.g>
        </motion.g>
      </svg>
    </div>
  );
};

const FloatingIcon = ({ d, color, delay, x }) => (
  <motion.path
    d={d}
    fill={color}
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: [0.2, 0.5, 0.2],
      y: [0, -20, 0],
      x: [0, x, 0]
    }}
    transition={{ duration: 4, delay, repeat: Infinity }}
  />
);

// --- 2. Main Page Component ---
export default function OfflinePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center relative overflow-hidden font-sans">
      <Helmet>
        <title>Offline | Nahjurrashad Islamic College</title>
      </Helmet>

      {/* Modern Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] bg-red-100/40 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[5%] w-[40%] h-[40%] bg-emerald-100/30 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl w-full mx-auto px-6 text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <SignalSeekerAnimation />
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold uppercase tracking-widest mb-2">
            <FiAlertCircle /> Connection Lost
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Whoops! You're <span className="text-red-500">Unplugged.</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-md mx-auto leading-relaxed">
            Your connection went on a field trip. Don't worry, we'll keep your spot warm until you're back online.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => window.location.reload()}
            className="group relative px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold transition-all duration-300 hover:bg-emerald-600 hover:shadow-[0_20px_40px_rgba(16,185,129,0.2)] active:scale-95 flex items-center gap-3"
          >
            <FiRefreshCw className="group-hover:rotate-180 transition-transform duration-700" />
            Check Connection
          </button>
          
          <div className="text-sm text-gray-400 font-medium italic">
            Waiting for signal...
          </div>
        </motion.div>
        
        {/* Subtle decorative grid background */}
        <div className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
        />
      </motion.div>
    </div>
  );
}