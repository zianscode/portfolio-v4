import AboutContent from "@/components/about/AboutContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Pelajari tentang Fajar Fauzian, seorang Frontend Developer asal Bogor. Pengalaman kerja, latar belakang karir, keahlian React, Next.js, TypeScript, dan sertifikasi.",
  alternates: {
    canonical: "https://zianscode.vercel.app/about",
  },
  openGraph: {
    title: "About Me | Fajar Fauzian",
    description:
      "Pelajari tentang Fajar Fauzian, seorang Frontend Developer asal Bogor. Pengalaman kerja, latar belakang karir, dan keahlian teknis.",
    url: "https://zianscode.vercel.app/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}