"use client";

import { StatusBar } from "@/components/phone/PhoneFrame";
import { useNav } from "@/lib/nav";

export function Frame20_Closed() {
  const { goTo } = useNav();

  return (
    <>
      <StatusBar dark />

      <div className="flex flex-1 flex-col px-[20px] pb-[28px] pt-[18px]">
        <div
          className="mb-[14px] flex items-center justify-between text-[8.5px] uppercase tracking-[0.14em]"
          style={{
            fontFamily: "var(--font-mono)",
            color: "rgba(244,239,230,0.65)",
          }}
        >
          <span>N-04 · CLOSED</span>
          <span>14 DAYS</span>
        </div>

        <div
          className="mb-[8px] text-[8.5px] uppercase tracking-[0.16em]"
          style={{
            fontFamily: "var(--font-mono)",
            color: "rgba(244,239,230,0.6)",
          }}
        >
          Transfer complete
        </div>

        <h1
          className="mb-[14px] text-[34px] font-light leading-[1.02] tracking-[-0.025em]"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-bone)" }}
        >
          +€620k{" "}
          <em
            className="text-[var(--color-gold)]"
            style={{ fontStyle: "italic" }}
          >
            net.
          </em>
        </h1>

        <p
          className="mb-[16px] text-[11px] leading-[1.5]"
          style={{ color: "rgba(244,239,230,0.7)" }}
        >
          Fraction sold to vetted buyer at indicative valuation. Title filed. Funds settling — net of fees, taxes, OpEx reconciliation.
        </p>

        {/* Timeline summary */}
        <div
          className="mb-[14px] rounded-[10px] px-[12px] py-[10px]"
          style={{ background: "rgba(244,239,230,0.06)" }}
        >
          <TimelineRow label="Listed internally" value="Day 1" />
          <TimelineRow label="ROFR window" value="Day 1 – 14" />
          <TimelineRow label="Buyer matched" value="Day 9" />
          <TimelineRow label="Title transferred" value="Day 14" last />
        </div>

        {/* Continuity note */}
        <div
          className="mb-[14px] rounded-[10px] px-[13px] py-[11px]"
          style={{ background: "rgba(244,239,230,0.08)" }}
        >
          <div
            className="mb-[4px] text-[8px] uppercase tracking-[0.12em]"
            style={{
              fontFamily: "var(--font-mono)",
              color: "rgba(244,239,230,0.55)",
            }}
          >
            What carries over
          </div>
          <div
            className="text-[12px] leading-[1.4]"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-bone)" }}
          >
            Your KYC. Your taste profile. Your owner tier.
            <br />
            <em style={{ fontStyle: "italic", color: "rgba(244,239,230,0.7)" }}>
              No re-onboarding.
            </em>
          </div>
        </div>

        {/* Two CTAs */}
        <div className="mt-auto flex flex-col gap-[8px]">
          <button
            onClick={() => goTo(24)}
            className="flex items-center justify-between rounded-[12px] bg-[var(--color-ivory-warm)] px-[16px] py-[13px] text-[12.5px] font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-ivory)]"
          >
            <span>Open re:Fourma map</span>
            <span className="text-[16px] font-light" style={{ fontFamily: "var(--font-display)" }}>
              →
            </span>
          </button>
          <button
            onClick={() => goTo(21)}
            className="flex items-center justify-between rounded-[12px] px-[16px] py-[10px] text-[11.5px]"
            style={{
              background: "transparent",
              color: "rgba(244,239,230,0.7)",
              border: "1px solid rgba(244,239,230,0.2)",
            }}
          >
            <span>Back to portal</span>
            <span style={{ fontFamily: "var(--font-display)" }}>→</span>
          </button>
        </div>
      </div>
    </>
  );
}

function TimelineRow({
  label,
  value,
  last,
}: {
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className={`flex justify-between py-[5px] text-[10px] ${
        last ? "" : "border-b"
      }`}
      style={{
        borderColor: last ? "transparent" : "rgba(244,239,230,0.1)",
      }}
    >
      <span style={{ color: "rgba(244,239,230,0.65)" }}>{label}</span>
      <span
        className="text-[9px] tracking-[0.04em]"
        style={{ fontFamily: "var(--font-mono)", color: "var(--color-bone)" }}
      >
        {value}
      </span>
    </div>
  );
}
