"use client";

import { StatusBar } from "@/components/phone/PhoneFrame";
import { Canvas, NavRow, Eyebrow, Title, CTA } from "@/components/phone/Atoms";

type StepStatus = "done" | "now" | "todo";

const STEPS = [
  {
    label: "Email & phone",
    detail: "Verified · Anastasia / +33•••",
    status: "done" as StepStatus,
  },
  {
    label: "Government ID",
    detail: "Passport scan + selfie liveness",
    status: "now" as StepStatus,
  },
  {
    label: "Proof of address",
    detail: "Utility or bank statement, < 3 months",
    status: "todo" as StepStatus,
  },
  {
    label: "Source of funds",
    detail: "Bank reference or accountant letter",
    status: "todo" as StepStatus,
  },
];

export function Frame07_KYC() {
  return (
    <>
      <StatusBar />
      <Canvas>
        <NavRow back="←  ONBOARDING" meta="STEP 2 / 5" />

        {/* Progress dots */}
        <div className="mb-[14px] flex gap-[5px]">
          <ProgressBar status="done" />
          <ProgressBar status="now" />
          <ProgressBar status="todo" />
          <ProgressBar status="todo" />
          <ProgressBar status="todo" />
        </div>

        <Eyebrow>Identity · Source of funds</Eyebrow>
        <Title size="sm">
          Verify, <em style={{ fontStyle: "italic" }}>once.</em>
        </Title>

        {/* Steps */}
        <div className="mb-[14px] flex flex-col gap-[7px]">
          {STEPS.map((step, idx) => (
            <Step key={idx} index={idx + 1} {...step} />
          ))}
        </div>

        {/* Secure bar */}
        <div className="mb-[12px] flex items-center gap-[8px] rounded-[8px] bg-[var(--color-paper-2)] px-[10px] py-[8px] text-[9px] leading-[1.4] text-[var(--color-ink-mid)]">
          <span className="text-[12px]">⌂</span>
          <span>Bank-grade · stored once, reused everywhere.</span>
        </div>

        <CTA>Continue verification</CTA>
      </Canvas>
    </>
  );
}

function ProgressBar({ status }: { status: StepStatus }) {
  const bg =
    status === "done"
      ? "bg-[var(--color-ink)]"
      : status === "now"
        ? "bg-[var(--color-rust)]"
        : "bg-[var(--color-line)]";
  return <span className={`h-[3px] flex-1 rounded-[2px] ${bg}`} />;
}

function Step({
  index,
  label,
  detail,
  status,
}: {
  index: number;
  label: string;
  detail: string;
  status: StepStatus;
}) {
  const containerClass =
    status === "done"
      ? "bg-[var(--color-paper-2)] border-transparent"
      : status === "now"
        ? "bg-white border-[var(--color-ink)] shadow-md"
        : "bg-white border-[var(--color-line-soft)]";

  const indClass =
    status === "done"
      ? "bg-[var(--color-ink)] text-[var(--color-bone)]"
      : status === "now"
        ? "bg-[var(--color-rust)] text-[var(--color-bone)]"
        : "bg-[var(--color-paper-2)] text-[var(--color-muted-strong)]";

  return (
    <div className={`flex items-center gap-[10px] rounded-[10px] border px-[10px] py-[9px] ${containerClass}`}>
      <span
        className={`flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center rounded-full text-[9px] font-semibold ${indClass}`}
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {status === "done" ? "✓" : index}
      </span>
      <div className="flex-1 min-w-0">
        <div
          className="text-[11px] font-medium leading-[1.2] text-[var(--color-ink)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {label}
        </div>
        <div className="mt-[1px] text-[9px] text-[var(--color-ink-mid)]">{detail}</div>
      </div>
    </div>
  );
}
