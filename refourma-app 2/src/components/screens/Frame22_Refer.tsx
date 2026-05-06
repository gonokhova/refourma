"use client";

import { useState } from "react";
import { StatusBar } from "@/components/phone/PhoneFrame";
import { Canvas, NavRow, Eyebrow, Title, CTA } from "@/components/phone/Atoms";

const HERO_IMAGE = "/images/exterior-night.jpg";

const PEOPLE = [
  { id: "sofia", initial: "S", name: "Sofia" },
  { id: "marc", initial: "M", name: "Marc" },
  { id: "new", initial: "+", name: "New" },
];

export function Frame22_Refer() {
  const [person, setPerson] = useState<string>("marc");
  const selectedPerson = PEOPLE.find((p) => p.id === person)!;

  return (
    <>
      <StatusBar />
      <Canvas>
        <NavRow back="←  PORTAL" meta="NEW INVITE" />

        <Eyebrow>Compose · 1 of 3</Eyebrow>
        <Title size="sm">
          Introduce <em style={{ fontStyle: "italic" }}>a friend.</em>
        </Title>

        {/* Project pick (locked to Pagano for prototype) */}
        <Section label="To which place">
          <div className="flex items-center gap-[9px] rounded-[10px] border-[1.5px] border-[var(--color-ink)] bg-white px-[10px] py-[9px]">
            <div
              className="h-[36px] w-[36px] flex-shrink-0 rounded-[6px]"
              style={{
                backgroundImage: `url(${HERO_IMAGE})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="flex-1">
              <div
                className="text-[11px] font-medium text-[var(--color-ink)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                N-04 Pagano
              </div>
              <div
                className="mt-[1px] text-[8px] tracking-[0.04em] text-[var(--color-muted-strong)]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Niseko · 1 left · €4.0M
              </div>
            </div>
          </div>
        </Section>

        {/* Person pick */}
        <Section label="For whom">
          <div className="flex gap-[6px]">
            {PEOPLE.map((p) => (
              <button
                key={p.id}
                onClick={() => setPerson(p.id)}
                className={`flex-1 rounded-[8px] border px-[6px] py-[8px] text-center transition-colors ${
                  person === p.id
                    ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-bone)]"
                    : "border-[var(--color-line-soft)] bg-white text-[var(--color-ink)]"
                }`}
              >
                <div
                  className={`mx-auto mb-[4px] flex h-[22px] w-[22px] items-center justify-center rounded-full ${
                    person === p.id
                      ? "bg-[var(--color-rust)] text-[var(--color-bone)]"
                      : "bg-[var(--color-paper-2)] text-[var(--color-ink)]"
                  }`}
                  style={{ fontFamily: "var(--font-display)", fontSize: "10px", fontWeight: 500 }}
                >
                  {p.initial}
                </div>
                <div className="text-[8.5px] leading-[1.1]">{p.name}</div>
              </button>
            ))}
          </div>
        </Section>

        {/* Perk strip */}
        <div
          className="mb-auto rounded-[10px] bg-[var(--color-ink)] px-[11px] py-[9px] text-[9.5px] leading-[1.4] text-[var(--color-bone)]"
        >
          If <b className="font-medium" style={{ fontFamily: "var(--font-display)" }}>{selectedPerson.name}</b> joins → <b className="font-medium text-[var(--color-gold)]">−€25k OpEx</b> for you · founder credit +1
        </div>

        <CTA variant="rust">Write personal note</CTA>
      </Canvas>
    </>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-[12px]">
      <div
        className="mb-[6px] text-[8px] uppercase tracking-[0.12em] text-[var(--color-muted-strong)]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {label}
      </div>
      {children}
    </div>
  );
}
