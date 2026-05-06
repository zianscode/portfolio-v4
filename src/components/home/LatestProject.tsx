"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaCode, FaBullhorn } from "react-icons/fa";
import { useDarkMode } from "@/context/DarkModeContext";
import { projects } from "@/data/resume";
import LatestProjectCard from "@/components/home/LatestProjectCard";
import Link from "next/link";

const LatestProject = () => {
  const { isDarkMode } = useDarkMode();
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const controls = useAnimation();
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth !== null && carouselRef.current) {
      const isMobile = windowWidth < 640;
      if (!isMobile) {
        // Optional: Add subtle animation for desktop if desired
        controls.start({
          x: 0, // No infinite scroll, but could be customized
          transition: { duration: 0 },
        });
      } else {
        controls.start({
          x: 0,
          transition: { duration: 0 },
        });
      }
    }
  }, [windowWidth, controls]);

  const isMobile = windowWidth !== null && windowWidth < 640;

  return (
    <section
      className={`space-y-2 ${
        isDarkMode ? "border-stone-700" : "border-stone-300"
      } w-full`}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:px-0">
        <div className="flex items-center justify-between w-full sm:w-auto">
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

          {/* Button moved inline with text in mobile view */}
          <div className="sm:hidden">
            <Link href="/projects" passHref>
              <motion.div
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 whitespace-nowrap cursor-pointer ${
                  isDarkMode
                    ? "bg-neutral-900/40 backdrop-blur-md border border-white/10 text-stone-200 hover:bg-neutral-800/50"
                    : "bg-white/50 backdrop-blur-md border border-white/60 text-stone-800 hover:bg-white/70"
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

        {/* Desktop button */}
        <div className="hidden sm:block">
          <Link href="/projects" passHref>
            <motion.div
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 whitespace-nowrap cursor-pointer ${
                isDarkMode
                  ? "bg-neutral-900/40 backdrop-blur-md border border-white/10 text-stone-200 hover:bg-neutral-800/50"
                  : "bg-white/50 backdrop-blur-md border border-white/60 text-stone-800 hover:bg-white/70"
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

      {isMobile ? (
        // Mobile View — full-width snap carousel, no fixed height clipping
        <div className="no-scrollbar mt-4 overflow-x-scroll overflow-y-visible snap-x snap-mandatory pb-2">
          <div className="flex">
            {projects.map((project, index) => (
              <div
                key={`${project.title}-${index}`}
                className="min-w-full snap-center px-0.5"
              >
                <LatestProjectCard
                  project={project}
                  windowWidth={windowWidth}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Desktop View - Enhanced horizontal scroll
        <div
          ref={carouselRef}
          className="no-scrollbar mt-4 flex flex-row space-x-4 overflow-x-auto pt-2 pb-4 snap-x snap-proximity"
        >
          {projects.map((project, index) => (
            <div key={`${project.title}-${index}`} className="snap-start">
              <LatestProjectCard
                project={project}
                windowWidth={windowWidth}
                index={index}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default LatestProject;