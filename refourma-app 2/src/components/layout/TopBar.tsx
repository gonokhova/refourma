"use client";

import { useNav } from "@/lib/nav";
import { TOTAL_FRAMES, getChapterForFrame, getFrameById } from "@/data/projects";

export function TopBar() {
  const { currentFrame, prev, next, canPrev, canNext } = useNav();
  const chapter = getChapterForFrame(currentFrame);
  const frame = getFrameById(currentFrame);

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-[var(--color-line)] bg-[var(--color-paper)] px-[32px] py-[16px]">
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
          {chapter && `CH ${chapter.number} · ${chapter.name}`} {frame && `· ${frame.title}`}
        </span>
      </div>

      <div className="flex items-center gap-[8px]">
        <span
          className="text-[10px] tracking-[0.1em] text-[var(--color-muted-strong)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {String(currentFrame).padStart(2, "0")} / {String(TOTAL_FRAMES).padStart(2, "0")}
        </span>
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
