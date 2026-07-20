"use client";

import React from "react";
import { useDarkMode } from "@/context/DarkModeContext";

export default function ShootingStars() {
  const { isDarkMode, mounted } = useDarkMode();

  if (!mounted || !isDarkMode) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
      <style jsx global>{`
        @keyframes shootingStarAnim {
          0% {
            transform: translate3d(0, 0, 0) scale(0.7);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          65% {
            opacity: 0.9;
          }
          100% {
            transform: translate3d(-950px, 950px, 0) scale(1.1);
            opacity: 0;
          }
        }

        .shooting-star-1 {
          animation: shootingStarAnim 3.4s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
          animation-delay: 0s;
        }

        .shooting-star-2 {
          animation: shootingStarAnim 4.0s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
          animation-delay: 3.8s;
        }

        .shooting-star-3 {
          animation: shootingStarAnim 3.1s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
          animation-delay: 7.5s;
        }
      `}</style>

      {/* Shooting Star 1 */}
      <div 
        className="absolute top-[-20px] right-[10%] shooting-star-1"
        style={{ willChange: "transform, opacity" }}
      >
        <div className="relative rotate-[135deg] flex items-center">
          {/* 3D Soft Glow Trail Shadow */}
          <div className="absolute right-0 h-[4px] w-[140px] bg-gradient-to-r from-transparent via-cyan-400/30 to-white/70 blur-[3px] rounded-full" />
          {/* Core Bright Streak */}
          <div className="h-[1.5px] w-[120px] bg-gradient-to-r from-transparent via-cyan-300/80 to-white rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
          {/* Bright Star Head */}
          <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_12px_3px_rgba(255,255,255,1)] -ml-1 shrink-0" />
        </div>
      </div>

      {/* Shooting Star 2 */}
      <div 
        className="absolute top-[8%] right-[-10px] shooting-star-2"
        style={{ willChange: "transform, opacity" }}
      >
        <div className="relative rotate-[135deg] flex items-center">
          {/* 3D Soft Glow Trail Shadow */}
          <div className="absolute right-0 h-[5px] w-[160px] bg-gradient-to-r from-transparent via-blue-400/30 to-white/80 blur-[4px] rounded-full" />
          {/* Core Bright Streak */}
          <div className="h-[1.5px] w-[130px] bg-gradient-to-r from-transparent via-sky-300/80 to-white rounded-full shadow-[0_0_10px_rgba(14,165,233,0.9)]" />
          {/* Bright Star Head */}
          <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_14px_4px_rgba(255,255,255,1)] -ml-1 shrink-0" />
        </div>
      </div>

      {/* Shooting Star 3 */}
      <div 
        className="absolute top-[22%] right-[28%] shooting-star-3"
        style={{ willChange: "transform, opacity" }}
      >
        <div className="relative rotate-[135deg] flex items-center">
          {/* 3D Soft Glow Trail Shadow */}
          <div className="absolute right-0 h-[3px] w-[110px] bg-gradient-to-r from-transparent via-indigo-400/25 to-white/60 blur-[2px] rounded-full" />
          {/* Core Bright Streak */}
          <div className="h-[1.5px] w-[95px] bg-gradient-to-r from-transparent via-indigo-300/70 to-white rounded-full shadow-[0_0_8px_rgba(129,140,248,0.7)]" />
          {/* Bright Star Head */}
          <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_3px_rgba(255,255,255,0.9)] -ml-1 shrink-0" />
        </div>
      </div>
    </div>
  );
}
