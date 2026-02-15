
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  // ১. স্ক্রল স্মুথনেস এবং স্কিউ (Skew) ইফেক্ট
  const skewValue = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const smoothSkew = useSpring(skewValue, { stiffness: 100, damping: 30 });

  // ২. হরিজন্টাল মুভমেন্ট
  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  return (
    <div ref={containerRef} className="bg-[#050505] text-white selection:bg-white selection:text-black overflow-hidden font-sans uppercase tracking-tight">
      
      {/* SECTION 1: HERO */}
      <section className="h-screen flex flex-col justify-center items-center relative border-b border-white/5">
        <div className="absolute top-10 left-10 text-[10px] tracking-[0.4em] opacity-40 font-mono">
          SYSTEM_ACCESS: GRANTED
        </div>
        
        <motion.div style={{ skewY: smoothSkew }} className="text-center z-10 px-4">
          <h1 className="text-[14vw] font-black galgo-font leading-[0.8] tracking-tighter">
            THE_MINDS <br /> <span className="text-outline">BEHIND_US</span>
          </h1>
        </motion.div>

        <div className="absolute bottom-10 right-10 flex items-center gap-6">
          <span className="text-[9px] tracking-[0.5em] opacity-30 italic">v2.6.0_STABLE</span>
          <div className="w-12 h-[1px] bg-white/20"></div>
        </div>
      </section>

      {/* SECTION 2: BOLD MARQUEE & CONTENT */}
      <section className="py-40 bg-white text-black overflow-hidden">
        <motion.div style={{ x: xLeft }} className="flex gap-10 whitespace-nowrap mb-20">
          {[1, 2, 3].map((i) => (
            <h2 key={i} className="text-[10vw] galgo-font font-black leading-none">
              STUDIO_SINERS_STUDIO_SINERS_STUDIO_SINERS_
            </h2>
          ))}
        </motion.div>
        
        <div className="px-6 md:px-20 grid md:grid-cols-12 gap-12 mt-24">
            <div className="md:col-span-7">
              <motion.h3 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-8xl galgo-font font-black leading-[0.9] tracking-tighter uppercase"
              >
                Complex problems <br /> 
                <span className="text-zinc-400">Brutal solutions.</span>
              </motion.h3>
            </div>
            
            <div className="md:col-span-5 flex flex-col justify-end space-y-8">
                <p className="text-sm md:text-base galgo-font font-bold text-zinc-500 leading-relaxed uppercase">
               We don't just build beautiful interfaces; we engineer systems that anchor your business. Code is our tool, design is our language.
                </p>
                <div className="w-full aspect-video bg-zinc-100 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-1000">
                    {/* <img 
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" 
                      className="w-full h-full object-cover"
                      alt="Modern Tech"
                    /> */}
                      <img 
                      src="https://i.pinimg.com/1200x/20/f6/20/20f620f7e65a445102a3d63a76cb1afc.jpg" 
                      className="w-full h-full object-cover"
                      alt="Modern Tech"
                    />
                </div>
            </div>
        </div>

        <motion.div style={{ x: xRight }} className="flex gap-10 whitespace-nowrap mt-32 opacity-10">
          {[1, 2, 3].map((i) => (
            <h2 key={i} className="text-[10vw] galgo-font font-black leading-none">
              FUTURE_LEGACY_FUTURE_LEGACY_FUTURE_LEGACY_
            </h2>
          ))}
        </motion.div>
      </section>

      {/* SECTION 3: TEAM LIST */}
      <section className="py-40 px-6 galgo-font md:px-20">
        <div className="flex justify-between items-end mb-20">
            <h2 className="text-4xl font-black tracking-widest uppercase text-white">The_Core</h2>
            <span className="text-[10px] opacity-30 font-mono tracking-widest text-white">BUILD_v2026</span>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {["Sarah Johnson", "Mike Chen", "Emma Davis"].map((name, i) => (
            <motion.div 
              key={i} 
              className="group flex flex-col md:flex-row justify-between items-start md:items-center py-14 hover:bg-white hover:text-black transition-all duration-500 px-4 cursor-crosshair text-white"
            >
                <div className="flex items-center gap-12">
                  <span className="font-mono text-[10px] opacity-30">0{i+1}</span>
                  <h4 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none group-hover:text-black">
                    {name}
                  </h4>
                </div>
                <div className="mt-6 md:mt-0 text-left md:text-right">
                    <p className="text-[10px] font-bold tracking-[0.3em] opacity-40 group-hover:opacity-100 group-hover:text-black">LEAD_DEVELOPER</p>
                    <p className="text-[10px] font-bold tracking-[0.3em] opacity-20 group-hover:opacity-60 italic uppercase group-hover:text-black">Systems Architecture</p>
                </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4: CALL TO ACTION */}
      <section className="py-60 flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[12vw] font-black galgo-font leading-none tracking-tighter mb-16">
            READY_TO <br /> <span className="text-zinc-800">CONNECT?</span>
          </h2>
          <button className="px-16 py-6 bg-white text-black font-black uppercase text-sm tracking-[0.5em] hover:bg-zinc-200 transition-all">
            Start_Project
          </button>
        </motion.div>
      </section>

      <footer className="p-10 border-t border-white/5 flex justify-between items-center text-[8px] tracking-[1em] opacity-20 uppercase">
        <span>Studio_Siners // 2026</span>
        <span>Dhaka_Base // Global_Reach</span>
      </footer>

      <style jsx>{`
        .text-outline {
          -webkit-text-stroke: 1.5px white;
          color: transparent;
        }
      `}</style>
    </div>
  );
}
