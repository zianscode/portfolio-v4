import { skillCategories } from "@/data/resume";

type CategoryKey = keyof typeof skillCategories;

interface CategorySelectorProps {
  activeCategory: CategoryKey;
  setActiveCategory: (category: CategoryKey) => void;
  isDarkMode: boolean;
}

export default function CategorySelector({ 
  activeCategory, 
  setActiveCategory,
  isDarkMode
}: CategorySelectorProps) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-4 mb-4">
      {(Object.keys(skillCategories) as CategoryKey[]).map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-4 py-2 rounded-full transition-all text-sm sm:text-base capitalize font-medium ${
            activeCategory === category
              ? "bg-neutral-900 text-white dark:bg-white dark:text-black shadow-lg"
              : isDarkMode
                ? "bg-neutral-900 text-neutral-400 hover:bg-neutral-800 border border-neutral-800"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 border border-neutral-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}