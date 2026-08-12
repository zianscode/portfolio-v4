import { db } from "@/lib/firebaseConfig";
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp, DocumentData, QuerySnapshot } from "firebase/firestore";

const messagesRef = collection(db, "messages");

interface Message {
  id: string;
  username: string;
  message: string;
  timestamp: Date;
}

export const sendMessage = async (username: string, message: string): Promise<void> => {
  if (!message.trim()) return;

  try {
    await addDoc(messagesRef, {
      username,
      message,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error sending message:", error);
    throw new Error("Failed to send message");
  }
};

export const getMessages = (callback: (messages: Message[]) => void): (() => void) => {
  const q = query(messagesRef, orderBy("timestamp", "asc"));

  return onSnapshot(q, (snapshot: QuerySnapshot<DocumentData>) => {
    const messages = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Message[];

    callback(messages);
  });
};