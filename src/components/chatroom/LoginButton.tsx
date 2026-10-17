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
    <button
      onClick={onLogin}
      disabled={isLoggingIn}
      className={`flex items-center justify-center gap-3 w-full py-3.5 px-5 rounded-full border text-sm font-semibold transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed ${
        isDarkMode
          ? "bg-white/[0.04] border-white/10 text-white hover:bg-white/10"
          : "bg-white border-neutral-200 text-neutral-900 hover:bg-neutral-50"
      }`}
    >
      {isLoggingIn ? (
        <>
          <FiLoader className="w-4 h-4 animate-spin" />
          Logging in...
        </>
      ) : (
        <>
          {/* Official Google mark, kept multicolor per Google's sign-in branding guidelines */}
          <FcGoogle className="w-5 h-5" />
          Continue with Google to chat
        </>
      )}
    </button>
  );
};

export default LoginButton;
