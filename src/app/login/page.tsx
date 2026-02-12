"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { signIn, getSession } from "next-auth/react";
import Link from "next/link";

export default function Login(): React.JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("AUTH_FAILURE: INVALID_CREDENTIALS");
      } else {
        const session = await getSession();
        if (session) {
          router.push("/items");
        }
      }
    } catch (error) {
      setError("SYSTEM_ERROR: UNKNOWN_EXCEPTION");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async (): Promise<void> => {
    try {
      await signIn('google', { callbackUrl: '/items' });
    } catch (error) {
      setError("EXTERNAL_AUTH_FAILED");
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-white selection:text-black font-sans flex items-center justify-center px-4">
      
      {/* Background Subtle Element */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold tracking-tighter opacity-5">
          SECURE
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-md w-full relative z-10"
      >
        <div className="border border-white/10 bg-black p-10 md:p-12 shadow-2xl">
          <div className="mb-12">
            <span className="text-[10px] tracking-[0.5em] text-gray-600 uppercase mb-2 block">
              System_Access_v2.6
            </span>
            <h1 className="text-4xl font-bold tracking-tighter uppercase leading-none">
              Client_Portal
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-1">
              <label className="text-[9px] tracking-[0.3em] text-gray-500 uppercase font-bold">
                Identity_Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-white transition-colors placeholder:text-gray-800 text-sm tracking-widest uppercase font-mono"
                placeholder="USER@DOMAIN.COM"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-[9px] tracking-[0.3em] text-gray-500 uppercase font-bold">
                Access_Key
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-white transition-colors placeholder:text-gray-800 text-sm tracking-widest"
                placeholder="••••••••"
                required
              />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-[10px] font-mono tracking-wider border-l border-red-500 pl-3 py-1"
              >
                // ERROR: {error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black py-4 font-bold text-xs tracking-[0.4em] uppercase hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
            >
              {loading ? "INITIALIZING..." : "ENTER_SYSTEM"}
            </button>
          </form>

          <div className="mt-10">
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/5"></div>
              </div>
              <div className="relative flex justify-center text-[8px] tracking-[0.4em]">
                <span className="px-4 bg-black text-gray-600 uppercase italic">Alternative_Gateway</span>
              </div>
            </div>

            <button
              onClick={handleGoogleSignIn}
              className="w-full border border-white/10 py-4 font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all"
            >
              Google_OIDC
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5">
            <div className="flex justify-between items-center text-[9px] tracking-widest text-gray-600">
              <span className="uppercase">No account?</span>
              <Link href="/contact" className="text-white hover:underline underline-offset-4 uppercase font-bold">
                Create_Identity
              </Link>
            </div>
          </div>
        </div>

        {/* Demo Credentials Box */}
        <div className="mt-6 p-6 border border-white/5 bg-white/[0.01]">
          <h3 className="text-[9px] tracking-[0.3em] text-gray-500 uppercase mb-3">Debug_Credentials:</h3>
          <p className="text-[10px] font-mono text-gray-400 select-all">EMAIL: admin@creative.com</p>
          <p className="text-[10px] font-mono text-gray-400 select-all">PASS: password123</p>
        </div>
      </motion.div>

      {/* Mini Footer */}
      <footer className="fixed bottom-8 w-full text-center opacity-20 pointer-events-none">
        <span className="text-[8px] tracking-[0.8em] uppercase">Studio_Siners // Secure_Node_MXXVI</span>
      </footer>
    </div>
  );
}
