"use client";
import { useEffect } from "react";
import MenuItem from "@/components/navigation/MenuItem";
import { motion, AnimatePresence } from "framer-motion";
import { MobileMenuProps } from "@/types/navigation";

const overlayVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.15,
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.15,
    },
  },
};

export default function MobileMenu({
  isDarkMode,
  isMobileOpen,
  setIsMobileOpen,
  menuItems,
  pathname,
  prefetchNextPages,
}: MobileMenuProps) {
  useEffect(() => {
    if (isMobileOpen && prefetchNextPages) {
      prefetchNextPages();
    }
  }, [isMobileOpen, prefetchNextPages]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileOpen, setIsMobileOpen]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <AnimatePresence>
      {isMobileOpen && (
        <motion.div
          key="mobile-menu"
          className={`fixed left-0 right-0 top-0 w-full h-full flex flex-col ${
            isDarkMode
              ? "bg-neutral-950/95 text-stone-200"
              : "bg-neutral-100/95 text-stone-800"
          } backdrop-blur-sm z-40 overflow-y-auto`}
          variants={overlayVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          role="navigation"
          aria-label="Mobile Navigation"
        >
          <div className="flex-grow mt-20 px-5 overflow-y-auto">
            <div className="space-y-4">
              {menuItems.map((item) => (
                <motion.div
                  key={item.href}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`rounded-full ${
                    isDarkMode
                      ? "hover:bg-neutral-800/80 active:bg-neutral-800"
                      : "hover:bg-neutral-200/80 active:bg-neutral-200"
                  } transition-colors duration-200`}
                  onClick={() => setIsMobileOpen(false)}
                >
                  <MenuItem
                    item={item}
                    isOpen={true}
                    isDarkMode={isDarkMode}
                    pathname={pathname}
                    setIsMobileOpen={setIsMobileOpen}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}