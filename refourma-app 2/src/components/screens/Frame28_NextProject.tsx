"use client";

import { useNav } from "@/lib/nav";
import { StatusBar } from "@/components/phone/PhoneFrame";

const CARRIED = [
  { icon: "✓", label: "KYC verified", sub: "Aug 2024 · Reused instantly" },
  { icon: "✓", label: "Source of funds", sub: "Cleared · No re-upload" },
  { icon: "✓", label: "Decision profile", sub: "8 decisions · Agent trained" },
  { icon: "✓", label: "Owner tier II", sub: "3 referrals · Priority access" },
];

export function Frame28_NextProject() {
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
            ← Network
          </span>
          <span
            className="rounded-[20px] px-[8px] py-[3px] text-[9px] font-medium uppercase tracking-[0.08em]"
            style={{ background: "#e1f5ee", color: "#085041" }}
          >
            New project
          </span>
        </div>

        {/* agent message */}
        <div
          className="mb-[10px] rounded-[10px] px-[10px] py-[9px]"
          style={{
            background: "rgba(15,110,86,0.10)",
            border: "0.5px solid rgba(15,110,86,0.25)",
          }}
        >
          <div className="mb-[4px] flex items-center gap-[5px]">
            <span
              className="flex h-[14px] w-[14px] items-center justify-center rounded-[3px] text-[8px] italic"
              style={{
                background: "var(--color-rust,#b5451b)",
                color: "var(--color-bone,#f5f0e8)",
                fontFamily: "var(--font-display,'Fraunces',serif)",
              }}
            >
              A
            </span>
            <span
              className="text-[9px] font-medium"
              style={{ color: "#0f6e56", fontFamily: "var(--font-display,'Fraunces',serif)" }}
            >
              Buyer&apos;s Analyst
            </span>
            <span
              className="ml-auto text-[8px]"
              style={{
                fontFamily: "var(--font-mono,'JetBrains Mono',monospace)",
                color: "rgba(15,110,86,0.5)",
              }}
            >
              just now
            </span>
          </div>
          <div
            className="text-[11px] leading-[1.45]"
            style={{ color: "#085041" }}
          >
            Hakuba Mori A opens in Q2 2027.{" "}
            <span className="font-medium">Your KYC is ready. Brief carried.</span> You have
            priority access as Tier II owner.
          </div>
        </div>

        {/* next project card */}
        <div
          className="mb-[10px] overflow-hidden rounded-[10px]"
          style={{ border: "0.5px solid rgba(14,14,12,0.10)" }}
        >
          {/* hero placeholder */}
          <div
            className="flex items-end px-[10px] pb-[10px] pt-[40px]"
            style={{
              background:
                "linear-gradient(180deg, #2d3a2e 0%, #1a2218 100%)",
            }}
          >
            <div>
              <div
                className="text-[13px] font-light"
                style={{
                  fontFamily: "var(--font-display,'Fraunces',serif)",
                  color: "var(--color-bone,#f5f0e8)",
                }}
              >
                N-07 Mori A
              </div>
              <div
                className="text-[9px]"
                style={{ color: "rgba(245,240,232,0.6)" }}
              >
                Hakuba · Nagano · Q2 2027
              </div>
            </div>
            <div className="ml-auto">
              <span
                className="rounded-[20px] px-[7px] py-[3px] text-[9px] font-medium"
                style={{ background: "#e1f5ee", color: "#085041" }}
              >
                Presale
              </span>
            </div>
          </div>

          {/* stats */}
          <div
            className="flex divide-x px-0"
            style={{
              background: "white",
              borderTop: "0.5px solid rgba(14,14,12,0.08)",
              divideColor: "rgba(14,14,12,0.08)",
            }}
          >
            {[
              { label: "From", val: "€1.8M" },
              { label: "Yield", val: "5.2%" },
              { label: "Weeks", val: "12 / yr" },
            ].map((s) => (
              <div key={s.label} className="flex flex-1 flex-col items-center py-[8px]">
                <div
                  className="text-[9px]"
                  style={{ color: "var(--color-muted,#7a7870)" }}
                >
                  {s.label}
                </div>
                <div
                  className="text-[12px] font-medium"
                  style={{
                    fontFamily: "var(--font-mono,'JetBrains Mono',monospace)",
                    color: "var(--color-ink2,#2c2b28)",
                  }}
                >
                  {s.val}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* what carries over */}
        <div
          className="mb-[10px] rounded-[10px] px-[10px] py-[9px]"
          style={{
            background: "white",
            border: "0.5px solid rgba(14,14,12,0.10)",
          }}
        >
          <div
            className="mb-[7px] text-[9px] font-medium uppercase tracking-[0.1em]"
            style={{ color: "var(--color-muted,#7a7870)" }}
          >
            What carries over automatically
          </div>
          <div className="flex flex-col gap-[5px]">
            {CARRIED.map((c) => (
              <div key={c.label} className="flex items-baseline gap-[7px]">
                <span className="text-[10px]" style={{ color: "#0f6e56" }}>
                  {c.icon}
                </span>
                <div>
                  <span
                    className="text-[10px] font-medium"
                    style={{ color: "var(--color-ink2,#2c2b28)" }}
                  >
                    {c.label}
                  </span>
                  <span
                    className="ml-[5px] text-[9px]"
                    style={{ color: "var(--color-muted,#7a7870)" }}
                  >
                    {c.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="mt-auto flex flex-shrink-0 items-center justify-between rounded-[10px] px-[12px]"
          style={{
            height: 36,
            background: "#0f6e56",
            color: "#f5f0e8",
            fontSize: 12,
            fontWeight: 500,
          }}
        >
          <span>Request priority access</span>
          <span>→</span>
        </div>
      </div>

      {/* home indicator */}
      <div className="flex flex-shrink-0 items-center justify-center" style={{ height: 20 }}>
        <div style={{ width: 80, height: 3, borderRadius: 2, background: "rgba(14,14,12,0.18)" }} />
      </div>
    </div>
  );
}
