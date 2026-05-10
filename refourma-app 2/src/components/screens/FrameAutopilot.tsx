"use client";

import { useNav } from "@/lib/nav";

/* ─── types ─────────────────────────────────────────────── */

type Product = {
  num: string;
  name: string;
  price: string;
  priceNote: string;
  what: string;
  outcome: string;
  tags: string[];
};

/* ─── data ──────────────────────────────────────────────── */

const COPILOT_PRODUCTS: Product[] = [
  {
    num: "C-00",
    name: "Property Search",
    price: "included",
    priceNote: "",
    what: "AI scans the full network by criteria — ski-out, weeks, budget, family size. Results ranked by match score with a Buyer's Analyst note.",
    outcome: "Client sees a curated shortlist in seconds. They choose — AI doesn't decide.",
    tags: ["Natural language", "12 properties", "Ranked by AI"],
  },
  {
    num: "C-01",
    name: "AI Investment Advisor",
    price: "¥30,000",
    priceNote: "per report",
    what: "Full ROI analysis, 5-year appreciation model, risk rating, and comparison against other fractions in the network. Sourced from MLIT data.",
    outcome: "Client pays for data before committing ¥180M. The investment decision stays theirs.",
    tags: ["ROI & yield", "Risk model", "Network comparison"],
  },
  {
    num: "C-02",
    name: "Financing Autopilot",
    price: "¥25,000",
    priceNote: "flat fee",
    what: "AI scans 8 Japanese lenders, matches to the client's profile (foreign national, LTV, residency), and models monthly payments side by side.",
    outcome: "Client picks a bank, applies with one tap. re:Fourma does not handle funds.",
    tags: ["8 lenders scanned", "Foreign national eligible", "Monthly breakdown"],
  },
];

const AUTOPILOT_PRODUCTS: Product[] = [
  {
    num: "A-01",
    name: "Legal Package",
    price: "¥150,000",
    priceNote: "per transaction",
    what: "AI generates all 4 documents — Purchase Agreement, GK Structure Deed, Joint Ownership Agreement, Tax Registration. A licensed Japanese attorney reviews and signs off.",
    outcome: "Client pays ¥150k instead of ¥700k to a law firm. Ready-to-sign package, not a consultation.",
    tags: ["4 documents", "Licensed JP attorney", "Fixed price"],
  },
  {
    num: "A-02",
    name: "Tax Autopilot",
    price: "¥80,000",
    priceNote: "per year",
    what: "AI collects all data from the owner portfolio — Fixed Asset Tax, Consumption Tax, cross-border disclosure. A CPA partner reviews and signs every filing.",
    outcome: "Covers Japan + country of residency. Auto-renews every February. No manual input needed.",
    tags: ["JP + home country", "CPA signature", "Auto-renews"],
  },
  {
    num: "A-03",
    name: "Managed Search",
    price: "¥50,000",
    priceNote: "retainer",
    what: "re:Fourma runs the deal end-to-end: brief, shortlist, virtual tour, AI analysis, negotiation, due diligence, Legal Package. Client approves decisions — agent executes.",
    outcome: "Client gets the keys. The retainer converts into the Legal Package fee on close.",
    tags: ["End-to-end", "Negotiation included", "Legal Package bundled"],
  },
];

/* ─── atoms ─────────────────────────────────────────────── */

function Badge({ label, color }: { label: string; color: "blue" | "green" }) {
  const c = color === "blue"
    ? { background: "#e6f1fb", color: "#1a5fa8" }
    : { background: "#e1f5ee", color: "#085041" };
  return (
    <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", padding: "3px 10px", borderRadius: 20, ...c }}>
      {label}
    </span>
  );
}

function Tag({ label, color }: { label: string; color: "blue" | "green" }) {
  const c = color === "blue"
    ? { background: "#e6f1fb", color: "#1a5fa8", border: "0.5px solid #b5d4f4" }
    : { background: "#e1f5ee", color: "#085041", border: "0.5px solid #9fe1cb" };
  return (
    <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, fontWeight: 500, ...c }}>
      {label}
    </span>
  );
}

