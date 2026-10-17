"use client";

import { FiMessageCircle } from "react-icons/fi";
import { useRouter } from "next/navigation";

const ChatRoomButton = () => {
  const router = useRouter();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => router.push("/chatroom")}
        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 shadow-lg shadow-black/10 dark:shadow-black/30 hover:bg-neutral-300 dark:hover:bg-neutral-700 active:scale-95 transition-all duration-200"
        aria-label="Go to Chat Room"
      >
        <FiMessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </div>
  );
};

export default ChatRoomButton;
