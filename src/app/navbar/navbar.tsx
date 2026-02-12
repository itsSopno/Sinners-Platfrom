"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { FiLogOut, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  const navLinks = [
    { name: "WORKS", href: "/items" },
    { name: "STUDIO", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "CONTACT", href: "/contact" },
  ];

  useEffect(() => {
    // Initial entrance animation
    gsap.fromTo(navRef.current, 
      { y: -20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, ease: "expo.out", delay: 0.5 }
    );
  }, []);

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/' });
  };

  return (
    <>
      <header
        ref={navRef}
        style={{ fontFamily: "var(--font-display)" }}
        className="fixed top-0 left-0 w-full z-[100] px-6 py-8 md:px-12 flex justify-between items-center mix-blend-difference text-white"
      >
        <Link href="/" className="group flex flex-col">
          <span className="text-sm font-semibold tracking-[0.4em] leading-none uppercase">Studio</span>
          <span className="text-sm font-semibold tracking-[0.4em] leading-none uppercase text-white/60 group-hover:text-[var(--accent)] transition-colors duration-300">
            Sinners
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative text-[10px] tracking-[0.35em] uppercase font-medium transition-all duration-300 hover:text-[var(--accent)] ${
                pathname === link.href ? "text-[var(--accent)]" : ""
              }`}
            >
              {link.name}
              {pathname === link.href && (
                <span className="absolute -bottom-1 left-0 w-full h-px bg-[var(--accent)]" />
              )}
            </Link>
          ))}

         {session ? (
  <div className="flex items-center gap-6 border-l border-white/20 pl-8 ml-2">
    

    {session.user?.role === 'admin' && (
      <Link
        href="/add-item"
        className="text-[9px] tracking-[0.3em] text-white/60 hover:text-[var(--accent)] uppercase transition-colors duration-200"
      >
        Add_Work
      </Link>
    )}

    <button
      onClick={handleLogout}
      className="text-white/60 hover:text-white transition-colors duration-200"
      aria-label="Sign out"
    >
      <FiLogOut className="w-4 h-4" />
    </button>
  </div>
) : (
  <Link
    href="/login"
    className="text-[10px] tracking-[0.35em] border border-white/25 px-5 py-2.5 rounded-full hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-[var(--accent-foreground)] transition-all duration-300 uppercase font-medium"
  >
    Access_System
  </Link>
)}
        </nav>

        <button
          className="md:hidden text-white p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </header>

      <div
        className={`fixed inset-0 bg-[var(--background)] z-[90] flex flex-col justify-center items-center transition-transform duration-500 ease-[var(--ease-out-expo)] ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
        style={{ fontFamily: "var(--font-display)" }}
      >
        <div className="flex flex-col space-y-8 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl md:text-4xl font-bold tracking-tight uppercase text-white hover:text-[var(--accent)] transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
          {!session && (
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="text-xs tracking-[0.8em] text-white/50 hover:text-[var(--accent)] uppercase pt-10 transition-colors"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
