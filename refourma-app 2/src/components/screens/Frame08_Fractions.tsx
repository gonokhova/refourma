"use client";

import { useState } from "react";
import { StatusBar } from "@/components/phone/PhoneFrame";
import { Canvas, NavRow, Eyebrow } from "@/components/phone/Atoms";
import { useNav } from "@/lib/nav";
import { PAGANO_FRACTIONS, type Fraction } from "@/data/projects";

export function Frame08_Fractions() {
  const { next } = useNav();
  // Default to Pine (the available one) — that's the one the prospect cares about
  const [selected, setSelected] = useState<string>("Pine");
  const fraction = PAGANO_FRACTIONS.find((f) => f.name === selected)!;

  const isTaken = fraction.status === "taken";

  return (
    <>
      <StatusBar />
      <Canvas>
        <NavRow back="←  N-04" meta="FRACTIONS · 4" />

        <Eyebrow>4 fractions · 25% each</Eyebrow>
        <h2
          className="mb-[12px] text-[20px] font-light leading-[1.05] tracking-[-0.025em] text-[var(--color-ink)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {isTaken ? (
            <>
              <em style={{ fontStyle: "italic" }}>{fraction.name}</em> is taken.
            </>
          ) : (
            <>
              One left: <em style={{ fontStyle: "italic" }}>{fraction.name}.</em>
            </>
          )}
        </h2>

        {/* Fraction tiles — clickable */}
        <div className="mb-[12px] grid grid-cols-4 gap-[4px]">
          {PAGANO_FRACTIONS.map((f) => (
            <FractionTile
              key={f.name}
              fraction={f}
              isSelected={selected === f.name}
              onClick={() => setSelected(f.name)}
            />
          ))}
        </div>

        {/* Details panel — changes based on selection */}
        <DetailPanel fraction={fraction} />

        {/* CTA — different label depending on selection */}
        <button
          onClick={isTaken ? () => setSelected("Pine") : next}
          disabled={false}
          className={`mt-auto flex items-center justify-between rounded-[12px] px-[16px] py-[13px] text-[12.5px] font-medium transition-colors ${
            isTaken
              ? "bg-[var(--color-paper-2)] text-[var(--color-ink-mid)] hover:bg-[var(--color-ivory)]"
              : "bg-[var(--color-rust)] text-[var(--color-bone)] hover:opacity-90"
          }`}
        >
          <span>{isTaken ? "View Pine instead" : `Reserve ${fraction.name}`}</span>
          <span className="text-[16px] font-light" style={{ fontFamily: "var(--font-display)" }}>
            →
          </span>
        </button>
      </Canvas>
    </>
  );
}

function FractionTile({
  fraction,
  isSelected,
  onClick,
}: {
  fraction: Fraction;
  isSelected: boolean;
  onClick: () => void;
}) {
  const taken = fraction.status === "taken";
  const available = fraction.status === "available";

  // Visual states
  let containerClass = "";
  if (isSelected && available) {
    // Selected + available: rust border
    containerClass = "bg-white border-[2px] border-[var(--color-rust)] text-[var(--color-ink)] ring-2 ring-[var(--color-rust)]/20";
  } else if (isSelected && taken) {
    // Selected + taken: ink with accent
    containerClass = "bg-[var(--color-ink)] text-[var(--color-bone)] border-[2px] border-[var(--color-gold)]";
  } else if (available) {
    // Unselected + available: subtle rust hint
    containerClass = "bg-white border-[1.5px] border-[var(--color-rust)] text-[var(--color-ink)] hover:border-[2px]";
  } else {
    // Unselected + taken
    containerClass = "bg-[var(--color-ink)] text-[var(--color-bone)] border border-[var(--color-ink)] opacity-70 hover:opacity-100";
  }

  return (
    <button
      onClick={onClick}
      className={`aspect-square flex flex-col justify-between rounded-[8px] px-[6px] py-[7px] transition-all ${containerClass}`}
    >
      <span
        className="text-[7px] uppercase tracking-[0.1em] opacity-80"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {fraction.name}
      </span>
      <span
        className="text-[11px] font-medium leading-none"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {fraction.price}
      </span>
    </button>
  );
}

function DetailPanel({ fraction }: { fraction: Fraction }) {
  const isTaken = fraction.status === "taken";

  return (
    <div
      key={fraction.name}
      className="mb-[10px] rounded-[10px] border border-[var(--color-line-soft)] bg-white px-[12px] pb-[10px] pt-[11px]"
      style={{ animation: "fadeIn 0.25s ease" }}
    >
      {/* Status row */}
      <div className="mb-[10px] flex items-center justify-between">
        <span
          className={`rounded-full px-[8px] py-[2px] text-[8px] tracking-[0.08em] ${
            isTaken
              ? "bg-[var(--color-paper-2)] text-[var(--color-ink-mid)]"
              : "bg-[var(--color-rust)] text-[var(--color-bone)]"
          }`}
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {isTaken ? "RESERVED" : "AVAILABLE"}
        </span>
        <span
          className="text-[8px] tracking-[0.06em] text-[var(--color-muted-strong)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          12 WEEKS / YEAR · ROFR
        </span>
      </div>

      {/* Character line — italic, sets tone */}
      <p
        className="mb-[10px] text-[11.5px] font-light italic leading-[1.4] text-[var(--color-ink)]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {fraction.characterTrait}
      </p>

      {/* Detail rows */}
      <div className="flex flex-col gap-[4px]">
        <DetailRow label="View" value={fraction.view} />
        <DetailRow label="Layout" value={fraction.orientation} />
        <DetailRow label="Bedrooms" value={fraction.bedroomsAssigned} />
        <DetailRow label="Peak weeks" value={fraction.peakWeeks} />
      </div>

      {/* Owner note (only for taken) */}
      {fraction.ownerNote && (
        <div
          className="mt-[10px] border-t border-[var(--color-line-soft)] pt-[8px] text-[8.5px] tracking-[0.06em] text-[var(--color-muted-strong)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {fraction.ownerNote.toUpperCase()}
        </div>
      )}
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-[8px] text-[10px] leading-[1.35]">
      <span
        className="w-[68px] flex-shrink-0 text-[8px] uppercase tracking-[0.1em] text-[var(--color-muted-strong)]"
        style={{ fontFamily: "var(--font-mono)", paddingTop: "1.5px" }}
      >
        {label}
      </span>
      <span className="flex-1 text-[var(--color-ink)]">{value}</span>
    </div>
  );
}
