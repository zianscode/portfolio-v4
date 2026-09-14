"use client";

import React from 'react';
import { FaGithub, FaLinkedin, FaSpotify, FaDribbble } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

interface SocialCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  accent: string;
  cta: string;
  ringColor: string;
  bgColor: string;
  darkBgColor: string;
  borderColor: string;
  iconBox: string;
  iconText: string;
  url: string;
}

const SocialCard: React.FC<SocialCardProps> = ({
  icon,
  title,
  description,
  buttonText,
  accent,
  cta,
  ringColor,
  bgColor,
  darkBgColor,
  borderColor,
  iconBox,
  iconText,
  url,
}) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noreferrer"
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden block rounded-2xl border ${borderColor} ${bgColor} ${darkBgColor} p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-shadow duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${ringColor} flex flex-col h-full`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(240px circle at var(--mx, 50%) var(--my, 50%), rgba(${accent}, 0.15), transparent 70%)`,
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-4 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, rgb(${accent}), transparent)`,
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 opacity-[0.04] group-hover:opacity-[0.09] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-700"
      >
        {React.cloneElement(icon as React.ReactElement<{ className?: string }>, {
          className: "text-[12rem]",
        })}
      </div>

      <div className="relative z-10 flex flex-col gap-4 h-full">
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: -8, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 320, damping: 16 }}
            className={`p-3 rounded-xl transition-colors duration-500 ${iconBox}`}
          >
            {React.cloneElement(icon as React.ReactElement<{ className: string }>, {
              className: `text-2xl transition-colors duration-500 ${iconText}`,
            })}
          </motion.div>
          <div>
            <h2 className="text-lg font-bold font-poppins tracking-tight leading-snug">
              {title}
            </h2>
            <div
              aria-hidden
              className="mt-1 h-0.5 w-8 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"
              style={{ background: `rgb(${accent})` }}
            />
          </div>
        </div>

        <p className="text-[15px] text-neutral-600 dark:text-neutral-400 font-poppins leading-relaxed flex-grow">
          {description}
        </p>

        <div
          className={`mt-2 w-full py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2 font-semibold text-sm font-poppins ${cta}`}
        >
          <span>{buttonText}</span>
          <FiExternalLink className="text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </motion.a>
  );
};

const SocialCards = () => {
  const socialData: SocialCardProps[] = [
    {
      icon: <FaGithub />,
      title: "Explore the code",
      description: "Dive into my open-source projects and contributions on GitHub.",
      buttonText: "Visit GitHub",
      accent: "148, 163, 184",
      cta: "bg-neutral-800/[0.06] dark:bg-white/[0.08] group-hover:bg-neutral-800/[0.14] dark:group-hover:bg-white/[0.14] text-neutral-900 dark:text-white",
      ringColor: "focus-visible:ring-neutral-500",
      bgColor: "bg-neutral-100/50",
      darkBgColor: "dark:bg-neutral-900/40",
      borderColor: "border-neutral-200 dark:border-white/10",
      iconBox: "bg-neutral-500/[0.08] group-hover:bg-neutral-800 dark:bg-white/[0.06] dark:group-hover:bg-white",
      iconText: "text-neutral-700 group-hover:text-white dark:text-neutral-300 dark:group-hover:text-neutral-900",
      url: "https://github.com/zianscode",
    },
    {
      icon: <FaLinkedin />,
      title: "Let's connect",
      description: "Connect with me professionally and explore my career journey.",
      buttonText: "Visit LinkedIn",
      accent: "96, 165, 250",
      cta: "bg-blue-600/[0.08] dark:bg-blue-400/[0.12] group-hover:bg-blue-600/[0.16] dark:group-hover:bg-blue-400/[0.2] text-blue-700 dark:text-blue-300",
      ringColor: "focus-visible:ring-blue-500",
      bgColor: "bg-blue-50/50",
      darkBgColor: "dark:bg-blue-950/30",
      borderColor: "border-blue-100 dark:border-white/10",
      iconBox: "bg-blue-500/[0.08] group-hover:bg-blue-600 dark:bg-blue-400/[0.06] dark:group-hover:bg-blue-400",
      iconText: "text-blue-600 group-hover:text-white dark:text-blue-300 dark:group-hover:text-blue-950",
      url: "https://www.linkedin.com/in/fajarfauzian/",
    },
    {
      icon: <FaSpotify />,
      title: "My Playlist",
      description: "Listen to the tracks that inspire my coding and design sessions.",
      buttonText: "Open Spotify",
      accent: "52, 211, 153",
      cta: "bg-emerald-600/[0.08] dark:bg-emerald-400/[0.12] group-hover:bg-emerald-600/[0.16] dark:group-hover:bg-emerald-400/[0.2] text-emerald-700 dark:text-emerald-300",
      ringColor: "focus-visible:ring-emerald-500",
      bgColor: "bg-emerald-50/50",
      darkBgColor: "dark:bg-emerald-950/30",
      borderColor: "border-emerald-100 dark:border-white/10",
      iconBox: "bg-emerald-500/[0.08] group-hover:bg-emerald-600 dark:bg-emerald-400/[0.06] dark:group-hover:bg-emerald-400",
      iconText: "text-emerald-600 group-hover:text-white dark:text-emerald-300 dark:group-hover:text-emerald-950",
      url: "https://open.spotify.com/user/31kj3hpqmaeuws6chgvj4dfblkyi?si=b5a858dd2f2845e8",
    },
    {
      icon: <FaDribbble />,
      title: "Dribbble",
      description: "Check out my latest UI/UX shots and visual experiments.",
      buttonText: "View Designs",
      accent: "244, 114, 182",
      cta: "bg-pink-600/[0.08] dark:bg-pink-400/[0.12] group-hover:bg-pink-600/[0.16] dark:group-hover:bg-pink-400/[0.2] text-pink-700 dark:text-pink-300",
      ringColor: "focus-visible:ring-pink-500",
      bgColor: "bg-pink-50/50",
      darkBgColor: "dark:bg-pink-950/30",
      borderColor: "border-pink-100 dark:border-white/10",
      iconBox: "bg-pink-500/[0.08] group-hover:bg-pink-600 dark:bg-pink-400/[0.06] dark:group-hover:bg-pink-400",
      iconText: "text-pink-600 group-hover:text-white dark:text-pink-300 dark:group-hover:text-pink-950",
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