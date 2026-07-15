"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaEdit, FaTrash, FaReply, FaSave, FaTimes } from "react-icons/fa";
import { Message, User } from "@/types/chatroom";
import { formatTimestamp } from "@/utils/chatroom";
import { getBubbleStyle } from "@/utils/bubble-color";

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
  isLastMessage?: boolean;
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
  isLastMessage = false,
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-start gap-3 ${isLastMessage ? 'mb-8' : 'mb-4'} ${isOwner ? 'flex-row-reverse' : ''}`}
    >
      <Image
        src={message.photo}
        alt={message.username}
        width={36}
        height={36}
        className="w-9 h-9 rounded-full border border-gray-300 object-cover flex-shrink-0"
      />

      <div className={`flex flex-col max-w-[75%] ${isOwner ? 'items-end' : 'items-start'}`}>
        {/* Username + Timestamp + Actions */}
        <div className={`flex items-center gap-2 mb-1 ${isOwner ? 'flex-row-reverse' : ''}`}>
          <p className={`font-semibold text-sm ${isDarkMode ? "text-stone-300" : "text-stone-700"}`}>
            {message.username}
          </p>
          <span className={`text-[11px] sm:text-[10px] ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
            {formatTimestamp(message.timestamp)}
          </span>
          {!isEditing && (
            <div className="flex items-center gap-1 ml-1">
              {!isOwner && (
                <button
                  onClick={() => onReply(message)}
                  className={`p-1.5 sm:p-1 rounded transition-colors ${
                    isDarkMode ? "text-gray-500 hover:text-green-400 hover:bg-neutral-800" : "text-gray-400 hover:text-green-600 hover:bg-gray-100"
                  }`}
                  aria-label="Reply to message"
                >
                  <FaReply size={12} />
                </button>
              )}
              {isOwner && (
                <>
                  <button
                    onClick={() => onEdit(message.id, message.userId)}
                    className={`p-1.5 sm:p-1 rounded transition-colors ${
                      isDarkMode ? "text-gray-500 hover:text-blue-400 hover:bg-neutral-800" : "text-gray-400 hover:text-blue-600 hover:bg-gray-100"
                    }`}
                    aria-label="Edit message"
                  >
                    <FaEdit size={13} />
                  </button>
                  <button
                    onClick={() => onDelete(message.id, message.userId)}
                    className={`p-1.5 sm:p-1 rounded transition-colors ${
                      isDarkMode ? "text-gray-500 hover:text-red-400 hover:bg-neutral-800" : "text-gray-400 hover:text-red-600 hover:bg-gray-100"
                    }`}
                    aria-label="Delete message"
                  >
                    <FaTrash size={13} />
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
            className={`w-full rounded-2xl overflow-hidden border transition-colors ${
              isDarkMode
                ? "bg-neutral-800/80 border-neutral-700"
                : "bg-neutral-50 border-neutral-200"
            }`}
          >
            <textarea
              ref={editInputRef}
              value={editText}
              onChange={(e) => onEditTextChange(e.target.value)}
              className={`w-full resize-none px-4 py-3 border-0 focus:ring-0 focus:outline-none text-sm leading-relaxed ${
                isDarkMode
                  ? "bg-transparent text-white placeholder-neutral-500"
                  : "bg-transparent text-neutral-900 placeholder-neutral-400"
              }`}
              rows={2}
              aria-label="Edit message"
            />
            <div className={`flex items-center justify-between px-4 pb-3 pt-1`}>
              <span className={`text-[11px] ${isDarkMode ? "text-neutral-500" : "text-neutral-400"}`}>
                Esc ⎌ to cancel
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={onCancelEdit}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                    isDarkMode
                      ? "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-700 active:bg-neutral-700"
                      : "text-neutral-500 hover:text-neutral-700 hover:bg-neutral-200 active:bg-neutral-200"
                  }`}
                >
                  <FaTimes size={11} />
                  <span>Cancel</span>
                </button>
                <button
                  onClick={onSaveEdit}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-blue-600/20"
                >
                  <FaSave size={11} />
                  <span>Save</span>
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <div
            style={getBubbleStyle(message.userId, isDarkMode)}
            className={`px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed break-words ${
              isDarkMode ? "text-gray-100" : "text-gray-800"
            }`}
          >
            {message.replyTo && (
              <div className={`mb-2 pl-3 border-l-2 rounded-sm text-xs ${
                isDarkMode ? "border-gray-500 text-gray-400" : "border-gray-400 text-gray-500"
              }`}>
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