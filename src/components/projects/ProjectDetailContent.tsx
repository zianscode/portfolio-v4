"use client";

import { useState } from "react";
import Link from "next/link";
import { useDarkMode } from "@/context/DarkModeContext";
import { detailedProjects } from "@/data/projects";
import { Project } from "@/types/projects";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaFigma } from "react-icons/fa";
import { FiArrowLeft, FiArrowUpRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface ProjectDetailContentProps {
  slug: string;
}

const ProjectDetailContent = ({ slug }: ProjectDetailContentProps) => {
  const { isDarkMode } = useDarkMode();
  const project: Project | undefined = detailedProjects.find((p) => p.slug === slug);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

  const muted = isDarkMode ? "text-neutral-400" : "text-neutral-600";
  const heading = isDarkMode ? "text-white" : "text-neutral-900";
  const divider = isDarkMode ? "border-white/10" : "border-neutral-200";

  const secondaryButton = `inline-flex items-center justify-center gap-2 rounded-full py-2.5 px-5 text-[13px] font-semibold border transition-colors duration-300 ${
    isDarkMode
      ? "border-white/10 text-neutral-200 hover:bg-white/10 hover:text-white"
      : "border-neutral-200 text-neutral-800 hover:bg-neutral-100 hover:text-neutral-900"
  }`;

  if (!project) {
    return (
      <div className={`flex min-h-screen flex-col items-center justify-center gap-4 p-4 font-poppins ${heading}`}>
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link href="/projects" className={secondaryButton}>
          <FiArrowLeft />
          Back to projects
        </Link>
      </div>
    );
  }

  const galleryImages = (project.gallery && project.gallery.length > 0)
    ? project.gallery
    : [project.image];
  const hasGallery = galleryImages.length > 1;
  const currentImage = galleryImages[activeImageIndex] || project.image;

  const isFigmaLink = project.link?.includes("figma.com");
  const hasMainLink = project.link && project.link !== "#";
  const githubUrl = hasMainLink && !isFigmaLink ? project.link : undefined;
  const figmaUrl = isFigmaLink ? project.link : project.figmaLink;

  const linkButton = `inline-flex items-center justify-center gap-2 w-44 py-2.5 px-4 rounded-full text-[13px] font-semibold border transition-colors duration-300 ${
    isDarkMode
      ? "border-white/10 bg-white/[0.04] text-neutral-100 hover:bg-white/10"
      : "border-neutral-200 bg-neutral-100/60 text-neutral-900 hover:bg-neutral-200/70"
  }`;

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

  const navButton = `absolute top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors duration-200 z-20 ${
    isDarkMode
      ? "bg-neutral-950/80 text-neutral-100 hover:bg-neutral-900"
      : "bg-white/90 text-neutral-900 hover:bg-white"
  }`;

  return (
    <div className={`flex min-h-screen pb-16 font-poppins antialiased overflow-x-hidden ${heading}`}>
      <main className="flex-1 min-w-0 flex flex-col items-center pt-6 sm:pt-10 md:pt-24 lg:pt-14 px-4 sm:px-6 ml-0 md:ml-0 lg:ml-6">
        <div className="w-full min-w-0 max-w-[700px] xl:max-w-[830px] space-y-8 sm:space-y-10">

          <Link
            href="/projects"
            className={`group inline-flex items-center gap-2 text-[13px] font-medium transition-colors ${
              isDarkMode ? "text-neutral-400 hover:text-white" : "text-neutral-500 hover:text-neutral-900"
            }`}
          >
            <FiArrowLeft className="transition-transform group-hover:-translate-x-0.5" />
            Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8 sm:space-y-10"
          >
            <header className="space-y-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                {project.title}
              </h1>
              <p className={`text-[14px] sm:text-[16px] leading-relaxed ${muted}`}>
                {project.description}
              </p>
            </header>

            <section className="space-y-3">
              <div
                className={`relative w-full aspect-video rounded-2xl overflow-hidden border ${
                  isDarkMode ? "bg-neutral-900 border-white/10" : "bg-neutral-100 border-neutral-200"
                }`}
              >
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
                      src={currentImage}
                      alt={`${project.title} screenshot ${activeImageIndex + 1}`}
                      fill
                      className="object-cover"
                      priority
                      quality={100}
                      sizes="(max-width: 640px) 100vw, (max-width: 1200px) 700px, 830px"
                      unoptimized={process.env.NODE_ENV === "development"}
                    />
                  </motion.div>
                </AnimatePresence>

                {hasGallery && (
                  <>
                    <button onClick={handlePrevImage} className={`${navButton} left-3 sm:left-4`} aria-label="Previous image">
                      <FiChevronLeft className="text-lg" />
                    </button>
                    <button onClick={handleNextImage} className={`${navButton} right-3 sm:right-4`} aria-label="Next image">
                      <FiChevronRight className="text-lg" />
                    </button>
                    <span
                      className={`absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 px-2.5 py-0.5 text-[11px] font-medium rounded-full tabular-nums ${
                        isDarkMode ? "bg-neutral-950/80 text-neutral-200" : "bg-white/90 text-neutral-800"
                      }`}
                    >
                      {activeImageIndex + 1} / {galleryImages.length}
                    </span>
                  </>
                )}
              </div>

              {hasGallery && (
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {galleryImages.map((img, index) => {
                    const isActive = activeImageIndex === index;
                    return (
                      <button
                        key={img}
                        onClick={() => handleGoToSlide(index)}
                        aria-label={`Show image ${index + 1}`}
                        aria-current={isActive}
                        className={`relative aspect-video w-full rounded-lg overflow-hidden transition-all duration-300 ring-offset-2 ${
                          isDarkMode ? "ring-offset-neutral-950" : "ring-offset-white"
                        } ${
                          isActive
                            ? isDarkMode ? "ring-1 ring-white" : "ring-1 ring-neutral-900"
                            : "opacity-50 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={img}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="140px"
                          unoptimized={process.env.NODE_ENV === "development"}
                        />
                      </button>
                    );
                  })}
                </div>
              )}
            </section>

            <dl className={`border-t ${divider}`}>
              <div className={`grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-6 py-6 border-b ${divider}`}>
                <dt className="text-[13px] font-medium text-neutral-500">Overview</dt>
                <dd className={`text-[14px] sm:text-[15px] leading-relaxed ${isDarkMode ? "text-neutral-300" : "text-neutral-700"}`}>
                  {project.detailedDescription}
                </dd>
              </div>

              <div className={`grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-6 py-6 border-b ${divider}`}>
                <dt className="text-[13px] font-medium text-neutral-500">Stack</dt>
                <dd className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2.5 py-1 text-[12px] font-medium rounded-full ${
                        isDarkMode ? "bg-white/[0.06] text-neutral-200" : "bg-neutral-100 text-neutral-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </dd>
              </div>

              {project.features && project.features.length > 0 && (
                <div className={`grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-6 py-6 border-b ${divider}`}>
                  <dt className="text-[13px] font-medium text-neutral-500">Features</dt>
                  <dd>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className={`flex items-baseline gap-3 text-[14px] leading-snug ${
                            isDarkMode ? "text-neutral-300" : "text-neutral-700"
                          }`}
                        >
                          <span
                            aria-hidden
                            className={`shrink-0 w-1 h-1 rounded-full translate-y-[-3px] ${
                              isDarkMode ? "bg-neutral-500" : "bg-neutral-400"
                            }`}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              )}
            </dl>

            {(githubUrl || figmaUrl) && (
              <div className="flex flex-wrap gap-2">
                {githubUrl && (
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={linkButton}>
                    <FaGithub className="text-sm" />
                    Source code
                    <FiArrowUpRight className="text-sm" />
                  </a>
                )}
                {figmaUrl && (
                  <a href={figmaUrl} target="_blank" rel="noopener noreferrer" className={linkButton}>
                    <FaFigma className="text-sm" />
                    Figma design
                    <FiArrowUpRight className="text-sm" />
                  </a>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetailContent;
