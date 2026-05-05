"use client";

import { StatusBar } from "@/components/phone/PhoneFrame";
import { useNav } from "@/lib/nav";

const HERO_IMAGE = "/images/exterior-night.jpg";

export function Frame05_Discover() {
  const { next, prev } = useNav();

  return (
    <>
      {/* Hero image — fills top half of screen */}
      <div
        className="relative flex-shrink-0"
        style={{
          height: "240px",
          backgroundImage: `linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,0.85) 100%), url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <StatusBar dark />

        {/* Top nav over photo */}
        <div className="relative z-[5] flex items-center justify-between px-[20px] pt-[6px]">
          <button
            onClick={prev}
            className="text-[10px] uppercase tracking-[0.14em] text-[rgba(244,239,230,0.85)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            ←  Back
          </button>
          <span
            className="text-[8.5px] uppercase tracking-[0.14em] text-[rgba(244,239,230,0.65)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            NISEKO · 43.07°N
          </span>
        </div>
      </div>

      {/* Bottom card — content over dark gradient */}
      <div className="flex flex-1 flex-col bg-[var(--color-ink)] px-[20px] pb-[28px] pt-[16px] text-[var(--color-bone)]">
        {/* Channel chips */}
        <div className="mb-[14px] flex flex-wrap gap-[4px]">
          <ChannelPill primary>Via Analyst</ChannelPill>
          <ChannelPill>Direct link</ChannelPill>
          <ChannelPill>Referral</ChannelPill>
          <ChannelPill>Press</ChannelPill>
        </div>

        <div
          className="mb-[8px] text-[8.5px] uppercase tracking-[0.16em]"
          style={{
            fontFamily: "var(--font-mono)",
            color: "rgba(244,239,230,0.6)",
          }}
        >
          Project · 4 fractions · Pre-build
        </div>

        <h1
          className="mb-[14px] text-[32px] font-light leading-[1.02] tracking-[-0.025em]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Pagano
          <br />
          <em style={{ fontStyle: "italic" }}>at Hanazono.</em>
        </h1>

        {/* Editorial blurb — not realtor copy */}
        <p
          className="mb-[16px] text-[12px] leading-[1.5]"
          style={{
            color: "rgba(244,239,230,0.85)",
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            fontStyle: "italic",
          }}
        >
          Built into a slope where the river bends. The west wing catches first light at 6:42 in February. Onsen on the lower deck, ski room beside it. The architects measured the snow before they drew.
        </p>

        {/* Price row */}
        <div
          className="mb-[20px] flex items-baseline justify-between border-t py-[10px] text-[10px]"
          style={{
            borderColor: "rgba(244,239,230,0.15)",
            color: "rgba(244,239,230,0.7)",
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.04em",
          }}
        >
          <span>
            From{" "}
            <strong
              className="text-[14px] text-[var(--color-bone)]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              €2.5M
            </strong>{" "}
            / fraction
          </span>
          <span>3 / 4 reserved</span>
        </div>

        {/* CTA */}
        <button
          onClick={next}
          className="mt-auto flex items-center justify-between rounded-[12px] bg-[var(--color-ivory-warm)] px-[16px] py-[13px] text-[12.5px] font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-ivory)]"
        >
          <span>Enter project</span>
          <span className="text-[16px] font-light" style={{ fontFamily: "var(--font-display)" }}>
            →
          </span>
        </button>
      </div>
    </>
  );
}

function ChannelPill({
  children,
  primary,
}: {
  children: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <span
      className={`rounded-full px-[8px] py-[3px] text-[8px] tracking-[0.04em] ${
        primary
          ? "bg-[var(--color-bone)] text-[var(--color-ink)]"
          : "bg-[rgba(244,239,230,0.1)] text-[rgba(244,239,230,0.85)]"
      }`}
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {children}
    </span>
  );
}
