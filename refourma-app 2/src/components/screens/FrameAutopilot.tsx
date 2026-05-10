/**
 * FrameAutopilot.tsx
 * re:Fourma · Product Layer — Copilot & Autopilot
 *
 * Place this file in:
 *   src/components/screens/FrameAutopilot.tsx
 *
 * Then add to FrameRouter.tsx:
 *   case 25: return <FrameAutopilot />;
 *
 * And register in data/projects.ts CHAPTERS if needed.
 */

"use client";

import { useNav } from "@/lib/nav";

/* ─── tiny shared primitives ─────────────────────────── */

function PhoneMock({
  dark = false,
  children,
}: {
  dark?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative flex flex-shrink-0 flex-col overflow-hidden rounded-[38px] border-[6px] border-[#1c1c1a]"
      style={{
        width: 212,
        height: 440,
        background: dark ? "var(--color-ink, #0e0e0c)" : "var(--color-ink, #0e0e0c)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.22), inset 0 0 0 1px rgba(255,255,255,0.05)",
      }}
    >
      {/* notch */}
      <div
        className="absolute left-1/2 top-0 z-10 -translate-x-1/2"
        style={{
          width: 80,
          height: 24,
          background: "#0e0e0c",
          borderRadius: "0 0 16px 16px",
        }}
      />
      {/* screen */}
      <div
        className="flex flex-1 flex-col overflow-hidden"
        style={{ background: dark ? "#0e0e0c" : "#f5f0e8" }}
      >
        {/* status bar */}
        <div
          className="z-[5] flex flex-shrink-0 items-center justify-between px-[14px] pt-[10px]"
          style={{
            height: 32,
            color: dark ? "rgba(255,255,255,0.55)" : "#2c2b28",
            fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
            fontSize: 9,
          }}
        >
          <span>9:41</span>
          <span>●●●● WiFi</span>
        </div>
        {/* canvas */}
        <div className="flex flex-1 flex-col overflow-hidden px-[14px] pb-[18px] pt-[12px]">
          {children}
        </div>
        {/* home indicator */}
        <div className="flex flex-shrink-0 items-center justify-center" style={{ height: 20 }}>
          <div
            style={{
              width: 80,
              height: 3,
              borderRadius: 2,
              background: dark ? "rgba(255,255,255,0.25)" : "rgba(14,14,12,0.18)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function Pill({
  label,
  color = "green",
}: {
  label: string;
  color?: "green" | "blue" | "amber";
}) {
  const styles = {
    green: { background: "#e1f5ee", color: "#085041" },
    blue:  { background: "#e6f1fb", color: "#1a5fa8" },
    amber: { background: "#faeeda", color: "#ba7517" },
  } as const;
  return (
    <span
      style={{
        ...styles[color],
        fontSize: 9,
        fontWeight: 500,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        padding: "3px 8px",
        borderRadius: 20,
      }}
    >
      {label}
    </span>
  );
}

function NavRow({
  back,
  pill,
  pillColor = "green",
}: {
  back: string;
  pill: string;
  pillColor?: "green" | "blue" | "amber";
}) {
  const colors = { green: "#0f6e56", blue: "#1a5fa8", amber: "#ba7517" };
  return (
    <div className="mb-[10px] flex items-center justify-between">
      <span style={{ fontSize: 10, fontWeight: 500, color: colors[pillColor] }}>
        {back}
      </span>
      <Pill label={pill} color={pillColor} />
    </div>
  );
}

function ScreenTitle({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      style={{
        fontFamily: "var(--font-display, 'Fraunces', serif)",
        fontSize: 15,
        fontWeight: 400,
        lineHeight: 1.2,
        marginBottom: 3,
        color: dark ? "#f5f0e8" : "#0e0e0c",
      }}
    >
      {children}
    </div>
  );
}

function ScreenSub({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      style={{
        fontSize: 11,
        color: dark ? "rgba(245,240,232,0.45)" : "#7a7870",
        lineHeight: 1.4,
        marginBottom: 12,
      }}
    >
      {children}
    </div>
  );
}

function CtaBtn({
  children,
  variant = "green",
}: {
  children: React.ReactNode;
  variant?: "green" | "blue" | "outline";
}) {
  const styles = {
    green:   { background: "#0f6e56", color: "#f5f0e8" },
    blue:    { background: "#1a5fa8", color: "#f5f0e8" },
    outline: { background: "transparent", border: "1px solid rgba(14,14,12,0.12)", color: "#2c2b28" },
  } as const;
  return (
    <div
      className="mt-auto flex flex-shrink-0 items-center justify-between"
      style={{
        height: 36,
        borderRadius: 10,
        padding: "0 12px",
        fontSize: 12,
        fontWeight: 500,
        ...styles[variant],
      }}
    >
      {children}
    </div>
  );
}

/* ─── SCREEN A: Legal Package ─────────────────────────── */

function ScreenLegalPackage() {
  const docs = [
    { icon: "📄", name: "Purchase Agreement",      status: "✓ ready",    done: true },
    { icon: "🏢", name: "GK Structure Deed",       status: "✓ ready",    done: true },
    { icon: "📋", name: "Joint Ownership Agreement",status: "⟳ in review",done: false, amber: true },
    { icon: "🗂",  name: "Tax Registration (JP)",   status: "pending",    done: false },
  ];

  const trustLabels = ["AI draft", "Attorney", "Review", "Sign"];
  // 0=green, 1=green, 2=amber, 3=empty
  const trustColors = ["#0f6e56", "#0f6e56", "#ba7517", "rgba(14,14,12,0.10)"];

  return (
    <PhoneMock>
      <NavRow back="← Cedar fraction" pill="Autopilot" />
      <ScreenTitle>Legal Package</ScreenTitle>
      <ScreenSub>AI + licensed attorney review. One fixed fee — no surprises.</ScreenSub>

      {/* context badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          background: "#e1f5ee",
          borderRadius: 8,
          padding: "7px 10px",
          marginBottom: 10,
        }}
      >
        <span style={{ fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: "#085041", fontWeight: 500 }}>
          N-04 Pagano · Pine fraction
        </span>
        <span style={{ fontSize: 11, color: "#085041", fontWeight: 500, marginLeft: "auto" }}>
          ¥150,000
        </span>
      </div>

      {/* doc list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 5, marginBottom: 10 }}>
        {docs.map((d) => (
          <div
            key={d.name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "white",
              borderRadius: 8,
              padding: "7px 9px",
              border: "0.5px solid rgba(14,14,12,0.10)",
            }}
          >
            <div
              style={{
                width: 24, height: 24, borderRadius: 6,
                background: "#e1f5ee",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 10, flexShrink: 0,
              }}
            >
              {d.icon}
            </div>
            <span style={{ fontSize: 11, fontWeight: 500, color: "#2c2b28", flex: 1 }}>
              {d.name}
            </span>
            <span
              style={{
                fontSize: 9,
                color: d.done ? "#0f6e56" : d.amber ? "#ba7517" : "#7a7870",
              }}
            >
              {d.status}
            </span>
          </div>
        ))}
      </div>

      {/* trust bar */}
      <div
        style={{
          background: "white",
          border: "0.5px solid rgba(14,14,12,0.10)",
          borderRadius: 8,
          padding: "8px 10px",
          marginBottom: 8,
        }}
      >
        <div style={{ fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: "#7a7870", marginBottom: 4 }}>
          Trust stack
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          {trustColors.map((c, i) => (
            <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: c }} />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
          {trustLabels.map((l) => (
            <span key={l} style={{ fontSize: 9, color: "#7a7870" }}>{l}</span>
          ))}
        </div>
      </div>

      <CtaBtn variant="green">
        <span>Review &amp; sign documents</span>
        <span>→</span>
      </CtaBtn>
    </PhoneMock>
  );
}

/* ─── SCREEN B: Tax Autopilot ─────────────────────────── */

function ScreenTaxAutopilot() {
  const items = [
    { label: "Fixed Asset Tax (JP)",   tag: "filed ✓",   status: "done" },
    { label: "Consumption Tax reg.",   tag: "filed ✓",   status: "done" },
    { label: "Cross-border disclosure",tag: "in progress",status: "progress" },
    { label: "CPA signature",          tag: "scheduled", status: "pending" },
  ];

  const dotColor = { done: "#9fe1cb", progress: "#ba7517", pending: "rgba(255,255,255,0.2)" } as const;

  return (
    <PhoneMock dark>
      <NavRow back="← Owner portal" pill="¥80k / yr" />
      <ScreenTitle dark>Tax Autopilot</ScreenTitle>
      <ScreenSub dark>2024 filing · Niseko + home country residency</ScreenSub>

      {/* summary */}
      <div
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "0.5px solid rgba(255,255,255,0.09)",
          borderRadius: 10, padding: "10px 12px", marginBottom: 8,
        }}
      >
        <div style={{ fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(245,240,232,0.4)", marginBottom: 6 }}>
          Filing overview
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {[
            { t: "Fixed Asset Tax", v: "¥340k" },
            { t: "Rental income",   v: "¥0" },
          ].map((c) => (
            <div
              key={c.t}
              style={{ flex: 1, background: "rgba(255,255,255,0.06)", borderRadius: 8, padding: "7px 9px" }}
            >
              <div style={{ fontSize: 9, color: "rgba(245,240,232,0.45)", marginBottom: 2 }}>{c.t}</div>
              <div style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: 13, color: "#9fe1cb" }}>
                {c.v}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* items */}
      <div style={{ display: "flex", flexDirection: "column", gap: 5, marginBottom: 8 }}>
        {items.map((it) => (
          <div
            key={it.label}
            style={{
              display: "flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,0.04)",
              border: "0.5px solid rgba(255,255,255,0.07)",
              borderRadius: 8, padding: "7px 9px",
            }}
          >
            <div style={{ width: 6, height: 6, borderRadius: "50%", flexShrink: 0, background: dotColor[it.status as keyof typeof dotColor] }} />
            <span style={{ fontSize: 11, color: "rgba(245,240,232,0.8)", flex: 1 }}>{it.label}</span>
            <span style={{ fontSize: 9, color: "rgba(245,240,232,0.35)", whiteSpace: "nowrap" }}>{it.tag}</span>
          </div>
        ))}
      </div>

      {/* CPA footer */}
      <div
        style={{
          background: "rgba(15,110,86,0.15)",
          border: "0.5px solid rgba(31,158,117,0.25)",
          borderRadius: 8, padding: "8px 10px", marginBottom: 8,
        }}
      >
        <div style={{ fontSize: 9, color: "rgba(159,225,203,0.7)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 2 }}>
          CPA review by
        </div>
        <div style={{ fontSize: 11, color: "#9fe1cb", fontWeight: 500 }}>
          Tanaka &amp; Partners · 14 May 2025
        </div>
      </div>

      <div
        className="mt-auto flex flex-shrink-0 items-center justify-between"
        style={{
          height: 36, borderRadius: 10, padding: "0 12px",
          fontSize: 12, fontWeight: 500,
          background: "#0f6e56", color: "#f5f0e8",
        }}
      >
        <span>Renew subscription</span>
        <span style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: 10 }}>¥80,000</span>
      </div>
    </PhoneMock>
  );
}

/* ─── SCREEN C: Managed Search ────────────────────────── */

function ScreenManagedSearch() {
  const steps = [
    { done: true,  active: false, label: "Brief & criteria locked",    detail: "Snow · 4 weeks · budget ¥180M · family 5" },
    { done: true,  active: false, label: "Shortlist — 3 fractions found", detail: "Pagano Cedar, Hakuba Mori A, Mori B" },
    { done: true,  active: false, label: "Virtual tour & AI analysis", detail: "ROI: 6.2% · risk: low · recommended Mori A" },
    { done: false, active: true,  label: "Negotiation in progress",    detail: "Asking ¥185M · counter ¥172M · gap ¥13M" },
    { done: false, active: false, label: "Due diligence + Legal Package", detail: "Scheduled after offer accepted" },
  ];

  return (
    <PhoneMock>
      <NavRow back="← Discovery" pill="Active" pillColor="amber" />
      <ScreenTitle>Managed Search</ScreenTitle>
      <ScreenSub>Retainer ¥50,000 · re:Fourma closes the deal.</ScreenSub>

      {/* live status */}
      <div
        style={{
          display: "flex", alignItems: "center", gap: 8,
          background: "#faeeda", borderRadius: 8, padding: "7px 10px", marginBottom: 10,
        }}
      >
        <div
          style={{
            width: 6, height: 6, borderRadius: "50%",
            background: "#ba7517", flexShrink: 0,
            animation: "rf-pulse 1.8s ease-in-out infinite",
          }}
        />
        <span style={{ fontSize: 10, color: "#ba7517", fontWeight: 500, flex: 1 }}>
          Negotiating with seller — Hakuba N-07
        </span>
        <span style={{ fontSize: 10, color: "#ba7517", fontFamily: "var(--font-mono,'JetBrains Mono',monospace)" }}>
          Day 18
        </span>
      </div>

      {/* timeline */}
      <div style={{ display: "flex", flexDirection: "column", marginBottom: 10 }}>
        {steps.map((s, i) => (
          <div key={i} style={{ display: "flex", gap: 8, position: "relative" }}>
            {i < steps.length - 1 && (
              <div
                style={{
                  position: "absolute", left: 8, top: 20,
                  width: 1, height: "calc(100% - 4px)",
                  background: "rgba(14,14,12,0.10)",
                }}
              />
            )}
            <div
              style={{
                width: 17, height: 17, borderRadius: "50%", flexShrink: 0, marginTop: 3,
                fontSize: 7, zIndex: 1,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: s.done ? "#0f6e56" : s.active ? "#faeeda" : "white",
                border: s.done ? "1.5px solid #0f6e56" : s.active ? "1.5px solid #ba7517" : "1.5px solid rgba(14,14,12,0.10)",
                color: s.done ? "white" : s.active ? "#ba7517" : "#7a7870",
              }}
            >
              {s.done ? "✓" : s.active ? "→" : i + 1}
            </div>
            <div style={{ paddingBottom: 10, flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 500, color: "#2c2b28", marginBottom: 1 }}>{s.label}</div>
              <div style={{ fontSize: 10, color: "#7a7870", lineHeight: 1.4 }}>{s.detail}</div>
            </div>
          </div>
        ))}
      </div>

      {/* analyst note */}
      <div
        style={{
          background: "white", border: "0.5px solid rgba(14,14,12,0.10)",
          borderRadius: 8, padding: "8px 10px", marginBottom: 8,
        }}
      >
        <div style={{ fontSize: 9, letterSpacing: "0.07em", textTransform: "uppercase", color: "#7a7870", marginBottom: 3 }}>
          Analyst note
        </div>
        <div style={{ fontSize: 11, color: "#2c2b28", lineHeight: 1.4 }}>
          Seller motivated — Q4 deadline. Likely to close at ¥175–178M. Recommend holding counter.
        </div>
      </div>

      <CtaBtn variant="outline">
        <span>Message your deal lead</span>
        <span>→</span>
      </CtaBtn>
    </PhoneMock>
  );
}

/* ─── SCREEN D: AI Investment Advisor ────────────────── */

function ScreenInvestmentAdvisor() {
  return (
    <PhoneMock>
      <NavRow back="← Pagano Cedar" pill="¥30k / report" pillColor="blue" />
      <ScreenTitle>Investment Report</ScreenTitle>
      <ScreenSub>N-04 Pagano · Cedar fraction · Niseko market analysis</ScreenSub>

      {/* ROI box */}
      <div
        style={{
          background: "white", border: "0.5px solid rgba(14,14,12,0.10)",
          borderRadius: 10, padding: "10px 12px", marginBottom: 8,
        }}
      >
        <div style={{ fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: "#7a7870", marginBottom: 8 }}>
          Return overview
        </div>
        <div style={{ display: "flex", gap: 6, marginBottom: 8 }}>
          {[{ t: "Gross ROI", v: "6.2%" }, { t: "5-yr appreciation", v: "+34%" }].map((c) => (
            <div key={c.t} style={{ flex: 1, background: "#e6f1fb", borderRadius: 8, padding: "7px 9px" }}>
              <div style={{ fontSize: 9, color: "#1a5fa8", marginBottom: 2 }}>{c.t}</div>
              <div style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: 14, color: "#1a5fa8" }}>{c.v}</div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 9, color: "#7a7870", marginBottom: 3 }}>Risk level — Low</div>
        <div style={{ height: 4, background: "rgba(14,14,12,0.10)", borderRadius: 2 }}>
          <div style={{ width: "28%", height: "100%", borderRadius: 2, background: "#0f6e56" }} />
        </div>
      </div>

      {/* insights */}
      <div style={{ display: "flex", flexDirection: "column", gap: 5, marginBottom: 8 }}>
        {[
          { dot: "#1a5fa8", text: "Cedar has highest peak-week allocation of all 4 fractions", val: "8 wk" },
          { dot: "#0f6e56", text: "Niseko land values +12% YoY since 2021 — sustained foreign demand", val: "+12%" },
          { dot: "#ba7517", text: "Q4 2027 completion adds 18-month construction risk window", val: "18 mo" },
        ].map((ins, i) => (
          <div
            key={i}
            style={{
              display: "flex", alignItems: "flex-start", gap: 8,
              background: "white", border: "0.5px solid rgba(14,14,12,0.10)",
              borderRadius: 8, padding: "7px 9px",
            }}
          >
            <div style={{ width: 6, height: 6, borderRadius: "50%", marginTop: 3, flexShrink: 0, background: ins.dot }} />
            <div style={{ fontSize: 10, color: "#2c2b28", lineHeight: 1.4, flex: 1 }}>{ins.text}</div>
            <div style={{ fontSize: 10, color: "#7a7870", whiteSpace: "nowrap", fontFamily: "var(--font-mono,'JetBrains Mono',monospace)" }}>{ins.val}</div>
          </div>
        ))}
      </div>

      {/* comparison */}
      <div style={{ marginBottom: 8 }}>
        {[
          { name: "Pagano Cedar", pct: 92, color: "#1a5fa8", val: "6.2%" },
          { name: "Hakuba Mori A", pct: 78, color: "#0f6e56", val: "5.3%" },
          { name: "Revelstoke Cedar", pct: 60, color: "#7a7870", val: "4.1%" },
        ].map((row, i) => (
          <div
            key={i}
            style={{
              display: "flex", alignItems: "center", gap: 6, padding: "5px 0",
              borderBottom: i < 2 ? "0.5px solid rgba(14,14,12,0.10)" : "none",
            }}
          >
            <span style={{ fontSize: 10, color: "#7a7870", flex: 1 }}>{row.name}</span>
            <div style={{ flex: 2, height: 3, background: "rgba(14,14,12,0.10)", borderRadius: 2 }}>
              <div style={{ width: `${row.pct}%`, height: "100%", borderRadius: 2, background: row.color }} />
            </div>
            <span style={{ fontSize: 10, fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", color: "#2c2b28", minWidth: 28, textAlign: "right" }}>{row.val}</span>
          </div>
        ))}
      </div>

      <CtaBtn variant="blue">
        <span>Download full report</span>
        <span>→</span>
      </CtaBtn>
    </PhoneMock>
  );
}

/* ─── SCREEN E: Financing Autopilot ──────────────────── */

function ScreenFinancing() {
  const banks = [
    { name: "SMBC · Housing Loan",         rate: "1.84%", selected: true },
    { name: "Shinsei · Foreign National",  rate: "2.10%", selected: false },
    { name: "MUFG · Premium Real Estate",  rate: "2.35%", selected: false },
  ];

  return (
    <PhoneMock>
      <NavRow back="← Investment Report" pill="¥25k" pillColor="blue" />
      <ScreenTitle>Financing Options</ScreenTitle>
      <ScreenSub>AI scanned 8 Japanese lenders. Best 3 matched to your profile.</ScreenSub>

      {/* loan amount */}
      <div style={{ background: "#e6f1fb", borderRadius: 10, padding: "10px 12px", marginBottom: 8 }}>
        <div style={{ fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: "#1a5fa8", marginBottom: 6 }}>
          Loan amount
        </div>
        <div style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: 20, color: "#1a5fa8" }}>
          ¥124,600,000
        </div>
        <div style={{ fontSize: 10, color: "#1a5fa8", opacity: 0.6, marginTop: 1 }}>
          70% LTV · Cedar fraction · N-04 Pagano
        </div>
      </div>

      {/* bank options */}
      <div style={{ display: "flex", flexDirection: "column", gap: 5, marginBottom: 8 }}>
        {banks.map((b) => (
          <div
            key={b.name}
            style={{
              display: "flex", alignItems: "center", gap: 8,
              background: b.selected ? "#e6f1fb" : "white",
              border: b.selected ? "0.5px solid #1a5fa8" : "0.5px solid rgba(14,14,12,0.10)",
              borderRadius: 8, padding: "7px 9px",
            }}
          >
            <div
              style={{
                width: 14, height: 14, borderRadius: "50%", flexShrink: 0,
                border: b.selected ? "1.5px solid #1a5fa8" : "1.5px solid rgba(14,14,12,0.10)",
                background: b.selected ? "#1a5fa8" : "transparent",
              }}
            />
            <span style={{ fontSize: 11, fontWeight: 500, color: b.selected ? "#1a5fa8" : "#2c2b28", flex: 1 }}>
              {b.name}
            </span>
            <span style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: 11, color: "#0f6e56" }}>
              {b.rate}
            </span>
          </div>
        ))}
      </div>

      {/* breakdown */}
      <div
        style={{
          background: "white", border: "0.5px solid rgba(14,14,12,0.10)",
          borderRadius: 8, padding: "8px 10px", marginBottom: 8,
        }}
      >
        <div style={{ fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: "#7a7870", marginBottom: 6 }}>
          Monthly breakdown · SMBC
        </div>
        {[
          { k: "Principal + interest", v: "¥412,000" },
          { k: "Fixed Asset Tax est.", v: "¥28,300" },
          { k: "Management fee",       v: "¥18,000" },
        ].map((r) => (
          <div key={r.k} style={{ display: "flex", justifyContent: "space-between", fontSize: 10, padding: "2px 0" }}>
            <span style={{ color: "#7a7870" }}>{r.k}</span>
            <span style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", color: "#2c2b28" }}>{r.v}</span>
          </div>
        ))}
        <div
          style={{
            display: "flex", justifyContent: "space-between", fontSize: 10,
            padding: "4px 0 0", borderTop: "0.5px solid rgba(14,14,12,0.10)", marginTop: 4,
          }}
        >
          <span style={{ color: "#2c2b28", fontWeight: 500 }}>Total / month</span>
          <span style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", color: "#1a5fa8", fontWeight: 500 }}>¥458,300</span>
        </div>
      </div>

      <CtaBtn variant="blue">
        <span>Apply with SMBC</span>
        <span>→</span>
      </CtaBtn>
    </PhoneMock>
  );
}

/* ─── SECTION WRAPPER ─────────────────────────────────── */

function SectionHeader({
  badge,
  badgeColor,
  title,
  desc,
}: {
  badge: string;
  badgeColor: "blue" | "green";
  title: string;
  desc: string;
}) {
  const colors = {
    blue:  { bg: "#e6f1fb", text: "#1a5fa8" },
    green: { bg: "#e1f5ee", text: "#085041" },
  };
  return (
    <div className="mb-[28px] flex items-baseline gap-[12px]">
      <span
        style={{
          fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase",
          padding: "3px 10px", borderRadius: 20,
          ...colors[badgeColor],
        }}
      >
        {badge}
      </span>
      <span
        style={{
          fontFamily: "var(--font-display,'Fraunces',serif)",
          fontSize: 26, fontWeight: 400, fontStyle: "italic",
        }}
      >
        {title}
      </span>
      <span style={{ fontSize: 13, color: "#7a7870", flex: 1, lineHeight: 1.5 }}>
        {desc}
      </span>
    </div>
  );
}

function PhoneCell({
  num,
  title,
  caption,
  children,
}: {
  num: string;
  title: string;
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-[14px]">
      <div className="flex flex-col gap-[2px]">
        <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#7a7870" }}>
          {num}
        </span>
        <span style={{ fontSize: 14, fontWeight: 500, color: "#0e0e0c" }}>{title}</span>
      </div>
      <div className="flex justify-center">{children}</div>
      <p style={{ fontSize: 12, color: "#7a7870", lineHeight: 1.5 }}
        dangerouslySetInnerHTML={{ __html: caption }}
      />
    </div>
  );
}

function Banner({
  icon,
  color,
  label,
  desc,
  pills,
}: {
  icon: string;
  color: "green" | "blue";
  label: string;
  desc: string;
  pills: string[];
}) {
  const c = {
    green: { border: "#9fe1cb", iconBg: "#e1f5ee", labelColor: "#0f6e56", pillBg: "#e1f5ee", pillColor: "#085041", pillBorder: "#9fe1cb" },
    blue:  { border: "#b5d4f4", iconBg: "#e6f1fb", labelColor: "#1a5fa8", pillBg: "#e6f1fb", pillColor: "#1a5fa8", pillBorder: "#b5d4f4" },
  }[color];

  return (
    <div
      style={{
        border: `1px dashed ${c.border}`,
        borderRadius: 14, padding: "16px 20px",
        display: "flex", alignItems: "flex-start", gap: 14,
        marginTop: 4, marginBottom: 32,
      }}
    >
      <div
        style={{
          width: 36, height: 36, borderRadius: 10,
          background: c.iconBg,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 16, flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: c.labelColor, marginBottom: 4 }}>
          {label}
        </div>
        <div style={{ fontSize: 13, color: "#7a7870", lineHeight: 1.5, marginBottom: 10 }}>
          {desc}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {pills.map((p) => (
            <span
              key={p}
              style={{
                fontSize: 11, padding: "4px 11px", borderRadius: 20, fontWeight: 500,
                background: c.pillBg, color: c.pillColor, border: `0.5px solid ${c.pillBorder}`,
              }}
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div
      style={{
        display: "flex", alignItems: "center", gap: 16,
        margin: "0 auto 56px",
      }}
    >
      <div style={{ flex: 1, height: "0.5px", background: "rgba(14,14,12,0.10)" }} />
      <span style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7a7870", whiteSpace: "nowrap" }}>
        Product Layer · Copilot &amp; Autopilot
      </span>
      <div style={{ flex: 1, height: "0.5px", background: "rgba(14,14,12,0.10)" }} />
    </div>
  );
}

function Principles({ items }: { items: { num: string; ttl: string; body: string }[] }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginBottom: 48 }}>
      {items.map((p) => (
        <div key={p.num} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <span style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: 10, color: "#7a7870" }}>
            {p.num}
          </span>
          <span style={{ fontSize: 13, fontWeight: 500, color: "#2c2b28" }}>{p.ttl}</span>
          <span style={{ fontSize: 11, color: "#7a7870", lineHeight: 1.5 }}>{p.body}</span>
        </div>
      ))}
    </div>
  );
}

