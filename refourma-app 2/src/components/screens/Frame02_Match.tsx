"use client";

import { StatusBar } from "@/components/phone/PhoneFrame";
import { Canvas, NavRow } from "@/components/phone/Atoms";
import { useNav } from "@/lib/nav";
import { PROJECTS } from "@/data/projects";

const HERO_IMAGE = "/images/exterior-night.jpg";

export function Frame02_Match() {
  const { next } = useNav();

  // Pagano (top) + Mori + Larch
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
          className="mb-[14px] text-[17px] font-normal leading-[1.25] tracking-[-0.01em] text-[var(--color-ink)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          3 places match. <em className="text-[var(--color-rust)]">One is exceptional.</em>
        </h2>

        {/* AI message bubble */}
        <div
          className="mb-[12px] rounded-[0_10px_10px_10px] border-l-2 border-[var(--color-rust)] bg-[var(--color-paper-2)] px-[12px] py-[10px] text-[11px] leading-[1.45] text-[var(--color-ink)]"
        >
          I prioritised <b className="font-semibold">ski-out</b> and <b className="font-semibold">fraction-ready</b>.
          Pagano in Niseko is the strongest fit — last fraction, your timeline, family of five sleeps comfortably.
          Two alternates kept honest.
        </div>

        {/* Result list */}
        <div className="flex flex-col gap-[8px]">
          <ResultCard
            project={pagano}
            badge="TOP"
            highlight="1 left"
            onClick={next}
            useImage
          />
          <ResultCard project={mori} />
          <ResultCard project={larch} />
        </div>

        {/* Quick action chips */}
        <div className="mt-[10px] flex flex-wrap gap-[5px]">
          <ActionChip>Compare top 2</ActionChip>
          <ActionChip>Show map</ActionChip>
        </div>

        <div className="mt-auto" />
      </Canvas>
    </>
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

  const Cmp: React.ElementType = onClick ? "button" : "div";

  return (
    <Cmp
      onClick={onClick}
      className={`flex items-center gap-[10px] rounded-[10px] border border-[var(--color-line-soft)] bg-white p-[8px] text-left ${
        onClick ? "transition-shadow hover:shadow-md cursor-pointer w-full" : ""
      }`}
    >
      <div
        className="relative h-[52px] w-[52px] flex-shrink-0 overflow-hidden rounded-[7px]"
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
          className="mb-[2px] text-[7.5px] uppercase tracking-[0.1em] text-[var(--color-muted-strong)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {project.region.split(",")[0]} · {project.area}
        </div>
        <div
          className="mb-[2px] truncate text-[11px] font-medium leading-[1.2] text-[var(--color-ink)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {project.code} {project.name}
        </div>
        <div className="text-[9px] text-[var(--color-ink-mid)]">
          From {project.priceFrom} · {project.fractionsTotal} fractions
          {highlight && (
            <>
              {" · "}
              <b className="font-semibold text-[var(--color-rust)]">{highlight}</b>
            </>
          )}
        </div>
      </div>
    </Cmp>
  );
}

function ActionChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-[var(--color-ivory-warm)] px-[9px] py-[5px] text-[9.5px] text-[var(--color-ink)]">
      {children}
    </span>
  );
}
