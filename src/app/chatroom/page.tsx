"use client";
import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import { useDarkMode } from "@/context/DarkModeContext";
import {
  db,
  auth,
  loginWithGoogle,
  formatTimestamp as libFormatTimestamp,
} from "@/lib/firebaseConfig";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  limit,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

// Import components
import ChatroomHeader from "@/components/chatroom/ChatroomHeader";
import UserProfile from "@/components/chatroom/UserProfile";
import MessagesList from "@/components/chatroom/MessagesList";
import MessageInput from "@/components/chatroom/MessageInput";
import LoginButton from "@/components/chatroom/LoginButton";
import CustomAlert from "@/components/chatroom/CustomAlert";

// Import types
import { Message, User } from "@/types/chatroom";

// Constants
const MESSAGES_LIMIT = 50; // Reduced from 100 for better performance
const MAINTENANCE_MODE = false; // Centralized maintenance control

// Alert configuration type
interface AlertConfig {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText: string;
  cancelText: string;
  type: "warning" | "delete" | "edit" | "success";
  onConfirm: () => void;
}

const ChatroomPage = () => {
  const { isDarkMode } = useDarkMode();
  const router = useRouter();
  
  // State management
  const [messages, setMessages] = useState<Message[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  const [editMessageText, setEditMessageText] = useState("");
  
  // Refs
  const unsubscribeRef = useRef<(() => void) | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Alert state with default values
  const [alertConfig, setAlertConfig] = useState<AlertConfig>({
    isOpen: false,
    title: "",
    message: "",
    confirmText: "",
    cancelText: "Cancel",
    type: "warning",
    onConfirm: () => {},
  });

  // Memoized values
  const containerClasses = useMemo(() => 
    `flex min-h-screen ${isDarkMode ? "text-white" : "text-black"}`,
    [isDarkMode]
  );

  const chatContainerClasses = useMemo(() => 
    `rounded-xl p-6 border ${isDarkMode ? "border-neutral-800" : "border-neutral-200"} max-h-[calc(100vh-400px)] overflow-y-auto scrollbar-none`,
    [isDarkMode]
  );

  const maintenanceBgClasses = useMemo(() => 
    `fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md ${isDarkMode ? "bg-black" : "bg-gray-100"}`,
    [isDarkMode]
  );

  const maintenanceModalClasses = useMemo(() => 
    `p-8 rounded-xl max-w-md text-center ${isDarkMode ? "bg-neutral-900 border border-neutral-700" : "bg-white shadow-xl"}`,
    [isDarkMode]
  );

  // Utility functions
  const showAlert = useCallback((config: Partial<AlertConfig>) => {
    setAlertConfig(prev => ({ ...prev, ...config, isOpen: true }));
  }, []);

  const hideAlert = useCallback(() => {
    setAlertConfig(prev => ({ ...prev, isOpen: false }));
  }, []);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Authentication handler
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          name: currentUser.displayName || "Anonymous",
          email: currentUser.email || "",
          photo: currentUser.photoURL || "/default-profile.png",
          uid: currentUser.uid,
        });
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  // Messages fetcher with optimizations
  useEffect(() => {
    if (MAINTENANCE_MODE) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const messagesRef = collection(db, "messages");
      const q = query(messagesRef, orderBy("timestamp", "desc"), limit(MESSAGES_LIMIT));

      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          const fetchedMessages: Message[] = snapshot.docs
            .map((doc) => {
              const data = doc.data();
              return {
                id: doc.id,
                username: data.username || "Unknown User",
                message: data.message || "",
                photo: data.photo || "/default-profile.png",
                timestamp: data.timestamp,
                userId: data.userId || "",
              };
            })
            .reverse();

          setMessages(fetchedMessages);
          setIsLoading(false);
          setError(null);
          
          // Auto-scroll to bottom on new messages
          setTimeout(scrollToBottom, 100);
        },
        (error) => {
          console.error("Error fetching messages:", error);
          setError("Failed to load messages. Please try again later.");
          setIsLoading(false);
          toast.error("Failed to load messages");
        }
      );

      unsubscribeRef.current = unsubscribe;
      return unsubscribe;
    } catch (error) {
      console.error("Error setting up messages listener:", error);
      setError("Failed to initialize chat. Please refresh the page.");
      setIsLoading(false);
    }
  }, [scrollToBottom]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
      }
    };
  }, []);

  // Event handlers
  const handleLogout = useCallback(async () => {
    if (MAINTENANCE_MODE) return;

    showAlert({
      title: "Sign Out",
      message: "Are you sure you want to sign out from the chatroom?",
      confirmText: "Sign Out",
      type: "warning",
      onConfirm: async () => {
        try {
          await signOut(auth);
          toast.success("Logged out successfully");
          hideAlert();
        } catch (error) {
          console.error("Logout error:", error);
          toast.error("Failed to logout. Please try again.");
        }
      },
    });
  }, [showAlert, hideAlert]);

  const handleLogin = useCallback(async () => {
    if (MAINTENANCE_MODE) return;

    setIsLoggingIn(true);
    try {
      await loginWithGoogle();
      toast.success("Logged in successfully");
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Failed to login. Please try again.");
    } finally {
      setIsLoggingIn(false);
    }
  }, []);

  const handleDeleteMessage = useCallback(async (
    messageId: string,
    messageUserId: string
  ) => {
    if (MAINTENANCE_MODE) return;
    
    if (!user || user.uid !== messageUserId) {
      toast.error("You can only delete your own messages");
      return;
    }

    showAlert({
      title: "Delete Message",
      message: "Are you sure you want to delete this message? This action cannot be undone.",
      confirmText: "Delete",
      type: "delete",
      onConfirm: async () => {
        try {
          await deleteDoc(doc(db, "messages", messageId));
          toast.success("Message deleted successfully");
          hideAlert();
        } catch (error) {
          console.error("Error deleting message:", error);
          toast.error("Failed to delete message");
        }
      },
    });
  }, [user, showAlert, hideAlert]);

  const handleEditMessage = useCallback(async (
    messageId: string,
    messageUserId: string
  ) => {
    if (MAINTENANCE_MODE) return;
    
    if (!user || user.uid !== messageUserId) {
      toast.error("You can only edit your own messages");
      return;
    }

    const message = messages.find((msg) => msg.id === messageId);
    if (message) {
      setEditingMessageId(messageId);
      setEditMessageText(message.message);
    }
  }, [user, messages]);

  const handleSaveEdit = useCallback(async () => {
    if (MAINTENANCE_MODE) return;
    if (!editingMessageId || !editMessageText.trim()) return;

    try {
      const messageRef = doc(db, "messages", editingMessageId);
      await updateDoc(messageRef, {
        message: editMessageText.trim(),
        editedAt: serverTimestamp(), // Add edit timestamp
      });
      
      setEditingMessageId(null);
      setEditMessageText("");
      toast.success("Message updated successfully");
    } catch (error) {
      console.error("Error updating message:", error);
      toast.error("Failed to update message");
    }
  }, [editingMessageId, editMessageText]);

  const handleCancelEdit = useCallback(() => {
    setEditingMessageId(null);
    setEditMessageText("");
  }, []);

  const handleSendMessage = useCallback(async (message: string) => {
    if (MAINTENANCE_MODE) return;
    if (!user || !message.trim() || isSending) return;

    setIsSending(true);

    try {
      const messageData = {
        username: user.name,
        message: message.trim(),
        photo: user.photo,
        timestamp: serverTimestamp(),
        userId: user.uid,
      };

      await addDoc(collection(db, "messages"), messageData);
      
      // Auto-scroll to bottom after sending
      setTimeout(scrollToBottom, 100);
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  }, [user, isSending, scrollToBottom]);

  const redirectToHome = useCallback(() => {
    router.push("/");
  }, [router]);

  // Render maintenance mode
  if (MAINTENANCE_MODE) {
    return (
      <div className={containerClasses}>
        <div className={maintenanceBgClasses}>
          <div className={maintenanceModalClasses}>
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-16 w-16 ${isDarkMode ? "text-yellow-400" : "text-yellow-500"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">Under Maintenance</h2>
            <p className="mb-4">
              This chatroom is currently undergoing maintenance. Please check back later.
            </p>
            <p className="text-sm text-gray-500 mb-6">We&apos;ll be back soon!</p>
            <button
              onClick={redirectToHome}
              className={`px-6 py-2 rounded-lg transition-colors ${
                isDarkMode
                  ? "bg-neutral-800 hover:bg-neutral-700 text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-black"
              }`}
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={containerClasses}>
      <main className="flex-1 flex justify-center pt-10 md:pt-16 lg:pt-14 px-4 md:px-8 lg:px-12 ml-0 md:ml-8">
        <div className="max-w-4xl mx-auto w-full relative">
          {/* Header */}
          <ChatroomHeader isDarkMode={isDarkMode} />

          {/* User Profile */}
          {user && (
            <UserProfile 
              user={user} 
              handleLogout={handleLogout}
              isDarkMode={isDarkMode}
            />
          )}

          {/* Chat Messages Container */}
          <div className={chatContainerClasses}>
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
              onEditTextChange={setEditMessageText}
              onSaveEdit={handleSaveEdit}
              onCancelEdit={handleCancelEdit}
              formatTimestamp={libFormatTimestamp}
            />
            <div ref={messagesEndRef} />
          </div>

          {/* Login Button */}
          {!user && (
            <LoginButton
              isDarkMode={isDarkMode}
              onLogin={handleLogin}
              isLoggingIn={isLoggingIn}
            />
          )}

          {/* Message Input */}
          {user && (
            <MessageInput
              isDarkMode={isDarkMode}
              onSendMessage={handleSendMessage}
              isSending={isSending}
              disabled={MAINTENANCE_MODE}
            />
          )}
        </div>
      </main>

      {/* Custom Alert Dialog */}
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
};

export default ChatroomPage;