"use client";
import { FcGoogle } from "react-icons/fc";
import { FiLoader } from "react-icons/fi";

interface LoginButtonProps {
  isDarkMode: boolean;
  onLogin: () => Promise<void>;
  isLoggingIn: boolean;
}

const LoginButton = ({ isDarkMode, onLogin, isLoggingIn }: LoginButtonProps) => {
  return (
    <div className="mt-6 flex justify-center">
      <button
        onClick={onLogin}
        disabled={isLoggingIn}
        className={`
          group relative flex items-center justify-center gap-3 w-full py-3.5 px-5 rounded-2xl font-medium text-sm
          transition-all duration-300 active:scale-[0.98] overflow-hidden
          ${isDarkMode
            ? "bg-white/[0.06] text-white border border-white/[0.12] hover:border-white/[0.25] hover:bg-white/[0.10]"
            : "bg-black/[0.04] text-neutral-800 border border-black/[0.08] hover:border-black/[0.18] hover:bg-black/[0.07]"
          }
          backdrop-blur-xl shadow-xl
          ${isLoggingIn ? "opacity-70 cursor-not-allowed" : "cursor-pointer"}
        `}
        aria-label={isLoggingIn ? "Logging in..." : "Login with Google to Chat"}
      >
        <span className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.10] to-transparent pointer-events-none" />

        <FcGoogle className="w-5 h-5 flex-shrink-0 relative z-10" />

        <span className="relative z-10">
          {isLoggingIn ? (
            <span className="flex items-center gap-2">
              <FiLoader className="animate-spin h-4 w-4" />
              Logging in...
            </span>
          ) : (
            "Login with Google to Chat"
          )}
        </span>
      </button>
    </div>
  );
};

export default LoginButton;