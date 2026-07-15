"use client";

import { useDarkMode } from "@/context/DarkModeContext";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  const { isDarkMode } = useDarkMode();

  const headingColor = isDarkMode ? 'text-stone-100' : 'text-neutral-900';
  const paragraphColor = isDarkMode ? 'text-stone-300' : 'text-neutral-700';
  const borderColor = isDarkMode ? 'border-white/10' : 'border-neutral-200/80';
  const bgColor = isDarkMode ? 'bg-neutral-900/40' : 'bg-white/50';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className={`p-6 md:p-10 rounded-2xl transition-all duration-300 border ${borderColor} ${bgColor} backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] space-y-8 font-poppins`}
    >
      <div className="flex flex-col md:flex-row items-center gap-8 md:text-start text-center">
        <div className="flex-1 space-y-4">
          <h2 className={`text-2xl md:text-3xl font-bold ${headingColor}`}>
            Let&apos;s build something together
          </h2>

          <div className={`space-y-4 ${paragraphColor}`}>
            <p className="text-[15px] leading-relaxed">
              I&apos;m always excited to collaborate on innovative projects and connect with fellow developers, designers, and creative minds.
            </p>
            <p className="text-[15px] leading-relaxed opacity-80">
              Whether you have a project in mind, want to discuss technology, or just want to say hello I&apos;d love to hear from you!
            </p>
          </div>
        </div>

        <div className="flex-shrink-0 w-full md:w-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = "mailto:fajarfauzian121@gmail.com"}
            className={`w-full md:w-auto py-4 px-8 rounded-xl font-bold text-sm flex items-center justify-center space-x-3 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.05)] ${
              isDarkMode
                ? "bg-neutral-900/40 backdrop-blur-md border border-white/10 text-stone-200 hover:bg-neutral-800/50 hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                : "bg-white/50 backdrop-blur-md border border-neutral-200/80 text-stone-800 hover:bg-white/70 hover:-translate-y-0.5"
            }`}
          >
            <FiMail className="text-xl" />
            <span>Send me an Email</span>
          </motion.button>
        </div>
      </div>

      <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 text-center">
        <p className="text-[13px] text-neutral-500 dark:text-neutral-400">
          Don&apos;t be a stranger, I respond to all messages! 🌟
        </p>
      </div>
    </motion.div>
  );
};

export default Contact;
