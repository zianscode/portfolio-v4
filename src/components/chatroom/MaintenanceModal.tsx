"use client";

import React from "react";
import { useRouter } from "next/navigation";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-16 w-16 ${isDarkMode ? "text-yellow-400" : "text-yellow-500"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
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
