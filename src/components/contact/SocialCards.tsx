import React from 'react';
import { FaGithub, FaLinkedin, FaSpotify, FaDribbble } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

interface SocialCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonColor: string;
  hoverColor: string;
  ringColor: string;
  bgColor: string;
  darkBgColor: string;
  borderColor: string;
  url: string;
}

const SocialCard: React.FC<SocialCardProps> = ({
  icon,
  title,
  description,
  buttonText,
  buttonColor,
  hoverColor,
  ringColor,
  bgColor,
  darkBgColor,
  borderColor,
  url,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`group relative overflow-hidden backdrop-blur-lg border ${borderColor} ${bgColor} ${darkBgColor} rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-500 flex flex-col h-full`}
    >
      <div className="absolute -right-8 -top-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500 pointer-events-none">
        {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: "text-[12rem]" })}
      </div>
      
      <div className="flex flex-col space-y-4 relative z-10 h-full">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-white/10 dark:bg-black/10">
            {React.cloneElement(icon as React.ReactElement<{ className: string }>, { className: "text-2xl" })}
          </div>
          <h2 className="text-xl font-bold font-poppins tracking-tight">{title}</h2>
        </div>
        
        <p className="text-[15px] text-neutral-600 dark:text-neutral-400 font-poppins leading-relaxed flex-grow">
          {description}
        </p>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.open(url, "_blank")}
          className={`w-full ${buttonColor} py-3 px-6 rounded-xl ${hoverColor} focus:outline-none focus:ring-2 ${ringColor} focus:ring-offset-2 transition-all duration-300 flex items-center justify-center space-x-2 font-semibold text-sm font-poppins shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)]`}
        >
          <span>{buttonText}</span>
          <FiExternalLink className="text-base" />
        </motion.button>
      </div>
    </motion.div>
  );
};

const SocialCards = () => {
  const socialData = [
    {
      icon: <FaGithub />,
      title: "Explore the code",
      description: "Dive into my open-source projects and contributions on GitHub.",
      buttonText: "Visit GitHub",
      buttonColor: "bg-neutral-800/10 dark:bg-white/10 backdrop-blur-md border border-neutral-800/20 dark:border-white/20 text-neutral-900 dark:text-white",
      hoverColor: "hover:bg-neutral-800/20 dark:hover:bg-white/20",
      ringColor: "focus:ring-neutral-500",
      bgColor: "bg-neutral-100/50",
      darkBgColor: "dark:bg-neutral-900/40",
      borderColor: "border-neutral-200 dark:border-white/10",
      url: "https://github.com/zianscode",
    },
    {
      icon: <FaLinkedin />,
      title: "Let's connect",
      description: "Connect with me professionally and explore my career journey.",
      buttonText: "Visit LinkedIn",
      buttonColor: "bg-blue-600/10 dark:bg-blue-400/10 backdrop-blur-md border border-blue-600/20 dark:border-blue-400/20 text-blue-700 dark:text-blue-300",
      hoverColor: "hover:bg-blue-600/20 dark:hover:bg-blue-400/20",
      ringColor: "focus:ring-blue-500",
      bgColor: "bg-blue-50/50",
      darkBgColor: "dark:bg-blue-950/30",
      borderColor: "border-blue-100 dark:border-white/10",
      url: "https://www.linkedin.com/in/fajarfauzian/",
    },
    {
      icon: <FaSpotify />,
      title: "My Playlist",
      description: "Listen to the tracks that inspire my coding and design sessions.",
      buttonText: "Open Spotify",
      buttonColor: "bg-emerald-600/10 dark:bg-emerald-400/10 backdrop-blur-md border border-emerald-600/20 dark:border-emerald-400/20 text-emerald-700 dark:text-emerald-300",
      hoverColor: "hover:bg-emerald-600/20 dark:hover:bg-emerald-400/20",
      ringColor: "focus:ring-emerald-500",
      bgColor: "bg-emerald-50/50",
      darkBgColor: "dark:bg-emerald-950/30",
      borderColor: "border-emerald-100 dark:border-white/10",
      url: "https://open.spotify.com/user/31kj3hpqmaeuws6chgvj4dfblkyi?si=b5a858dd2f2845e8",
    },
    {
      icon: <FaDribbble />,
      title: "Dribbble",
      description: "Check out my latest UI/UX shots and visual experiments.",
      buttonText: "View Designs",
      buttonColor: "bg-pink-600/10 dark:bg-pink-400/10 backdrop-blur-md border border-pink-600/20 dark:border-pink-400/20 text-pink-700 dark:text-pink-300",
      hoverColor: "hover:bg-pink-600/20 dark:hover:bg-pink-400/20",
      ringColor: "focus:ring-pink-500",
      bgColor: "bg-pink-50/50",
      darkBgColor: "dark:bg-pink-950/30",
      borderColor: "border-pink-100 dark:border-white/10",
      url: "https://dribbble.com/ziancode",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {socialData.map((social, index) => (
        <SocialCard key={index} {...social} />
      ))}
    </div>
  );
};

export default SocialCards;