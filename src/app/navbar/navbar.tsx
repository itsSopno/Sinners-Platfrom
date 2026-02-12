// "use client";

// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import { gsap } from "gsap";
// import { usePathname } from "next/navigation";
// import { useSession, signOut } from "next-auth/react";
// import { FiLogOut, FiMenu, FiX } from "react-icons/fi";

// const Navbar = () => {
//   const navRef = useRef<HTMLElement>(null);
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();
//   const { data: session } = useSession();

//   const navLinks = [
//     { name: "WORKS", href: "/items" },
//     { name: "STUDIO", href: "/about" },
//     { name: "SERVICES", href: "/services" },
//     { name: "CONTACT", href: "/contact" },
//   ];

//   useEffect(() => {
//     // Initial entrance animation
//     gsap.fromTo(navRef.current, 
//       { y: -20, opacity: 0 }, 
//       { y: 0, opacity: 1, duration: 1.2, ease: "expo.out", delay: 0.5 }
//     );
//   }, []);

//   const handleLogout = async () => {
//     await signOut({ callbackUrl: '/' });
//   };

//   return (
//     <>
//       <header
//         ref={navRef}
//         style={{ fontFamily: "var(--font-display)" }}
//         className="fixed top-0 left-0 w-full z-[100] px-6 py-8 md:px-12 flex justify-between items-center mix-blend-difference text-white"
//       >
//         <Link href="/" className="group flex flex-col">
//           <span className="text-sm font-semibold tracking-[0.4em] leading-none uppercase">Studio</span>
//           <span className="text-sm font-semibold tracking-[0.4em] leading-none uppercase text-white/60 group-hover:text-[var(--accent)] transition-colors duration-300">
//             Sinners
//           </span>
//         </Link>

//         <nav className="hidden md:flex items-center space-x-10">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className={`relative text-[10px] tracking-[0.35em] uppercase font-medium transition-all duration-300 hover:text-[var(--accent)] ${
//                 pathname === link.href ? "text-[var(--accent)]" : ""
//               }`}
//             >
//               {link.name}
//               {pathname === link.href && (
//                 <span className="absolute -bottom-1 left-0 w-full h-px bg-[var(--accent)]" />
//               )}
//             </Link>
//           ))}

//          {session ? (
//   <div className="flex items-center gap-6 border-l border-white/20 pl-8 ml-2">
    

//     {session.user?.role === 'admin' && (
//       <Link
//         href="/Admin"
//         className="text-[9px] tracking-[0.3em] text-white/60 hover:text-[var(--accent)] uppercase transition-colors duration-200"
//       >
//         Add_Work
//       </Link>
//     )}
// <ul>
//       <li>
//         <details>
//           <summary className="font-medium">Platform</summary>
//           <ul className="p-2 bg-base-100 w-48 z-10 border border-zinc-800 shadow-xl">
//             <li>
//               <Link href="/submenu-1">Submenu 1</Link>
//             </li>
//             <li>
//               <Link href="/submenu-2">Submenu 2</Link>
//             </li>
//           </ul>
//         </details>
//       </li>
//       </ul>
//     <button
//       onClick={handleLogout}
//       className="text-white/60 hover:text-white transition-colors duration-200"
//       aria-label="Sign out"
//     >
//       <FiLogOut className="w-4 h-4" />
//     </button>
//   </div>
// ) : (
//   <Link
//     href="/login"
//     className="text-[10px] tracking-[0.35em] border border-white/25 px-5 py-2.5 rounded-full hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-[var(--accent-foreground)] transition-all duration-300 uppercase font-medium"
//   >
//     Access_System
//   </Link>
// )}
//         </nav>

//         <button
//           className="md:hidden text-white p-2 -mr-2"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label={isOpen ? "Close menu" : "Open menu"}
//         >
//           {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//         </button>
//       </header>

//       <div
//         className={`fixed inset-0 bg-[var(--background)] z-[90] flex flex-col justify-center items-center transition-transform duration-500 ease-[var(--ease-out-expo)] ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
//         style={{ fontFamily: "var(--font-display)" }}
//       >
//         <div className="flex flex-col space-y-8 text-center">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               onClick={() => setIsOpen(false)}
//               className="text-3xl md:text-4xl font-bold tracking-tight uppercase text-white hover:text-[var(--accent)] transition-colors duration-200"
//             >
//               {link.name}
//             </Link>
//           ))}
//           {!session && (
//             <Link
//               href="/login"
//               onClick={() => setIsOpen(false)}
//               className="text-xs tracking-[0.8em] text-white/50 hover:text-[var(--accent)] uppercase pt-10 transition-colors"
//             >
//               Login
//             </Link>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

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
    { name: "WORKS", href: "/items" },
    { name: "STUDIO", href: "/about" },
    { name: "SERVICES", href: "/services" },
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
                      <Link href="/submenu-1" className="block text-[8px] tracking-[0.3em] text-white/40 hover:text-[var(--accent)] p-2 transition-colors uppercase">Network_Grid</Link>
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