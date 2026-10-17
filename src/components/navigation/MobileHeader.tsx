"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BsCloudMoon, BsCloudSun } from "react-icons/bs";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";
import { DEVTO_PROFILE } from "@/constants/links";

interface MobileHeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
}

export default function MobileHeader({
  isDarkMode,
  toggleDarkMode,
  isMobileOpen,
  setIsMobileOpen,
}: MobileHeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center w-full h-14 py-2 px-4 transition-all duration-500"
      style={{
        backgroundColor: scrolled
          ? isDarkMode
            ? "rgba(10, 10, 10, 0.85)"
            : "rgba(255, 255, 255, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "blur(0px)",
        WebkitBackdropFilter: scrolled ? "blur(8px)" : "blur(0px)",
        borderBottom: scrolled
          ? isDarkMode
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid rgba(0,0,0,0.08)"
          : "1px solid transparent",
        boxShadow: scrolled
          ? isDarkMode
            ? "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)"
            : "0 4px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)"
          : "none",
      }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="flex items-center gap-3">
        <motion.div
          className="relative rounded-full overflow-hidden border-2 flex-shrink-0 transition-all duration-300"
          style={{
            borderColor: scrolled
              ? isDarkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)"
              : isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
            width: "34px",
            height: "34px",
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.15 }}
        >
          <Image
            src="/profile/fajar-fauzian.jpg"
            alt="Fajar Fauzian - Frontend Developer"
            width={34}
            height={34}
            sizes="34px"
            className="object-cover w-full h-full"
          />
        </motion.div>

        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <Link href="/">
              <span
                className="font-poppins text-sm font-semibold transition-colors"
                style={{ color: isDarkMode ? "rgba(255,255,255,0.95)" : "rgba(10,10,10,0.95)" }}
              >
                Fajar Fauzian
              </span>
            </Link>
            <div>
              <RiVerifiedBadgeFill className="text-blue-500" size={12} />
            </div>
          </div>
          <a
            href={DEVTO_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="font-poppins text-[10px] transition-colors"
            style={{ color: isDarkMode ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.45)" }}
          >
            @zianscode
          </a>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <motion.button
          className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
          style={{
            background: scrolled
              ? isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"
              : isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
            border: isDarkMode
              ? "1px solid rgba(255,255,255,0.1)"
              : "1px solid rgba(0,0,0,0.08)",
          }}
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isDarkMode ? (
            <BsCloudMoon size={16} className="text-neutral-100" />
          ) : (
            <BsCloudSun size={16} className="text-yellow-500" />
          )}
        </motion.button>

        <motion.button
          className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
          style={{
            background: scrolled
              ? isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"
              : isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
            border: isDarkMode
              ? "1px solid rgba(255,255,255,0.1)"
              : "1px solid rgba(0,0,0,0.08)",
            color: isDarkMode ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.85)",
          }}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          animate={isMobileOpen ? "open" : "closed"}
          variants={{
            open: { rotate: 90 },
            closed: { rotate: 0 },
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          {isMobileOpen ? (
            <FiX className="h-5 w-5" />
          ) : (
            <FiMenu className="h-5 w-5" />
          )}
        </motion.button>
      </div>
    </motion.div>
  );
}