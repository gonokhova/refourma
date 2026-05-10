"use client";

import { NavProvider, useNav } from "@/lib/nav";
import { PhoneFrame } from "@/components/phone/PhoneFrame";
import { FrameRouter } from "@/components/phone/FrameRouter";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
import { InvestorOverlay } from "@/components/layout/InvestorOverlay";
import { ReelProgress } from "@/components/layout/ReelProgress";
import { getFrameById } from "@/data/projects";

export default function Home() {
  return (
    <NavProvider>
      <Layout />
    </NavProvider>
  );
}

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-hidden bg-[var(--color-paper)]">
          <Stage />
        </main>
      </div>
    </div>
  );
}

function Stage() {
  const { currentFrame } = useNav();
  const frame = currentFrame > 0 ? getFrameById(currentFrame) : null;

  // Fully dark frames where PhoneFrame should use ink bg
  // Frame 00 (cover), 14, 23 manage their own bg — exclude them
  const isDarkFrame = [20, 24].includes(currentFrame);

  // Frame 25 is a full-page info screen — no phone frame
  if (currentFrame === 25) {
    return (
      <div className="min-h-[calc(100vh-65px)] overflow-y-auto">
        <FrameRouter />
      </div>
    );
  }

  return (
    <div className="flex min-h-[calc(100vh-65px)] items-center justify-center px-[24px] py-[60px]">
      <div className="flex flex-col items-center gap-[24px]">
        {/* Phone with overlays */}
        <div className="relative">
          <ReelProgress />
          <PhoneFrame dark={isDarkFrame}>
            <FrameRouter />
          </PhoneFrame>
          <InvestorOverlay />
        </div>

        {/* Caption under phone */}
        {frame && (
          <div className="max-w-[320px] text-center">
            <div
              className="mb-[4px] text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted-strong)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Frame {frame.number} · {frame.subtitle}
            </div>
            <div className="text-[12px] leading-[1.55] text-[var(--color-ink-mid)]">
              {frame.caption}
            </div>
          </div>
        )}

        {currentFrame === 0 && (
          <div className="max-w-[320px] text-center">
            <div
              className="mb-[4px] text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted-strong)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Cover · Begin demo
            </div>
            <div className="text-[12px] leading-[1.55] text-[var(--color-ink-mid)]">
              Twenty-four frames across six chapters. Tap Begin or use arrows to navigate.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
