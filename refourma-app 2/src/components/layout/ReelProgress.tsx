"use client";

import { useNav, REEL_FRAMES, REEL_INTERVAL_MS } from "@/lib/nav";
import { useEffect, useState } from "react";

export function ReelProgress() {
  const { reelPlaying, reelIndex, stopReel } = useNav();
  const [progress, setProgress] = useState(0);

  // Animate progress bar within current frame
  useEffect(() => {
    if (!reelPlaying) {
      setProgress(0);
      return;
    }
    setProgress(0);
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / REEL_INTERVAL_MS) * 100, 100);
      setProgress(pct);
    }, 50);
    return () => clearInterval(interval);
  }, [reelPlaying, reelIndex]);

  if (!reelPlaying) return null;

  return (
    <div
      className="absolute -top-[36px] left-0 right-0 z-30"
      style={{ animation: "fadeIn 0.3s ease" }}
    >
      {/* Progress dots — one per frame */}
      <div className="mb-[6px] flex justify-center gap-[4px]">
        {REEL_FRAMES.map((_, idx) => {
          const isPast = idx < reelIndex;
          const isCurrent = idx === reelIndex;
          return (
            <div
              key={idx}
              className="relative h-[3px] w-[24px] overflow-hidden rounded-full bg-[var(--color-line)]"
            >
              <div
                className="absolute inset-y-0 left-0 bg-[var(--color-rust)]"
                style={{
                  width: isPast ? "100%" : isCurrent ? `${progress}%` : "0%",
                  transition: isCurrent ? "none" : "width 0.3s",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Stop button */}
      <button
        onClick={stopReel}
        className="mx-auto block rounded-full border border-[var(--color-line)] bg-white px-[10px] py-[3px] text-[8px] tracking-[0.1em] text-[var(--color-ink-mid)]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        STOP REEL
      </button>
    </div>
  );
}
