"use client";

import Image from "next/image";
import { useDarkMode } from "@/context/DarkModeContext";
import Link from "next/link";
import { detailedProjects } from "@/data/resume";
import { LatestProjectCardProps } from "@/types/projects";

const LatestProjectCard = ({ project, windowWidth, index }: LatestProjectCardProps) => {
  const { isDarkMode } = useDarkMode();
  const isMobile = windowWidth !== null && windowWidth < 768;

  const truncateTitle = (title: string) => {
    const limit = windowWidth && windowWidth < 640 ? 28 : 32;
    return title.length > limit ? title.slice(0, limit) + "..." : title;
  };

  const getProjectSlug = (title: string) => {
    const detailedProject = detailedProjects.find(p => p.title === title);
    return detailedProject ? detailedProject.slug : "";
  };

  const projectSlug = getProjectSlug(project.title);

  return (
    <Link href={`/projects/${projectSlug}`} className="block w-full">
      <div
        className={`relative text-left cursor-pointer transition-transform duration-300 active:scale-95 ${
          isMobile ? "w-full" : "min-w-[220px] max-w-[260px] hover:scale-[0.98]"
        }`}
      >
        <div className="flex flex-col gap-2">
          {/* Image */}
          <div
            className={`relative w-full overflow-hidden rounded-xl group border ${
              isDarkMode ? "border-neutral-800" : "border-neutral-200"
            } ${isMobile ? "h-44" : "h-32"}`}
          >
            <Image
              src={project.src}
              alt={project.title}
              fill
              className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              sizes={isMobile ? "100vw" : "260px"}
              priority={index < 2}
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

            {/* NEW badge */}
            {project.isNew && (
              <div className="absolute top-2 right-2 bg-yellow-400 text-black text-[9px] font-bold px-2 py-0.5 rounded-full shadow">
                NEW
              </div>
            )}
          </div>

          {/* Text Info */}
          <div className="flex flex-col gap-0.5 px-0.5">
            <p
              className={`font-semibold font-poppins leading-snug ${
                isMobile ? "text-[14px]" : "text-[13px]"
              } ${isDarkMode ? "text-neutral-200" : "text-neutral-800"}`}
            >
              {truncateTitle(project.title)}
            </p>
            <span
              className={`font-poppins ${
                isMobile ? "text-[11px]" : "text-[10px]"
              } ${isDarkMode ? "text-neutral-500" : "text-neutral-500"}`}
            >
              Started on: {project.date}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LatestProjectCard;