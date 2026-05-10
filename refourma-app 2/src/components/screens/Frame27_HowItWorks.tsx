"use client";

import { useNav } from "@/lib/nav";
import { StatusBar } from "@/components/phone/PhoneFrame";

const PRODUCTS = [
  {
    name: "Legal Package",
    price: "¥150k / deal",
    steps: [
      { who: "AI", what: "Drafts all 4 documents", icon: "◆" },
      { who: "JP Attorney", what: "Reviews & signs off", icon: "✓" },
      { who: "You", what: "Sign in app", icon: "→" },
    ],
    color: "#0f6e56",
    colorLight: "rgba(15,110,86,0.10)",
  },
  {
    name: "Tax Autopilot",
    price: "¥80k / year",
    steps: [
      { who: "AI", what: "Collects all data from portfolio", icon: "◆" },
      { who: "CPA partner", what: "Reviews & files", icon: "✓" },
      { who: "You", what: "Auto-renews Feb", icon: "↻" },
    ],
    color: "#0f6e56",
    colorLight: "rgba(15,110,86,0.10)",
  },
  {
    name: "Managed Search",
    price: "¥50k retainer",
    steps: [
      { who: "AI", what: "Finds, analyses, negotiates", icon: "◆" },
      { who: "Deal lead", what: "Confirms every decision", icon: "✓" },
      { who: "You", what: "Approve or pass", icon: "→" },
    ],
    color: "#0f6e56",
    colorLight: "rgba(15,110,86,0.10)",
  },
];

export function Frame27_HowItWorks() {
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
            ← Product layer
          </span>
          <span
            className="rounded-[20px] px-[8px] py-[3px] text-[9px] font-medium uppercase tracking-[0.08em]"
            style={{ background: "#e1f5ee", color: "#085041" }}
          >
            Trust stack
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
          How it works
        </div>
        <div
          className="mb-[12px] text-[11px] leading-[1.4]"
          style={{ color: "var(--color-muted,#7a7870)" }}
        >
          AI does the work. A human checks it. You sign off.
        </div>

        {/* legend */}
        <div
          className="mb-[10px] flex items-center gap-[12px] rounded-[8px] px-[10px] py-[7px]"
          style={{ background: "rgba(14,14,12,0.04)" }}
        >
          {[
            { icon: "◆", label: "AI executes", color: "#1a5fa8" },
            { icon: "✓", label: "Human checks", color: "#0f6e56" },
            { icon: "→", label: "You approve", color: "#ba7517" },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-[4px]">
              <span className="text-[10px]" style={{ color: l.color }}>{l.icon}</span>
              <span className="text-[9px]" style={{ color: "var(--color-muted,#7a7870)" }}>{l.label}</span>
            </div>
          ))}
        </div>

        {/* product cards */}
        <div className="flex flex-1 flex-col gap-[7px] overflow-hidden">
          {PRODUCTS.map((p) => (
            <div
              key={p.name}
              className="rounded-[10px] px-[10px] py-[9px]"
              style={{
                background: "white",
                border: "0.5px solid rgba(14,14,12,0.10)",
              }}
            >
              {/* header */}
              <div className="mb-[8px] flex items-center justify-between">
                <span
                  className="text-[11px] font-medium"
                  style={{ color: "var(--color-ink2,#2c2b28)" }}
                >
                  {p.name}
                </span>
                <span
                  className="text-[9px]"
                  style={{
                    fontFamily: "var(--font-mono,'JetBrains Mono',monospace)",
                    color: p.color,
                  }}
                >
                  {p.price}
                </span>
              </div>

              {/* steps */}
              <div className="flex items-stretch gap-0">
                {p.steps.map((step, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center">
                    {/* connector line */}
                    <div className="relative flex w-full items-center justify-center">
                      {i > 0 && (
                        <div
                          className="absolute left-0 top-[50%] w-[50%]"
                          style={{ height: "0.5px", background: "rgba(14,14,12,0.12)" }}
                        />
                      )}
                      {i < p.steps.length - 1 && (
                        <div
                          className="absolute right-0 top-[50%] w-[50%]"
                          style={{ height: "0.5px", background: "rgba(14,14,12,0.12)" }}
                        />
                      )}
                      <div
                        className="relative z-[1] flex h-[22px] w-[22px] items-center justify-center rounded-full text-[10px] font-medium"
                        style={{
                          background: i === 0 ? "#e6f1fb" : i === 1 ? "#e1f5ee" : "#faeeda",
                          color: i === 0 ? "#1a5fa8" : i === 1 ? "#0f6e56" : "#ba7517",
                        }}
                      >
                        {step.icon}
                      </div>
                    </div>
                    {/* label */}
                    <div className="mt-[5px] text-center">
                      <div
                        className="text-[8px] font-medium uppercase tracking-[0.06em]"
                        style={{
                          color: i === 0 ? "#1a5fa8" : i === 1 ? "#0f6e56" : "#ba7517",
                        }}
                      >
                        {step.who}
                      </div>
                      <div
                        className="text-[8px] leading-[1.3]"
                        style={{ color: "var(--color-muted,#7a7870)" }}
                      >
                        {step.what}
                      </div>
                    </div>
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
            background: "#e1f5ee",
            color: "#085041",
          }}
        >
          Every Autopilot product has a licensed human in the loop. AI accelerates — humans stay responsible.
        </div>
      </div>

      {/* home indicator */}
      <div className="flex flex-shrink-0 items-center justify-center" style={{ height: 20 }}>
        <div style={{ width: 80, height: 3, borderRadius: 2, background: "rgba(14,14,12,0.18)" }} />
      </div>
    </div>
  );
}
