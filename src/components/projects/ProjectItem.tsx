"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ProjectProps } from "@/types/projects";
import { getCleanImageUrl } from "@/utils/image";
import { FaGithub, FaFigma } from "react-icons/fa";
import { FiArrowUpRight, FiLayers } from "react-icons/fi";

const ProjectItem = ({
  id,
  title,
  description,
  technologies,
  image,
  link,
  slug,
  isDarkMode,
  spanClass = "md:col-span-1",
  category,
  figmaLink,
}: ProjectProps) => {
  const isGithubLink = link && link.includes("github.com");
  const hasFigma = (link && link.includes("figma.com")) || (figmaLink && figmaLink.includes("figma.com"));
  const figmaUrl = (link && link.includes("figma.com")) ? link : figmaLink;

  const visibleTechs = technologies ? technologies.slice(0, 3) : [];
  const remainingTechCount = technologies ? Math.max(0, technologies.length - 3) : 0;

  return (
    <div className={`${spanClass} block w-full h-full`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`group relative w-full h-[280px] sm:h-[320px] md:h-[350px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 font-poppins border
          ${isDarkMode 
            ? "bg-neutral-900/40 border-neutral-800/80 shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:border-neutral-700 hover:-translate-y-1.5 hover:shadow-[0_25px_60px_rgba(0,0,0,0.65)]" 
            : "bg-white/40 border-neutral-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-neutral-300 hover:-translate-y-1.5 hover:shadow-[0_25px_60px_rgba(0,0,0,0.18)]"
          }`}
      >
        <Link href={`/projects/${slug}`} className="absolute inset-0 z-0" aria-label={`View ${title}`}>
          <div className="absolute inset-0 shadow-[inset_0_0_35px_rgba(0,0,0,0.45)] pointer-events-none z-10 transition-all duration-500 group-hover:shadow-[inset_0_0_65px_rgba(0,0,0,0.7)]" />

          <Image
            src={getCleanImageUrl(image)}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={id === 6}
            unoptimized={process.env.NODE_ENV === "development"}
          />
        </Link>

        <div className="absolute top-4 inset-x-4 flex justify-between items-center z-20 pointer-events-none">
          <div className="flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-white/90 shadow-md">
            <FiLayers className="text-blue-400 text-xs" />
            <span>{category || "Project"}</span>
          </div>

          <div className="flex items-center gap-2 pointer-events-auto">
            {hasFigma && figmaUrl && (
              <a
                href={figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-black/50 backdrop-blur-md border border-white/15 text-white/90 hover:bg-black/80 hover:scale-110 transition-all shadow-md"
                title="View Design on Figma"
              >
                <FaFigma className="w-4 h-4 text-purple-400" />
              </a>
            )}
            {isGithubLink && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-black/50 backdrop-blur-md border border-white/15 text-white/90 hover:bg-black/80 hover:scale-110 transition-all shadow-md"
                title="View Source Code on GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            )}
            <Link
              href={`/projects/${slug}`}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-black/50 backdrop-blur-md border border-white/15 text-white/90 hover:bg-black/80 hover:scale-110 transition-all shadow-md"
              title="View Project Details"
            >
              <FiArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-4 inset-x-4 hidden md:flex justify-between items-center z-10 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:translate-y-2 pointer-events-none">
          <div className="flex flex-wrap gap-1.5 items-center">
            {visibleTechs.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider rounded-md bg-black/50 backdrop-blur-md border border-white/15 text-white/90 shadow-sm"
              >
                {tech}
              </span>
            ))}
            {remainingTechCount > 0 && (
              <span className="px-2 py-1 text-[9px] font-bold rounded-md bg-black/50 backdrop-blur-md border border-white/15 text-white/70">
                +{remainingTechCount}
              </span>
            )}
          </div>
        </div>

        <Link 
          href={`/projects/${slug}`}
          className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 transition-all duration-500 ease-out z-10
            bg-gradient-to-t from-black/95 via-black/80 to-transparent/20 
            md:bg-neutral-950/85 md:backdrop-blur-md md:from-black/90 md:via-neutral-950/75 md:to-transparent/10
            opacity-100 md:opacity-0 md:group-hover:opacity-100"
        >
          <div className="transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500 ease-out space-y-2.5">
            <h3 className="text-white text-lg sm:text-xl font-bold tracking-tight leading-snug flex items-center justify-between">
              <span>{title}</span>
            </h3>

            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3">
              {description}
            </p>

            {technologies && technologies.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 text-[9px] font-semibold rounded bg-white/15 backdrop-blur-sm border border-white/10 text-neutral-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <span className="text-[11px] font-bold text-neutral-300 flex items-center gap-1 group-hover:text-blue-400 transition-colors">
                View Details <FiArrowUpRight className="text-xs" />
              </span>
              <div className="flex items-center gap-2">
                {hasFigma && (
                  <span className="text-[10px] font-medium text-purple-300 flex items-center gap-1">
                    <FaFigma className="text-xs" /> Figma Design
                  </span>
                )}
                {isGithubLink && (
                  <span className="text-[10px] font-medium text-neutral-400 flex items-center gap-1">
                    <FaGithub className="text-xs" /> GitHub Repo
                  </span>
                )}
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default ProjectItem;