"use client";

import { useState } from "react";
import { StatusBar } from "@/components/phone/PhoneFrame";
import { Canvas, NavRow } from "@/components/phone/Atoms";
import { useNav } from "@/lib/nav";

export function Frame15_Decision() {
  const { next } = useNav();
  const [chosen, setChosen] = useState<"hold" | "switch" | null>(null);

  return (
    <>
      <StatusBar />
      <Canvas>
        <NavRow back="←  ANALYST" meta="DECISION · 24H" />

        {/* Decision card */}
        <div className="mb-[10px] rounded-[12px] border border-[var(--color-line-soft)] bg-white px-[13px] py-[12px]">
          <div
            className="mb-[6px] text-[7.5px] uppercase tracking-[0.14em] text-[var(--color-rust)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            ◆ Cedar shipment delayed
          </div>
          <h2
            className="mb-[8px] text-[14px] font-normal leading-[1.3] text-[var(--color-ink)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Hold on Hokkaido cedar, <em style={{ fontStyle: "italic" }}>or switch?</em>
          </h2>
          <p className="mb-[10px] text-[10px] leading-[1.5] text-[var(--color-ink-mid)]">
            Original supplier: 11-day delay due to harvest restrictions. Approved alternate: same grade, BC origin, +€38k for the lot.
          </p>

          {/* Options */}
          <div className="grid grid-cols-2 gap-[6px]">
            <DecisionOption
              name="Hold"
              meta="+11 days · €0"
              chosen={chosen === "hold"}
              onClick={() => setChosen("hold")}
            />
            <DecisionOption
              name="Switch"
              meta="On time · +€38k"
              chosen={chosen === "switch"}
              onClick={() => setChosen("switch")}
              variant="dark"
            />
          </div>
        </div>

        {/* Confirm button */}
        <button
          onClick={chosen ? next : undefined}
          disabled={!chosen}
          className={`mt-auto flex items-center justify-between rounded-[12px] px-[16px] py-[13px] text-[12.5px] font-medium transition-all ${
            chosen
              ? "bg-[var(--color-rust)] text-[var(--color-bone)] hover:opacity-90"
              : "bg-[var(--color-paper-2)] text-[var(--color-ink-mid)] cursor-not-allowed opacity-60"
          }`}
        >
          <span>{chosen ? `Approve · ${chosen === "hold" ? "Hold" : "Switch"}` : "Pick an option"}</span>
          <span className="text-[16px] font-light" style={{ fontFamily: "var(--font-display)" }}>
            →
          </span>
        </button>
      </Canvas>
    </>
  );
}

function DecisionOption({
  name,
  meta,
  chosen,
  onClick,
  variant = "light",
}: {
  name: string;
  meta: string;
  chosen: boolean;
  onClick: () => void;
  variant?: "light" | "dark";
}) {
  const baseClass = chosen
    ? "border-[2px] border-[var(--color-rust)]"
    : "border border-transparent";

  const colorClass =
    variant === "dark"
      ? "bg-[var(--color-ink)] text-[var(--color-bone)]"
      : "bg-[var(--color-paper-2)] text-[var(--color-ink)]";

  return (
    <button
      onClick={onClick}
      className={`rounded-[9px] px-[10px] py-[9px] text-left transition-all ${baseClass} ${colorClass}`}
    >
      <div
        className={`mb-[3px] text-[11px] font-medium leading-[1.1] ${
          variant === "dark" ? "text-[var(--color-bone)]" : "text-[var(--color-ink)]"
        }`}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {name}
      </div>
      <div
        className={`text-[8px] tracking-[0.04em] ${
          variant === "dark" ? "text-[rgba(244,239,230,0.7)]" : "text-[var(--color-ink-mid)]"
        }`}
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {meta}
      </div>
    </button>
  );
}
