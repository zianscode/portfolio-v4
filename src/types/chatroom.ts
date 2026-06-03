import { Timestamp } from "firebase/firestore";

export interface ReplyTo {
  id: string;
  username: string;
  message: string;
}

export interface Message {
  id: string;
  username: string;
  message: string;
  photo: string;
  timestamp: Timestamp;
  userId: string;
  replyTo?: ReplyTo;
}

export interface User {
  name: string;
  email: string;
  photo: string;
  uid: string;
}