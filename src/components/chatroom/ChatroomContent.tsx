"use client";

import React from "react";
import { useDarkMode } from "@/context/DarkModeContext";
import { useChatroom, MAINTENANCE_MODE } from "@/hooks/useChatroom";

import ChatroomHeader from "@/components/chatroom/ChatroomHeader";
import UserProfile from "@/components/chatroom/UserProfile";
import MessagesList from "@/components/chatroom/MessagesList";
import MessageInput from "@/components/chatroom/MessageInput";
import LoginButton from "@/components/chatroom/LoginButton";
import CustomAlert from "@/components/chatroom/CustomAlert";
import WelcomeBanner from "@/components/chatroom/WelcomeBanner";
import MaintenanceModal from "@/components/chatroom/MaintenanceModal";

export default function ChatroomContent() {
  const { isDarkMode } = useDarkMode();
  const {
    messages,
    user,
    isLoading,
    error,
    isSending,
    isLoggingIn,
    editingMessageId,
    editMessageText,
    replyingTo,
    showWelcome,
    setShowWelcome,
    alertConfig,
    hideAlert,
    messagesContainerRef,
    handleLogin,
    handleLogout,
    handleSendMessage,
    handleDeleteMessage,
    handleEditMessage,
    handleSaveEdit,
    handleCancelEdit,
    handleReplyMessage,
    handleCancelReply,
    setEditMessageText,
  } = useChatroom();

  if (MAINTENANCE_MODE) {
    return <MaintenanceModal isDarkMode={isDarkMode} />;
  }

  return (
    <div
      className={`flex min-h-screen overflow-x-hidden ${
        isDarkMode ? "text-white" : "text-black"
      }`}
    >
      <main className="flex-1 min-w-0 flex flex-col items-center pt-10 md:pt-24 lg:pt-14 px-4 md:px-6 lg:px-8 ml-0 md:ml-0 lg:ml-6 pb-16 sm:pb-20">
        <div className="w-full min-w-0 max-w-[700px] xl:max-w-[830px] transition-all duration-500 ease-in-out space-y-4 sm:space-y-8">
          <ChatroomHeader isDarkMode={isDarkMode} />

          {showWelcome && (
            <WelcomeBanner
              isDarkMode={isDarkMode}
              onClose={() => setShowWelcome(false)}
            />
          )}

          {user && (
            <UserProfile
              user={user}
              handleLogout={handleLogout}
              isDarkMode={isDarkMode}
            />
          )}

          <div
            ref={messagesContainerRef}
            className={`rounded-2xl p-4 sm:p-6 border ${
              isDarkMode
                ? "bg-neutral-900/40 border-neutral-800"
                : "bg-white/50 border-neutral-200"
            } max-h-[calc(100dvh-320px)] sm:max-h-[calc(100vh-400px)] overflow-y-auto scrollbar-none`}
          >
            <MessagesList
              messages={messages}
              currentUser={user}
              isDarkMode={isDarkMode}
              isLoading={isLoading}
              error={error}
              editingMessageId={editingMessageId}
              editMessageText={editMessageText}
              onEditMessage={handleEditMessage}
              onDeleteMessage={handleDeleteMessage}
              onReplyMessage={handleReplyMessage}
              onEditTextChange={setEditMessageText}
              onSaveEdit={handleSaveEdit}
              onCancelEdit={handleCancelEdit}
            />
          </div>

          {!user && (
            <LoginButton
              isDarkMode={isDarkMode}
              onLogin={handleLogin}
              isLoggingIn={isLoggingIn}
            />
          )}

          {user && (
            <MessageInput
              isDarkMode={isDarkMode}
              onSendMessage={handleSendMessage}
              isSending={isSending}
              replyingTo={replyingTo}
              onCancelReply={handleCancelReply}
            />
          )}
        </div>
      </main>

      <CustomAlert
        isOpen={alertConfig.isOpen}
        onClose={hideAlert}
        onConfirm={alertConfig.onConfirm}
        title={alertConfig.title}
        message={alertConfig.message}
        confirmText={alertConfig.confirmText}
        cancelText={alertConfig.cancelText}
        type={alertConfig.type}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}
