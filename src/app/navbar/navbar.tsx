
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { FiLogOut, FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  const navLinks = [
    // {name :"STORY", href:"/board"},
     {name : "STORY", href :"/story"},
    { name: "WORKS", href: "/items" },
    { name: "STUDIO", href: "/about" },
    // { name: "SERVICES", href: "/services" },
    { name: "CONTACT", href: "/contact" },
  ];

  useEffect(() => {
    gsap.fromTo(navRef.current, 
      { y: -100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.5, ease: "power4.out", delay: 0.2 }
    );
  }, []);

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/' });
  };

  const closeDropdown = (e: React.MouseEvent) => {
    const details = e.currentTarget.closest("details");
    if (details) details.removeAttribute("open");
  };

  return (
    <>
      <header
        ref={navRef}
        className="fixed top-0 left-0 w-full z-[100] px-6 py-6 md:px-16 flex justify-between items-center mix-blend-difference text-white"
      >
        {/* Logo Section */}
        <Link href="/" className="relative z-[110] group overflow-hidden">
          <div className="flex flex-col overflow-hidden">
            <span className="text-[11px] font-bold tracking-[0.5em] leading-none uppercase translate-y-0 group-hover:-translate-y-full transition-transform duration-500">
              Studio Sinners
            </span>
            <span className="absolute top-0 left-0 text-[11px] font-bold tracking-[0.5em] leading-none uppercase text-[var(--accent)] translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              Sinners®
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`group relative text-[9px] tracking-[0.4em] uppercase font-bold transition-all duration-500 ${
                pathname === link.href ? "text-[var(--accent)]" : "text-white/50 hover:text-white"
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 w-0 h-[1px] bg-[var(--accent)] transition-all duration-500 group-hover:w-full ${pathname === link.href ? 'w-full' : ''}`} />
            </Link>
          ))}

          {session ? (
            <div className="flex items-center gap-8 border-l border-white/10 pl-10">
              {/* Conditional Content: Admin Link OR Platform Dropdown */}
              {session.user?.role === 'admin' ? (
                <Link
                  href="/Admin"
                  className="text-[9px] tracking-[0.4em] text-white bg-white/5 px-4 py-2 hover:bg-[var(--accent)] hover:text-black transition-all duration-500 rounded-sm border border-white/10"
                >
                  [ADD_WORK]
                </Link>
              ) : (
                <details className="group relative list-none">
                  <summary className="flex items-center gap-2 text-[9px] tracking-[0.4em] text-white/50 hover:text-white cursor-pointer list-none list-inside uppercase font-bold transition-all duration-300">
                    Platform <FiChevronDown className="group-open:rotate-180 transition-transform" />
                  </summary>
                  <ul className="absolute top-full right-0 mt-6 p-4 bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/5 w-56 space-y-2 shadow-2xl animate-in fade-in slide-in-from-top-2">
                    <li onClick={closeDropdown}>
                      <Link href="/Dashboard" className="block text-[8px] tracking-[0.3em] text-white/40 hover:text-[var(--accent)] p-2 transition-colors uppercase">Network_Grid</Link>
                    </li>
                    <li onClick={closeDropdown}>
                      <Link href="/submenu-2" className="block text-[8px] tracking-[0.3em] text-white/40 hover:text-[var(--accent)] p-2 transition-colors uppercase">System_Logs</Link>
                    </li>
                  </ul>
                </details>
              )}

              <button
                onClick={handleLogout}
                className="group p-2 text-white/30 hover:text-red-500 transition-colors duration-300"
                aria-label="Sign out"
              >
                <FiLogOut className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="text-[9px] tracking-[0.4em] px-8 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-500 uppercase font-black"
            >
              Access_System
            </Link>
          )}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-[110] text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </header>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#050505] z-[100] flex flex-col justify-center px-10 transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${isOpen ? "clip-path-open" : "clip-path-closed"}`}
      >
        <div className="flex flex-col space-y-6">
          <p className="text-[10px] tracking-[0.5em] text-white/20 mb-4 font-mono">/ NAVIGATION</p>
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="group flex items-baseline gap-4 text-5xl md:text-7xl font-black tracking-tighter uppercase text-white hover:italic transition-all duration-300"
            >
              <span className="text-xs font-mono text-white/20 tracking-normal italic">0{i+1}</span>
              {link.name}
            </Link>
          ))}
          
          <div className="pt-12 border-t border-white/5 flex flex-col gap-4">
             {!session && (
                <Link href="/login" onClick={() => setIsOpen(false)} className="text-sm tracking-[0.3em] text-[var(--accent)] uppercase font-bold">
                  Identify_Self
                </Link>
             )}
             <p className="text-[9px] tracking-[0.2em] text-white/20 uppercase">© 2026 Studio Sinners . All Rights Reserved.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .clip-path-closed {
          clip-path: circle(0% at 95% 5%);
        }
        .clip-path-open {
          clip-path: circle(150% at 95% 5%);
        }
        summary::-webkit-details-marker {
          display: none;
        }
      `}</style>
    </>
  );
};

export default Navbar;