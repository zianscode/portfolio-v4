"use client";

import { useState } from "react";
import { useDarkMode } from "@/context/DarkModeContext";
import { detailedProjects, certificates } from "@/data/resume";
import { Project, Certificate, isProject, isCertificate } from "@/types/projects";
import TabHeader from "@/components/projects/TabHeader";
import TabButtons from "@/components/projects/TabButtons";
import ProjectItem from "@/components/projects/ProjectItem";
import CertificateItem from "@/components/projects/CertificateItem";

const ProjectsPage = () => {
  const { isDarkMode } = useDarkMode();
  const [activeTab, setActiveTab] = useState<"projects" | "certificates">("projects");

  const displayedItems = activeTab === "projects" ? detailedProjects : certificates;

  return (
    <div
      className={`flex min-h-screen pb-8 overflow-x-hidden ${
        isDarkMode ? "text-white" : "text-black"
      }`}
    >
      <main className="flex-1 min-w-0 flex flex-col items-center pt-10 md:pt-16 lg:pt-14 px-4 md:px-6 lg:px-8 ml-0 md:ml-6 pb-20">
        <div className="w-full min-w-0 max-w-[700px] xl:max-w-[830px] transition-all duration-500 ease-in-out space-y-8 sm:space-y-10">
          <TabHeader activeTab={activeTab} isDarkMode={isDarkMode} />
          <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} isDarkMode={isDarkMode} />

          <div className={`grid grid-cols-1 ${activeTab === "projects" ? "md:grid-cols-2" : "md:grid-cols-3"} gap-6`}>
            {displayedItems.map((item: Project | Certificate) => {
              if (isProject(item)) {
                return (
                  <ProjectItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    technologies={item.technologies}
                    image={item.image}
                    link={item.link}
                    slug={item.slug}
                    isDarkMode={isDarkMode}
                  />
                );
              } else if (isCertificate(item)) {
                return (
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
                );
              }
              return null; 
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;