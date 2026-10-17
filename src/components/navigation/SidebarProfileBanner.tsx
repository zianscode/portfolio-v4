"use client";

import type { CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCircle } from "react-icons/fa";

interface SidebarProfileBannerProps {
  isSidebarOpen: boolean;
  isHovered: boolean;
  showText: boolean;
}

// Notch cut into the backdrop's top-left corner so the "Hire Me" badge sits inside it.
// Badge is 86x28 (pill radius 14) with a 6px gap, so the notch is 92x34 and its inner
// corner radius is 14 + 6 = 20 to stay concentric with the badge.
const NOTCH_W = 92;
const NOTCH_H = 34;
const INNER_R = 20;
const OUTER_R = 12;

const solid = "linear-gradient(#000, #000)";
const convexCorner = `radial-gradient(circle at 100% 100%, #000 ${OUTER_R}px, transparent ${OUTER_R + 0.5}px)`;
const concaveCorner = `radial-gradient(circle at 0 0, transparent ${INNER_R}px, #000 ${INNER_R + 0.5}px)`;

const notchMask = {
  image: [solid, solid, solid, solid, convexCorner, convexCorner, concaveCorner].join(", "),
  position: [
    `${NOTCH_W}px ${OUTER_R}px`,
    `${OUTER_R}px ${NOTCH_H}px`,
    `${NOTCH_W + OUTER_R}px 0`,
    `0 ${NOTCH_H + OUTER_R}px`,
    `${NOTCH_W}px 0`,
    `0 ${NOTCH_H}px`,
    `${NOTCH_W - INNER_R}px ${NOTCH_H - INNER_R}px`,
  ].join(", "),
  size: [
    `calc(100% - ${NOTCH_W}px) calc(100% - ${OUTER_R}px)`,
    `calc(100% - ${OUTER_R}px) calc(100% - ${NOTCH_H}px)`,
    `calc(100% - ${NOTCH_W + OUTER_R}px) 100%`,
    `100% calc(100% - ${NOTCH_H + OUTER_R}px)`,
    `${OUTER_R}px ${OUTER_R}px`,
    `${OUTER_R}px ${OUTER_R}px`,
    `${INNER_R}px ${INNER_R}px`,
  ].join(", "),
};

const backdropStyle: CSSProperties = {
  margin: "12px",
  maskImage: notchMask.image,
  maskPosition: notchMask.position,
  maskSize: notchMask.size,
  maskRepeat: "no-repeat",
  WebkitMaskImage: notchMask.image,
  WebkitMaskPosition: notchMask.position,
  WebkitMaskSize: notchMask.size,
  WebkitMaskRepeat: "no-repeat",
};

export default function SidebarProfileBanner({
  isSidebarOpen,
  isHovered,
  showText,
}: SidebarProfileBannerProps) {
  return (
    <>
      {isSidebarOpen && (
        <>
          <motion.div
            className="absolute inset-x-0 top-0 h-24 bg-cover bg-center z-0 rounded-2xl overflow-hidden"
            style={{ ...backdropStyle, backgroundImage: "url('/image/backdrop.webp')" }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          <motion.div
            className="absolute inset-x-0 top-0 h-24 bg-black/50 z-0 rounded-2xl"
            style={backdropStyle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </>
      )}
      <AnimatePresence>
        {(isHovered || isSidebarOpen) && (
          <motion.div
            className={`absolute top-3 left-3 z-10 flex items-center justify-center gap-1.5 rounded-full transition-colors duration-300 ${
              showText
                ? "w-[86px] h-7 border border-neutral-200 bg-white/60 text-neutral-800 hover:bg-neutral-100 dark:border-white/15 dark:bg-white/[0.04] dark:text-neutral-100 dark:hover:bg-white/10"
                : "m-1 text-white"
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <FaCircle className="text-green-500" size={8} />
              <motion.div
                className="absolute top-0 left-0 w-full h-full rounded-full bg-green-500/40"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 0, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
            </motion.div>

            <AnimatePresence>
              {showText && (
                <motion.span
                  className="text-xs font-medium whitespace-nowrap"
                  initial={{ opacity: 0, width: 0, x: -10 }}
                  animate={{ opacity: 1, width: "auto", x: 0 }}
                  exit={{ opacity: 0, width: 0, x: -10 }}
                  transition={{
                    opacity: { duration: 0.3 },
                    width: { duration: 0.3 },
                    x: { duration: 0.3 },
                  }}
                >
                  Hire Me
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
