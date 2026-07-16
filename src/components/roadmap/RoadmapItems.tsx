import Link from "next/link";
import { useState } from "react";
import { FaLink } from "react-icons/fa";
import { skillCategories } from "@/data/resume";

type CategoryKey = keyof typeof skillCategories;

interface RoadmapItemsProps {
  category: CategoryKey;
  isDarkMode: boolean;
}

export default function RoadmapItems({ category, isDarkMode }: RoadmapItemsProps) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {skillCategories[category]?.map((item, index) => (
        <RoadmapItem 
          key={index}
          item={item}
          isDarkMode={isDarkMode}
        />
      ))}
    </div>
  );
}

interface RoadmapItemProps {
  item: {
    icon: React.ElementType;
    color: string;
    title: string;
    level: string;
    link: string;
  };
  isDarkMode: boolean;
}

function RoadmapItem({ item, isDarkMode }: RoadmapItemProps) {
  const Icon = item.icon;
  const [isHovered, setIsHovered] = useState(false);
  
  // Extract hex color from item.color class if it is like text-[#123456]
  const hexColor = item.color.match(/#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/)?.[0] || 
                   (item.color.includes('blue') ? '#3b82f6' : 
                    item.color.includes('amber') ? '#f59e0b' : 
                    item.color.includes('green') ? '#10b981' : 
                    item.color.includes('purple') ? '#8b5cf6' : '#a3a3a3');

  return (
    <Link
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group py-3 px-6 rounded-full border transition-all duration-300 ease-out ${
        isDarkMode 
          ? "bg-neutral-900/75 border-neutral-800/80 text-white hover:bg-neutral-900/90" 
          : "bg-white/75 border-neutral-200/80 text-gray-800 hover:bg-white/90"
      }`}
      style={{
        borderColor: isHovered ? hexColor : undefined,
        boxShadow: isHovered 
          ? (isDarkMode 
              ? `0 12px 24px -10px ${hexColor}25, 0 1px 3px ${hexColor}10` 
              : `0 12px 24px -10px ${hexColor}15, 0 1px 3px ${hexColor}05`)
          : undefined,
        transform: isHovered ? 'translateY(-3px)' : 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div 
            className={`text-xl sm:text-2xl md:text-3xl transition-transform duration-300 ${item.color} ${
              isHovered ? 'scale-110' : ''
            }`}
          >
            <Icon />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold text-sm sm:text-base md:text-lg tracking-tight">
              {item.title}
            </h3>
            <LevelBadge level={item.level} />
          </div>
        </div>
        <FaLink 
          className={`text-sm sm:text-base text-neutral-400 dark:text-neutral-500 transition-all duration-300 ${
            isHovered 
              ? 'text-neutral-800 dark:text-white scale-110 translate-x-0.5 -translate-y-0.5' 
              : ''
          }`} 
        />
      </div>
    </Link>
  );
}

interface LevelBadgeProps {
  level: string;
}

function LevelBadge({ level }: LevelBadgeProps) {
  let dotColor = "bg-neutral-400";
  let badgeStyles = "bg-neutral-50/50 text-neutral-600 border-neutral-200/80 dark:bg-neutral-800/10 dark:text-neutral-400 dark:border-neutral-800/50";
  
  switch (level) {
    case "Beginner":
      dotColor = "bg-blue-500 animate-pulse";
      badgeStyles = "bg-blue-50/50 text-blue-600 border-blue-200/80 dark:bg-blue-500/5 dark:text-blue-400 dark:border-blue-500/20";
      break;
    case "Intermediate":
      dotColor = "bg-emerald-500 animate-pulse";
      badgeStyles = "bg-emerald-50/50 text-emerald-600 border-emerald-200/80 dark:bg-emerald-500/5 dark:text-emerald-400 dark:border-emerald-500/20";
      break;
    case "Advanced":
      dotColor = "bg-amber-500 animate-pulse";
      badgeStyles = "bg-amber-50/50 text-amber-600 border-amber-200/80 dark:bg-amber-500/5 dark:text-amber-400 dark:border-amber-500/20";
      break;
    case "Expert":
      dotColor = "bg-purple-500 animate-pulse";
      badgeStyles = "bg-purple-50/50 text-purple-600 border-purple-200/80 dark:bg-purple-500/5 dark:text-purple-400 dark:border-purple-500/20";
      break;
  }
  
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase rounded-full border backdrop-blur-xs transition-colors duration-300 ${badgeStyles}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
      {level}
    </span>
  );
}