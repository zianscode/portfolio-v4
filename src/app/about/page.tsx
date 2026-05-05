"use client";
import React, { useState, useEffect } from "react";
import { useDarkMode } from "@/context/DarkModeContext";
import { useMediaQuery } from "react-responsive";
import "@/styles/globals.css";
import IntroductionSection from "@/components/about/IntroductionSection";
import CareerSection from "@/components/about/CareerSection";
import SkillList from "@/components/about/SkillList";
// import YouTubeSection from "@/components/about/YouTubeSection";
import TikTokSection from "@/components/about/TikTokSection";
export default function AboutPage() {
  const { isDarkMode } = useDarkMode();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("tiktok_token");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <div
      className={`flex min-h-screen ${
        isDarkMode ? "text-white" : "text-black"
      }`}
    >
      <main className="flex-1 flex justify-center pt-10 md:pt-16 lg:pt-14 px-4 md:px-6 lg:px-8 ml-0 md:ml-6">
        <div className="w-full max-w-[700px] xl:max-w-[830px] transition-all duration-500 ease-in-out">
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