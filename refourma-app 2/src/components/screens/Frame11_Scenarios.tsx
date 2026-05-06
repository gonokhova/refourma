"use client";

import { useState } from "react";
import { StatusBar } from "@/components/phone/PhoneFrame";
import { Canvas, NavRow, Eyebrow, Title } from "@/components/phone/Atoms";
import { useNav } from "@/lib/nav";

type Scenario = {
  id: string;
  name: string;
  budget: string;
  delivery: string;
  risk: "Low" | "Med";
  tagline: string;
  whatYouGet: string[];
  whatYouTrade: string[];
};

const SCENARIOS: Scenario[] = [
  {
    id: "lean",
    name: "Lean",
    budget: "€2.5M",
    delivery: "Q3 '27",
    risk: "Low",
    tagline: "The architect's draft, executed cleanly. Nothing more.",
    whatYouGet: [
      "Studio M.'s base plan as drawn",
      "Standard cedar throughout",
      "Onsen on the lower deck",
      "Earliest delivery of all options",
    ],
    whatYouTrade: [
      "No bespoke material upgrades",
      "Group votes pause until handover",
      "Smaller wine cellar (8 bottles vs 60)",
    ],
  },
  {
    id: "balanced",
    name: "Balanced",
    budget: "€2.8M",
    delivery: "Q4 '27",
    risk: "Low",
    tagline: "The default for a reason. Most owners arrive here.",
    whatYouGet: [
      "Lean foundation + 4 group-vote upgrades",
      "Cedar with stone accents in main rooms",
      "Onsen + sauna",
      "Custom kitchen (3 layout options to vote on)",
    ],
    whatYouTrade: [
      "One-quarter delivery delay vs Lean",
      "+€300k vs Lean",
    ],
  },
  {
    id: "onsen",
    name: "Onsen+",
    budget: "€3.2M",
    delivery: "Q1 '28",
    risk: "Med",
    tagline: "If you came for the water, lean into it.",
    whatYouGet: [
      "Outdoor onsen with Yōtei view",
      "Indoor onsen with skylight",
      "Heated floor throughout",
      "Cold plunge + steam room",
      "Walking path from onsen to river",
    ],
    whatYouTrade: [
      "Q1 '28 delivery (peak season missed)",
      "Higher OpEx — onsen plant maintenance",
      "Smaller third bedroom",
    ],
  },
  {
    id: "bespoke",
    name: "Bespoke",
    budget: "€3.8M",
    delivery: "Q2 '28",
    risk: "Med",
    tagline: "Studio M. starts from your brief, not their template.",
    whatYouGet: [
      "Architect-led custom plan from intake",
      "Material library access (Hokkaido + Kyoto)",
      "All major decisions are yours, not group's",
      "Dedicated project lead at Studio M.",
    ],
    whatYouTrade: [
      "Latest delivery (Q2 '28)",
      "Highest cost (+€1.3M vs Lean)",
      "More decisions on you — not for everyone",
    ],
  },
];

