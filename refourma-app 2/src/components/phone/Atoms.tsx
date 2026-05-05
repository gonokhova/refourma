"use client";

import { ReactNode } from "react";
import { useNav } from "@/lib/nav";

/**
 * Top nav row: "← BACK   |   META"
 */
export function NavRow({
  back,
  meta,
  dark = false,
  onBack,
}: {
  back?: string;
  meta?: string;
  dark?: boolean;
  onBack?: () => void;
}) {
  const { prev } = useNav();
  const handleBack = onBack ?? prev;
  const colorClass = dark ? "text-[rgba(244,239,230,0.65)]" : "text-[var(--color-muted-strong)]";

  return (
    <div
      className={`flex items-center justify-between text-[8.5px] uppercase tracking-[0.14em] ${colorClass} mb-[14px] font-mono`}
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {back ? (
        <button onClick={handleBack} className="flex items-center gap-[6px] hover:opacity-100 opacity-90 transition-opacity">
          {back}
        </button>
      ) : (
        <span className="flex items-center gap-[6px]">
          <span>RE:FOURMA</span>
          <span className="block h-[3px] w-[3px] rounded-full bg-current opacity-50" />
          <span>AGENT</span>
        </span>
      )}
      {meta && <span>{meta}</span>}
    </div>
  );
}

/**
 * Eyebrow — small uppercase label above titles
 */
export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  const colorClass = dark ? "text-[rgba(244,239,230,0.6)]" : "text-[var(--color-muted-strong)]";
  return (
    <div
      className={`mb-[8px] text-[8.5px] uppercase tracking-[0.16em] ${colorClass}`}
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {children}
    </div>
  );
}

/**
 * Display title (Fraunces, light, italic)
 */
export function Title({
  children,
  size = "sm",
  dark = false,
}: {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  dark?: boolean;
}) {
  const sizeClass = size === "lg" ? "text-[32px]" : size === "md" ? "text-[26px]" : "text-[22px]";
  const colorClass = dark ? "text-[var(--color-bone)]" : "text-[var(--color-ink)]";

  return (
    <h1
      className={`${sizeClass} ${colorClass} mb-[10px] font-light leading-[1.02] tracking-[-0.025em]`}
      style={{ fontFamily: "var(--font-display)" }}
    >
      {children}
    </h1>
  );
}

/**
 * Subtitle paragraph
 */
export function Subtitle({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  const colorClass = dark ? "text-[rgba(244,239,230,0.7)]" : "text-[var(--color-ink-mid)]";
  return (
    <p className={`mb-[14px] text-[11px] leading-[1.45] ${colorClass}`}>{children}</p>
  );
}

/**
 * CTA button — main action at bottom of screen
 */
export function CTA({
  children,
  variant = "ink",
  onClick,
}: {
  children: ReactNode;
  variant?: "ink" | "ivory" | "rust";
  onClick?: () => void;
}) {
  const { next } = useNav();
  const handleClick = onClick ?? next;

  const variantClasses = {
    ink: "bg-[var(--color-ink)] text-[var(--color-bone)] hover:bg-[var(--color-ink-soft)]",
    ivory: "bg-[var(--color-ivory-warm)] text-[var(--color-ink)] hover:bg-[var(--color-ivory)]",
    rust: "bg-[var(--color-rust)] text-[var(--color-bone)] hover:opacity-90",
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-between rounded-[12px] px-[16px] py-[13px] text-[12.5px] font-medium transition-colors mt-auto w-full ${variantClasses[variant]}`}
    >
      <span>{children}</span>
      <span className="text-[16px] font-light" style={{ fontFamily: "var(--font-display)" }}>
        →
      </span>
    </button>
  );
}

/**
 * Canvas — main content area inside the phone screen
 */
export function Canvas({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden px-[20px] pb-[28px] pt-[18px]">
      {children}
    </div>
  );
}
