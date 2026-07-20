"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsCloudMoon, BsCloudSun } from "react-icons/bs";
import { TabletMenuProps } from "@/types/menu";

export default function TabletMenu({
  isDarkMode,
  toggleDarkMode,
  menuItems,
  pathname,
}: TabletMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-4 inset-x-0 mx-auto z-50 w-[92vw] max-w-[760px] px-3.5 sm:px-5 py-2 rounded-full border flex items-center justify-between shadow-xl backdrop-blur-xl font-poppins transition-all duration-300 ${
        isDarkMode
          ? "bg-neutral-950/80 text-neutral-200 border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
          : "bg-white/80 text-neutral-800 border-neutral-200/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
      }`}
    >
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
        <span className="font-semibold text-xs tracking-tight hidden lg:inline-block">
          Fajar Fauzian
        </span>
      </Link>

      <nav className="flex-1 min-w-0 flex items-center justify-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar py-0.5 px-2">
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

      <motion.button
        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors shadow-sm ${
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
    </motion.div>
  );
}
