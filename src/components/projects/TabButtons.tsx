interface TabButtonsProps {
  activeTab: "projects" | "certificates";
  setActiveTab: (tab: "projects" | "certificates") => void;
  isDarkMode: boolean;
}

const TabButtons = ({ activeTab, setActiveTab, isDarkMode }: TabButtonsProps) => {
  const tabs = [
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" }
  ];

  return (
    <div className="flex items-center space-x-2 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id as "projects" | "certificates")}
          className={`
            px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 font-poppins
            ${
              activeTab === tab.id
                ? "bg-neutral-900 text-white dark:bg-white dark:text-black shadow-lg"
                : isDarkMode
                  ? "bg-neutral-900 text-neutral-400 hover:bg-neutral-800 border border-neutral-800"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 border border-neutral-200"
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabButtons;
