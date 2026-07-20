"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { BsCloudMoon, BsCloudSun } from "react-icons/bs";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import ProfileHeader from "@/components/sidebar/ProfileHeader";
import Link from "next/link";
import { DEVTO_PROFILE } from "@/common/constant";

interface ProfileProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isSidebarOpen: boolean;
}

export default function ProfileItem({
  isDarkMode,
  toggleDarkMode,
  isSidebarOpen,
}: ProfileProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSidebarOpen) {
      timer = setTimeout(() => {
        setShowText(true);
      }, 300);
    } else {
      setShowText(false);
    }
    return () => clearTimeout(timer);
  }, [isSidebarOpen]);


  return (
    <div
      className="flex flex-col items-center justify-start relative h-[200px] w-full pt-2" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ProfileHeader
        isSidebarOpen={isSidebarOpen}
        isHovered={isHovered}
        showText={showText}
      />

      <motion.div
        className="relative mt-10 rounded-full overflow-hidden border-2 border-neutral-700/50 z-10 shadow-lg" 
        initial={false}
        animate={{
          width: isSidebarOpen ? "90px" : "38px",
          height: isSidebarOpen ? "90px" : "38px",
          borderWidth: isSidebarOpen ? "3px" : "2px",
        }}
        whileHover={{
          scale: 1.05,
          borderColor: isDarkMode
            ? "#525252"
            : "#d4d4d4",
        }}
        transition={{
          duration: 0.35,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <Image
          src="/image/Fajar_Fauzian.jpg"
          alt="ziancode"
          fill
          sizes="90px"
          className="object-cover"
        />

      </motion.div>

      <motion.button
        className={`
          ${isSidebarOpen ? "absolute top-2 right-2" : "mt-2"} 
          w-8 h-8 m-2 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white
          rounded-xl flex items-center justify-center z-10 transition-colors duration-200
          hover:bg-neutral-100 dark:hover:bg-neutral-700 shadow-md
        `}
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isDarkMode ? (
          <BsCloudMoon size={16} className="text-neutral-100" />
        ) : (
          <BsCloudSun size={16} className="text-yellow-500" />
        )}
      </motion.button>

      <AnimatePresence mode="wait">
        {isSidebarOpen && (
          <motion.div
            className="text-center mt-2 z-10 w-full flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -10,
              transition: {
                duration: 0.2,
                ease: "easeInOut",
              },
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="font-medium text-base text-neutral-800 dark:text-white flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative inline-flex items-center">
                <motion.span
                  initial={{ y: 0 }}
                  animate={{ y: isDarkMode ? 0 : 0 }}
                  className="text-neutral-900 dark:text-neutral-200 font-semibold"
                >
                  <Link href="/">
                    <h2 className="font-poppins flex-grow whitespace-nowrap text-sm font-semibold"> 
                      Fajar Fauzian
                    </h2>
                  </Link>
                </motion.span>
                <motion.div
                  className="absolute left-full ml-1.5 flex items-center"
                  initial={{ scale: 0.8, opacity: 0.8 }}
                  animate={{
                    scale: [0.8, 1, 0.8],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <RiVerifiedBadgeFill className="text-blue-500" size={14} /> 
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="text-neutral-600 dark:text-white text-xs mt-1 font-medium w-full flex justify-center" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Link
                href={DEVTO_PROFILE}
                target="_blank"
                className="font-poppins text-xs text-neutral-600 transition-all duration-300 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-400" 
              >
                @zianscode
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}