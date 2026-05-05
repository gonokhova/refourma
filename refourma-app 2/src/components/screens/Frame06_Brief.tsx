"use client";

import { StatusBar } from "@/components/phone/PhoneFrame";
import { Canvas, NavRow, Eyebrow, Title, Subtitle, CTA } from "@/components/phone/Atoms";
import { PAGANO_DETAILS } from "@/data/projects";

export function Frame06_Brief() {
  return (
    <>
      <StatusBar />
      <Canvas>
        <NavRow back="←  N-04" meta="BRIEF" />

        <Eyebrow>Hanazono · Snow</Eyebrow>
        <Title size="sm">
          Pagano. <em style={{ fontStyle: "italic" }}>One home. Four owners.</em>
        </Title>
        <Subtitle>
          Designed by {PAGANO_DETAILS.architect} for the powder season. Five bedrooms plus one staff suite. Onsen and ski room on Primo Piano.
        </Subtitle>

        <Row label="Land" value={PAGANO_DETAILS.land} />
        <Row label="Built" value={PAGANO_DETAILS.built} />
        <Row label="Bedrooms" value={PAGANO_DETAILS.bedrooms} />
        <Row label="Delivery" value={PAGANO_DETAILS.delivery} />

        <CTA>Pick a fraction</CTA>
      </Canvas>
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="mb-[8px] rounded-[10px] border border-[var(--color-line-soft)] bg-white px-[12px] py-[10px]">
      <div
        className="mb-[3px] text-[7.5px] uppercase tracking-[0.1em] text-[var(--color-muted-strong)]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {label}
      </div>
      <div
        className="text-[12.5px] font-normal text-[var(--color-ink)]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {value}
      </div>
    </div>
  );
}
