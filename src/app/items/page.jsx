"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ItemsSimple() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockItems = [
      {
        id: 1,
        name: "DOG STUDIO CLONE",
        description: "A high-end creative portfolio clone featuring advanced 3D web technologies. It showcases an interactive 3D animal model with custom Matcap shaders that transition smoothly based on user interaction.",
        price: "299.99",
        image: "https://i.postimg.cc/wjqNjskP/react-dog-1-14-2026-12-08-17-PM.png",
        category: "Creative_Tech",
        year: "2026",
        tech: ["React", "Three.js", "GLSL"],
        approach: "Utilizing custom Matcap shaders and R3F for seamless 3D performance."
      },
      {
        id: 2,
        name: "B2B-Asset Verse",
        description: "AssetVerse is a B2B web application that helps organizations efficiently manage physical assets. It enables companies to track assignments, reducing loss and improving transparency.",
        price: "449.99",
        image: "https://i.postimg.cc/zG40bjPn/ASSET-VERSE-Mozilla-Firefox-12-27-2025-9-27-24-PM.png",
        category: "B2B_SaaS",
        year: "2025",
        tech: ["Next.js", "PostgreSQL", "Tailwind"],
        approach: "Architecting a multi-tenant database structure for enterprise scalability."
      },
      {
        id: 3,
        name: "Creative Studio",
        description: "A visually bold and experimental creative studio portfolio focused on high-impact layouts, kinetic typography, and modern digital aesthetics.",
        price: "399.99",
        image: "https://i.postimg.cc/76tChBKv/(70-Reacting-to-21-Design-Portfolios-in-22-Minutes-You-Tube-Mozilla-Firefox-1-11-2026-4-00-31-PM.png",
        category: "Digital_Design",
        year: "2026",
        tech: ["Framer Motion", "React", "GSAP"],
        approach: "Experimental typography and interaction-led layout transitions."
      }
    ];

    setTimeout(() => {
      setItems(mockItems);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-t-2 border-white animate-spin rounded-full mx-auto mb-4"></div>
          <p className="text-white text-[10px] tracking-[0.5em] uppercase">Initializing_System</p>
        </div>
      </div>
    );
  }

  return (
    <main
      style={{ fontFamily: "var(--font-display)" }}
      className="bg-[var(--background)] text-white font-sans"
    >
      <nav className="fixed top-0 left-0 w-full p-8 z-50 flex justify-between items-baseline mix-blend-difference">
        <Link href="/" className="text-xs tracking-[0.5em] hover:text-[var(--accent)] transition-colors uppercase font-medium">Home</Link>
        <div className="text-[9px] tracking-[0.3em] text-white/50 uppercase font-medium">Scroll to Explore</div>
      </nav>

      {/* Projects List */}
      {items.map((item, index) => (
        <ProjectSection key={item.id} item={item} index={index} />
      ))}

      <footer className="h-[50vh] flex flex-col items-center justify-center border-t border-[var(--border)]">
        <h2 className="text-[15vw] font-bold opacity-5 select-none tracking-tight">FINISH</h2>
        <Link href="/" className="text-xs tracking-[1em] mt-[-2vw] hover:text-[var(--accent)] transition-colors uppercase font-medium">
          Back to Start
        </Link>
      </footer>
    </main>
  );
}

const ProjectSection = ({ item, index }) => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center py-32 px-6 md:px-20 border-b border-white/5 overflow-hidden">
      
      {/* Background Floating Number */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none">
        <span className="text-[40vw] leading-none font-bold">0{index + 1}</span>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        
        {/* Left: Branding & Meta */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-4 flex flex-col justify-between"
        >
          <div className="space-y-6">
            <span className="text-[10px] tracking-[0.5em] text-gray-500 uppercase">Product / 0{index + 1}</span>
            <h2 className="text-5xl md:text-7xl font-normal leading-[0.9] uppercase tracking-tighter">
              {item.name}
            </h2>
            <div className="flex gap-4">
              <span className="px-3 py-1 border border-white/20 text-[9px] rounded-full uppercase italic">{item.year}</span>
              <span className="px-3 py-1 border border-white/20 text-[9px] rounded-full uppercase">{item.category}</span>
            </div>
          </div>

          <div className="pt-10 lg:pt-0 space-y-6">
            <p  style={{
    fontFamily: '"Ubuntu Sans", sans-serif',
    fontOpticalSizing: "auto",
    fontStyle: "normal",
    fontVariationSettings: '"wdth" 100',
  }} className="text-sm text-gray-400 leading-relaxed max-w-xs font-bold uppercase">
              {item.description}
            </p>
            <div className="flex flex-col gap-4">
               <div className="text-2xl font-light tracking-widest">${item.price}</div>
               <Link href={`/items/${item.id}`} className="text-[10px] tracking-[0.4em] underline decoration-white/20 hover:decoration-white transition-all uppercase">
                 View_Details_System
               </Link>
            </div>
          </div>
        </motion.div>

        {/* Right: Image Section */}
        <motion.div 
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
          viewport={{ once: true }}
          className="lg:col-span-8 group relative"
        >
          <div className="overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 ease-in-out shadow-2xl bg-white/5 aspect-video">
             <motion.div
               whileHover={{ scale: 1.05 }}
               transition={{ duration: 1 }}
               className="w-full h-full relative"
             >
               <Image 
                 src={item.image} 
                 alt={item.name} 
                 fill
                 className="object-cover"
               />
             </motion.div>
             
             {/* Hover Overlay */}
             <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <p className="text-[10px] tracking-[1em] translate-y-4 group-hover:translate-y-0 transition-transform font-bold uppercase">Discover details</p>
             </div>
          </div>
          
          {/* Tech Stack below image */}
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 opacity-30">
            {item.tech?.map((t, i) => (
              <span key={i} className="text-[9px] uppercase tracking-widest">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Technical Approach */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-start gap-10"
      >
        <div className="max-w-xl">
          <h4 className="text-[9px] tracking-[0.5em] text-gray-600 mb-4 uppercase italic">Technical_Approach</h4>
          <p className="text-xl md:text-3xl font-light leading-[1.2] text-gray-200 uppercase tracking-tighter">
            {item.approach}
          </p>
        </div>
        <div className="hidden md:block text-[8px] text-gray-800 tracking-[0.5em] [writing-mode:vertical-lr] rotate-180">
          ESTD. 2026 // SYSTEM_DESIGN
        </div>
      </motion.div>
    </section>
  );
};