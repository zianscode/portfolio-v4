"use client";
import Image from "next/image";
import { FiLogOut } from "react-icons/fi";
import { User } from "@/types/chatroom";

interface UserProfileProps {
  user: User | null;
  handleLogout: () => Promise<void>;
  isDarkMode?: boolean;
}

const UserProfile = ({ user, isDarkMode, handleLogout }: UserProfileProps) => {
  if (!user) return null;

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src={user.photo}
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full border-2 border-gray-300 dark:border-neutral-700 object-cover"
          priority
        />
        <div>
          <p className={`font-semibold text-sm ${isDarkMode ? "text-stone-200" : "text-stone-800"}`}>
            {user.name}
          </p>
          <p className={`text-xs ${isDarkMode ? "text-stone-500" : "text-stone-400"}`}>
            {user.email}
          </p>
        </div>
      </div>

      <button
        onClick={handleLogout}
        className={`flex items-center gap-2 px-3.5 py-2.5 sm:py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
          isDarkMode
            ? "bg-neutral-800 text-stone-300 border border-neutral-700 hover:bg-red-900/30 hover:text-red-400 hover:border-red-800/50"
            : "bg-white text-stone-600 border border-stone-200 hover:bg-red-50 hover:text-red-600 hover:border-red-200"
        }`}
        aria-label="Logout"
      >
        <FiLogOut size={14} />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default UserProfile;