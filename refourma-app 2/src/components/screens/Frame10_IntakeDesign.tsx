"use client";

import { useState } from "react";
import { StatusBar } from "@/components/phone/PhoneFrame";
import { Canvas, NavRow, Eyebrow, Title, CTA } from "@/components/phone/Atoms";

const STYLE_TAGS = [
  "Quiet",
  "Warm",
  "Minimal",
  "Cedar",
  "Stone",
  "Linen",
  "Light woods",
  "Dark woods",
  "Clean lines",
  "Layered",
];

const MUST_HAVES = [
  { id: "onsen", icon: "♨", label: "Onsen" },
  { id: "ski", icon: "⛷", label: "Ski room" },
  { id: "cinema", icon: "◐", label: "Cinema" },
  { id: "wine", icon: "△", label: "Wine cellar" },
  { id: "studio", icon: "◇", label: "Studio" },
  { id: "tatami", icon: "▢", label: "Tatami" },
  { id: "library", icon: "≡", label: "Library" },
  { id: "sauna", icon: "○", label: "Sauna" },
];

const AVOIDS = [
  "Open kitchen",
  "Marble",
  "Glossy finishes",
  "White walls",
  "Designer-bright",
];

export function Frame10_IntakeDesign() {
  const [weeks, setWeeks] = useState<number>(4);
  const [family, setFamily] = useState<number>(5);
  const [styleTags, setStyleTags] = useState<Set<string>>(new Set(["Quiet", "Warm", "Cedar"]));
  const [mustHaves, setMustHaves] = useState<Set<string>>(new Set(["onsen", "ski"]));
  const [avoids, setAvoids] = useState<Set<string>>(new Set(["Open kitchen", "Marble"]));
  const [voiceCount, setVoiceCount] = useState<number>(0);

  const toggleStyle = (tag: string) => {
    const next = new Set(styleTags);
    next.has(tag) ? next.delete(tag) : next.add(tag);
    setStyleTags(next);
  };
  const toggleMustHave = (id: string) => {
    const next = new Set(mustHaves);
    next.has(id) ? next.delete(id) : next.add(id);
    setMustHaves(next);
  };
  const toggleAvoid = (tag: string) => {
    const next = new Set(avoids);
    next.has(tag) ? next.delete(tag) : next.add(tag);
    setAvoids(next);
  };

  return (
    <>
      <StatusBar />
      <Canvas>
        <NavRow back="←  N-04" meta="INTAKE · AI" />

        <Eyebrow>Your taste · Your rhythm</Eyebrow>
        <Title size="sm">
          Tell us <em style={{ fontStyle: "italic" }}>how you live.</em>
        </Title>

        {/* Scrollable interactive area */}
        <div className="mb-[10px] flex flex-1 flex-col gap-[10px] overflow-y-auto pr-[4px]">
          {/* USE — weeks + family */}
          <Section label="Use">
            <div className="mb-[8px] flex items-baseline justify-between">
              <span
                className="text-[10px] text-[var(--color-ink-mid)]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Weeks per year
              </span>
              <span
                className="text-[14px] font-medium text-[var(--color-ink)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {weeks}
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={12}
              value={weeks}
              onChange={(e) => setWeeks(Number(e.target.value))}
              className="mb-[10px] w-full accent-[var(--color-rust)]"
              style={{ height: "4px" }}
            />

            <div className="flex items-center justify-between">
              <span
                className="text-[10px] text-[var(--color-ink-mid)]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Family
              </span>
              <div className="flex items-center gap-[6px]">
                <Counter
                  onClick={() => setFamily(Math.max(1, family - 1))}
                  disabled={family <= 1}
                >
                  −
                </Counter>
                <span
                  className="min-w-[24px] text-center text-[14px] font-medium text-[var(--color-ink)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {family}
                </span>
                <Counter
                  onClick={() => setFamily(Math.min(12, family + 1))}
                  disabled={family >= 12}
                >
                  +
                </Counter>
              </div>
            </div>
          </Section>

          {/* STYLE — multi-select pills */}
          <Section label={`Style · ${styleTags.size} selected`}>
            <div className="flex flex-wrap gap-[4px]">
              {STYLE_TAGS.map((tag) => (
                <Pill
                  key={tag}
                  active={styleTags.has(tag)}
                  onClick={() => toggleStyle(tag)}
                >
                  {tag}
                </Pill>
              ))}
            </div>
          </Section>

          {/* MUST-HAVES — icon grid */}
          <Section label={`Must-have · ${mustHaves.size} selected`}>
            <div className="grid grid-cols-4 gap-[4px]">
              {MUST_HAVES.map((m) => (
                <FeatureTile
                  key={m.id}
                  icon={m.icon}
                  label={m.label}
                  active={mustHaves.has(m.id)}
                  onClick={() => toggleMustHave(m.id)}
                />
              ))}
            </div>
          </Section>

          {/* AVOID — pills (negative tone) */}
          <Section label={`Avoid · ${avoids.size} selected`}>
            <div className="flex flex-wrap gap-[4px]">
              {AVOIDS.map((tag) => (
                <Pill
                  key={tag}
                  active={avoids.has(tag)}
                  onClick={() => toggleAvoid(tag)}
                  variant="avoid"
                >
                  {tag}
                </Pill>
              ))}
            </div>
          </Section>

          {/* VOICE NOTES */}
          <Section label="Voice notes">
            <div className="flex items-center gap-[10px]">
              <button
                onClick={() => setVoiceCount(voiceCount + 1)}
                className="flex h-[36px] w-[36px] flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-rust)] text-[16px] text-[var(--color-bone)] transition-transform active:scale-95"
              >
                ●
              </button>
              <div className="flex-1">
                <div
                  className="text-[10px] text-[var(--color-ink-mid)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {voiceCount === 0
                    ? "Tap to record"
                    : `${voiceCount} recording${voiceCount === 1 ? "" : "s"}`}
                </div>
                {voiceCount > 0 && (
                  <div
                    className="text-[8px] text-[var(--color-muted-strong)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Last: 0:34
                  </div>
                )}
              </div>
            </div>
          </Section>

          {/* Live summary */}
          <div className="rounded-[10px] bg-[var(--color-ink)] px-[12px] py-[10px] text-[var(--color-bone)]">
            <div
              className="mb-[4px] text-[7.5px] uppercase tracking-[0.14em]"
              style={{
                fontFamily: "var(--font-mono)",
                color: "rgba(244,239,230,0.55)",
              }}
            >
              ◆ Your brief
            </div>
            <p
              className="text-[10.5px] leading-[1.5] italic"
              style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
            >
              {weeks}wk/yr · family of {family}
              {styleTags.size > 0 && (
                <>
                  . {Array.from(styleTags).join(", ").toLowerCase()}
                </>
              )}
              {mustHaves.size > 0 && (
                <>
                  . With{" "}
                  {Array.from(mustHaves)
                    .map((id) => MUST_HAVES.find((m) => m.id === id)!.label.toLowerCase())
                    .join(", ")}
                </>
              )}
              {avoids.size > 0 && (
                <>
                  . No{" "}
                  {Array.from(avoids)
                    .map((a) => a.toLowerCase())
                    .join(", ")}
                </>
              )}
              .
            </p>
          </div>
        </div>

        <CTA>Generate scenarios</CTA>
      </Canvas>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[10px] border border-[var(--color-line-soft)] bg-white px-[11px] py-[10px]">
      <div
        className="mb-[8px] text-[7.5px] uppercase tracking-[0.1em] text-[var(--color-muted-strong)]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {label}
      </div>
      {children}
    </div>
  );
}

