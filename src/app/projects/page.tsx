import ProjectsContent from "@/components/projects/ProjectsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Eksplorasi kumpulan proyek web development, aplikasi web, dan sertifikasi profesional yang dibangun oleh Fajar Fauzian.",
  alternates: {
    canonical: "https://zianscode.vercel.app/projects",
  },
  openGraph: {
    title: "Projects | Fajar Fauzian",
    description:
      "Eksplorasi kumpulan proyek web development, aplikasi web, dan sertifikasi profesional yang dibangun oleh Fajar Fauzian.",
    url: "https://zianscode.vercel.app/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}