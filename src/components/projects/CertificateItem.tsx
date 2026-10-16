"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CertificateProps } from "@/types/projects";
import { FiArrowUpRight, FiAward } from "react-icons/fi";
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
      className={`group relative flex flex-col h-full rounded-3xl overflow-hidden font-poppins border transition-colors duration-300 ${
        isDarkMode
          ? "bg-neutral-900/50 border-white/10 hover:border-white/20"
          : "bg-white border-neutral-200 hover:border-neutral-300"
      }`}
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View certificate: ${title}`}
        className="relative block w-full aspect-[16/10] overflow-hidden bg-neutral-950/80"
      >
        <Image
          src={getCleanImageUrl(image)}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized={process.env.NODE_ENV === "development"}
        />
      </a>

      <div className="flex flex-col flex-grow justify-between p-5 space-y-4">
        <div className="space-y-2">
          <div
            className={`flex items-center justify-between text-[11px] font-medium ${
              isDarkMode ? "text-neutral-400" : "text-neutral-500"
            }`}
          >
            <span className="flex items-center gap-1.5 min-w-0">
              <FiAward className="shrink-0" />
              <span className="truncate">{issuedBy}</span>
            </span>
            <span className="shrink-0">{date}</span>
          </div>

          <h3
            className={`text-sm sm:text-[15px] font-semibold tracking-tight leading-snug line-clamp-2 ${
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
          className={`inline-flex items-center justify-center gap-1.5 w-full px-4 py-2.5 rounded-full text-xs font-semibold border transition-colors duration-300 ${
            isDarkMode
              ? "bg-neutral-800/60 border-white/10 text-neutral-200 hover:bg-neutral-700/60 hover:text-white"
              : "bg-neutral-100 border-neutral-200 text-neutral-800 hover:bg-neutral-200/70 hover:text-neutral-900"
          }`}
        >
          <span>View Certificate</span>
          <FiArrowUpRight className="text-sm" />
        </a>
      </div>
    </motion.div>
  );
};

export default CertificateItem;
