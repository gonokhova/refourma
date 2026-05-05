"use client";

import { createContext, useContext, useState, ReactNode, useCallback } from "react";
import { TOTAL_FRAMES } from "@/data/projects";

type NavContextType = {
  currentFrame: number;
  goTo: (id: number) => void;
  next: () => void;
  prev: () => void;
  canNext: boolean;
  canPrev: boolean;
};

const NavContext = createContext<NavContextType | null>(null);

export function NavProvider({ children }: { children: ReactNode }) {
  const [currentFrame, setCurrentFrame] = useState(1);

  const goTo = useCallback((id: number) => {
    if (id >= 1 && id <= TOTAL_FRAMES) setCurrentFrame(id);
  }, []);

  const next = useCallback(() => {
    setCurrentFrame((c) => Math.min(c + 1, TOTAL_FRAMES));
  }, []);

  const prev = useCallback(() => {
    setCurrentFrame((c) => Math.max(c - 1, 1));
  }, []);

  return (
    <NavContext.Provider
      value={{
        currentFrame,
        goTo,
        next,
        prev,
        canNext: currentFrame < TOTAL_FRAMES,
        canPrev: currentFrame > 1,
      }}
    >
      {children}
    </NavContext.Provider>
  );
}

export function useNav() {
  const ctx = useContext(NavContext);
  if (!ctx) throw new Error("useNav must be used within NavProvider");
  return ctx;
}
