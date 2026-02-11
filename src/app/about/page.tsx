"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About(): React.JSX.Element {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
  };

  interface TeamMember {
    name: string;
    role: string;
    focus: string;
  }

  interface Value {
    title: string;
    desc: string;
  }

  const teamMembers: TeamMember[] = [
    { name: "Sarah Johnson", role: "Principal Strategist", focus: "Architecture" },
    { name: "Mike Chen", role: "Lead Engineer", focus: "Systems" },
    { name: "Emma Davis", role: "Creative Director", focus: "Aesthetics" }
  ];

  const values: Value[] = [
    { title: "Radical_Honesty", desc: "We tell you what you need to hear, not what you want to hear. Results require truth." },
    { title: "Technical_Superiority", desc: "Every project is a benchmark. We use the most advanced tech stacks available." },
    { title: "Human_Emotion", desc: "Precision without soul is empty. We design for humans, not just algorithms." }
  ];

  return (
    <div style={{ 
  fontFamily: "'Pirata One', system-ui", 
  fontWeight: "400", 
  fontStyle: "normal" 
}} className="font min-h-screen bg-[#080808] text-white selection:bg-white selection:text-black">
      
      {/* Hero Section: Large Typography */}
      <section className="relative h-[80vh] flex flex-col justify-center px-6 md:px-20 overflow-hidden border-b border-white/5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"     
          style={{ 
  fontFamily: "'Pirata One', system-ui", 
  fontWeight: "400", 
  fontStyle: "normal" 
}}
        >
       
         
          <span className="text-[10px] tracking-[0.8em] text-gray-500 uppercase mb-6 block">
            Who_We_Are
          </span>
          <h1 className="text-6xl md:text-[10vw] galgo-font font-bold leading-[0.85] tracking-tighter uppercase mb-12">
            The_Mind <br />
            <span className=" border-y-[1px] border-white/20">Behind</span> <br />
            The_System
          </h1>
        </motion.div>
      </section>

      {/* Narrative Section: Clean Text Layout */}
      <section className="py-32 px-6 md:px-20 bg-white text-black">
        <div className="grid md:grid-cols-12 gap-10">
          <motion.div {...fadeInUp} className="md:col-span-4">
            <h2 className="text-[10px] tracking-[0.5em] text-gray-400 uppercase italic">The_Narrative</h2>
          </motion.div>
          <motion.div {...fadeInUp} className="md:col-span-8">
            <h3 className="text-3xl md:text-6xl font-light leading-tight tracking-tighter uppercase mb-12">
              Born in 2020, Studio Siners was built on a single premise: <span style={{
    fontFamily: '"Ubuntu Sans", sans-serif',
    fontOpticalSizing: "auto",
    fontStyle: "normal",
    fontVariationSettings: '"wdth" 100',
  }} className="text-gray-400 italic font-bold uppercase">Complexity needs clarity.</span>
            </h3>
            <div style={{
    fontFamily: '"Ubuntu Sans", sans-serif',
    fontOpticalSizing: "auto",
    fontStyle: "normal",
    fontVariationSettings: '"wdth" 100',
  }} className="grid md:grid-cols-2 gap-12 text-sm leading-relaxed tracking-wide text-gray-600 font-bold uppercase">
              <p>
                We started as a group of engineers and designers who were tired of "good enough." We wanted to build digital tools that felt like art but performed like high-precision machinery.
              </p>
              <p>
                Today, we operate as a strategic laboratory. We don't just take orders; we challenge ideas, optimize architectures, and ensure every line of code adds value to your brand's legacy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section: Minimal List Style */}
      <section className="py-32 px-6 md:px-20 border-t border-white/5">
        <div className="flex justify-between items-end mb-20">
          <motion.h2 {...fadeInUp} className="text-4xl md:text-7xl font-bold tracking-tighter uppercase">
            Architects_
          </motion.h2>
          <span className="text-[10px] tracking-[0.5em] text-gray-600 uppercase mb-4">Core_Team_v2.6</span>
        </div>

        <div className="space-y-1">
          {teamMembers.map((member, i) => (
            <motion.div 
              key={i}
              {...fadeInUp}
              className="group border-t border-white/5 py-10 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-white/[0.02] transition-colors px-4"
            >
              <div className="flex items-center gap-8">
                <span className="text-[10px] text-gray-600 font-mono">0{i+1}</span>
                <h4 className="text-2xl md:text-4xl font-bold uppercase group-hover:pl-4 transition-all duration-500">{member.name}</h4>
              </div>
              <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end">
                <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400">{member.role}</span>
                <span className="text-[8px] tracking-[0.5em] text-gray-700 uppercase">{member.focus}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values: Brutalist Grid */}
      <section className="py-32 px-6 md:px-20 bg-white text-black">
        <div className="grid md:grid-cols-3 gap-16 md:gap-px bg-black/10 border-y border-black/10">
          {values.map((val, i) => (
            <motion.div 
              key={i} 
              {...fadeInUp}
              className="bg-white p-12 space-y-6"
            >
              <h5 className="text-xl font-bold uppercase tracking-tighter">{val.title}</h5>
              <p className="text-sm text-gray-500 leading-relaxed italic">"{val.desc}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-40 px-6 md:px-20 text-center">
        <motion.div {...fadeInUp}>
          <span className="text-[9px] tracking-[1em] text-gray-600 uppercase mb-10 block">End_Of_Document</span>
          <h2 className="text-5xl md:text-[10vw] galgo-font font-bold tracking-tighter uppercase leading-none mb-10">
            Join_Our_Legacy
          </h2>
          <Link href="/contact" className="group flex flex-col items-center">
             <span className="text-sm tracking-[0.5em] uppercase border-b border-white/20 pb-2 group-hover:border-white transition-all">Start_Initialization</span>
          </Link>
        </motion.div>
      </section>

      {/* Mini Footer */}
      <footer className="py-10 px-6 md:px-20 flex justify-between items-center opacity-20 text-[8px] tracking-[0.5em] uppercase">
        <span>Studio_Siners // About_Page</span>
        <span>MXXVI // DHAKA</span>
      </footer>
    </div>
  );
}
