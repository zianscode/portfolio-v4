"use client";

import React from "react";

function RealStarHead({ sizeClass }: { sizeClass: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      className={`${sizeClass} fill-current text-neutral-950 dark:text-white shrink-0 -ml-1.5 filter drop-shadow-[0_0_8px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_0_10px_rgba(255,255,255,1)]`}
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
}

export default function ShootingStars() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
      {/* Shooting Star 1 */}
      <div 
        className="absolute top-[-20px] right-[10%] shooting-star-1"
        style={{ willChange: "transform, opacity" }}
      >
        <div className="relative rotate-[135deg] flex items-center">
          {/* Fading Misty Shadow Trail */}
          <div className="absolute right-2 h-[6px] w-[150px] rounded-full blur-[4px] bg-gradient-to-r from-transparent via-neutral-950/15 to-neutral-950/45 dark:via-white/20 dark:to-white/55" />
          {/* Core Fading Streak */}
          <div className="h-[1.5px] w-[120px] rounded-full bg-gradient-to-r from-transparent via-neutral-950/40 to-neutral-950/90 dark:via-white/40 dark:to-white/90 shadow-[0_0_6px_rgba(0,0,0,0.2)] dark:shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
          {/* Real 4-point Star Head */}
          <RealStarHead sizeClass="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Shooting Star 2 */}
      <div 
        className="absolute top-[8%] right-[-10px] shooting-star-2"
        style={{ willChange: "transform, opacity" }}
      >
        <div className="relative rotate-[135deg] flex items-center">
          {/* Fading Misty Shadow Trail */}
          <div className="absolute right-2 h-[7px] w-[170px] rounded-full blur-[5px] bg-gradient-to-r from-transparent via-neutral-950/15 to-neutral-950/45 dark:via-white/20 dark:to-white/55" />
          {/* Core Fading Streak */}
          <div className="h-[1.5px] w-[135px] rounded-full bg-gradient-to-r from-transparent via-neutral-950/40 to-neutral-950/90 dark:via-white/40 dark:to-white/90 shadow-[0_0_6px_rgba(0,0,0,0.2)] dark:shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
          {/* Real 4-point Star Head */}
          <RealStarHead sizeClass="w-4 h-4" />
        </div>
      </div>

      {/* Shooting Star 3 */}
      <div 
        className="absolute top-[22%] right-[28%] shooting-star-3"
        style={{ willChange: "transform, opacity" }}
      >
        <div className="relative rotate-[135deg] flex items-center">
          {/* Fading Misty Shadow Trail */}
          <div className="absolute right-2 h-[5px] w-[120px] rounded-full blur-[3px] bg-gradient-to-r from-transparent via-neutral-950/15 to-neutral-950/45 dark:via-white/20 dark:to-white/55" />
          {/* Core Fading Streak */}
          <div className="h-[1.5px] w-[95px] rounded-full bg-gradient-to-r from-transparent via-neutral-950/40 to-neutral-950/90 dark:via-white/40 dark:to-white/90 shadow-[0_0_6px_rgba(0,0,0,0.2)] dark:shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
          {/* Real 4-point Star Head */}
          <RealStarHead sizeClass="w-3 h-3" />
        </div>
      </div>
    </div>
  );
}
