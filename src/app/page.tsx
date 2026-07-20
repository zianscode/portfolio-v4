"use client";
import IntroSection from "@/components/home/IntroSection";
import LatestProject from "@/components/home/LatestProject";
import ServicesSection from "@/components/home/ServicesSection";

export default function Home() {

  return (
    <div className="flex min-h-screen overflow-x-hidden">
      <main className="flex-1 min-w-0 flex flex-col items-center pt-10 md:pt-24 lg:pt-14 px-4 md:px-6 lg:px-8 ml-0 md:ml-0 lg:ml-6 pb-20">
        <div className="w-full min-w-0 max-w-[700px] xl:max-w-[830px] transition-all duration-500 ease-in-out space-y-8 sm:space-y-10">
          <IntroSection />
          <LatestProject />
          <ServicesSection />
        </div>
      </main>
    </div>
  );
}