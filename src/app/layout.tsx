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
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}