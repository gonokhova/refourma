import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: Request) {
  const { message, memory } = await req.json();

  const response = await client.messages.create({
    model: "claude-opus-4-5",
    max_tokens: 1024,
    system: `You are the Buyer's Analyst for re:Fourma — an AI agent 
    helping clients find and buy fractional real estate in Japan and Canada.
    
    What you know about this client:
    ${JSON.stringify(memory)}
    
    Be concise, specific, and use the client's preferences in every response.
    Always respond in the same language the client writes in.`,
    messages: [{ role: "user", content: message }],
  });

  const text = response.content[0].type === "text" 
    ? response.content[0].text 
    : "";

  return Response.json({ reply: text });
}
