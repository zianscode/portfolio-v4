"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CertificateProps } from "@/types/projects";
import { FiArrowRight } from "react-icons/fi";
import { getCleanImageUrl } from "@/utils/image";

const CertificateItem = ({ title, description, issuedBy, date, image, link, isDarkMode }: CertificateProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`group flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-500 font-poppins
        ${isDarkMode 
          ? "bg-neutral-900/40 backdrop-blur-md border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:bg-neutral-800/50 hover:-translate-y-1" 
          : "bg-white/50 backdrop-blur-md border border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:bg-white/70 hover:-translate-y-1"
        }`}
    >
      {/* Edge-to-Edge Image Container (Fixed 3:2 Aspect Ratio) */}
      <div className="relative w-full aspect-[3/2] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
        <Image
          src={getCleanImageUrl(image)}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110" 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized={process.env.NODE_ENV === "development"}
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content Container */}
      <div className="p-4 flex flex-col flex-grow space-y-3">
        <div className="space-y-1.5">
          <h2 className={`text-[15px] font-bold tracking-tight leading-snug line-clamp-2 ${isDarkMode ? "text-white" : "text-neutral-900"}`}>
            {title}
          </h2>
          <p className={`text-[13px] leading-relaxed line-clamp-2 ${isDarkMode ? "text-neutral-400" : "text-neutral-600"}`}>
            {description}
          </p>
        </div>

        {/* Metadata */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          <span className={`px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-md border
            ${isDarkMode
              ? "bg-neutral-800/50 text-neutral-400 border-neutral-700/50" 
              : "bg-neutral-100/50 text-neutral-500 border-neutral-200" 
            }`}
          >
            {issuedBy}
          </span>
          <span className={`px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-md border
            ${isDarkMode
              ? "bg-neutral-800/50 text-neutral-400 border-neutral-700/50" 
              : "bg-neutral-100/50 text-neutral-500 border-neutral-200" 
            }`}
          >
            {date}
          </span>
        </div>

        <div className="flex-grow" />

        {/* Action Button */}
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block pt-1"
        >
          <motion.div
            whileHover={{ x: 5 }}
            className={`flex items-center space-x-2 text-xs font-bold transition-colors duration-300
              ${isDarkMode ? "text-white hover:text-neutral-300" : "text-neutral-900 hover:text-neutral-700"}`}
          >
            <span>View Certificate</span>
            <FiArrowRight className="text-sm" />
          </motion.div>
        </a>
      </div>
    </motion.div>
  );
};

export default CertificateItem;