/* ─── MAIN EXPORT ─────────────────────────────────────── */

export default function FrameAutopilot() {
  const { prev } = useNav();

  return (
    <>
      {/* pulse animation for the managed search live dot */}
      <style>{`@keyframes rf-pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(.8)}}`}</style>

      <div style={{ padding: "48px 24px 64px", background: "var(--color-paper,#faf7f2)", minHeight: "100%" }}>

        {/* page header */}
        <div style={{ maxWidth: 760, margin: "0 auto 48px" }}>
          <div
            style={{
              fontFamily: "var(--font-display,'Fraunces',serif)",
              fontSize: 22, fontWeight: 400, letterSpacing: "-0.5px", marginBottom: 6,
            }}
          >
            re<span style={{ color: "#7a7870" }}>:</span>Fourma
          </div>
          <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#7a7870" }}>
            Product Layer · Copilot Sells the Tool · Autopilot Sells the Work
          </div>
        </div>

        {/* divider */}
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <Divider />
        </div>

        {/* ── COPILOT ── */}
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <SectionHeader
            badge="Copilot Layer"
            badgeColor="blue"
            title="sells the tool"
            desc="AI augments the client's decision. The human stays in control — AI delivers the insight, the client makes the call."
          />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginBottom: 28 }}>
            <PhoneCell
              num="C-00 / Property Search"
              title="AI finds the match"
              caption="<strong>Property Search.</strong> Client describes criteria in plain language. AI ranks results by match score and surfaces a Buyer's Analyst note. Client chooses — AI doesn't decide."
            >
              <ScreenInvestmentAdvisor />
            </PhoneCell>

            <PhoneCell
              num="C-01 / AI Investment Advisor"
              title="Know before you commit"
              caption="<strong>AI Investment Advisor.</strong> ¥30k per report — AI analyses ROI, appreciation, risk, compares against the network. Client pays for data; the investment decision is theirs."
            >
              <ScreenInvestmentAdvisor />
            </PhoneCell>

            <PhoneCell
              num="C-02 / Financing Autopilot"
              title="Model the mortgage"
              caption="<strong>Financing Autopilot.</strong> ¥25k flat fee — AI scans Japanese lenders, matches to the client profile, models monthly payments. Client picks a bank and applies."
            >
              <ScreenFinancing />
            </PhoneCell>
          </div>

          <Banner
            icon="◆"
            color="blue"
            label="Copilot layer — the client decides, AI informs"
            desc="Copilot products trigger at the decision point: Investment Advisor before committing to a fraction, Financing Autopilot before signing a loan. One-time fees, no subscription needed. They naturally lead into Autopilot products — the client who buys an Investment Report is the same client who will need a Legal Package."
            pills={["Property Search · included", "AI Investment Advisor · ¥30k / report", "Financing Autopilot · ¥25k"]}
          />

          <Principles
            items={[
              { num: "01", ttl: "Copilot = sell the tool", body: "AI surfaces insight the client couldn't access alone. They stay in control — the decision is always theirs." },
              { num: "02", ttl: "One-time, high-value", body: "No subscription pressure. Client pays once at the right moment — before a ¥180M commitment, the ¥30k report is an obvious buy." },
              { num: "03", ttl: "Gateway to Autopilot", body: "Every Copilot sale is a warm lead for the Autopilot layer. The same client needs Legal Package, Tax Autopilot, and Managed Search next." },
            ]}
          />
        </div>

        {/* ── AUTOPILOT ── */}
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <SectionHeader
            badge="Autopilot Layer"
            badgeColor="green"
            title="sells the work"
            desc="AI completes the task end-to-end. The client buys an outcome — documents ready, taxes filed, deal closed."
          />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginBottom: 28 }}>
            <PhoneCell
              num="08b / Legal Package"
              title="Documents under control"
              caption="<strong>Legal Package.</strong> AI generates all 4 documents; a licensed Japanese attorney reviews them. Client pays ¥150k instead of ¥700k to a law firm. The outcome is a ready-to-sign package — not a consultation."
            >
              <ScreenLegalPackage />
            </PhoneCell>

            <PhoneCell
              num="21b / Tax Autopilot"
              title="Taxes handled, annually"
              caption="<strong>Tax Autopilot.</strong> ¥80k / year — AI collects all data from the owner portfolio, a CPA signs off. Covers Japan + country of residency. Pure subscription: auto-renews every February."
            >
              <ScreenTaxAutopilot />
            </PhoneCell>

            <PhoneCell
              num="02b / Managed Search"
              title="We close it for you"
              caption="<strong>Managed Search.</strong> ¥50k retainer — re:Fourma runs the deal end-to-end: analysis, negotiation, due diligence, Legal Package. The client gets the keys."
            >
              <ScreenManagedSearch />
            </PhoneCell>
          </div>

          <Banner
            icon="↻"
            color="green"
            label="Subscription layer — this can be recurring revenue"
            desc="Tax Autopilot auto-renews annually. Legal Package triggers with every new transaction. Managed Search runs on retainer until close. Together they shift re:Fourma from a transaction business into an ARR company — LTV 5–10× the first deal."
            pills={[
              "Legal Package · ¥150k / deal",
              "Tax Autopilot · ¥80k / year",
              "Managed Search · ¥50k retainer",
              "AI Investment Advisor · ¥30k / report",
              "Financing Autopilot · ¥25k",
            ]}
          />

          <Principles
            items={[
              { num: "01", ttl: "Autopilot = sell the work", body: "Every model upgrade makes the service cheaper to deliver. Margin grows automatically." },
              { num: "02", ttl: "Trust stack — not optional", body: "AI draft → attorney review → client sign. Responsibility is distributed; clients trust the result." },
              { num: "03", ttl: "Outsourcing as wedge", body: "Legal and tax work is already outsourced. The budget line exists. re:Fourma is a vendor swap — not a reorg." },
            ]}
          />
        </div>

        {/* back nav */}
        <div style={{ maxWidth: 760, margin: "0 auto", paddingTop: 20, borderTop: "0.5px solid rgba(14,14,12,0.10)", display: "flex", justifyContent: "space-between" }}>
          <button
            onClick={prev}
            style={{ fontSize: 12, color: "#0f6e56", fontWeight: 500, background: "none", border: "none", cursor: "pointer" }}
          >
            ← Back to prototype
          </button>
          <div style={{ fontSize: 11, color: "#7a7870" }}>re:Fourma · Product Layer · v.01</div>
        </div>

      </div>
    </>
  );
}
