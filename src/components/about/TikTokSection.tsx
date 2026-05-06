import React from "react";
import { FaTiktok as FaTiktokIcon } from "react-icons/fa";
// import { TikTokAuth } from "@/components/about/TikTokAuth";
// import { TikTokProfile } from "@/components/about/TikTokProfile";
interface TikTokSectionProps {
    isDarkMode: boolean;
    isAuthenticated: boolean;
  }
  const TikTokSection = ({ 
    isDarkMode, 
    // isAuthenticated 
  }: TikTokSectionProps) => {
    return (
    <section>
      <div>
        <div className="flex items-center gap-2">
          <FaTiktokIcon
            className={`text-base sm:text-xl ${
              isDarkMode ? "text-stone-200" : "text-stone-800"
            }`}
          />
          <h2
            className={`text-base sm:text-xl font-bold ${
              isDarkMode ? "text-stone-200" : "text-stone-800"
            }`}
          >
            Tiktok
          </h2>
        </div>
        <p
          className={`mt-1 sm:mt-2 text-[13px] sm:text-[15px] leading-relaxed ${
            isDarkMode ? "text-stone-300" : "text-stone-700"
          }`}
        >
          Find me on Tiktok
        </p>
      </div>
      {/* <div className="container mx-auto p-4">
        {!isAuthenticated ? <TikTokAuth /> : <TikTokProfile />}
      </div> */}
      <div className="mt-2 flex justify-between items-center">
        <a
          href="https://www.tiktok.com/@zfosix"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-sm ${
            isDarkMode
              ? "text-stone-300 hover:text-stone-100"
              : "text-blue-600 hover:text-blue-800"
          }`}
        >
          @zfosix
        </a>
        <a
          href="https://www.instagram.com/zfosix/"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-sm ${
            isDarkMode
              ? "text-stone-300 hover:text-stone-100"
              : "text-blue-600 hover:text-blue-800"
          }`}
        >
          zfosix
        </a>
      </div>
    </section>
  );
};

export default TikTokSection;