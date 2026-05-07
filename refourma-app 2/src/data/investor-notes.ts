// ─────────────────────────────────────────────────────────────────
// Investor mode annotations
// Each frame can have annotations that overlay when investor mode is on
// ─────────────────────────────────────────────────────────────────

export type Annotation = {
  text: string;
  // Position relative to phone screen
  position: "top" | "bottom" | "right";
  // Optional emphasis label
  label?: string;
};

export const INVESTOR_ANNOTATIONS: Record<number, Annotation[]> = {
  0: [
    {
      label: "MARKET",
      text: "TAM €840B globally · 2,300 properties match the profile · expanding to 12 places by 2028",
      position: "bottom",
    },
  ],
  1: [
    {
      label: "MOAT",
      text: "AI Buyer's Analyst trained on 18 months of curation data · matches in 12 seconds vs weeks with traditional brokers",
      position: "bottom",
    },
  ],
  3: [
    {
      label: "DATA INTEGRITY",
      text: "Yield calculated from 12 MLIT-verified Niseko sales since 2024 · not industry averages",
      position: "bottom",
    },
  ],
  8: [
    {
      label: "UNIT ECONOMICS",
      text: "Take rate: 3% on acquisition + 1.2% annual mgmt + 2% on resale · LTV €420k per fraction over 7-year hold",
      position: "bottom",
    },
  ],
  12: [
    {
      label: "ENGAGEMENT",
      text: "Co-design votes drive owner ownership · 4 votes per project · NPS 76 in concept testing",
      position: "bottom",
    },
  ],
  17: [
    {
      label: "RETENTION",
      text: "12-week annual rotation + peak rotation · cross-sell to second project after year 2 · 38% projected expansion rate",
      position: "bottom",
    },
  ],
  18: [
    {
      label: "OPERATIONS",
      text: "Tomoko-tier concierge: €18k/yr OpEx contribution per fraction · 22% gross margin on activities",
      position: "bottom",
    },
  ],
  19: [
    {
      label: "LIQUIDITY",
      text: "ROFR-first secondary market · 14-day average to clear · resale fee 2% on transaction value",
      position: "bottom",
    },
  ],
  22: [
    {
      label: "GROWTH",
      text: "Network effects: 3.2 referrals per active owner in year 2 · CAC drops 78% past 18 months",
      position: "bottom",
    },
  ],
  24: [
    {
      label: "EXPANSION",
      text: "Pipeline: 12 properties identified by 2028 · Snow / Water / Wild · €280M aggregate GMV by year 5",
      position: "bottom",
    },
  ],
};
