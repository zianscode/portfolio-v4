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

  const shouldShowText = isMobile || isOpen;

  return (
    <Link 
      href={href} 
      className="text-decoration-none w-full block"
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      <motion.div
        className={`group flex items-center py-2 px-3 rounded-xl cursor-pointer relative ${
          isOpen ? "justify-start px-3" : "justify-center px-0"
        } ${
          isCurrentActive
            ? isDarkMode ? "text-white" : "text-neutral-950"
            : isDarkMode
            ? "text-neutral-400 hover:text-white"
            : "text-neutral-600 hover:text-neutral-900"
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => isMobile && setIsMobileOpen && setIsMobileOpen(false)}
      >
        {isCurrentActive && (
          <motion.div
            layoutId="active-sidebar-pill"
            className={`absolute inset-0 -z-10 rounded-xl border ${
              isDarkMode 
                ? "bg-white/10 border-white/5 shadow-sm" 
                : "bg-black/5 border-black/5 shadow-sm"
            }`}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}

        {!isCurrentActive && (
          <div
            className={`absolute inset-0 -z-10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
              isDarkMode ? "bg-white/5" : "bg-black/5"
            }`}
          />
        )}

        <div
          className={`${
            isCurrentActive
              ? isDarkMode ? "text-white" : "text-neutral-950"
              : isDarkMode ? "text-neutral-400 group-hover:text-white" : "text-neutral-500 group-hover:text-neutral-900"
          } flex-shrink-0 transition-colors duration-200`}
        >
          <Icon className="h-5 w-5" />
        </div>

        <motion.span
          className={`${
            isCurrentActive
              ? isDarkMode ? "text-white" : "text-neutral-950"
              : isDarkMode ? "text-neutral-400 group-hover:text-white" : "text-neutral-600 group-hover:text-neutral-900"
          } whitespace-nowrap text-sm font-medium overflow-hidden`}
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