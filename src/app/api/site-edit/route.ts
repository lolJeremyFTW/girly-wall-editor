import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { currentConfig, changes } = await req.json();

    // Validate that changes only contain allowed fields
    const allowedFields = [
      "theme",
      "defaultFonts",
      "canvasDefaults",
      "quoteCategories",
      "chatbotPersonality",
    ];

    const filteredChanges: Record<string, unknown> = {};
    for (const key of Object.keys(changes)) {
      if (allowedFields.includes(key)) {
        filteredChanges[key] = changes[key];
      }
    }

    if (Object.keys(filteredChanges).length === 0) {
      return NextResponse.json(
        { error: "No valid changes provided" },
        { status: 400 }
      );
    }

    const newVersion = (currentConfig?.version || 0) + 1;

    return NextResponse.json({
      success: true,
      version: newVersion,
      appliedChanges: filteredChanges,
    });
  } catch (error) {
    console.error("Site edit error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Site edit failed" },
      { status: 500 }
    );
  }
}
