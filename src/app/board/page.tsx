// "use client";
//  import { motion, useScroll, useTransform, useInView } from "framer-motion";
//  import { useRef } from "react";

// const StoryChapter = ({ num, title, desc }: { num: string; title: string; desc: string }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });

//   return (
//    <div ref={ref} className="h-screen flex flex-col justify-center px-10 border-l border-zinc-900 ml-20 relative">
//      <motion.span 
//        animate={{ opacity: isInView ? 1 : 0.2, x: isInView ? 0 : -20 }}
//        className="font-mono text-red-600 mb-4 inline-block"
//      >
//        CHAPTER_{num}
//      </motion.span>
//      <motion.h2 
//        animate={{ opacity: isInView ? 1 : 0.1, skewX: isInView ? 0 : 10 }}
//        className="text-8xl font-black uppercase leading-none mb-8 tracking-tighter"
//      >
//        {title}
//       </motion.h2>
//      <motion.p 
//         animate={{ opacity: isInView ? 1 : 0 }}
//         className="max-w-xl text-zinc-400 text-xl font-light leading-relaxed"
//      >
//          {desc}
//       </motion.p>
//    </div>
//    );
// };

//  export default function SinnersStory() {
//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//      offset: ["start start", "end end"]
//    });

 
//   const textX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
//   const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]);
//   return (
//     <main ref={container} className="bg-black text-white relative">
  
//      <motion.div 
//        style={{ scaleY: scrollYProgress }}
//         className="fixed left-0 top-0 bottom-0 w-1 bg-[#d4a853] origin-top z-50"
//       />

     
//      <div className="fixed inset-0 pointer-events-none overflow-hidden flex items-center z-0">
//         <motion.h1 
//           style={{ x: textX }}
//           className="text-[60vw] md:text-[40vw] galgo-font font-black opacity-[0.03] whitespace-nowrap leading-none select-none "
//         >
//           PURE CHAOS • RADICAL DESIGN • NO COMPROMISE •
//         </motion.h1>
//       </div>

    
//      <section className="h-screen flex items-center justify-center relative">
//        <motion.div 
//          initial={{ scale: 0.8, opacity: 0 }}
//      whileInView={{ scale: 1, opacity: 1 }}
//       transition={{ duration: 1.5 }}
//          className="text-center z-10"
//        >
//          <p className="font-mono text-xs tracking-[1em] text-[#d4a853] mb-6 uppercase">Begin the descent</p>
//          <h1 className=" text-5xl md:text-9xl font-black  tracking-tighter uppercase galgo-font">Our <br /> Manifesto</h1>
//       </motion.div>     </section>

    
//      <div className="relative z-10">
//        <StoryChapter 
//          num="01" 
//          title="The Spark" 
//          desc="It started in the dark. A refusal to follow the grid. We saw the internet becoming boring, so we chose to make it dangerous."
//        />
                 
//       <section className="h-[200vh] relative">
//          <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
//            <motion.div 
//              style={{ scale: imageScale, clipPath: useTransform(scrollYProgress, [0.2, 0.5], ["inset(40%)", "inset(0%)"]) }}
//              className="w-full h-full"
//            >
//              <img 
//               src="https://i.pinimg.com/1200x/1d/c2/52/1dc252c6072e0d922cc7bb055e744da9.jpg" 
//                  className="w-full h-full object-cover grayscale brightness-50"
//                 className="w-full h-full object-cover"
//                 alt="Sinners Aesthetic"
//               />
//                <div className="absolute inset-0 flex items-center justify-center">
//                  <h2 className="font-3xl md:text-6xl font-black uppercase text-white galgo-font drop-shadow-2xl">Bury the Norms</h2>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         <StoryChapter 
//           num="02" 
//           title="The Sin" 
//           desc="Design is not about comfort. It's about tension. We break the rules not because we can, but because we must."
//        />

//        <StoryChapter 
//          num="03" 
//          title="The Archive" 
//           desc="Every pixel is a piece of history. A digital footprint of a revolution that started in 2026."
//         />
//       </div>

      
//       <section className="h-screen flex flex-col justify-center items-center bg-[#d4a853] text-black">
//        <motion.div 
//            whileInView={{ y: [20, 0], opacity: [0, 1] }}
//            className="text-center"
//         >
//          <h2 className="text-[12vw] font-black leading-none mb-10 tracking-tighter galgo-font ">REBORN.</h2>
//          <button className="px-12 py-5 bg-black text-white text-xl font-bold uppercase hover:scale-110 transition-transform">
//          Join the Studio_
//          </button>
//      </motion.div>
//      </section>

      
//      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.08] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
//     </main>
//   );
// }


"use client";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

