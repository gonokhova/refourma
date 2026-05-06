"use client";

import { StatusBar } from "@/components/phone/PhoneFrame";
import { Canvas, NavRow } from "@/components/phone/Atoms";
import { useNav } from "@/lib/nav";
import { PROJECTS } from "@/data/projects";

const HERO_IMAGE = "/images/exterior-night.jpg";

// Pin positions for the 3 properties on the map (visual only)
const PIN_POSITIONS: Record<string, { top: string; left: string }> = {
  "n-04": { top: "42%", left: "60%" },   // Niseko (Japan, top right of Asia)
  "n-07": { top: "38%", left: "53%" },   // Hakuba (also Japan, slightly left)
  "w-05": { top: "30%", left: "20%" },   // Revelstoke (Canada)
};

export function Frame02_Match() {
  const { goTo } = useNav();

  const pagano = PROJECTS.find((p) => p.id === "n-04")!;
  const mori = PROJECTS.find((p) => p.id === "n-07")!;
  const larch = PROJECTS.find((p) => p.id === "w-05")!;

  return (
    <>
      <StatusBar />
      <Canvas>
        <NavRow back="←  AGENT" meta="3 MATCHES · 12s" />

        <div
          className="mb-[6px] text-[8.5px] uppercase tracking-[0.14em] text-[var(--color-rust)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          ◆ Buyer&apos;s Analyst · for Anastasia
        </div>
        <h2
          className="mb-[10px] text-[16px] font-normal leading-[1.25] tracking-[-0.01em] text-[var(--color-ink)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          3 places match. <em className="text-[var(--color-rust)]">One is exceptional.</em>
        </h2>

        {/* Mini world map with pins */}
        <MiniMap />

        {/* AI message — shorter for space */}
        <div
          className="mb-[8px] rounded-[0_8px_8px_8px] border-l-2 border-[var(--color-rust)] bg-[var(--color-paper-2)] px-[10px] py-[8px] text-[10px] leading-[1.4] text-[var(--color-ink)]"
        >
          Pagano in Niseko is the strongest fit — last fraction, ski-out, family of five.
        </div>

        {/* Result cards */}
        <div className="mb-[8px] flex flex-col gap-[6px]">
          <ResultCard
            project={pagano}
            badge="TOP"
            highlight="1 left"
            onClick={() => goTo(3)}
            useImage
          />
          <ResultCard project={mori} onClick={() => goTo(3)} />
          <ResultCard project={larch} onClick={() => goTo(3)} />
        </div>

        {/* Action chips — Compare actually works now */}
        <div className="mt-auto flex gap-[5px]">
          <button
            onClick={() => goTo(4)}
            className="flex-1 rounded-full bg-[var(--color-ink)] px-[10px] py-[7px] text-[10px] font-medium text-[var(--color-bone)] transition-colors hover:bg-[var(--color-rust)]"
          >
            Compare all 3 →
          </button>
          <button
            className="rounded-full bg-[var(--color-ivory-warm)] px-[10px] py-[7px] text-[10px] text-[var(--color-ink)]"
          >
            Filter
          </button>
        </div>
      </Canvas>
    </>
  );
}

function MiniMap() {
  return (
    <div
      className="relative mb-[8px] h-[100px] overflow-hidden rounded-[10px]"
      style={{
        background:
          "radial-gradient(ellipse at 30% 50%, rgba(244,239,230,0.04) 0%, transparent 50%), linear-gradient(135deg, #2d3a2e 0%, #1a2218 100%)",
      }}
    >
      {/* Topo lines */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 200px 120px at 30% 50%, transparent 30%, rgba(244,239,230,0.15) 30.5%, rgba(244,239,230,0.15) 31%, transparent 31.5%), radial-gradient(ellipse 280px 160px at 30% 50%, transparent 40%, rgba(244,239,230,0.1) 40.5%, rgba(244,239,230,0.1) 41%, transparent 41.5%)",
        }}
      />

      {/* Pin: Pagano (TOP — pulsing rust) */}
      <MapPin
        top={PIN_POSITIONS["n-04"].top}
        left={PIN_POSITIONS["n-04"].left}
        active
        label="Pagano"
        sub="NISEKO"
      />
      {/* Pin: Mori */}
      <MapPin
        top={PIN_POSITIONS["n-07"].top}
        left={PIN_POSITIONS["n-07"].left}
        label="Mori"
        sub="HAKUBA"
      />
      {/* Pin: Larch */}
      <MapPin
        top={PIN_POSITIONS["w-05"].top}
        left={PIN_POSITIONS["w-05"].left}
        label="Larch"
        sub="REVELSTOKE"
      />

      {/* Map label corner */}
      <div
        className="absolute right-[8px] top-[8px] rounded bg-black/40 px-[6px] py-[2px] text-[7px] tracking-[0.1em] backdrop-blur-sm"
        style={{
          fontFamily: "var(--font-mono)",
          color: "rgba(244,239,230,0.7)",
        }}
      >
        3 / 12 PLACES
      </div>
    </div>
  );
}

