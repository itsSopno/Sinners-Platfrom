"use client";

import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useApp } from "../../contexts/AppContext";

interface Tab {
  id: string;
  name: string;
  icon: string;
}

interface WishlistItem {
  id: string;
  name: string;
  price: number;
}

export default function Profile(): React.JSX.Element {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { cartItemsCount, wishlist } = useApp();
  const [activeTab, setActiveTab] = useState<string>('overview');

  useEffect(() => {
    if (status === 'loading') return;
    if (!session) {
      router.push('/login');
    }
  }, [session, status, router]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const }
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading profile...</p>
        </motion.div>
      </div>
    );
  }

  if (!session) {
    return <></>;
  }

  const tabs: Tab[] = [
    { id: 'overview', name: 'Overview', icon: '👤' },
    { id: 'orders', name: 'Orders', icon: '🛍️' },
    { id: 'wishlist', name: 'Wishlist', icon: '❤️' },
    { id: 'settings', name: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent mb-4">
            My Profile
          </h1>
          <p className="text-xl text-gray-400">
            Manage your account and preferences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div {...fadeInUp} className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              {/* User Info */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {session.user?.name?.[0] || session.user?.email?.[0] || 'U'}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {session.user?.name || 'User'}
                </h3>
                <p className="text-gray-400 text-sm">{session.user?.email}</p>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                        activeTab === tab.id
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-300 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span className="text-lg">{tab.icon}</span>
                      <span>{tab.name}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div {...fadeInUp} className="lg:col-span-3">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Account Overview</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-2xl">🛍️</span>
                        <div>
                          <h3 className="text-lg font-semibold text-white">Cart Items</h3>
                          <p className="text-gray-400 text-sm">Items in your cart</p>
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-blue-400">{cartItemsCount}</div>
                    </div>

                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-2xl">❤️</span>
                        <div>
                          <h3 className="text-lg font-semibold text-white">Wishlist</h3>
                          <p className="text-gray-400 text-sm">Saved items</p>
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-red-400">{wishlist.length}</div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-white/10">
                      <span className="text-xl">📧</span>
                      <div>
                        <div className="text-white font-medium">Email</div>
                        <div className="text-gray-400">{session.user?.email}</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-white/10">
                      <span className="text-xl">📅</span>
                      <div>
                        <div className="text-white font-medium">Member Since</div>
                        <div className="text-gray-400">January 2024</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Order History</h2>
                  <div className="text-center py-12">
                    <span className="text-6xl block mb-4">🛍️</span>
                    <h3 className="text-xl font-semibold text-white mb-2">No Orders Yet</h3>
                    <p className="text-gray-400 mb-6">You haven't placed any orders yet.</p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                      Start Shopping
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'wishlist' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">My Wishlist</h2>
                  {wishlist.length === 0 ? (
                    <div className="text-center py-12">
                      <span className="text-6xl block mb-4">❤️</span>
                      <h3 className="text-xl font-semibold text-white mb-2">No Items in Wishlist</h3>
                      <p className="text-gray-400 mb-6">Save items you love for later.</p>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                        Browse Products
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {wishlist.slice(0, 3).map((item: WishlistItem) => (
                        <div key={item.id} className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-white/10">
                          <div className="w-16 h-16 bg-gray-600 rounded-lg"></div>
                          <div className="flex-1">
                            <h4 className="text-white font-medium">{item.name}</h4>
                            <p className="text-gray-400 text-sm">${item.price}</p>
                          </div>
                        </div>
                      ))}
                      {wishlist.length > 3 && (
                        <p className="text-gray-400 text-center">
                          And {wishlist.length - 3} more items...
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Account Settings</h2>
                  <div className="space-y-6">
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <h3 className="text-white font-medium mb-2">Email Notifications</h3>
                      <p className="text-gray-400 text-sm mb-4">Receive updates about your orders and new products</p>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="rounded" defaultChecked />
                        <span className="text-gray-300">Enable email notifications</span>
                      </label>
                    </div>

                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <h3 className="text-white font-medium mb-2">Privacy Settings</h3>
                      <p className="text-gray-400 text-sm mb-4">Control your privacy preferences</p>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="rounded" />
                        <span className="text-gray-300">Make profile public</span>
                      </label>
                    </div>

                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                      Delete Account
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
