// components/navbar/navbar.tsx
"use client";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <h1>My App</h1>
      <div>
        {status === "loading" ? (
          <span>Checking session...</span>
        ) : session ? (
          <div className="flex gap-4 items-center">
            <span>{session.user?.name}</span>
            {/* Backend theke asha role check */}
            <span className="bg-blue-500 px-2 rounded text-xs">
              {session.user?.role}
            </span>
          </div>
        ) : (
          <button>Login</button>
        )}
      </div>
    </nav>
  );
}

 <section className="h-[200vh] relative">
         <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
           <motion.div 
             style={{ scale: imageScale, clipPath: useTransform(scrollYProgress, [0.2, 0.5], ["inset(40%)", "inset(0%)"]) }}
             className="w-full h-full"
           >
             <img 
              src="https://i.pinimg.com/1200x/1d/c2/52/1dc252c6072e0d922cc7bb055e744da9.jpg" 
                 className="w-full h-full object-cover grayscale brightness-50"
                className="w-full h-full object-cover"
                alt="Sinners Aesthetic"
              />
               <div className="absolute inset-0 flex items-center justify-center">
                 <h2 className="font-3xl md:text-6xl font-black uppercase text-white galgo-font drop-shadow-2xl">Bury the Norms</h2>
              </div>
            </motion.div>
          </div>
        </section>