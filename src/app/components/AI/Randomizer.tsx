"use client";

import { useState } from "react";
import { ELEMENTS, FONTS, COLOR_PALETTES } from "@/app/lib/elements";
import { CanvasHandle } from "../Editor/Canvas";

interface RandomizerProps {
  canvasRef: React.RefObject<CanvasHandle | null>;
  onBackgroundChange: (color: string) => void;
}

const FALLBACK_QUOTES = [
  "Choose yourself, every day",
  "You are enough, always",
  "Bloom where you are planted",
  "Be the energy you want to attract",
  "She believed she could, so she did",
  "Grow through what you go through",
  "Your story is worth telling",
  "Be gentle with yourself",
  "Stars can't shine without darkness",
  "You deserve your own love first",
  "Let your heart be your compass",
  "Dream without fear, love without limits",
  "Be a voice, not an echo",
  "The sun will rise and we will try again",
  "Inhale confidence, exhale doubt",
];

export default function Randomizer({ canvasRef, onBackgroundChange }: RandomizerProps) {
  const [isRandomizing, setIsRandomizing] = useState(false);

  const randomize = async () => {
    setIsRandomizing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Clear canvas
    canvas.clearCanvas();

    // Random warm background from cream/earthy palettes
    const bgOptions = ["#f5ece0", "#fdf6f0", "#f0e4d4", "#fff8f0", "#f0dcc8", "#e8dcc8"];
    const bgColor = bgOptions[Math.floor(Math.random() * bgOptions.length)];
    canvas.setBackgroundColor(bgColor);
    onBackgroundChange(bgColor);

    // Add 2-4 random decorative elements
    const count = 2 + Math.floor(Math.random() * 3);
    const shuffled = [...ELEMENTS].sort(() => Math.random() - 0.5);
    for (let i = 0; i < Math.min(count, shuffled.length); i++) {
      canvas.addSvgElement(shuffled[i].svg);
    }

    // Try to get AI quote, fallback to local quotes
    let quote = FALLBACK_QUOTES[Math.floor(Math.random() * FALLBACK_QUOTES.length)];
    try {
      const res = await fetch("/api/generate-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category: "self-love" }),
      });
      const data = await res.json();
      if (data.quote) quote = data.quote;
    } catch {
      // Use fallback quote
    }

    // Add quote text with random font
    const font = FONTS[Math.floor(Math.random() * FONTS.length)];
    canvas.addText(quote, {
      fontSize: 32 + Math.floor(Math.random() * 20),
      fontFamily: font.style,
      textAlign: "center",
      fill: "#4a3728",
    });

    setIsRandomizing(false);
  };

  return (
    <div className="px-3 py-3">
      <h3 className="text-sm font-semibold text-foreground/80 mb-2">Randomizer</h3>
      <p className="text-xs text-foreground/50 mb-2">
        Generate a random design with elements, colors, and an inspiring quote
      </p>
      <button
        onClick={randomize}
        disabled={isRandomizing}
        className="w-full py-2.5 text-foreground text-sm font-medium
                   rounded-lg transition-all disabled:opacity-50 hover:shadow-md cursor-pointer border-none"
        style={{ background: "linear-gradient(135deg, #d4a878, #c49080)" }}
      >
        {isRandomizing ? "Creating magic..." : "Randomize Design"}
      </button>
    </div>
  );
}
