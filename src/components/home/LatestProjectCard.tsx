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
    const limit = windowWidth && windowWidth < 640 ? 20 : 30;
    return title.length > limit ? title.slice(0, limit) + "..." : title;
  };

  // Mencari slug berdasarkan judul proyek
  const getProjectSlug = (title: string) => {
    const detailedProject = detailedProjects.find(p => p.title === title);
    return detailedProject ? detailedProject.slug : "";
  };

  const projectSlug = getProjectSlug(project.title);

  return (
    <Link href={`/projects/${projectSlug}`}>
      <button 
        className={`relative animate-slide-card transition hover:scale-95 hover:duration-500 ${
          isMobile ? 'w-full min-w-[10px]' : 'min-w-[250px]'
        }`}
      >
        <div className="relative z-10 flex h-max flex-col items-start space-y-1">
          <div className="h-28 w-full overflow-hidden rounded-md relative group">
            <Image
              src={project.src}
              alt={project.title}
              width={200}
              height={200}
              className="h-full w-full rounded-md object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />
            {(project.isNew || index === 0) && (
              <div className="absolute top-0 right-0 origin-top-right">
                <div className="bg-yellow-400 text-black text-xs font-bold py-1 px-9 transform rotate-45 translate-y-3 translate-x-6 shadow-md">
                  NEW
                </div>
              </div>
            )}
          </div>
          <p className={`text-sm ${isDarkMode ? "text-neutral-300" : "text-neutral-800"}`}>
            {truncateTitle(project.title)}
          </p>
          <span className={`text-[10px] ${isDarkMode ? "text-neutral-400" : "text-neutral-600"}`}>
            Started on: {project.date}
          </span>
        </div>
      </button>
    </Link>
  );
};

export default LatestProjectCard;