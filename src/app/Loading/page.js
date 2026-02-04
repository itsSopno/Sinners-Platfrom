// "use client";

// import { motion } from "framer-motion";

// export default function Loading() {
//   const containerVariants = {
//     animate: {
//       transition: {
//         staggerChildren: 0.05,
//       },
//     },
//   };

//   const lineVariants = {
//     initial: { scaleX: 0 },
//     animate: { 
//       scaleX: 1, 
//       transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] } 
//     },
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-[#080808] text-white selection:bg-white selection:text-black">
//       <motion.div 
//         variants={containerVariants}
//         initial="initial"
//         animate="animate"
//         className="w-full max-w-[300px] md:max-w-[400px] px-6"
//       >
//         {/* Top Status */}
//         <div className="flex justify-between items-end mb-2">
//           <motion.span 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-[9px] tracking-[0.5em] text-gray-500 uppercase italic"
//           >
//             System_Init
//           </motion.span>
//           <motion.span 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-[9px] tracking-[0.2em] font-mono"
//           >
//             001 // STUDIO_SINERS
//           </motion.span>
//         </div>

//         {/* Minimalist Progress Bar */}
//         <div className="h-[1px] w-full bg-white/10 relative overflow-hidden">
//           <motion.div
//             variants={lineVariants}
//             className="absolute top-0 left-0 h-full w-full bg-white origin-left"
//           />
//         </div>

//         {/* Bottom Technical Text */}
//         <div className="mt-4 space-y-1">
//           <motion.h2
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-[10px] tracking-[0.8em] uppercase font-bold text-center"
//           >
//             Synchronizing
//           </motion.h2>
          
//           <motion.p 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 0.4 }}
//             transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
//             className="text-[8px] tracking-[0.3em] text-center text-gray-400 uppercase"
//           >
//             Establishing secure connection to digital legacy...
//           </motion.p>
//         </div>
//       </motion.div>

//       {/* Vertical Decorative Element */}
//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 h-12 w-[1px] bg-gradient-to-b from-white/20 to-transparent" />
//     </div>
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function Loading() {
//   const [progress, setProgress] = useState(0);

//   // Counter logic for a realistic progress feel
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prev) => (prev < 100 ? prev + 1 : 100));
//     }, 20);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-[#020617] text-white overflow-hidden relative">
      
//       {/* Background Ambient Glows */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/20 blur-[100px] rounded-full" />
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-900/10 blur-[120px] rounded-full" />

//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="relative z-10 w-full max-w-[350px] px-6"
//       >
//         {/* Logo/Icon Animation */}
//         <div className="flex justify-center mb-12">
//           <motion.div
//             animate={{ 
//               rotate: 360,
//               scale: [1, 1.1, 1]
//             }}
//             transition={{ 
//               rotate: { duration: 4, repeat: Infinity, ease: "linear" },
//               scale: { duration: 2, repeat: Infinity }
//             }}
//             className="w-16 h-16 border-2 border-dashed border-blue-500/50 rounded-2xl flex items-center justify-center relative"
//           >
//             <div className="w-8 h-8 bg-blue-600 rounded-lg shadow-[0_0_20px_rgba(37,99,235,0.6)]" />
//           </motion.div>
//         </div>

//         {/* Top Info */}
//         <div className="flex justify-between items-end mb-3">
//           <div className="flex flex-col">
//             <span className="text-[10px] tracking-[0.3em] text-blue-400 font-bold uppercase mb-1">System_Boot</span>
//             <div className="h-[2px] w-8 bg-blue-600 rounded-full" />
//           </div>
//           <span className="text-2xl font-light tracking-tighter font-mono">
//             {progress}%
//           </span>
//         </div>

//         {/* Dynamic Progress Bar */}
//         <div className="h-[4px] w-full bg-white/5 rounded-full relative overflow-hidden backdrop-blur-sm border border-white/5">
//           <motion.div
//             initial={{ width: 0 }}
//             animate={{ width: `${progress}%` }}
//             className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]"
//           />
//         </div>

//         {/* Technical Status Messages */}
//         <div className="mt-6 flex flex-col items-center">
//           <motion.div
//             animate={{ opacity: [0.4, 1, 0.4] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="flex items-center gap-2"
//           >
//             <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse" />
//             <h2 className="text-[11px] tracking-[0.5em] uppercase font-medium text-gray-300">
//               Initializing_Core_Assets
//             </h2>
//           </motion.div>
          
//           <p className="mt-2 text-[9px] tracking-[0.2em] text-gray-500 uppercase font-mono">
//             Secure_Link: Established // Studio_Siners_v2.0
//           </p>
//         </div>
//       </motion.div>

//       {/* Decorative Corner Accents */}
//       <div className="absolute top-10 left-10 w-4 h-4 border-t border-l border-white/20" />
//       <div className="absolute bottom-10 right-10 w-4 h-4 border-b border-r border-white/20" />
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loading() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 25); // সামান্য দ্রুত করা হয়েছে ৩টি ডটের কাউন্টারের জন্য
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--background)] text-white font-sans overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
        <h1 className="text-[25vw] font-bold tracking-tight uppercase" style={{ fontFamily: "var(--font-display)" }}>Sinners</h1>
      </div>

      <div className="w-full max-w-[500px] px-10 relative z-10">
        <div className="flex justify-between items-end mb-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <h2 className="text-xs font-semibold tracking-[0.6em] uppercase leading-none">Studio_Sinners</h2>
            <span className="text-[8px] text-[var(--muted)] tracking-[0.4em] uppercase mt-2 font-mono">Systems_Check_Initiated</span>
          </motion.div>

          <div className="text-right">
            <span className="text-5xl font-bold font-mono leading-none tracking-tighter">
              {count.toString().padStart(3, "0")}
            </span>
            <span className="text-[10px] font-bold ml-1 opacity-20">%</span>
          </div>
        </div>

        <div className="h-px w-full bg-white/5 relative">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${count}%` }}
            transition={{ ease: "linear" }}
            className="absolute top-0 left-0 h-full bg-[var(--accent)] shadow-[0_0_20px_var(--accent-muted)]"
          />
        </div>

        {/* Terminal Style Logs */}
        <div className="mt-8 flex justify-between items-start">
          <div className="flex flex-col gap-2">
            {[
              "CORE_STABILIZED", 
              "UI_INTERFACE_READY", 
              count > 50 ? "DATA_SYNC_COMPLETE" : "SYNCING_RESOURCES"
            ].map((text, i) => (
              <motion.span 
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: count > (i * 20) ? 0.4 : 0 }}
                className="text-[7px] tracking-[0.3em] uppercase font-mono"
              >
                {`> ${text}`}
              </motion.span>
            ))}
          </div>

          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-1 h-1 bg-white rounded-full"
          />
        </div>
      </div>

      <div className="absolute bottom-12 left-10 md:left-20 text-[7px] text-[var(--muted)] tracking-[0.6em] uppercase font-mono font-medium">
        MXXVI // DHAKA_NODE // V.4.0.2
      </div>
      <div className="absolute bottom-12 right-10 md:right-20 text-[7px] text-[var(--muted)] tracking-[0.6em] uppercase font-mono font-medium">
        ESTD_2026
      </div>
    </div>
  );
}