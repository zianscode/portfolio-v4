"use client";

import { useState, useEffect } from "react";
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
    // Simulasi loading awal
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Setelah loading selesai, kita beri jeda sedikit sebelum melepas isInitialLoad
      // untuk memastikan animasi masuk berjalan lancar
      setTimeout(() => setIsInitialLoad(false), 500);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <DarkModeProvider>
      <AppContent isLoading={isLoading} isInitialLoad={isInitialLoad}>
        {children}
      </AppContent>
    </DarkModeProvider>
  );
}
