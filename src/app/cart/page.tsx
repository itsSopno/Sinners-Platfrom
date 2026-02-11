"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useApp } from "../../contexts/AppContext";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, clearCart, cartTotal } = useApp();

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center">
            <div className="text-8xl mb-6">🛒</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Looks like you haven&apos;t added anything to your cart yet.
            </p>
            <Link
              href="/items"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105"
            >
              Start Shopping
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent mb-4">
            Shopping Cart
          </h1>
          <p className="text-xl text-gray-400">
            {cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="space-y-4"
            >
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeInUp}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Product Image */}
                    <div className="relative w-full md:w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                        <div className="text-purple-400 font-semibold mt-2">Category</div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-3">
                          <span className="text-gray-300 font-medium">Quantity:</span>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                            >
                              <span>−</span>
                            </button>
                            <span className="w-12 text-center text-white font-semibold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                            >
                              <span>+</span>
                            </button>
                          </div>
                        </div>

                        {/* Price and Remove */}
                        <div className="flex items-center justify-between sm:justify-end space-x-4">
                          <div className="text-right">
                            <div className="text-lg font-bold text-white">
                              ${(item.price * item.quantity).toFixed(2)}
                            </div>
                            <div className="text-sm text-gray-400">
                              ${item.price} each
                            </div>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                          >
                            <span>🗑️</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Clear Cart Button */}
            <motion.div {...fadeInUp} className="mt-6">
              <button
                onClick={clearCart}
                className="text-red-400 hover:text-red-300 font-semibold transition-colors"
              >
                Clear All Items
              </button>
            </motion.div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div {...fadeInUp} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 sticky top-32">
              <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Tax</span>
                  <span>${(cartTotal * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t border-white/20 pt-4">
                  <div className="flex justify-between text-xl font-bold text-white">
                    <span>Total</span>
                    <span>${(cartTotal * 1.08).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>🛍️</span>
                  <span>Proceed to Checkout</span>
                </button>
                <Link
                  href="/items"
                  className="w-full border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white py-4 rounded-xl font-semibold transition-all text-center block"
                >
                  Continue Shopping
                </Link>
              </div>

              {/* Security Info */}
              <div className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                <div className="flex items-center space-x-2 text-green-300">
                  <div className="text-lg">🔒</div>
                  <div>
                    <div className="font-semibold text-sm">Secure Checkout</div>
                    <div className="text-xs">SSL encrypted payment</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
