"use client";

import { motion } from "framer-motion";
import MobileContainer from "@/components/MobileContainer";

export default function MobileIlustration() {
  return (
    <MobileContainer>
      <div className="flex flex-col items-center w-full px-1 pt-2">
        {/* Animated profile avatar */}
        <motion.div
          className="mb-1.5 border border-neutral-400 dark:border-neutral-700"
          initial={{
            borderRadius: "50%",
            width: "12px",
            height: "12px",
          }}
          animate={{
            borderRadius: ["50%", "50%", "4px", "4px", "4px", "50%"],
            width: ["12px", "12px", "16px", "16px", "16px", "12px"],
            height: ["12px", "12px", "16px", "16px", "16px", "12px"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            times: [0, 0.3, 0.5, 0.8, 1],
            ease: "easeInOut",
          }}
        />

        {/* Status bars */}
        <div className="w-full flex flex-col gap-1 mb-2">
          <div className="h-1 w-6 rounded-full bg-neutral-400 dark:bg-neutral-700" />
          <div className="flex gap-0.5">
            <div className="h-0.5 w-2 rounded-full bg-neutral-400 dark:bg-neutral-600" />
            <div className="h-0.5 w-4 rounded-full bg-neutral-300 dark:bg-neutral-700" />
          </div>
        </div>

        {/* List items */}
        <div className="w-full flex flex-col gap-0.5">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              className="w-full rounded border border-neutral-400 dark:border-neutral-700"
              initial={{ height: "8px" }}
              animate={{
                height: ["8px", "8px", "12px", "12px", "12px", "8px"],
              }}
              transition={{
                duration: 10,
                times: [0, 0.3, 0.5, 0.8, 1],
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </MobileContainer>
  );
}