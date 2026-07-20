"use client";

import { useState } from "react";
import { useDarkMode } from "@/context/DarkModeContext";
import { detailedProjects, certificates } from "@/data/resume";
import { Project, Certificate } from "@/types/projects";
import TabHeader from "@/components/projects/TabHeader";
import TabButtons from "@/components/projects/TabButtons";
import ProjectItem from "@/components/projects/ProjectItem";
import CertificateItem from "@/components/projects/CertificateItem";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const getProjectSpans = (total: number): string[] => {
  const rowConfigs = [
    [2, 1],
    [3],
    [1, 1, 1],
    [1, 2]
  ];
  
  const spans: number[] = [];
  let configIndex = 0;
  
  while (spans.length < total) {
    const config = rowConfigs[configIndex % rowConfigs.length];
    for (const val of config) {
      if (spans.length < total) {
        spans.push(val);
      }
    }
    configIndex++;
  }
  
  const totalSum = spans.reduce((a, b) => a + b, 0);
  const remainder = totalSum % 3;
  if (remainder !== 0) {
    const needed = 3 - remainder;
    spans[spans.length - 1] += needed;
  }
  
  return spans.map(s => {
    if (s === 2) return "md:col-span-2";
    if (s === 3) return "md:col-span-3";
    return "md:col-span-1";
  });
};

const INITIAL_CERTIFICATE_COUNT = 4;

const ProjectsPage = () => {
  const { isDarkMode } = useDarkMode();
  const [activeTab, setActiveTab] = useState<"projects" | "certificates">("projects");
  const [showAllCertificates, setShowAllCertificates] = useState<boolean>(false);

  const reversedProjects = [...detailedProjects].reverse();
  const projectSpans = getProjectSpans(reversedProjects.length);

  const displayedCertificates = showAllCertificates 
    ? certificates 
    : certificates.slice(0, INITIAL_CERTIFICATE_COUNT);

  return (
    <div
      className={`flex min-h-screen pb-8 overflow-x-hidden ${
        isDarkMode ? "text-white" : "text-black"
      }`}
    >
      <main className="flex-1 min-w-0 flex flex-col items-center pt-10 md:pt-24 lg:pt-14 px-4 md:px-6 lg:px-8 ml-0 md:ml-0 lg:ml-6 pb-20">
        <div className="w-full min-w-0 max-w-[700px] xl:max-w-[830px] transition-all duration-500 ease-in-out space-y-8 sm:space-y-10">
          <TabHeader activeTab={activeTab} isDarkMode={isDarkMode} />
          <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} isDarkMode={isDarkMode} />

          {activeTab === "projects" ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reversedProjects.map((item: Project, index: number) => (
                <ProjectItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  technologies={item.technologies}
                  image={item.image}
                  link={item.link}
                  slug={item.slug}
                  category={item.category}
                  figmaLink={item.figmaLink}
                  isDarkMode={isDarkMode}
                  spanClass={projectSpans[index]}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              {/* 2-Column Grid for Certificates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <AnimatePresence mode="popLayout">
                  {displayedCertificates.map((item: Certificate) => (
                    <CertificateItem
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      description={item.description}
                      issuedBy={item.issuedBy}
                      date={item.date}
                      image={item.image}
                      link={item.link}
                      isDarkMode={isDarkMode}
                    />
                  ))}
                </AnimatePresence>
              </div>

              {/* Show More / Show Less Button */}
              {certificates.length > INITIAL_CERTIFICATE_COUNT && (
                <div className="flex justify-center pt-2">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setShowAllCertificates((prev) => !prev)}
                    className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full text-xs font-bold transition-all duration-300 shadow-md ${
                      isDarkMode
                        ? "bg-neutral-900/60 backdrop-blur-md border border-white/15 text-stone-200 hover:bg-neutral-800 hover:border-white/30"
                        : "bg-white/80 backdrop-blur-md border border-neutral-300 text-neutral-800 hover:bg-neutral-100 hover:border-neutral-400"
                    }`}
                  >
                    <span>
                      {showAllCertificates
                        ? "Show Less"
                        : `Show More Certificates (${certificates.length - INITIAL_CERTIFICATE_COUNT} More)`}
                    </span>
                    {showAllCertificates ? (
                      <FiChevronUp className="text-base text-blue-400" />
                    ) : (
                      <FiChevronDown className="text-base text-blue-400" />
                    )}
                  </motion.button>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;