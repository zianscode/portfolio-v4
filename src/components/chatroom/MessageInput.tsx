"use client";
import { useState } from "react";
import { FiArrowUp, FiCornerUpLeft, FiX } from "react-icons/fi";
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
  const canSend = newMessage.trim().length > 0 && !isSending;

  const handleSend = async () => {
    if (!canSend) return;

    await onSendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div className="space-y-2">
      {replyingTo && (
        <div
          className={`flex items-center gap-3 pl-4 pr-1.5 py-1.5 rounded-full text-xs ${
            isDarkMode ? "bg-neutral-900 text-neutral-300" : "bg-neutral-100 text-neutral-600"
          }`}
        >
          <FiCornerUpLeft className="w-3.5 h-3.5 shrink-0" />
          <p className="min-w-0 truncate">
            <span className={`font-semibold ${isDarkMode ? "text-white" : "text-neutral-900"}`}>
              {replyingTo.username}
            </span>
            <span className="ml-2 opacity-70">{replyingTo.message}</span>
          </p>
          <button
            onClick={onCancelReply}
            className={`ml-auto shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
              isDarkMode ? "hover:bg-white/10 hover:text-white" : "hover:bg-neutral-200 hover:text-neutral-900"
            }`}
            aria-label="Cancel reply"
          >
            <FiX className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <div
        className={`flex items-center gap-2 pl-5 pr-1.5 py-1.5 rounded-full border transition-colors ${
          isDarkMode
            ? "bg-neutral-900 border-white/10 focus-within:border-white/30"
            : "bg-white border-neutral-200 focus-within:border-neutral-400"
        }`}
      >
        <input
          type="text"
          placeholder={replyingTo ? `Reply to ${replyingTo.username}...` : "Write a message..."}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          className={`flex-1 min-w-0 py-2 bg-transparent text-sm outline-none ${
            isDarkMode ? "text-white placeholder-neutral-500" : "text-neutral-900 placeholder-neutral-400"
          }`}
          aria-label="Type your message"
        />
        <button
          onClick={handleSend}
          disabled={!canSend}
          className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
            canSend
              ? isDarkMode
                ? "bg-neutral-700 text-white hover:bg-neutral-600"
                : "bg-neutral-200 text-neutral-900 hover:bg-neutral-300"
              : isDarkMode
                ? "bg-white/[0.06] text-neutral-600"
                : "bg-neutral-100 text-neutral-400"
          }`}
          aria-label="Send message"
        >
          <FiArrowUp className={`w-4 h-4 ${isSending ? "animate-pulse" : ""}`} />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
