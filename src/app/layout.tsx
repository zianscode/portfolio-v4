import { Poppins, Sora } from "next/font/google";
import "../styles/globals.css";
import RootLayoutClient from "@/components/RootLayoutClient";
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

export const metadata: Metadata = {
  title: "Zian's Code",
  description: "Portfolio of Fajar Fauzian, a Frontend Developer and UI/UX Designer.",
  icons: {
    icon: [
      { url: "/image/icon.png", type: "image/png" },
      { url: "/image/icon.png", sizes: "16x16" },
      { url: "/image/icon.png", sizes: "32x32" },
    ],
    shortcut: "/image/icon.png",
    apple: "/image/icon.png",
  },
  formatDetection: {
    telephone: false,
    date: false,
    email: false,
    address: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/*
        suppressHydrationWarning di <head> mencegah React throw error
        ketika browser extension (mobile simulator) memodifikasi DOM <head>
        sebelum React selesai hydrate. Viewport meta ditaruh di sini
        untuk menghindari __next_viewport_boundary__ bug di Next.js 16 + Turbopack.
      */}
      <head suppressHydrationWarning>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${poppins.variable} ${sora.variable} antialiased`} suppressHydrationWarning>
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}