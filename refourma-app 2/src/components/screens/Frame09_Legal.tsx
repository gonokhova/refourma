"use client";

import { StatusBar } from "@/components/phone/PhoneFrame";
import { Canvas, NavRow, Eyebrow, Title, CTA } from "@/components/phone/Atoms";

const LEGAL_ROWS = [
  { label: "KYC complete", status: "done" },
  { label: "GK formation", status: "done" },
  { label: "SPA reviewed", status: "done" },
  { label: "ROFR clause", status: "done" },
  { label: "E-signature", status: "pending" },
] as const;

export function Frame09_Legal() {
  return (
    <>
      <StatusBar />
      <Canvas>
        <NavRow back="←  N-04" meta="LEGAL · 4 / 4" />

        <Eyebrow>Structure · Co-ownership SPA</Eyebrow>
        <Title size="sm">
          Japanese <em style={{ fontStyle: "italic" }}>GK + SPA.</em>
        </Title>

        {/* Legal doc rows */}
        <div className="mb-[12px] rounded-[10px] border border-[var(--color-line-soft)] bg-white px-[12px] py-[8px]">
          {LEGAL_ROWS.map((row, idx) => (
            <div
              key={row.label}
              className={`flex items-center justify-between py-[8px] text-[10.5px] ${
                idx < LEGAL_ROWS.length - 1 ? "border-b border-[var(--color-line-soft)]" : ""
              }`}
            >
              <span className="text-[var(--color-ink-mid)]">{row.label}</span>
              {row.status === "done" ? (
                <span className="flex h-[16px] w-[16px] items-center justify-center rounded-full bg-[var(--color-ink)] text-[9px] text-[var(--color-bone)]">
                  ✓
                </span>
              ) : (
                <span
                  className="text-[9px] tracking-[0.08em] text-[var(--color-rust)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  PENDING
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Legal note */}
        <div
          className="mb-[12px] rounded-[8px] bg-[var(--color-ivory-warm)] px-[10px] py-[9px] text-[9.5px] leading-[1.45] text-[var(--color-ink-mid)]"
        >
          Structure: Japanese Godo Kaisha holds title; co-ownership SPA between fractions. ROFR baked in. Counsel-reviewed by Mori Hamada.
        </div>

        <CTA variant="rust">Sign &amp; lock fraction</CTA>
      </Canvas>
    </>
  );
}
