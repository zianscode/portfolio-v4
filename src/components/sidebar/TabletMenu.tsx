"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BsCloudMoon, BsCloudSun } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";
import { TabletMenuProps } from "@/types/menu";

export default function TabletMenu({
  isDarkMode,
  toggleDarkMode,
  menuItems,
  pathname,
}: TabletMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close dropdown menu automatically on route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-4 inset-x-0 mx-auto z-50 w-[calc(100%-2rem)] max-w-[700px] xl:max-w-[830px] font-poppins"
    >
      {/* Main Floating Pill Navbar */}
      <div
        className={`px-3.5 sm:px-5 py-2 rounded-full border flex items-center justify-between shadow-xl backdrop-blur-xl transition-all duration-300 ${
          isDarkMode
            ? "bg-neutral-950/80 text-neutral-200 border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            : "bg-white/80 text-neutral-800 border-neutral-200/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
        }`}
      >
        {/* Left: Avatar & Profile Name */}
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-neutral-700/50 flex-shrink-0 transition-transform group-hover:scale-105">
            <Image
              src="/image/Fajar_Fauzian.jpg"
              alt="Fajar Fauzian"
              fill
              sizes="32px"
              className="object-cover"
            />
          </div>
          <span className="font-semibold text-xs tracking-tight hidden sm:inline-block">
            Fajar Fauzian
          </span>
        </Link>

        {/* Center: Full Horizontal Nav Links (Visible on XL screens >= 1280px) */}
        <nav className="hidden xl:flex items-center justify-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar py-0.5 px-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                  isActive
                    ? isDarkMode
                      ? "bg-white/15 text-white font-semibold shadow-sm border border-white/10"
                      : "bg-neutral-900 text-white font-semibold shadow-sm"
                    : isDarkMode
                      ? "text-neutral-400 hover:text-white hover:bg-white/5"
                      : "text-neutral-600 hover:text-black hover:bg-black/5"
                }`}
              >
                <Icon className="text-sm flex-shrink-0" />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Dark Mode Toggle & Hamburger Button */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Dark Mode Toggle */}
          <motion.button
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-sm ${
              isDarkMode
                ? "bg-neutral-800 text-neutral-100 border border-neutral-700 hover:bg-neutral-700"
                : "bg-neutral-100 text-neutral-800 border border-neutral-200 hover:bg-neutral-200"
            }`}
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isDarkMode ? (
              <BsCloudMoon size={15} className="text-neutral-100" />
            ) : (
              <BsCloudSun size={15} className="text-yellow-500" />
            )}
          </motion.button>

          {/* Hamburger Menu Toggle Button (Visible on screens < 1280px) */}
          <motion.button
            className={`xl:hidden w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-sm ${
              isDarkMode
                ? "bg-neutral-800 text-neutral-100 border border-neutral-700 hover:bg-neutral-700"
                : "bg-neutral-100 text-neutral-800 border border-neutral-200 hover:bg-neutral-200"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <FiX size={16} /> : <FiMenu size={16} />}
          </motion.button>
        </div>
      </div>

      {/* Glassmorphism Dropdown Menu (For Screens < 1280px) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`xl:hidden absolute top-[calc(100%+8px)] left-0 right-0 p-3 rounded-2xl border shadow-2xl backdrop-blur-2xl transition-all duration-300 z-50 ${
              isDarkMode
                ? "bg-neutral-950/90 text-neutral-200 border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.7)]"
                : "bg-white/90 text-neutral-800 border-neutral-200/80 shadow-[0_16px_40px_rgba(0,0,0,0.12)]"
            }`}
          >
            <div className="grid grid-cols-2 gap-1.5">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                      isActive
                        ? isDarkMode
                          ? "bg-white/15 text-white font-semibold border border-white/10 shadow-sm"
                          : "bg-neutral-900 text-white font-semibold shadow-sm"
                        : isDarkMode
                          ? "text-neutral-400 hover:text-white hover:bg-white/5"
                          : "text-neutral-600 hover:text-black hover:bg-black/5"
                    }`}
                  >
                    <Icon className="text-sm flex-shrink-0" />
                    <span>{item.title}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
