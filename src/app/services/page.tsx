"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Service {
  id: string;
  title: string;
  desc: string;
  details: string[];
}

interface Process {
  step: string;
  desc: string;
}

export default function Services(): React.JSX.Element {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
  };

  const services: Service[] = [
    {
      id: "01",
      title: "System Architecture",
      desc: "Engineering robust, scalable tech stacks using Next.js and Cloud infrastructures.",
      details: ["Scalability Analysis", "Cloud Optimization", "Security Audits"]
    },
    {
      id: "02",
      title: "Experience Design",
      desc: "User-centric interfaces optimized for high conversion and emotional resonance.",
      details: ["UI/UX Strategy", "Prototyping", "User Psychology"]
    },
    {
      id: "03",
      title: "Brand Identity",
      desc: "Crafting modern visual systems that define your market position and authority.",
      details: ["Visual Language", "Logo Systems", "Brand Guidelines"]
    },
    {
      id: "04",
      title: "Strategic Consulting",
      desc: "Expert advice on digital transformation and optimizing your business workflow.",
      details: ["Technical Roadmap", "Market Positioning", "ROI Analysis"]
    }
  ];

  const processes: Process[] = [
    { step: "Discovery", desc: "Deep dive into your system requirements and business goals." },
    { step: "Architect", desc: "Designing a custom blueprint for scalability and performance." },
    { step: "Deploy", desc: "Precision implementation with rigorous testing protocols." },
    { step: "Optimize", desc: "Continuous monitoring and refinement of digital assets." }
  ];

  return (
    <div
      style={{ fontFamily: "var(--font-display)" }}
      className="min-h-screen bg-[var(--background)] text-white font-sans"
    >
      <section className="relative pt-44 pb-24 px-6 md:px-20 border-b border-[var(--border)] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          <span className="text-[10px] tracking-[0.7em] text-[var(--muted)] uppercase mb-6 block font-medium">
            Expertise_Systems
          </span>
          <h1 className="text-5xl md:text-[10vw] galgo-font font-bold leading-[0.88] tracking-tight uppercase mb-12">
            Technical <br />
            <span className="text-[var(--accent)]">Solutions</span> <br />
            For_Scale
          </h1>
        </motion.div>
      </section>

      {/* Services List: High-Impact List Style */}
      <section className="py-20 px-6 md:px-20 bg-white text-black">
        <div className="mb-20">
          <h2 className="text-[10px] tracking-[0.5em] text-[#737373] uppercase font-semibold">Core_Expertise</h2>
        </div>

        <div className="space-y-1">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              {...fadeInUp}
              className="group border-t border-black/10 py-16 flex flex-col md:grid md:grid-cols-12 gap-10 hover:bg-gray-50 transition-all duration-500 px-4"
            >
              <div className="md:col-span-1">
                <span className="text-[12px] font-mono font-bold opacity-30">{service.id}_</span>
              </div>
              
              <div className="md:col-span-4">
                <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter group-hover:translate-x-2 transition-transform duration-500">
                  {service.title}
                </h3>
              </div>

              <div className="md:col-span-4">
                <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
                  {service.desc}
                </p>
              </div>

              <div className="md:col-span-3 flex flex-col md:items-end gap-2">
                {service.details.map((detail, idx) => (
                  <span key={idx} className="text-[9px] tracking-[0.2em] uppercase font-bold text-gray-400">
                    // {detail}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-32 px-6 md:px-20 border-t border-[var(--border)]">
        <div className="grid md:grid-cols-12 gap-10">
          <motion.div {...fadeInUp} className="md:col-span-4">
            <h2 className="text-[10px] tracking-[0.5em] text-[var(--muted)] uppercase font-medium">How_We_Sync</h2>
          </motion.div>
          <motion.div {...fadeInUp} className="md:col-span-8">
            <div className="grid md:grid-cols-2 gap-12">
              {processes.map((proc, i) => (
                <div key={i} className="space-y-4">
                  <div className="text-[10px] font-mono text-[var(--accent)]">PHASE_0{i+1}</div>
                  <h4 className="text-xl font-bold uppercase tracking-tight text-white">{proc.step}</h4>
                  <p className="text-[var(--muted-foreground)] text-xs leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{proc.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 md:px-20 bg-white text-black text-center">
        <motion.div {...fadeInUp}>
          <span className="text-[9px] tracking-[1em] text-gray-400 uppercase mb-10 block">System_Input_Needed</span>
          <h2 className="text-5xl md:text-[10vw] font-bold tracking-tighter uppercase leading-none mb-12">
            Ready_To_Build?
          </h2>
          <Link href="/contact" className="inline-block group">
             <div className="flex flex-col items-center">
                <span className="text-xs tracking-[0.6em] font-bold uppercase mb-2">Initialize_Project</span>
                <div className="w-20 h-[1px] bg-black group-hover:w-40 transition-all duration-700"></div>
             </div>
          </Link>
        </motion.div>
      </section>

      <footer className="py-10 px-6 md:px-20 flex justify-between items-center text-[var(--muted)] text-[8px] tracking-[0.5em] uppercase border-t border-[var(--border)] font-medium">
        <span>Region: Dhaka_Node</span>
        <span>Studio_Sinners // Services</span>
      </footer>
    </div>
  );
}
