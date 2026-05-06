import React from "react";
import Image from "next/image";
import {
  FaBriefcase,
  FaDownload,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaGraduationCap,
} from "react-icons/fa";
import { workExperienceData, educationData } from "@/data/resume";
import {
  CareerSectionProps,
  CareerCardProps,
} from "@/types/career";
import { motion } from "framer-motion";

const CareerSection = ({ isDarkMode }: CareerSectionProps) => {
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
                : "bg-white/50 backdrop-blur-md border border-white/60 text-blue-600 hover:bg-white/70 hover:-translate-y-0.5"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload size={12} />
            <span>Resume</span>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {workExperienceData.map((career, index) => (
            <CareerCard 
              key={career.id}
              career={career}
              isDarkMode={isDarkMode}
              index={index}
            />
          ))}
        </div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {educationData.map((edu, index) => (
            <CareerCard 
              key={edu.id}
              career={edu}
              isDarkMode={isDarkMode}
              index={index}
            />
          ))}
        </div>
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
          : "bg-white/50 backdrop-blur-md border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:bg-white/70 hover:-translate-y-1"
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