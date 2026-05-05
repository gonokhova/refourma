"use client";

import { StatusBar } from "@/components/phone/PhoneFrame";
import { Canvas, NavRow, Eyebrow, Title, CTA } from "@/components/phone/Atoms";

const INTAKE_ROWS = [
  { label: "Use", value: "4 weeks/year · family of 5", active: true },
  { label: "Style", value: "Quiet, warm, lots of cedar" },
  { label: "Must-have", value: "Onsen · ski room" },
  { label: "Avoid", value: "Open kitchen · marble" },
  { label: "Voice notes", value: "3 recordings" },
];

export function Frame10_IntakeDesign() {
  return (
    <>
      <StatusBar />
      <Canvas>
        <NavRow back="←  N-04" meta="INTAKE · AI" />

        <Eyebrow>Your taste · Your rhythm</Eyebrow>
        <Title size="sm">
          Tell us <em style={{ fontStyle: "italic" }}>how you live.</em>
        </Title>

        <div className="mb-[12px] flex flex-col gap-[7px]">
          {INTAKE_ROWS.map((row) => (
            <IntakeRow key={row.label} {...row} />
          ))}
        </div>

        <CTA>Generate scenarios</CTA>
      </Canvas>
    </>
  );
}

function IntakeRow({
  label,
  value,
  active,
}: {
  label: string;
  value: string;
  active?: boolean;
}) {
  return (
    <div
      className={`rounded-[10px] border px-[12px] py-[9px] ${
        active
          ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-bone)]"
          : "border-[var(--color-line-soft)] bg-white"
      }`}
    >
      <div
        className={`mb-[2px] text-[7.5px] uppercase tracking-[0.1em] ${
          active ? "text-[rgba(244,239,230,0.55)]" : "text-[var(--color-muted-strong)]"
        }`}
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {label}
      </div>
      <div
        className="text-[12px] font-normal"
        style={{
          fontFamily: "var(--font-display)",
          color: active ? "var(--color-bone)" : "var(--color-ink)",
        }}
      >
        {value}
      </div>
    </div>
  );
}
