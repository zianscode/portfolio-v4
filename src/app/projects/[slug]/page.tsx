"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useDarkMode } from "@/context/DarkModeContext";
import { detailedProjects } from "@/data/resume";
import { Project } from "@/types/projects";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa"; 

const ProjectDetailPage = () => {
  const { isDarkMode } = useDarkMode();
  const params = useParams();
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
      <div
        className={`flex min-h-screen items-center justify-center ${
          isDarkMode ? "bg-[#0B0A0A] text-white" : "bg-white text-black"
        }`}
      >
        <div className="animate-spin rounded-full h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div
        className={`flex min-h-screen flex-col items-center justify-center p-4 ${
          isDarkMode ? "bg-[#0B0A0A] text-white" : "bg-white text-black"
        }`}
      >
        <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-center">Project Tidak Ditemukan</h1>
        <p className="mb-4 sm:mb-6 text-base sm:text-base text-center">Maaf, project yang Anda cari tidak ditemukan.</p>
        <Link
          href="/projects"
          className={`px-4 sm:px-5 md:px-6 py-2.5 rounded-lg ${
            isDarkMode
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white transition-colors text-sm sm:text-base md:text-base`}
        >
          Kembali ke Projects
        </Link>
      </div>
    );
  }

  return (
    <div
      className={`flex min-h-screen pb-6 sm:pb-8 md:pb-16 ${
        isDarkMode ? "bg-[#0B0A0A] text-white" : "bg-white text-black"
      }`}
    >
      <main className="flex-1 flex justify-center pt-8 md:pt-16 lg:pt-14 px-4 md:px-6 lg:px-8 ml-0 md:ml-6">
        <div className="w-full max-w-[700px] xl:max-w-[830px] transition-all duration-500 ease-in-out">
          <Link
            href="/projects"
            className={`inline-flex items-center mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base md:text-base ${
              isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-black"
            } transition-colors`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 md:h-5 md:w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Kembali ke Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 sm:space-y-5 md:space-y-6"
          >
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">{project.title}</h1>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
                <Image
                  src={activeImage}
                  alt={project.title}
                  fill
                  className="object-contain" 
                  style={{ borderRadius: "inherit" }}
                  priority
                  quality={100}
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 80vw, 70vw"
                />
              </div>
              
              {project.gallery && project.gallery.length > 0 && (
                <div 
                  className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 xs:gap-2 sm:gap-2.5 md:gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent"
                  onKeyDown={(e) => {
                    if (!project?.gallery) return;
                    const currentIndex = project.gallery.indexOf(activeImage);
                    if (e.key === 'ArrowLeft') {
                      e.preventDefault();
                      const newIndex = currentIndex > 0 ? currentIndex - 1 : project.gallery.length - 1;
                      setActiveImage(project.gallery[newIndex]);
                    } else if (e.key === 'ArrowRight') {
                      e.preventDefault();
                      const newIndex = currentIndex < project.gallery.length - 1 ? currentIndex + 1 : 0;
                      setActiveImage(project.gallery[newIndex]);
                    }
                  }}
                  tabIndex={0}
                  aria-label="Galeri gambar proyek"
                  role="group"
                >
                  {project.gallery.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(img)}
                      className={`relative aspect-square w-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                        activeImage === img
                          ? isDarkMode
                            ? "border-blue-500"
                            : "border-blue-600"
                          : isDarkMode
                          ? "border-neutral-800"
                          : "border-gray-200"
                      }`}
                      aria-label={`Lihat gambar ${index + 1} dari galeri`}
                    >
                      <Image
                        src={img}
                        alt={`Galeri ${index + 1} untuk ${project.title}`}
                        fill
                        className="object-cover"
                        style={{ borderRadius: "inherit" }}
                        sizes="96px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-5 sm:space-y-6 md:space-y-7">
              {/* Description */}
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">Deskripsi</h2>
                <p className="text-sm sm:text-base md:text-base leading-relaxed">
                  {project.detailedDescription}
                </p>
              </div>

              {/* Button GitHub */}
              {project.link && project.link !== "#" && (
                <div className="flex justify-start"> 
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-4 sm:px-5 md:px-6 py-2.5 rounded-lg sm:rounded-xl text-sm sm:text-base ${
                      isDarkMode
                        ? "bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700" 
                        : "bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-200" 
                    } transition-colors font-medium`}
                  >
                    <FaGithub className="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6 mr-2" /> 
                    See on GitHub
                  </a>
                </div>
              )}

              {/* Technologies */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                <div className={`rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 ${
                  isDarkMode ? "bg-neutral-900" : "bg-gray-50"
                } border ${
                  isDarkMode ? "border-neutral-800" : "border-gray-200"
                }`}>
                  <h2 className="text-lg sm:text-lg font-semibold mb-3">Teknologi</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-3 sm:px-3 py-1.5 text-sm sm:text-sm font-medium rounded-full ${
                          isDarkMode
                            ? "bg-gray-800 text-gray-200 border border-gray-700"
                            : "bg-gray-100 text-gray-800 border border-gray-200"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 ${
                  isDarkMode ? "bg-neutral-900" : "bg-gray-50"
                } border ${
                  isDarkMode ? "border-neutral-800" : "border-gray-200"
                }`}>

                  {/* Features */}
                  {project.features && project.features.length > 0 && (
                    <>
                      <h2 className="text-lg sm:text-lg font-semibold mb-3">Fitur</h2>
                      <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start text-sm sm:text-sm"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className={`h-5 w-5 sm:h-5 sm:w-5 mr-2 mt-0.5 flex-shrink-0 ${
                                isDarkMode ? "text-blue-400" : "text-blue-500"
                              }`}
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetailPage;