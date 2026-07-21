"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { FaCode, FaBullhorn } from "react-icons/fa";
import { useDarkMode } from "@/context/DarkModeContext";
import { projects } from "@/data/resume";
import LatestProjectCard from "@/components/home/LatestProjectCard";
import Link from "next/link";

const LatestProject = () => {
  const { isDarkMode } = useDarkMode();
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className={`space-y-2 ${
        isDarkMode ? "border-stone-700" : "border-stone-300"
      } w-full`}
    >
      <div className="flex justify-between items-center gap-4">
        <div className="flex items-center justify-between w-full">
          <div>
            <div className="flex items-center gap-2">
              <FaCode
                className={`text-base sm:text-xl ${
                  isDarkMode ? "text-stone-200" : "text-stone-800"
                }`}
              />
              <h2
                className={`text-base sm:text-xl font-bold ${
                  isDarkMode ? "text-stone-200" : "text-stone-800"
                }`}
              >
                Recent Projects
              </h2>
            </div>
            <p
              className={`text-[13px] sm:text-[15px] pt-1 sm:pt-2 ${
                isDarkMode ? "text-neutral-400" : "text-neutral-600"
              }`}
            >
              The project I created
            </p>
          </div>

          <div>
            <Link href="/projects" passHref>
              <motion.div
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 whitespace-nowrap cursor-pointer ${
                  isDarkMode
                    ? "bg-neutral-900/40 backdrop-blur-md border border-white/10 text-stone-200 hover:bg-neutral-800/50"
                    : "bg-white/50 backdrop-blur-md border border-neutral-200/80 text-stone-800 hover:bg-white/70"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaBullhorn className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>The project I created</span>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>

      {/* Responsive Horizontal Carousel:
          - Wide Desktop (>= 1024px): original card width lg:w-[250px] xl:w-[260px] (4+ cards visible)
          - Tablet (768px - 1023px): 3 cards visible (md:w-[calc(33.333%-11px)])
          - Small Tablet (500px - 767px): 2 cards visible (sm:w-[calc(50%-8px)])
          - Mobile (< 500px): 1 card visible (w-full)
      */}
      <div
        ref={carouselRef}
        className="no-scrollbar mt-4 flex flex-row gap-3 sm:gap-4 overflow-x-auto pt-2 pb-4 snap-x snap-mandatory"
      >
        {projects.map((project, index) => (
          <div
            key={`${project.title}-${index}`}
            className="snap-start flex-shrink-0 w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[250px] xl:w-[260px]"
          >
            <LatestProjectCard project={project} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestProject;