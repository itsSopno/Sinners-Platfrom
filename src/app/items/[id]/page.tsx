// "use client";

// import React from "react";
// import { useState, useEffect } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { useApp } from "../../../contexts/AppContext";

// interface Item {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   image: string;
//   category: string;
//   year: string;
//   tech: string[];
//   approach: string;
// }

// interface Spec {
//   k: string;
//   v: string;
// }

// export default function ItemDetails(): React.JSX.Element {
//   const params = useParams();
//   const router = useRouter();
//   const [item, setItem] = useState<Item | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string>("");
//   const { addToCart, addToWishlist, removeFromWishlist, wishlist } = useApp();

//   const mockItems: Item[] = [
//     {
//       id: "1",
//       name: "DOG STUDIO CLONE",
//       description: "A high-end creative portfolio clone featuring advanced 3D web technologies. It showcases an interactive 3D animal model with custom Matcap shaders that transition smoothly based on user interaction.",
//       price: 299.99,
//       image: "https://i.postimg.cc/wjqNjskP/react-dog-1-14-2026-12-08-17-PM.png",
//       category: "CREATIVE_TECH",
//       year: "2026",
//       tech: ["React", "Three.js", "GLSL", "GSAP"],
//       approach: "Utilizing custom Matcap shaders and R3F for seamless 3D performance."
//     },
//     {
//       id: "2",
//       name: "B2B-ASSET VERSE",
//       description: "AssetVerse is a B2B web application that helps organizations efficiently manage physical assets. It enables companies to track assignments, reducing loss and improving transparency.",
//       price: 449.99,
//       image: "https://i.postimg.cc/zG40bjPn/ASSET-VERSE-Mozilla-Firefox-12-27-2025-9-27-24-PM.png",
//       category: "B2B_SAAS",
//       year: "2025",
//       tech: ["Next.js", "PostgreSQL", "Tailwind", "Prisma"],
//       approach: "Architecting a multi-tenant database structure for enterprise scalability."
//     }
//   ];

//   useEffect(() => {
//     const fetchItem = async (): Promise<void> => {
//       setLoading(true);
//       await new Promise(resolve => setTimeout(resolve, 800));
//       const foundItem = mockItems.find(item => item.id === params.id);
//       if (foundItem) setItem(foundItem);
//       else setError("ITEM_NOT_FOUND");
//       setLoading(false);
//     };
//     if (params.id) fetchItem();
//   }, [params.id]);

//   const isInWishlist = wishlist.some(wishItem => wishItem.id === item?.id);

//   if (loading) return (
//     <div className="min-h-screen bg-[#080808] flex items-center justify-center">
//       <div className="flex flex-col items-center gap-4">
//         <div className="w-12 h-[1px] bg-white animate-pulse"></div>
//         <span className="text-[10px] tracking-[0.5em] text-gray-500 uppercase italic">Syncing_System</span>
//       </div>
//     </div>
//   );

//   if (error || !item) return (
//     <div className="min-h-screen bg-[#080808] flex flex-col items-center justify-center text-white p-6">
//       <h1 className="text-4xl font-bold tracking-tighter mb-6 uppercase italic underline underline-offset-8 decoration-red-600">ERROR_04: {error}</h1>
//       <Link href="/items" className="text-xs tracking-[0.4em] uppercase border-b border-white/20 pb-2 hover:border-white transition-all">Back_to_Index</Link>
//     </div>
//   );

//   const specs: Spec[] = [
//     { k: "LICENSE", v: "Extended_Commercial" },
//     { k: "REVISION", v: "v4.0.2_BETA" },
//     { k: "SUPPORT", v: "24/7_Direct_Relay" }
//   ];

//   return (
//     <div style={{ 
//   fontFamily: "'Pirata One', system-ui", 
//   fontWeight: "400", 
//   fontStyle: "normal" 
// }} className="min-h-screen bg-[#080808] text-white selection:bg-white selection:text-black pt-32 pb-20 font-sans">
//       <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
//         {/* Navigation Breadcrumb */}
//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-12 border-b border-white/5 pb-6">
//           <Link href="/items" className="text-[10px] tracking-[0.4em] text-gray-500 hover:text-white transition-all uppercase italic">
//             ← Return_to_Catalog
//           </Link>
//         </motion.div>

//         <div className="grid lg:grid-cols-12 gap-16 items-start">
          
