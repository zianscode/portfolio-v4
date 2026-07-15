"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MenuItemType } from "@/types/menu";

interface MenuItemProps {
  item: MenuItemType;
  isMobile?: boolean;
  isOpen: boolean;
  isDarkMode: boolean;
  pathname: string;
  setIsMobileOpen?: (isOpen: boolean) => void;
}

export default function MenuItem({ 
  item, 
  isMobile = false, 
  isOpen, 
  isDarkMode, 
  pathname,
  setIsMobileOpen 
}: MenuItemProps) {
  const { title, href, icon: Icon, isExternal } = item;
  const isActive = pathname === href || pathname.startsWith(`${href}/`);
  const isCurrentActive = isActive;

  // Force text to always show in mobile view
  const shouldShowText = isMobile || isOpen;

  return (
    <Link 
      href={href} 
      className="text-decoration-none w-full block"
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      <motion.div
        className={`flex items-center py-2 px-3 rounded-xl transition-colors duration-200 cursor-pointer relative overflow-hidden border border-transparent ${
          isCurrentActive
            ? isDarkMode
              ? "bg-white/10 text-white border-white/5 shadow-sm"
              : "bg-black/5 text-neutral-950 border-black/5 shadow-sm"
            : isDarkMode
            ? "hover:bg-white/5 hover:text-white text-neutral-400"
            : "hover:bg-black/5 hover:text-neutral-900 text-neutral-600"
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => isMobile && setIsMobileOpen && setIsMobileOpen(false)}
      >
        {/* Icon */}
        <div
          className={`${
            isCurrentActive
              ? isDarkMode ? "text-white" : "text-neutral-950"
              : isDarkMode ? "text-neutral-400" : "text-neutral-500"
          } flex-shrink-0 transition-colors duration-200`}
        >
          <Icon className="h-5 w-5" />
        </div>

        {/* Menu Name */}
        <motion.span
          className={`${
            isCurrentActive
              ? isDarkMode ? "text-white" : "text-neutral-950"
              : isDarkMode ? "text-neutral-400" : "text-neutral-600"
          } whitespace-nowrap font-medium overflow-hidden`}
          initial={false}
          animate={{
            width: shouldShowText ? "auto" : 0,
            opacity: shouldShowText ? 1 : 0,
            marginLeft: shouldShowText ? 12 : 0,
          }}
          transition={{
            duration: 0.25,
            ease: [0.25, 1, 0.5, 1],
          }}
        >
          {title}
        </motion.span>
      </motion.div>
    </Link>
  );
}