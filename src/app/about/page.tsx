"use client";
import React, { useState, useEffect } from "react";
import { useDarkMode } from "@/context/DarkModeContext";
import useMediaQuery from "@/hooks/useMediaQuery";
import "@/styles/globals.css";
import IntroductionSection from "@/components/about/IntroductionSection";
import CareerSection from "@/components/about/CareerSection";
import SkillList from "@/components/about/SkillList";
// import YouTubeSection from "@/components/about/YouTubeSection";
import TikTokSection from "@/components/about/TikTokSection";
export default function AboutPage() {
  const { isDarkMode } = useDarkMode();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("tiktok_token");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <div
      className={`flex min-h-screen overflow-x-hidden ${
        isDarkMode ? "text-white" : "text-black"
      }`}
    >
      <main className="flex-1 min-w-0 flex flex-col items-center pt-10 md:pt-16 lg:pt-14 px-4 md:px-6 lg:px-8 ml-0 md:ml-6 pb-20">
        <div className="w-full min-w-0 max-w-[700px] xl:max-w-[830px] transition-all duration-500 ease-in-out space-y-8 sm:space-y-10">
          <IntroductionSection isDarkMode={isDarkMode} />
          <CareerSection isDarkMode={isDarkMode} />
          <SkillList isDarkMode={isDarkMode}  isMobile={isMobile} />
          <TikTokSection 
            isDarkMode={isDarkMode} 
            isAuthenticated={isAuthenticated} 
          />
        </div>
      </main>
    </div>
  );
}