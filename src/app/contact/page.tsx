import ContactContent from "@/components/contact/ContactContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Hubungi Fajar Fauzian untuk kolaborasi proyek, peluang kerja Frontend Developer, atau sekadar berdiskusi mengenai web development.",
  alternates: {
    canonical: "https://zianscode.vercel.app/contact",
  },
  openGraph: {
    title: "Contact | Fajar Fauzian",
    description:
      "Hubungi Fajar Fauzian untuk kolaborasi proyek, peluang kerja Frontend Developer, atau sekadar berdiskusi mengenai web development.",
    url: "https://zianscode.vercel.app/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}