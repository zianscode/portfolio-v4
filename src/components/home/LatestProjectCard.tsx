"use client";

import Image from "next/image";
import { useDarkMode } from "@/context/DarkModeContext";
import Link from "next/link";
import { detailedProjects } from "@/data/projects";
import { LatestProjectCardProps } from "@/types/projects";

const LatestProjectCard = ({ project, index }: LatestProjectCardProps) => {
  const { isDarkMode } = useDarkMode();
  const getProjectSlug = (title: string) => {
    const detailedProject = detailedProjects.find(p => p.title === title);
    return detailedProject ? detailedProject.slug : "#";
  };

  const projectSlug = getProjectSlug(project.title);

  return (
    <Link href={`/projects/${projectSlug}`} className="block w-full">
      <div
        className="relative text-left cursor-pointer transition-transform duration-300 active:scale-95 w-full md:min-w-[220px] md:max-w-[260px] md:hover:scale-[0.98]"
      >
        <div className="flex flex-col gap-2">
          <div
            className={`relative w-full overflow-hidden rounded-3xl group border transition-all duration-300 
              shadow-[0_4px_12px_rgba(0,0,0,0.06)] group-hover:shadow-[0_12px_24px_rgba(0,0,0,0.18)]
              ${isDarkMode 
                ? "border-neutral-800 bg-neutral-900/30 dark:shadow-[0_4px_15px_rgba(0,0,0,0.25)] dark:group-hover:shadow-[0_12px_30px_rgba(0,0,0,0.55)]" 
                : "border-neutral-200 bg-white/30"
              } h-44 md:h-32`}
          >
            <Image
              src={project.src}
              alt={project.title}
              fill
              className="object-cover rounded-3xl transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 260px"
              priority={index < 2}
              unoptimized={process.env.NODE_ENV === "development"}
            />
            <div className="absolute inset-0 shadow-[inset_0_0_15px_rgba(0,0,0,0.35)] pointer-events-none z-10 rounded-3xl" />

            <div className="absolute bottom-3 left-3 px-2 py-0.5 text-[8px] font-bold rounded-full bg-black/45 backdrop-blur-md border border-white/10 text-white/90 z-10 transition-opacity duration-300 group-hover:opacity-0">
              {project.date.split(",")[1]?.trim() || "Project"}
            </div>

            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl z-10" />

            {project.isNew && (
              <div className="absolute top-3 right-3 bg-yellow-400 text-black text-[9px] font-bold px-2 py-0.5 rounded-full shadow z-10 transition-opacity duration-300 group-hover:opacity-0">
                NEW
              </div>
            )}
          </div>

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