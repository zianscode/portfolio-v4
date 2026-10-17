"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { db, auth, loginWithGoogle } from "@/lib/firebase";
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
import { Message, ReplyTo, User } from "@/types/chatroom";

const MESSAGES_LIMIT = 50;
export const MAINTENANCE_MODE = false;

export interface AlertConfig {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText: string;
  cancelText: string;
  type: "warning" | "delete" | "edit" | "success" | "login";
  onConfirm: () => void;
}

export function useChatroom() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  const [editMessageText, setEditMessageText] = useState("");
  const [replyingTo, setReplyingTo] = useState<ReplyTo | null>(null);
  const [showWelcome, setShowWelcome] = useState(false);

  const justLoggedInRef = useRef(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const hasScrolledOnLoadRef = useRef(false);

  const [alertConfig, setAlertConfig] = useState<AlertConfig>({
    isOpen: false,
    title: "",
    message: "",
    confirmText: "",
    cancelText: "Cancel",
    type: "warning",
    onConfirm: () => {},
  });

  const showAlert = useCallback((config: Partial<AlertConfig>) => {
    setAlertConfig((prev) => ({ ...prev, ...config, isOpen: true }));
  }, []);

  const hideAlert = useCallback(() => {
    setAlertConfig((prev) => ({ ...prev, isOpen: false }));
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          name: currentUser.displayName || "Anonymous",
          email: currentUser.email || "",
          photo: currentUser.photoURL || "/chatroom/default-avatar.svg",
          uid: currentUser.uid,
        });
        if (justLoggedInRef.current) {
          justLoggedInRef.current = false;
          setShowWelcome(true);
        }
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!showWelcome) return;
    const timer = setTimeout(() => setShowWelcome(false), 6000);
    return () => clearTimeout(timer);
  }, [showWelcome]);

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
            .map((docSnap) => {
              const data = docSnap.data();
              return {
                id: docSnap.id,
                username: data.username || "Unknown User",
                message: data.message || "",
                photo: data.photo || "/chatroom/default-avatar.svg",
                timestamp: data.timestamp,
                userId: data.userId || "",
                replyTo: data.replyTo || null,
              };
            })
            .reverse();
          setMessages(fetchedMessages);
          setIsLoading(false);
          setError(null);
        },
        (err) => {
          console.error("Error fetching messages:", err);
          setError("Failed to load messages. Please try again later.");
          setIsLoading(false);
          toast.error("Failed to load messages");
        }
      );

      return unsubscribe;
    } catch (err) {
      console.error("Error setting up messages listener:", err);
      setError("Failed to initialize chat. Please refresh the page.");
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!isLoading && !hasScrolledOnLoadRef.current) {
      const timer = setTimeout(() => {
        if (messagesContainerRef.current) {
          messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
          hasScrolledOnLoadRef.current = true;
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const handleLogin = useCallback(async () => {
    if (MAINTENANCE_MODE) return;

    setIsLoggingIn(true);
    justLoggedInRef.current = true;
    try {
      await loginWithGoogle();
    } catch (err) {
      justLoggedInRef.current = false;
      console.error("Login error:", err);
      toast.error("Failed to login. Please try again.");
    } finally {
      setIsLoggingIn(false);
    }
  }, []);

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
        } catch (err) {
          console.error("Logout error:", err);
          toast.error("Failed to logout. Please try again.");
        }
      },
    });
  }, [showAlert, hideAlert]);

  const handleSendMessage = useCallback(
    async (messageText: string) => {
      if (MAINTENANCE_MODE) return;
      if (!user || !messageText.trim() || isSending) return;

      setIsSending(true);

      try {
        const messageData: Record<string, unknown> = {
          username: user.name,
          message: messageText.trim(),
          photo: user.photo,
          timestamp: serverTimestamp(),
          userId: user.uid,
        };

        if (replyingTo) {
          messageData.replyTo = {
            id: replyingTo.id,
            username: replyingTo.username,
            message: replyingTo.message,
          };
        }

        await addDoc(collection(db, "messages"), messageData);
        setReplyingTo(null);
      } catch (err) {
        console.error("Error sending message:", err);
        toast.error("Failed to send message. Please try again.");
      } finally {
        setIsSending(false);
      }
    },
    [user, isSending, replyingTo]
  );

  const handleDeleteMessage = useCallback(
    async (messageId: string, messageUserId: string) => {
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
          } catch (err) {
            console.error("Error deleting message:", err);
            toast.error("Failed to delete message");
          }
        },
      });
    },
    [user, showAlert, hideAlert]
  );

  const handleEditMessage = useCallback(
    async (messageId: string, messageUserId: string) => {
      if (MAINTENANCE_MODE) return;

      if (!user || user.uid !== messageUserId) {
        toast.error("You can only edit your own messages");
        return;
      }

      const msg = messages.find((m) => m.id === messageId);
      if (msg) {
        setEditingMessageId(messageId);
        setEditMessageText(msg.message);
      }
    },
    [user, messages]
  );

  const handleSaveEdit = useCallback(async () => {
    if (MAINTENANCE_MODE) return;
    if (!editingMessageId || !editMessageText.trim()) return;

    try {
      const messageRef = doc(db, "messages", editingMessageId);
      await updateDoc(messageRef, {
        message: editMessageText.trim(),
        editedAt: serverTimestamp(),
      });

      setEditingMessageId(null);
      setEditMessageText("");
      toast.success("Message updated successfully");
    } catch (err) {
      console.error("Error updating message:", err);
      toast.error("Failed to update message");
    }
  }, [editingMessageId, editMessageText]);

  const handleCancelEdit = useCallback(() => {
    setEditingMessageId(null);
    setEditMessageText("");
  }, []);

  const handleReplyMessage = useCallback(
    (msg: Message) => {
      if (!user) {
        showAlert({
          title: "Login required",
          message: `You need to log in first to reply to ${msg.username}.`,
          confirmText: "Login with Google",
          type: "login",
          onConfirm: handleLogin,
        });
        return;
      }
      setReplyingTo({
        id: msg.id,
        username: msg.username,
        message: msg.message,
      });
    },
    [user, showAlert, handleLogin]
  );

  const handleCancelReply = useCallback(() => {
    setReplyingTo(null);
  }, []);

  return {
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
  };
}
