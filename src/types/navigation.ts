import { ComponentType } from "react";

export type MenuItemType = {
  title: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  isShow?: boolean;
  isExternal: boolean;
  eventName?: string;
};

export interface DesktopMenuProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  menuItems: MenuItemType[];
  pathname: string;
  prefetchNextPages?: () => void;
}

export interface MobileMenuProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isMobileOpen: boolean;
  setIsMobileOpen: (isOpen: boolean) => void;
  menuItems: MenuItemType[];
  pathname: string;
  prefetchNextPages?: () => void;
}

export interface TabletMenuProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  menuItems: MenuItemType[];
  pathname: string;
}
