"use client";

import Image from "next/image";
import { useDarkMode } from "@/context/DarkModeContext";
import Link from "next/link";
import { detailedProjects } from "@/data/resume";
import { LatestProjectCardProps } from "@/types/projects";

const LatestProjectCard = ({ project, index }: LatestProjectCardProps) => {
  const { isDarkMode } = useDarkMode();
  const getProjectSlug = (title: string) => {
    const detailedProject = detailedProjects.find(p => p.title === title);
    return detailedProject ? detailedProject.slug : "";
  };

  const projectSlug = getProjectSlug(project.title);

  return (
    <Link href={`/projects/${projectSlug}`} className="block w-full">
      <div
        className="relative text-left cursor-pointer transition-transform duration-300 active:scale-95 w-full md:min-w-[220px] md:max-w-[260px] md:hover:scale-[0.98]"
      >
        <div className="flex flex-col gap-2">
          {/* Image */}
          <div
            className={`relative w-full overflow-hidden rounded-xl group border ${
              isDarkMode ? "border-neutral-800" : "border-neutral-200"
            } h-44 md:h-32`}
          >
            <Image
              src={project.src}
              alt={project.title}
              fill
              className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 260px"
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
              className={`font-semibold font-poppins leading-snug truncate text-[14px] md:text-[13px] ${
                 isDarkMode ? "text-neutral-200" : "text-neutral-800"
              }`}
            >
              {project.title}
            </p>
            <span
              className={`font-poppins text-[11px] md:text-[10px] text-neutral-500`}
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