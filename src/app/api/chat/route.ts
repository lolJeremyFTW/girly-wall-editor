import { NextRequest, NextResponse } from "next/server";
import { callMiniMax, buildSystemPrompt, ChatMessage } from "@/app/lib/minimax";

export async function POST(req: NextRequest) {
  try {
    const { messages, siteConfig } = await req.json();

    const systemPrompt = buildSystemPrompt(siteConfig || {});
    const fullMessages: ChatMessage[] = [
      { role: "system", content: systemPrompt },
      ...messages,
    ];

    const response = await callMiniMax(fullMessages);

    return NextResponse.json({ message: response });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Chat failed" },
      { status: 500 }
    );
  }
}