export function Frame11_Scenarios() {
  const { next } = useNav();
  const [selected, setSelected] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  const expandedScenario = expanded ? SCENARIOS.find((s) => s.id === expanded) : null;

  // ─────────────────────────────────────────────────────────────────
  // Drill-down view
  // ─────────────────────────────────────────────────────────────────
  if (expandedScenario) {
    const isSelected = selected === expandedScenario.id;
    return (
      <>
        <StatusBar />
        <Canvas>
          <button
            onClick={() => setExpanded(null)}
            className="mb-[14px] flex items-center gap-[6px] text-[8.5px] uppercase tracking-[0.14em] text-[var(--color-muted-strong)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            ←  All scenarios
          </button>

          <Eyebrow>Scenario · {expandedScenario.risk} risk</Eyebrow>
          <h2
            className="mb-[10px] text-[24px] font-light leading-[1.05] tracking-[-0.025em] text-[var(--color-ink)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {expandedScenario.name}.
          </h2>
          <p
            className="mb-[12px] text-[12px] font-light italic leading-[1.4] text-[var(--color-ink-mid)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {expandedScenario.tagline}
          </p>

          {/* Stats row */}
          <div className="mb-[12px] grid grid-cols-3 gap-[1px] overflow-hidden rounded-[8px] bg-[var(--color-line)]">
            <StatBox label="Budget" value={expandedScenario.budget} />
            <StatBox label="Delivery" value={expandedScenario.delivery} />
            <StatBox label="Risk" value={expandedScenario.risk} />
          </div>

          {/* What you get */}
          <BulletGroup
            label="What you get"
            items={expandedScenario.whatYouGet}
            tone="positive"
          />

          {/* What you trade */}
          <BulletGroup
            label="What you trade"
            items={expandedScenario.whatYouTrade}
            tone="trade"
          />

          {/* Pick / Continue button */}
          <button
            onClick={() => {
              if (isSelected) {
                next();
              } else {
                setSelected(expandedScenario.id);
              }
            }}
            className={`mt-auto flex items-center justify-between rounded-[12px] px-[16px] py-[13px] text-[12.5px] font-medium transition-colors ${
              isSelected
                ? "bg-[var(--color-rust)] text-[var(--color-bone)] hover:opacity-90"
                : "bg-[var(--color-ink)] text-[var(--color-bone)] hover:bg-[var(--color-rust)]"
            }`}
          >
            <span>{isSelected ? `Continue with ${expandedScenario.name}` : `Pick ${expandedScenario.name}`}</span>
            <span className="text-[16px] font-light" style={{ fontFamily: "var(--font-display)" }}>
              →
            </span>
          </button>
        </Canvas>
      </>
    );
  }

  // ─────────────────────────────────────────────────────────────────
  // List view (default)
  // ─────────────────────────────────────────────────────────────────
  return (
    <>
      <StatusBar />
      <Canvas>
        <NavRow back="←  INTAKE" meta="4 SCENARIOS" />

        <Eyebrow>Generated · 38s · tap to explore</Eyebrow>
        <Title size="sm">
          Pick a <em style={{ fontStyle: "italic" }}>direction.</em>
        </Title>

        <div className="mb-[12px] grid grid-cols-2 gap-[6px]">
          {SCENARIOS.map((s) => (
            <ScenarioCard
              key={s.id}
              scenario={s}
              isSelected={selected === s.id}
              onClick={() => setExpanded(s.id)}
            />
          ))}
        </div>

        <button
          onClick={selected ? next : undefined}
          disabled={!selected}
          className={`mt-auto flex items-center justify-between rounded-[12px] px-[16px] py-[13px] text-[12.5px] font-medium transition-colors ${
            selected
              ? "bg-[var(--color-ink)] text-[var(--color-bone)] hover:bg-[var(--color-rust)]"
              : "bg-[var(--color-paper-2)] text-[var(--color-ink-mid)] cursor-not-allowed opacity-60"
          }`}
        >
          <span>
            {selected
              ? `Continue with ${SCENARIOS.find((s) => s.id === selected)!.name}`
              : "Tap a scenario to explore"}
          </span>
          <span className="text-[16px] font-light" style={{ fontFamily: "var(--font-display)" }}>
            →
          </span>
        </button>
      </Canvas>
    </>
  );
}

function ScenarioCard({
  scenario,
  isSelected,
  onClick,
}: {
  scenario: Scenario;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative rounded-[9px] border px-[10px] py-[10px] text-left transition-all ${
        isSelected
          ? "border-[2px] border-[var(--color-rust)] bg-white"
          : "border-[var(--color-line-soft)] bg-white hover:border-[var(--color-ink)]"
      }`}
    >
      {/* Selected badge */}
      {isSelected && (
        <span
          className="absolute right-[8px] top-[8px] flex h-[16px] w-[16px] items-center justify-center rounded-full bg-[var(--color-rust)] text-[9px] text-[var(--color-bone)]"
        >
          ✓
        </span>
      )}

      <div
        className="mb-[6px] text-[12px] font-medium leading-[1.1] text-[var(--color-ink)]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {scenario.name}
      </div>

      <div className="flex flex-col gap-[2px]">
        <Stat label="Budget" value={scenario.budget} />
        <Stat label="Delivery" value={scenario.delivery} />
        <Stat label="Risk" value={scenario.risk} />
      </div>

      {/* Drill-down hint */}
      <div
        className="mt-[8px] flex items-center justify-between text-[7.5px] tracking-[0.08em] text-[var(--color-muted-strong)]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        <span>EXPLORE</span>
        <span className="text-[10px]" style={{ fontFamily: "var(--font-display)" }}>
          →
        </span>
      </div>
    </button>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <span
      className="text-[7.5px] tracking-[0.04em] text-[var(--color-muted-strong)]"
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {label} ·{" "}
      <b
        className="font-medium text-[var(--color-ink)]"
        style={{ fontFamily: "var(--font-display)", fontSize: "10px" }}
      >
        {value}
      </b>
    </span>
  );
}

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white px-[8px] py-[8px] text-center">
      <div
        className="mb-[2px] text-[7px] uppercase tracking-[0.1em] text-[var(--color-muted-strong)]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {label}
      </div>
      <div
        className="text-[12px] font-medium text-[var(--color-ink)]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {value}
      </div>
    </div>
  );
}

function BulletGroup({
  label,
  items,
  tone,
}: {
  label: string;
  items: string[];
  tone: "positive" | "trade";
}) {
  return (
    <div className="mb-[10px]">
      <div
        className={`mb-[6px] text-[7.5px] uppercase tracking-[0.14em] ${
          tone === "positive" ? "text-[var(--color-ink)]" : "text-[var(--color-rust)]"
        }`}
        style={{ fontFamily: "var(--font-mono)" }}
      >
        ◆ {label}
      </div>
      <ul className="flex flex-col gap-[3px]">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex gap-[6px] text-[10.5px] leading-[1.4] text-[var(--color-ink-mid)]"
          >
            <span className="text-[var(--color-muted-strong)]">·</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
