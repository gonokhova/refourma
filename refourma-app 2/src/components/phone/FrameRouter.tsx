"use client";

import { useNav } from "@/lib/nav";
import { Frame00_Cover } from "@/components/screens/Frame00_Cover";
import { Frame01_Intake } from "@/components/screens/Frame01_Intake";
import { Frame02_Match } from "@/components/screens/Frame02_Match";
import { Frame03_Read } from "@/components/screens/Frame03_Read";
import { Frame04_Choose } from "@/components/screens/Frame04_Choose";
import { Frame05_Discover } from "@/components/screens/Frame05_Discover";
import { Frame06_Brief } from "@/components/screens/Frame06_Brief";
import { Frame07_KYC } from "@/components/screens/Frame07_KYC";
import { Frame08_Fractions } from "@/components/screens/Frame08_Fractions";
import { Frame09_Legal } from "@/components/screens/Frame09_Legal";
import { Frame10_IntakeDesign } from "@/components/screens/Frame10_IntakeDesign";
import { Frame11_Scenarios } from "@/components/screens/Frame11_Scenarios";
import { Frame12_CoDesign } from "@/components/screens/Frame12_CoDesign";
import { Frame13_Build } from "@/components/screens/Frame13_Build";
import { Frame14_Agent } from "@/components/screens/Frame14_Agent";
import { Frame15_Decision } from "@/components/screens/Frame15_Decision";
import { Frame16_Handover } from "@/components/screens/Frame16_Handover";
import { Frame17_Calendar } from "@/components/screens/Frame17_Calendar";
import { Frame18_Operate } from "@/components/screens/Frame18_Operate";
import { Frame19_Transfer } from "@/components/screens/Frame19_Transfer";
import { Frame20_Closed } from "@/components/screens/Frame20_Closed";
import { Frame21_Portal } from "@/components/screens/Frame21_Portal";
import { Frame22_Refer } from "@/components/screens/Frame22_Refer";
import { Frame23_Received } from "@/components/screens/Frame23_Received";
import { Frame24_Network } from "@/components/screens/Frame24_Network";
import FrameAutopilot from "@/components/screens/FrameAutopilot";
import { Frame26_AgentMemory } from "@/components/screens/Frame26_AgentMemory";
import { Frame27_HowItWorks } from "@/components/screens/Frame27_HowItWorks";
import { Frame28_NextProject } from "@/components/screens/Frame28_NextProject";

/**
 * Renders the current frame inside the phone screen.
 * All 24 frames are now connected.
 */
export function FrameRouter() {
  const { currentFrame } = useNav();

  switch (currentFrame) {
    case 0: return <Frame00_Cover />;
    case 1: return <Frame01_Intake />;
    case 2: return <Frame02_Match />;
    case 3: return <Frame03_Read />;
    case 4: return <Frame04_Choose />;
    case 5: return <Frame05_Discover />;
    case 6: return <Frame06_Brief />;
    case 7: return <Frame07_KYC />;
    case 8: return <Frame08_Fractions />;
    case 9: return <Frame09_Legal />;
    case 10: return <Frame10_IntakeDesign />;
    case 11: return <Frame11_Scenarios />;
    case 12: return <Frame12_CoDesign />;
    case 13: return <Frame13_Build />;
    case 14: return <Frame14_Agent />;
    case 15: return <Frame15_Decision />;
    case 16: return <Frame16_Handover />;
    case 17: return <Frame17_Calendar />;
    case 18: return <Frame18_Operate />;
    case 19: return <Frame19_Transfer />;
    case 20: return <Frame20_Closed />;
    case 21: return <Frame21_Portal />;
    case 22: return <Frame22_Refer />;
    case 23: return <Frame23_Received />;
    case 24: return <Frame24_Network />;
    case 25: return <FrameAutopilot />;
    case 26: return <Frame26_AgentMemory />;
    case 27: return <Frame27_HowItWorks />;
    case 28: return <Frame28_NextProject />;
    default:
      return <PlaceholderFrame frameId={currentFrame} />;
  }
}

function PlaceholderFrame({ frameId }: { frameId: number }) {
  const { prev, next, canPrev, canNext } = useNav();
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[var(--color-paper-2)] px-[24px] text-center">
      <div
        className="mb-[8px] text-[10px] uppercase tracking-[0.16em] text-[var(--color-muted-strong)]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        Frame {String(frameId).padStart(2, "0")}
      </div>
      <div
        className="mb-[24px] text-[20px] font-light leading-[1.1] text-[var(--color-ink)]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Coming soon.
      </div>
      <div className="flex gap-[8px]">
        <button
          onClick={prev}
          disabled={!canPrev}
          className="rounded-full border border-[var(--color-line)] bg-white px-[12px] py-[6px] text-[10px] disabled:opacity-30"
        >
          ← Prev
        </button>
        <button
          onClick={next}
          disabled={!canNext}
          className="rounded-full bg-[var(--color-ink)] px-[12px] py-[6px] text-[10px] text-[var(--color-bone)] disabled:opacity-30"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
