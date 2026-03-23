"use client";

import { useState } from "react";
import { CanvasHandle } from "../Editor/Canvas";
import { SiteConfig } from "@/app/lib/versioning";

interface QuoteGeneratorProps {
  canvasRef: React.RefObject<CanvasHandle | null>;
  siteConfig: SiteConfig;
}

export default function QuoteGenerator({ canvasRef, siteConfig }: QuoteGeneratorProps) {
  const [category, setCategory] = useState("self-love");
  const [loading, setLoading] = useState(false);
  const [lastQuote, setLastQuote] = useState("");

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
        setLastQuote(data.quote);
        canvasRef.current?.addText(data.quote, {
          fontSize: 28,
          fontFamily: "'Playfair Display', serif",
          textAlign: "center",
          fill: siteConfig.theme.text || "#4a3728",
        });
      }
    } catch (err) {
      console.error("Quote generation failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const addLastQuote = () => {
    if (lastQuote) {
      canvasRef.current?.addText(lastQuote, {
        fontSize: 28,
        fontFamily: "'Playfair Display', serif",
        textAlign: "center",
      });
    }
  };

  return (
    <div className="px-3 py-3">
      <h3 className="text-sm font-semibold text-foreground/80 mb-2">AI Quotes</h3>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full px-2 py-1.5 text-sm rounded-lg border border-pink/30 bg-cream/50
                   focus:outline-none focus:border-pink mb-2 cursor-pointer"
      >
        {siteConfig.quoteCategories.map((cat) => (
          <option key={cat} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1).replace("-", " ")}
          </option>
        ))}
      </select>

      <button
        onClick={generateQuote}
        disabled={loading}
        className="w-full py-2 bg-pink hover:bg-pink-dark text-foreground text-sm font-medium
                   rounded-lg transition-all disabled:opacity-50 cursor-pointer border-none"
      >
        {loading ? "Generating..." : "Generate Quote"}
      </button>

      {lastQuote && (
        <div className="mt-2 p-2 bg-cream/50 rounded-lg">
          <p className="text-xs text-foreground/70 italic leading-relaxed">&ldquo;{lastQuote}&rdquo;</p>
          <button
            onClick={addLastQuote}
            className="mt-1 text-[10px] text-pink-dark hover:underline cursor-pointer border-none bg-transparent"
          >
            Add to canvas again
          </button>
        </div>
      )}
    </div>
  );
}
