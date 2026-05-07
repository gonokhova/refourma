"use client";

import { StatusBar } from "@/components/phone/PhoneFrame";
import { useNav } from "@/lib/nav";

const HERO_IMAGE = "/images/exterior-night.jpg";

export function Frame00_Cover() {
  const { goTo, startReel } = useNav();

  return (
    <div
      className="flex h-full flex-col"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.55) 50%, rgba(10,10,10,0.85) 100%), url(${HERO_IMAGE})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <StatusBar dark />

      <div className="flex flex-1 flex-col px-[20px] pb-[28px] pt-[20px]">
        {/* Top mark */}
        <div
          className="mb-[6px] flex items-center justify-between text-[8px] uppercase tracking-[0.16em]"
          style={{
            fontFamily: "var(--font-mono)",
            color: "rgba(244,239,230,0.65)",
          }}
        >
          <span>RE:FOURMA</span>
          <span>v.04</span>
        </div>

        {/* Brand */}
        <div
          className="mb-auto text-[14px] font-light"
          style={{
            fontFamily: "var(--font-display)",
            color: "rgba(244,239,230,0.8)",
          }}
        >
          re<span className="italic">:</span>Fourma
        </div>

        {/* Headline */}
        <h1
          className="mb-[12px] text-[28px] font-light leading-[1.05] tracking-[-0.025em]"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-bone)",
          }}
        >
          From{" "}
          <em className="text-[var(--color-gold)]" style={{ fontStyle: "italic" }}>
            first thought
          </em>{" "}
          to{" "}
          <em className="text-[var(--color-gold)]" style={{ fontStyle: "italic" }}>
            final transfer.
          </em>
        </h1>

        <p
          className="mb-[20px] text-[12px] leading-[1.5]"
          style={{ color: "rgba(244,239,230,0.75)" }}
        >
         <em style={{ fontStyle: "italic" }}>The whole life of a fractional home.</em>
        </p>

        {/* Three meta blocks */}
        <div
          className="mb-[20px] grid grid-cols-3 gap-[1px] overflow-hidden rounded-[8px]"
          style={{ background: "rgba(244,239,230,0.15)" }}
        >
          <MetaBlock label="Active" value="N-04" sub="Niseko" />
          <MetaBlock label="Network" value="12" sub="Places" />
          <MetaBlock label="Stage" value="Pre-seed" sub="2026" />
        </div>

        {/* Two CTAs */}
        <button
          onClick={() => goTo(1)}
          className="mb-[8px] flex items-center justify-between rounded-[12px] bg-[var(--color-bone)] px-[16px] py-[13px] text-[12.5px] font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-ivory-warm)]"
        >
          <span>Begin demo</span>
          <span className="text-[16px] font-light" style={{ fontFamily: "var(--font-display)" }}>
            →
          </span>
        </button>

        <button
          onClick={startReel}
          className="flex items-center justify-between rounded-[12px] border px-[16px] py-[10px] text-[11px]"
          style={{
            background: "transparent",
            color: "rgba(244,239,230,0.85)",
            borderColor: "rgba(244,239,230,0.25)",
          }}
        >
          <span>▶ Highlight reel · 30 sec</span>
          <span style={{ fontFamily: "var(--font-display)" }}>→</span>
        </button>
      </div>
    </div>
  );
}

function MetaBlock({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div
      className="px-[8px] py-[10px] text-center"
      style={{ background: "rgba(10,10,10,0.55)" }}
    >
      <div
        className="mb-[3px] text-[7px] uppercase tracking-[0.1em]"
        style={{
          fontFamily: "var(--font-mono)",
          color: "rgba(244,239,230,0.6)",
        }}
      >
        {label}
      </div>
      <div
        className="text-[14px] font-medium leading-none"
        style={{
          fontFamily: "var(--font-display)",
          color: "var(--color-bone)",
        }}
      >
        {value}
      </div>
      <div
        className="mt-[2px] text-[8px]"
        style={{
          fontFamily: "var(--font-mono)",
          color: "rgba(244,239,230,0.45)",
        }}
      >
        {sub}
      </div>
    </div>
  );
}
