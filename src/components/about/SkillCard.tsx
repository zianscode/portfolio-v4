import React from "react";

interface SkillCardProps {
  name: string;
  icon: React.ElementType;
  color: string;
  isMobile?: boolean;
}

const SkillCard = ({ name, icon: Icon, color, isMobile = false }: SkillCardProps) => {
  return (
    <div className={`flex items-center space-x-2 ${isMobile ? 'px-3 py-1.5' : 'px-4 py-2'} mx-1 rounded-full transition-all duration-300 dark:bg-neutral-900/40 dark:backdrop-blur-md dark:border dark:border-white/10 dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] bg-white/50 backdrop-blur-md border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.05)]`}>
      <div className={`${isMobile ? 'text-xl' : 'text-2xl'} ${color}`}>
        <Icon />
      </div>
      <div className={`font-medium ${isMobile ? 'text-sm' : 'text-base text-neutral-800 dark:text-neutral-200'}`}>
        {name}
      </div>
    </div>
  );
};

export default SkillCard;