import React, { useState, useEffect } from "react";
import SkillCard from "@/components/about/SkillCard";
import Marquee from "@/components/ui/Marquee";
import { skillItems } from "@/data/skills";
import { FaLaptopCode } from "react-icons/fa";
import useMediaQuery from "@/hooks/useMediaQuery";

interface SkillListProps {
  isDarkMode?: boolean;
  direction?: "left" | "right";
  isMobile: boolean;
}

const SkillList = ({ direction = "left", isDarkMode = false }: SkillListProps) => {
  const isSmallScreen = useMediaQuery("(max-width: 640px)");
  const isMediumScreen = useMediaQuery("(max-width: 768px)");
  const [skills, setSkills] = useState(skillItems);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setSkills([...skillItems].sort(() => Math.random() - 0.5));
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

      <div className="flex flex-col gap-2.5 sm:gap-3 w-full">
        {Array.from({ length: 2 }, (_, index) => {
          // Use the skills state which is shuffled in useEffect, 
          const slider = skills; 
          const marqueeDirection = index % 2 === 0 ? direction : direction === "left" ? "right" : "left";

          const duplicatedSlider = [...slider, ...slider];

          return (
            <Marquee
              key={index}
              direction={marqueeDirection}
              speed={speed}
              pauseOnHover={true}
              className="w-full"
            >
              <div className="flex items-center gap-2.5 sm:gap-3 pr-2.5 sm:pr-3">
                {duplicatedSlider.map((skill, i) => (
                  <SkillCard
                    key={i}
                    name={skill.name}
                    icon={skill.icon}
                    color={skill.color}
                    isMobile={isSmallScreen}
                  />
                ))}
              </div>
            </Marquee>
          );
        })}
      </div>
    </section>
  );
};

export default SkillList;