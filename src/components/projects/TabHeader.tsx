import { motion } from "framer-motion";
import { FaProjectDiagram, FaCertificate } from "react-icons/fa";

interface TabHeaderProps {
  activeTab: "projects" | "certificates";
  isDarkMode: boolean;
}

const TabHeader = ({ activeTab, isDarkMode }: TabHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-start mb-6"
    >
      <div>
        <div className="flex items-center gap-2">
          {activeTab === "projects" ? (
            <FaProjectDiagram
              className={`text-base sm:text-xl ${
                isDarkMode ? "text-stone-200" : "text-stone-800"
              }`}
            />
          ) : (
            <FaCertificate
              className={`text-base sm:text-xl ${
                isDarkMode ? "text-stone-200" : "text-stone-800"
              }`}
            />
          )}
          <h1
            className={`text-base sm:text-xl font-bold ${
              isDarkMode ? "text-stone-200" : "text-stone-800"
            }`}
          >
            {activeTab === "projects" ? "Projects" : "Certificates"}
          </h1>
        </div>
        <p
          className={`mt-1 sm:mt-2 text-[13px] sm:text-[15px] leading-relaxed ${
            isDarkMode ? "text-stone-300" : "text-stone-700"
          }`}
        >
          {activeTab === "projects"
            ? "Showcasing my passion for technology, design, and problem solving through code."
            : "A collection of certifications that validate my skills and knowledge."}
        </p>
      </div>
    </motion.div>
  );
};

export default TabHeader;