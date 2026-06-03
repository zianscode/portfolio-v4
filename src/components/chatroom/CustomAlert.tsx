// CustomAlert.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExclamationTriangle, FaTrash, FaEdit, FaCheck, FaTimes } from "react-icons/fa";

interface CustomAlertProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText: string;
  cancelText: string;
  type: "warning" | "delete" | "edit" | "success";
  isDarkMode: boolean;
}

const CustomAlert = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText,
  cancelText,
  type,
  isDarkMode,
}: CustomAlertProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const getIconByType = () => {
    switch (type) {
      case "warning":
        return <FaExclamationTriangle size={22} />;
      case "delete":
        return <FaTrash size={20} />;
      case "edit":
        return <FaEdit size={20} />;
      case "success":
        return <FaCheck size={20} />;
      default:
        return <FaExclamationTriangle size={22} />;
    }
  };

  const colorMap = {
    yellow: {
      iconBg: isDarkMode ? "bg-yellow-500/10" : "bg-yellow-100",
      iconText: "text-yellow-500",
      btn: "bg-yellow-600 hover:bg-yellow-700 active:bg-yellow-800",
      btnGhost: isDarkMode ? "text-yellow-400 hover:bg-yellow-500/10" : "text-yellow-700 hover:bg-yellow-50",
    },
    red: {
      iconBg: isDarkMode ? "bg-red-500/10" : "bg-red-100",
      iconText: "text-red-500",
      btn: "bg-red-600 hover:bg-red-700 active:bg-red-800",
      btnGhost: isDarkMode ? "text-red-400 hover:bg-red-500/10" : "text-red-700 hover:bg-red-50",
    },
    blue: {
      iconBg: isDarkMode ? "bg-blue-500/10" : "bg-blue-100",
      iconText: "text-blue-500",
      btn: "bg-blue-600 hover:bg-blue-700 active:bg-blue-800",
      btnGhost: isDarkMode ? "text-blue-400 hover:bg-blue-500/10" : "text-blue-700 hover:bg-blue-50",
    },
    green: {
      iconBg: isDarkMode ? "bg-green-500/10" : "bg-green-100",
      iconText: "text-green-500",
      btn: "bg-green-600 hover:bg-green-700 active:bg-green-800",
      btnGhost: isDarkMode ? "text-green-400 hover:bg-green-500/10" : "text-green-700 hover:bg-green-50",
    },
  };

  const getColorKey = () => {
    switch (type) {
      case "warning": return "yellow";
      case "delete": return "red";
      case "edit": return "blue";
      case "success": return "green";
      default: return "yellow";
    }
  };

  const colors = colorMap[getColorKey()];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 flex items-center justify-center p-4"
            onClick={onClose}
          >
            {/* Alert Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className={`relative w-full max-w-sm rounded-2xl shadow-2xl z-50 overflow-hidden ${
                isDarkMode
                  ? "bg-neutral-900 border border-neutral-800"
                  : "bg-white border border-neutral-200"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className={`absolute top-4 right-4 p-1.5 rounded-xl transition-all duration-200 ${
                  isDarkMode
                    ? "text-neutral-500 hover:text-neutral-300 hover:bg-neutral-800"
                    : "text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100"
                }`}
                onClick={onClose}
                aria-label="Close"
              >
                <FaTimes size={14} />
              </button>

              {/* Content */}
              <div className="flex flex-col items-center text-center px-8 pt-10 pb-6">
                {/* Icon */}
                <div className={`p-4 rounded-2xl mb-5 ${colors.iconBg}`}>
                  <div className={colors.iconText}>
                    {getIconByType()}
                  </div>
                </div>

                {/* Title */}
                <h3 className={`text-lg font-semibold mb-2 ${
                  isDarkMode ? "text-white" : "text-neutral-900"
                }`}>
                  {title}
                </h3>

                {/* Message */}
                <p className={`text-sm leading-relaxed ${
                  isDarkMode ? "text-neutral-400" : "text-neutral-500"
                }`}>
                  {message}
                </p>
              </div>

              {/* Actions */}
              <div className={`flex gap-2.5 px-8 pb-6`}>
                <button
                  onClick={onClose}
                  className={`flex-1 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                    isDarkMode
                      ? "bg-neutral-800 text-neutral-300 hover:bg-neutral-700 active:bg-neutral-700"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 active:bg-neutral-200"
                  }`}
                >
                  {cancelText}
                </button>
                <button
                  onClick={() => {
                    onConfirm();
                    onClose();
                  }}
                  className={`flex-1 px-4 py-2.5 rounded-xl font-medium text-sm text-white transition-all duration-200 active:scale-[0.97] ${colors.btn}`}
                >
                  {confirmText}
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CustomAlert;