import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiAlertTriangle, FiCheck, FiEdit2, FiLogIn, FiTrash2, FiX } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

interface CustomAlertProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText: string;
  cancelText: string;
  type: "warning" | "delete" | "edit" | "success" | "login";
  isDarkMode: boolean;
}

const ICONS = {
  warning: FiAlertTriangle,
  delete: FiTrash2,
  edit: FiEdit2,
  success: FiCheck,
  login: FiLogIn,
};

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

  const Icon = ICONS[type] ?? FiAlertTriangle;
  const isDestructive = type === "delete";
  const isLogin = type === "login";

  const confirmButton = isDestructive
    ? "bg-red-600 text-white hover:bg-red-700"
    : isDarkMode
      ? "bg-neutral-700 text-white hover:bg-neutral-600"
      : "bg-neutral-200 text-neutral-900 hover:bg-neutral-300";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/60 z-40 flex items-center justify-center p-4 font-poppins"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="alert-title"
            className={`relative w-full max-w-sm rounded-3xl border z-50 ${
              isDarkMode ? "bg-neutral-900 border-white/10" : "bg-white border-neutral-200"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                isDarkMode
                  ? "text-neutral-500 hover:text-white hover:bg-white/10"
                  : "text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100"
              }`}
              onClick={onClose}
              aria-label="Close"
            >
              <FiX className="w-4 h-4" />
            </button>

            <div className="flex flex-col items-center text-center px-7 pt-9 pb-6">
              <div
                className={`mb-4 w-12 h-12 rounded-full flex items-center justify-center ${
                  isDarkMode ? "bg-white/[0.06] text-neutral-200" : "bg-neutral-100 text-neutral-700"
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>

              <h3
                id="alert-title"
                className={`text-base font-semibold ${isDarkMode ? "text-white" : "text-neutral-900"}`}
              >
                {title}
              </h3>
              <p className={`mt-1.5 text-sm leading-relaxed ${isDarkMode ? "text-neutral-400" : "text-neutral-600"}`}>
                {message}
              </p>
            </div>

            <div className={`grid gap-2 px-6 pb-6 ${isLogin ? "grid-cols-1" : "grid-cols-2"}`}>
              <button
                onClick={onClose}
                className={`px-4 py-2.5 rounded-full border text-sm font-semibold whitespace-nowrap transition-colors ${
                  isDarkMode
                    ? "border-white/10 text-neutral-200 hover:bg-white/10"
                    : "border-neutral-200 text-neutral-800 hover:bg-neutral-100"
                }`}
              >
                {cancelText}
              </button>
              <button
                onClick={() => {
                  onConfirm();
                  onClose();
                }}
                className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${confirmButton} ${
                  isLogin ? "order-first" : ""
                }`}
              >
                {isLogin && <FcGoogle className="w-4 h-4 shrink-0" />}
                {confirmText}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CustomAlert;
