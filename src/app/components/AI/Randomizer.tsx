"use client";

import { useState } from "react";
import { ELEMENTS } from "@/app/lib/elements";
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
  "Dream\nWithout\nFear",
  "Be The Energy\nYou Want\nTo Attract",
  "Your Story\nIs Worth\nTelling",
];

const SUBTITLES = [
  "A L W A Y S   R E M E M B E R",
  "N E V E R   F O R G E T",
  "K E E P   G O I N G",
  "B E L I E V E   I N   Y O U",
  "Y O U   M A T T E R",
];

const TAGLINES = [
  "you deserve your own love first",
  "be gentle with yourself today",
  "every day is a fresh beginning",
  "let kindness guide your way",
];

const CAPTIONS = [
  "s e l f   l o v e   c o l l e c t i o n",
  "d a i l y   a f f i r m a t i o n s",
  "g r o w   w i t h   g r a c e",
  "w a l l   a r t   s e r i e s",
];

const BG = ["#f5ece0", "#fdf6f0", "#f0e4d4", "#fff8f0"];
function pick<T>(a: T[]): T { return a[Math.floor(Math.random() * a.length)]; }
function pickN<T>(a: T[], n: number): T[] { return [...a].sort(() => Math.random() - 0.5).slice(0, n); }
function delay(ms: number) { return new Promise(r => setTimeout(r, ms)); }

