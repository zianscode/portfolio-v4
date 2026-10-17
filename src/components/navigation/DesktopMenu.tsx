"use client";

import { useEffect } from "react";
import SidebarProfile from "@/components/navigation/SidebarProfile";
import SidebarFooter from "@/components/navigation/SidebarFooter";
import MenuItem from "@/components/navigation/MenuItem";
import { motion } from "framer-motion";
import Breakline from "@/components/ui/Breakline";
import { DesktopMenuProps } from "@/types/navigation";

export default function DesktopMenu({
  isDarkMode,
  toggleDarkMode,
  isSidebarOpen,
  setIsSidebarOpen,
  menuItems,
  pathname,
  prefetchNextPages,
}: DesktopMenuProps) {
  useEffect(() => {
    if (isSidebarOpen && prefetchNextPages) {
      prefetchNextPages();
    }
  }, [isSidebarOpen, prefetchNextPages]);

  return (
    <motion.div
      className={`fixed left-0 top-0 h-dvh flex flex-col border border-l-0 ${
        isDarkMode
          ? "bg-neutral-950/45 text-neutral-200 border-white/10"
          : "bg-white/45 text-neutral-800 border-neutral-200/50"
      } backdrop-blur-xl rounded-r-3xl overflow-hidden`}
      initial={false}
      animate={{
        width: isSidebarOpen ? "250px" : "68px",
      }}
      transition={{
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setIsSidebarOpen(true)}
      onMouseLeave={() => setIsSidebarOpen(false)}
    >
      <SidebarProfile
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        isSidebarOpen={isSidebarOpen}
      />


      <Breakline className="mx-3" />

      <motion.nav
        className="flex-grow px-3"
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.1,
        }}
      >
        <motion.div
          className="space-y-3"
          initial={false}
          animate={{
            opacity: 1,
            transition: {
              staggerChildren: 0.05,
              delayChildren: 0.1,
            },
          }}
        >
          {menuItems.map((item) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MenuItem
                item={item}
                isOpen={isSidebarOpen}
                isDarkMode={isDarkMode}
                pathname={pathname}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.nav>

      <div className="flex-shrink-0 px-3 pb-4">
        <SidebarFooter isSidebarOpen={isSidebarOpen} />
      </div>
    </motion.div>
  );
}