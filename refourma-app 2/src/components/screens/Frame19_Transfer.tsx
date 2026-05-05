"use client";

import { useState } from "react";
import { StatusBar } from "@/components/phone/PhoneFrame";
import { Canvas, NavRow, Eyebrow } from "@/components/phone/Atoms";
import { useNav } from "@/lib/nav";

type Path = "sell" | "gift" | "hold" | null;

const PATHS = [
  { id: "sell" as const, name: "Sell", sub: "Open list" },
  { id: "gift" as const, name: "Gift", sub: "Family" },
  { id: "hold" as const, name: "Hold", sub: "Keep it" },
];

export function Frame19_Transfer() {
  const { next } = useNav();
  const [chosen, setChosen] = useState<Path>(null);

  const ctaLabel = chosen
    ? `Continue · ${PATHS.find((p) => p.id === chosen)!.name}`
    : "Pick a path";

  return (
    <>
      <StatusBar />
      <Canvas>
        <NavRow back="←  N-04" meta="FRACTION 4 / 4" />

        <Eyebrow>Your fraction · Liquidity</Eyebrow>
        <h2
          className="mb-[12px] text-[20px] font-light leading-[1.05] tracking-[-0.025em] text-[var(--color-ink)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Sell, gift, <em style={{ fontStyle: "italic" }}>or hold.</em>
        </h2>

        {/* Valuation card */}
        <div className="mb-[10px] rounded-[12px] border border-[var(--color-line-soft)] bg-white px-[12px] py-[12px]">
          <div
            className="mb-[2px] text-[7.5px] uppercase tracking-[0.14em] text-[var(--color-muted-strong)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Indicative valuation · Q1 2028
          </div>
          <div
            className="mb-[10px] text-[26px] font-medium tracking-[-0.01em] text-[var(--color-ink)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            €4.62M
          </div>

          <DetailRow label="Acquired" value="€4.00M · Mar '26" />
          <DetailRow label="Held" value="23 months" />
          <DetailRow label="Gain" value="+€620k · +15.5%" highlight />
          <DetailRow label="ROFR" value="Co-owners · 14d" last />
        </div>

        {/* Path picker */}
        <div className="mb-[12px] grid grid-cols-3 gap-[6px]">
          {PATHS.map((p) => (
            <PathOption
              key={p.id}
              name={p.name}
              sub={p.sub}
              selected={chosen === p.id}
              onClick={() => setChosen(p.id)}
            />
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={chosen ? next : undefined}
          disabled={!chosen}
          className={`flex items-center justify-between rounded-[12px] px-[16px] py-[13px] text-[12.5px] font-medium transition-colors ${
            chosen
              ? "bg-[var(--color-ink)] text-[var(--color-bone)] hover:bg-[var(--color-rust)]"
              : "bg-[var(--color-paper-2)] text-[var(--color-ink-mid)] cursor-not-allowed opacity-60"
          }`}
        >
          <span>{ctaLabel}</span>
          <span className="text-[16px] font-light" style={{ fontFamily: "var(--font-display)" }}>
            →
          </span>
        </button>
      </Canvas>
    </>
  );
}

function DetailRow({
  label,
  value,
  last,
  highlight,
}: {
  label: string;
  value: string;
  last?: boolean;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex justify-between py-[5px] text-[10px] ${
        last ? "" : "border-b border-[var(--color-line-soft)]"
      }`}
    >
      <span className="text-[var(--color-ink-mid)]">{label}</span>
      <span
        className={`text-[9px] tracking-[0.04em] ${
          highlight ? "text-[var(--color-rust)] font-semibold" : "text-[var(--color-ink)]"
        }`}
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {value}
      </span>
    </div>
  );
}

function PathOption({
  name,
  sub,
  selected,
  onClick,
}: {
  name: string;
  sub: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-[9px] border px-[8px] py-[10px] text-center transition-all ${
        selected
          ? "border-[2px] border-[var(--color-rust)] bg-white"
          : "border border-[var(--color-line)] bg-white hover:border-[var(--color-ink)]"
      }`}
    >
      <div
        className="text-[11.5px] font-medium text-[var(--color-ink)]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {name}
      </div>
      <div
        className="mt-[1px] text-[7.5px] tracking-[0.08em] text-[var(--color-muted-strong)]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {sub.toUpperCase()}
      </div>
    </button>
  );
}
