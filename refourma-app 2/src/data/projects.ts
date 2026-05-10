// ─────────────────────────────────────────────────────────────────
// re:Fourma — Single source of truth for prototype data
// All screens read from here. Edit values here, all screens update.
// ─────────────────────────────────────────────────────────────────

export type Project = {
  id: string;
  code: string;
  name: string;
  category: "Snow" | "Water" | "Wild";
  area: string;
  region: string;
  country: string;
  priceFrom: string;
  priceTo?: string;
  fractionsTotal: number;
  fractionsReserved: number;
  delivery: string;
  status: "active" | "upcoming" | "presale";
  yieldEstimate: string;
  isTop?: boolean;
  isLast?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "n-04",
    code: "N-04",
    name: "Pagano",
    category: "Snow",
    area: "Hanazono",
    region: "Niseko, Hokkaidō",
    country: "Japan",
    priceFrom: "€2.5M",
    priceTo: "€4.0M",
    fractionsTotal: 4,
    fractionsReserved: 3,
    delivery: "Q4 2027",
    status: "active",
    yieldEstimate: "6.8%",
    isTop: true,
    isLast: true,
  },
  {
    id: "n-07",
    code: "N-07",
    name: "Mori",
    category: "Snow",
    area: "Hakuba",
    region: "Nagano",
    country: "Japan",
    priceFrom: "€1.8M",
    fractionsTotal: 4,
    fractionsReserved: 1,
    delivery: "Q2 2027",
    status: "presale",
    yieldEstimate: "5.2%",
  },
  {
    id: "w-05",
    code: "W-05",
    name: "Larch",
    category: "Snow",
    area: "Revelstoke",
    region: "British Columbia",
    country: "Canada",
    priceFrom: "€3.4M",
    fractionsTotal: 8,
    fractionsReserved: 0,
    delivery: "2028",
    status: "upcoming",
    yieldEstimate: "4.1%",
  },
  {
    id: "w-02",
    code: "W-02",
    name: "Cala",
    category: "Water",
    area: "Cap de Formentor",
    region: "Mallorca",
    country: "Spain",
    priceFrom: "€2.2M",
    fractionsTotal: 4,
    fractionsReserved: 2,
    delivery: "2028",
    status: "upcoming",
    yieldEstimate: "5.5%",
  },
];

// ─────────────────────────────────────────────────────────────────
// PAGANO FRACTIONS — Cedar / Birch / Maple / Pine
// ─────────────────────────────────────────────────────────────────

export type Fraction = {
  name: string;
  price: string;
  status: "taken" | "available";
  weeksPerYear: number;
  // Detailed differentiation
  view: string;
  orientation: string;
  bedroomsAssigned: string;
  peakWeeks: string;
  characterTrait: string;  // a one-line poetic descriptor
  ownerNote?: string;       // who took it, for taken ones
};

export const PAGANO_FRACTIONS: Fraction[] = [
  {
    name: "Cedar",
    price: "€2.5M",
    status: "taken",
    weeksPerYear: 12,
    view: "Forest, west",
    orientation: "Quietest wing — sleeps furthest from kitchen",
    bedroomsAssigned: "Master suite + 1 guest",
    peakWeeks: "Feb 5 – 11 (Sapporo Snow Festival week)",
    characterTrait: "The reader's fraction. Library opens onto cedar grove.",
    ownerNote: "Reserved Mar 2026 · Singapore family",
  },
  {
    name: "Birch",
    price: "€2.8M",
    status: "taken",
    weeksPerYear: 12,
    view: "Yōtei east face",
    orientation: "Morning sun direct from 6:42 AM in winter",
    bedroomsAssigned: "Two bedrooms + tatami room",
    peakWeeks: "Feb 19 – 25 (post-Festival deep powder)",
    characterTrait: "The early riser's fraction. First light hits this corner.",
    ownerNote: "Reserved Apr 2026 · Sydney couple",
  },
  {
    name: "Maple",
    price: "€3.1M",
    status: "taken",
    weeksPerYear: 12,
    view: "South + onsen deck",
    orientation: "Direct access to outdoor onsen — the wing the architects favoured",
    bedroomsAssigned: "Master + 2 children's rooms",
    peakWeeks: "Dec 27 – Jan 2 (New Year week)",
    characterTrait: "The host's fraction. Lives closest to the kitchen and the fire.",
    ownerNote: "Reserved Jun 2026 · Hong Kong family",
  },
  {
    name: "Pine",
    price: "€4.0M",
    status: "available",
    weeksPerYear: 12,
    view: "River, north",
    orientation: "Faces the stream — sound of water from every window",
    bedroomsAssigned: "Master suite + 2 guests",
    peakWeeks: "Mar 12 – 18 (rotating peak — yours in odd years)",
    characterTrait: "The walker's fraction. Steps lead from the deck down to the river.",
  },
];

// ─────────────────────────────────────────────────────────────────
// PAGANO PROPERTY DETAILS
// ─────────────────────────────────────────────────────────────────

