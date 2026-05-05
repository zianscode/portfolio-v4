"use client"; 

import { Poppins, Sora } from "next/font/google";
import { DarkModeProvider } from "@/context/DarkModeContext";
import "../styles/globals.css";
import dynamic from "next/dynamic";
import Favicon from "@/components/Favicon";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ParticleStars from "@/components/ParticleStars";
import { PAGE_TITLES, LOADING_DURATION, DEFAULT_TITLE } from "@/utils/constants";
// import ChatRoomButton from "@/components/ChatRoomButton"; 

const ClientOnlyAppContent = dynamic(() => import("@/components/AppContent"), {
  ssr: false,
  loading: () => <div className="min-h-screen"></div>, 
});

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

type PagePath = keyof typeof PAGE_TITLES;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(false);
  const pathname = usePathname() || "/";

  // Initial loading only
  useEffect(() => {
    setIsLoading(true);
    setIsInitialLoad(true);

    const timeout = setTimeout(() => {
      setIsLoading(false);
      setIsInitialLoad(false);
    }, LOADING_DURATION);

    return () => clearTimeout(timeout);
  }, []);

  // Update document title on pathname change
  useEffect(() => {
    document.title = PAGE_TITLES[pathname as PagePath] || DEFAULT_TITLE;
  }, [pathname]);

  // useEffect(() => {
  //   // Setelah loading selesai, tampilkan tombol chat room
  //   if (!isLoading) {
  //     setShowChatRoomButton(true);
  //   }
  // }, [isLoading]);

  return (
    <html lang="en">
      <head>
        <Favicon />
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
      </head>
      <body className={`${poppins.variable} ${sora.variable} antialiased`}>
        {/* Komponen ParticleStars */}
        <ParticleStars />

        {/* Provider untuk Dark Mode */}
        <DarkModeProvider>
          {/* Render tombol chat room hanya jika showChatRoomButton bernilai true */}
          {/* {showChatRoomButton && <ChatRoomButton />} */}

          {/* Render AppContent hanya di sisi klien */}
          <ClientOnlyAppContent isLoading={isLoading} isInitialLoad={isInitialLoad}>
            {children}
          </ClientOnlyAppContent>
        </DarkModeProvider>
      </body>
    </html>
  );
}