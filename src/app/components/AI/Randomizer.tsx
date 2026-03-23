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
  "Dream\nWithout Fear",
  "Be The Energy\nYou Want\nTo Attract",
  "Your Story\nIs Worth\nTelling",
];

const SUBTITLES = [
  "A L W A Y S   R E M E M B E R",
  "N E V E R   F O R G E T",
  "K E E P   G O I N G",
  "B E L I E V E",
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

const BG_COLORS = ["#f5ece0", "#fdf6f0", "#f0e4d4", "#fff8f0"];
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

    // Background color
    const bg = pick(BG_COLORS);
    c.setBackgroundColor(bg);
    onBackgroundChange(bg);

    await delay(50);

    // 1. Large background circle - upper center area
    c.addSvgElement(
      `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="48" fill="#f0e4d4" opacity="0.45"/></svg>`,
      { left: W * 0.2, top: H * 0.05, scaleW: W * 0.6 }
    );
    await delay(80);

    // 2. Thin border frame
    c.addSvgElement(
      `<svg viewBox="0 0 100 141" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="96" height="137" rx="1" fill="none" stroke="#c4a888" stroke-width="0.5"/></svg>`,
      { left: W * 0.05, top: H * 0.03, scaleW: W * 0.9 }
    );
    await delay(80);

    // 3. Corner leaf clusters
    const clusters = ELEMENTS.filter(e => e.tags.includes("cluster"));
    const clusterPicks = pickN(clusters, 2);
    c.addSvgElement(clusterPicks[0].svg, { left: W * 0.06, top: H * 0.04, scaleW: W * 0.14 });
    await delay(60);
    c.addSvgElement(clusterPicks[1].svg, { left: W * 0.78, top: H * 0.04, scaleW: W * 0.14 });
    await delay(60);

    // 4. Side leaf clusters at bottom
    const moreClusters = pickN(clusters, 2);
    c.addSvgElement(moreClusters[0].svg, { left: W * 0.82, top: H * 0.35, scaleW: W * 0.1 });
    await delay(60);
    c.addSvgElement(moreClusters[1].svg, { left: W * 0.04, top: H * 0.38, scaleW: W * 0.1 });
    await delay(60);

    // 5. Vertical accent lines (left and right of frame)
    const vertLine = `<svg viewBox="0 0 10 100" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="0" x2="3" y2="100" stroke="#5a4030" stroke-width="1.5"/><line x1="7" y1="0" x2="7" y2="100" stroke="#5a4030" stroke-width="1.5"/></svg>`;
    c.addSvgElement(vertLine, { left: W * 0.09, top: H * 0.06, scaleW: W * 0.012 });
    await delay(40);
    c.addSvgElement(vertLine, { left: W * 0.89, top: H * 0.06, scaleW: W * 0.012 });
    await delay(60);

    // 6. Cute animal faces - top row (inside the circle area)
    const cuteAnimals = ELEMENTS.filter(e => e.category === "cute");
    const topAnimals = pickN(cuteAnimals, 3);
    c.addSvgElement(topAnimals[0].svg, { left: W * 0.42, top: H * 0.08, scaleW: W * 0.08 });
    await delay(50);
    c.addSvgElement(topAnimals[1].svg, { left: W * 0.2, top: H * 0.15, scaleW: W * 0.07 });
    await delay(50);
    c.addSvgElement(topAnimals[2].svg, { left: W * 0.68, top: H * 0.15, scaleW: W * 0.07 });
    await delay(60);

    // 7. Horizontal divider line
    c.addSvgElement(
      `<svg viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="5" x2="195" y2="5" stroke="#c4a888" stroke-width="0.8"/></svg>`,
      { left: W * 0.15, top: H * 0.28, scaleW: W * 0.7 }
    );
    await delay(60);

    // 8. Spaced subtitle text
    c.addText(pick(SUBTITLES), {
      left: W / 2, top: H * 0.31,
      fontFamily: "'Montserrat', sans-serif", fontSize: 18,
      fill: "#8b6e50", fontWeight: "400", textAlign: "center",
    });
    await delay(60);

    // 9. MAIN HEADING - large centered
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
          if (line && (line + " " + w).length > 14) { lines.push(line); line = w; }
          else { line = line ? line + " " + w : w; }
        }
        if (line) lines.push(line);
        quote = lines.join("\n");
      }
    } catch { /* fallback */ }

    c.addText(quote, {
      left: W / 2, top: H * 0.36,
      fontFamily: pick(["'Playfair Display', serif", "'Cormorant Garamond', serif", "'Lora', serif"]),
      fontSize: 80, fill: "#4a3728", fontWeight: "600", textAlign: "center",
    });
    await delay(60);

    // 10. Center dot
    c.addSvgElement(
      `<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="5" r="3.5" fill="#8b6e50"/></svg>`,
      { left: W * 0.48, top: H * 0.55, scaleW: W * 0.02 }
    );
    await delay(40);

    // 11. Divider line below heading
    c.addSvgElement(
      `<svg viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="5" x2="195" y2="5" stroke="#c4a888" stroke-width="0.8"/></svg>`,
      { left: W * 0.15, top: H * 0.57, scaleW: W * 0.7 }
    );
    await delay(60);

    // 12. Italic tagline
    c.addText(pick(TAGLINES), {
      left: W / 2, top: H * 0.60,
      fontFamily: "'Cormorant Garamond', serif", fontSize: 26,
      fill: "#6b5040", fontStyle: "italic", textAlign: "center",
    });
    await delay(60);

    // 13. Middle row of animal faces
    const midAnimals = pickN(cuteAnimals, 3);
    c.addSvgElement(midAnimals[0].svg, { left: W * 0.18, top: H * 0.65, scaleW: W * 0.09 });
    await delay(50);
    c.addSvgElement(midAnimals[1].svg, { left: W * 0.43, top: H * 0.64, scaleW: W * 0.1 });
    await delay(50);
    c.addSvgElement(midAnimals[2].svg, { left: W * 0.7, top: H * 0.65, scaleW: W * 0.09 });
    await delay(60);

    // 14. Dashed line separator
    c.addSvgElement(
      `<svg viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="5" x2="195" y2="5" stroke="#b8a070" stroke-width="1" stroke-dasharray="5,3"/></svg>`,
      { left: W * 0.1, top: H * 0.77, scaleW: W * 0.8 }
    );
    await delay(60);

    // 15. Bottom italic text with letter spacing
    c.addText(pick(TAGLINES), {
      left: W / 2, top: H * 0.80,
      fontFamily: "'Cormorant Garamond', serif", fontSize: 22,
      fill: "#6b5040", fontStyle: "italic", textAlign: "center", charSpacing: 150,
    });
    await delay(60);

    // 16. Bottom dots
    const dots = pick(ELEMENTS.filter(e => e.tags.includes("dots") && e.tags.includes("row")));
    if (dots) c.addSvgElement(dots.svg, { left: W * 0.3, top: H * 0.86, scaleW: W * 0.4 });
    await delay(60);

    // 17. Bottom caption
    c.addText(pick(CAPTIONS), {
      left: W / 2, top: H * 0.91,
      fontFamily: "'Montserrat', sans-serif", fontSize: 14,
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
