"use client";

import { useState } from "react";
import { StatusBar } from "@/components/phone/PhoneFrame";
import { Canvas, NavRow, Eyebrow } from "@/components/phone/Atoms";

type DayKind = "you" | "peak" | "other" | "empty";

type DayDetail = {
  owner: string;
  weekLabel: string;
  note?: string;
};

type MonthData = {
  name: string;
  short: string;
  year: number;
  daysInMonth: number;
  startDayOfWeek: number; // 0 = Mon
  dayKinds: Record<number, DayKind>;
  dayDetails: Record<number, DayDetail>;
  yourWeeks: string;
  peakRange?: string;
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
      ...range(15, 21).reduce(setKind("other"), {}),
      ...range(22, 31).reduce(setKind("other"), {}),
    },
    dayDetails: {
      ...range(1, 7).reduce(setDetail({ owner: "Smith Family", weekLabel: "Smith Family · New Year stay" }), {}),
      ...range(8, 14).reduce(setDetail({ owner: "You", weekLabel: "Your week · powder season" }), {}),
      ...range(15, 21).reduce(setDetail({ owner: "Tanaka Family", weekLabel: "Tanaka Family · half-term" }), {}),
      ...range(22, 31).reduce(setDetail({ owner: "Wong Family", weekLabel: "Wong Family · friends' visit" }), {}),
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
    dayDetails: {
      ...range(1, 4).reduce(setDetail({ owner: "Tanaka Family", weekLabel: "Tanaka Family · short stay" }), {}),
      ...range(5, 11).reduce(setDetail({ owner: "You", weekLabel: "Your week · 4 guests confirmed" }), {}),
      ...range(12, 18).reduce(setDetail({ owner: "You", weekLabel: "Your peak week · Sapporo Festival" }), {}),
      ...range(19, 25).reduce(setDetail({ owner: "Smith Family", weekLabel: "Smith Family · post-Festival" }), {}),
      ...range(26, 29).reduce(setDetail({ owner: "Wong Family", weekLabel: "Wong Family · weekend" }), {}),
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
      ...range(1, 11).reduce(setKind("other"), {}),
      ...range(12, 18).reduce(setKind("other"), {}),
      ...range(19, 25).reduce(setKind("you"), {}),
      ...range(26, 31).reduce(setKind("other"), {}),
    },
    dayDetails: {
      ...range(1, 11).reduce(setDetail({ owner: "Smith Family", weekLabel: "Smith Family · spring break" }), {}),
      ...range(12, 18).reduce(setDetail({ owner: "Tanaka Family", weekLabel: "Tanaka Family · graduation trip" }), {}),
      ...range(19, 25).reduce(setDetail({ owner: "You", weekLabel: "Your week · spring conditions" }), {}),
      ...range(26, 31).reduce(setDetail({ owner: "Wong Family", weekLabel: "Wong Family · season closing" }), {}),
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

function setDetail(detail: DayDetail) {
  return (acc: Record<number, DayDetail>, day: number) => {
    acc[day] = detail;
    return acc;
  };
}

export function Frame17_Calendar() {
  const [monthIdx, setMonthIdx] = useState<number>(1); // start at February
  const [selectedDay, setSelectedDay] = useState<number | null>(13); // peak day pre-selected for demo

  const month = MONTHS[monthIdx];
  const selectedDetail = selectedDay ? month.dayDetails[selectedDay] : null;
  const selectedKind = selectedDay ? month.dayKinds[selectedDay] : null;

  const handleDayClick = (day: number) => {
    setSelectedDay(selectedDay === day ? null : day);
  };

  const switchMonth = (newIdx: number) => {
    setMonthIdx(newIdx);
    setSelectedDay(null); // reset selection on month change
  };

  return (
    <>
      <StatusBar />
      <Canvas>
        <NavRow back="←  N-04" meta={`${month.short} ${month.year}`} />

        <Eyebrow>Your weeks · 12 / year</Eyebrow>
        <h2
          className="mb-[10px] text-[18px] font-light leading-[1.05] tracking-[-0.025em] text-[var(--color-ink)]"
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
        <div className="mb-[10px] flex items-center justify-between">
          <button
            onClick={() => switchMonth(Math.max(0, monthIdx - 1))}
            disabled={monthIdx === 0}
            className="flex h-[24px] w-[24px] items-center justify-center rounded-full border border-[var(--color-line)] text-[11px] disabled:opacity-30"
          >
            ←
          </button>
          <span
            className="text-[9px] uppercase tracking-[0.14em] text-[var(--color-muted-strong)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {month.short} {month.year}
          </span>
          <button
            onClick={() => switchMonth(Math.min(MONTHS.length - 1, monthIdx + 1))}
            disabled={monthIdx === MONTHS.length - 1}
            className="flex h-[24px] w-[24px] items-center justify-center rounded-full border border-[var(--color-line)] text-[11px] disabled:opacity-30"
          >
            →
          </button>
        </div>

        {/* Calendar grid */}
        <CalendarGrid
          month={month}
          selectedDay={selectedDay}
          onDayClick={handleDayClick}
        />

        {/* Legend */}
        <div
          className="mb-[10px] mt-[8px] flex flex-wrap gap-[10px] text-[8px] text-[var(--color-muted-strong)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <LegendItem swatch="ink" label="Yours" />
          <LegendItem swatch="rust" label="Peak" />
          <LegendItem swatch="ivory" label="Co-owners" />
        </div>

        {/* Detail panel — changes based on selected day */}
        {selectedDay && selectedDetail ? (
          <DetailPanel
            day={selectedDay}
            month={month.short}
            detail={selectedDetail}
            kind={selectedKind!}
          />
        ) : (
          <div className="mb-[10px] rounded-[10px] border border-dashed border-[var(--color-line)] px-[12px] py-[16px] text-center text-[10px] text-[var(--color-muted-strong)]">
            Tap a day to see details
          </div>
        )}

        {/* CTA — changes based on selection */}
        <button
          className={`flex items-center justify-between rounded-[12px] px-[16px] py-[13px] text-[12.5px] font-medium transition-colors ${
            selectedKind === "you" || selectedKind === "peak"
              ? "bg-[var(--color-ink)] text-[var(--color-bone)] hover:bg-[var(--color-rust)]"
              : "bg-[var(--color-paper-2)] text-[var(--color-ink-mid)] cursor-not-allowed opacity-60"
          }`}
          disabled={selectedKind !== "you" && selectedKind !== "peak"}
        >
          <span>
            {selectedKind === "you" || selectedKind === "peak"
              ? `Open ${month.short} ${selectedDay} stay`
              : selectedKind === "other"
                ? "Co-owner's week"
                : "Pick a day"}
          </span>
          <span className="text-[16px] font-light" style={{ fontFamily: "var(--font-display)" }}>
            →
          </span>
        </button>
      </Canvas>
    </>
  );
}

function CalendarGrid({
  month,
  selectedDay,
  onDayClick,
}: {
  month: MonthData;
  selectedDay: number | null;
  onDayClick: (day: number) => void;
}) {
  const headers = ["M", "T", "W", "T", "F", "S", "S"];
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
        const isSelected = selectedDay === cell.day;
        const cls = kindClass(cell.kind!);
        const ringCls = isSelected
          ? "ring-2 ring-[var(--color-rust)] ring-offset-1 ring-offset-[var(--color-bone)]"
          : "";
        return (
          <button
            key={i}
            onClick={() => onDayClick(cell.day!)}
            className={`flex aspect-square items-center justify-center rounded-[4px] text-[8px] transition-all hover:scale-110 ${cls} ${ringCls}`}
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {cell.day}
          </button>
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

function DetailPanel({
  day,
  month,
  detail,
  kind,
}: {
  day: number;
  month: string;
  detail: DayDetail;
  kind: DayKind;
}) {
  const isYours = kind === "you" || kind === "peak";
  const isPeak = kind === "peak";

  return (
    <div
      className={`mb-[10px] rounded-[10px] px-[12px] py-[10px] ${
        isYours
          ? isPeak
            ? "bg-[var(--color-rust)] text-[var(--color-bone)]"
            : "bg-[var(--color-ink)] text-[var(--color-bone)]"
          : "border border-[var(--color-line-soft)] bg-white"
      }`}
    >
      <div className="mb-[3px] flex items-center justify-between">
        <span
          className={`text-[7.5px] uppercase tracking-[0.14em] ${
            isYours ? "opacity-70" : "text-[var(--color-muted-strong)]"
          }`}
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {month} {day}, 2028
        </span>
        {isPeak && (
          <span
            className="rounded-full bg-[var(--color-gold)] px-[6px] py-[1px] text-[7px] font-medium uppercase tracking-[0.1em] text-[var(--color-ink)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            PEAK
          </span>
        )}
      </div>
      <div
        className={`text-[12px] font-normal leading-[1.3] ${
          isYours ? "" : "text-[var(--color-ink)]"
        }`}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {detail.weekLabel}
      </div>
    </div>
  );
}
