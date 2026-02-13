"use client"
import { motion } from "framer-motion";
const Footer = () =>{
    return(
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
    )
}
export default Footer