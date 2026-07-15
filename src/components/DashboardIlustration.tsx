import React from "react";
import { motion } from "framer-motion";
import DashboardContainer from "@/components/LandingContainer";

export default function DashboardIllustration() {
  return (
    <DashboardContainer>
      <motion.div
        className="flex w-full h-[112px] bg-transparent overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Sidebar */}
        <div className="w-1/4 border-r dark:border-neutral-700 border-neutral-300 p-1.5 flex flex-col gap-1.5">
          {/* Profile Circle */}
          <div className="w-3 h-3 rounded-full bg-neutral-350 dark:bg-neutral-600 mb-1 flex-shrink-0" />
          {/* Nav items */}
          <div className="h-1 w-full rounded-full bg-neutral-400 dark:bg-neutral-500 flex-shrink-0" />
          <div className="h-1 w-2/3 rounded-full bg-neutral-300 dark:bg-neutral-600 flex-shrink-0" />
          <div className="h-1 w-4/5 rounded-full bg-neutral-300 dark:bg-neutral-600 flex-shrink-0" />
        </div>

        {/* Right Content Area */}
        <div className="flex-1 p-2 flex flex-col gap-1.5 overflow-hidden">
          {/* Top Header Row */}
          <div className="flex justify-between items-center w-full flex-shrink-0">
            <div className="h-2 w-12 rounded-full bg-neutral-450 dark:bg-neutral-600" />
            <div className="h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
          </div>

          {/* Dashboard Grid (2 Widgets) */}
          <div className="grid grid-cols-2 gap-1.5 flex-1 min-h-0">
            {/* Widget 1: Bar Chart */}
            <div className="border dark:border-neutral-700 border-neutral-300 rounded p-1 flex items-end justify-center gap-1 h-full min-h-0">
              <motion.div 
                className="w-1.5 bg-neutral-400 dark:bg-neutral-600 rounded-t-sm" 
                animate={{ height: ["40%", "80%", "40%"] }} 
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="w-1.5 bg-neutral-350 dark:bg-neutral-500 rounded-t-sm" 
                animate={{ height: ["70%", "30%", "70%"] }} 
                transition={{ duration: 2, delay: 0.3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="w-1.5 bg-neutral-400 dark:bg-neutral-600 rounded-t-sm" 
                animate={{ height: ["20%", "60%", "20%"] }} 
                transition={{ duration: 2, delay: 0.6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {/* Widget 2: Stats / Lines */}
            <div className="border dark:border-neutral-700 border-neutral-300 rounded p-1 flex flex-col gap-1.5 h-full justify-center min-h-0">
              <div className="flex gap-1 items-center flex-shrink-0">
                <div className="w-1 h-1 rounded-full bg-neutral-450 dark:bg-neutral-500" />
                <div className="h-1 w-full rounded-full bg-neutral-350 dark:bg-neutral-600" />
              </div>
              <div className="flex gap-1 items-center flex-shrink-0">
                <div className="w-1 h-1 rounded-full bg-neutral-450 dark:bg-neutral-500" />
                <div className="h-1 w-2/3 rounded-full bg-neutral-300 dark:bg-neutral-700" />
              </div>
              <div className="flex gap-1 items-center flex-shrink-0">
                <div className="w-1 h-1 rounded-full bg-neutral-450 dark:bg-neutral-500" />
                <div className="h-1 w-3/4 rounded-full bg-neutral-300 dark:bg-neutral-700" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </DashboardContainer>
  );
}