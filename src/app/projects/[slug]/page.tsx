"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useDarkMode } from "@/context/DarkModeContext";
import { detailedProjects } from "@/data/resume";
import { Project } from "@/types/projects";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa"; 
import { FiArrowLeft, FiCheckCircle } from "react-icons/fi";

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
        setActiveImage(foundProject.image);
      }
    }
    setLoading(false);
  }, [params.slug]);

  if (loading) {
    return (
      <div className={`flex min-h-screen items-center justify-center ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neutral-500"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className={`flex min-h-screen flex-col items-center justify-center p-4 font-poppins ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}>
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <button onClick={() => router.push("/projects")} className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.05)] ${
          isDarkMode 
            ? "bg-neutral-900/40 backdrop-blur-md border border-white/10 text-stone-200 hover:bg-neutral-800/50 hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
            : "bg-white/50 backdrop-blur-md border border-white/60 text-stone-800 hover:bg-white/70"
        }`}>
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className={`flex min-h-screen pb-16 font-poppins antialiased overflow-x-hidden ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <main className="flex-1 min-w-0 flex flex-col items-center pt-6 sm:pt-10 md:pt-16 lg:pt-14 px-4 sm:px-6 ml-0 md:ml-6">
        <div className="w-full min-w-0 max-w-[700px] xl:max-w-[830px] space-y-6 sm:space-y-8">
          
          {/* Back Button */}
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
            {/* Header */}
            <div className="space-y-2">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">{project.title}</h1>
              <p className={`text-[13px] sm:text-[15px] leading-relaxed font-medium ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`}>
                {project.description}
              </p>
            </div>
            
            {/* Mac-style Gallery Section */}
            <div className="space-y-4 sm:space-y-6">
              <div className={`relative w-full rounded-xl sm:rounded-2xl overflow-hidden border shadow-lg sm:shadow-2xl ${
                isDarkMode ? "bg-neutral-900 border-neutral-800" : "bg-neutral-50 border-neutral-200"
              }`}>
                {/* Mac Window Header */}
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

                {/* Main Image */}
                <div className="relative w-full aspect-video bg-white dark:bg-neutral-950 overflow-hidden">
                  <Image
                    src={activeImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700" 
                    priority
                    quality={100}
                    sizes="(max-width: 640px) 100vw, (max-width: 1200px) 700px, 830px"
                  />
                </div>
              </div>
              
              {/* Gallery Thumbnails */}
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
                        src={img}
                        alt={`Gallery ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Content Grid — stacks on mobile, side-by-side on large screens */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6 sm:space-y-10 order-2 lg:order-1">
                <section className="space-y-3 sm:space-y-4">
                  <h2 className="text-lg sm:text-xl font-bold flex items-center space-x-2">
                    <span className="w-1 sm:w-1.5 h-5 sm:h-6 bg-neutral-900 dark:bg-white rounded-full"></span>
                    <span>Project Description</span>
                  </h2>
                  <p className={`text-[13px] sm:text-[15px] leading-relaxed font-medium ${isDarkMode ? "text-neutral-400" : "text-neutral-600"}`}>
                    {project.detailedDescription}
                  </p>
                </section>

                {project.link && project.link !== "#" && (
                  <div className="pt-1 sm:pt-2"> 
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-[13px] sm:text-sm space-x-2.5 sm:space-x-3 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.05)] ${
                        isDarkMode
                          ? "bg-neutral-900/40 backdrop-blur-md border border-white/10 text-stone-200 hover:bg-neutral-800/50 hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                          : "bg-white/50 backdrop-blur-md border border-white/60 text-stone-800 hover:bg-white/70"
                      }`}
                    >
                      <FaGithub className="text-lg sm:text-xl" /> 
                      <span>Explore Source Code</span>
                    </motion.a>
                  </div>
                )}
              </div>

              {/* Sidebar Info — shows first on mobile for quick context */}
              <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-1 lg:order-2">
                {/* Tech Stack Box */}
                <div className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 space-y-3 sm:space-y-5 ${
                  isDarkMode 
                    ? "bg-neutral-900/40 backdrop-blur-md border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)]" 
                    : "bg-white/50 backdrop-blur-md border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
                }`}>
                  <h3 className="text-sm sm:text-base font-bold uppercase tracking-widest opacity-60">Technologies</h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider rounded-md border ${
                          isDarkMode
                            ? "bg-neutral-800/80 text-neutral-300 border-neutral-700/50"
                            : "bg-white text-neutral-600 border-neutral-200"
                        } shadow-sm`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features Box */}
                {project.features && project.features.length > 0 && (
                  <div className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 space-y-3 sm:space-y-5 ${
                    isDarkMode 
                      ? "bg-neutral-900/40 backdrop-blur-md border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)]" 
                      : "bg-white/50 backdrop-blur-md border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
                  }`}>
                    <h3 className="text-sm sm:text-base font-bold uppercase tracking-widest opacity-60">Key Features</h3>
                    <ul className="space-y-3 sm:space-y-4">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-[13px] sm:text-[14px] font-medium">
                          <FiCheckCircle className="text-emerald-500 mt-0.5 mr-2.5 sm:mr-3 flex-shrink-0 text-base sm:text-lg" />
                          <span className={isDarkMode ? "text-neutral-400" : "text-neutral-700"}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetailPage;