"use client";
import React, { useEffect, useState } from "react";
import { useDarkMode } from "@/context/DarkModeContext";
import ParticleStars from "@/components/effects/ParticleStars";
import { motion, AnimatePresence } from "framer-motion";

const SunEarthMoonSystem = () => {
  const { isDarkMode } = useDarkMode();
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const earthOrbit = isMobile ? 160 : 240;
  const earthSize = isMobile ? 14 : 18;
  const earthSpeed = 12;
  
  const moonSize = isMobile ? 5 : 7;
  const moonOrbit = isMobile ? 25 : 35;
  const moonSpeed = 3;

  return (
    <div
      className={`relative w-screen h-screen overflow-hidden ${
        isDarkMode
          ? "bg-[radial-gradient(circle_at_center,rgb(7,7,7)_0%,rgb(7,7,7)_100%)]"
          : "bg-[radial-gradient(circle_at_center,#ffffff_0%,#f0f0f0_100%)]"
      }`}
    >
      <ParticleStars/>
      <AnimatePresence>
        {!isClient && (
          <motion.div
            className={`fixed inset-0 z-[1000] ${
              isDarkMode ? "bg-black" : "bg-white"
            }`}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>
      
      {isClient && (
        <>
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffff00,#ffaa00)] z-10"
            style={{
              width: isMobile ? '120px' : '180px',
              height: isMobile ? '120px' : '180px', 
              boxShadow: isMobile ? '0 0 60px #ffaa00' : '0 0 90px #ffaa00',
              animation: 'sun-pulse 3s ease-in-out infinite alternate'
            }}
          />
          
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: `${earthOrbit * 2}px`,
              height: `${earthOrbit * 2}px`,
              border: `1px solid ${
                isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }`,
              animation: `orbit ${earthSpeed}s linear infinite`
            }}
          >
            <div 
              className="absolute top-0 left-1/2 -translate-x-1/2"
              style={{
                animation: `counter-orbit ${earthSpeed}s linear infinite`
              }}
            >
              <div
                className="absolute top-[-12px] left-0 rounded-full"
                style={{
                  width: `${earthSize * 1.4}px`,
                  height: `${earthSize * 1.4}px`,
                  background: `radial-gradient(circle at 30% 30%, #4169E1, #000000)`,
                  boxShadow: `0 0 ${isMobile ? '15px' : '20px'} ${
                    isDarkMode ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)"
                  }`,
                  animation: `rotate ${earthSpeed}s linear infinite`
                }}
              />
              
              <div
                className="absolute rounded-full"
                style={{
                  width: `${moonOrbit * 2}px`,
                  height: `${moonOrbit * 2}px`,
                  top: `${-moonOrbit + (earthSize * 1.4)/2 - 12}px`,
                  left: `${-moonOrbit + (earthSize * 1.4)/2}px`,
                  border: `1px solid ${
                    isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"
                  }`,
                  animation: `moon-orbit ${moonSpeed}s linear infinite`
                }}
              >
                <div
                  className="absolute top-[-3.5px] left-1/2 -translate-x-1/2 rounded-full"
                  style={{
                    width: `${moonSize * 1.4}px`,
                    height: `${moonSize * 1.4}px`,
                    background: `radial-gradient(circle at 30% 30%, #CCCCCC, #888888)`,
                    boxShadow: `0 0 ${isMobile ? '7px' : '10px'} ${
                      isDarkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)"
                    }`,
                    animation: `rotate ${moonSpeed * 2}s linear infinite`
                  }}
                />
              </div>
            </div>
          </div>
        </>
      )}

      <style jsx global>{`
        @keyframes orbit {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes counter-orbit {
          from { transform: translateX(-50%) rotate(0deg); }
          to { transform: translateX(-50%) rotate(-360deg); }
        }

        @keyframes moon-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes sun-pulse {
          0% { box-shadow: ${isMobile ? '0 0 50px' : '0 0 70px'} #ffaa00; }
          100% { box-shadow: ${isMobile ? '0 0 70px' : '0 0 90px'} #ffaa00; }
        }
      `}</style>
    </div>
  );
};

import dynamic from "next/dynamic";
export default dynamic(() => Promise.resolve(SunEarthMoonSystem), { ssr: false });