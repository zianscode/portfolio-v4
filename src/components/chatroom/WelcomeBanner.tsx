"use client";

import React from "react";
import { motion } from "framer-motion";

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
      className={`p-4 rounded-2xl border text-sm ${
        isDarkMode
          ? "bg-blue-900/20 border-blue-800/30 text-blue-200"
          : "bg-blue-50 border-blue-200 text-blue-800"
      }`}
    >
      <div className="flex items-start gap-3">
        <span className="text-lg flex-shrink-0">🙏</span>
        <div>
          <p className="font-semibold mb-0.5">Terima kasih sudah login!</p>
          <p
            className={`text-xs leading-relaxed ${
              isDarkMode ? "text-blue-300" : "text-blue-600"
            }`}
          >
            Silakan tinggalkan pesan, saran, atau kritik untuk website ini. Setiap
            masukan sangat berarti untuk pengembangan ke depannya. 😊
          </p>
        </div>
        <button
          onClick={onClose}
          className={`ml-auto p-2 sm:p-1.5 rounded-lg transition-colors ${
            isDarkMode
              ? "hover:bg-blue-800/30 text-blue-300"
              : "hover:bg-blue-100 text-blue-600"
          }`}
          aria-label="Close welcome"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export default WelcomeBanner;
