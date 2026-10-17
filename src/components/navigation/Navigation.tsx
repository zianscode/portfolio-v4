"use client";

import { useState } from "react";
import { useDarkMode } from "@/context/DarkModeContext";
import DesktopMenu from "@/components/navigation/DesktopMenu";
import TabletMenu from "@/components/navigation/TabletMenu";
import MobileMenu from "@/components/navigation/MobileMenu";
import { usePathname } from "next/navigation";
import MobileHeader from "@/components/navigation/MobileHeader";
import { MENU_ITEMS } from "@/data/navigation";

interface NavigationProps {
  isLoading: boolean;
}

export default function Navigation({ isLoading }: NavigationProps) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-10 flex flex-col transition-all duration-300 lg:py-8">
      {!isLoading && (
        <div className="md:hidden">
          <MobileHeader
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
            isMobileOpen={isMobileOpen}
            setIsMobileOpen={setIsMobileOpen}
          />
        </div>
      )}

      {!isLoading && (
        <div className="hidden md:block lg:hidden">
          <TabletMenu
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
            menuItems={MENU_ITEMS}
            pathname={pathname}
          />
        </div>
      )}

      <div className="hidden lg:block">
        <DesktopMenu
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          menuItems={MENU_ITEMS}
          pathname={pathname}
        />
      </div>

      <div className="md:hidden">
        <MobileMenu
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          isMobileOpen={isMobileOpen}
          setIsMobileOpen={setIsMobileOpen}
          menuItems={MENU_ITEMS}
          pathname={pathname}
          prefetchNextPages={() => {}}
        />
      </div>
    </div>
  );
}