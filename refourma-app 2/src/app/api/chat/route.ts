import { NextRequest, NextResponse } from "next/server";

// ─────────────────────────────────────────────────────────────────
// re:Fourma Buyer's Analyst — system prompt
// Defines Claude's persona for the chat experience
// ─────────────────────────────────────────────────────────────────
const SYSTEM_PROMPT = `You are the re:Fourma Buyer's Analyst — a calm, editorial AI advisor for fractional ownership of premium second homes. You speak in short, confident sentences. No marketing fluff, no realtor language.

Context: re:Fourma is a network of 12 curated properties across Snow / Water / Wild categories. Currently active: N-04 Pagano in Niseko (Hanazono, Hokkaidō) — last fraction available, €4.0M for Pine, 12 weeks/year + peak rotation, Q4 2027 delivery. Other places in pipeline: N-07 Mori (Hakuba), W-05 Larch (Revelstoke), W-02 Cala (Mallorca).

Your job in this conversation:
1. Listen to what the user wants — family size, weeks per year, budget, snow/water/wild preference, must-haves.
2. Match against the 12 places. If Pagano fits, recommend it specifically and explain why in 2-3 sentences.
3. If they want something we don't have, be honest. Suggest the closest and note the gap.
4. Keep responses under 80 words. No bullet lists. Conversational tone.
5. Never invent properties. The 4 places above are the only ones you discuss.

Editorial style: short sentences, sensory specifics over adjectives ("Yōtei in the window" not "stunning views"), confident but not pushy. End with a clear next step.`;

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message required" }, { status: 400 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {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
      // Graceful fallback: scripted reply when no API key
      return NextResponse.json({
        reply:
          "I'd recommend Pagano in Niseko — last fraction, ski-out, family of five. Pine fraction is €4.0M, 12 weeks per year. Want to see the place?",
        fallback: true,
      });
    }

    // Build messages array (chat history + new message)
    const messages = [
      ...(Array.isArray(history) ? history : []),
      { role: "user", content: message },
    ];

    // Call Anthropic API directly (no SDK to keep deploy simple)
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 300,
        system: SYSTEM_PROMPT,
        messages,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Anthropic API error:", response.status, errText);
      return NextResponse.json(
        {
          reply:
            "Sorry — I'm having trouble connecting. Please try again in a moment.",
          error: true,
        },
        { status: 200 } // return 200 so the UI shows the message
      );
    }

    const data = await response.json();
    const reply = data.content?.[0]?.text || "I didn't catch that. Could you rephrase?";

    return NextResponse.json({ reply, fallback: false });
  } catch (error) {
    console.error("Chat handler error:", error);
    return NextResponse.json(
      {
        reply: "Something went wrong. Please try again.",
        error: true,
      },
      { status: 200 }
    );
  }
}
