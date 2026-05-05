"use client";
import { motion } from "framer-motion";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

interface ChatroomHeaderProps {
  isDarkMode: boolean;
}

import HeaderDivider from "@/components/common/HeaderDivider";

const ChatroomHeader = ({ isDarkMode }: ChatroomHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-start mb-8"
    >
      <div className="pb-2">
        <div className="flex items-center space-x-3">
          <IoChatbubbleEllipsesOutline
            className={`text-3xl ${
              isDarkMode ? "text-stone-200" : "text-gray-800"
            }`}
          />
          <h1 className="text-3xl font-bold">Chat Room</h1>
        </div>
        <p
          className={`mt-2 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Leave your impression or suggestion about this website here.
        </p>
        <HeaderDivider />
      </div>
    </motion.div>
  );
};

export default ChatroomHeader;