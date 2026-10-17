"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiCheck, FiCornerUpLeft, FiEdit2, FiTrash2, FiX } from "react-icons/fi";
import { Message, User } from "@/types/chatroom";
import { formatTimestamp } from "@/utils/chatroom";

interface MessageItemProps {
  message: Message;
  currentUser: User | null;
  isDarkMode: boolean;
  onEdit: (messageId: string, messageUserId: string) => void;
  onDelete: (messageId: string, messageUserId: string) => void;
  onReply: (message: Message) => void;
  isEditing: boolean;
  editText: string;
  onEditTextChange: (text: string) => void;
  onSaveEdit: () => Promise<void>;
  onCancelEdit: () => void;
}

const MessageItem = ({
  message,
  currentUser,
  isDarkMode,
  onEdit,
  onDelete,
  onReply,
  isEditing,
  editText,
  onEditTextChange,
  onSaveEdit,
  onCancelEdit,
}: MessageItemProps) => {
  const editInputRef = useRef<HTMLTextAreaElement | null>(null);
  const isOwner = currentUser && currentUser.uid === message.userId;

  useEffect(() => {
    if (isEditing && editInputRef.current) {
      editInputRef.current.focus();
      const length = editInputRef.current.value.length;
      editInputRef.current.setSelectionRange(length, length);
    }
  }, [isEditing]);

  const actionButton = `w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
    isDarkMode
      ? "text-neutral-500 hover:text-white hover:bg-white/10"
      : "text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100"
  }`;

  const bubble = isOwner
    ? isDarkMode
      ? "bg-neutral-700 text-white"
      : "bg-neutral-200 text-neutral-900"
    : isDarkMode
      ? "bg-neutral-800 text-neutral-100"
      : "bg-neutral-100 text-neutral-900";

  const quote = isOwner
    ? isDarkMode
      ? "border-neutral-500 text-neutral-300"
      : "border-neutral-400 text-neutral-600"
    : isDarkMode
      ? "border-neutral-600 text-neutral-400"
      : "border-neutral-300 text-neutral-500";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className={`group flex items-start gap-3 ${isOwner ? "flex-row-reverse" : ""}`}
    >
      <Image
        src={message.photo}
        alt={message.username}
        width={36}
        height={36}
        className="w-9 h-9 rounded-full object-cover flex-shrink-0"
      />

      <div className={`flex flex-col min-w-0 max-w-[75%] ${isOwner ? "items-end" : "items-start"}`}>
        <div className={`flex items-center gap-2 mb-1.5 ${isOwner ? "flex-row-reverse" : ""}`}>
          <p className={`font-semibold text-[13px] ${isDarkMode ? "text-neutral-200" : "text-neutral-800"}`}>
            {message.username}
          </p>
          <span className="text-[11px] text-neutral-500">
            {formatTimestamp(message.timestamp)}
          </span>
          {!isEditing && (
            <div className="flex items-center">
              {!isOwner && (
                <button onClick={() => onReply(message)} className={actionButton} aria-label="Reply to message">
                  <FiCornerUpLeft className="w-3.5 h-3.5" />
                </button>
              )}
              {isOwner && (
                <>
                  <button
                    onClick={() => onEdit(message.id, message.userId)}
                    className={actionButton}
                    aria-label="Edit message"
                  >
                    <FiEdit2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onDelete(message.id, message.userId)}
                    className={actionButton}
                    aria-label="Delete message"
                  >
                    <FiTrash2 className="w-3.5 h-3.5" />
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {isEditing ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className={`w-full min-w-[260px] rounded-3xl border overflow-hidden ${
              isDarkMode ? "bg-neutral-900 border-white/10" : "bg-white border-neutral-200"
            }`}
          >
            <textarea
              ref={editInputRef}
              value={editText}
              onChange={(e) => onEditTextChange(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  e.preventDefault();
                  onCancelEdit();
                } else if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  onSaveEdit();
                }
              }}
              className={`w-full resize-none px-4 pt-3 pb-1 bg-transparent border-0 focus:ring-0 focus:outline-none text-sm leading-relaxed ${
                isDarkMode ? "text-white placeholder-neutral-500" : "text-neutral-900 placeholder-neutral-400"
              }`}
              rows={2}
              aria-label="Edit message"
            />
            <div className="flex items-center justify-between gap-3 pl-4 pr-2 pb-2">
              <span className="text-[11px] text-neutral-500">Esc to cancel · Enter to save</span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={onCancelEdit}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    isDarkMode
                      ? "text-neutral-300 hover:bg-white/10 hover:text-white"
                      : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                  }`}
                >
                  <FiX className="w-3.5 h-3.5" />
                  Cancel
                </button>
                <button
                  onClick={onSaveEdit}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    isDarkMode
                      ? "bg-neutral-700 text-white hover:bg-neutral-600"
                      : "bg-neutral-200 text-neutral-900 hover:bg-neutral-300"
                  }`}
                >
                  <FiCheck className="w-3.5 h-3.5" />
                  Save
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <div
            className={`px-4 py-2.5 rounded-[20px] text-sm leading-relaxed break-words ${bubble} ${
              isOwner ? "rounded-tr-md" : "rounded-tl-md"
            }`}
          >
            {message.replyTo && (
              <div className={`mb-1.5 pl-2.5 border-l-2 text-xs ${quote}`}>
                <span className="font-semibold">{message.replyTo.username}</span>
                <p className="mt-0.5 line-clamp-1">{message.replyTo.message}</p>
              </div>
            )}
            {message.message}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MessageItem;
