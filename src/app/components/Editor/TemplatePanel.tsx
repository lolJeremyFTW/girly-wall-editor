"use client";

import { ELEMENTS } from "@/app/lib/elements";
import { CanvasHandle } from "./Canvas";

interface TemplateElement {
  type: "svg" | "text";
  elementId?: string;
  svg?: string;
  text?: string;
  fontFamily?: string;
  fontSize?: number;
  fill?: string;
  fontWeight?: string;
  fontStyle?: string;
  textAlign?: string;
  charSpacing?: number;
}

interface Template {
  id: string;
  name: string;
  description: string;
  backgroundColor: string;
  elements: TemplateElement[];
}

const TEMPLATES: Template[] = [
  {
    id: "self-love-poster",
    name: "Self Love Poster",
    description: "Earthy tones, puppy faces, spaced text, dividers",
    backgroundColor: "#f5ece0",
    elements: [
      { type: "svg", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="45" fill="#f0e4d4" opacity="0.45"/></svg>` },
      { type: "svg", svg: `<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="94" height="134" rx="1" fill="none" stroke="#c4a888" stroke-width="0.6"/></svg>` },
      { type: "svg", elementId: "cluster-brown" },
      { type: "svg", elementId: "cluster-olive" },
      { type: "svg", elementId: "puppy-1" },
      { type: "svg", elementId: "puppy-2" },
      { type: "svg", elementId: "puppy-3" },
      { type: "svg", svg: `<svg viewBox="0 0 10 100" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="0" x2="3" y2="100" stroke="#5a4030" stroke-width="1.2"/><line x1="7" y1="0" x2="7" y2="100" stroke="#5a4030" stroke-width="1.2"/></svg>` },
      { type: "text", text: "A L W A Y S   R E M E M B E R", fontFamily: "'Montserrat', sans-serif", fontSize: 18, fill: "#8b6e50", fontWeight: "400", textAlign: "center" },
      { type: "text", text: "Choose\nYourself,\nEvery Day.", fontFamily: "'Playfair Display', serif", fontSize: 80, fill: "#4a3728", fontWeight: "600", textAlign: "center" },
      { type: "svg", svg: `<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="5" r="3" fill="#8b6e50"/></svg>` },
      { type: "text", text: "you deserve your own love first", fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fill: "#6b5040", fontStyle: "italic", textAlign: "center" },
      { type: "svg", elementId: "puppy-1" },
      { type: "svg", elementId: "puppy-2" },
      { type: "svg", elementId: "puppy-3" },
      { type: "svg", svg: `<svg viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="5" x2="190" y2="5" stroke="#b8a070" stroke-width="1.2" stroke-dasharray="6,4"/></svg>` },
      { type: "text", text: "y o u r   s t o r y   i s   w o r t h   t e l l i n g", fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fill: "#6b5040", fontStyle: "italic", textAlign: "center" },
      { type: "svg", elementId: "dots-row-pink" },
      { type: "text", text: "s e l f   l o v e   c o l l e c t i o n", fontFamily: "'Montserrat', sans-serif", fontSize: 14, fill: "#c4a888", fontWeight: "300", textAlign: "center" },
    ],
  },
  {
    id: "minimal-quote",
    name: "Minimal Quote",
    description: "Clean centered design with botanical accents",
    backgroundColor: "#fdf6f0",
    elements: [
      { type: "svg", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="#f0e4d4" opacity="0.3"/></svg>` },
      { type: "svg", elementId: "eucalyptus-1" },
      { type: "svg", elementId: "olive-branch" },
      { type: "svg", svg: `<svg viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="5" x2="190" y2="5" stroke="#c4a888" stroke-width="0.8"/></svg>` },
      { type: "text", text: "Be Still\n& Know", fontFamily: "'Playfair Display', serif", fontSize: 90, fill: "#4a3728", fontWeight: "600", textAlign: "center" },
      { type: "svg", svg: `<svg viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="5" x2="190" y2="5" stroke="#c4a888" stroke-width="0.8"/></svg>` },
      { type: "text", text: "that you are enough", fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fill: "#8b6e50", fontStyle: "italic", textAlign: "center" },
    ],
  },
  {
    id: "boho-floral",
    name: "Boho Floral",
    description: "Arch frame with earth-toned florals and botanicals",
    backgroundColor: "#f5ece0",
    elements: [
      { type: "svg", svg: `<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg"><path d="M20 130 L20 40 Q20 10 50 10 Q80 10 80 40 L80 130" fill="none" stroke="#c4a888" stroke-width="0.8"/></svg>` },
      { type: "svg", elementId: "cluster-mixed" },
      { type: "svg", elementId: "cluster-pink" },
      { type: "svg", elementId: "cherry-blossom" },
      { type: "svg", elementId: "wildflower-1" },
      { type: "text", text: "Bloom\nWhere You\nAre Planted", fontFamily: "'Playfair Display', serif", fontSize: 72, fill: "#4a3728", fontWeight: "600", textAlign: "center" },
      { type: "svg", elementId: "wildflower-spray" },
      { type: "svg", elementId: "tulip-1" },
      { type: "text", text: "g r o w   w i t h   g r a c e", fontFamily: "'Montserrat', sans-serif", fontSize: 14, fill: "#a09060", fontWeight: "300", textAlign: "center" },
    ],
  },
];

