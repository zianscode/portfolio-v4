import React from "react";
import { FaHashtag, FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const SocialMediaSection = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const links = [
    {
      name: "TikTok",
      username: "@yoakeson",
      url: "https://www.tiktok.com/@yoakeson",
      icon: <FaTiktok />,
      iconColor: "text-neutral-900 dark:text-white",
      bgColor: "bg-neutral-100/50",
      darkBgColor: "dark:bg-neutral-900/40",
      borderColor: "border-neutral-200 dark:border-white/10",
    },
    {
      name: "Instagram",
      username: "@ffauzianc_",
      url: "https://www.instagram.com/ffauzianc_/",
      icon: <FaInstagram />,
      iconColor: "text-pink-600 dark:text-pink-400",
      bgColor: "bg-pink-50/50",
      darkBgColor: "dark:bg-pink-950/30",
      borderColor: "border-pink-100 dark:border-white/10",
    },
    {
      name: "YouTube",
      username: "@crimson-z67",
      url: "https://www.youtube.com/@crimson-z67/",
      icon: <FaYoutube />,
      iconColor: "text-red-600 dark:text-red-500",
      bgColor: "bg-red-50/50",
      darkBgColor: "dark:bg-red-950/30",
      borderColor: "border-red-100 dark:border-white/10",
    },
  ];

  return (
    <section>
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
          className={`mt-1 sm:mt-2 text-[13px] sm:text-[15px] leading-relaxed ${
            isDarkMode ? "text-stone-300" : "text-stone-700"
          }`}
        >
          Let&apos;s connect on social media
        </p>
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
          >
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className={`group relative overflow-hidden backdrop-blur-lg border ${link.borderColor} ${link.bgColor} ${link.darkBgColor} rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-500 flex flex-col h-full`}
            >
              <div className="absolute -right-8 -top-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500 pointer-events-none">
                {React.cloneElement(
                  link.icon as React.ReactElement<{ className?: string }>,
                  { className: `text-[12rem] ${link.iconColor}` },
                )}
              </div>

              <div className="flex flex-col space-y-4 relative z-10 h-full">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-black/5 dark:bg-white/10">
                    {React.cloneElement(
                      link.icon as React.ReactElement<{ className?: string }>,
                      { className: `text-2xl ${link.iconColor}` },
                    )}
                  </div>
                  <h2
                    className={`text-xl font-bold font-poppins tracking-tight ${isDarkMode ? "text-stone-100" : "text-stone-900"}`}
                  >
                    {link.name}
                  </h2>
                </div>

                <p className="text-[15px] text-neutral-600 dark:text-neutral-400 font-poppins leading-relaxed flex-grow">
                  {link.username}
                </p>
              </div>
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialMediaSection;
