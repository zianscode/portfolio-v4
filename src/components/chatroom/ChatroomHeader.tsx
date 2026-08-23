"use client";
import { motion } from "framer-motion";
import { BiMessageDetail } from "react-icons/bi";

interface ChatroomHeaderProps {
  isDarkMode: boolean;
}

const ChatroomHeader = ({ isDarkMode }: ChatroomHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-start"
    >
      <div className="flex items-center gap-2">
        <BiMessageDetail
          className={`text-base sm:text-xl ${
            isDarkMode ? "text-stone-200" : "text-stone-800"
          }`}
        />
        <h1
          className={`text-base sm:text-xl font-bold ${
            isDarkMode ? "text-stone-200" : "text-stone-800"
          }`}
        >
          Chat Room
        </h1>
      </div>
      <p
        className={`mt-1 sm:mt-2 text-[13px] sm:text-[15px] leading-relaxed ${
          isDarkMode ? "text-stone-300" : "text-stone-700"
        }`}
      >
        Leave your impression or suggestion about this website here
      </p>
    </motion.div>
  );
};

export default ChatroomHeader;