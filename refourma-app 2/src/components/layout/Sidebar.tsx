"use client";

import { CHAPTERS } from "@/data/projects";
import { useNav } from "@/lib/nav";

export function Sidebar() {
  const { currentFrame, goTo } = useNav();

  return (
    <aside className="hidden w-[280px] flex-shrink-0 border-r border-[var(--color-line)] bg-[var(--color-paper-2)] lg:block">
      <div className="sticky top-0 max-h-screen overflow-y-auto px-[24px] py-[32px]">
        <div
          className="mb-[8px] text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted-strong)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Storyboard v.04
        </div>
        <div
          className="mb-[24px] text-[24px] font-light leading-[1] tracking-[-0.02em] text-[var(--color-ink)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          re<span className="italic">:</span>Fourma
        </div>

        {/* Cover entry */}
        <button
          onClick={() => goTo(0)}
          className={`mb-[20px] flex w-full items-baseline gap-[8px] rounded-[4px] px-[8px] py-[5px] text-left transition-colors ${
            currentFrame === 0
              ? "bg-[var(--color-ink)] text-[var(--color-bone)]"
              : "hover:bg-[var(--color-ivory)] text-[var(--color-ink)]"
          }`}
        >
          <span
            className={`flex-shrink-0 text-[9px] tracking-[0.06em] ${
              currentFrame === 0 ? "text-[var(--color-bone)]/60" : "text-[var(--color-muted-strong)]"
            }`}
            style={{ fontFamily: "var(--font-mono)" }}
          >
            00
          </span>
          <span
            className="text-[12px] leading-[1.2]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Cover
          </span>
        </button>

        {CHAPTERS.map((ch) => (
          <div key={ch.number} className="mb-[20px]">
            <div
              className="mb-[8px] text-[9px] uppercase tracking-[0.14em] text-[var(--color-muted-strong)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              CH {ch.number} · {ch.name}
            </div>
            <div className="flex flex-col gap-[2px]">
              {ch.frames.map((frame) => {
                const isActive = currentFrame === frame.id;
                return (
                  <button
                    key={frame.id}
                    onClick={() => goTo(frame.id)}
                    className={`flex items-baseline gap-[8px] rounded-[4px] px-[8px] py-[5px] text-left transition-colors ${
                      isActive
                        ? "bg-[var(--color-ink)] text-[var(--color-bone)]"
                        : "hover:bg-[var(--color-ivory)] text-[var(--color-ink)]"
                    }`}
                  >
                    <span
                      className={`flex-shrink-0 text-[9px] tracking-[0.06em] ${
                        isActive ? "text-[var(--color-bone)]/60" : "text-[var(--color-muted-strong)]"
                      }`}
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {frame.number}
                    </span>
                    <span
                      className="text-[12px] leading-[1.2]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {frame.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
