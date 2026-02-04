"use client";

import { motion } from "framer-motion";

export default function Privacy() {
  const sections = [
    {
      title: "Data Intelligence & Collection",
      content: "Studio Sinners collects information through direct interaction, including project briefs, administrative portal access, and cryptographic session logs. This includes identity data (name, email), technical data (IP addresses, browser fingerprints), and project-specific assets required for digital architecting."
    },
    {
      title: "Processing Framework",
      content: "We process your data under the legal basis of contractual necessity. This involves managing client accounts, facilitating high-speed content delivery networks (CDNs), and maintaining the integrity of our secure communication nodes. We do not use automated decision-making or profiling for marketing purposes."
    },
    {
      title: "Infrastructure & Security",
      content: "Our infrastructure is hosted on private, end-to-end encrypted servers. We implement industry-standard AES-256 encryption at rest and TLS 1.3 in transit. Access to client data is strictly limited to authorized personnel via multi-factor authentication (MFA) and hardware security keys."
    },
    {
      title: "Third-Party Governance",
      content: "Studio Sinners does not monetize user data. External data transfers are limited to essential service providers (e.g., cloud hosting, payment gateways) that comply with our rigorous Data Processing Agreements (DPA) and GDPR/CCPA standards."
    },
    {
      title: "Rights of the Subject",
      content: "Under global privacy regulations, you retain the right to access, rectify, or erase your personal data from our systems. You may also object to processing or request data portability. All requests are processed within 30 days via our legal department."
    }
  ];

  return (
    <section
      style={{ fontFamily: "var(--font-display)" }}
      className="bg-[var(--background)] text-white py-28 md:py-36 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-24 border-b border-[var(--border)] pb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-none">
            Privacy Protocol
          </h1>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <p className="text-[var(--muted)] uppercase tracking-[0.4em] text-xs font-medium">
              Document Ref: SS-PL-2026-V4
            </p>
            <div className="flex gap-8 text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] font-medium">
              <span>Effective: Jan 14, 2026</span>
              <span className="text-[var(--accent)]">Status: Certified</span>
            </div>
          </div>
        </header>

        {/* Content Section: Professional Layout */}
        <div className="grid lg:grid-cols-3 gap-16">
          
          {/* Sidebar Info */}
          <aside className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              <h2 className="text-xs uppercase tracking-[0.5em] text-white font-bold italic">
                Commitment
              </h2>
              <p className="text-[var(--muted-foreground)] text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                Studio Sinners is committed to the highest standards of data integrity. 
                This document outlines our legal obligations and your rights as a 
                client of our digital ecosystem.
              </p>
              <div className="p-6 border border-[var(--border)] bg-white/[0.02]">
                <h4 className="text-[10px] uppercase tracking-widest text-white mb-2 font-medium">Legal Contact</h4>
                <p className="text-[var(--muted-foreground)] text-[10px] font-mono">legal@studio-sinners.com</p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-2 space-y-20">
            {sections.map((section, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-gray-700 font-mono text-sm">0{index + 1}</span>
                  <div className="h-[1px] w-8 bg-white/20"></div>
                  <h3 className="text-xl font-bold uppercase tracking-[0.2em] group-hover:text-[var(--accent)] transition-colors duration-200">
                    {section.title}
                  </h3>
                </div>
                <p style={{ fontFamily: "var(--font-body)" }} className="text-[var(--muted-foreground)] leading-loose text-lg font-medium pl-12">
                  {section.content}
                </p>
              </motion.div>
            ))}

            {/* Final Consent Note */}
            <div className="mt-20 p-10 bg-white text-black">
              <h3 className="text-sm uppercase tracking-[0.4em] font-bold mb-4">Acceptance of Terms</h3>
              <p style={{ fontFamily: "var(--font-body)" }} className="text-sm leading-relaxed mb-6 font-medium">
                By continuing to access the Studio Siners portal, you acknowledge and agree 
                to the data processing practices described above. These terms are subject 
                to periodic updates to reflect global regulatory changes.
              </p>
              <button className="text-[10px] font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:opacity-50 transition-all">
                Download Full PDF Release
              </button>
            </div>
          </main>
        </div>

        {/* System Footer Signature */}
        <footer className="mt-32 border-t border-white/5 pt-12 text-center">
          <span className="text-[8px] tracking-[1.2em] text-[var(--muted)] uppercase font-medium">
            Studio_Sinners // MXXVI_Global_Privacy_Standard
          </span>
        </footer>
      </div>
    </section>
  );
}