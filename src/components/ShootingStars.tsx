"use client";

import React from "react";

function Classic5PointStar({ sizeClass }: { sizeClass: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      className={`${sizeClass} fill-current text-neutral-900/60 dark:text-white/70 shrink-0 -ml-1 filter drop-shadow-[0_0_4px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]`}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function ShootingStars() {
  return (
    <div className="hidden md:block fixed inset-0 pointer-events-none overflow-hidden z-[1]">
      <div 
        className="absolute top-[-20px] right-[10%] shooting-star-1"
        style={{ willChange: "transform, opacity" }}
      >
        <div className="relative rotate-[135deg] flex items-center">
          <div className="absolute right-2 h-[8px] w-[160px] rounded-full blur-[6px] bg-gradient-to-r from-transparent via-neutral-950/10 to-neutral-950/25 dark:via-white/10 dark:to-white/30" />
          <div className="h-[1px] w-[110px] rounded-full bg-gradient-to-r from-transparent via-neutral-950/25 to-neutral-950/60 dark:via-white/30 dark:to-white/70" />
          <Classic5PointStar sizeClass="w-3 h-3" />
        </div>
      </div>

      <div 
        className="absolute top-[8%] right-[-10px] shooting-star-2"
        style={{ willChange: "transform, opacity" }}
      >
        <div className="relative rotate-[135deg] flex items-center">
          <div className="absolute right-2 h-[10px] w-[180px] rounded-full blur-[7px] bg-gradient-to-r from-transparent via-neutral-950/10 to-neutral-950/25 dark:via-white/10 dark:to-white/30" />
          <div className="h-[1px] w-[125px] rounded-full bg-gradient-to-r from-transparent via-neutral-950/25 to-neutral-950/60 dark:via-white/30 dark:to-white/70" />
          <Classic5PointStar sizeClass="w-3.5 h-3.5" />
        </div>
      </div>

      <div 
        className="absolute top-[22%] right-[28%] shooting-star-3"
        style={{ willChange: "transform, opacity" }}
      >
        <div className="relative rotate-[135deg] flex items-center">
          <div className="absolute right-2 h-[7px] w-[130px] rounded-full blur-[5px] bg-gradient-to-r from-transparent via-neutral-950/10 to-neutral-950/25 dark:via-white/10 dark:to-white/30" />
          <div className="h-[1px] w-[85px] rounded-full bg-gradient-to-r from-transparent via-neutral-950/25 to-neutral-950/60 dark:via-white/30 dark:to-white/70" />
          <Classic5PointStar sizeClass="w-2.5 h-2.5" />
        </div>
      </div>
    </div>
  );
}
