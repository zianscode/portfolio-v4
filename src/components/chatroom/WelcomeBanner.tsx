"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";

interface WelcomeBannerProps {
  isDarkMode: boolean;
  onClose: () => void;
}

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ isDarkMode, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`flex items-start gap-3 pl-5 pr-3 py-4 rounded-3xl border ${
        isDarkMode
          ? "bg-neutral-900/50 border-white/10"
          : "bg-white border-neutral-200"
      }`}
    >
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-semibold ${isDarkMode ? "text-white" : "text-neutral-900"}`}>
          Terima kasih sudah login
        </p>
        <p
          className={`mt-0.5 text-[13px] leading-relaxed ${
            isDarkMode ? "text-neutral-400" : "text-neutral-600"
          }`}
        >
          Silakan tinggalkan pesan, saran, atau kritik untuk website ini. Setiap
          masukan sangat berarti untuk pengembangan ke depannya.
        </p>
      </div>
      <button
        onClick={onClose}
        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
          isDarkMode
            ? "text-neutral-400 hover:bg-white/10 hover:text-white"
            : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900"
        }`}
        aria-label="Close welcome message"
      >
        <FiX className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

export default WelcomeBanner;
