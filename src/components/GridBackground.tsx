"use client";

import React from "react";
import { useDarkMode } from "@/context/DarkModeContext";

export default function GridBackground() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className="fixed inset-x-0 top-0 h-[600px] pointer-events-none z-0 overflow-hidden">
      {/* Grid Pattern with 3-way fade (Left, Right, Bottom) */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)'} 1px, transparent 1px),
            linear-gradient(to bottom, ${isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)'} 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at top center, black 10%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse at top center, black 10%, transparent 90%)',
        }}
      />

      {/* Blur Transition Overlay */}
      <div className="absolute inset-0 backdrop-blur-[1px]" 
           style={{ 
             maskImage: 'radial-gradient(ellipse at top center, transparent 20%, black 100%)',
             WebkitMaskImage: 'radial-gradient(ellipse at top center, transparent 20%, black 100%)' 
           }} 
      />
    </div>
  );
}
