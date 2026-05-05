"use client";

import { motion } from "framer-motion";
import React from "react";

export default function HeaderDivider() {
  return (
    <div className="relative w-full h-px my-8 overflow-hidden">
      {/* Main Line with Gradient */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-neon to-transparent opacity-50"
      />
      
      {/* Glowing Pulse Dot */}
      <motion.div
        animate={{
          left: ["0%", "100%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 -translate-y-1/2 w-20 h-[2px] bg-gradient-to-r from-transparent via-brand-neon to-transparent shadow-[0_0_10px_#39FF14]"
      />
    </div>
  );
}
