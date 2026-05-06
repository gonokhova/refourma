"use client";

import { StatusBar } from "@/components/phone/PhoneFrame";
import { Canvas, NavRow, Eyebrow } from "@/components/phone/Atoms";
import { useNav } from "@/lib/nav";
import { OWNER } from "@/data/projects";

const HERO_IMAGE = "/images/exterior-night.jpg";

export function Frame21_Portal() {
  const { goTo } = useNav();

  return (
    <>
      <StatusBar />
      <Canvas>
        <NavRow back="" meta={`OWNER · TIER ${OWNER.tier}`} />

        <Eyebrow>Welcome back</Eyebrow>
        <h1
          className="mb-[14px] text-[20px] font-light leading-[1.05] tracking-[-0.025em] text-[var(--color-ink)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {OWNER.name}. <em style={{ fontStyle: "italic" }}>{OWNER.role}.</em>
        </h1>

        {/* Owner stats — 3 tiles */}
        <div className="mb-[14px] grid grid-cols-3 gap-[4px]">
          <StatTile label="Owns" value={OWNER.ownsCount} />
          <StatTile label="Referrals" value={OWNER.referralsCount} />
          <StatTile label="Tier" value={OWNER.tier} />
        </div>

        {/* Current project tile */}
        <button
          onClick={() => goTo(13)}
          className="mb-[10px] block w-full overflow-hidden rounded-[12px] border border-[var(--color-line-soft)] bg-white p-[10px] text-left transition-shadow hover:shadow-md"
        >
          <div
            className="mb-[8px] h-[60px] w-full rounded-[6px]"
            style={{
              backgroundImage: `url(${HERO_IMAGE})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            className="text-[12px] font-medium text-[var(--color-ink)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            N-04 Pagano
          </div>
          <div
            className="mt-[1px] text-[8px] tracking-[0.04em] text-[var(--color-muted-strong)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            68% built · Q4 '27 · Pine
          </div>
        </button>

        {/* Invite CTA */}
        <button
          onClick={() => goTo(22)}
          className="mb-[8px] flex items-center gap-[10px] rounded-[10px] bg-[var(--color-ivory-warm)] px-[12px] py-[10px] text-left transition-colors hover:bg-[var(--color-ivory)]"
        >
          <span className="flex h-[28px] w-[28px] flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-ink)] text-[14px] italic text-[var(--color-bone)]" style={{ fontFamily: "var(--font-display)" }}>
            +
          </span>
          <div className="flex-1 min-w-0">
            <div
              className="text-[11px] font-medium leading-[1.1] text-[var(--color-ink)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Introduce a friend
            </div>
            <div className="mt-[1px] text-[9px] text-[var(--color-ink-mid)]">
              3 invites · perks unlock on join
            </div>
          </div>
          <span
            className="text-[14px] text-[var(--color-ink)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            →
          </span>
        </button>

        {/* Network glance */}
        <button
          onClick={() => goTo(24)}
          className="mt-auto flex items-center justify-between rounded-[12px] border border-[var(--color-line)] bg-transparent px-[16px] py-[12px] text-[11.5px] text-[var(--color-ink)] transition-colors hover:bg-[var(--color-paper-2)]"
        >
          <span>Browse network · 12 places</span>
          <span style={{ fontFamily: "var(--font-display)" }}>→</span>
        </button>
      </Canvas>
    </>
  );
}

function StatTile({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-[8px] bg-[var(--color-paper-2)] px-[6px] py-[10px] text-center">
      <div
        className="text-[7px] uppercase tracking-[0.1em] text-[var(--color-muted-strong)]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {label}
      </div>
      <div
        className="mt-[3px] text-[18px] font-medium leading-none text-[var(--color-ink)]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {value}
      </div>
    </div>
  );
}
