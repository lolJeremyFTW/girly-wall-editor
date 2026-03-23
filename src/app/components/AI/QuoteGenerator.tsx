"use client";

import { useState } from "react";
import { CanvasHandle } from "../Editor/Canvas";
import { SiteConfig } from "@/app/lib/versioning";

interface QuoteGeneratorProps {
  canvasRef: React.RefObject<CanvasHandle | null>;
  siteConfig: SiteConfig;
}

type QuoteStyle = "heading" | "italic" | "spaced" | "script";

const STYLES: { id: QuoteStyle; name: string; preview: string }[] = [
  { id: "heading", name: "Heading", preview: "Large bold serif" },
  { id: "italic", name: "Italic Body", preview: "Elegant italic" },
  { id: "spaced", name: "Spaced Caps", preview: "L E T T E R   S P A C E D" },
  { id: "script", name: "Script", preview: "Handwritten cursive" },
];

const STYLE_MAP: Record<QuoteStyle, Record<string, unknown>> = {
  heading: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 220,
    fill: "#4a3728",
    fontWeight: "600",
    textAlign: "center",
  },
  italic: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 80,
    fill: "#6b5040",
    fontStyle: "italic",
    textAlign: "center",
  },
  spaced: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 50,
    fill: "#8b6e50",
    fontWeight: "400",
    textAlign: "center",
    charSpacing: 500,
  },
  script: {
    fontFamily: "'Dancing Script', cursive",
    fontSize: 150,
    fill: "#8b5e3c",
    textAlign: "center",
  },
};

export default function QuoteGenerator({ canvasRef, siteConfig }: QuoteGeneratorProps) {
  const [category, setCategory] = useState("self-love");
  const [style, setStyle] = useState<QuoteStyle>("heading");
  const [loading, setLoading] = useState(false);
  const [lastQuote, setLastQuote] = useState("");

  const formatForStyle = (text: string, s: QuoteStyle): string => {
    if (s === "spaced") {
      return text.toLowerCase().split("").join(" ").replace(/  /g, "   ");
    }
    if (s === "heading") {
      // Break into multi-line heading
      const words = text.split(" ");
      const lines: string[] = [];
      let line = "";
      for (const word of words) {
        if (line && (line + " " + word).length > 15) {
          lines.push(line);
          line = word;
        } else {
          line = line ? line + " " + word : word;
        }
      }
      if (line) lines.push(line);
      return lines.join("\n");
    }
    return text;
  };

  const generateQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/generate-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category }),
      });
      const data = await res.json();
      if (data.quote) {
        const formatted = formatForStyle(data.quote, style);
        setLastQuote(data.quote);
        canvasRef.current?.addText(formatted, STYLE_MAP[style]);
      }
    } catch (err) {
      console.error("Quote generation failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const addLastQuote = (s: QuoteStyle) => {
    if (lastQuote) {
      const formatted = formatForStyle(lastQuote, s);
      canvasRef.current?.addText(formatted, STYLE_MAP[s]);
    }
  };

  return (
    <div className="px-3 py-3">
      <h3 className="text-sm font-semibold text-foreground/80 mb-2">AI Quotes</h3>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full px-2 py-1.5 text-sm rounded-lg border border-foreground/10 bg-cream/50
                   focus:outline-none focus:border-gold mb-2 cursor-pointer"
      >
        {siteConfig.quoteCategories.map((cat) => (
          <option key={cat} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1).replace("-", " ")}
          </option>
        ))}
      </select>

      {/* Style selector */}
      <div className="grid grid-cols-2 gap-1 mb-2">
        {STYLES.map((s) => (
          <button
            key={s.id}
            onClick={() => setStyle(s.id)}
            className={`px-2 py-1.5 text-[10px] rounded-lg border cursor-pointer transition-all ${
              style === s.id
                ? "border-gold bg-cream text-foreground font-medium"
                : "border-foreground/8 bg-transparent text-foreground/50 hover:border-foreground/20"
            }`}
          >
            <span className="block font-medium text-xs">{s.name}</span>
            <span className="text-foreground/30">{s.preview}</span>
          </button>
        ))}
      </div>

      <button
        onClick={generateQuote}
        disabled={loading}
        className="w-full py-2 text-foreground text-sm font-medium rounded-lg transition-all disabled:opacity-50 cursor-pointer border-none"
        style={{ backgroundColor: "#d4a878" }}
      >
        {loading ? "Generating..." : "Generate Quote"}
      </button>

      {lastQuote && (
        <div className="mt-2 p-2 bg-cream/50 rounded-lg">
          <p className="text-xs text-foreground/70 italic leading-relaxed">&ldquo;{lastQuote}&rdquo;</p>
          <div className="flex gap-1 mt-1.5 flex-wrap">
            {STYLES.map((s) => (
              <button
                key={s.id}
                onClick={() => addLastQuote(s.id)}
                className="text-[9px] px-1.5 py-0.5 rounded bg-foreground/5 hover:bg-foreground/10 text-foreground/50 cursor-pointer border-none"
              >
                + {s.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
