"use client";

import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export default function ItemsSimple(): React.JSX.Element {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log("Simple Items component mounted");
    
    const mockItems: Item[] = [
      {
        id: 1,
        name: "Premium Wireless Headphones",
        description: "High-quality wireless headphones with noise cancellation.",
        price: 299.99,
        image: "https://i.postimg.cc/wjqNjskP/react-dog-1-14-2026-12-08-17-PM.png",
        category: "Electronics"
      },
      {
        id: 2,
        name: "Ergonomic Office Chair",
        description: "Comfortable ergonomic chair for long working hours.",
        price: 449.99,
        image: "https://i.postimg.cc/wjqNjskP/react-dog-1-14-2026-12-08-17-PM.png",
        category: "Furniture"
      },
      {
        id: 3,
        name: "Smart Watch Pro",
        description: "Advanced smartwatch with health monitoring.",
        price: 399.99,
        image: "https://i.postimg.cc/wjqNjskP/react-dog-1-14-2026-12-08-17-PM.png",
        category: "Electronics"
      }
    ];

    setTimeout(() => {
      console.log("Setting items:", mockItems);
      setItems(mockItems);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center pt-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading items...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent mb-4">
            Our Products
          </h1>
          <p className="text-xl text-gray-400">
            {items.length} products available
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-purple-600 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                  {item.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    ${item.price}
                  </span>
                  <Link
                    href={`/items/${item.id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
