import React from "react";
import { motion } from "framer-motion";

export default function MobileLandingContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
     <div className="group relative">
      {/* 3D Mobile Container - Even More Compact */}
      <div className="h-36 w-20 overflow-hidden rounded-xl border-[3px] border-neutral-800 dark:border-neutral-900 transition-all duration-300 ease-out transform-gpu group-hover:scale-105 group-hover:-translate-y-1 group-hover:rotate-x-12 group-hover:rotate-y-6 group-hover:shadow-lg group-hover:shadow-blue-500/20 perspective-1000">
        
        {/* Screen area with hover effect */}
        <div className="relative h-full w-full overflow-hidden bg-neutral-100 dark:bg-neutral-950 transition-colors duration-300 group-hover:bg-neutral-50 dark:group-hover:bg-neutral-900">
          {/* Mini Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-1 bg-neutral-800 dark:bg-neutral-900 rounded-b-sm z-10"></div>
          
          {/* Status bar */}
          <div className="absolute top-0.5 left-0 right-0 flex justify-between items-center px-1 z-10">
            <div className="text-[6px] font-medium text-neutral-800 dark:text-neutral-200">9:41</div>
            <div className="flex gap-0.5">
              {[1, 2].map((item) => (
                <div key={item} className="w-0.5 h-0.5 rounded-full border border-neutral-300 dark:border-neutral-700"></div>
              ))}
            </div>
          </div>
          
          {/* Content area */}
          <div className="relative h-full w-full pt-3 pb-4 flex justify-center items-center">
            {children}
          </div>
          
          {/* Home indicator */}
          <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full bg-neutral-800 dark:bg-neutral-700"></div>
        </div>
      </div>
      {/* Enhanced blue glow shadow */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md transform translate-y-2 scale-95 -z-10"></div>
    </div>
  );
}

function MobileIllustration() {
  return (
    <div className="flex flex-col items-center w-full px-1">
      <motion.div
        className="mb-2 border border-neutral-400 dark:border-neutral-600 rounded-full"
        initial={{ width: 12, height: 12 }}
        animate={{
          width: [12, 12, 16, 16, 12],
          height: [12, 12, 16, 16, 12],
          borderRadius: ["50%", "50%", "4px", "4px", "50%"],
          borderColor: ["#9ca3af", "#4f46e5", "#4f46e5", "#9ca3af"]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="w-full flex flex-col gap-1.5 mb-2">
        <motion.div 
          className="h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"
          initial={{ width: "60%" }}
          animate={{ width: ["60%", "80%", "60%"] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="flex gap-1">
          <div className="h-1 w-3 rounded-full bg-neutral-300 dark:bg-neutral-600"></div>
          <motion.div 
            className="h-1 rounded-full bg-neutral-200 dark:bg-neutral-700"
            animate={{ width: ["30%", "50%", "30%"] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>

      <div className="w-full flex flex-col gap-1">
        {[1, 2, 3].map((item) => (
          <motion.div
            key={item}
            className="w-full rounded border border-neutral-300 dark:border-neutral-700 bg-transparent"
            initial={{ height: 8 }}
            animate={{
              height: [8, 12, 12, 8],
              borderColor: ["#d1d5db", "#4f46e5", "#d1d5db"]
            }}
            transition={{
              duration: 6,
              delay: item * 0.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function MobileDemo() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-50 dark:bg-neutral-900 p-4">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
          Ultra-Compact Mobile UI
        </h1>
        <div className="flex gap-6">
          <MobileLandingContainer>
            <MobileIllustration />
          </MobileLandingContainer>
          <MobileLandingContainer>
            <div className="flex flex-col items-center gap-1">
              <div className="w-4 h-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"></div>
              <div className="text-[6px] text-neutral-600 dark:text-neutral-400">App</div>
              <div className="flex gap-0.5 mt-1">
                <div className="w-2 h-0.5 bg-neutral-300 dark:bg-neutral-600 rounded"></div>
                <div className="w-3 h-0.5 bg-neutral-400 dark:bg-neutral-500 rounded"></div>
              </div>
            </div>
          </MobileLandingContainer>
          <MobileLandingContainer>
            <div className="flex flex-col items-center w-full px-1">
              <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded mb-1"></div>
              <div className="w-full h-0.5 bg-neutral-300 dark:bg-neutral-600 rounded mb-1"></div>
              <div className="w-4/5 h-0.5 bg-neutral-200 dark:bg-neutral-700 rounded mb-1"></div>
              <div className="text-[6px] text-neutral-600 dark:text-neutral-400">UI</div>
            </div>
          </MobileLandingContainer>
        </div>
      </div>
    </div>
  );
}