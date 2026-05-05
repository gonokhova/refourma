"use client";

import { useState } from "react";
import { StatusBar } from "@/components/phone/PhoneFrame";
import { Canvas, NavRow, Eyebrow } from "@/components/phone/Atoms";
import { useNav } from "@/lib/nav";
import { ACTIVITIES } from "@/data/projects";

const OPS_TILES = [
  { label: "Stays", value: "9 / 12", sub: "3 weeks ahead" },
  { label: "OpEx share", value: "€18k", sub: "Of €72k YTD" },
  { label: "Service KPI", value: "98%", sub: "SLA met" },
  { label: "Open issues", value: "2", sub: "Both minor", warn: true },
];

export function Frame18_Operate() {
  const { next } = useNav();
  // Track selected activity indices
  const [selected, setSelected] = useState<Set<number>>(new Set([0, 1, 2])); // pre-selected for demo

  const toggle = (idx: number) => {
    const nextSet = new Set(selected);
    nextSet.has(idx) ? nextSet.delete(idx) : nextSet.add(idx);
    setSelected(nextSet);
  };

  const ctaLabel =
    selected.size === 0
      ? "Pick activities"
      : selected.size === 1
        ? "Book 1 with Tomoko"
        : selected.size === ACTIVITIES.length
          ? `Book all ${ACTIVITIES.length} with Tomoko`
          : `Book ${selected.size} with Tomoko`;

  return (
    <>
      <StatusBar />
      <Canvas>
        <NavRow back="←  N-04" meta="OPS · YTD" />

        <Eyebrow>Year to date</Eyebrow>
        <h2
          className="mb-[10px] text-[18px] font-light leading-[1.05] tracking-[-0.025em] text-[var(--color-ink)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          The home, <em style={{ fontStyle: "italic" }}>operating.</em>
        </h2>

        {/* Scrollable middle area */}
        <div className="mb-[10px] flex flex-1 flex-col overflow-y-auto pr-[2px]">
          {/* Ops grid */}
          <div className="mb-[10px] grid grid-cols-2 gap-[6px]">
            {OPS_TILES.map((tile) => (
              <OpsTile key={tile.label} {...tile} />
            ))}
          </div>

          {/* Concierge dark section */}
          <div className="mb-[8px] rounded-[12px] bg-[var(--color-ink)] px-[12px] pb-[11px] pt-[11px] text-[var(--color-bone)]">
            {/* Concierge header */}
            <div className="mb-[8px] flex items-center gap-[7px]">
              <span
                className="flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-gold)] text-[10px] font-semibold text-[var(--color-ink)]"
              >
                ◇
              </span>
              <span
                className="flex-1 text-[7.5px] tracking-[0.14em]"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "rgba(244,239,230,0.7)",
                }}
              >
                CONCIERGE · TOMOKO
              </span>
              <span
                className="block h-[5px] w-[5px] rounded-full bg-[#5a8a3a]"
                style={{ boxShadow: "0 0 0 2px rgba(90,138,58,0.3)" }}
              />
            </div>

            {/* Tomoko's intro */}
            <p
              className="mb-[8px] text-[12px] font-light italic leading-[1.3]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              For your Feb 12 stay.
            </p>

            {/* Activities */}
            <div className="flex flex-col gap-[5px]">
              {ACTIVITIES.map((act, idx) => (
                <ActivityCard
                  key={idx}
                  activity={act}
                  selected={selected.has(idx)}
                  onClick={() => toggle(idx)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA changes based on selection */}
        <button
          onClick={selected.size > 0 ? next : undefined}
          disabled={selected.size === 0}
          className={`flex items-center justify-between rounded-[12px] px-[16px] py-[13px] text-[12.5px] font-medium transition-colors ${
            selected.size > 0
              ? "bg-[var(--color-rust)] text-[var(--color-bone)] hover:opacity-90"
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

function OpsTile({
  label,
  value,
  sub,
  warn,
}: {
  label: string;
  value: string;
  sub: string;
  warn?: boolean;
}) {
  return (
    <div className="rounded-[9px] border border-[var(--color-line-soft)] bg-white px-[10px] py-[9px]">
      <div
        className="mb-[3px] text-[7px] uppercase tracking-[0.1em] text-[var(--color-muted-strong)]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {label}
      </div>
      <div
        className={`text-[16px] font-medium leading-none ${warn ? "text-[var(--color-rust)]" : "text-[var(--color-ink)]"}`}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {value}
      </div>
      <div className="mt-[2px] text-[8.5px] text-[var(--color-ink-mid)]">{sub}</div>
    </div>
  );
}

function ActivityCard({
  activity,
  selected,
  onClick,
}: {
  activity: typeof ACTIVITIES[number];
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative rounded-[7px] px-[9px] py-[7px] text-left transition-all ${
        selected
          ? "bg-[rgba(184,69,31,0.18)] ring-1 ring-[var(--color-gold)]"
          : "bg-[rgba(244,239,230,0.06)] hover:bg-[rgba(244,239,230,0.1)]"
      }`}
    >
      {/* Selected checkmark */}
      {selected && (
        <span
          className="absolute right-[8px] top-[8px] flex h-[14px] w-[14px] items-center justify-center rounded-full bg-[var(--color-gold)] text-[8px] font-bold text-[var(--color-ink)]"
        >
          ✓
        </span>
      )}

      <div
        className="mb-[2px] text-[7px] tracking-[0.1em] text-[var(--color-gold)]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {activity.date} · {activity.time}
      </div>
      <div
        className="mb-[3px] pr-[20px] text-[10.5px] font-normal leading-[1.25] text-[var(--color-bone)]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {activity.name}
      </div>
      <div
        className="flex justify-between text-[7.5px] tracking-[0.04em]"
        style={{
          fontFamily: "var(--font-mono)",
          color: "rgba(244,239,230,0.55)",
        }}
      >
        <span>
          {activity.guests} guests · {activity.duration}
        </span>
        <span className="font-medium text-[var(--color-bone)]">{activity.price}</span>
      </div>
    </button>
  );
}
