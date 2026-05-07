"use client";

import { useNav } from "@/lib/nav";
import { TOTAL_FRAMES, getChapterForFrame, getFrameById } from "@/data/projects";

export function TopBar() {
  const {
    currentFrame,
    prev,
    next,
    canPrev,
    canNext,
    investorMode,
    toggleInvestor,
    reelPlaying,
    startReel,
    stopReel,
  } = useNav();

  const chapter = currentFrame > 0 ? getChapterForFrame(currentFrame) : null;
  const frame = currentFrame > 0 ? getFrameById(currentFrame) : null;
  const isCover = currentFrame === 0;

  return (
    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-[12px] border-b border-[var(--color-line)] bg-[var(--color-paper)] px-[24px] py-[12px]">
      {/* Brand + chapter */}
      <div className="flex items-baseline gap-[16px]">
        <span
          className="text-[20px] font-light tracking-[-0.025em]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          re<span className="italic">:</span>Fourma
        </span>
        <span
          className="hidden text-[10px] uppercase tracking-[0.12em] text-[var(--color-muted-strong)] md:inline"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {isCover && "COVER"}
          {chapter && `CH ${chapter.number} · ${chapter.name}`}
          {frame && ` · ${frame.title}`}
        </span>
      </div>

      {/* Mode toggles + nav */}
      <div className="flex items-center gap-[8px]">
        {/* Investor mode toggle */}
        <button
          onClick={toggleInvestor}
          className={`rounded-full px-[10px] py-[5px] text-[9px] uppercase tracking-[0.1em] transition-colors ${
            investorMode
              ? "bg-[var(--color-rust)] text-[var(--color-bone)]"
              : "border border-[var(--color-line)] bg-white text-[var(--color-ink-mid)] hover:border-[var(--color-ink)]"
          }`}
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {investorMode ? "● Investor" : "Investor view"}
        </button>

        {/* Reel toggle */}
        <button
          onClick={reelPlaying ? stopReel : startReel}
          className={`rounded-full px-[10px] py-[5px] text-[9px] uppercase tracking-[0.1em] transition-colors ${
            reelPlaying
              ? "bg-[var(--color-ink)] text-[var(--color-bone)]"
              : "border border-[var(--color-line)] bg-white text-[var(--color-ink-mid)] hover:border-[var(--color-ink)]"
          }`}
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {reelPlaying ? "■ Stop" : "▶ Reel"}
        </button>

        {/* Frame counter */}
        <span
          className="text-[10px] tracking-[0.1em] text-[var(--color-muted-strong)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {currentFrame === 0 ? "00" : String(currentFrame).padStart(2, "0")} / {String(TOTAL_FRAMES).padStart(2, "0")}
        </span>

        {/* Prev / Next */}
        <button
          onClick={prev}
          disabled={!canPrev}
          aria-label="Previous frame"
          className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-[var(--color-line)] bg-white text-[14px] transition-colors hover:bg-[var(--color-paper-2)] disabled:opacity-30"
        >
          ←
        </button>
        <button
          onClick={next}
          disabled={!canNext}
          aria-label="Next frame"
          className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[var(--color-ink)] text-[14px] text-[var(--color-bone)] transition-colors hover:bg-[var(--color-rust)] disabled:opacity-30"
        >
          →
        </button>
      </div>
    </header>
  );
}
