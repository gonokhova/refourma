"use client";

import { StatusBar } from "@/components/phone/PhoneFrame";
import { Canvas, NavRow, Eyebrow, Title, CTA } from "@/components/phone/Atoms";

const HANDOVER_ROWS = [
  { label: "Punch list", value: "12 / 12 closed" },
  { label: "Final inspection", value: "Approved" },
  { label: "Title transfer", value: "Filed" },
  { label: "Insurance", value: "Active" },
  { label: "Smart lock", value: "Provisioned" },
  { label: "Concierge", value: "Tomoko · paired" },
];

export function Frame16_Handover() {
  return (
    <>
      <StatusBar />
      <Canvas>
        <NavRow back="←  N-04" meta="HANDOVER" />

        <Eyebrow>Day of completion</Eyebrow>
        <Title size="sm">
          It&apos;s <em style={{ fontStyle: "italic" }}>yours.</em>
        </Title>

        <div className="mb-[10px] rounded-[12px] border border-[var(--color-line-soft)] bg-white px-[12px] py-[8px]">
          {HANDOVER_ROWS.map((row, idx) => (
            <div
              key={row.label}
              className={`flex items-center justify-between py-[6px] text-[10px] ${
                idx < HANDOVER_ROWS.length - 1
                  ? "border-b border-[var(--color-line-soft)]"
                  : ""
              }`}
            >
              <span className="text-[var(--color-ink-mid)]">{row.label}</span>
              <span className="font-medium text-[var(--color-ink)]">{row.value}</span>
            </div>
          ))}
        </div>

        <CTA variant="ivory">Open virtual key</CTA>
      </Canvas>
    </>
  );
}
