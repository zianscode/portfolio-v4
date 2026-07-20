"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CertificateProps } from "@/types/projects";
import { FiArrowUpRight, FiAward, FiCalendar } from "react-icons/fi";
import { HiBadgeCheck } from "react-icons/hi";
import { getCleanImageUrl } from "@/utils/image";

const CertificateItem = ({
  title,
  description,
  issuedBy,
  date,
  image,
  link,
  isDarkMode,
}: CertificateProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`group relative flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-500 font-poppins border
        ${
          isDarkMode
            ? "bg-neutral-900/40 backdrop-blur-md border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:border-blue-500/40 hover:shadow-[0_15px_40px_rgba(59,130,246,0.18)] hover:-translate-y-1.5"
            : "bg-white/60 backdrop-blur-md border-neutral-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-blue-400/50 hover:shadow-[0_15px_40px_rgba(59,130,246,0.12)] hover:-translate-y-1.5"
        }`}
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-950/80">
        <Image
          src={getCleanImageUrl(image)}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized={process.env.NODE_ENV === "development"}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

        <div className="absolute top-3 inset-x-3 flex justify-between items-center z-10 pointer-events-none">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-bold uppercase tracking-wider text-emerald-400 shadow-md">
            <HiBadgeCheck className="text-sm text-emerald-400" />
            <span>Verified</span>
          </div>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full flex items-center justify-center bg-black/60 backdrop-blur-md border border-white/15 text-white/90 hover:bg-black/90 hover:scale-110 transition-all shadow-md pointer-events-auto"
            title="View Credential Document"
          >
            <FiArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider">
            <span
              className={`flex items-center gap-1 px-2.5 py-0.5 rounded-md border ${
                isDarkMode
                  ? "bg-neutral-800/80 text-blue-400 border-blue-500/20"
                  : "bg-blue-50 text-blue-600 border-blue-200"
              }`}
            >
              <FiAward className="text-xs" />
              <span>{issuedBy}</span>
            </span>

            <span
              className={`flex items-center gap-1 px-2 py-0.5 rounded-md border ${
                isDarkMode
                  ? "bg-neutral-800/60 text-neutral-400 border-white/5"
                  : "bg-neutral-100 text-neutral-500 border-neutral-200"
              }`}
            >
              <FiCalendar className="text-[11px]" />
              <span>{date}</span>
            </span>
          </div>

          <h3
            className={`text-sm sm:text-[15px] font-bold tracking-tight leading-snug line-clamp-2 transition-colors duration-300 group-hover:text-blue-500 ${
              isDarkMode ? "text-white" : "text-neutral-900"
            }`}
          >
            {title}
          </h3>

          <p
            className={`text-xs leading-relaxed line-clamp-2 ${
              isDarkMode ? "text-neutral-400" : "text-neutral-600"
            }`}
          >
            {description}
          </p>
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-300 border ${
            isDarkMode
              ? "bg-neutral-800/50 border-white/10 text-neutral-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500"
              : "bg-neutral-100/80 border-neutral-200 text-neutral-800 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600"
          }`}
        >
          <span>View Credential</span>
          <FiArrowUpRight className="text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </motion.div>
  );
};

export default CertificateItem;