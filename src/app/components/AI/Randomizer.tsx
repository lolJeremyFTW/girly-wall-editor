"use client";

import { useState } from "react";
import { ELEMENTS, FONTS } from "@/app/lib/elements";
import { CanvasHandle } from "../Editor/Canvas";

interface RandomizerProps {
  canvasRef: React.RefObject<CanvasHandle | null>;
  onBackgroundChange: (color: string) => void;
}

const QUOTES = [
  "Choose\nYourself,\nEvery Day.",
  "Be Still\n& Know",
  "Bloom\nWhere You\nAre Planted",
  "She Believed\nShe Could,\nSo She Did",
  "You Are\nEnough,\nAlways.",
  "Grow Through\nWhat You\nGo Through",
  "Let Your\nHeart Be\nYour Guide",
  "Dream\nWithout Fear",
  "Be The\nEnergy You\nWant To Attract",
  "Stars Can't\nShine Without\nDarkness",
  "Your Story\nIs Worth\nTelling",
  "Inhale\nConfidence,\nExhale Doubt",
];

const SUBTITLES = [
  "A L W A Y S   R E M E M B E R",
  "N E V E R   F O R G E T",
  "K E E P   G O I N G",
  "B E L I E V E",
  "Y O U   M A T T E R",
  "S T A Y   S O F T",
];

const TAGLINES = [
  "you deserve your own love first",
  "be gentle with yourself today",
  "your light is needed in this world",
  "every day is a fresh beginning",
  "let kindness guide your way",
  "breathe in peace, breathe out worry",
];

const CAPTIONS = [
  "s e l f   l o v e   c o l l e c t i o n",
  "d a i l y   a f f i r m a t i o n s",
  "g r o w   w i t h   g r a c e",
  "w a l l   a r t   s e r i e s",
  "i n s p i r e d   l i v i n g",
];

const BG_COLORS = ["#f5ece0", "#fdf6f0", "#f0e4d4", "#fff8f0", "#f0dcc8"];

function pick<T>(arr: T[]): T { return arr[Math.floor(Math.random() * arr.length)]; }
function pickN<T>(arr: T[], n: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}

export default function Randomizer({ canvasRef, onBackgroundChange }: RandomizerProps) {
  const [isRandomizing, setIsRandomizing] = useState(false);

  const randomize = async () => {
    setIsRandomizing(true);
    const canvas = canvasRef.current;
    if (!canvas) { setIsRandomizing(false); return; }

    canvas.clearCanvas();

    // Background
    const bg = pick(BG_COLORS);
    canvas.setBackgroundColor(bg);
    onBackgroundChange(bg);

    // Layout: structured poster like the example
    // 1. Large background circle in upper-center
    canvas.addSvgElement(`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="45" fill="#f0e4d4" opacity="0.45"/></svg>`);

    // 2. Frame border
    canvas.addSvgElement(`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="94" height="134" rx="1" fill="none" stroke="#c4a888" stroke-width="0.6"/></svg>`);

    // 3. Corner leaf clusters (top-left + top-right)
    const clusters = ELEMENTS.filter(e => e.tags.includes("cluster"));
    if (clusters.length >= 2) {
      const picks = pickN(clusters, 2);
      canvas.addSvgElement(picks[0].svg);
      await delay(80);
      canvas.addSvgElement(picks[1].svg);
    }

    await delay(80);

    // 4. Cute animal faces (2-3)
    const cuteAnimals = ELEMENTS.filter(e => e.category === "cute");
    const animalPicks = pickN(cuteAnimals, 2 + Math.floor(Math.random() * 2));
    for (const animal of animalPicks) {
      canvas.addSvgElement(animal.svg);
      await delay(60);
    }

    // 5. Vertical accent lines
    canvas.addSvgElement(`<svg viewBox="0 0 10 100" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="0" x2="3" y2="100" stroke="#5a4030" stroke-width="1.2"/><line x1="7" y1="0" x2="7" y2="100" stroke="#5a4030" stroke-width="1.2"/></svg>`);

    await delay(60);

    // 6. Divider lines
    const divider = pick(ELEMENTS.filter(e => e.category === "dividers" && !e.tags.includes("vertical")));
    if (divider) canvas.addSvgElement(divider.svg);

    await delay(60);

    // 7. Text hierarchy - subtitle
    const subtitle = pick(SUBTITLES);
    canvas.addText(subtitle, {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: 18,
      fill: "#8b6e50",
      fontWeight: "400",
      textAlign: "center",
    });

    await delay(60);

    // 8. Main quote heading
    let quote = pick(QUOTES);
    try {
      const res = await fetch("/api/generate-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category: "self-love" }),
      });
      const data = await res.json();
      if (data.quote) {
        // Format into multi-line heading (max ~4 words per line)
        const words = data.quote.split(" ");
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
        quote = lines.join("\n");
      }
    } catch { /* use fallback */ }

    const headingFont = pick([
      "'Playfair Display', serif",
      "'Cormorant Garamond', serif",
      "'Lora', serif",
    ]);
    canvas.addText(quote, {
      fontFamily: headingFont,
      fontSize: 68 + Math.floor(Math.random() * 20),
      fill: "#4a3728",
      fontWeight: "600",
      textAlign: "center",
    });

    await delay(60);

    // 9. Dot accent
    canvas.addSvgElement(`<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="5" r="3" fill="#8b6e50"/></svg>`);

    await delay(60);

    // 10. Tagline
    canvas.addText(pick(TAGLINES), {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 24,
      fill: "#6b5040",
      fontStyle: "italic",
      textAlign: "center",
    });

    await delay(60);

    // 11. Dashed line separator
    canvas.addSvgElement(`<svg viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="5" x2="190" y2="5" stroke="#b8a070" stroke-width="1.2" stroke-dasharray="6,4"/></svg>`);

    await delay(60);

    // 12. Bottom quote
    canvas.addText(pick(TAGLINES), {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 20,
      fill: "#6b5040",
      fontStyle: "italic",
      textAlign: "center",
      charSpacing: 200,
    });

    await delay(60);

    // 13. Bottom dots
    const dots = pick(ELEMENTS.filter(e => e.tags.includes("dots") && e.tags.includes("row")));
    if (dots) canvas.addSvgElement(dots.svg);

    await delay(60);

    // 14. Caption
    canvas.addText(pick(CAPTIONS), {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: 14,
      fill: "#c4a888",
      fontWeight: "300",
      textAlign: "center",
    });

    setIsRandomizing(false);
  };

  return (
    <div className="px-3 py-3">
      <h3 className="text-sm font-semibold text-foreground/80 mb-2">Randomizer</h3>
      <p className="text-xs text-foreground/40 mb-2">
        Generate a poster layout with elements, text hierarchy, and an inspiring quote - just like the example
      </p>
      <button
        onClick={randomize}
        disabled={isRandomizing}
        className="w-full py-2.5 text-foreground text-sm font-medium rounded-lg transition-all disabled:opacity-50 hover:shadow-md cursor-pointer border-none"
        style={{ background: "linear-gradient(135deg, #d4a878, #c49080)" }}
      >
        {isRandomizing ? "Creating your poster..." : "Generate Poster"}
      </button>
    </div>
  );
}

function delay(ms: number) { return new Promise(r => setTimeout(r, ms)); }
