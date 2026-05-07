"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
  useEffect,
} from "react";
import { TOTAL_FRAMES } from "@/data/projects";

// Highlight reel sequence — 6 key frames, story-driven
const REEL_FRAMES = [1, 3, 8, 12, 18, 24];
const REEL_INTERVAL_MS = 5000; // 5 seconds per frame

type NavContextType = {
  currentFrame: number;
  goTo: (id: number) => void;
  next: () => void;
  prev: () => void;
  canNext: boolean;
  canPrev: boolean;
  // Reel mode
  reelPlaying: boolean;
  reelIndex: number; // index into REEL_FRAMES
  startReel: () => void;
  stopReel: () => void;
  // Investor mode
  investorMode: boolean;
  toggleInvestor: () => void;
};

const NavContext = createContext<NavContextType | null>(null);

export function NavProvider({ children }: { children: ReactNode }) {
  const [currentFrame, setCurrentFrame] = useState(0); // start at cover (Frame 00)
  const [reelPlaying, setReelPlaying] = useState(false);
  const [reelIndex, setReelIndex] = useState(0);
  const [investorMode, setInvestorMode] = useState(false);

  const goTo = useCallback((id: number) => {
    if (id >= 0 && id <= TOTAL_FRAMES) setCurrentFrame(id);
  }, []);

  const next = useCallback(() => {
    setCurrentFrame((c) => Math.min(c + 1, TOTAL_FRAMES));
  }, []);

  const prev = useCallback(() => {
    setCurrentFrame((c) => Math.max(c - 1, 0));
  }, []);

  const startReel = useCallback(() => {
    setReelPlaying(true);
    setReelIndex(0);
    setCurrentFrame(REEL_FRAMES[0]);
  }, []);

  const stopReel = useCallback(() => {
    setReelPlaying(false);
  }, []);

  const toggleInvestor = useCallback(() => {
    setInvestorMode((v) => !v);
  }, []);

  // Reel auto-advance
  useEffect(() => {
    if (!reelPlaying) return;

    const timer = setTimeout(() => {
      const nextIdx = reelIndex + 1;
      if (nextIdx >= REEL_FRAMES.length) {
        setReelPlaying(false);
        return;
      }
      setReelIndex(nextIdx);
      setCurrentFrame(REEL_FRAMES[nextIdx]);
    }, REEL_INTERVAL_MS);

    return () => clearTimeout(timer);
  }, [reelPlaying, reelIndex]);

  return (
    <NavContext.Provider
      value={{
        currentFrame,
        goTo,
        next,
        prev,
        canNext: currentFrame < TOTAL_FRAMES,
        canPrev: currentFrame > 0,
        reelPlaying,
        reelIndex,
        startReel,
        stopReel,
        investorMode,
        toggleInvestor,
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

// Export reel frames so other components can show progress
export { REEL_FRAMES, REEL_INTERVAL_MS };
