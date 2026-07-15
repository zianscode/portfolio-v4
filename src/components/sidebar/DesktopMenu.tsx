"use client";

import { useEffect } from "react";
import ProfileItem from "@/components/sidebar/ProfileItem";
import FooterItem from "@/components/sidebar/FooterItem";
import MenuItem from "@/components/sidebar/MenuItem";
import { motion } from "framer-motion";
import Breakline from "@/components/Breakline";
import { DesktopMenuProps } from "@/types/menu";

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
      className={`fixed left-4 top-4 h-[calc(100dvh-32px)] flex flex-col border ${
        isDarkMode
          ? "bg-neutral-950/45 text-neutral-200 border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-white/45 text-neutral-800 border-neutral-200/50 shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
      } backdrop-blur-xl rounded-2xl overflow-hidden`}
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
      <ProfileItem
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        isSidebarOpen={isSidebarOpen}
      />


      <Breakline className="mx-3" />

      {/* Menu Section */}
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

      {/* Footer Section */}
      <div className="flex-shrink-0 px-3 pb-4">
        <FooterItem isSidebarOpen={isSidebarOpen} />
      </div>
    </motion.div>
  );
}