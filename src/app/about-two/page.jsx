"use client";

import { motion } from "framer-motion";

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <section
      style={{ fontFamily: "var(--font-display)" }}
      className="bg-white text-[#0a0a0a] py-28 md:py-36 px-6 md:px-20 overflow-hidden relative"
    >
      <div className="absolute top-10 right-[-5%] text-[15vw] font-bold text-[#0a0a0a] opacity-[0.03] select-none pointer-events-none">
        SINNERS
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: Large Branding */}
          <motion.div {...fadeInUp}>
            <span className="text-[10px] tracking-[0.6em] text-[#737373] uppercase mb-8 block font-semibold">
              Agency_Manifesto
            </span>
            <h2 className="text-6xl md:text-8xl font-bold leading-[0.85] tracking-tighter uppercase mb-10">
              Defining <br />
              Digital <br />
              <span className="text-[var(--accent)] font-semibold">Authority.</span>
            </h2>
            
            <div className="w-20 h-[1px] bg-black mb-10"></div>
            
            <p style={{ fontFamily: "var(--font-body)" }} className="text-xl md:text-2xl text-[#525252] font-medium leading-relaxed max-w-md">
              &ldquo;We don&apos;t just build interfaces; we architect digital legacies for brands that refuse to be ordinary.&rdquo;
            </p>
          </motion.div>

          {/* Right Side: Detailed Content */}
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-12 mt-10 lg:mt-32"
          >
            <div>
              <h3 className="text-xs tracking-[0.4em] font-semibold uppercase mb-6 text-[#0a0a0a] border-l-2 border-[var(--accent)] pl-4">
                Our_Strategy
              </h3>
              <p style={{ fontFamily: "var(--font-body)" }} className="text-[#525252] leading-loose text-sm md:text-base font-medium">
                Studio Sinners operates at the intersection of brutalist design and high-performance engineering. 
                Based in Dhaka, we service a global clientele, delivering bespoke web ecosystems that 
                prioritize speed, security, and uncompromising visual impact. Our approach is reductive—we strip 
                away the noise to let your brand's core message resonate with clarity.
              </p>
            </div>

            {/* Statistics or Pillars */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-black/5">
              <div>
                <span className="text-4xl font-bold tracking-tighter block">MXXVI</span>
                <span className="text-[9px] tracking-[0.3em] text-[#737373] uppercase font-semibold">Current_Era</span>
              </div>
              <div>
                <span className="text-4xl font-bold tracking-tight block">99.9%</span>
                <span className="text-[9px] tracking-[0.3em] text-[#737373] uppercase font-semibold">Uptime_Efficiency</span>
              </div>
            </div>

            <div className="pt-6">
               <button className="group flex items-center gap-4 text-[#0a0a0a] hover:text-[var(--accent)] transition-colors duration-200">
                  <span style={{ fontFamily: "var(--font-body)" }} className="text-[10px] tracking-[0.5em] font-semibold uppercase group-hover:pr-4 transition-all">
                    Explore_Our_Workflow
                  </span>
                  <div className="w-10 h-px bg-current group-hover:w-20 transition-all duration-500" />
               </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Subtle Signature */}
      <div className="mt-32 text-center opacity-10">
         <span className="text-[8px] tracking-[1.5em] uppercase font-mono">Precision // Purpose // Power</span>
      </div>
    </section>
  );
}