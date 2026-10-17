import { Poppins, Sora } from "next/font/google";
import "@/styles/globals.css";
import RootLayoutClient from "@/components/layout/RootLayoutClient";
import JsonLd from "@/components/layout/JsonLd";
import { Metadata } from "next";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const siteUrl = "https://zianscode.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fajar Fauzian | Frontend & Web Developer",
    template: "%s | Fajar Fauzian",
  },
  description:
    "Portfolio pribadi Fajar Fauzian, Frontend Developer yang berfokus pada React.js, Next.js, TypeScript, dan pengembangan aplikasi web modern.",
  authors: [{ name: "Fajar Fauzian", url: siteUrl }],
  creator: "Fajar Fauzian",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Fajar Fauzian | Frontend & Web Developer",
    description:
      "Portfolio pribadi Fajar Fauzian, Frontend Developer yang berfokus pada React.js, Next.js, TypeScript, dan pengembangan aplikasi web modern.",
    siteName: "Fajar Fauzian Portfolio",
    images: [
      {
        url: "/profile/fajar-fauzian.jpg",
        width: 800,
        height: 800,
        alt: "Fajar Fauzian - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fajar Fauzian | Frontend & Web Developer",
    description:
      "Portfolio pribadi Fajar Fauzian, Frontend Developer yang berfokus pada React.js, Next.js, TypeScript, dan pengembangan aplikasi web modern.",
    images: ["/profile/fajar-fauzian.jpg"],
  },
  icons: {
    icon: [
      { url: "/icons/app-icon.png", type: "image/png" },
      { url: "/icons/app-icon.png", sizes: "16x16" },
      { url: "/icons/app-icon.png", sizes: "32x32" },
    ],
    shortcut: "/icons/app-icon.png",
    apple: "/icons/app-icon.png",
  },
  formatDetection: {
    telephone: false,
    date: false,
    email: false,
    address: false,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head suppressHydrationWarning />
      <body className={`${poppins.variable} ${sora.variable} antialiased`} suppressHydrationWarning>
        <JsonLd />
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}