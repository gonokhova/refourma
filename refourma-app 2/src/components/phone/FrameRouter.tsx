"use client";

import { useNav } from "@/lib/nav";
import { Frame01_Intake } from "@/components/screens/Frame01_Intake";
import { Frame02_Match } from "@/components/screens/Frame02_Match";
import { Frame03_Read } from "@/components/screens/Frame03_Read";
import { Frame04_Choose } from "@/components/screens/Frame04_Choose";
import { Frame05_Discover } from "@/components/screens/Frame05_Discover";
import { Frame06_Brief } from "@/components/screens/Frame06_Brief";
import { Frame07_KYC } from "@/components/screens/Frame07_KYC";
import { Frame08_Fractions } from "@/components/screens/Frame08_Fractions";

/**
 * Renders the current frame inside the phone screen.
 * Add new Frames as we build them.
 */
export function FrameRouter() {
  const { currentFrame } = useNav();

  switch (currentFrame) {
    case 1:
      return <Frame01_Intake />;
    case 2:
      return <Frame02_Match />;
    case 3:
      return <Frame03_Read />;
    case 4:
      return <Frame04_Choose />;
    case 5:
      return <Frame05_Discover />;
    case 6:
      return <Frame06_Brief />;
    case 7:
      return <Frame07_KYC />;
    case 8:
      return <Frame08_Fractions />;
    default:
      return <PlaceholderFrame frameId={currentFrame} />;
  }
}

/**
 * Shown for frames 5-24 that aren't built yet.
 * Visual placeholder so navigation still works during dev.
 */
function PlaceholderFrame({ frameId }: { frameId: number }) {
  const { prev, next, canPrev, canNext } = useNav();
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[var(--color-paper-2)] px-[24px] text-center">
      <div
        className="mb-[8px] text-[10px] uppercase tracking-[0.16em] text-[var(--color-muted-strong)]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        Frame {String(frameId).padStart(2, "0")}
      </div>
      <div
        className="mb-[24px] text-[20px] font-light leading-[1.1] text-[var(--color-ink)]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Coming soon.
      </div>
      <div className="flex gap-[8px]">
        <button
          onClick={prev}
          disabled={!canPrev}
          className="rounded-full border border-[var(--color-line)] bg-white px-[12px] py-[6px] text-[10px] disabled:opacity-30"
        >
          ← Prev
        </button>
        <button
          onClick={next}
          disabled={!canNext}
          className="rounded-full bg-[var(--color-ink)] px-[12px] py-[6px] text-[10px] text-[var(--color-bone)] disabled:opacity-30"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