function MapPin({
  top,
  left,
  active,
  label,
  sub,
}: {
  top: string;
  left: string;
  active?: boolean;
  label: string;
  sub: string;
}) {
  return (
    <div
      className="absolute"
      style={{ top, left, transform: "translate(-50%, -50%)" }}
    >
      <span
        className={`block h-[7px] w-[7px] rounded-full ${
          active ? "bg-[var(--color-rust)]" : "bg-[var(--color-bone)]"
        }`}
        style={{
          boxShadow: active
            ? "0 0 0 4px rgba(184,69,31,0.3)"
            : "0 0 0 3px rgba(244,239,230,0.2)",
          animation: active ? "pulse-dot 2s ease-in-out infinite" : undefined,
        }}
      />
      <div
        className="absolute left-[10px] top-[-3px] whitespace-nowrap"
        style={{ fontFamily: "var(--font-display)" }}
      >
        <div
          className="text-[8px] font-medium leading-[1.2]"
          style={{ color: "var(--color-bone)" }}
        >
          {label}
        </div>
        <div
          className="text-[6px] tracking-[0.08em]"
          style={{
            fontFamily: "var(--font-mono)",
            color: "rgba(244,239,230,0.5)",
          }}
        >
          {sub}
        </div>
      </div>
    </div>
  );
}

function ResultCard({
  project,
  badge,
  highlight,
  onClick,
  useImage,
}: {
  project: (typeof PROJECTS)[number];
  badge?: string;
  highlight?: string;
  onClick?: () => void;
  useImage?: boolean;
}) {
  const imgBg = useImage
    ? { backgroundImage: `url(${HERO_IMAGE})`, backgroundSize: "cover", backgroundPosition: "center" }
    : {
        background:
          project.code.startsWith("N")
            ? "linear-gradient(135deg, #4a5d4d 0%, #2d3a2e 100%)"
            : "linear-gradient(135deg, #6b7c8a 0%, #3d4954 100%)",
      };

  return (
    <button
      onClick={onClick}
      className="flex w-full cursor-pointer items-center gap-[10px] rounded-[10px] border border-[var(--color-line-soft)] bg-white p-[8px] text-left transition-shadow hover:shadow-md"
    >
      <div
        className="relative h-[44px] w-[44px] flex-shrink-0 overflow-hidden rounded-[7px]"
        style={imgBg}
      >
        {badge && (
          <span
            className="absolute left-[3px] top-[3px] rounded-[3px] bg-[var(--color-rust)] px-[4px] py-[1px] text-[6.5px] tracking-[0.04em] text-white"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {badge}
          </span>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div
          className="mb-[1px] text-[7px] uppercase tracking-[0.1em] text-[var(--color-muted-strong)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {project.region.split(",")[0]} · {project.area}
        </div>
        <div
          className="mb-[1px] truncate text-[10.5px] font-medium leading-[1.2] text-[var(--color-ink)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {project.code} {project.name}
        </div>
        <div className="text-[8.5px] text-[var(--color-ink-mid)]">
          From {project.priceFrom} · {project.fractionsTotal} fractions
          {highlight && (
            <>
              {" · "}
              <b className="font-semibold text-[var(--color-rust)]">{highlight}</b>
            </>
          )}
        </div>
      </div>
      <span
        className="text-[12px] text-[var(--color-muted-strong)]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        →
      </span>
    </button>
  );
}
