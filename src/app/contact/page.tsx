"use client";

import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactInfo {
  label: string;
  info: string;
}

export default function Contact(): React.JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setSubmitting(true); // সাবমিশন শুরু

  try {
    const res = await fetch("https://server-1-1-6g3a.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) throw new Error("Failed to send data");

    const data = await res.json();
    console.log('Message sent successfully!');
    
    setSuccess(true); 
    setFormData({ name: "", email: "", subject: "", message: "" }); // ফর্ম খালি করা
  } catch (err) {
    console.log(err);
    alert('Something went wrong');
  } finally {
    setSubmitting(false);  
  }
};
  

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
  };

  const contactInfo: ContactInfo[] = [
    { label: "Email", info: "hello@studio-sinners.com" },
    { label: "Direct_Line", info: "+880 1XXX XXXXXX" },
    { label: "Location", info: "Dhaka Node, Bangladesh" }
  ];

  return (
    <div
      style={{ fontFamily: "var(--font-display)" }}
      className="min-h-screen bg-[var(--background)] text-white font-sans"
    >
      <section className="relative pt-44 pb-20 px-6 md:px-20 border-b border-[var(--border)]">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <span className="text-[10px] tracking-[0.7em] text-[var(--muted)] uppercase mb-6 block font-medium">
            Connection_Initialization
          </span>
          <h1 className="text-5xl md:text-[10vw] galgo-font ont-bold leading-[0.88] tracking-tight uppercase mb-10">
            Let&apos;s <br />
            <span className="text-[var(--accent)]">Collaborate</span>
          </h1>
        </motion.div>
      </section>

      <div className="grid lg:grid-cols-12 gap-0">
        <section className="lg:col-span-7 py-24 px-6 md:px-20 bg-white text-[#0a0a0a]">
          <motion.div {...fadeInUp} className="max-w-xl">
            <h2 className="text-[10px] tracking-[0.5em] text-[#737373] uppercase font-semibold mb-16">Inquiry_Form</h2>
            
            {success ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="py-20 text-center border-2 border-black/10 rounded-3xl"
              >
                <div className="text-4xl mb-4">✔</div>
                <h3 className="text-2xl font-bold uppercase tracking-tighter">Submission_Successful</h3>
                <p className="text-gray-500 text-sm mt-2">Our systems will sync with you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="group relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="FULL_NAME"
                      className="w-full bg-transparent border-b border-black/20 py-4 focus:outline-none focus:border-black transition-colors placeholder:text-gray-300 text-sm font-bold uppercase tracking-widest"
                      required
                    />
                  </div>
                  <div className="group relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="EMAIL_ADDRESS"
                      className="w-full bg-transparent border-b border-black/20 py-4 focus:outline-none focus:border-black transition-colors placeholder:text-gray-300 text-sm font-bold uppercase tracking-widest"
                      required
                    />
                  </div>
                </div>

                <div className="group relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="PROJECT_TYPE"
                    className="w-full bg-transparent border-b border-black/20 py-4 focus:outline-none focus:border-black transition-colors placeholder:text-gray-300 text-sm font-bold uppercase tracking-widest"
                    required
                  />
                </div>

                <div className="group relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="MESSAGE_OR_BRIEF"
                    className="w-full bg-transparent border-b border-black/20 py-4 focus:outline-none focus:border-black transition-colors placeholder:text-gray-300 text-sm font-bold uppercase tracking-widest resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="group flex flex-col items-start gap-2 pt-4"
                >
                  <span className="text-xs tracking-[0.4em] font-bold uppercase">
                    {submitting ? "SENDING_DATA..." : "EXECUTE_SUBMISSION"}
                  </span>
                  <div className="w-24 h-[1px] bg-black group-hover:w-48 transition-all duration-700"></div>
                </button>
              </form>
            )}
          </motion.div>
        </section>

        <section className="lg:col-span-5 py-24 px-6 md:px-20 bg-[var(--surface)] border-l border-[var(--border)] flex flex-col justify-between">
          <motion.div {...fadeInUp} className="space-y-20">
            <div>
              <h3 className="text-[10px] tracking-[0.5em] text-[var(--muted)] uppercase mb-8 font-medium">Access_Points</h3>
              <div className="space-y-12">
                {contactInfo.map((item, i) => (
                  <div key={i} className="group cursor-pointer">
                    <span className="text-[9px] text-[#525252] uppercase tracking-widest block mb-2 font-medium">{item.label}</span>
                    <span className="text-xl font-bold tracking-tight uppercase group-hover:text-[var(--accent)] transition-colors duration-200">
                      {item.info}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 border border-white/5 rounded-2xl bg-white/[0.01]">
              <h4 className="text-[10px] tracking-[0.3em] text-gray-500 uppercase mb-4">Availability_Status</h4>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                <span className="text-xs font-mono text-gray-400">OPEN_FOR_NEW_PROJECTS</span>
              </div>
            </div>
          </motion.div>

          <div className="mt-20 lg:mt-0 pt-10 border-t border-[var(--border)] text-[var(--muted)]">
             <span className="text-[8px] tracking-[0.5em] uppercase font-medium">Studio_Sinners_MXXVI</span>
          </div>
        </section>

      </div>

      <footer className="py-10 px-6 md:px-20 flex justify-between items-center text-[var(--muted)] text-[8px] tracking-[0.5em] uppercase border-t border-[var(--border)] bg-white text-[#0a0a0a] font-medium">
        <span>ESTD // 2026</span>
        <span>Studio_Sinners // Contact_Gateway</span>
      </footer>
    </div>
  );
}
