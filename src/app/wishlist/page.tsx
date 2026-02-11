"use client";

import React from "react";
import { motion } from "framer-motion";
import { useApp } from "../../contexts/AppContext";
import Link from "next/link";
import Image from "next/image";

interface WishlistItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
  category?: string;
}

export default function Wishlist(): React.JSX.Element {
  const { wishlist, removeFromWishlist, addToCart } = useApp();

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent mb-4">
            My Wishlist
          </h1>
          <p className="text-xl text-gray-400">
            {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved
          </p>
        </motion.div>

        {wishlist.length === 0 ? (
          <motion.div {...fadeInUp} className="text-center py-20">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20 max-w-md mx-auto">
              <span className="text-6xl block mb-6">❤️</span>
              <h2 className="text-2xl font-bold text-white mb-4">Your wishlist is empty</h2>
              <p className="text-gray-400 mb-8">
                Start adding items you love to your wishlist!
              </p>
              <Link
                href="/items"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                Browse Products
              </Link>
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlist.map((item: WishlistItem) => (
              <motion.div
                key={item.id}
                {...fadeInUp}
                className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-purple-500/50 transition-all duration-300"
              >
                {item.image && (
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                    {item.category && (
                      <div className="absolute top-4 right-4 bg-purple-600 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                        {item.category}
                      </div>
                    )}
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.name}
                  </h3>
                  {item.description && (
                    <p className="text-gray-400 text-sm mb-4">
                      {item.description}
                    </p>
                  )}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => addToCart({ ...item, quantity: 1 })}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
