import { FiGrid, FiList } from "react-icons/fi";

interface ViewToggleProps {
  viewMode: "grid" | "list";
  setViewMode: (mode: "grid" | "list") => void;
  isDarkMode: boolean;
}

const ViewToggle = ({ viewMode, setViewMode, isDarkMode }: ViewToggleProps) => {
  return (
    <div className="flex items-center gap-1 p-1 rounded-full border border-neutral-200/60 bg-white/40 backdrop-blur-md dark:border-white/10 dark:bg-neutral-900/40">
      <button
        onClick={() => setViewMode("grid")}
        aria-label="Grid view"
        className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 font-bold ${
          viewMode === "grid"
            ? "bg-neutral-900 text-white shadow-lg dark:bg-white dark:text-black"
            : isDarkMode
              ? "text-neutral-400 hover:text-white hover:bg-neutral-800"
              : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100"
        }`}
      >
        <FiGrid className="w-4 h-4" />
      </button>
      <button
        onClick={() => setViewMode("list")}
        aria-label="List view"
        className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 font-bold ${
          viewMode === "list"
            ? "bg-neutral-900 text-white shadow-lg dark:bg-white dark:text-black"
            : isDarkMode
              ? "text-neutral-400 hover:text-white hover:bg-neutral-800"
              : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100"
        }`}
      >
        <FiList className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ViewToggle;