// --- Story Section: The Reveal ---
const StoryChapter = ({ num, title, desc }: { num: string; title: string; desc: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });

  return (
    <div 
      ref={ref} 
      // Responsive padding & margin: ml-6 for mobile, ml-20 for desktop
      className="min-h-screen flex flex-col justify-center px-6 md:px-10 border-l border-zinc-900 ml-6 md:ml-20 relative py-20"
    >
      <motion.span 
        animate={{ opacity: isInView ? 1 : 0.2, x: isInView ? 0 : -20 }}
        className="font-mono text-red-600 mb-4 inline-block text-xs md:text-sm"
      >
        CHAPTER_{num}
      </motion.span>
      <motion.h2 
        animate={{ opacity: isInView ? 1 : 0.1, skewX: isInView ? 0 : 10 }}
        // Fluid typography: 4xl on mobile, 8xl on desktop
        className="text-4xl md:text-8xl font-black uppercase leading-[0.9] mb-8 tracking-tighter"
      >
        {title}
      </motion.h2>
      <motion.p 
        animate={{ opacity: isInView ? 1 : 0 }}
        className="max-w-xl text-zinc-400 text-lg md:text-xl font-light leading-relaxed"
      >
        {desc}
      </motion.p>
    </div>
  );
};

export default function SinnersStory() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  // Background Text Parallax
  const textX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  // Exact Image Scale Logic
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]);

  return (
    <main ref={container} className="bg-black text-white relative overflow-x-hidden">
      
      {/* Scroll Progress Bar (Vertical) */}
      <motion.div 
        style={{ scaleY: scrollYProgress }}
        className="fixed left-0 top-0 bottom-0 w-1 bg-[#d4a853] origin-top z-50 shadow-[0_0_10px_rgba(212,168,83,0.5)]"
      />

      {/* FIXED BACKGROUND NARRATIVE */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden flex items-center z-0">
        <motion.h1 
          style={{ x: textX }}
          // Mobile-e text size texture hisebe kaj korbe
          className="text-[60vw] md:text-[40vw] galgo-font font-black opacity-[0.03] whitespace-nowrap leading-none select-none"
        >
          PURE CHAOS • RADICAL DESIGN • NO COMPROMISE •
        </motion.h1>
      </div>

      {/* 01. INTRO: THE HOOK */}
      <section className="h-screen flex items-center justify-center relative px-6">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center z-10"
        >
          <p className="font-mono text-[10px] md:text-xs tracking-[1em] text-[#d4a853] mb-6 uppercase">Begin the descent</p>
          <h1 className="text-5xl md:text-9xl font-black tracking-tighter uppercase galgo-font leading-none">
            Our <br /> Manifesto
          </h1>
        </motion.div>
      </section>

      {/* 02. STORY LAYERS */}
      <div className="relative z-10">
        <StoryChapter 
          num="01" 
          title="The Spark" 
          desc="It started in the dark. A refusal to follow the grid. We saw the internet becoming boring, so we chose to make it dangerous."
        />
        
        {/* BIG IMAGE REVEAL (Sticky Section) */}
        <section className="h-[200vh] relative">
          <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
            <motion.div 
              // EXACT Animation Values Kept (0.2 to 0.5 range with 40% inset)
              style={{ 
                scale: imageScale, 
                clipPath: useTransform(scrollYProgress, [0.2, 0.5], ["inset(40%)", "inset(0%)"]) 
              }}
              className="w-full h-full relative"
            >
              <img 
                src="https://i.pinimg.com/1200x/1d/c2/52/1dc252c6072e0d922cc7bb055e744da9.jpg" 
                className="w-full h-full object-cover grayscale brightness-50"
                alt="Sinners Aesthetic"
              />
              <div className="absolute inset-0 flex items-center justify-center px-6">
                 <h2 className="text-4xl md:text-6xl font-black uppercase text-white galgo-font drop-shadow-2xl text-center">
                   Bury the Norms
                 </h2>
              </div>
            </motion.div>
          </div>
        </section>

        <StoryChapter 
          num="02" 
          title="The Sin" 
          desc="Design is not about comfort. It's about tension. We break the rules not because we can, but because we must."
        />

        <StoryChapter 
          num="03" 
          title="The Archive" 
          desc="Every pixel is a piece of history. A digital footprint of a revolution that started in 2026."
        />
      </div>

      {/* 03. THE OUTRO: CALL TO ACTION */}
      <section className="h-screen flex flex-col justify-center items-center bg-[#d4a853] text-black px-6 text-center">
        <motion.div 
           whileInView={{ y: [20, 0], opacity: [0, 1] }}
           className="w-full"
        >
          <h2 className="text-[18vw] md:text-[12vw] font-black leading-none mb-10 tracking-tighter galgo-font">
            REBORN.
          </h2>
          <button className="px-10 md:px-12 py-4 md:py-5 bg-black text-white text-lg md:text-xl font-bold uppercase hover:scale-105 active:scale-95 transition-all">
            Join the Studio_
          </button>
        </motion.div>
      </section>

      {/* Grainy Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.08] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </main>
  );
}