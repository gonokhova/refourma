"use client";

import { StatusBar } from "@/components/phone/PhoneFrame";
import { Canvas, NavRow, Eyebrow, Title } from "@/components/phone/Atoms";
import { useNav } from "@/lib/nav";

type CompareRow = {
  label: string;
  cells: { value: string; best?: boolean }[];
};

const COMPARE_ROWS: CompareRow[] = [
  { label: "Price", cells: [{ value: "€2.5M", best: true }, { value: "€1.8M" }, { value: "€3.4M" }] },
  { label: "Yield", cells: [{ value: "6.8%", best: true }, { value: "5.2%" }, { value: "4.1%" }] },
  { label: "Delivery", cells: [{ value: "Q4 '27" }, { value: "Q2 '27", best: true }, { value: "2028" }] },
  { label: "Ski-out", cells: [{ value: "Yes", best: true }, { value: "Sea" }, { value: "Lake" }] },
];

const COMPARE_COLS = [
  { rank: "1", area: "Pagano", isWinner: true },
  { rank: "2", area: "Mori", isWinner: false },
  { rank: "3", area: "Cedar", isWinner: false },
];

export function Frame04_Choose() {
  const { goTo } = useNav();

  return (
    <>
      <StatusBar />
      <Canvas>
        <NavRow back="←  AGENT" meta="COMPARE · 3" />

        <Eyebrow>◆ Side-by-side</Eyebrow>
        <Title size="sm">
          The trade-offs <em style={{ fontStyle: "italic" }}>made plain.</em>
        </Title>

        {/* Compare table */}
        <div className="mb-[10px] overflow-hidden rounded-[10px] border border-[var(--color-line-soft)] bg-white">
          {/* Header row */}
          <div className="grid grid-cols-3 border-b border-[var(--color-line-soft)] bg-[var(--color-paper-2)]">
            {COMPARE_COLS.map((col, i) => (
              <div
                key={col.rank}
                className={`px-[6px] py-[8px] text-center ${
                  i < COMPARE_COLS.length - 1 ? "border-r border-[var(--color-line-soft)]" : ""
                }`}
              >
                <div
                  className={`text-[12px] font-medium ${
                    col.isWinner ? "text-[var(--color-rust)]" : "text-[var(--color-ink-mid)]"
                  }`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {col.rank}
                </div>
                <div
                  className="mt-[2px] text-[6.5px] uppercase tracking-[0.1em] text-[var(--color-muted-strong)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {col.area}
                </div>
              </div>
            ))}
          </div>

          {/* Data rows */}
          {COMPARE_ROWS.map((row, rIdx) => (
            <div
              key={row.label}
              className={`grid grid-cols-[60px_1fr_1fr_1fr] ${
                rIdx < COMPARE_ROWS.length - 1 ? "border-b border-[var(--color-line-soft)]" : ""
              }`}
            >
              <div
                className="flex items-center bg-[var(--color-paper-2)] px-[6px] py-[8px] text-[7px] uppercase tracking-[0.06em] text-[var(--color-muted-strong)]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {row.label}
              </div>
              {row.cells.map((cell, cIdx) => (
                <div
                  key={cIdx}
                  className={`flex items-center justify-center px-[4px] py-[8px] text-[11px] font-medium ${
                    cell.best ? "text-[var(--color-rust)]" : "text-[var(--color-ink)]"
                  } ${cIdx < row.cells.length - 1 ? "border-r border-[var(--color-line-soft)]" : ""}`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {cell.value}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Verdict */}
        <button
          onClick={() => goTo(8)}
          className="flex w-full items-start gap-[8px] rounded-[10px] bg-[var(--color-ink)] px-[12px] py-[11px] text-left text-[var(--color-bone)] hover:bg-[var(--color-ink-soft)] transition-colors"
        >
          <div
            className="flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-rust)] text-[11px] italic"
            style={{ fontFamily: "var(--font-display)" }}
          >
            A
          </div>
          <div
            className="text-[10.5px] font-light leading-[1.4]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            For your brief: <em className="text-[var(--color-gold)]" style={{ fontStyle: "italic" }}>
              Pagano
            </em>
            . Best yield, only ski-out, last fraction. <b className="font-medium">Mori</b> if you want{" "}
            <b className="font-medium">earlier delivery</b>.
          </div>
        </button>

        <div className="mt-auto" />
      </Canvas>
    </>
  );
}
