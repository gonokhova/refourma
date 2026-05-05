"use client";

import { ReactNode } from "react";

type PhoneFrameProps = {
  children: ReactNode;
  dark?: boolean;
};

/**
 * iPhone-style bezel. The screen content lives inside.
 * Dimensions match storyboard v.04: 9:19.5 aspect, ~280px wide.
 */
export function PhoneFrame({ children, dark = false }: PhoneFrameProps) {
  return (
    <div
      className="relative mx-auto rounded-[38px] bg-[var(--color-ink)] p-[6px]"
      style={{
        width: "320px",
        height: "693px",
        boxShadow:
          "0 1px 2px rgba(0,0,0,0.1), 0 18px 40px -12px rgba(0,0,0,0.25)",
      }}
    >
      {/* Notch */}
      <div
        className="absolute left-1/2 top-[14px] z-10 h-[22px] w-[84px] -translate-x-1/2 rounded-[12px] bg-[var(--color-ink)]"
      />

      {/* Screen */}
      <div
        className={`phone-screen relative flex h-full w-full flex-col overflow-hidden rounded-[32px] ${
          dark
            ? "bg-[var(--color-ink)] text-[var(--color-bone)]"
            : "bg-[var(--color-bone)] text-[var(--color-ink)]"
        }`}
      >
        {children}

        {/* Home indicator */}
        <div
          className={`absolute bottom-[8px] left-1/2 z-10 h-[4px] w-[110px] -translate-x-1/2 rounded-[2px] ${
            dark ? "bg-[var(--color-bone)] opacity-75" : "bg-[var(--color-ink)] opacity-65"
          }`}
        />
      </div>
    </div>
  );
}

/**
 * Status bar (time + signal/wifi/battery) — top of screen
 */
export function StatusBar({ dark = false }: { dark?: boolean }) {
  const color = dark ? "text-[var(--color-bone)]" : "text-[var(--color-ink)]";
  return (
    <div className={`relative z-[5] flex items-center justify-between px-[22px] pb-[6px] pt-[10px] text-[11px] font-semibold ${color}`}>
      <span>9:41</span>
      <div className="flex items-center gap-[5px]">
        <span className="block h-[8px] w-[12px] rounded-[1px] bg-current opacity-60" />
        <span className="block h-[8px] w-[12px] rounded-[1px] bg-current opacity-60" />
        <span
          className="relative block h-[10px] w-[22px] rounded-[3px] border border-current opacity-80"
        >
          <span className="absolute inset-[2px] right-[6px] rounded-[1px] bg-current" />
        </span>
      </div>
    </div>
  );
}
