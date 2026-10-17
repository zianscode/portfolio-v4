"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ProjectCardProps } from "@/types/projects";
import { FaGithub, FaFigma } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const ProjectListCard = ({
  title,
  description,
  technologies,
  image,
  link,
  slug,
  isDarkMode,
  category,
  figmaLink,
}: ProjectCardProps) => {
  const isGithubLink = link && link.includes("github.com");
  const hasFigma = (link && link.includes("figma.com")) || (figmaLink && figmaLink.includes("figma.com"));
  const figmaUrl = (link && link.includes("figma.com")) ? link : figmaLink;

  const iconButton = `w-8 h-8 rounded-full flex items-center justify-center border transition-colors duration-300 ${
    isDarkMode
      ? "border-white/10 text-neutral-300 hover:bg-white/10 hover:text-white"
      : "border-neutral-200 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
  }`;

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
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 112px, (max-width: 768px) 240px, 288px"
            unoptimized={process.env.NODE_ENV === "development"}
          />
          <div className="absolute inset-0 shadow-[inset_0_0_25px_rgba(0,0,0,0.45)] pointer-events-none z-10" />

          <span
            className={`absolute top-3 left-3 hidden sm:block px-2.5 py-1 text-[11px] font-medium rounded-full z-10 ${
              isDarkMode ? "bg-neutral-950/80 text-neutral-100" : "bg-white/90 text-neutral-900"
            }`}
          >
            {category || "Project"}
          </span>
        </Link>

        <div className="flex-1 min-w-0 p-3.5 sm:p-6 flex flex-col justify-center sm:justify-between gap-2.5 sm:gap-4">
          <div className="min-w-0">
            <div className="flex items-start justify-between gap-3">
              <h3
                className={`text-sm sm:text-xl font-bold tracking-tight leading-snug truncate sm:whitespace-normal ${
                  isDarkMode ? "text-white" : "text-neutral-900"
                }`}
              >
                {title}
              </h3>
              <span className="hidden sm:flex items-center gap-1.5 flex-shrink-0">
                {hasFigma && figmaUrl && (
                  <a
                    href={figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={iconButton}
                    title="View design on Figma"
                    aria-label={`${title} design on Figma`}
                  >
                    <FaFigma className="w-3.5 h-3.5" />
                  </a>
                )}
                {isGithubLink && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={iconButton}
                    title="View source on GitHub"
                    aria-label={`${title} source on GitHub`}
                  >
                    <FaGithub className="w-3.5 h-3.5" />
                  </a>
                )}
              </span>
            </div>

            <p
              className={`mt-1 text-[11px] sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3 ${
                isDarkMode ? "text-neutral-400" : "text-neutral-600"
              }`}
            >
              {description}
            </p>
          </div>

          {technologies && technologies.length > 0 && (
            <p className="hidden sm:block text-xs truncate text-neutral-500">
              {technologies.join(" · ")}
            </p>
          )}

          <div
            className={`flex items-center justify-between pt-2 sm:pt-3 border-t ${
              isDarkMode ? "border-white/10" : "border-neutral-200"
            }`}
          >
            <Link
              href={`/projects/${slug}`}
              className={`text-xs font-semibold flex items-center gap-1.5 ${
                isDarkMode ? "text-neutral-200" : "text-neutral-800"
              }`}
            >
              View details
              <FiArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <div className="flex items-center gap-1.5 sm:hidden">
              {hasFigma && figmaUrl && (
                <a
                  href={figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={iconButton}
                  aria-label={`${title} design on Figma`}
                >
                  <FaFigma className="w-3.5 h-3.5" />
                </a>
              )}
              {isGithubLink && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={iconButton}
                  aria-label={`${title} source on GitHub`}
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

export default ProjectListCard;
