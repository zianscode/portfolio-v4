"use client";

import React from "react";
import Link from "next/link";
import { FiTool } from "react-icons/fi";

interface MaintenanceModalProps {
  isDarkMode: boolean;
}

const MaintenanceModal: React.FC<MaintenanceModalProps> = ({ isDarkMode }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 font-poppins ${
        isDarkMode ? "bg-neutral-950" : "bg-neutral-100"
      }`}
    >
      <div
        className={`w-full max-w-sm p-8 rounded-3xl border text-center ${
          isDarkMode ? "bg-neutral-900 border-white/10 text-white" : "bg-white border-neutral-200 text-neutral-900"
        }`}
      >
        <div
          className={`mx-auto mb-5 w-14 h-14 rounded-full flex items-center justify-center ${
            isDarkMode ? "bg-white/[0.06] text-neutral-200" : "bg-neutral-100 text-neutral-700"
          }`}
        >
          <FiTool className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-bold">Under maintenance</h2>
        <p className={`mt-2 text-sm leading-relaxed ${isDarkMode ? "text-neutral-400" : "text-neutral-600"}`}>
          The chat room is being worked on right now. Please check back later.
        </p>
        <Link
          href="/"
          className={`mt-6 inline-flex items-center justify-center w-full py-2.5 px-5 rounded-full text-sm font-semibold transition-colors ${
            isDarkMode
              ? "bg-neutral-700 text-white hover:bg-neutral-600"
              : "bg-neutral-200 text-neutral-900 hover:bg-neutral-300"
          }`}
        >
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default MaintenanceModal;
