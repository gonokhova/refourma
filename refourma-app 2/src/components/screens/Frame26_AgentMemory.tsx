"use client";

import { useNav } from "@/lib/nav";
import { StatusBar } from "@/components/phone/PhoneFrame";

const MEMORY_SECTIONS = [
  {
    label: "Preferences",
    icon: "◆",
    color: "#0f6e56",
    colorLight: "rgba(15,110,86,0.15)",
    items: [
      { key: "Location", val: "Snow · Japan / Canada" },
      { key: "Style", val: "Ski-out, forest view, quiet wing" },
      { key: "Family", val: "5 people · 2 children" },
      { key: "Season", val: "4 weeks · Feb preferred" },
      { key: "Budget", val: "¥150–200M fraction" },
    ],
  },
  {
    label: "Decision history",
    icon: "↗",
    color: "#1a5fa8",
    colorLight: "rgba(26,95,168,0.12)",
    items: [
      { key: "Nov 18", val: "Approved supplier switch · Cedar" },
      { key: "Oct 31", val: "Voted outdoor onsen · Pagano" },
      { key: "Sep 12", val: "Held counter at ¥172M · Hakuba" },
      { key: "Aug 03", val: "Chose Scenario B · Q4 delivery" },
    ],
  },
  {
    label: "Status",
    icon: "✓",
    color: "#085041",
    colorLight: "rgba(8,80,65,0.12)",
    items: [
      { key: "KYC", val: "Verified · Aug 2024 · Reusable" },
      { key: "Fraction", val: "Pine · N-04 Pagano · Owner" },
      { key: "Tier", val: "II · 3 referrals made" },
      { key: "Next radar", val: "Hakuba Mori A · Q2 2027" },
    ],
  },
];

export function Frame26_AgentMemory() {
  const { prev, next } = useNav();

  return (
    <div className="flex h-full flex-col bg-[var(--color-paper,#f5f0e8)]">
      <StatusBar />

      <div className="flex flex-1 flex-col overflow-hidden px-[14px] pb-[18px] pt-[12px]">
        {/* nav */}
        <div className="mb-[10px] flex items-center justify-between">
          <span
            className="text-[10px] font-medium"
            style={{ color: "var(--color-rust,#0f6e56)" }}
          >
            ← Owner portal
          </span>
          <span
            className="rounded-[20px] px-[8px] py-[3px] text-[9px] font-medium uppercase tracking-[0.08em]"
            style={{
              background: "rgba(15,110,86,0.12)",
              color: "#085041",
              letterSpacing: "0.08em",
            }}
          >
            Agent memory
          </span>
        </div>

        {/* title */}
        <div
          className="mb-[2px] text-[15px] font-light leading-[1.2]"
          style={{
            fontFamily: "var(--font-display,'Fraunces',serif)",
            color: "var(--color-ink,#0e0e0c)",
          }}
        >
          What your agent knows
        </div>
        <div
          className="mb-[12px] text-[11px] leading-[1.4]"
          style={{ color: "var(--color-muted,#7a7870)" }}
        >
          Stored once. Used across every project, every decision.
        </div>

        {/* memory sections */}
        <div className="flex flex-1 flex-col gap-[8px] overflow-hidden">
          {MEMORY_SECTIONS.map((section) => (
            <div
              key={section.label}
              className="rounded-[10px] px-[10px] py-[8px]"
              style={{
                background: section.colorLight,
                border: `0.5px solid ${section.color}30`,
              }}
            >
              {/* section header */}
              <div className="mb-[6px] flex items-center gap-[5px]">
                <span
                  className="text-[9px] font-medium"
                  style={{ color: section.color }}
                >
                  {section.icon}
                </span>
                <span
                  className="text-[9px] font-medium uppercase tracking-[0.1em]"
                  style={{ color: section.color }}
                >
                  {section.label}
                </span>
              </div>

              {/* items */}
              <div className="flex flex-col gap-[3px]">
                {section.items.map((item) => (
                  <div key={item.key} className="flex items-baseline justify-between">
                    <span
                      className="text-[10px]"
                      style={{ color: "var(--color-muted,#7a7870)" }}
                    >
                      {item.key}
                    </span>
                    <span
                      className="text-[10px] font-medium"
                      style={{ color: "var(--color-ink2,#2c2b28)" }}
                    >
                      {item.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* bottom note */}
        <div
          className="mt-[8px] rounded-[8px] px-[10px] py-[7px] text-[10px] leading-[1.4]"
          style={{
            background: "rgba(14,14,12,0.04)",
            color: "var(--color-muted,#7a7870)",
          }}
        >
          🔒 Your data stays with re:Fourma. Never sold. Carried to your next project automatically.
        </div>
      </div>

      {/* home indicator */}
      <div className="flex flex-shrink-0 items-center justify-center" style={{ height: 20 }}>
        <div
          style={{
            width: 80, height: 3, borderRadius: 2,
            background: "rgba(14,14,12,0.18)",
          }}
        />
      </div>
    </div>
  );
}
