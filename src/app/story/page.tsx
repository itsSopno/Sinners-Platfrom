"use client";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const StoryChapter = ({ num, title, desc }: { num: string; title: string; desc: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });

  return (
    <div ref={ref} className="h-screen flex flex-col justify-center px-6 md:px-24 relative overflow-hidden">
      {/* Background Floating Number */}
      <motion.span 
        style={{ opacity: isInView ? 0.05 : 0 }}
        className="absolute right-0 top-0 text-[40vw] font-black leading-none translate-y-[-10%]"
      >
        {num}
      </motion.span>

      <div className="z-10 relative">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          className="h-[2px] bg-[#d4a853] mb-8"
        />
        <motion.h2 
          animate={{ 
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 40,
            rotateX: isInView ? 0 : 45 
          }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="text-6xl md:text-[9rem] font-black uppercase leading-[0.8] tracking-tighter galgo-font mb-10"
        >
          {title}
        </motion.h2>
        <motion.p 
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 20 }}
          className="max-w-md text-zinc-500 text-lg md:text-xl font-light italic"
        >
          {desc}
        </motion.p>
      </div>
    </div>
  );
};

export default function SinnersV3() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  // Unique Parallax Effects
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const imgReveal = useTransform(scrollYProgress, [0.2, 0.5], ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]);

  return (
    <main ref={container} className="bg-[#050505] text-white relative selection:bg-[#d4a853]">
      
      {/* Progress Indicator - Elegant & Minimal */}
      <div className="fixed right-10 top-1/2 -translate-y-1/2 h-40 w-[1px] bg-zinc-800 z-50">
        <motion.div 
          style={{ scaleY: scrollYProgress }}
          className="w-full h-full bg-[#d4a853] origin-top shadow-[0_0_15px_#d4a853]"
        />
      </div>

      {/* HERO SECTION - Typography Focused */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div 
          style={{ y: textY }}
          className="text-center z-10"
        >
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "2em" }}
            animate={{ opacity: 1, letterSpacing: "1em" }}
            className="text-[10px] uppercase text-[#d4a853] mb-12 ml-4"
          >
            Digital / Anarchy
          </motion.p>
          <h1 className="text-5xl md:text-[18vw] font-black galgo-font leading-none tracking-[-0.08em]">
            SINN<span className="text-[#d4a853]">E</span>RS
          </h1>
        </motion.div>
        
        {/* Decorative Lines */}
        <div className="absolute inset-0 border-[20px] md:border-[40px] border-zinc-900/20 pointer-events-none" />
      </section>

      {/* STORY CONTENT */}
      <div className="relative z-10">
        <StoryChapter 
          num="I" 
          title="The Spark" 
          desc="We found order in the chaos. A refusal to accept the mediocre grid systems of the past. This is the new architecture."
        />
        
        {/* REVEAL SECTION - Vertical Slice Reveal */}
        <section className="h-[200vh] relative">
          <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
            <motion.div 
              style={{ clipPath: imgReveal, scale: bgScale }}
              className="w-full h-full relative"
            >
              <img 
                src="https://i.pinimg.com/1200x/1d/c2/52/1dc252c6072e0d922cc7bb055e744da9.jpg" 
                className="w-full h-full object-cover"
                alt="Sinners Aesthetic"
              />
              <div className="absolute inset-0 bg-black/40" />
              
              {/* Floating Headline over Image */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <motion.h2 
                  style={{ x: useTransform(scrollYProgress, [0.2, 0.6], ["-50%", "50%"]) }}
                  className="text-[15vw] whitespace-nowrap font-black uppercase text-white/10 galgo-font"
                >
                  NO COMPROMISE • NO MERCY
                </motion.h2>
              </div>
            </motion.div>
          </div>
        </section>

        <StoryChapter 
          num="II" 
          title="The Sin" 
          desc="If following the rules is virtue, then we are the ultimate sinners. We break the visual laws to create new ones."
        />

        <StoryChapter 
          num="III" 
          title="The Archive" 
          desc="Every project is a digital artifact. A testament to a time when design dared to be dangerous."
        />
      </div>

      {/* FOOTER CTA - High Contrast */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-white text-black py-20 px-6">
        <motion.div 
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          className="text-center"
        >
          <span className="font-mono text-xs uppercase tracking-widest mb-6 block">Ready to join?</span>
          <h2 className="text-[15vw] md:text-[12vw] font-black leading-none mb-12 galgo-font tracking-tighter">
            LET'S <br /> BURN.
          </h2>
          <button className="px-16 py-8 bg-black text-white text-2xl font-black uppercase hover:bg-[#d4a853] transition-colors duration-500 flex items-center gap-4">
            Start Project <span className="text-xl">→</span>
          </button>
        </motion.div>
      </section>

      {/* Luxury Texture - Subtle Grain */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.15] mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}