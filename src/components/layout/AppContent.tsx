"use client";

import { useDarkMode } from "@/context/DarkModeContext";
import LoadingScreen from "@/components/layout/LoadingScreen";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";

const ClientOnlyNavigation = dynamic(() => import("@/components/navigation/Navigation"), {
  ssr: false,
});

interface AppContentProps {
  isLoading: boolean;
  isInitialLoad: boolean;
  children: React.ReactNode;
}

import GridBackground from "@/components/effects/GridBackground";
import ShootingStars from "@/components/effects/ShootingStars";
import ChatroomButton from "@/components/chatroom/ChatroomButton";

function AppContent({ isLoading, isInitialLoad, children }: AppContentProps) {
  const { isDarkMode, mounted } = useDarkMode();

  return (
    <>
      <div className={`fixed inset-0 z-[-1] ${mounted ? (isDarkMode ? 'bg-neutral-950' : 'bg-white') : ''}`} />
      <GridBackground />
      <ShootingStars />
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-[1000]"
            style={{
              backgroundColor: isDarkMode ? "#171717" : "#ffffff",
            }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingScreen />
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="flex flex-1 overflow-x-hidden pt-12 md:pt-0 relative z-10"
      >
        <AnimatePresence>
          <motion.div
            className="relative z-[1001]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ClientOnlyNavigation isLoading={isLoading} />
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="flex-1 min-w-0 overflow-x-hidden"
          initial={{ opacity: isInitialLoad ? 0 : 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </div>

      <ChatroomButton />
    </>
  );
}

export default AppContent;