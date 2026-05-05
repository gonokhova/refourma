"use client";

import { useState } from "react";
import { StatusBar } from "@/components/phone/PhoneFrame";
import { Canvas, NavRow, Eyebrow, CTA } from "@/components/phone/Atoms";

const FLOORPLAN = "/images/floorplan-pp01.jpg";

type Option = {
  id: string;
  name: string;
  votes: number;
  total: number;
};

const OPTIONS: Option[] = [
  { id: "outdoor", name: "Outdoor", votes: 2, total: 4 },
  { id: "indoor", name: "Indoor + skylight", votes: 1, total: 4 },
];

export function Frame12_CoDesign() {
  const [voted, setVoted] = useState<string | null>(null);

  // Visual votes change if user votes
  const optionsToShow = OPTIONS.map((o) => {
    if (voted === o.id) return { ...o, votes: o.votes + 1 };
    return o;
  });

  return (
    <>
      <StatusBar />
      <Canvas>
        <NavRow back="←  N-04" meta="PRIMO PIANO" />

        <Eyebrow>Co-design · Vote 2 / 4</Eyebrow>
        <h2
          className="mb-[12px] text-[18px] font-light leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Onsen — <em style={{ fontStyle: "italic" }}>indoor or outdoor?</em>
        </h2>

        {/* Real floor plan with marker */}
        <div
          className="relative mb-[12px] h-[160px] overflow-hidden rounded-[10px] border border-[var(--color-line-soft)]"
          style={{
            backgroundImage: `url(${FLOORPLAN})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Pulsing marker on onsen wing */}
          <div
            className="absolute h-[14px] w-[14px] rounded-full bg-[var(--color-rust)]"
            style={{
              top: "50%",
              right: "28%",
              boxShadow: "0 0 0 4px rgba(184,69,31,0.3)",
              animation: "pulse-dot 2s ease-in-out infinite",
            }}
          />
          {/* Tag */}
          <span
            className="absolute bottom-[8px] left-[8px] rounded-[4px] bg-black/85 px-[8px] py-[3px] text-[8px] uppercase tracking-[0.1em] text-[var(--color-bone)] backdrop-blur-sm"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            PP01 · Onsen wing
          </span>
        </div>

        {/* Vote bars */}
        <div className="mb-[10px] flex flex-col gap-[6px]">
          {optionsToShow.map((o) => (
            <VoteBar
              key={o.id}
              option={o}
              voted={voted === o.id}
              onClick={() => setVoted(voted === o.id ? null : o.id)}
            />
          ))}
        </div>

        <CTA variant="rust">
          {voted ? `Vote ${optionsToShow.find((o) => o.id === voted)!.name.toLowerCase()}` : "Skip vote"}
        </CTA>
      </Canvas>
    </>
  );
}

function VoteBar({
  option,
  voted,
  onClick,
}: {
  option: Option;
  voted: boolean;
  onClick: () => void;
}) {
  const pct = (option.votes / option.total) * 100;

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-[10px] rounded-[10px] border px-[12px] py-[10px] text-left transition-colors ${
        voted
          ? "border-[var(--color-rust)] bg-white"
          : "border-[var(--color-line-soft)] bg-white hover:border-[var(--color-ink)]"
      }`}
    >
      <div className="flex-1">
        <div
          className="text-[7.5px] uppercase tracking-[0.08em] text-[var(--color-muted-strong)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {option.name}
          {voted && <span className="ml-[6px] text-[var(--color-rust)]">· you</span>}
        </div>
        <div
          className="text-[11px] font-medium text-[var(--color-ink)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {option.votes} of {option.total} owners
        </div>
      </div>
      <div className="h-[4px] w-[60px] overflow-hidden rounded-[2px] bg-[var(--color-line)]">
        <div
          className={`h-full ${voted ? "bg-[var(--color-rust)]" : "bg-[var(--color-ink)]"}`}
          style={{ width: `${pct}%`, transition: "width 0.4s ease" }}
        />
      </div>
      <span
        className="text-[9px] text-[var(--color-ink)]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {Math.round(pct)}%
      </span>
    </button>
  );
}
