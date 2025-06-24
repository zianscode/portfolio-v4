"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ProjectProps } from "@/types/projects";
import { FiExternalLink } from "react-icons/fi";

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
      key={id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.03,
        y: -7,
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`relative rounded-xl overflow-hidden backdrop-blur-md border 
        ${isDarkMode 
          ? "bg-neutral-900/70 border-neutral-800 hover:bg-neutral-800/70" 
          : "bg-white/70 border-gray-200 hover:bg-gray-50/70"
        } 
        transition-all duration-300 
        ${isDarkMode
          ? "shadow-xl hover:shadow-2xl shadow-neutral-900/60 hover:shadow-neutral-900/80" 
          : "shadow-lg hover:shadow-xl shadow-gray-300/60 hover:shadow-300/80" 
        }`}
    >
      <div className="w-full h-56 relative group">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110" 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={id === 1}
        />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 
                        transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 gap-4">
          <Link href={`/projects/${slug}`} className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent rounded-full">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 15 }} 
              whileTap={{ scale: 0.9 }} 
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative p-4 rounded-full cursor-pointer overflow-hidden
                         transition-colors duration-300 transform scale-100" 
              aria-label={`Lihat detail proyek ${title}`}
            >
              <div 
                className={`absolute inset-0 z-0 rounded-full 
                            animate-gradient-move 
                            ${isDarkMode 
                              ? "bg-gradient-to-r from-neutral-700 via-blue-600 to-green-500"
                              : "bg-gradient-to-r from-neutral-500 via-blue-400 to-green-300"
                            } 
                            bg-[length:200%_200%]`} 
              ></div>
              <FiExternalLink className="relative z-10 h-7 w-7 text-white" /> 
            </motion.div>
          </Link>
        </div>
      </div>

      <div className="p-5"> 
        <h2 className={`text-xl font-bold mb-2 tracking-tight 
                        ${isDarkMode ? "text-white" : "text-gray-900"}`}>
          {title}
        </h2>
        <p
          className={`text-sm leading-relaxed mb-4 
            ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
        >
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4"> 
          {technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full 
                ${isDarkMode
                  ? "bg-neutral-800 text-gray-200 border border-neutral-700" 
                  : "bg-gray-100 text-gray-800 border border-gray-200" 
                } 
                transition-all duration-300 hover:scale-105 hover:shadow-md`} 
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;