import DashboardContent from "@/components/dashboard/DashboardContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Personal dashboard Fajar Fauzian yang menampilkan aktivitas GitHub kontribusi dan metrik performa web development.",
  alternates: {
    canonical: "https://zianscode.vercel.app/dashboard",
  },
  openGraph: {
    title: "Dashboard | Fajar Fauzian",
    description:
      "Personal dashboard Fajar Fauzian yang menampilkan aktivitas GitHub kontribusi dan metrik performa.",
    url: "https://zianscode.vercel.app/dashboard",
  },
};

export default function DashboardPage() {
  return <DashboardContent />;
}