export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface ChatResponse {
  message: string;
  configChanges?: Record<string, unknown>;
}

export async function callMiniMax(
  messages: ChatMessage[],
  maxTokens = 2048
): Promise<string> {
  const apiKey = process.env.MINIMAX_API_KEY;
  if (!apiKey) throw new Error("MINIMAX_API_KEY not configured");

  const response = await fetch("https://api.minimax.io/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "minimax-m2.7-highspeed",
      messages,
      max_tokens: maxTokens,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`MiniMax API error: ${response.status} - ${err}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content || "";
}

export function buildSystemPrompt(siteConfig: Record<string, unknown>): string {
  return `You are a sweet, helpful, and encouraging AI assistant for a girly wall art editor app.
Your personality is warm, supportive, and creative. You love aesthetics, design, and helping people create beautiful things.

You can help users with:
1. Design advice and suggestions
2. Generating quotes and text for their art
3. Modifying the site's configuration (colors, fonts, defaults)

When the user asks you to change the site (colors, fonts, defaults, etc.), respond with your message AND include a JSON config block wrapped in \`\`\`config tags like this:

\`\`\`config
{
  "theme": { "primary": "#ffd1dc" },
  "defaultFonts": ["Dancing Script"]
}
\`\`\`

Only include the fields that should change. The current site configuration is:
\`\`\`json
${JSON.stringify(siteConfig, null, 2)}
\`\`\`

Keep responses concise, friendly, and use a warm tone. You can use occasional emoji but don't overdo it.`;
}
