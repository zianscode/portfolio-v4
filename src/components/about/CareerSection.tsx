import React from "react";
import Image from "next/image";
import {
  FaBriefcase,
  FaDownload,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaRocket,
  FaStar,
  FaTrophy,
  FaLightbulb,
  FaCode,
} from "react-icons/fa";
import { workExperienceData, educationData } from "@/data/resume";
import {
  CareerSectionProps,
  CareerCardProps,
  Career,
} from "@/types/career";
import { motion } from "framer-motion";

const CareerSection = ({ isDarkMode }: CareerSectionProps) => {
  const getYear = (dateString: string) => {
    if (!dateString) return "";
    const match = dateString.match(/\d{4}/);
    return match ? match[0] : "";
  };

  const getIcon = (index: number) => {
    const icons = [
      <FaRocket key="rocket" className="text-orange-500" />,
      <FaStar key="star" className="text-yellow-500" />,
      <FaTrophy key="trophy" className="text-yellow-400" />,
      <FaLightbulb key="lightbulb" className="text-yellow-300" />,
      <FaCode key="code" className="text-blue-500" />
    ];
    return icons[index % icons.length];
  };

  const renderLayout = (data: Career[]) => {
    if (data.length === 1) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <CareerCard 
            career={data[0]}
            isDarkMode={isDarkMode}
            index={0}
          />
        </div>
      );
    }

    return (
      <div className="relative mt-4 md:mt-8">
        <div className="space-y-8 md:space-y-12">
          {data.map((item, index) => {
            const isLeft = index % 2 === 0;
            const year = getYear(item.startDate);
            
            return (
              <div key={item.id} className="relative flex flex-col md:flex-row items-center justify-between">
                {/* Mobile Cable Line Segment */}
                <div className="md:hidden absolute left-[21px] w-[6px] h-full z-0">
                  {/* Line going UP to previous row */}
                  {index !== 0 && (
                    <div className={`absolute top-0 h-[32px] w-full ${
                      isDarkMode 
                        ? "bg-neutral-800 shadow-[inset_-2px_0_3px_rgba(255,255,255,0.05),inset_2px_0_3px_rgba(0,0,0,0.4)] border-x border-white/5" 
                        : "bg-stone-300 shadow-[inset_-2px_0_3px_rgba(0,0,0,0.1),inset_2px_0_3px_rgba(255,255,255,0.8)] border-x border-black/5"
                    }`} />
                  )}
                  {/* Line going DOWN to next row */}
                  {index !== data.length - 1 && (
                    <div className={`absolute top-[32px] bottom-[-32px] w-full ${
                      isDarkMode 
                        ? "bg-neutral-800 shadow-[inset_-2px_0_3px_rgba(255,255,255,0.05),inset_2px_0_3_rgba(0,0,0,0.4)] border-x border-white/5" 
                        : "bg-stone-300 shadow-[inset_-2px_0_3px_rgba(0,0,0,0.1),inset_2px_0_3px_rgba(255,255,255,0.8)] border-x border-black/5"
                    }`} />
                  )}
                </div>

                {/* Desktop Cable Line Segment */}
                <div className="hidden md:block absolute left-1/2 -ml-[3px] w-[6px] h-full z-0">
                  {/* Line going UP to previous row */}
                  {index !== 0 && (
                    <div className={`absolute top-0 bottom-1/2 w-full ${
                      isDarkMode 
                        ? "bg-neutral-800 shadow-[inset_-2px_0_3px_rgba(255,255,255,0.05),inset_2px_0_3px_rgba(0,0,0,0.4)] border-x border-white/5" 
                        : "bg-stone-300 shadow-[inset_-2px_0_3px_rgba(0,0,0,0.1),inset_2px_0_3_rgba(255,255,255,0.8)] border-x border-black/5"
                    }`} />
                  )}
                  {/* Line going DOWN to next row */}
                  {index !== data.length - 1 && (
                    <div className={`absolute top-1/2 bottom-[-48px] w-full ${
                      isDarkMode 
                        ? "bg-neutral-800 shadow-[inset_-2px_0_3px_rgba(255,255,255,0.05),inset_2px_0_3px_rgba(0,0,0,0.4)] border-x border-white/5" 
                        : "bg-stone-300 shadow-[inset_-2px_0_3px_rgba(0,0,0,0.1),inset_2px_0_3_rgba(255,255,255,0.8)] border-x border-black/5"
                    }`} />
                  )}
                </div>
                
                {/* Mobile Connector Node */}
                <div className={`md:hidden absolute left-[15px] top-[32px] w-4 h-6 rounded-md flex items-center justify-center border-y-2 z-10 ${
                  isDarkMode ? "bg-stone-900 border-stone-700 shadow-lg" : "bg-stone-100 border-stone-300 shadow-sm"
                }`}>
                  <div className={`w-1.5 h-1.5 rounded-full animate-pulse bg-gradient-to-tr from-blue-500 to-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]`} />
                </div>
                
                {/* Desktop Connector Node */}
                <div className={`hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-8 rounded-lg items-center justify-center border-y-2 z-10 ${
                  isDarkMode ? "bg-stone-900 border-stone-700 shadow-xl" : "bg-stone-100 border-stone-400 shadow-md"
                }`}>
                  <div className={`w-2 h-2 rounded-full animate-pulse bg-gradient-to-tr from-blue-600 via-emerald-400 to-cyan-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]`} />
                </div>
                
                {/* Main Card */}
                <div className={`w-full md:w-[46%] pl-14 pr-2 md:pl-0 md:pr-0 relative ${isLeft ? 'md:order-1' : 'md:order-3'}`}>
                  {/* Mobile Floating Badge */}
                  <div className={`md:hidden absolute right-4 -top-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full shadow-md border z-10 ${isDarkMode ? "bg-neutral-800 border-neutral-700 text-stone-200" : "bg-white border-stone-200 text-stone-700"}`}>
                    <span className="text-[12px]">{getIcon(index)}</span>
                    <span className="text-[10px] font-bold font-poppins">{year}</span>
                  </div>

                  <CareerCard 
                    career={item}
                    isDarkMode={isDarkMode}
                    index={index}
                  />
                </div>
                
                {/* Desktop Badge (Speech Bubble) sitting opposite the card */}
                <div className={`hidden md:flex w-[46%] items-center ${isLeft ? 'md:order-3 justify-start pl-6' : 'md:order-1 justify-end pr-6'}`}>
                  <div className={`relative flex items-center gap-2 px-4 py-2 rounded-xl shadow-lg border transition-transform hover:-translate-y-1 ${isDarkMode ? "bg-neutral-800 border-neutral-700 text-stone-200" : "bg-white border-stone-200 text-stone-700"}`}>
                    
                    {/* CSS Triangle (Arrow) pointing to the timeline */}
                    {isLeft ? (
                      // Card is on Left, Badge is on Right -> Arrow points Left
                      <div className={`absolute top-1/2 -translate-y-1/2 -left-[6px] border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[6px] ${isDarkMode ? "border-r-neutral-700" : "border-r-stone-200"}`}>
                        <div className={`absolute -top-[5px] -right-[7px] border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[5px] ${isDarkMode ? "border-r-neutral-800" : "border-r-white"}`} />
                      </div>
                    ) : (
                      // Card is on Right, Badge is on Left -> Arrow points Right
                      <div className={`absolute top-1/2 -translate-y-1/2 -right-[6px] border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] ${isDarkMode ? "border-l-neutral-700" : "border-l-stone-200"}`}>
                        <div className={`absolute -top-[5px] -left-[7px] border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[5px] ${isDarkMode ? "border-l-neutral-800" : "border-l-white"}`} />
                      </div>
                    )}

                    <span className="text-[16px]">{getIcon(index)}</span>
                    <span className="text-sm font-bold font-poppins">{year}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-10"
    >
      {/* Work Experience Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <FaBriefcase
              className={`text-base sm:text-xl ${
                isDarkMode ? "text-stone-200" : "text-stone-800"
              }`}
            />
            <h3
              className={`text-base sm:text-xl font-bold ${
                isDarkMode ? "text-stone-200" : "text-stone-800"
              }`}
            >
              Work Experience
            </h3>
          </motion.div>

          <motion.a
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            href="https://drive.google.com/file/d/11XkR7vfboVs5C4YqMHnUYyt4yZ5ObhYy/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xs flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.05)] ${
              isDarkMode
                ? "bg-neutral-900/40 backdrop-blur-md border border-white/10 text-stone-200 hover:bg-neutral-800/50 hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                : "bg-white/50 backdrop-blur-md border border-neutral-200/80 text-blue-600 hover:bg-white/70 hover:-translate-y-0.5"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload size={12} />
            <span>Resume</span>
          </motion.a>
        </div>

        {renderLayout(workExperienceData)}
      </div>

      {/* Education Section */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <FaGraduationCap
            className={`text-base sm:text-xl ${
              isDarkMode ? "text-stone-200" : "text-stone-800"
            }`}
          />
          <h3
            className={`text-base sm:text-xl font-bold ${
              isDarkMode ? "text-stone-200" : "text-stone-800"
            }`}
          >
            Education
          </h3>
        </div>

        {renderLayout(educationData)}
      </div>
    </motion.section>
  );
};

// Career Card Component
const CareerCard = ({ career, isDarkMode, index }: CareerCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index }}
      whileHover={{ y: -2 }}
      className={`w-full relative overflow-hidden rounded-2xl transition-all duration-300 h-full flex flex-col ${
        isDarkMode
          ? "bg-neutral-900/40 backdrop-blur-md border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:bg-neutral-800/50 hover:-translate-y-1"
          : "bg-white/50 backdrop-blur-md border border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:bg-white/70 hover:-translate-y-1"
      }`}
    >
      <div className="p-4 flex flex-col h-full">
        <div className="flex items-center space-x-4 mb-2.5">
          <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <Image
              alt={career.company}
              src={career.logo}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>

          <div className="min-w-0 flex-1">
            <h4 className={`text-base font-bold font-poppins ${
              isDarkMode ? "text-stone-100" : "text-gray-900"
            }`}>
              {career.company}
            </h4>
            <p className={`text-[14px] font-semibold mt-1 font-poppins ${
              isDarkMode ? "text-stone-300" : "text-gray-700"
            }`}>
              {career.position}
            </p>
            
            {career.tags && (
              <div className="flex flex-wrap gap-1 mt-1">
                {career.tags.map((tag: string) => (
                  <span 
                    key={tag}
                    className={`px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider ${
                      isDarkMode 
                        ? "bg-white/10 text-stone-300 border border-white/5" 
                        : "bg-black/5 text-gray-600 border border-black/5"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-2.5 flex flex-col space-y-1">
          <div className={`flex items-center text-[13px] font-poppins ${
            isDarkMode ? "text-stone-500" : "text-gray-500"
          }`}>
            <FaMapMarkerAlt className="mr-2 opacity-70" />
            <span>{career.location}</span>
          </div>
          <div className={`flex items-center text-[13px] font-poppins ${
            isDarkMode ? "text-stone-500" : "text-gray-500"
          }`}>
            <FaCalendarAlt className="mr-2 opacity-70" />
            <span>{career.startDate} - {career.endDate}</span>
            <span className="mx-2 opacity-30">|</span>
            <span className="font-semibold">{career.duration}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CareerSection;