import Link from "next/link";
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
  return (
    <Link
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-3 rounded-xl shadow-md border border-neutral-200 dark:border-neutral-700 transition-transform transform hover:scale-105 ${
        isDarkMode ? "bg-neutral-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-4 mb-1">
          <div className={`text-xl sm:text-2xl md:text-3xl ${item.color}`}>
            <Icon />
          </div>
          <h3 className="font-semibold text-sm sm:text-base md:text-lg">
            {item.title}
          </h3>
          <LevelBadge level={item.level} />
        </div>
        <FaLink className="text-xl text-gray-600 dark:text-gray-300" />
      </div>
    </Link>
  );
}

interface LevelBadgeProps {
  level: string;
}

function LevelBadge({ level }: LevelBadgeProps) {
  let badgeStyles = "";
  
  switch (level) {
    case "Beginner":
      badgeStyles = "bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800";
      break;
    case "Intermediate":
      badgeStyles = "bg-green-50 text-green-600 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800";
      break;
    case "Advanced":
      badgeStyles = "bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800";
      break;
    case "Expert":
      badgeStyles = "bg-purple-50 text-purple-600 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-800";
      break;
    default:
      badgeStyles = "bg-gray-50 text-gray-600 border-gray-200 dark:bg-gray-800/30 dark:text-gray-400 dark:border-gray-700";
  }
  
  return (
    <span className={`px-2.5 py-0.5 text-[10px] sm:text-xs font-bold tracking-wider uppercase rounded-md border shadow-sm ${badgeStyles}`}>
      {level}
    </span>
  );
}