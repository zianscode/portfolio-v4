"use client";
import { useDarkMode } from "@/context/DarkModeContext";
import IntroSection from "@/components/home/IntroSection";
import LatestProject from "@/components/home/LatestProject";
import ServicesSection from "@/components/home/ServicesSection";
import Breakline from "@/components/Breakline";

export default function Home() {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`flex min-h-screen ${
        isDarkMode ? "bg-[#0B0A0A]" : "bg-white"
      }`}
    >
      <main className="flex-1 flex justify-center pt-8 md:pt-16 lg:pt-14 px-4 md:px-6 lg:px-8 ml-0 md:ml-6">
        <div className="w-full max-w-[700px] xl:max-w-[830px] transition-all duration-500 ease-in-out">
          <IntroSection />
          <Breakline />

          {<LatestProject />}
          <Breakline />

          <ServicesSection />
          <Breakline />
        </div>
      </main>
    </div>
  );
}