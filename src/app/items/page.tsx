// "use client";

// import { useState, useEffect, useRef } from "react";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import Image from "next/image";

// interface Item {
//   _id: string;
//   name: string;
//   description: string;
//   price: string;
//   image: string;
//   category: string;
//   year: string;
//   tech: string[];
//   approach: string;
// }

// export default function ExperimentalShowcase() {
//   const [items, setItems] = useState<Item[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://server-1-1-6g3a.onrender.com/items")
//       .then((res) => res.json())
//       .then((data) => {
//         setItems(data);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <LoadingSequence />;

//   return (
//     <div className="bg-[#050505] text-[#fafafa] selection:bg-white selection:text-black min-h-screen">
      
//       {/* 1. MINIMALIST NAV (Strictly Functional) */}
//       {/* <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-[100] pointer-events-auto mix-blend-difference">
//         <div className="text-[10px] font-bold tracking-[0.8em] uppercase cursor-pointer group">
//           Archive<span className="opacity-0 group-hover:opacity-100 transition-opacity">.2026</span>
//         </div>
//         <div className="flex gap-12 items-center">
//           <div className="hidden md:flex gap-6">
//             <span className="text-[9px] uppercase tracking-widest opacity-30 italic">Active_Server_Connection</span>
//           </div>
//           <button className="w-8 h-8 flex flex-col justify-center gap-1.5 group">
//             <div className="w-full h-[1px] bg-white transition-all group-hover:w-1/2" />
//             <div className="w-full h-[1px] bg-white transition-all" />
//           </button>
//         </div>
//       </nav> */}

//       <main>
//         {/* 2. DYNAMIC HERO */}
//         <section className="h-[80vh] galgo-font flex flex-col items-center justify-center text-center px-4">
//           <motion.p 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-[10px] uppercase tracking-[1em] mb-10 opacity-30"
//           >
//             Curated Digital Assets
//           </motion.p>
//           <motion.h1 
//             initial={{ y: 100, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//             className="text-[12vw] font-bold uppercase tracking-tighter leading-none"
//           >
//             Experience<br />System
//           </motion.h1>
//         </section>

//         {/* 3. EXPERIMENTAL SHOWCASE LIST */}
//         <div className="pb-40">
//           {items.map((item, index) => (
//             <ProjectSection key={item._id} item={item} index={index} />
//           ))}
//         </div>
//       </main>

//       <footer className="h-screen flex flex-col items-center justify-center border-t border-white/5">
//         <span className="text-[10px] tracking-[2em] uppercase opacity-20 mb-10">Get in touch</span>
//         <h2 className="text-[10vw] font-bold uppercase tracking-tighter hover:italic transition-all cursor-pointer">Hello@Archive</h2>
//       </footer>
//     </div>
//   );
// }

// const ProjectSection = ({ item, index }: { item: Item; index: number }) => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"]
//   });

//   const xText = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
//   const springX = useSpring(xText, { stiffness: 100, damping: 30 });

//   return (
//     <section ref={ref} className="relative py-40 overflow-hidden border-b border-white/5 group">
      
//       {/* Background Scrolling Text (The Creativity) */}
//       <motion.div 
//         style={{ x: springX }}
//         className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap opacity-[0.03] pointer-events-none select-none z-0"
//       >
//         <span className="text-[25vw] galgo-font font-bold uppercase tracking-tighter">
//           {item.name} • {item.name} • {item.name}
//         </span>
//       </motion.div>

//       <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        
//         {/* INFO SIDE */}
//         <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
//           <div className="flex items-center gap-4">
//             <span className="text-[10px] font-mono text-white/30">0{index + 1}</span>
//             <div className="h-[1px] w-10 bg-white/20" />
//             <span className="text-[10px] tracking-[0.5em] uppercase text-white/50">{item.category}</span>
//           </div>
          
//           <h3 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none group-hover:italic transition-all duration-700">
//             {item.name}
//           </h3>

//           <p className="text-gray-400 text-xs md:text-sm uppercase tracking-widest leading-loose max-w-sm">
//             {item.description}
//           </p>

//           <div className="flex items-center gap-10 pt-6">
//             <div className="text-3xl font-light tracking-tighter">${item.price}</div>
//             <button className="h-12 px-8 border border-white/10 text-[9px] uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all">
//               Initialize_Acquisition
//             </button>
//           </div>
//         </div>

//         {/* IMAGE SIDE (Floating Effect) */}
//         <div className="lg:col-span-7 order-1 lg:order-2">
//           <motion.div 
//             whileHover={{ scale: 1.02 }}
//             className="relative aspect-[16/10] grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden"
//           >
//              <Image 
//               src={item.image} 
//               alt={item.name} 
//               fill 
//               className="object-cover transition-transform duration-1000 scale-110 group-hover:scale-100"
//             />
//             {/* Tech Overlay */}
//             <div className="absolute top-4 right-4 flex flex-col gap-2">
//               {item.tech.map((t, i) => (
//                 <span key={i} className="text-[8px] bg-black/80 backdrop-blur-md text-white px-3 py-1 uppercase tracking-tighter">
//                   {t}
//                 </span>
//               ))}
//             </div>
//           </motion.div>
//         </div>

//       </div>
//     </section>
//   );
// };

