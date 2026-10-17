"use client";

import React, { createContext, useContext, useEffect, useSyncExternalStore } from "react";

interface DarkModeContextType {
  isDarkMode: boolean;
  mounted: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType>({
  isDarkMode: false,
  mounted: false,
  toggleDarkMode: () => {},
});

export const useDarkMode = () => useContext(DarkModeContext);

const STORAGE_KEY = "darkMode";
const listeners = new Set<() => void>();

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    media.removeEventListener("change", listener);
    window.removeEventListener("storage", listener);
  };
};

const getSnapshot = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved !== null
    ? JSON.parse(saved) === true
    : window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const getServerSnapshot = () => false;

const subscribeNoop = () => () => {};

export const DarkModeProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const isDarkMode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const mounted = useSyncExternalStore(subscribeNoop, () => true, () => false);

  useEffect(() => {
    if (!mounted) return;

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("bg-neutral-950");
      document.body.classList.remove("bg-white");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.add("bg-white");
      document.body.classList.remove("bg-neutral-950");
    }
  }, [isDarkMode, mounted]);

  const toggleDarkMode = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(!getSnapshot()));
    listeners.forEach((listener) => listener());
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, mounted, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
