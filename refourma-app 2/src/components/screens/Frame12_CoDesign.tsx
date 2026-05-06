"use client";

import { useState } from "react";
import { StatusBar } from "@/components/phone/PhoneFrame";
import { Canvas, NavRow, Eyebrow, CTA } from "@/components/phone/Atoms";

const FLOORPLAN_PP01 = "/images/floorplan-pp01.jpg";
const FLOORPLAN_PP00 = "/images/floorplan-pp00.jpg";

type VoteOption = {
  id: string;
  name: string;
  votes: number;
  total: number;
};

type VoteScreen = {
  id: string;
  number: string;
  question: string;
  questionEm: string;
  floorplan: string;
  markerPos: { top: string; right: string };
  tag: string;
  options: VoteOption[];
};

const VOTES: VoteScreen[] = [
  {
    id: "onsen",
    number: "Vote 2 / 4",
    question: "Onsen —",
    questionEm: "indoor or outdoor?",
    floorplan: FLOORPLAN_PP01,
    markerPos: { top: "50%", right: "28%" },
    tag: "PP01 · Onsen wing",
    options: [
      { id: "outdoor", name: "Outdoor", votes: 2, total: 4 },
      { id: "indoor", name: "Indoor + skylight", votes: 1, total: 4 },
    ],
  },
  {
    id: "floor",
    number: "Vote 3 / 4",
    question: "Common floor —",
    questionEm: "tatami, cedar, or stone?",
    floorplan: FLOORPLAN_PP00,
    markerPos: { top: "45%", right: "42%" },
    tag: "PP00 · Living + dining",
    options: [
      { id: "tatami", name: "Tatami warm", votes: 1, total: 4 },
      { id: "cedar", name: "Cedar planks", votes: 2, total: 4 },
      { id: "stone", name: "Stone polished", votes: 0, total: 4 },
    ],
  },
];

export function Frame12_CoDesign() {
  const [activeVote, setActiveVote] = useState<string>("onsen");
  // Track user votes per vote-screen
  const [userVotes, setUserVotes] = useState<Record<string, string | null>>({
    onsen: null,
    floor: null,
  });

  const current = VOTES.find((v) => v.id === activeVote)!;
  const userVoted = userVotes[activeVote];

  // Apply user's vote visually if they voted on this screen
  const optionsToShow = current.options.map((o) => ({
    ...o,
    votes: userVoted === o.id ? o.votes + 1 : o.votes,
  }));

  const handleVote = (optionId: string) => {
    setUserVotes((prev) => ({
      ...prev,
      [activeVote]: prev[activeVote] === optionId ? null : optionId,
    }));
  };

  return (
    <>
      <StatusBar />
      <Canvas>
        <NavRow back="←  N-04" meta={current.number.toUpperCase()} />

        {/* Vote tabs */}
        <div className="mb-[12px] flex gap-[1px] overflow-hidden rounded-[6px] bg-[var(--color-line)] p-[1px]">
          {VOTES.map((v) => (
            <button
              key={v.id}
              onClick={() => setActiveVote(v.id)}
              className={`flex-1 rounded-[5px] px-[8px] py-[6px] text-[9px] uppercase tracking-[0.08em] transition-colors ${
                activeVote === v.id
                  ? "bg-[var(--color-ink)] text-[var(--color-bone)]"
                  : "bg-white text-[var(--color-ink-mid)]"
              }`}
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {v.id === "onsen" ? "Onsen" : "Floor"}
              {userVotes[v.id] && (
                <span className={activeVote === v.id ? "ml-[4px] text-[var(--color-gold)]" : "ml-[4px] text-[var(--color-rust)]"}>✓</span>
              )}
            </button>
          ))}
        </div>

        <Eyebrow>Co-design · {current.number}</Eyebrow>
        <h2
          className="mb-[10px] text-[16px] font-light leading-[1.1] tracking-[-0.02em] text-[var(--color-ink)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {current.question} <em style={{ fontStyle: "italic" }}>{current.questionEm}</em>
        </h2>

        {/* Real floor plan with marker */}
        <div
          className="relative mb-[10px] h-[120px] overflow-hidden rounded-[10px] border border-[var(--color-line-soft)]"
          style={{
            backgroundImage: `url(${current.floorplan})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute h-[14px] w-[14px] rounded-full bg-[var(--color-rust)] animate-pulse-dot"
            style={{
              top: current.markerPos.top,
              right: current.markerPos.right,
              boxShadow: "0 0 0 4px rgba(184,69,31,0.3)",
            }}
          />
          <span
            className="absolute bottom-[8px] left-[8px] rounded-[4px] bg-black/85 px-[8px] py-[3px] text-[8px] uppercase tracking-[0.1em] text-[var(--color-bone)] backdrop-blur-sm"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {current.tag}
          </span>
        </div>

        {/* Vote bars */}
        <div className="mb-[10px] flex flex-col gap-[5px]">
          {optionsToShow.map((o) => (
            <VoteBar
              key={o.id}
              option={o}
              voted={userVoted === o.id}
              onClick={() => handleVote(o.id)}
            />
          ))}
        </div>

        <CTA variant="rust">
          {userVoted
            ? `Vote ${optionsToShow.find((o) => o.id === userVoted)!.name.toLowerCase()}`
            : "Skip vote"}
        </CTA>
      </Canvas>
    </>
  );
}

function VoteBar({
  option,
  voted,
  onClick,
}: {
  option: VoteOption;
  voted: boolean;
  onClick: () => void;
}) {
  const pct = (option.votes / option.total) * 100;
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-[10px] rounded-[10px] border px-[12px] py-[8px] text-left transition-colors ${
        voted
          ? "border-[var(--color-rust)] bg-white"
          : "border-[var(--color-line-soft)] bg-white hover:border-[var(--color-ink)]"
      }`}
    >
      <div className="flex-1 min-w-0">
        <div
          className="text-[7.5px] uppercase tracking-[0.08em] text-[var(--color-muted-strong)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {option.name}
          {voted && <span className="ml-[6px] text-[var(--color-rust)]">· you</span>}
        </div>
        <div
          className="text-[10px] font-medium text-[var(--color-ink)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {option.votes} of {option.total} owners
        </div>
      </div>
      <div className="h-[4px] w-[60px] flex-shrink-0 overflow-hidden rounded-[2px] bg-[var(--color-line)]">
        <div
          className={`h-full ${voted ? "bg-[var(--color-rust)]" : "bg-[var(--color-ink)]"}`}
          style={{ width: `${pct}%`, transition: "width 0.4s ease" }}
        />
      </div>
      <span
        className="text-[8.5px] text-[var(--color-ink)]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {Math.round(pct)}%
      </span>
    </button>
  );
}
