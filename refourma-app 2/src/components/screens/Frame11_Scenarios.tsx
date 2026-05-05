"use client";

import { useState } from "react";
import { StatusBar } from "@/components/phone/PhoneFrame";
import { Canvas, NavRow, Eyebrow, Title, CTA } from "@/components/phone/Atoms";

type Scenario = {
  id: string;
  name: string;
  budget: string;
  delivery: string;
  risk: "Low" | "Med";
};

const SCENARIOS: Scenario[] = [
  { id: "lean", name: "Lean", budget: "€2.5M", delivery: "Q3 '27", risk: "Low" },
  { id: "balanced", name: "Balanced", budget: "€2.8M", delivery: "Q4 '27", risk: "Low" },
  { id: "onsen", name: "Onsen+", budget: "€3.2M", delivery: "Q1 '28", risk: "Med" },
  { id: "bespoke", name: "Bespoke", budget: "€3.8M", delivery: "Q2 '28", risk: "Med" },
];

export function Frame11_Scenarios() {
  const [selected, setSelected] = useState<string>("balanced");
  const current = SCENARIOS.find((s) => s.id === selected)!;

  return (
    <>
      <StatusBar />
      <Canvas>
        <NavRow back="←  INTAKE" meta="4 SCENARIOS" />

        <Eyebrow>Generated · 38s</Eyebrow>
        <Title size="sm">
          Pick a <em style={{ fontStyle: "italic" }}>direction.</em>
        </Title>

        {/* Scenario grid 2x2 */}
        <div className="mb-[12px] grid grid-cols-2 gap-[6px]">
          {SCENARIOS.map((s) => (
            <ScenarioCard
              key={s.id}
              scenario={s}
              selected={selected === s.id}
              onClick={() => setSelected(s.id)}
            />
          ))}
        </div>

        <CTA>Continue with {current.name}</CTA>
      </Canvas>
    </>
  );
}

function ScenarioCard({
  scenario,
  selected,
  onClick,
}: {
  scenario: Scenario;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-[9px] border px-[10px] py-[9px] text-left transition-colors ${
        selected
          ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-bone)]"
          : "border-[var(--color-line-soft)] bg-white text-[var(--color-ink)] hover:border-[var(--color-ink)]"
      }`}
    >
      <div
        className="mb-[6px] text-[11px] font-medium leading-[1.1]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {scenario.name}
      </div>
      <div className="flex flex-col gap-[2px]">
        <Stat label="Budget" value={scenario.budget} dark={selected} />
        <Stat label="Delivery" value={scenario.delivery} dark={selected} />
        <Stat label="Risk" value={scenario.risk} dark={selected} />
      </div>
    </button>
  );
}

function Stat({
  label,
  value,
  dark,
}: {
  label: string;
  value: string;
  dark: boolean;
}) {
  return (
    <span
      className={`text-[7.5px] tracking-[0.04em] ${
        dark ? "text-[rgba(244,239,230,0.6)]" : "text-[var(--color-muted-strong)]"
      }`}
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {label} ·{" "}
      <b
        className="font-medium"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "10px",
          color: dark ? "var(--color-bone)" : "var(--color-ink)",
        }}
      >
        {value}
      </b>
    </span>
  );
}
