"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useDarkMode } from "@/context/DarkModeContext";
import RoadmapHeader from "@/components/roadmap/RoadmapHeader";
import CategorySelector from "@/components/roadmap/CategorySelector";
import RoadmapItems from "@/components/roadmap/RoadmapItems";
import { skillCategories } from "@/data/resume";

type CategoryKey = keyof typeof skillCategories;

export default function RoadmapPage() {
  const { isDarkMode } = useDarkMode();
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("frontend");
  
  return (
    <div
      className={`flex min-h-screen pb-8 ${
        isDarkMode ? "text-white" : "text-black"
      }`}
    >
      <main className="flex-1 flex justify-center pt-10 md:pt-16 lg:pt-14 px-4 md:px-6 lg:px-8 ml-0 md:ml-6">
        <div className="w-full max-w-[700px] xl:max-w-[830px] transition-all duration-500 ease-in-out">
          <RoadmapHeader isDarkMode={isDarkMode} />

          <div className="space-y-6">
            <CategorySelector 
              activeCategory={activeCategory} 
              setActiveCategory={setActiveCategory} 
              isDarkMode={isDarkMode}
            />
            
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <RoadmapItems 
                category={activeCategory} 
                isDarkMode={isDarkMode} 
              />
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}