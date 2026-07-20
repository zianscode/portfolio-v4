"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useDarkMode } from "@/context/DarkModeContext";
import { detailedProjects } from "@/data/resume";
import { Project } from "@/types/projects";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaFigma } from "react-icons/fa"; 
import { FiArrowLeft, FiArrowRight, FiCheckCircle, FiLayers, FiCpu } from "react-icons/fi";
import { getCleanImageUrl } from "@/utils/image";

const ProjectDetailPage = () => {
  const { isDarkMode } = useDarkMode();
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [activeImage, setActiveImage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (params.slug && typeof params.slug === 'string') {
      const foundProject = detailedProjects.find(
        (p) => p.slug === params.slug
      );
      if (foundProject) {
        setProject(foundProject);
        setActiveImage(foundProject.gallery && foundProject.gallery.length > 0 ? foundProject.gallery[0] : foundProject.image);
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
            
            <div className="space-y-4 sm:space-y-6">
              <div className={`relative w-full rounded-xl sm:rounded-2xl overflow-hidden border shadow-lg sm:shadow-2xl ${
                isDarkMode ? "bg-neutral-900 border-neutral-800" : "bg-neutral-50 border-neutral-200"
              }`}>
                <div className={`h-8 sm:h-10 flex items-center px-3 sm:px-4 space-x-2 border-b ${
                  isDarkMode ? "bg-neutral-800 border-neutral-700" : "bg-neutral-200 border-neutral-300"
                }`}>
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56] shadow-inner"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E] shadow-inner"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F] shadow-inner"></div>
                  </div>
                  <div className="flex-1 flex justify-center pr-6 sm:pr-12">
                    <div className={`px-2 sm:px-4 py-0.5 rounded-md text-[8px] sm:text-[10px] font-bold tracking-widest uppercase opacity-40 ${isDarkMode ? "bg-black/20" : "bg-white/40"}`}>
                      Project Preview
                    </div>
                  </div>
                </div>

                <div className="relative w-full aspect-video bg-white dark:bg-neutral-950 overflow-hidden">
                  <Image
                    src={getCleanImageUrl(activeImage)}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700" 
                    priority
                    quality={100}
                    sizes="(max-width: 640px) 100vw, (max-width: 1200px) 700px, 830px"
                    unoptimized={process.env.NODE_ENV === "development"}
                  />
                </div>
              </div>
              
              {project.gallery && project.gallery.length > 1 && (
                <div className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto pb-2 sm:pb-4 no-scrollbar">
                  {project.gallery.map((img, index) => (
                    <button
                       key={index}
                       onClick={() => setActiveImage(img)}
                       className={`relative aspect-video w-[72px] sm:w-28 md:w-36 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
                         activeImage === img
                           ? "border-neutral-900 dark:border-white ring-2 sm:ring-4 ring-neutral-900/10 dark:ring-white/10"
                           : "border-transparent opacity-50 hover:opacity-100 grayscale hover:grayscale-0"
                       }`}
                      >
                       <Image
                         src={getCleanImageUrl(img)}
                         alt={`Gallery ${index + 1}`}
                         fill
                         className="object-cover"
                         unoptimized={process.env.NODE_ENV === "development"}
                       />
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