export const PAGANO_DETAILS = {
  land: "2,180 m²",
  built: "640 m²",
  bedrooms: "5 + 1 staff",
  bathrooms: "6",
  delivery: "Q4 2027",
  architect: "Studio M.",
  features: ["Onsen", "Ski room", "Cinema", "Wine cellar"],
};

// ─────────────────────────────────────────────────────────────────
// AI ANALYST INSIGHTS
// ─────────────────────────────────────────────────────────────────

export const PAGANO_ANALYST = {
  verdict:
    "Strong winter income with real Yōtei view protection — the Pine fraction is the one to take.",
  insights: [
    { label: "Yield", value: "6.8%", detail: "After 20.42% withholding & 25% mgmt fee" },
    { label: "Legal", value: "365d", detail: "Detached chalet · STR fully permitted" },
    { label: "vs comps", value: "−4%", detail: "12 MLIT-verified Niseko sales since 2024" },
  ],
  yieldRange: { low: 5.9, mid: 6.8, high: 7.8 },
};

// ─────────────────────────────────────────────────────────────────
// CONCIERGE ACTIVITIES
// ─────────────────────────────────────────────────────────────────

export type Activity = {
  date: string;
  time: string;
  name: string;
  guests: number;
  duration: string;
  price: string;
};

export const ACTIVITIES: Activity[] = [
  {
    date: "FEB 13",
    time: "06:30",
    name: "Powder cat ski · Mt. Yōtei back side",
    guests: 4,
    duration: "6h",
    price: "¥180k",
  },
  {
    date: "FEB 14",
    time: "14:00",
    name: "Private onsen · Goshiki ryokan",
    guests: 2,
    duration: "3h",
    price: "¥48k",
  },
  {
    date: "FEB 15",
    time: "19:00",
    name: "Omakase ramen tour · 3 stops",
    guests: 5,
    duration: "4h",
    price: "¥95k",
  },
];

// ─────────────────────────────────────────────────────────────────
// OWNER STATS (for Frame 21 — Portal)
// ─────────────────────────────────────────────────────────────────

export const OWNER = {
  name: "Anastasia",
  role: "Owner",
  tier: "II",
  ownsCount: 1,
  referralsCount: 3,
};

// ─────────────────────────────────────────────────────────────────
// CHAPTERS & FRAMES METADATA
// ─────────────────────────────────────────────────────────────────

export type Frame = {
  id: number;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  caption: string;
};

export type Chapter = {
  number: string;
  name: string;
  description: string;
  frames: Frame[];
};