//           {/* Visual Asset Section */}
//           <motion.div 
//             initial={{ opacity: 0, y: 30 }} 
//             animate={{ opacity: 1, y: 0 }}
//             className="lg:col-span-7 space-y-12"
//           >
//             <div className="relative aspect-[4/3] w-full overflow-hidden bg-white/5 group">
//               <Image
//                 src={item.image}
//                 alt={item.name}
//                 fill
//                 className="object-cover group-hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0"
//                 priority
//               />
//               <div className="absolute top-6 left-6 text-[10px] tracking-[0.5em] bg-black/80 backdrop-blur-md px-4 py-2 uppercase border border-white/10 italic">
//                 {item.category}
//               </div>
//             </div>

//             {/* Design Approach Section */}
//             <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-white/5">
//               <div>
//                 <h3 className="text-[10px] tracking-[0.4em] text-gray-500 uppercase mb-4 italic">Core_Philosophy</h3>
//                 <p className="text-sm leading-relaxed text-gray-400 font-light">{item.approach}</p>
//               </div>
//               <div>
//                 <h3 className="text-[10px] tracking-[0.4em] text-gray-500 uppercase mb-4 italic">Tech_Stack</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {item.tech.map((t, i) => (
//                     <span key={i} className="text-[10px] px-3 py-1 border border-white/10 uppercase tracking-widest">{t}</span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Configuration & Purchase Section */}
//           <motion.aside 
//             initial={{ opacity: 0, x: 20 }} 
//             animate={{ opacity: 1, x: 0 }}
//             className="lg:col-span-5 sticky top-32 space-y-12"
//           >
//             <div>
//               <span className="text-[10px] tracking-[0.8em] text-blue-500 uppercase mb-4 block italic font-bold">RELEASE_{item.year}</span>
//               <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 leading-[0.9]">
//                 {item.name}
//               </h1>
//               <div className="text-4xl font-mono tracking-tighter mb-8 border-b border-white/5 pb-8">
//                 ${item.price.toFixed(2)}
//               </div>
//               <p style={{
//     fontFamily: '"Ubuntu Sans", sans-serif',
//     fontOpticalSizing: "auto",
//     fontStyle: "normal",
//     fontVariationSettings: '"wdth" 100',
//   }}  className="text-gray-400 text-sm leading-relaxed mb-10 font-bold uppercase">
//                 {item.description}
//               </p>
//             </div>

//             {/* Action Matrix */}
//             <div className="space-y-4">
//               <button 
//                 onClick={() => addToCart({ ...item, quantity: 1 })}
//                 className="w-full bg-white text-black py-5 uppercase text-xs tracking-[0.5em] font-bold hover:bg-gray-200 transition-all active:scale-[0.98]"
//               >
//                 Acquire_Access
//               </button>
              
//               <button 
//                 onClick={() => isInWishlist ? removeFromWishlist(item.id) : addToWishlist(item)}
//                 className={`w-full py-5 border uppercase text-[10px] tracking-[0.5em] font-bold transition-all ${
//                   isInWishlist 
//                   ? 'border-red-600/50 text-red-500 bg-red-600/5' 
//                   : 'border-white/10 text-white hover:bg-white/5'
//                 }`}
//               >
//                 {isInWishlist ? 'REMOVE_FROM_ARCHIVE' : 'ADD_TO_ARCHIVE'}
//               </button>
//             </div>

//             {/* Static Specs Table */}
//             <div className="pt-12 border-t border-white/5">
//               <h3 className="text-[10px] tracking-[0.4em] text-gray-600 uppercase mb-6 italic underline underline-offset-8">System_Specifications</h3>
//               <div className="space-y-4">
//                 {specs.map((spec, i) => (
//                   <div key={i} className="flex justify-between text-[10px] tracking-[0.2em] font-mono border-b border-white/5 pb-2">
//                     <span className="text-gray-600 uppercase italic">{spec.k}</span>
//                     <span className="uppercase text-white">{spec.v}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </motion.aside>

//         </div>
//       </div>

//       {/* Background Subtle Logo */}
//       <footer className="mt-32 pt-10 border-t border-white/5 opacity-10 text-center">
//          <span className="text-[8px] tracking-[1em] uppercase">Studio_Siners_MXXVI // Case_Study_Node</span>
//       </footer>
//     </div>
//   );
// }

"use client";

