"use client";

import { motion } from "framer-motion";
import BrowserFrame from "@/components/home/services/BrowserFrame";

export default function LandingIllustration() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <BrowserFrame>
      <div className="flex flex-col gap-1 w-full py-4">
        <motion.div
          className="w-full h-2 rounded-full border-2 border-neutral-400 dark:border-neutral-800 bg-transparent"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ 
            duration: 1,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="w-3/4 h-1.5 rounded-full border border-neutral-400 dark:border-neutral-700 mx-auto bg-transparent"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ 
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="w-16 h-4 rounded-lg border-2 border-neutral-500 dark:border-neutral-600 mx-auto mt-1 bg-transparent"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [1, 0.9, 1],
            scale: 1 
          }}
          whileHover={{ scale: 1.05, borderColor: "#4f46e5" }}
          whileTap={{ scale: 0.95 }}
          transition={{ 
            delay: 0.6,
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror"
          }}
        />
        
        <div className="grid grid-cols-3 gap-1 mt-2">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              className="h-8 rounded-lg border border-neutral-400 dark:border-neutral-700 bg-transparent"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ scale: 1.05, borderColor: "#4f46e5" }}
              whileTap={{ scale: 0.95 }}
              transition={{ 
                delay: item * 0.2,
                type: "spring",
                stiffness: 120,
                damping: 10
              }}
            >
              <motion.div
                className="w-full h-full border border-neutral-300 dark:border-neutral-700 rounded-[inherit] bg-transparent"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [1, 0.8, 1],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  delay: item * 0.3,
                  duration: 1.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror"
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}