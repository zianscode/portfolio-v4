"use client";

import React from "react";
import { useDarkMode } from "@/context/DarkModeContext";

export default function GridBackground() {
  const { isDarkMode, mounted } = useDarkMode();

  const lineColor = mounted
    ? isDarkMode
      ? "rgba(255, 255, 255, 0.15)"
      : "rgba(0, 0, 0, 0.15)"
    : "rgba(0, 0, 0, 0.15)";

  return (
    <div className="fixed inset-x-0 top-0 h-[600px] pointer-events-none z-0 overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-full hidden lg:block"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${lineColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at top center, black 10%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse at top center, black 10%, transparent 90%)',
        }}
      />

      <div 
        className="absolute inset-0 w-full h-full lg:hidden top-[75px]"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${lineColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, transparent 100%)',
        }}
      />

      <div className="hidden lg:block absolute inset-0 backdrop-blur-[1px]" 
           style={{ 
             maskImage: 'radial-gradient(ellipse at top center, transparent 20%, black 100%)',
             WebkitMaskImage: 'radial-gradient(ellipse at top center, transparent 20%, black 100%)' 
           }} 
      />
    </div>
  );
}
