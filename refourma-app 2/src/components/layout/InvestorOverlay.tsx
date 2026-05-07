"use client";

import { useNav } from "@/lib/nav";
import { INVESTOR_ANNOTATIONS } from "@/data/investor-notes";

export function InvestorOverlay() {
  const { currentFrame, investorMode } = useNav();

  if (!investorMode) return null;

  const annotations = INVESTOR_ANNOTATIONS[currentFrame];
  if (!annotations || annotations.length === 0) {
    return (
      <div className="absolute -bottom-[28px] left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] tracking-[0.1em] text-[var(--color-muted-strong)]"
           style={{ fontFamily: "var(--font-mono)" }}>
        No investor note for this frame
      </div>
    );
  }

  return (
    <>
      {annotations.map((a, idx) => (
        <div
          key={idx}
          className="absolute z-20 max-w-[280px] rounded-[10px] border border-[var(--color-rust)] bg-[var(--color-ink)] px-[12px] py-[10px] text-[var(--color-bone)] shadow-lg"
          style={{
            ...positionStyle(a.position),
            animation: "fadeIn 0.3s ease",
          }}
        >
          {a.label && (
            <div
              className="mb-[4px] text-[8px] uppercase tracking-[0.16em] text-[var(--color-rust)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              ◆ {a.label}
            </div>
          )}
          <div
            className="text-[10.5px] leading-[1.5]"
            style={{ color: "rgba(244,239,230,0.92)" }}
          >
            {a.text}
          </div>
        </div>
      ))}
    </>
  );
}

function positionStyle(position: "top" | "bottom" | "right"): React.CSSProperties {
  switch (position) {
    case "top":
      return {
        bottom: "calc(100% + 16px)",
        left: "50%",
        transform: "translateX(-50%)",
      };
    case "bottom":
      return {
        top: "calc(100% + 16px)",
        left: "50%",
        transform: "translateX(-50%)",
      };
    case "right":
      return {
        left: "calc(100% + 20px)",
        top: "50%",
        transform: "translateY(-50%)",
      };
  }
}
