"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ProjectProps } from "@/types/projects";
import { getCleanImageUrl } from "@/utils/image";

const ProjectItem = ({
  id,
  title,
  description,
  technologies,
  image,
  slug,
  isDarkMode,
  spanClass = "md:col-span-1",
}: ProjectProps) => {
  return (
    <Link href={`/projects/${slug}`} className={`${spanClass} block w-full h-full`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`group relative w-full h-[260px] sm:h-[300px] md:h-[340px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 font-poppins border
          ${isDarkMode 
            ? "bg-neutral-900/30 border-neutral-800/80 shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:bg-neutral-800/20 hover:-translate-y-1.5 hover:shadow-[0_25px_60px_rgba(0,0,0,0.65)]" 
            : "bg-white/30 border-neutral-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:bg-white/50 hover:-translate-y-1.5 hover:shadow-[0_25px_60px_rgba(0,0,0,0.18)]"
          }`}
      >
        <div className="absolute inset-0 shadow-[inset_0_0_35px_rgba(0,0,0,0.45)] pointer-events-none z-10 transition-all duration-500 group-hover:shadow-[inset_0_0_55px_rgba(0,0,0,0.65)]" />

        <Image
          src={getCleanImageUrl(image)}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={id === 6}
          unoptimized={process.env.NODE_ENV === "development"}
        />

        <div className="absolute bottom-4 inset-x-5 hidden md:flex justify-between items-center z-10 md:transition-all md:duration-500 md:ease-out md:group-hover:opacity-0 md:group-hover:translate-y-2">
          {technologies && technologies.length > 0 && (
            <span className="px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-md bg-black/45 backdrop-blur-md border border-white/10 text-white/90">
              {technologies[0]}
            </span>
          )}
          <div className="w-7 h-7 rounded-full flex items-center justify-center bg-black/45 backdrop-blur-md border border-white/10 text-white/90 shadow-sm">
            <svg className="w-3 h-3 transform rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </div>
        </div>

        {/* Hover/Mobile Overlay */}
        <div 
          className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 transition-all duration-500 ease-out
            bg-gradient-to-t from-black/95 via-black/75 to-transparent/10 
            md:bg-neutral-950/70 md:backdrop-blur-sm md:from-transparent md:via-transparent md:to-transparent
            opacity-100 md:opacity-0 md:group-hover:opacity-100"
        >
          <div className="transform translate-y-0 md:translate-y-6 md:group-hover:translate-y-0 transition-transform duration-500 ease-out">
            <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-2 leading-tight">
              {title}
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed line-clamp-3 md:line-clamp-4 max-w-[90%]">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectItem;