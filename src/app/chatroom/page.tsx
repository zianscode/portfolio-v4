import ChatroomContent from "@/components/chatroom/ChatroomContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat Room",
  description:
    "Chat Room interaktif tempat pengunjung dapat meninggalkan pesan dan berinteraksi secara real-time di portfolio Fajar Fauzian.",
  alternates: {
    canonical: "https://zianscode.vercel.app/chatroom",
  },
  openGraph: {
    title: "Chat Room | Fajar Fauzian",
    description:
      "Chat Room interaktif tempat pengunjung dapat meninggalkan pesan di portfolio Fajar Fauzian.",
    url: "https://zianscode.vercel.app/chatroom",
  },
};

export default function ChatroomPage() {
  return <ChatroomContent />;
}