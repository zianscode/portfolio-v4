"use client";

import { motion } from "framer-motion";
import { useDarkMode } from "@/context/DarkModeContext";
import {
  MdOutlineSpaceDashboard,
  MdBarChart,
} from "react-icons/md";

const DashboardPage = () => {
  const { isDarkMode } = useDarkMode();
  
  return (
    <div
      className={`flex min-h-screen ${
        isDarkMode ? "text-white" : "text-black"
      }`}
    >

      <main className="flex-1 flex justify-center pt-10 md:pt-16 lg:pt-14 px-4 md:px-6 lg:px-8 ml-0 md:ml-6">
        <div className="w-full max-w-[700px] xl:max-w-[830px] transition-all duration-500 ease-in-out">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-start mb-8"
          >
            <div>
              <div className="flex items-center space-x-3">
                <MdOutlineSpaceDashboard
                  className={`text-3xl ${
                    isDarkMode ? "text-stone-200" : "text-gray-800"
                  }`}
                />
                <h1
                  className={`text-3xl font-bold ${
                    isDarkMode ? "text-stone-200" : "text-gray-800"
                  }`}
                >
                  Dashboard
                </h1>
              </div>
              <p
                className={`mt-2 ${
                  isDarkMode ? "text-stone-400" : "text-gray-600"
                }`}
              >
                This is my personal dashboard, built with Next.js API routes
                deployed as serverless functions.
              </p>
            </div>
          </motion.div>

          {/* Contributions Card */}
          <div
            className={`mb-6 p-6 rounded-lg ${
              isDarkMode ? "bg-neutral-800" : "bg-stone-100"
            }`}
          >
            <div className="flex items-center space-x-3 mb-4">
              <MdBarChart
                className={`text-2xl ${
                  isDarkMode ? "text-stone-200" : "text-gray-800"
                }`}
              />
              <h2
                className={`text-xl font-semibold ${
                  isDarkMode ? "text-stone-200" : "text-gray-800"
                }`}
              >
                Contributions
              </h2>
            </div>
            <p
              className={`mb-4 ${
                isDarkMode ? "text-stone-400" : "text-gray-600"
              }`}
            >
              My contributions from last year on github
            </p>
            <div className="flex justify-between items-center">
              <div>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-stone-400" : "text-gray-600"
                  }`}
                >
                  Total
                </p>
                <p
                  className={`text-lg font-bold ${
                    isDarkMode ? "text-stone-200" : "text-gray-800"
                  }`}
                >
                  432
                </p>
              </div>
              <div>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-stone-400" : "text-gray-600"
                  }`}
                >
                  Best Day
                </p>
                <p
                  className={`text-lg font-bold ${
                    isDarkMode ? "text-stone-200" : "text-gray-800"
                  }`}
                >
                  29
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;