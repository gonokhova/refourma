"use client";

import { useState } from "react";
import { StatusBar } from "@/components/phone/PhoneFrame";
import { Canvas, NavRow } from "@/components/phone/Atoms";
import { useNav } from "@/lib/nav";
import { TRANSLATIONS, LANG_LABELS, type Lang } from "@/data/i18n";

export function Frame01_Intake() {
  const { next } = useNav();
  const [lang, setLang] = useState<Lang>("EN");
  const t = TRANSLATIONS[lang];

  return (
    <>
      <StatusBar />
      <Canvas>
        <NavRow back="" meta={t.nav.listed} />

        {/* Greeting */}
        <h1
          className="mb-[8px] mt-[14px] text-[24px] font-light leading-[1.15] tracking-[-0.02em] text-[var(--color-ink)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t.headline} <em className="not-italic" style={{ fontStyle: "italic" }}>{t.headlineEm}</em>
        </h1>
        <p className="mb-[18px] text-[11px] leading-[1.5] text-[var(--color-ink-mid)]">
          {t.subhead}
        </p>

        {/* Chat input card */}
        <button
          onClick={next}
          className="mb-[12px] block w-full rounded-[14px] border border-[var(--color-line)] bg-white px-[14px] pb-[12px] pt-[14px] text-left transition-shadow hover:shadow-md"
          style={{ boxShadow: "0 6px 18px -8px rgba(0,0,0,0.1)" }}
        >
          <div
            className="mb-[8px] text-[8px] uppercase tracking-[0.14em] text-[var(--color-rust)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {t.promptLabel}
          </div>
          <div
            className="text-[14px] font-normal leading-[1.4] text-[var(--color-ink)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.promptText}
            <span className="ml-[1px] inline-block h-[14px] w-[1.5px] animate-blink bg-[var(--color-rust)] align-text-bottom" />
          </div>

          {/* Lang row */}
          <div className="mt-[12px] flex items-center justify-between border-t border-[var(--color-line-soft)] pt-[10px]">
            <div className="flex gap-[4px]">
              {(["EN", "JA", "ZH"] as Lang[]).map((l) => (
                <LangPill
                  key={l}
                  active={lang === l}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLang(l);
                  }}
                >
                  {LANG_LABELS[l]}
                </LangPill>
              ))}
              <span
                className="rounded-full bg-[var(--color-paper-2)] px-[7px] py-[3px] text-[10px] tracking-[0.08em]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                🎙
              </span>
            </div>
            <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[var(--color-ink)] text-[12px] text-[var(--color-bone)]">
              →
            </span>
          </div>
        </button>

        {/* Quick filter chips */}
        <div className="flex flex-wrap gap-[5px]">
          <div
            className="mb-[2px] w-full text-[8px] uppercase tracking-[0.12em] text-[var(--color-muted-strong)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {t.quickLabel}
          </div>
          <Chip active>{t.chips.snow}</Chip>
          <Chip>{t.chips.water}</Chip>
          <Chip>{t.chips.wild}</Chip>
          <Chip>{t.chips.family}</Chip>
          <Chip>{t.chips.yield}</Chip>
        </div>

        <div className="mt-auto" />
      </Canvas>
    </>
  );
}

function LangPill({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-[7px] py-[3px] text-[8px] tracking-[0.08em] transition-colors ${
        active
          ? "bg-[var(--color-ink)] text-[var(--color-bone)]"
          : "bg-[var(--color-paper-2)] text-[var(--color-ink-mid)] hover:bg-[var(--color-ivory)]"
      }`}
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {children}
    </button>
  );
}

function Chip({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <span
      className={`rounded-full border px-[9px] py-[5px] text-[10px] ${
        active
          ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-bone)]"
          : "border-[var(--color-line)] bg-transparent text-[var(--color-ink)]"
      }`}
    >
      {children}
    </span>
  );
}
