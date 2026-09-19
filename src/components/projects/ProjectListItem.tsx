"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ProjectProps } from "@/types/projects";
import { getCleanImageUrl } from "@/utils/image";
import { FaGithub, FaFigma } from "react-icons/fa";
import { FiArrowUpRight, FiLayers } from "react-icons/fi";

const ProjectListItem = ({
  title,
  description,
  technologies,
  image,
  link,
  slug,
  isDarkMode,
  category,
  figmaLink,
}: ProjectProps) => {
  const isGithubLink = link && link.includes("github.com");
  const hasFigma = (link && link.includes("figma.com")) || (figmaLink && figmaLink.includes("figma.com"));
  const figmaUrl = (link && link.includes("figma.com")) ? link : figmaLink;

  const visibleTechs = technologies ? technologies.slice(0, 5) : [];
  const remainingTechCount = technologies ? Math.max(0, technologies.length - 5) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`group relative w-full rounded-3xl overflow-hidden cursor-pointer border transition-all duration-500 font-poppins
        ${
          isDarkMode
            ? "bg-neutral-900/40 border-neutral-800/80 shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:border-neutral-700 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(0,0,0,0.65)]"
            : "bg-white/40 border-neutral-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-neutral-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(0,0,0,0.18)]"
        }`}
    >
      <div className="flex w-full">
        <Link
          href={`/projects/${slug}`}
          className="relative w-28 sm:w-60 md:w-72 h-auto self-stretch min-h-[120px] sm:min-h-[160px] flex-shrink-0 block overflow-hidden"
        >
          <Image
            src={getCleanImageUrl(image)}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 112px, (max-width: 768px) 240px, 288px"
            unoptimized={process.env.NODE_ENV === "development"}
          />
          <div className="absolute inset-0 shadow-[inset_0_0_25px_rgba(0,0,0,0.45)] pointer-events-none z-10" />

          <div className="absolute top-3 left-3 hidden sm:flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-white/90 shadow-md z-10">
            <FiLayers className="text-blue-400 text-xs" />
            <span>{category || "Project"}</span>
          </div>
        </Link>

        <div className="flex-1 min-w-0 p-3.5 sm:p-6 flex flex-col justify-center sm:justify-between gap-2.5 sm:gap-4">
          <div className="min-w-0">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-white text-sm sm:text-xl font-bold tracking-tight leading-snug truncate sm:whitespace-normal">
                {title}
              </h3>
              <span className="hidden sm:flex items-center gap-2 flex-shrink-0">
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
              </span>
            </div>

            <p className="mt-1 text-neutral-300 text-[11px] sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3">
              {description}
            </p>
          </div>

          <div className="hidden sm:block">
            {technologies && technologies.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {visibleTechs.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 text-[9px] font-semibold rounded bg-white/15 backdrop-blur-sm border border-white/10 text-neutral-200"
                  >
                    {tech}
                  </span>
                ))}
                {remainingTechCount > 0 && (
                  <span className="px-2 py-0.5 text-[9px] font-semibold rounded bg-white/15 backdrop-blur-sm border border-white/10 text-neutral-400">
                    +{remainingTechCount} more
                  </span>
                )}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-white/10">
            <span className="text-[11px] font-bold text-neutral-300 flex items-center gap-1 group-hover:text-blue-400 transition-colors">
              View Details <FiArrowUpRight className="text-xs" />
            </span>
            <div className="flex items-center gap-2 sm:hidden">
              {hasFigma && figmaUrl && (
                <a
                  href={figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-7 h-7 rounded-full flex items-center justify-center bg-black/50 backdrop-blur-md border border-white/15 text-white/90 hover:bg-black/80 transition-all shadow-md"
                  title="View Design on Figma"
                >
                  <FaFigma className="w-3.5 h-3.5 text-purple-400" />
                </a>
              )}
              {isGithubLink && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-7 h-7 rounded-full flex items-center justify-center bg-black/50 backdrop-blur-md border border-white/15 text-white/90 hover:bg-black/80 transition-all shadow-md"
                  title="View Source Code on GitHub"
                >
                  <FaGithub className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectListItem;