import { motion } from "framer-motion";
import { RiRoadMapLine } from "react-icons/ri";

interface RoadmapHeaderProps {
  isDarkMode: boolean;
}

import HeaderDivider from "@/components/common/HeaderDivider";

export default function RoadmapHeader({ isDarkMode }: RoadmapHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-start mb-8"
    >
      <div>
        <div className="flex items-center space-x-3">
          <RiRoadMapLine
            className={`text-2xl sm:text-3xl ${
              isDarkMode ? "text-stone-200" : "text-gray-800"
            }`}
          />
          <h1
            className={`text-2xl sm:text-3xl font-bold ${
              isDarkMode ? "text-stone-200" : "text-gray-800"
            }`}
          >
            Roadmap
          </h1>
        </div>
        <p
          className={`mt-2 text-sm sm:text-base ${
            isDarkMode ? "text-stone-400" : "text-gray-600"
          }`}
        >
          Learning path recommendation and free course playlist
        </p>
        <HeaderDivider />
      </div>
    </motion.div>
  );
}