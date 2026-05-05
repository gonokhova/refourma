"use client";

import { useState } from "react";
import { StatusBar } from "@/components/phone/PhoneFrame";
import { Canvas, NavRow, Eyebrow, CTA } from "@/components/phone/Atoms";

type DayKind = "you" | "peak" | "other" | "empty";

type MonthData = {
  name: string;
  short: string;
  year: number;
  daysInMonth: number;
  startDayOfWeek: number; // 0 = Mon
  dayKinds: Record<number, DayKind>; // day number -> kind
  peakRange?: string;
  yourWeeks: string;
};

// Three months to demo rotation
const MONTHS: MonthData[] = [
  {
    name: "January",
    short: "JAN",
    year: 2028,
    daysInMonth: 31,
    startDayOfWeek: 5, // Sat
    yourWeeks: "Jan 8 – 14 · yours",
    dayKinds: {
      ...range(1, 7).reduce(setKind("other"), {}),
      ...range(8, 14).reduce(setKind("you"), {}),
      ...range(15, 31).reduce(setKind("other"), {}),
    },
  },
  {
    name: "February",
    short: "FEB",
    year: 2028,
    daysInMonth: 29,
    startDayOfWeek: 1, // Tue
    yourWeeks: "Feb 5 – 18 · yours + peak",
    peakRange: "Feb 12 – 18",
    dayKinds: {
      ...range(1, 4).reduce(setKind("other"), {}),
      ...range(5, 11).reduce(setKind("you"), {}),
      ...range(12, 18).reduce(setKind("peak"), {}),
      ...range(19, 29).reduce(setKind("other"), {}),
    },
  },
  {
    name: "March",
    short: "MAR",
    year: 2028,
    daysInMonth: 31,
    startDayOfWeek: 2, // Wed
    yourWeeks: "Mar 19 – 25 · yours",
    dayKinds: {
      ...range(1, 18).reduce(setKind("other"), {}),
      ...range(19, 25).reduce(setKind("you"), {}),
      ...range(26, 31).reduce(setKind("other"), {}),
    },
  },
];

function range(from: number, to: number): number[] {
  return Array.from({ length: to - from + 1 }, (_, i) => from + i);
}

function setKind(kind: DayKind) {
  return (acc: Record<number, DayKind>, day: number) => {
    acc[day] = kind;
    return acc;
  };
}

export function Frame17_Calendar() {
  const [monthIdx, setMonthIdx] = useState<number>(1); // start at February
  const month = MONTHS[monthIdx];

  return (
    <>
      <StatusBar />
      <Canvas>
        <NavRow back="←  N-04" meta={`${month.short} ${month.year}`} />

        <Eyebrow>Your weeks · 12 / year</Eyebrow>
        <h2
          className="mb-[12px] text-[20px] font-light leading-[1.05] tracking-[-0.025em] text-[var(--color-ink)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {month.name}.{" "}
          {month.peakRange ? (
            <em style={{ fontStyle: "italic" }}>You + peak.</em>
          ) : (
            <em style={{ fontStyle: "italic" }}>Your week.</em>
          )}
        </h2>

        {/* Month switcher */}
        <div className="mb-[12px] flex items-center justify-between">
          <button
            onClick={() => setMonthIdx(Math.max(0, monthIdx - 1))}
            disabled={monthIdx === 0}
            className="flex h-[28px] w-[28px] items-center justify-center rounded-full border border-[var(--color-line)] text-[12px] disabled:opacity-30"
          >
            ←
          </button>
          <span
            className="text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted-strong)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {month.short} {month.year}
          </span>
          <button
            onClick={() => setMonthIdx(Math.min(MONTHS.length - 1, monthIdx + 1))}
            disabled={monthIdx === MONTHS.length - 1}
            className="flex h-[28px] w-[28px] items-center justify-center rounded-full border border-[var(--color-line)] text-[12px] disabled:opacity-30"
          >
            →
          </button>
        </div>

        {/* Calendar grid */}
        <CalendarGrid month={month} />

        {/* Legend */}
        <div className="mb-[12px] mt-[8px] flex flex-wrap gap-[10px] text-[8px] text-[var(--color-muted-strong)]" style={{ fontFamily: "var(--font-mono)" }}>
          <LegendItem swatch="ink" label="Yours" />
          <LegendItem swatch="rust" label="Peak rotation" />
          <LegendItem swatch="ivory" label="Co-owners" />
        </div>

        {/* Your peak week info */}
        <div className="mb-[12px] rounded-[10px] border border-[var(--color-line-soft)] bg-white px-[12px] py-[10px]">
          <div
            className="mb-[3px] text-[7.5px] uppercase tracking-[0.1em] text-[var(--color-muted-strong)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {month.peakRange ? "Peak week (this year)" : "Your week"}
          </div>
          <div
            className="text-[12px] font-normal text-[var(--color-ink)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {month.yourWeeks}
          </div>
        </div>

        <CTA>Open Feb 5 – 11 stay</CTA>
      </Canvas>
    </>
  );
}

function CalendarGrid({ month }: { month: MonthData }) {
  const headers = ["M", "T", "W", "T", "F", "S", "S"];
  // Build cell array: empty cells for offset, then days
  const cells: { day?: number; kind?: DayKind }[] = [
    ...Array(month.startDayOfWeek).fill({}),
    ...Array.from({ length: month.daysInMonth }, (_, i) => ({
      day: i + 1,
      kind: month.dayKinds[i + 1] || ("other" as DayKind),
    })),
  ];

  return (
    <div className="grid grid-cols-7 gap-[3px]">
      {headers.map((h, i) => (
        <div
          key={i}
          className="pb-[4px] text-center text-[7px] tracking-[0.04em] text-[var(--color-muted-strong)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {h}
        </div>
      ))}
      {cells.map((cell, i) => {
        if (!cell.day) return <div key={i} />;
        const cls = kindClass(cell.kind!);
        return (
          <div
            key={i}
            className={`flex aspect-square items-center justify-center rounded-[4px] text-[8px] ${cls}`}
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {cell.day}
          </div>
        );
      })}
    </div>
  );
}

function kindClass(kind: DayKind): string {
  switch (kind) {
    case "you":
      return "bg-[var(--color-ink)] text-[var(--color-bone)]";
    case "peak":
      return "bg-[var(--color-rust)] text-[var(--color-bone)] font-semibold";
    case "other":
      return "bg-[var(--color-ivory-warm)] text-[var(--color-ink)]";
    default:
      return "bg-[var(--color-paper-2)] text-[var(--color-ink)]";
  }
}

function LegendItem({
  swatch,
  label,
}: {
  swatch: "ink" | "rust" | "ivory";
  label: string;
}) {
  const swatchClass =
    swatch === "ink"
      ? "bg-[var(--color-ink)]"
      : swatch === "rust"
        ? "bg-[var(--color-rust)]"
        : "bg-[var(--color-ivory-warm)]";

  return (
    <span className="flex items-center gap-[5px]">
      <span className={`block h-[8px] w-[8px] rounded-[2px] ${swatchClass}`} />
      <span>{label}</span>
    </span>
  );
}
