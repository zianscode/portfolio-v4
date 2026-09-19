import { FaProjectDiagram, FaCertificate } from "react-icons/fa";

interface TabButtonsProps {
  activeTab: "projects" | "certificates";
  setActiveTab: (tab: "projects" | "certificates") => void;
  isDarkMode: boolean;
}

const TabButtons = ({ activeTab, setActiveTab, isDarkMode }: TabButtonsProps) => {
  const tabs = [
    { id: "projects", label: "Projects", icon: FaProjectDiagram },
    { id: "certificates", label: "Certificates", icon: FaCertificate }
  ];

  return (
    <div className="flex items-center space-x-2">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as "projects" | "certificates")}
            aria-label={tab.label}
            title={tab.label}
            className={`
              w-10 h-10 flex items-center justify-center rounded-full text-base transition-all duration-300 font-poppins
              ${
                activeTab === tab.id
                  ? "bg-neutral-900 text-white shadow-lg dark:bg-white dark:text-black"
                  : isDarkMode
                    ? "bg-neutral-900 text-neutral-400 hover:bg-neutral-800 border border-neutral-800 dark:border-neutral-800"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 border border-neutral-200"
              }
            `}
          >
            <Icon />
          </button>
        );
      })}
    </div>
  );
};

export default TabButtons;