"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useDarkMode } from "@/context/DarkModeContext";
import { detailedProjects } from "@/data/resume";
import { Project } from "@/types/projects";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaFigma } from "react-icons/fa"; 
import { FiArrowLeft, FiArrowRight, FiCheckCircle, FiLayers, FiCpu, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { getCleanImageUrl } from "@/utils/image";

const ProjectDetailPage = () => {
  const { isDarkMode } = useDarkMode();
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (params.slug && typeof params.slug === 'string') {
      const foundProject = detailedProjects.find(
        (p) => p.slug === params.slug
      );
      if (foundProject) {
        setProject(foundProject);
        setActiveImageIndex(0);
      }
    }
    setLoading(false);
  }, [params.slug]);

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
    setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const currentIndex = detailedProjects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? detailedProjects[currentIndex - 1] : detailedProjects[detailedProjects.length - 1];
  const nextProject = currentIndex < detailedProjects.length - 1 ? detailedProjects[currentIndex + 1] : detailedProjects[0];

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
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]"></span>
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
                <div className="relative w-full aspect-video bg-neutral-950 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImage}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
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

                {galleryImages.length > 1 && (
                  <div className={`py-2.5 flex justify-center items-center gap-2 border-t backdrop-blur-md ${
                    isDarkMode ? "bg-neutral-950/70 border-white/10" : "bg-neutral-100/80 border-neutral-200"
                  }`}>
                    {galleryImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          activeImageIndex === idx
                            ? "w-7 bg-blue-500 shadow-[0_0_8px_#3b82f6]"
                            : "w-2 bg-neutral-500/40 hover:bg-neutral-400"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
              
              {galleryImages.length > 1 && (
                <div className="flex gap-2 sm:gap-3.5 overflow-x-auto pb-1 no-scrollbar">
                  {galleryImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`relative aspect-video w-20 sm:w-32 md:w-40 rounded-xl overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
                        activeImageIndex === index
                          ? "border-blue-500 ring-2 ring-blue-500/30 scale-[1.02] shadow-md"
                          : "border-transparent opacity-60 hover:opacity-100 grayscale hover:grayscale-0"
                      }`}
                    >
                      <Image
                        src={getCleanImageUrl(img)}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                        unoptimized={process.env.NODE_ENV === "development"}
                      />
                      <span className="absolute bottom-1 right-1 text-[9px] font-bold px-1.5 py-0.5 rounded bg-black/70 text-white backdrop-blur-sm">
                        {index + 1}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className={`lg:col-span-2 p-5 sm:p-7 rounded-2xl border flex flex-col justify-between space-y-6 ${
                isDarkMode 
                  ? "bg-neutral-900/40 backdrop-blur-md border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)]" 
                  : "bg-white/50 backdrop-blur-md border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
              }`}>
                <div className="space-y-3">
                  <h2 className="text-base sm:text-lg font-bold flex items-center space-x-2">
                    <span className="w-1.5 h-5 bg-blue-500 rounded-full"></span>
                    <span>Project Description</span>
                  </h2>
                  <p className={`text-[13px] sm:text-[14px] leading-relaxed font-medium ${isDarkMode ? "text-neutral-300" : "text-neutral-600"}`}>
                    {project.detailedDescription}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2"> 
                  {project.link && project.link !== "#" && (
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm space-x-2 transition-all duration-300 shadow-sm ${
                        isDarkMode
                          ? "bg-neutral-800 text-white border border-white/15 hover:bg-neutral-700"
                          : "bg-neutral-900 text-white hover:bg-neutral-800"
                      }`}
                    >
                      {project.link.includes("figma.com") ? (
                        <>
                          <FaFigma className="text-base text-purple-400" /> 
                          <span>View Figma Design</span>
                        </>
                      ) : (
                        <>
                          <FaGithub className="text-base" /> 
                          <span>Explore Source Code</span>
                        </>
                      )}
                    </motion.a>
                  )}

                  {project.figmaLink && !project.link?.includes("figma.com") && (
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={project.figmaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm space-x-2 transition-all duration-300 shadow-sm ${
                        isDarkMode
                          ? "bg-purple-950/40 text-purple-200 border border-purple-500/30 hover:bg-purple-900/50"
                          : "bg-purple-50 text-purple-900 border border-purple-200 hover:bg-purple-100"
                      }`}
                    >
                      <FaFigma className="text-base text-purple-400" /> 
                      <span>View Figma Design</span>
                    </motion.a>
                  )}
                </div>
              </div>

              <div className={`p-5 sm:p-7 rounded-2xl border space-y-4 ${
                isDarkMode 
                  ? "bg-neutral-900/40 backdrop-blur-md border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)]" 
                  : "bg-white/50 backdrop-blur-md border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
              }`}>
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center gap-2 text-neutral-400">
                  <FiCpu className="text-blue-400" /> Technologies & Tools
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider rounded-lg border ${
                        isDarkMode
                          ? "bg-neutral-800/80 text-neutral-200 border-white/10"
                          : "bg-neutral-100 text-neutral-700 border-neutral-200"
                      } shadow-sm`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {project.features && project.features.length > 0 && (
              <div className={`p-5 sm:p-7 rounded-2xl border space-y-6 ${
                isDarkMode 
                  ? "bg-neutral-900/40 backdrop-blur-md border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)]" 
                  : "bg-white/50 backdrop-blur-md border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
              }`}>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="text-base sm:text-lg font-bold flex items-center space-x-2">
                    <span className="w-1.5 h-5 bg-emerald-500 rounded-full"></span>
                    <span>Key Features & Capabilities</span>
                  </h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {project.features.length} Features Included
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
                  {project.features.map((feature, index) => (
                    <div 
                      key={index} 
                      className={`p-3.5 sm:p-4 rounded-xl border flex items-start gap-3 transition-all hover:-translate-y-0.5 ${
                        isDarkMode 
                          ? "bg-neutral-800/50 border-white/5 hover:border-white/15" 
                          : "bg-white/80 border-neutral-200/80 hover:border-neutral-300"
                      }`}
                    >
                      <FiCheckCircle className="text-emerald-500 mt-0.5 flex-shrink-0 text-base sm:text-lg" />
                      <span className={`text-[13px] sm:text-[14px] font-medium leading-snug ${isDarkMode ? "text-neutral-200" : "text-neutral-700"}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <Link
                href={`/projects/${prevProject.slug}`}
                className={`p-4 rounded-2xl border flex items-center justify-between group transition-all duration-300 ${
                  isDarkMode 
                    ? "bg-neutral-900/40 border-white/10 hover:border-white/20 hover:bg-neutral-800/40" 
                    : "bg-white/50 border-neutral-200/80 hover:bg-white/80"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <FiArrowLeft className="text-lg transition-transform group-hover:-translate-x-1" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">Previous Project</span>
                    <h4 className="text-xs sm:text-sm font-bold truncate max-w-[180px] sm:max-w-[200px]">{prevProject.title}</h4>
                  </div>
                </div>
              </Link>

              <Link
                href={`/projects/${nextProject.slug}`}
                className={`p-4 rounded-2xl border flex items-center justify-between group transition-all duration-300 ${
                  isDarkMode 
                    ? "bg-neutral-900/40 border-white/10 hover:border-white/20 hover:bg-neutral-800/40" 
                    : "bg-white/50 border-neutral-200/80 hover:bg-white/80"
                }`}
              >
                <div className="flex items-center justify-end space-x-3 w-full text-right">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">Next Project</span>
                    <h4 className="text-xs sm:text-sm font-bold truncate max-w-[180px] sm:max-w-[200px]">{nextProject.title}</h4>
                  </div>
                  <FiArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>

          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetailPage;