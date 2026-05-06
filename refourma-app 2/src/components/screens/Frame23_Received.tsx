"use client";

import { StatusBar } from "@/components/phone/PhoneFrame";
import { useNav } from "@/lib/nav";

const HERO_IMAGE = "/images/exterior-night.jpg";

export function Frame23_Received() {
  const { next } = useNav();

  return (
    <>
      {/* Hero with overlay */}
      <div
        className="relative h-[200px] flex-shrink-0"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 30%, transparent 60%, rgba(0,0,0,0.7) 100%), url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <StatusBar dark />

        <div className="relative z-[5] flex h-full flex-col justify-between px-[16px] pb-[14px] pt-[6px]">
          {/* Top marks */}
          <div
            className="flex justify-between text-[8.5px] uppercase tracking-[0.16em]"
            style={{
              fontFamily: "var(--font-mono)",
              color: "rgba(244,239,230,0.85)",
            }}
          >
            <span>RE:FOURMA</span>
            <span>INVITATION</span>
          </div>

          {/* From */}
          <div className="flex items-center gap-[8px]">
            <span
              className="text-[7.5px] uppercase tracking-[0.14em]"
              style={{
                fontFamily: "var(--font-mono)",
                color: "rgba(244,239,230,0.7)",
              }}
            >
              FROM
            </span>
            <span
              className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[var(--color-rust)] text-[13px] italic text-[var(--color-bone)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              A
            </span>
            <span
              className="text-[12px] font-normal text-[var(--color-bone)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Anastasia
            </span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col bg-[var(--color-bone)] px-[18px] pb-[24px] pt-[16px]">
        {/* Personal note quote */}
        <div
          className="mb-[14px] rounded-[0_8px_8px_0] border-l-2 border-[var(--color-rust)] bg-[var(--color-paper-2)] px-[14px] py-[10px] text-[13px] font-light italic leading-[1.4] text-[var(--color-ink)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Marc — I think you&apos;d love this one. The river view from the onsen is exactly your kind of quiet.
        </div>

        {/* Project meta — 3 columns */}
        <div className="mb-auto grid grid-cols-3 gap-[1px] overflow-hidden rounded-[8px] border border-[var(--color-line)] bg-[var(--color-line)]">
          <MetaBlock label="Project" value="N-04 Pagano" />
          <MetaBlock label="Place" value="Niseko" />
          <MetaBlock label="From" value="€4.0M" />
        </div>

        {/* CTA */}
        <button
          onClick={next}
          className="mt-[16px] flex items-center justify-between rounded-[12px] bg-[var(--color-ink)] px-[16px] py-[13px] text-[12.5px] font-medium text-[var(--color-bone)] transition-colors hover:bg-[var(--color-rust)]"
        >
          <span>View project</span>
          <span className="text-[16px] font-light" style={{ fontFamily: "var(--font-display)" }}>
            →
          </span>
        </button>
      </div>
    </>
  );
}

function MetaBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white p-[10px] text-center">
      <div
        className="mb-[3px] text-[7px] uppercase tracking-[0.08em] text-[var(--color-muted-strong)]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {label}
      </div>
      <div
        className="text-[11px] font-medium leading-tight tracking-[-0.01em] text-[var(--color-ink)]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {value}
      </div>
    </div>
  );
}
