import React from "react";
import { FaHashtag, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const SocialMediaSection = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const items = [
    {
      name: "Instagram",
      handle: "@ffauzianc_",
      tagline: "Photos, Reels & Creative Moments",
      action: "Follow Profile",
      url: "https://www.instagram.com/ffauzianc_/",
      icon: <FaInstagram />,
      brandGradient: "from-amber-500 via-rose-500 to-purple-600",
      accentColor: "text-pink-500 dark:text-pink-400",
      borderColor: "border-pink-500/20 hover:border-pink-500/50 dark:border-pink-500/30 dark:hover:border-pink-500/60",
      shadowGlow: "hover:shadow-[0_12px_40px_rgba(236,72,153,0.2)]",
      btnClass: "bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 text-white",
    },
    {
      name: "YouTube",
      handle: "@crimson-z67",
      tagline: "Videos, Tech Breakdown & Tutorials",
      action: "Subscribe Channel",
      url: "https://www.youtube.com/@crimson-z67/",
      icon: <FaYoutube />,
      brandGradient: "from-red-600 to-rose-600",
      accentColor: "text-red-500 dark:text-red-400",
      borderColor: "border-red-500/20 hover:border-red-500/50 dark:border-red-500/30 dark:hover:border-red-500/60",
      shadowGlow: "hover:shadow-[0_12px_40px_rgba(239,68,68,0.2)]",
      btnClass: "bg-gradient-to-r from-red-600 to-rose-600 text-white",
    },
  ];

  return (
    <section className="space-y-5">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <FaHashtag
            className={`text-base sm:text-xl ${
              isDarkMode ? "text-stone-200" : "text-stone-800"
            }`}
          />
          <h2
            className={`text-base sm:text-xl font-bold ${
              isDarkMode ? "text-stone-200" : "text-stone-800"
            }`}
          >
            Social Media
          </h2>
        </div>
        <p
          className={`mt-1 text-[13px] sm:text-[15px] leading-relaxed ${
            isDarkMode ? "text-stone-400" : "text-stone-600"
          }`}
        >
          Let&apos;s connect & explore my visual content and video updates
        </p>
      </div>

      {/* 2-Grid Interactive Showcase (No Standard Card Feel) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {items.map((item, index) => (
          <motion.a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -6, scale: 1.015 }}
            className={`group relative overflow-hidden rounded-2xl p-4 border backdrop-blur-2xl transition-all duration-500 flex flex-col justify-between ${item.borderColor} ${item.shadowGlow} ${
              isDarkMode
                ? "bg-gradient-to-br from-stone-900/80 via-stone-900/40 to-stone-950/80 text-stone-100"
                : "bg-gradient-to-br from-white/90 via-stone-50/60 to-white/90 text-stone-900 shadow-sm"
            }`}
          >
            {/* Top Brand Ambient Aura Beam */}
            <div
              className={`absolute -right-12 -top-12 w-44 h-44 rounded-full bg-gradient-to-br ${item.brandGradient} opacity-15 blur-3xl group-hover:opacity-35 group-hover:scale-125 transition-all duration-700 pointer-events-none`}
            />

            {/* Giant Background Watermark Logo */}
            <div className="absolute right-2 bottom-1 opacity-[0.05] dark:opacity-[0.08] group-hover:opacity-20 dark:group-hover:opacity-25 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 pointer-events-none text-6xl">
              {item.icon}
            </div>

            {/* Top Header: Brand Icon + Title & Handle */}
            <div className="relative z-10 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-2xl bg-gradient-to-tr ${item.brandGradient} text-white shadow-md group-hover:rotate-6 transition-transform duration-300`}
                  >
                    {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: "text-3xl" })}
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold tracking-tight font-poppins">
                      {item.name}
                    </h3>
                    <p className={`text-xs font-mono font-medium ${item.accentColor}`}>
                      {item.handle}
                    </p>
                  </div>
                </div>

                <span className="flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-stone-600 dark:text-stone-300">
                  <Sparkles className={`w-3 h-3 ${item.accentColor}`} /> Connect
                </span>
              </div>

            </div>

            {/* Bottom Action Pill */}
            <div className="relative z-10 mt-3 pt-3 border-t border-stone-200/50 dark:border-stone-800/50 flex items-center justify-between">
              <span className={`text-xs font-semibold ${item.accentColor}`}>
                {item.action}
              </span>

              <div
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${item.btnClass} shadow-md group-hover:shadow-lg group-hover:scale-105`}
              >
                <span>Visit</span>
                <FiArrowUpRight className="text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default SocialMediaSection;