export const CHAPTERS: Chapter[] = [
  {
    number: "00",
    name: "Discovery by AI",
    description: "Before any project exists. The agent listens; the network responds.",
    frames: [
      {
        id: 1,
        slug: "intake",
        number: "01",
        title: "Tell me what you want",
        subtitle: "Chat-first home",
        caption: "Voice or text. Languages baked in. The agent does the rest.",
      },
      {
        id: 2,
        slug: "match",
        number: "02",
        title: "Agent reads back",
        subtitle: "3 matches · 12s",
        caption: "Curated, not filtered. Three options, one badged TOP.",
      },
      {
        id: 3,
        slug: "read",
        number: "03",
        title: "Analyst's verdict",
        subtitle: "Embedded in the project page",
        caption: "Hero · price · then the AI verdict in plain English.",
      },
      {
        id: 4,
        slug: "choose",
        number: "04",
        title: "Compare side-by-side",
        subtitle: "Trade-offs made plain",
        caption: "Three options, four rows that matter. Best cells highlighted.",
      },
    ],
  },
  {
    number: "01",
    name: "Entry & trust",
    description: "Project opens. KYC happens once for the whole network.",
    frames: [
      {
        id: 5,
        slug: "discover",
        number: "05",
        title: "Project opens",
        subtitle: "Cinematic entry",
        caption: "Channel chips show how the user arrived.",
      },
      {
        id: 6,
        slug: "brief",
        number: "06",
        title: "The home, in one screen",
        subtitle: "Material facts, no marketing",
        caption: "Designed to read like a quiet brief.",
      },
      {
        id: 7,
        slug: "kyc",
        number: "07",
        title: "Verify, once",
        subtitle: "Identity + source of funds",
        caption: "Done once for the whole network.",
      },
      {
        id: 8,
        slug: "fractions",
        number: "08",
        title: "Pick your share",
        subtitle: "One left: Pine",
        caption: "Three taken, one open. Premium fraction with peak rotation.",
      },
    ],
  },
  {
    number: "02",
    name: "Ownership & legal",
    description: "Sign the GK + co-ownership SPA inside the phone.",
    frames: [
      {
        id: 9,
        slug: "legal",
        number: "09",
        title: "Sign the structure",
        subtitle: "Japanese GK + SPA",
        caption: "ROFR baked into the title, not bolted on.",
      },
      {
        id: 10,
        slug: "intake-design",
        number: "10",
        title: "How you live",
        subtitle: "Voice + chat capture",
        caption: "Becomes the brief for architect and build.",
      },
      {
        id: 11,
        slug: "scenarios",
        number: "11",
        title: "Pick a direction",
        subtitle: "4 scenarios · 38s",
        caption: "Budget · delivery · risk packaged.",
      },
      {
        id: 12,
        slug: "design",
        number: "12",
        title: "Co-create the home",
        subtitle: "Onsen — indoor or outdoor?",
        caption: "Real floor plan. Group votes.",
      },
    ],
  },
  {
    number: "03",
    name: "Build & agent",
    description: "Construction is live. Agent surfaces only what needs you.",
    frames: [
      {
        id: 13,
        slug: "build",
        number: "13",
        title: "Live from site",
        subtitle: "Day 218 · 68% to delivery",
        caption: "Six stages. Live cam available.",
      },
      {
        id: 14,
        slug: "agent",
        number: "14",
        title: "Background notifications",
        subtitle: "Lock screen, weekly digest",
        caption: "Only surfaces what truly needs you.",
      },
      {
        id: 15,
        slug: "decision",
        number: "15",
        title: "One-tap approve",
        subtitle: "Cedar shipment delayed",
        caption: "Manage by decision, not detail.",
      },
      {
        id: 16,
        slug: "handover",
        number: "16",
        title: "Keys, in app",
        subtitle: "Day of completion",
        caption: "Six lines, then keys.",
      },
    ],
  },
  {
    number: "04",
    name: "Life & exit",
    description: "Calendar, ops, concierge — and an exit that's a feature.",
    frames: [
      {
        id: 17,
        slug: "calendar",
        number: "17",
        title: "Fair rotation",
        subtitle: "12 weeks per year",
        caption: "Black = your week. Rust = peak. Beige = co-owners.",
      },
      {
        id: 18,
        slug: "operate",
        number: "18",
        title: "Ops + concierge",
        subtitle: "Six-tile dashboard + Tomoko",
        caption: "Ops above. Concierge below — book activities in one tap.",
      },
      {
        id: 19,
        slug: "transfer",
        number: "19",
        title: "Sell · gift · hold",
        subtitle: "Indicative valuation",
        caption: "Exit is a feature. ROFR for co-owners.",
      },
      {
        id: 20,
        slug: "closed",
        number: "20",
        title: "Done in 14 days",
        subtitle: "Transfer settled",
        caption: "KYC and history follow into the next project.",
      },
    ],
  },
  {
    number: "05",
    name: "Network & growth",
    description: "Owner becomes a node. Curated invites replace marketplaces.",
    frames: [
      {
        id: 21,
        slug: "portal",
        number: "21",
        title: "Your home base",
        subtitle: "Owner · Tier II",
        caption: "Project, tier, curated invites in one screen.",
      },
      {
        id: 22,
        slug: "refer",
        number: "22",
        title: "Compose an invite",
        subtitle: "Pick place, person, perk",
        caption: "Curated, not viral. Every invite is vouched.",
      },
      {
        id: 23,
        slug: "received",
        number: "23",
        title: "Friend opens it",
        subtitle: "Personal note over real photo",
        caption: "Not an email blast.",
      },
      {
        id: 24,
        slug: "network",
        number: "24",
        title: "The wider map",
        subtitle: "12 places · Snow · Water · Wild",
        caption: "Pagano active. Next places loaded with KYC carried.",
      },
    ],
  },
  {
    number: "06",
    name: "Product Layer",
    description: "Copilot sells the tool. Autopilot sells the work.",
    frames: [
      {
        id: 25,
        slug: "autopilot",
        number: "25",
        title: "Copilot & Autopilot",
        subtitle: "Legal · Tax · Search · Advisor · Financing",
        caption: "The subscription layer that turns re:Fourma into an ARR company.",
      },
      {
        id: 26,
        slug: "agent-memory",
        number: "26",
        title: "What your agent knows",
        subtitle: "Preferences · Decisions · Status",
        caption: "Stored once. Used across every project, every decision. The data moat.",
      },
      {
        id: 27,
        slug: "how-it-works",
        number: "27",
        title: "How it works",
        subtitle: "AI executes · Human checks · You approve",
        caption: "Every Autopilot product has a licensed human in the loop.",
      },
      {
        id: 28,
        slug: "next-project",
        number: "28",
        title: "Your next project",
        subtitle: "KYC carried · Brief ready · Priority access",
        caption: "Second project is faster than the first. The flywheel in one screen.",
      },
    ],
  },
];

// Helper: get all frames flat
export const ALL_FRAMES: Frame[] = CHAPTERS.flatMap((c) => c.frames);

// Helper: find frame by id
export function getFrameById(id: number): Frame | undefined {
  return ALL_FRAMES.find((f) => f.id === id);
}

// Helper: find chapter for frame
export function getChapterForFrame(id: number): Chapter | undefined {
  return CHAPTERS.find((c) => c.frames.some((f) => f.id === id));
}

// Helper: total frame count
export const TOTAL_FRAMES = ALL_FRAMES.length;
