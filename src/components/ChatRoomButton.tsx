"use client";

import { PiChatCircleDotsFill } from "react-icons/pi";
import { useRouter } from "next/navigation";

const ChatRoomButton = () => {
  const router = useRouter();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => router.push("/chatroom")}
        className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 rounded-full shadow-lg shadow-black/10 dark:shadow-black/30 hover:bg-neutral-300 dark:hover:bg-neutral-700 hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200"
        aria-label="Go to Chat Room"
      >
        <PiChatCircleDotsFill className="w-5 h-5 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform duration-200" />
      </button>
    </div>
  );
};

export default ChatRoomButton;