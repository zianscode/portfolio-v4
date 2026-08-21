import BlogContent from "@/components/blog/BlogContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artikel, tutorial, dan catatan seputar Frontend Development, React.js, Next.js, dan Web Technology oleh Fajar Fauzian.",
  alternates: {
    canonical: "https://zianscode.vercel.app/blog",
  },
  openGraph: {
    title: "Blog | Fajar Fauzian",
    description:
      "Artikel, tutorial, dan catatan seputar Frontend Development, React.js, Next.js, dan Web Technology oleh Fajar Fauzian.",
    url: "https://zianscode.vercel.app/blog",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
