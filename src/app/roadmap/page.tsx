import RoadmapContent from "@/components/roadmap/RoadmapContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "Roadmap pembelajaran dan alur pengembangan skill Fajar Fauzian sebagai Frontend Developer (React, Next.js, TypeScript, UI/UX).",
  alternates: {
    canonical: "https://zianscode.vercel.app/roadmap",
  },
  openGraph: {
    title: "Roadmap | Fajar Fauzian",
    description:
      "Roadmap pembelajaran dan alur pengembangan skill Fajar Fauzian sebagai Frontend Developer.",
    url: "https://zianscode.vercel.app/roadmap",
  },
};

export default function RoadmapPage() {
  return <RoadmapContent />;
}