"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDarkMode } from "@/context/DarkModeContext";
import { detailedProjects } from "@/data/resume";
import { Project } from "@/types/projects";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaFigma } from "react-icons/fa"; 
import { FiArrowLeft, FiArrowUpRight, FiLayers, FiCpu, FiCheckCircle, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { getCleanImageUrl } from "@/utils/image";

interface ProjectDetailContentProps {
  slug: string;
}

const ProjectDetailContent = ({ slug }: ProjectDetailContentProps) => {
  const { isDarkMode } = useDarkMode();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (slug) {
      const foundProject = detailedProjects.find((p) => p.slug === slug);
      if (foundProject) {
        setProject(foundProject);
        setActiveImageIndex(0);
      }
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className={`flex min-h-screen items-center justify-center ${isDarkMode ? "text-white" : "text-black"}`}>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neutral-500"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className={`flex min-h-screen flex-col items-center justify-center p-4 font-poppins ${isDarkMode ? "text-white" : "text-black"}`}>
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <button onClick={() => router.push("/projects")} className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.05)] ${
          isDarkMode 
            ? "bg-neutral-900/40 backdrop-blur-md border border-white/10 text-stone-200 hover:bg-neutral-800/50 hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
            : "bg-white/50 backdrop-blur-md border border-neutral-200/80 text-stone-800 hover:bg-white/70"
        }`}>
          Back to Projects
        </button>
      </div>
    );
  }

  const galleryImages = (project.gallery && project.gallery.length > 0) 
    ? project.gallery 
    : [project.image];

  const currentImage = galleryImages[activeImageIndex] || project.image;

  const handleNextImage = () => {
    setDirection(1);
    setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrevImage = () => {
    setDirection(-1);
    setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleGoToSlide = (index: number) => {
    setDirection(index > activeImageIndex ? 1 : -1);
    setActiveImageIndex(index);
  };

  return (
    <div className={`flex min-h-screen pb-16 font-poppins antialiased overflow-x-hidden ${isDarkMode ? "text-white" : "text-black"}`}>
      <main className="flex-1 min-w-0 flex flex-col items-center pt-6 sm:pt-10 md:pt-24 lg:pt-14 px-4 sm:px-6 ml-0 md:ml-0 lg:ml-6">
        <div className="w-full min-w-0 max-w-[700px] xl:max-w-[830px] space-y-6 sm:space-y-8">
          
          <button
            onClick={() => router.back()}
            className={`group inline-flex items-center text-[13px] sm:text-[14px] font-semibold transition-all ${
              isDarkMode ? "text-neutral-400 hover:text-white" : "text-neutral-500 hover:text-black"
            }`}
          >
            <FiArrowLeft className="mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </button>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center gap-1.5">
                  <FiLayers className="text-xs" />
                  {project.category || "Project Case Study"}
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">{project.title}</h1>
              <p className={`text-[13px] sm:text-[15px] leading-relaxed font-medium ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`}>
                {project.description}
              </p>
            </div>
            
            {/* Modern Image Frame & Slider */}
            <div className="space-y-4 sm:space-y-5">
              <div className={`group relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border transition-all duration-300 shadow-xl sm:shadow-2xl ${
                isDarkMode 
                  ? "bg-neutral-900/60 border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.5)]" 
                  : "bg-white/70 border-neutral-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
              }`}>
                {/* Modern Top Header Bar */}
                <div className={`h-10 sm:h-12 flex items-center justify-between px-4 sm:px-6 border-b backdrop-blur-md ${
                  isDarkMode ? "bg-neutral-950/70 border-white/10" : "bg-neutral-100/80 border-neutral-200"
                }`}>
                  <div className="flex items-center space-x-2">
                    <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest ${isDarkMode ? "text-neutral-300" : "text-neutral-700"}`}>
                      Project Showcase
                    </span>
                  </div>

                  {galleryImages.length > 1 && (
                    <div className="flex items-center space-x-2">
                      <span className={`text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                        isDarkMode ? "bg-white/10 text-neutral-300 border-white/10" : "bg-black/5 text-neutral-600 border-black/5"
                      }`}>
                        {activeImageIndex + 1} / {galleryImages.length}
                      </span>
                    </div>
                  )}
                </div>

                {/* Main Preview Image Container */}
                <div className={`relative w-full aspect-video overflow-hidden ${isDarkMode ? "bg-neutral-900" : "bg-neutral-100"}`}>
                  <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                      key={currentImage}
                      custom={direction}
                      variants={{
                        enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%" }),
                        center: { x: 0 },
                        exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%" }),
                      }}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ x: { type: "spring", stiffness: 300, damping: 34 } }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={getCleanImageUrl(currentImage)}
                        alt={`${project.title} slide ${activeImageIndex + 1}`}
                        fill
                        className="object-cover" 
                        priority
                        quality={100}
                        sizes="(max-width: 640px) 100vw, (max-width: 1200px) 700px, 830px"
                        unoptimized={process.env.NODE_ENV === "development"}
                      />
                    </motion.div>
                  </AnimatePresence>

                  {galleryImages.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevImage}
                        className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-black/90 hover:scale-110 transition-all duration-200 z-20 shadow-lg"
                        aria-label="Previous Slide"
                      >
                        <FiChevronLeft className="text-xl sm:text-2xl" />
                      </button>

                      <button
                        onClick={handleNextImage}
                        className="absolute right-3 sm:left-auto sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-black/90 hover:scale-110 transition-all duration-200 z-20 shadow-lg"
                        aria-label="Next Slide"
                      >
                        <FiChevronRight className="text-xl sm:text-2xl" />
                      </button>
                    </>
                  )}
                </div>
              </div>
              
              {galleryImages.length > 1 && (
                <>
                  <h3 className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest mb-3 text-neutral-500">
                    Gallery · {galleryImages.length} images
                  </h3>

                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
                    {galleryImages.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => handleGoToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`relative aspect-video w-full rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                          activeImageIndex === index
                            ? "border-blue-500 ring-1 ring-blue-500/30"
                            : "border-transparent opacity-70 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={getCleanImageUrl(img)}
                          alt={`Thumbnail ${index + 1}`}
                          fill
                          className="object-cover"
                          unoptimized={process.env.NODE_ENV === "development"}
                        />
                        <span className={`absolute bottom-1 right-1 text-[9px] font-bold px-1.5 py-0.5 rounded bg-black/70 text-white backdrop-blur-sm ${
                          activeImageIndex === index ? "" : "opacity-60"
                        }`}>
                          {index + 1}
                        </span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="space-y-5 sm:space-y-6">
                <div>
                  <h2 className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                    <FiLayers className={`text-sm ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
                    Overview
                  </h2>
                  <p className={`mt-2.5 text-[14px] sm:text-[15px] leading-relaxed font-medium ${isDarkMode ? "text-neutral-300" : "text-neutral-600"}`}>
                    {project.detailedDescription}
                  </p>
                </div>

                <div className="flex flex-wrap items-start gap-x-6 gap-y-3">
                  <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 pt-1">
                    <FiCpu className={`text-sm ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
                    Tech Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-2.5 py-1 text-[11px] font-semibold rounded-md border transition-colors ${
                          isDarkMode
                            ? "bg-white/[0.05] text-neutral-300 border-white/10"
                            : "bg-neutral-100 text-neutral-700 border-neutral-200"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.features && project.features.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                        Features
                      </span>
                      <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full border ${
                        isDarkMode
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                          : "bg-emerald-50 text-emerald-600 border-emerald-200"
                      }`}>
                        {project.features.length}
                      </span>
                    </div>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2.5">
                          <FiCheckCircle className="text-emerald-500 mt-0.5 flex-shrink-0 text-sm sm:text-base" />
                          <span className={`text-[13px] sm:text-[14px] font-medium leading-snug ${isDarkMode ? "text-neutral-200" : "text-neutral-700"}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-2.5 pt-1">
                  {project.link && project.link !== "#" && (
                    <motion.a
                      whileTap={{ scale: 0.97 }}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center justify-center gap-2 rounded-full py-2.5 px-5 text-[13px] font-semibold transition-all duration-300 bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                    >
                      {project.link.includes("figma.com") ? (
                        <>
                          <FaFigma className="text-sm text-purple-400 dark:text-purple-600" /> 
                          <span>View Figma Design</span>
                        </>
                      ) : (
                        <>
                          <FaGithub className="text-sm" /> 
                          <span>Explore Source Code</span>
                          <FiArrowUpRight className="text-sm transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </>
                      )}
                    </motion.a>
                  )}

                  {project.figmaLink && !project.link?.includes("figma.com") && (
                    <motion.a
                      whileTap={{ scale: 0.97 }}
                      href={project.figmaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center justify-center gap-2 rounded-full py-2.5 px-5 text-[13px] font-semibold transition-all duration-300 bg-purple-50 text-purple-900 border border-purple-200 hover:bg-purple-100 dark:bg-purple-950/40 dark:text-purple-200 dark:border-purple-500/30 dark:hover:bg-purple-900/50"
                    >
                      <FaFigma className="text-sm text-purple-400" /> 
                      <span>View Figma Design</span>
                      <FiArrowUpRight className="text-sm transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </motion.a>
                  )}
                </div>
              </div>

          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetailContent;