export default function Randomizer({ canvasRef, onBackgroundChange }: RandomizerProps) {
  const [isRandomizing, setIsRandomizing] = useState(false);

  const randomize = async () => {
    setIsRandomizing(true);
    const c = canvasRef.current;
    if (!c) { setIsRandomizing(false); return; }

    c.clearCanvas();
    const { width: W, height: H } = c.getSize();

    const bg = pick(BG);
    c.setBackgroundColor(bg);
    onBackgroundChange(bg);
    await delay(50);

    // 1. Big background circle - upper half
    c.addSvgElement(
      `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="#f0e4d4" opacity="0.45"/></svg>`,
      { left: W * 0.15, top: H * 0.04, scaleW: W * 0.7 }
    );
    await delay(60);

    // 2. Full poster frame
    c.addSvgElement(
      `<svg viewBox="0 0 248 351"><rect x="4" y="4" width="240" height="343" rx="2" fill="none" stroke="#c4a888" stroke-width="1.2"/></svg>`,
      { left: W * 0.04, top: H * 0.02, scaleW: W * 0.92 }
    );
    await delay(60);

    // 3. Corner leaf clusters
    const cls = pickN(ELEMENTS.filter(e => e.tags.includes("cluster")), 4);
    c.addSvgElement(cls[0].svg, { left: W * 0.05, top: H * 0.025, scaleW: W * 0.15 });
    await delay(40);
    c.addSvgElement(cls[1].svg, { left: W * 0.80, top: H * 0.025, scaleW: W * 0.15 });
    await delay(40);
    // Side accents
    c.addSvgElement((cls[2] || cls[0]).svg, { left: W * 0.82, top: H * 0.28, scaleW: W * 0.10 });
    await delay(40);
    c.addSvgElement((cls[3] || cls[1]).svg, { left: W * 0.04, top: H * 0.30, scaleW: W * 0.10 });
    await delay(40);

    // 4. Vertical accent lines
    const vl = `<svg viewBox="0 0 10 200"><line x1="3" y1="0" x2="3" y2="200" stroke="#5a4030" stroke-width="1.5"/><line x1="7" y1="0" x2="7" y2="200" stroke="#5a4030" stroke-width="1.5"/></svg>`;
    c.addSvgElement(vl, { left: W * 0.085, top: H * 0.03, scaleW: W * 0.015 });
    await delay(30);
    c.addSvgElement(vl, { left: W * 0.90, top: H * 0.03, scaleW: W * 0.015 });
    await delay(40);

    // 5. Top animal faces
    const animals = ELEMENTS.filter(e => e.category === "cute");
    const topA = pickN(animals, 3);
    c.addSvgElement(topA[0].svg, { left: W * 0.40, top: H * 0.06, scaleW: W * 0.10 });
    await delay(40);
    c.addSvgElement(topA[1].svg, { left: W * 0.18, top: H * 0.12, scaleW: W * 0.09 });
    await delay(40);
    c.addSvgElement(topA[2].svg, { left: W * 0.68, top: H * 0.12, scaleW: W * 0.09 });
    await delay(50);

    // 6. Top divider line
    c.addSvgElement(
      `<svg viewBox="0 0 200 6"><line x1="0" y1="3" x2="200" y2="3" stroke="#c4a888" stroke-width="0.8"/></svg>`,
      { left: W * 0.12, top: H * 0.265, scaleW: W * 0.76 }
    );
    await delay(40);

    // 7. Spaced subtitle
    c.addText(pick(SUBTITLES), {
      left: W * 0.5, top: H * 0.29,
      fontFamily: "'Montserrat', sans-serif", fontSize: 55,
      fill: "#8b6e50", fontWeight: "400", textAlign: "center",
    });
    await delay(50);

    // 8. MAIN HEADING
    let quote = pick(QUOTES);
    try {
      const res = await fetch("/api/generate-quote", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category: "self-love" }),
      });
      const data = await res.json();
      if (data.quote) {
        const words = data.quote.split(" ");
        const lines: string[] = []; let line = "";
        for (const w of words) {
          if (line && (line + " " + w).length > 12) { lines.push(line); line = w; }
          else { line = line ? line + " " + w : w; }
        }
        if (line) lines.push(line);
        quote = lines.join("\n");
      }
    } catch { /* fallback */ }

    c.addText(quote, {
      left: W * 0.5, top: H * 0.33,
      fontFamily: pick(["'Playfair Display', serif", "'Cormorant Garamond', serif"]),
      fontSize: 250, fill: "#4a3728", fontWeight: "600", textAlign: "center",
    });
    await delay(50);

    // 9. Center dot below heading
    c.addSvgElement(
      `<svg viewBox="0 0 10 10"><circle cx="5" cy="5" r="4" fill="#8b6e50"/></svg>`,
      { left: W * 0.48, top: H * 0.535, scaleW: W * 0.025 }
    );
    await delay(30);

    // 10. Bottom divider
    c.addSvgElement(
      `<svg viewBox="0 0 200 6"><line x1="0" y1="3" x2="200" y2="3" stroke="#c4a888" stroke-width="0.8"/></svg>`,
      { left: W * 0.12, top: H * 0.555, scaleW: W * 0.76 }
    );
    await delay(40);

    // 11. Italic tagline
    c.addText(pick(TAGLINES), {
      left: W * 0.5, top: H * 0.58,
      fontFamily: "'Cormorant Garamond', serif", fontSize: 75,
      fill: "#6b5040", fontStyle: "italic", textAlign: "center",
    });
    await delay(50);

    // 12. Middle row animal faces
    const midA = pickN(animals, 3);
    c.addSvgElement(midA[0].svg, { left: W * 0.15, top: H * 0.64, scaleW: W * 0.12 });
    await delay(40);
    c.addSvgElement(midA[1].svg, { left: W * 0.42, top: H * 0.63, scaleW: W * 0.13 });
    await delay(40);
    c.addSvgElement(midA[2].svg, { left: W * 0.72, top: H * 0.64, scaleW: W * 0.12 });
    await delay(50);

    // 13. Dashed line
    c.addSvgElement(
      `<svg viewBox="0 0 200 6"><line x1="0" y1="3" x2="200" y2="3" stroke="#b8a070" stroke-width="1.2" stroke-dasharray="8,5"/></svg>`,
      { left: W * 0.08, top: H * 0.78, scaleW: W * 0.84 }
    );
    await delay(40);

    // 14. Bottom text
    c.addText(pick(TAGLINES), {
      left: W * 0.5, top: H * 0.81,
      fontFamily: "'Cormorant Garamond', serif", fontSize: 65,
      fill: "#6b5040", fontStyle: "italic", textAlign: "center", charSpacing: 100,
    });
    await delay(50);

    // 15. Bottom dots row
    c.addSvgElement(
      `<svg viewBox="0 0 100 15"><circle cx="30" cy="7" r="4" fill="#d4a090" opacity="0.5"/><circle cx="42" cy="7" r="2.5" fill="#c49080" opacity="0.4"/><circle cx="52" cy="7" r="5" fill="#d4a090" opacity="0.6"/><circle cx="64" cy="7" r="2.5" fill="#c49080" opacity="0.4"/><circle cx="74" cy="7" r="4" fill="#d4a090" opacity="0.5"/></svg>`,
      { left: W * 0.30, top: H * 0.87, scaleW: W * 0.40 }
    );
    await delay(40);

    // 16. Bottom caption
    c.addText(pick(CAPTIONS), {
      left: W * 0.5, top: H * 0.92,
      fontFamily: "'Montserrat', sans-serif", fontSize: 42,
      fill: "#c4a888", fontWeight: "300", textAlign: "center",
    });

    setIsRandomizing(false);
  };

  return (
    <div className="px-3 py-3">
      <h3 className="text-sm font-semibold text-foreground/80 mb-2">Randomizer</h3>
      <p className="text-xs text-foreground/40 mb-2">
        Generate a full poster layout matching the example style
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
