"use client";

import { StatusBar } from "@/components/phone/PhoneFrame";
import { Canvas, NavRow, Eyebrow, Title, CTA } from "@/components/phone/Atoms";
import { PAGANO_FRACTIONS } from "@/data/projects";

export function Frame08_Fractions() {
  return (
    <>
      <StatusBar />
      <Canvas>
        <NavRow back="←  N-04" meta="FRACTIONS" />

        <Eyebrow>4 fractions · 25% each</Eyebrow>
        <Title size="sm">
          One left: <em style={{ fontStyle: "italic" }}>Pine.</em>
        </Title>

        {/* Fraction tiles */}
        <div className="mb-[12px] grid grid-cols-4 gap-[4px]">
          {PAGANO_FRACTIONS.map((f) => (
            <FractionTile key={f.name} fraction={f} />
          ))}
        </div>

        {/* Progress bar */}
        <div className="mb-[8px] mt-[10px] h-[3px] overflow-hidden rounded-[2px] bg-[var(--color-line)]">
          <div className="h-full rounded-[2px] bg-[var(--color-ink)]" style={{ width: "75%" }} />
        </div>
        <div
          className="mb-[14px] flex justify-between text-[8px] tracking-[0.06em] text-[var(--color-muted-strong)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <span>3 of 4 reserved</span>
          <span>14d ROFR window</span>
        </div>

        {/* Includes row */}
        <div className="mb-[12px] rounded-[10px] border border-[var(--color-line-soft)] bg-white px-[12px] py-[10px]">
          <div
            className="mb-[3px] text-[7.5px] uppercase tracking-[0.1em] text-[var(--color-muted-strong)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Includes
          </div>
          <div
            className="text-[12.5px] font-normal text-[var(--color-ink)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            12 weeks · peak rotation · ROFR
          </div>
        </div>

        <CTA variant="rust">Reserve Pine</CTA>
      </Canvas>
    </>
  );
}

function FractionTile({ fraction }: { fraction: typeof PAGANO_FRACTIONS[number] }) {
  const taken = fraction.status === "taken";
  const available = fraction.status === "available";

  const containerClass = taken
    ? "bg-[var(--color-ink)] text-[var(--color-bone)] border-[var(--color-ink)]"
    : available
      ? "bg-white border-[1.5px] border-[var(--color-rust)] text-[var(--color-ink)]"
      : "bg-[var(--color-ivory)] border-[var(--color-line-soft)] text-[var(--color-ink-mid)]";

  return (
    <div
      className={`aspect-square flex flex-col justify-between rounded-[8px] border px-[6px] py-[7px] ${containerClass}`}
    >
      <span
        className="text-[7px] uppercase tracking-[0.1em] opacity-70"
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
    </div>
  );
}
