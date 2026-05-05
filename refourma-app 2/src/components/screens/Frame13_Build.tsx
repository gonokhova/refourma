"use client";

import { StatusBar } from "@/components/phone/PhoneFrame";
import { Canvas, NavRow, Eyebrow, CTA } from "@/components/phone/Atoms";

const FLOORPLAN = "/images/floorplan-pp00.jpg";

type StageStatus = "done" | "now" | "todo";

const STAGES: { name: string; status: StageStatus; pct: string }[] = [
  { name: "Foundations", status: "done", pct: "100%" },
  { name: "Frame", status: "done", pct: "100%" },
  { name: "Cladding", status: "now", pct: "42%" },
  { name: "Mechanical", status: "todo", pct: "—" },
  { name: "Interior", status: "todo", pct: "—" },
  { name: "Handover", status: "todo", pct: "—" },
];

export function Frame13_Build() {
  return (
    <>
      <StatusBar />
      <Canvas>
        <NavRow back="←  N-04" meta="BUILD · DAY 218" />

        <Eyebrow>Live · 68% to delivery</Eyebrow>
        <h2
          className="mb-[10px] text-[18px] font-light leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Frame complete. <em style={{ fontStyle: "italic" }}>Cladding next.</em>
        </h2>

        {/* Live image */}
        <div
          className="relative mb-[10px] h-[120px] overflow-hidden rounded-[10px]"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(10,10,10,0.15) 0%, rgba(10,10,10,0.55) 100%), url(${FLOORPLAN})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* LIVE badge */}
          <span
            className="absolute left-[8px] top-[8px] rounded-[3px] bg-[var(--color-rust)] px-[7px] py-[3px] text-[7px] tracking-[0.12em] text-[var(--color-bone)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            LIVE
          </span>
          {/* Pulsing dot */}
          <span
            className="absolute right-[12px] top-[12px] block h-[6px] w-[6px] rounded-full bg-[var(--color-rust)] animate-pulse-dot"
            style={{ boxShadow: "0 0 0 4px rgba(184, 69, 31, 0.3)" }}
          />
        </div>

        {/* Stages list */}
        <div className="mb-[12px] flex flex-col gap-[4px]">
          {STAGES.map((stage) => (
            <Stage key={stage.name} {...stage} />
          ))}
        </div>

        <CTA>Open live cam</CTA>
      </Canvas>
    </>
  );
}

function Stage({
  name,
  status,
  pct,
}: {
  name: string;
  status: StageStatus;
  pct: string;
}) {
  const dotClass =
    status === "done"
      ? "bg-[var(--color-ink)]"
      : status === "now"
        ? "bg-[var(--color-rust)]"
        : "bg-[var(--color-line)]";

  return (
    <div className="flex items-center gap-[8px] text-[10px] text-[var(--color-ink)]">
      <span
        className={`block h-[8px] w-[8px] flex-shrink-0 rounded-full ${dotClass}`}
        style={
          status === "now"
            ? { boxShadow: "0 0 0 3px rgba(184,69,31,0.2)" }
            : undefined
        }
      />
      <span className="flex-1">{name}</span>
      <span
        className="text-[8.5px] tracking-[0.04em] text-[var(--color-muted-strong)]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {pct}
      </span>
    </div>
  );
}