// const LoadingSequence = () => (
//   <div className="h-screen bg-[#050505] flex items-center justify-center">
//     <div className="flex flex-col items-center gap-6">
//        <div className="w-16 h-[1px] bg-white/20 relative overflow-hidden">
//           <motion.div 
//             animate={{ x: ["-100%", "100%"] }}
//             transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
//             className="absolute inset-0 bg-white"
//           />
//        </div>
//        <span className="text-[9px] tracking-[1em] uppercase opacity-40">System_Booting</span>
//     </div>
//   </div>
// );

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

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

export default function AvantGardeShowcase() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://server-1-1-6g3a.onrender.com/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingSequence />;

  return (
    <div className="bg-[#050505] text-[#fff] selection:bg-[#fff] selection:text-[#000]">
      {/* 1. FIXED UI ELEMENTS */}
   

      {/* 2. MAIN SHOWCASE */}
      <main>
        {items.map((item, index) => (
          <ShowcaseSection key={item._id} item={item} index={index} total={items.length} />
        ))}
      </main>

      {/* 3. BIG CTA FOOTER */}
      <footer className="h-screen flex flex-col items-center justify-center border-t border-white/5">
        <span className="text-[10px] tracking-[2em] uppercase opacity-20 mb-10">End of Line</span>
        <h2 className="text-[15vw] galgo-font font-bold tracking-tighter uppercase italic opacity-5">SINNERS</h2>
      </footer>
    </div>
  );
}

const ShowcaseSection = ({ item, index, total }: { item: Item; index: number; total: number }) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax Logic
  const yText = useTransform(scrollYProgress, [0, 1], [300, -300]);
  const yImage = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacityInfo = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);
  const smoothYText = useSpring(yText, { stiffness: 100, damping: 30 });

  return (
    <section ref={sectionRef} className="relative h-[150vh] w-full border-b border-white/5 flex items-center justify-center overflow-hidden">
      
      {/* 🏷️ Project Index */}
      <div className="absolute top-24 left-10 flex flex-col items-start gap-4 z-40">
        <span className="text-[9px] font-mono opacity-40 tracking-tighter italic">ITEM_{index + 1} / {total}</span>
        <div className="h-[1px] w-12 bg-white/30" />
      </div>

      {/* 🖼️ Main Image (Maintained Aspect Ratio & Visible) */}
      <motion.div 
        style={{ y: yImage }}
        className="relative w-[90vw] md:w-[55vw] lg:w-[45vw] aspect-[16/10] z-0 overflow-hidden rounded-sm"
      >
        <Image 
          src={item.image} 
          alt={item.name} 
          fill 
          className="object-cover transition-all duration-700 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        {/* Subtle Overlay to make text pop but keep image clear */}
        <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-500" />
      </motion.div>

      {/* 🖋️ Floating Typography (Background Layer) */}
      <motion.div 
        style={{ y: smoothYText }}
        className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none"
      >
        <h2 className="text-[14vw] galgo-font font-bold uppercase tracking-tighter mix-blend-difference leading-none opacity-90">
          {item.name}
        </h2>
      </motion.div>

      {/* 📄 Detail Box (Right Aligned) */}
      <div className="absolute bottom-20 right-6 md:right-16 max-w-[320px] space-y-8 z-30 text-right">
        <motion.div style={{ opacity: opacityInfo }} className="space-y-6">
          <p className="text-[9px] tracking-[0.5em] uppercase text-blue-500 font-bold">Concept_Brief</p>
          <p className="text-xs md:text-sm uppercase tracking-widest leading-loose font-medium text-white/90">
            {item.description}
          </p>
          
          <div className="flex flex-wrap gap-2 justify-end pt-2">
            {item.tech.map((t, i) => (
              <span key={i} className="text-[8px] border border-white/20 px-2 py-1 uppercase tracking-tighter bg-white/5">
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-col items-end gap-5 pt-8 border-t border-white/10">
          <div className="flex flex-col items-end">
            <span className="text-[9px] uppercase tracking-widest opacity-30 mb-1 italic">License_Fee</span>
            <span className="text-5xl font-light tracking-tighter">${item.price}</span>
          </div>
          <button className="group relative text-[10px] font-bold uppercase tracking-[0.6em] py-4 px-10 bg-white text-black hover:bg-blue-600 hover:text-white transition-all duration-500 overflow-hidden">
            <span className="relative z-10">Acquire_Asset</span>
          </button>
        </div>
      </div>

      {/* ⚙️ Methodology (Bottom Left) */}
      <div className="absolute bottom-20 left-10 max-w-[250px] hidden lg:block z-30 opacity-40">
        <span className="text-[9px] tracking-[0.4em] uppercase block mb-3 font-bold">0{index + 1} — Methodology</span>
        <p className="text-[10px] leading-relaxed uppercase tracking-[0.2em] font-light italic">{item.approach}</p>
      </div>
    </section>
  );
};

const LoadingSequence = () => (
  <div className="h-screen bg-[#050505] flex flex-col items-center justify-center gap-6">
    <div className="h-[1px] w-32 bg-white/10 relative overflow-hidden">
      <motion.div 
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-white"
      />
    </div>
    <span className="text-[8px] font-mono uppercase tracking-[1em] opacity-40 animate-pulse">Syncing_Nodes</span>
  </div>
);