function ProductCard({ product, color }: { product: Product; color: "blue" | "green" }) {
  const accent = color === "blue" ? "#1a5fa8" : "#0f6e56";
  const accentLight = color === "blue" ? "#e6f1fb" : "#e1f5ee";

  return (
    <div
      style={{
        background: "white",
        border: "0.5px solid rgba(14,14,12,0.10)",
        borderRadius: 16,
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      {/* header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
        <div>
          <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#7a7870", marginBottom: 4 }}>
            {product.num}
          </div>
          <div style={{ fontFamily: "var(--font-display,'Fraunces',serif)", fontSize: 20, fontWeight: 400, color: "#0e0e0c", lineHeight: 1.2 }}>
            {product.name}
          </div>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: product.price === "included" ? 13 : 18, fontWeight: 400, color: accent }}>
            {product.price}
          </div>
          {product.priceNote && (
            <div style={{ fontSize: 11, color: "#7a7870", marginTop: 1 }}>{product.priceNote}</div>
          )}
        </div>
      </div>

      {/* divider */}
      <div style={{ height: "0.5px", background: "rgba(14,14,12,0.08)" }} />

      {/* what */}
      <div>
        <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#7a7870", marginBottom: 6 }}>
          What it does
        </div>
        <div style={{ fontSize: 13, color: "#2c2b28", lineHeight: 1.6 }}>
          {product.what}
        </div>
      </div>

      {/* outcome */}
      <div style={{ background: accentLight, borderRadius: 10, padding: "12px 14px" }}>
        <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: accent, marginBottom: 4 }}>
          Outcome
        </div>
        <div style={{ fontSize: 13, color: accent, lineHeight: 1.5 }}>
          {product.outcome}
        </div>
      </div>

      {/* tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {product.tags.map((t) => (
          <Tag key={t} label={t} color={color} />
        ))}
      </div>
    </div>
  );
}

function SectionHeader({ badge, badgeColor, title, desc }: { badge: string; badgeColor: "blue" | "green"; title: string; desc: string }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
        <Badge label={badge} color={badgeColor} />
        <span style={{ fontFamily: "var(--font-display,'Fraunces',serif)", fontSize: 28, fontWeight: 400, fontStyle: "italic", lineHeight: 1 }}>
          {title}
        </span>
      </div>
      <div style={{ fontSize: 14, color: "#7a7870", lineHeight: 1.6, maxWidth: 560 }}>
        {desc}
      </div>
    </div>
  );
}

function Banner({ color, label, desc, pills }: { color: "green" | "blue"; label: string; desc: string; pills: string[] }) {
  const c = color === "green"
    ? { border: "#9fe1cb", iconBg: "#e1f5ee", labelColor: "#0f6e56", pillBg: "#e1f5ee", pillColor: "#085041", pillBorder: "#9fe1cb" }
    : { border: "#b5d4f4", iconBg: "#e6f1fb", labelColor: "#1a5fa8", pillBg: "#e6f1fb", pillColor: "#1a5fa8", pillBorder: "#b5d4f4" };
  return (
    <div style={{ border: `1px dashed ${c.border}`, borderRadius: 14, padding: "20px 24px", marginTop: 32 }}>
      <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: c.labelColor, marginBottom: 6 }}>
        {label}
      </div>
      <div style={{ fontSize: 13, color: "#7a7870", lineHeight: 1.6, marginBottom: 14 }}>
        {desc}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {pills.map((p) => (
          <span key={p} style={{ fontSize: 11, padding: "4px 12px", borderRadius: 20, fontWeight: 500, background: c.pillBg, color: c.pillColor, border: `0.5px solid ${c.pillBorder}` }}>
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

function Principles({ items }: { items: { num: string; ttl: string; body: string }[] }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginTop: 40, paddingTop: 32, borderTop: "0.5px solid rgba(14,14,12,0.08)" }}>
      {items.map((p) => (
        <div key={p.num} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: 10, color: "#7a7870" }}>{p.num}</span>
          <span style={{ fontSize: 14, fontWeight: 500, color: "#2c2b28" }}>{p.ttl}</span>
          <span style={{ fontSize: 12, color: "#7a7870", lineHeight: 1.6 }}>{p.body}</span>
        </div>
      ))}
    </div>
  );
}

/* ─── main ──────────────────────────────────────────────── */

export default function FrameAutopilot() {
  const { prev } = useNav();

  return (
    <div style={{ padding: "48px 32px 64px", background: "var(--color-paper,#faf7f2)", minHeight: "100%", overflowY: "auto" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>

        {/* page header */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontFamily: "var(--font-display,'Fraunces',serif)", fontSize: 22, fontWeight: 400, letterSpacing: "-0.5px", marginBottom: 6 }}>
            re<span style={{ color: "#7a7870" }}>:</span>Fourma
          </div>
          <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#7a7870" }}>
            Product Layer · Copilot &amp; Autopilot
          </div>
        </div>

        {/* divider */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 56 }}>
          <div style={{ flex: 1, height: "0.5px", background: "rgba(14,14,12,0.10)" }} />
          <span style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7a7870", whiteSpace: "nowrap" }}>
            Copilot sells the tool · Autopilot sells the work
          </span>
          <div style={{ flex: 1, height: "0.5px", background: "rgba(14,14,12,0.10)" }} />
        </div>

        {/* ── COPILOT ── */}
        <SectionHeader
          badge="Copilot Layer"
          badgeColor="blue"
          title="sells the tool"
          desc="AI augments the client's decision. The human stays in control — AI delivers the insight, the client makes the call. One-time fees at the moment of decision."
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
          {COPILOT_PRODUCTS.map((p) => (
            <ProductCard key={p.num} product={p} color="blue" />
          ))}
        </div>

        <Banner
          color="blue"
          label="Copilot layer — the client decides, AI informs"
          desc="Copilot products trigger at the decision point: Investment Advisor before committing to a fraction, Financing Autopilot before signing a loan. Every Copilot sale is a warm lead for the Autopilot layer."
          pills={["Property Search · included", "AI Investment Advisor · ¥30k / report", "Financing Autopilot · ¥25k"]}
        />

        <Principles items={[
          { num: "01", ttl: "Copilot = sell the tool", body: "AI surfaces insight the client couldn't access alone. They stay in control — the decision is always theirs." },
          { num: "02", ttl: "One-time, high-value", body: "Client pays once at the right moment — before a ¥180M commitment, the ¥30k report is an obvious buy." },
          { num: "03", ttl: "Gateway to Autopilot", body: "Every Copilot sale is a warm lead for the Autopilot layer. The same client needs Legal Package and Tax Autopilot next." },
        ]} />

        {/* spacer */}
        <div style={{ height: 72 }} />

        {/* ── AUTOPILOT ── */}
        <SectionHeader
          badge="Autopilot Layer"
          badgeColor="green"
          title="sells the work"
          desc="AI completes the task end-to-end. The client buys an outcome — documents ready, taxes filed, deal closed. Naturally recurring: same client, same need, every year."
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
          {AUTOPILOT_PRODUCTS.map((p) => (
            <ProductCard key={p.num} product={p} color="green" />
          ))}
        </div>

        <Banner
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

        <Principles items={[
          { num: "01", ttl: "Autopilot = sell the work", body: "Every model upgrade makes the service cheaper to deliver. Margin grows automatically." },
          { num: "02", ttl: "Trust stack — not optional", body: "AI draft → attorney review → client sign. Responsibility is distributed; clients trust the result." },
          { num: "03", ttl: "Outsourcing as wedge", body: "Legal and tax work is already outsourced. The budget line exists. re:Fourma is a vendor swap — not a reorg." },
        ]} />

        {/* footer */}
        <div style={{ marginTop: 56, paddingTop: 20, borderTop: "0.5px solid rgba(14,14,12,0.10)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <button
            onClick={prev}
            style={{ fontSize: 12, color: "#0f6e56", fontWeight: 500, background: "none", border: "none", cursor: "pointer" }}
          >
            ← Back to prototype
          </button>
          <div style={{ fontSize: 11, color: "#7a7870" }}>re:Fourma · Product Layer · v.01</div>
        </div>

      </div>
    </div>
  );
}
