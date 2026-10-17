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
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-3 min-w-0">
        <Image
          src={user.photo}
          alt={user.name}
          width={40}
          height={40}
          className="shrink-0 rounded-full object-cover"
          priority
        />
        <div className="min-w-0">
          <p className={`font-semibold text-sm truncate ${isDarkMode ? "text-white" : "text-neutral-900"}`}>
            {user.name}
          </p>
          <p className="text-xs truncate text-neutral-500">{user.email}</p>
        </div>
      </div>

      <button
        onClick={handleLogout}
        className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold transition-colors duration-200 ${
          isDarkMode
            ? "border-white/10 text-neutral-300 hover:bg-white/10 hover:text-white"
            : "border-neutral-200 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
        }`}
      >
        <FiLogOut className="w-3.5 h-3.5" />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default UserProfile;
