"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaExclamationTriangle } from "react-icons/fa";

interface MaintenanceModalProps {
  isDarkMode: boolean;
}

const MaintenanceModal: React.FC<MaintenanceModalProps> = ({ isDarkMode }) => {
  const router = useRouter();

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md ${
        isDarkMode ? "bg-black" : "bg-gray-100"
      }`}
    >
      <div
        className={`p-8 rounded-xl max-w-md text-center ${
          isDarkMode ? "bg-neutral-900 border border-neutral-700 text-white" : "bg-white shadow-xl text-black"
        }`}
      >
        <div className="flex justify-center mb-4">
          <FaExclamationTriangle
            className={`h-16 w-16 ${isDarkMode ? "text-yellow-400" : "text-yellow-500"}`}
          />
        </div>
        <h2 className="text-2xl font-bold mb-2">Under Maintenance</h2>
        <p className="mb-4">
          This chatroom is currently undergoing maintenance. Please check back later.
        </p>
        <p className="text-sm text-gray-500 mb-6">We&apos;ll be back soon!</p>
        <button
          onClick={() => router.push("/")}
          className={`px-6 py-2 rounded-lg transition-colors ${
            isDarkMode
              ? "bg-neutral-800 hover:bg-neutral-700 text-white"
              : "bg-gray-200 hover:bg-gray-300 text-black"
          }`}
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default MaintenanceModal;
