"use client";
import { useState } from "react";
import { FaPaperPlane, FaReply, FaTimes } from "react-icons/fa";
import { ReplyTo } from "@/types/chatroom";

interface MessageInputProps {
  isDarkMode: boolean;
  onSendMessage: (message: string) => Promise<void>;
  isSending: boolean;
  replyingTo: ReplyTo | null;
  onCancelReply: () => void;
}

const MessageInput = ({ isDarkMode, onSendMessage, isSending, replyingTo, onCancelReply }: MessageInputProps) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSend = async () => {
    if (!newMessage.trim() || isSending) return;
    
    await onSendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div className="mt-6">
      {replyingTo && (
        <div className={`flex items-center gap-2 px-4 py-2 rounded-t-xl border-b-0 text-sm ${
          isDarkMode ? "bg-neutral-800 border-neutral-700 text-gray-300" : "bg-gray-100 border-gray-300 text-gray-600"
        }`}>
          <FaReply size={12} className="text-blue-500 flex-shrink-0" />
          <span className="font-semibold text-blue-500 flex-shrink-0">Replying to {replyingTo.username}</span>
          <p className="truncate text-xs opacity-70">{replyingTo.message}</p>
          <button
            onClick={onCancelReply}
            className={`ml-auto p-2 sm:p-1 rounded transition-colors ${
              isDarkMode ? "hover:bg-neutral-700 text-gray-400" : "hover:bg-gray-200 text-gray-500"
            }`}
            aria-label="Cancel reply"
          >
            <FaTimes size={12} />
          </button>
        </div>
      )}

      <div className={`flex items-center gap-3 p-2 rounded-xl border transition-colors ${
        replyingTo ? "rounded-t-none" : ""
      } ${
        isDarkMode
          ? "bg-neutral-900 border-neutral-700 focus-within:border-blue-500/50"
          : "bg-white border-gray-300 focus-within:border-blue-400"
      }`}>
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          className={`flex-1 px-3 py-2.5 bg-transparent text-sm outline-none ${
            isDarkMode
              ? "text-white placeholder-gray-500"
              : "text-black placeholder-gray-400"
          }`}
          aria-label="Type your message"
        />
        <button
          onClick={handleSend}
          disabled={!newMessage.trim() || isSending}
          className={`p-3 sm:p-2.5 rounded-xl transition-all ${
            !newMessage.trim() || isSending
              ? isDarkMode ? "bg-neutral-800 text-gray-600" : "bg-gray-200 text-gray-400"
              : isDarkMode ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20" : "bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/20"
          }`}
          aria-label="Send message"
        >
          <FaPaperPlane className={`text-base ${isSending ? "animate-pulse" : ""}`} />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;