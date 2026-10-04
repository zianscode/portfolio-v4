import React from "react";
import { FaHashtag, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

const SocialMediaSection = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const items = [
    {
      name: "Instagram",
      handle: "@ffauzianc_",
      hoverText: "Instagram Profile • @ffauzianc_",
      url: "https://www.instagram.com/ffauzian_.0",
      icon: <FaInstagram className="text-base sm:text-lg text-pink-500/80 group-hover:text-pink-500 transition-colors" />,
    },
    {
      name: "YouTube",
      handle: "@hiccup-67",
      hoverText: "YouTube Channel • @hiccup-67",
      url: "https://www.youtube.com/@hiccup-67",
      icon: <FaYoutube className="text-base sm:text-lg text-red-500/80 group-hover:text-red-500 transition-colors" />,
    },
  ];

  return (
    <section className="space-y-4">
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

      <div className="flex flex-wrap items-center gap-3 pt-1">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="relative group"
          >
            {/* Tooltip Badge on Hover */}
            <div className="absolute -top-9 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-250 z-20">
              <div
                className={`px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium whitespace-nowrap shadow-sm border backdrop-blur-md flex items-center gap-1.5 ${
                  isDarkMode
                    ? "bg-stone-900/90 text-stone-300 border-stone-800"
                    : "bg-stone-800/90 text-stone-100 border-stone-700"
                }`}
              >
                <span>{item.hoverText}</span>
              </div>
            </div>

            {/* Badge Link */}
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm ${
                isDarkMode
                  ? "bg-stone-900/60 border-stone-800 text-stone-300 hover:bg-stone-800/80 hover:border-stone-700 hover:text-stone-100"
                  : "bg-stone-100/80 border-stone-200/80 text-stone-700 hover:bg-stone-200/80 hover:border-stone-300 hover:text-stone-900"
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
              <FiArrowUpRight className="text-xs opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SocialMediaSection;




