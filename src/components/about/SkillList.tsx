import React, { useState, useEffect } from "react";
import SkillCard from "./SkillCard";
import MarqueeElement from "@/components/MarqueeElement";
import { SkillList } from "@/data/resume";
import { FaLaptopCode } from "react-icons/fa";
import useMediaQuery from "@/hooks/useMediaQuery";

interface SkillsListProps {
  isDarkMode?: boolean;
  direction?: "left" | "right";
  isMobile: boolean;
}

const SkillsList = ({ direction = "left", isDarkMode = false }: SkillsListProps) => {
  const isSmallScreen = useMediaQuery("(max-width: 640px)");
  const isMediumScreen = useMediaQuery("(max-width: 768px)");
  const [skills, setSkills] = useState(SkillList);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setSkills([...SkillList].sort(() => Math.random() - 0.5));
  }, []);

  if (!mounted) {
    return (
      <section className="flex flex-col space-y-4 w-full">
        <div className="flex items-center space-x-3">
          <FaLaptopCode
            className={`text-2xl ${
              isDarkMode ? "text-stone-200" : "text-gray-800"
            }`}
          />
          <h3
            className={`text-xl font-bold ${
              isDarkMode ? "text-stone-200" : "text-gray-800"
            }`}
          >
            Skills
          </h3>
        </div>
        <div className="h-32" />
      </section>
    );
  }

  const getMarqueeConfig = () => {
    if (isSmallScreen) {
      return { rows: 2, speed: 35 };
    } else if (isMediumScreen) {
      return { rows: 3, speed: 30 };
    }
    return { rows: 4, speed: 25 };
  };

  const { speed } = getMarqueeConfig();

  return (
    <section className="flex flex-col space-y-4 w-full">
      <div className="flex items-center space-x-3">
        <FaLaptopCode
          className={`text-2xl ${
            isDarkMode ? "text-stone-200" : "text-gray-800"
          }`}
        />
        <h3
          className={`text-xl font-bold ${
            isDarkMode ? "text-stone-200" : "text-gray-800"
          }`}
        >
          Skills
        </h3>
      </div>
      <div className="flex items-center space-x-2 mt-2 sm:mt-4">
        <p
          className={`text-[15px] leading-relaxed mb-4 ${
            isDarkMode ? "text-stone-400" : "text-gray-600"
          }`}
        >
          My developed skills
        </p>
      </div>

      <div className="grid grid-cols-1 gap-1 sm:gap-3 md:gap-4 w-full">
        {Array.from({ length: 2 }, (_, index) => {
          // Use the skills state which is shuffled in useEffect, 
          const slider = skills; 
          const marqueeDirection = index % 2 === 0 ? direction : direction === "left" ? "right" : "left";

          const duplicatedSlider = [...slider, ...slider];

          return (
            <MarqueeElement
              key={index}
              direction={marqueeDirection}
              speed={speed}
              pauseOnHover={true}
              className="w-full py-1"
            >
              <div className="flex flex-nowrap" style={{ gap: '0.1rem' }}>
                {duplicatedSlider.map((skill, i) => (
                  <div 
                    className="flex-none" 
                    key={i}
                    style={{ 
                      marginRight: i === duplicatedSlider.length - 1 ? '0' : '0.1rem'
                    }}
                  >
                    <SkillCard
                      name={skill.name}
                      icon={skill.icon}
                      color={skill.color}
                      isMobile={isSmallScreen}
                    />
                  </div>
                ))}
              </div>
            </MarqueeElement>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsList;