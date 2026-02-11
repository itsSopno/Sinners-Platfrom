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
    }, 25);
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
            <h2 className="text-xs font-semibold galgo-font tracking-[0.6em] uppercase leading-none">Studio_Sinners</h2>
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
