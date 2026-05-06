"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ProjectProps } from "@/types/projects";
import { FiArrowRight } from "react-icons/fi";

const ProjectItem = ({
  id,
  title,
  description,
  technologies,
  image,
  slug,
  isDarkMode,
}: ProjectProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`group flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-500 font-poppins
        ${isDarkMode 
          ? "bg-neutral-900/40 backdrop-blur-md border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:bg-neutral-800/50 hover:-translate-y-1" 
          : "bg-white/50 backdrop-blur-md border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:bg-white/70 hover:-translate-y-1"
        }`}
    >
      {/* Image Container */}
      <div className="relative w-full h-52 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110" 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={id === 1}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content Container */}
      <div className="p-5 flex flex-col flex-grow space-y-4">
        <div className="space-y-2">
          <h2 className={`text-[17px] font-bold tracking-tight transition-colors duration-300 ${isDarkMode ? "text-white" : "text-neutral-900"}`}>
            {title}
          </h2>
          <p className={`text-[14px] leading-relaxed line-clamp-3 ${isDarkMode ? "text-neutral-400" : "text-neutral-600"}`}>
            {description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md border transition-all duration-300
                ${isDarkMode
                  ? "bg-neutral-800/50 text-neutral-400 border-neutral-700/50 group-hover:border-neutral-600" 
                  : "bg-neutral-100/50 text-neutral-500 border-neutral-200 group-hover:border-neutral-300" 
                }`}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex-grow" />

        {/* Action Button */}
        <Link href={`/projects/${slug}`} className="block pt-2">
          <motion.div
            whileHover={{ x: 5 }}
            className={`flex items-center space-x-2 text-sm font-bold transition-colors duration-300
              ${isDarkMode ? "text-white hover:text-neutral-300" : "text-neutral-900 hover:text-neutral-700"}`}
          >
            <span>View Details</span>
            <FiArrowRight className="text-base" />
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectItem;