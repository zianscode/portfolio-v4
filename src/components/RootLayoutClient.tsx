"use client";

import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { DarkModeProvider } from "@/context/DarkModeContext";
import AppContent from "@/components/AppContent";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setIsInitialLoad(false), 300);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <DarkModeProvider>
      <AppContent isLoading={isLoading} isInitialLoad={isInitialLoad}>
        {children}
      </AppContent>
      <Toaster position="top-center" />
    </DarkModeProvider>
  );
}
