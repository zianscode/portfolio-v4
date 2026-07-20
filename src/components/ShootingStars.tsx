"use client";

import React from "react";
import { useDarkMode } from "@/context/DarkModeContext";

export default function ShootingStars() {
  const { isDarkMode, mounted } = useDarkMode();

  if (!mounted) return null;

  const isDark = isDarkMode;

  const headColor = isDark 
    ? "bg-white shadow-[0_0_12px_3px_rgba(255,255,255,1)]" 
    : "bg-neutral-950 shadow-[0_0_12px_3px_rgba(0,0,0,0.4)]";

  const streakColor = isDark 
    ? "bg-gradient-to-r from-transparent via-white/70 to-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" 
    : "bg-gradient-to-r from-transparent via-neutral-950/70 to-neutral-950 shadow-[0_0_8px_rgba(0,0,0,0.3)]";

  const trailColor = isDark 
    ? "bg-gradient-to-r from-transparent via-white/25 to-white/60 blur-[3px]" 
    : "bg-gradient-to-r from-transparent via-neutral-950/20 to-neutral-950/50 blur-[3px]";

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
      {/* Shooting Star 1 */}
      <div 
        className="absolute top-[-20px] right-[10%] shooting-star-1"
        style={{ willChange: "transform, opacity" }}
      >
        <div className="relative rotate-[135deg] flex items-center">
          <div className={`absolute right-0 h-[4px] w-[140px] rounded-full ${trailColor}`} />
          <div className={`h-[1.5px] w-[120px] rounded-full ${streakColor}`} />
          <div className={`w-1.5 h-1.5 rounded-full -ml-1 shrink-0 ${headColor}`} />
        </div>
      </div>

      {/* Shooting Star 2 */}
      <div 
        className="absolute top-[8%] right-[-10px] shooting-star-2"
        style={{ willChange: "transform, opacity" }}
      >
        <div className="relative rotate-[135deg] flex items-center">
          <div className={`absolute right-0 h-[5px] w-[160px] rounded-full ${trailColor}`} />
          <div className={`h-[1.5px] w-[130px] rounded-full ${streakColor}`} />
          <div className={`w-2 h-2 rounded-full -ml-1 shrink-0 ${headColor}`} />
        </div>
      </div>

      {/* Shooting Star 3 */}
      <div 
        className="absolute top-[22%] right-[28%] shooting-star-3"
        style={{ willChange: "transform, opacity" }}
      >
        <div className="relative rotate-[135deg] flex items-center">
          <div className={`absolute right-0 h-[3px] w-[110px] rounded-full ${trailColor}`} />
          <div className={`h-[1.5px] w-[95px] rounded-full ${streakColor}`} />
          <div className={`w-1.5 h-1.5 rounded-full -ml-1 shrink-0 ${headColor}`} />
        </div>
      </div>
    </div>
  );
}
