"use client";

import { StatusBar } from "@/components/phone/PhoneFrame";
import { useNav } from "@/lib/nav";
import { PAGANO_ANALYST } from "@/data/projects";

const HERO_IMAGE = "/images/exterior-night.jpg";

export function Frame03_Read() {
  const { next, prev, goTo } = useNav();

  return (
    <>
      <StatusBar />

      {/* Hero image — replaces canvas padding at top */}
      <div
        className="relative h-[130px] flex-shrink-0"
        style={{
          backgroundImage: `linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.4) 100%), url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <button
          onClick={prev}
          className="absolute left-[16px] top-[14px] flex items-center gap-[4px] rounded bg-black/40 px-[8px] py-[3px] text-[8px] uppercase tracking-[0.1em] text-[var(--color-bone)] backdrop-blur-sm"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          ← Back
        </button>
        <span
          className="absolute right-[16px] top-[14px] rounded bg-black/40 px-[7px] py-[3px] text-[8px] uppercase tracking-[0.1em] text-[var(--color-bone)] backdrop-blur-sm"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          N-04 · Niseko
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col overflow-hidden px-[18px] pb-[24px] pt-[14px]">
        <div
          className="mb-[4px] text-[8px] uppercase tracking-[0.12em] text-[var(--color-rust)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Hanazono · Snow · Pre-build
        </div>
        <h1
          className="mb-[8px] text-[18px] font-normal leading-[1.1] tracking-[-0.01em] text-[var(--color-ink)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Pagano <em className="font-light not-italic" style={{ fontStyle: "italic" }}>at Hanazono.</em>
        </h1>

        {/* Price row */}
        <div className="mb-[12px] flex items-baseline justify-between border-b border-t border-[var(--color-line-soft)] py-[8px]">
          <div
            className="text-[17px] font-medium tracking-[-0.01em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            €2.5M – €4.0M
          </div>
          <div
            className="text-[8px] text-[var(--color-muted-strong)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            3 / 4 RESERVED
          </div>
        </div>

        {/* AI Analyst block — the hero of the page */}
        <div className="mb-auto rounded-[10px] bg-[var(--color-ink)] px-[12px] py-[12px] text-[var(--color-bone)]">
          <div className="mb-[8px] flex items-center gap-[7px]">
            <div
              className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[var(--color-rust)] text-[11px] italic text-[var(--color-bone)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              A
            </div>
            <div>
              <div
                className="text-[7px] uppercase tracking-[0.14em]"
                style={{ fontFamily: "var(--font-mono)", color: "rgba(244,239,230,0.55)" }}
              >
                AI BUYER&apos;S ANALYST
              </div>
              <div
                className="text-[11px] italic text-[var(--color-bone)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Buyer&apos;s Analyst
              </div>
            </div>
          </div>

          <div
            className="mb-[8px] text-[11px] font-light leading-[1.35]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            &ldquo;Strong winter income with{" "}
            <em className="text-[var(--color-gold)]" style={{ fontStyle: "italic" }}>
              real Yōtei view protection
            </em>{" "}
            — the Pine fraction is the one to take.&rdquo;
          </div>

          {/* Three insights */}
          <div className="grid grid-cols-3 gap-[1px] overflow-hidden rounded-[4px] bg-white/10">
            {PAGANO_ANALYST.insights.map((ins) => (
              <div key={ins.label} className="bg-[var(--color-ink)] px-[5px] py-[6px]">
                <div
                  className="mb-[2px] text-[6.5px] uppercase tracking-[0.1em]"
                  style={{ fontFamily: "var(--font-mono)", color: "rgba(244,239,230,0.55)" }}
                >
                  {ins.label}
                </div>
                <div
                  className={`text-[11px] font-medium leading-[1.1] ${
                    ins.label === "Yield" ? "text-[var(--color-gold)]" : "text-[var(--color-bone)]"
                  }`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {ins.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions row */}
        <div className="mt-[10px] grid grid-cols-2 gap-[6px]">
          <button
            onClick={next}
            className="rounded-[8px] bg-[var(--color-paper-2)] px-[6px] py-[9px] text-center text-[9.5px] text-[var(--color-ink)] hover:bg-[var(--color-ivory)] transition-colors"
          >
            Compare
          </button>
          <button
            onClick={() => goTo(8)}
            className="rounded-[8px] bg-[var(--color-ink)] px-[6px] py-[9px] text-center text-[9.5px] text-[var(--color-bone)] hover:bg-[var(--color-rust)] transition-colors"
          >
            Reserve →
          </button>
        </div>
      </div>
    </>
  );
}
