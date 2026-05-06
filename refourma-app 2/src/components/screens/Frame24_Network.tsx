"use client";

import { useState } from "react";
import { StatusBar } from "@/components/phone/PhoneFrame";

type Pin = {
  id: string;
  name: string;
  region: string;
  category: "Snow" | "Water" | "Wild";
  active?: boolean;
  top: string;
  left: string;
};

const PINS: Pin[] = [
  { id: "n-04", name: "N-04 Pagano", region: "NISEKO · ACTIVE", category: "Snow", active: true, top: "38%", left: "32%" },
  { id: "n-07", name: "N-07 Mori", region: "HAKUBA", category: "Snow", top: "20%", left: "55%" },
  { id: "w-05", name: "W-05 Larch", region: "REVELSTOKE", category: "Snow", top: "60%", left: "20%" },
  { id: "w-02", name: "W-02 Cala", region: "MALLORCA", category: "Water", top: "72%", left: "58%" },
];

type Filter = "All" | "Snow" | "Water" | "Wild";

export function Frame24_Network() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = filter === "All" ? PINS : PINS.filter((p) => p.category === filter);

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
          <span>← RE:FOURMA</span>
          <span>NETWORK · 12 PLACES</span>
        </div>

        <div
          className="mb-[8px] text-[8.5px] uppercase tracking-[0.16em]"
          style={{
            fontFamily: "var(--font-mono)",
            color: "rgba(244,239,230,0.6)",
          }}
        >
          Better places · Better spaces
        </div>

        <h1
          className="mb-[14px] text-[18px] font-light leading-[1.05] tracking-[-0.025em]"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-bone)" }}
        >
          Snow homes.{" "}
          <em
            className="text-[var(--color-gold)]"
            style={{ fontStyle: "italic" }}
          >
            Water homes.
          </em>
        </h1>

        {/* Filter chips */}
        <div className="mb-[10px] flex flex-wrap gap-[4px]">
          {(["All", "Snow", "Water", "Wild"] as Filter[]).map((f) => (
            <FilterChip
              key={f}
              active={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
            </FilterChip>
          ))}
        </div>

        {/* Map area */}
        <div
          className="relative mb-[12px] flex-1 overflow-hidden rounded-[10px]"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(244,239,230,0.04) 0%, transparent 50%), rgba(244,239,230,0.03)",
          }}
        >
          {/* Topo lines for atmosphere */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 200px 120px at 30% 50%, transparent 30%, rgba(244,239,230,0.15) 30.5%, rgba(244,239,230,0.15) 31%, transparent 31.5%), radial-gradient(ellipse 280px 160px at 30% 50%, transparent 40%, rgba(244,239,230,0.1) 40.5%, rgba(244,239,230,0.1) 41%, transparent 41.5%)",
            }}
          />

          {/* Pins */}
          {visible.map((pin) => (
            <MapPin key={pin.id} pin={pin} />
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => {}}
          className="flex items-center justify-between rounded-[12px] bg-[var(--color-ivory-warm)] px-[16px] py-[13px] text-[12.5px] font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-ivory)]"
        >
          <span>Open Mori, Hakuba</span>
          <span className="text-[16px] font-light" style={{ fontFamily: "var(--font-display)" }}>
            →
          </span>
        </button>
      </div>
    </>
  );
}

function FilterChip({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-[9px] py-[4px] text-[8px] tracking-[0.06em] transition-colors ${
        active
          ? "border-[var(--color-bone)] bg-[var(--color-bone)] text-[var(--color-ink)]"
          : "border-[rgba(244,239,230,0.3)] text-[rgba(244,239,230,0.85)]"
      }`}
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {children}
    </button>
  );
}

function MapPin({ pin }: { pin: Pin }) {
  return (
    <div
      className="absolute"
      style={{ top: pin.top, left: pin.left, transform: "translate(-50%, -50%)" }}
    >
      <span
        className={`block h-[8px] w-[8px] rounded-full ${
          pin.active ? "bg-[var(--color-rust)]" : "bg-[var(--color-bone)]"
        }`}
        style={{
          boxShadow: pin.active
            ? "0 0 0 4px rgba(184,69,31,0.3)"
            : "0 0 0 3px rgba(244,239,230,0.2)",
          animation: pin.active ? "pulse-dot 2s ease-in-out infinite" : undefined,
        }}
      />
      <div
        className="absolute left-[14px] top-[-2px] whitespace-nowrap text-[var(--color-bone)]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        <div className="text-[9.5px] font-medium leading-[1.2]">{pin.name}</div>
        <div
          className="text-[7px] tracking-[0.08em]"
          style={{
            fontFamily: "var(--font-mono)",
            color: "rgba(244,239,230,0.55)",
          }}
        >
          {pin.region}
        </div>
      </div>
    </div>
  );
}
