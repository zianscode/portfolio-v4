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
            className={`
              flex items-center justify-center rounded-full font-bold text-sm transition-all duration-300 font-poppins
              w-10 h-10 md:w-auto md:h-auto md:px-6 md:py-2
              ${
                activeTab === tab.id
                  ? "bg-neutral-900 text-white shadow-lg dark:bg-white dark:text-black"
                  : isDarkMode
                    ? "bg-neutral-900 text-neutral-400 hover:bg-neutral-800 border border-neutral-800"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 border border-neutral-200"
              }
            `}
          >
            <span className="md:hidden">
              <Icon />
            </span>
            <span className="hidden md:inline">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default TabButtons;