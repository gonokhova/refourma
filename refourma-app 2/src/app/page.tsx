"use client";

import { NavProvider, useNav } from "@/lib/nav";
import { PhoneFrame } from "@/components/phone/PhoneFrame";
import { FrameRouter } from "@/components/phone/FrameRouter";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
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
  const frame = getFrameById(currentFrame);

  // Fully dark frames (entire screen on dark bg)
  // Frames 5, 14, 23 manage their own dark/light split
  const isDarkFrame = [20, 24].includes(currentFrame);

  return (
    <div className="flex min-h-[calc(100vh-65px)] items-center justify-center px-[24px] py-[40px]">
      <div className="flex flex-col items-center gap-[24px]">
        <PhoneFrame dark={isDarkFrame}>
          <FrameRouter />
        </PhoneFrame>

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
      </div>
    </div>
  );
}
