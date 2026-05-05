// ─────────────────────────────────────────────────────────────────
// Translations for Frame 01 (Intake)
// Add more languages by extending the type and adding entries
// ─────────────────────────────────────────────────────────────────

export type Lang = "EN" | "JA" | "ZH";

export const TRANSLATIONS = {
  EN: {
    headline: "Find a place that",
    headlineEm: "actually fits.",
    subhead:
      "Describe your life, your rhythm, your budget. The agent scans 12 places across Niseko, Hakuba, Revelstoke.",
    promptLabel: "◆ Tell the agent",
    promptText:
      "A snow home for 4 weeks a year, family of five, somewhere I can ski-out. Around €3M for a fraction.",
    quickLabel: "Or start here",
    chips: {
      snow: "Snow",
      water: "Water",
      wild: "Wild",
      family: "By family",
      yield: "By yield",
    },
    nav: {
      brand: "RE:FOURMA",
      agent: "AGENT",
      listed: "2,184 LISTED",
    },
  },
  JA: {
    headline: "本当に",
    headlineEm: "あなたに合う場所を。",
    subhead:
      "あなたの暮らし、リズム、予算をお聞かせください。エージェントがニセコ・白馬・レベルストークの12軒を検索します。",
    promptLabel: "◆ エージェントに伝える",
    promptText:
      "年4週間、家族5人で、スキーアウトできる雪の家。1区画につき約3百万ユーロ。",
    quickLabel: "または、ここから",
    chips: {
      snow: "雪",
      water: "水",
      wild: "自然",
      family: "家族向け",
      yield: "利回り",
    },
    nav: {
      brand: "RE:FOURMA",
      agent: "エージェント",
      listed: "2,184件",
    },
  },
  ZH: {
    headline: "找到",
    headlineEm: "真正适合你的地方。",
    subhead:
      "描述你的生活、节奏与预算。代理人将为你扫描尼塞科、白马、雷夫尔斯托克的12处地产。",
    promptLabel: "◆ 告诉代理人",
    promptText:
      "全年4周使用,五口之家,可滑雪进出。每份产权约300万欧元。",
    quickLabel: "或从这里开始",
    chips: {
      snow: "雪",
      water: "水",
      wild: "野",
      family: "适合家庭",
      yield: "按收益",
    },
    nav: {
      brand: "RE:FOURMA",
      agent: "代理人",
      listed: "2,184处",
    },
  },
} as const;

export const LANG_LABELS: Record<Lang, string> = {
  EN: "EN",
  JA: "JA",
  ZH: "中文",
};