interface TemplatePanelProps {
  canvasRef: React.RefObject<CanvasHandle | null>;
  onBackgroundChange: (color: string) => void;
}

export default function TemplatePanel({ canvasRef, onBackgroundChange }: TemplatePanelProps) {
  const applyTemplate = (template: Template) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.clearCanvas();
    canvas.setBackgroundColor(template.backgroundColor);
    onBackgroundChange(template.backgroundColor);

    template.elements.forEach((el, i) => {
      setTimeout(() => {
        if (el.type === "svg") {
          let svgString = el.svg;
          if (!svgString && el.elementId) {
            const found = ELEMENTS.find((e) => e.id === el.elementId);
            if (found) svgString = found.svg;
          }
          if (svgString) canvas.addSvgElement(svgString);
        } else if (el.type === "text" && el.text) {
          canvas.addText(el.text, {
            fontFamily: el.fontFamily || "'Playfair Display', serif",
            fontSize: el.fontSize || 36,
            fill: el.fill || "#4a3728",
            fontWeight: el.fontWeight,
            fontStyle: el.fontStyle,
            textAlign: el.textAlign || "center",
            charSpacing: el.charSpacing,
          });
        }
      }, i * 80);
    });
  };

  return (
    <div className="px-3 py-3">
      <h3 className="text-sm font-semibold text-foreground/80 mb-2">Templates</h3>
      <p className="text-xs text-foreground/40 mb-3">
        Start with a pre-made design, then customize
      </p>

      <div className="space-y-3">
        {TEMPLATES.map((template) => (
          <button
            key={template.id}
            onClick={() => applyTemplate(template)}
            className="w-full text-left p-3 rounded-xl border border-foreground/10
                       hover:border-gold/50 hover:shadow-sm transition-all cursor-pointer bg-transparent group"
          >
            <div
              className="w-full h-28 rounded-lg mb-2 flex items-center justify-center overflow-hidden relative"
              style={{ backgroundColor: template.backgroundColor }}
            >
              <div className="text-center">
                <div className="w-10 h-10 rounded-full mx-auto mb-1" style={{ backgroundColor: "#f0e4d4", opacity: 0.5 }} />
                <div className="w-16 h-1.5 rounded-full mx-auto" style={{ backgroundColor: "#c4a888", opacity: 0.5 }} />
                <div className="w-20 h-3 rounded mx-auto mt-1" style={{ backgroundColor: "#4a3728", opacity: 0.15 }} />
                <div className="w-12 h-1 rounded-full mx-auto mt-1" style={{ backgroundColor: "#c4a888", opacity: 0.4 }} />
              </div>
              <div className="absolute top-2 left-2 w-4 h-4">
                <div className="w-3 h-1.5 rounded-full bg-amber-800/30 rotate-[-30deg]" />
              </div>
              <div className="absolute top-2 right-2 w-4 h-4">
                <div className="w-3 h-1.5 rounded-full bg-amber-700/20 rotate-[30deg]" />
              </div>
            </div>
            <div className="font-medium text-sm text-foreground/80 group-hover:text-foreground">
              {template.name}
            </div>
            <div className="text-[10px] text-foreground/40 mt-0.5">
              {template.description}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
