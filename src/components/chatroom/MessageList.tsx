"use client";
import { FiLoader, FiMessageCircle } from "react-icons/fi";
import { Message, User } from "@/types/chatroom";
import MessageItem from "./MessageItem";

interface MessagesListProps {
  messages: Message[];
  currentUser: User | null;
  isDarkMode: boolean;
  isLoading: boolean;
  error: string | null;
  editingMessageId: string | null;
  editMessageText: string;
  onEditMessage: (messageId: string, messageUserId: string) => void;
  onDeleteMessage: (messageId: string, messageUserId: string) => void;
  onReplyMessage: (message: Message) => void;
  onEditTextChange: (text: string) => void;
  onSaveEdit: () => Promise<void>;
  onCancelEdit: () => void;
}

const MessagesList = ({
  messages,
  currentUser,
  isDarkMode,
  isLoading,
  error,
  editingMessageId,
  editMessageText,
  onEditMessage,
  onDeleteMessage,
  onReplyMessage,
  onEditTextChange,
  onSaveEdit,
  onCancelEdit,
}: MessagesListProps) => {
  const muted = isDarkMode ? "text-neutral-400" : "text-neutral-500";

  if (isLoading) {
    return (
      <div className={`flex justify-center items-center gap-2 h-32 text-sm ${muted}`}>
        <FiLoader className="w-4 h-4 animate-spin" />
        Loading messages...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center gap-3 py-8 text-center">
        <p className={`text-sm ${muted}`}>{error}</p>
        <button
          onClick={() => window.location.reload()}
          className={`px-4 py-2 rounded-full border text-xs font-semibold transition-colors ${
            isDarkMode
              ? "border-white/10 text-neutral-200 hover:bg-white/10"
              : "border-neutral-200 text-neutral-800 hover:bg-neutral-100"
          }`}
        >
          Try again
        </button>
      </div>
    );
  }

  if (messages.length === 0) {
    return (
      <div className={`flex flex-col items-center gap-2 py-10 text-center text-sm ${muted}`}>
        <FiMessageCircle className="w-6 h-6" />
        No messages yet. Be the first to say something.
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {messages.map((message) => (
        <MessageItem
          key={message.id}
          message={message}
          currentUser={currentUser}
          isDarkMode={isDarkMode}
          onEdit={onEditMessage}
          onDelete={onDeleteMessage}
          onReply={onReplyMessage}
          isEditing={editingMessageId === message.id}
          editText={editingMessageId === message.id ? editMessageText : ""}
          onEditTextChange={onEditTextChange}
          onSaveEdit={onSaveEdit}
          onCancelEdit={onCancelEdit}
        />
      ))}
    </div>
  );
};

export default MessagesList;
