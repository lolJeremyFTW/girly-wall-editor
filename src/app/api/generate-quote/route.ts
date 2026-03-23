import { NextRequest, NextResponse } from "next/server";
import { callMiniMax } from "@/app/lib/minimax";

export async function POST(req: NextRequest) {
  try {
    const { category } = await req.json();

    const prompt = `Generate a short, beautiful, aesthetic quote about "${category || "self-love"}".
The quote should be:
- 1-2 sentences max
- Poetic and inspiring
- Perfect for a wall art poster
- Not from any known author (create an original one)

Respond with ONLY the quote text, nothing else. No quotation marks.`;

    const response = await callMiniMax(
      [
        { role: "system", content: "You are a creative quote writer specializing in aesthetic, inspiring wall art quotes." },
        { role: "user", content: prompt },
      ],
      256
    );

    return NextResponse.json({ quote: response.trim() });
  } catch (error) {
    console.error("Quote generation error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Quote generation failed" },
      { status: 500 }
    );
  }
}
