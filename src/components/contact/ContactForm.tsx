"use client";

import { useDarkMode } from "@/context/DarkModeContext";

const LetsConnect = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className="space-y-12 pb-7">
      {/* Header Section */}
      <div className="text-center space-y-6">
        <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${
          isDarkMode 
            ? 'from-white via-neutral-200 to-neutral-400' 
            : 'from-neutral-800 via-neutral-600 to-neutral-500'
        } bg-clip-text text-transparent`}>
          Let&apos;s Connect
        </h2>
        
        <div className={`max-w-2xl mx-auto space-y-4 ${
          isDarkMode ? 'text-neutral-300' : 'text-neutral-600'
        }`}>
          <p className="text-lg leading-relaxed">
            I&apos;m always excited to collaborate on innovative projects and connect with fellow developers, designers, and creative minds.
          </p>
          <p className="text-base">
            Whether you have a project in mind, want to discuss technology, or just want to say hello  I&apos;d love to hear from you!
          </p>
        </div>
      </div>


      {/* Footer Message */}
      <div className="text-center">
        <p className={`text-sm ${
          isDarkMode ? 'text-neutral-500' : 'text-neutral-400'
        }`}>
          Don&apos;t be a stranger – I respond to all messages! 🌟
        </p>
      </div>
    </div>
  );
};

export default LetsConnect;