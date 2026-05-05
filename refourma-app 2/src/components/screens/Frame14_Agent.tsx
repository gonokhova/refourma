"use client";

import { StatusBar } from "@/components/phone/PhoneFrame";

const HERO_IMAGE = "/images/exterior-night.jpg";

const NOTIFICATIONS = [
  {
    when: "2m ago",
    body: (
      <>
        Cedar shipment delayed 11 days. <b className="font-medium text-[var(--color-bone)]">Your decision needed</b> — alternative source approved.
      </>
    ),
  },
  {
    when: "1h ago",
    body: (
      <>
        Group vote closing: <b className="font-medium text-[var(--color-bone)]">onsen finish</b>. Sofia voted outdoor.
      </>
    ),
  },
  {
    when: "Yesterday",
    body: <>Weekly summary · build on track · €0 over budget · 1 vote pending.</>,
  },
];

export function Frame14_Agent() {
  return (
    <div
      className="flex h-full flex-col"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 100%), url(${HERO_IMAGE})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <StatusBar dark />

      <div className="flex flex-1 flex-col px-[14px] pb-[28px] pt-[40px]">
        {/* Time */}
        <div
          className="mb-[2px] text-center text-[56px] font-light leading-[0.9] tracking-[-0.03em]"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-bone)",
          }}
        >
          9:41
        </div>
        <div
          className="mb-[14px] text-center text-[9px] uppercase tracking-[0.14em]"
          style={{
            fontFamily: "var(--font-mono)",
            color: "rgba(244,239,230,0.7)",
          }}
        >
          Tuesday · Nov 18
        </div>

        {/* Notifications */}
        <div className="flex flex-col gap-[8px]">
          {NOTIFICATIONS.map((n, idx) => (
            <Notification key={idx} when={n.when}>
              {n.body}
            </Notification>
          ))}
        </div>
      </div>
    </div>
  );
}

function Notification({
  when,
  children,
}: {
  when: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-[12px] px-[11px] py-[9px] text-[var(--color-bone)] backdrop-blur-md"
      style={{ background: "rgba(244,239,230,0.12)" }}
    >
      <div className="mb-[4px] flex items-center gap-[6px]">
        <span
          className="flex h-[16px] w-[16px] items-center justify-center rounded-[4px] bg-[var(--color-rust)] text-[9px] italic"
          style={{ fontFamily: "var(--font-display)" }}
        >
          A
        </span>
        <span
          className="flex-1 text-[10px] font-medium"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Buyer&apos;s Analyst · re:Fourma
        </span>
        <span
          className="text-[7.5px]"
          style={{
            fontFamily: "var(--font-mono)",
            color: "rgba(244,239,230,0.55)",
          }}
        >
          {when}
        </span>
      </div>
      <div
        className="text-[10px] leading-[1.35]"
        style={{ color: "rgba(244,239,230,0.85)" }}
      >
        {children}
      </div>
    </div>
  );
}
