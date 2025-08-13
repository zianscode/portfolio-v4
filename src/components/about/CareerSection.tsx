import React from "react";
import Image from "next/image";
import {
  FaBriefcase,
  FaDownload,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
// Import the career data with proper type
import { careerData } from "@/data/resume";
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
      className={`${isDarkMode ? "border-stone-700" : "border-stone-300"} py-2`}
    >
      <div className="flex items-center justify-between mb-6">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center space-x-3"
        >
          <FaBriefcase
            className={`text-2xl ${
              isDarkMode ? "text-stone-200" : "text-gray-800"
            }`}
          />
          <h3
            className={`text-xl font-bold ${
              isDarkMode ? "text-stone-200" : "text-gray-800"
            }`}
          >
            Career
          </h3>
        </motion.div>

        <motion.a
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          href="https://drive.google.com/file/d/1l1Ivw1WQ5TKdC3eYSY82a-LJrY_cL7bJ/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-sm flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
            isDarkMode
              ? "bg-neutral-800 text-stone-200 hover:bg-neutral-700"
              : "bg-neutral-100 text-blue-600 hover:bg-neutral-200"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaDownload size={14} />
          <span>Download Resume</span>
        </motion.a>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className={`text-sm md:text-base mb-6 ${
          isDarkMode ? "text-stone-400" : "text-gray-600"
        }`}
      >
        My professional career journey
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {careerData.map((career, index) => (
          <motion.div
            key={career.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * (index + 1) }}
          >
            <CareerCard 
              career={career}
              isDarkMode={isDarkMode}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

// Career Card Component with proper typing
const CareerCard = ({ career, isDarkMode }: CareerCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`w-full relative overflow-hidden rounded-2xl transition-all hover:shadow-lg ${
        isDarkMode
          ? "bg-neutral-800 hover:bg-neutral-700 border border-neutral-700"
          : "bg-white hover:bg-neutral-50 border border-neutral-200"
      }`}
    >
      <div className="p-6">
        <div className="flex items-start">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className={`relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 ${
              isDarkMode ? "border-neutral-700" : "border-neutral-200"
            }`}
          >
            <Image
              alt={career.company}
              src={career.logo}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

          <div className="ml-4">
            <motion.h4
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={`text-lg font-semibold ${
                isDarkMode ? "text-stone-100" : "text-gray-800"
              }`}
            >
              {career.company}
            </motion.h4>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className={`flex items-center text-sm mt-2 ${
                isDarkMode ? "text-stone-300" : "text-gray-700"
              }`}
            >
              <span className="font-medium">
                {career.position}
              </span>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="mt-4 pt-4 border-t border-dashed flex flex-col space-y-2 text-sm"
        >
          <div
            className={`flex items-center ${
              isDarkMode ? "text-stone-400" : "text-gray-600"
            }`}
          >
            <FaMapMarkerAlt className="mr-2 text-xs" />
            <span>{career.location}</span>
          </div>
          <div
            className={`flex items-center ${
              isDarkMode ? "text-stone-400" : "text-gray-600"
            }`}
          >
            <FaCalendarAlt className="mr-2 text-xs" />
            <span>{career.startDate} - {career.endDate}</span>
            <span className="mx-2">•</span>
            <span className="font-medium">{career.duration}</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CareerSection;