import React, { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Item {
  _id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  year: string;
  tech: string[];
  approach: string;
}

export default function ItemShowcase() {
  const params = useParams();
  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState(true);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth Parallax Values
  const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const imgY = useTransform(springScroll, [0, 1], ["0%", "30%"]);
  const textScale = useTransform(springScroll, [0, 0.5], [1, 0.8]);
  const opacity = useTransform(springScroll, [0, 0.3], [1, 0]);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await fetch("https://server-1-1-6g3a.onrender.com/items");
        const data = await res.json();
        const found = data.find((i: Item) => i._id === params.id);
        setItem(found || null);
      } catch (e) {
        console.error("API Error", e);
      } finally {
        setLoading(false);
      }
    };
    if (params.id) fetchItem();
  }, [params.id]);

  if (loading) return <LoadingPulse />;
  if (!item) return <ErrorView />;

  return (
    <div ref={containerRef} className="bg-[#080808] text-white selection:bg-white selection:text-black">
      
      {/* 1. THE HERO REVEAL: সরাসরি নাম এবং বড় ইমেজ */}
      <section className="relative h-[120vh] w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Floating Metadata */}
        <div className="absolute top-12 left-10 z-30 mix-blend-difference">
          <p className="text-[10px] tracking-[0.6em] uppercase opacity-60 italic">{item.category} // ARCHIVE_{item.year}</p>
        </div>

        {/* Dynamic Big Title */}
        <motion.div style={{ scale: textScale, opacity }} className="z-20 text-center pointer-events-none">
          <h1 className="text-[14vw] font-bold leading-[0.8] tracking-tighter uppercase italic drop-shadow-2xl">
            {item.name}
          </h1>
        </motion.div>

        {/* Parallax Image Background */}
        <motion.div style={{ y: imgY }} className="absolute inset-0 z-0 opacity-40 grayscale hover:grayscale-0 transition-all duration-1000">
          <Image src={item.image} alt={item.name} fill className="object-cover scale-110" priority />
        </motion.div>

        {/* Scrolldown Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
          <span className="text-[8px] tracking-[0.5em] uppercase">Scroll to Inspect</span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* 2. SPECIFICATION MATRIX: Brutalist Layout */}
      <section className="relative z-10 min-h-screen grid lg:grid-cols-2 gap-0 border-t border-white/10 bg-[#080808]">
        
        {/* Left: Narrative */}
        <div className="p-10 md:p-20 flex flex-col justify-between border-r border-white/10">
          <div className="space-y-10">
            <span className="text-[10px] tracking-[0.8em] text-gray-500 uppercase italic">/ Concept_Description</span>
            <p className="text-3xl md:text-5xl font-light leading-tight tracking-tight uppercase italic">
              "{item.description}"
            </p>
          </div>
          
          <div className="pt-20">
            <span className="text-[10px] tracking-[0.8em] text-gray-500 uppercase italic mb-6 block">/ Tech_Stack</span>
            <div className="flex flex-wrap gap-3">
              {item.tech.map((t, i) => (
                <span key={i} className="px-5 py-2 border border-white/20 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Technical Approach & Buy */}
        <div className="p-10 md:p-20 flex flex-col justify-between bg-zinc-950">
          <div className="space-y-10">
             <span className="text-[10px] tracking-[0.8em] text-gray-500 uppercase italic">/ Execution_Strategy</span>
             <h3 className="text-xl md:text-2xl font-mono leading-relaxed opacity-80 uppercase">
               {item.approach}
             </h3>
          </div>

          <div className="mt-20 space-y-8">
            <div className="flex justify-between items-end border-b border-white/10 pb-6">
              <span className="text-[10px] tracking-[0.5em] uppercase opacity-40 italic">Global_Access_Fee</span>
              <span className="text-6xl font-bold tracking-tighter">${item.price}</span>
            </div>

            <button className="w-full bg-white text-black py-8 text-xs font-bold uppercase tracking-[1em] hover:bg-transparent hover:text-white border border-white transition-all overflow-hidden group relative">
               <span className="relative z-10">Purchase_License</span>
               <motion.div className="absolute inset-0 bg-blue-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. FINAL SHOWCASE: Full-bleed grayscale transition */}
      <section className="h-[100vh] w-full relative grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden">
        <Image src={item.image} alt="Showcase" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
           <h2 className="text-[20vw] font-bold opacity-10 tracking-[0.2em] uppercase">SYSTEM</h2>
        </div>
      </section>

      {/* Footer Nav */}
      <footer className="py-20 flex flex-col items-center gap-6 opacity-30">
        <Link href="/items" className="text-[10px] tracking-[1em] uppercase hover:opacity-100 transition-opacity">Back_to_Index</Link>
        <span className="text-[8px] uppercase tracking-widest italic font-mono">Archive.v2 // Case Study Node</span>
      </footer>
    </div>
  );
}

// Sub-components
const LoadingPulse = () => (
  <div className="h-screen bg-black flex items-center justify-center">
    <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-10 h-[1px] bg-white" />
  </div>
);

const ErrorView = () => (
  <div className="h-screen bg-black flex flex-col items-center justify-center gap-6">
    <h1 className="text-xs tracking-[1em] uppercase text-red-500">Asset_Failed_To_Load</h1>
    <Link href="/items" className="text-[10px] uppercase border-b border-white/20 pb-1">Return</Link>
  </div>
);