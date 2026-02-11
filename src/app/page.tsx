"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import About from "./about-two/page";
import Privacy from "./privacy/page";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
  };

  const staggerContainer = {
    animate: {
      transition: { staggerChildren: 0.08 }
    }
  };

  return (
    <div
      style={{ fontFamily: "var(--font-display)" }}
      className="min-h-screen bg-[var(--background)] text-white font-sans"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 overflow-hidden noise-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[28vw] font-extrabold tracking-[var(--tracking-display)] opacity-[0.04] select-none">
            CREATIVE
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          <span className="text-[10px]  tracking-[0.7em] text-[var(--muted)] uppercase mb-6 block font-medium">
            Strategic Digital Laboratory
          </span>
          <h1 className="text-5xl md:text-[11vw] font-bold  galgo-font  leading-[0.88] tracking-[var(--tracking-display)] uppercase mb-10">
            Building <br />
            <span className="text-outline">Digital</span> <br />
            Legacies
          </h1>
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <p
              style={{ fontFamily: "var(--font-body)" }}
              className="text-sm text-[var(--muted-foreground)] max-w-sm leading-relaxed tracking-wide font-medium"
            >
              We engineer high-performance web experiences that bridge the gap between human emotion and digital precision.
            </p>
            <Link
              href="/items"
              className="group flex items-center gap-4 text-[11px] tracking-[0.35em] uppercase font-medium text-white hover:text-[var(--accent)] transition-colors duration-300"
            >
              View_Case_Studies
              <span className="w-12 h-px bg-current group-hover:w-20 transition-all duration-500" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-28 md:py-36 px-6 md:px-20 border-t border-[var(--border)]">
        <div className="grid md:grid-cols-12 gap-12">
          <motion.div {...fadeInUp} className="md:col-span-4">
            <span className="inline-block w-8 h-px bg-[var(--accent)] mb-6" />
            <h2 className="text-[10px] tracking-[0.5em] text-[var(--muted)] uppercase font-medium">Our_Methodology</h2>
          </motion.div>
          <motion.div {...fadeInUp} className="md:col-span-8">
            <h3 className="text-2xl md:text-4xl font-semibold leading-[1.15] tracking-[var(--tracking-tight)] uppercase">
              We don&apos;t just build websites. We architect{" "}
              <span style={{ fontFamily: "var(--font-body)" }} className="text-[var(--muted-foreground)] font-medium">
                scalable ecosystems
              </span>{" "}
              that empower brands to dominate their digital landscape.
            </h3>
          </motion.div>
        </div>
      </section>

      {/* Services: Minimalist Cards */}
      <section className="py-24 md:py-28 px-6 md:px-20 bg-white text-[#0a0a0a]">
        <motion.div {...fadeInUp} className="mb-16">
          <h2 className="text-[10px] tracking-[0.5em] uppercase font-semibold text-[var(--muted)]">Expertise_Systems</h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 border-t border-black/10"
        >
          {[
            { title: "Brand Identity", desc: "Crafting visual languages that resonate with authority." },
            { title: "Experience Design", desc: "User-centric interfaces optimized for conversion and emotion." },
            { title: "System Architecture", desc: "Robust, scalable tech stacks using Next.js and Cloud infrastructures." }
          ].map((service, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              className="p-10 border-b border-black/10 md:border-r md:last:border-r-0 hover:bg-[#fafafa] transition-colors duration-300 group"
            >
              <span className="text-[10px] font-semibold mb-8 block text-black/30">0{index + 1}</span>
              <h4 className="text-xl font-bold uppercase tracking-[var(--tracking-tight)] mb-3 group-hover:translate-x-1 transition-transform duration-300">
                {service.title}
              </h4>
              <p style={{ fontFamily: "var(--font-body)" }} className="text-sm text-[#525252] leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <section>
        <About />
      </section>
      <section>
        <Privacy />
      </section>

      {/* Stats */}
      <section className="py-28 md:py-36 px-6 md:px-20 bg-[var(--surface)] border-t border-[var(--border)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 text-center">
          {[
            { label: "Projects Delivered", value: "140+" },
            { label: "Performance Score", value: "99/100" },
            { label: "Global Partners", value: "12" },
            { label: "Retention Rate", value: "95%" }
          ].map((stat, i) => (
            <motion.div key={i} {...fadeInUp}>
              <div className="text-3xl md:text-5xl font-bold tracking-[var(--tracking-display)] mb-2 text-white">
                {stat.value}
              </div>
              <div className="text-[9px] tracking-[0.3em] text-[var(--muted)] uppercase font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="pt-32 pb-16 md:pb-20 px-6 md:px-20 border-t border-[var(--border)]">
        <div className="text-center mb-32">
          <motion.div {...fadeInUp}>
            <h2 className="text-[10vw] md:text-[12vw] galgo-font font-bold tracking-[var(--tracking-display)] uppercase leading-none mb-8">
              Let&apos;s_Sync
            </h2>
            <Link
              href="/contact"
              className="text-lg md:text-xl underline decoration-[var(--border-strong)] hover:decoration-[var(--accent)] underline-offset-8 transition-colors duration-300 text-white hover:text-[var(--accent)]"
            >
              hello@studio-sinners.com
            </Link>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="space-y-4">
            <p className="text-[10px] tracking-[0.5em] text-[var(--muted)] font-medium">ESTD 2026 // DHAKA</p>
            <div className="flex gap-8 text-[9px] tracking-widest text-[var(--muted-foreground)] uppercase font-medium">
              <a href="#" className="hover:text-[var(--accent)] transition-colors duration-200">Instagram</a>
              <a href="#" className="hover:text-[var(--accent)] transition-colors duration-200">LinkedIn</a>
              <a href="#" className="hover:text-[var(--accent)] transition-colors duration-200">Behance</a>
            </div>
          </div>
          <div className="text-[9px] text-[var(--muted)] tracking-[0.5em] font-medium">
            &copy; STUDIO_SINNERS_MXXVI
          </div>
        </div>
      </footer>
    </div>
  );
}