function Pill({
  children,
  active,
  onClick,
  variant = "default",
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  variant?: "default" | "avoid";
}) {
  const activeClass =
    variant === "avoid"
      ? "bg-[var(--color-rust)] text-[var(--color-bone)] border-[var(--color-rust)]"
      : "bg-[var(--color-ink)] text-[var(--color-bone)] border-[var(--color-ink)]";

  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-[9px] py-[4px] text-[10px] transition-colors ${
        active
          ? activeClass
          : "border-[var(--color-line)] bg-transparent text-[var(--color-ink)] hover:border-[var(--color-ink)]"
      }`}
    >
      {children}
    </button>
  );
}

function FeatureTile({
  icon,
  label,
  active,
  onClick,
}: {
  icon: string;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex aspect-square flex-col items-center justify-center gap-[3px] rounded-[8px] border transition-all ${
        active
          ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-bone)]"
          : "border-[var(--color-line-soft)] bg-[var(--color-paper-2)] text-[var(--color-ink-mid)] hover:border-[var(--color-ink)]"
      }`}
    >
      <span
        className="text-[14px] leading-none"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {icon}
      </span>
      <span
        className="text-[7.5px] leading-[1.05]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {label}
      </span>
    </button>
  );
}

function Counter({
  onClick,
  disabled,
  children,
}: {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex h-[24px] w-[24px] items-center justify-center rounded-full border border-[var(--color-line)] text-[12px] text-[var(--color-ink)] transition-colors hover:bg-[var(--color-paper-2)] disabled:opacity-30"
    >
      {children}
    </button>
  );
}
