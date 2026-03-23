"use client";

import { ELEMENTS } from "@/app/lib/elements";
import { CanvasHandle } from "./Canvas";

interface TemplateElement {
  type: "svg" | "text";
  elementId?: string;
  svg?: string;
  text?: string;
  // Position as fraction of canvas (0-1)
  x?: number;
  y?: number;
  // Width as fraction of canvas width (0-1)
  w?: number;
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

// Positions are fractions of canvas: x=0.5 means center, w=0.6 means 60% of canvas width
const TEMPLATES: Template[] = [
  {
    id: "self-love-poster",
    name: "Self Love Poster",
    description: "Earthy tones, puppy faces, spaced text, dividers",
    backgroundColor: "#f5ece0",
    elements: [
      // Background circle
      { type:"svg", svg:`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="48" fill="#f0e4d4" opacity="0.45"/></svg>`, x:0.2, y:0.05, w:0.6 },
      // Frame
      { type:"svg", svg:`<svg viewBox="0 0 100 141" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="96" height="137" rx="1" fill="none" stroke="#c4a888" stroke-width="0.5"/></svg>`, x:0.05, y:0.03, w:0.9 },
      // Corner clusters
      { type:"svg", elementId:"cluster-brown", x:0.06, y:0.04, w:0.14 },
      { type:"svg", elementId:"cluster-olive", x:0.78, y:0.04, w:0.14 },
      // Vertical lines
      { type:"svg", svg:`<svg viewBox="0 0 10 100" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="0" x2="3" y2="100" stroke="#5a4030" stroke-width="1.5"/><line x1="7" y1="0" x2="7" y2="100" stroke="#5a4030" stroke-width="1.5"/></svg>`, x:0.09, y:0.06, w:0.012 },
      { type:"svg", svg:`<svg viewBox="0 0 10 100" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="0" x2="3" y2="100" stroke="#5a4030" stroke-width="1.5"/><line x1="7" y1="0" x2="7" y2="100" stroke="#5a4030" stroke-width="1.5"/></svg>`, x:0.89, y:0.06, w:0.012 },
      // Top puppies
      { type:"svg", elementId:"puppy-1", x:0.42, y:0.08, w:0.08 },
      { type:"svg", elementId:"puppy-2", x:0.2, y:0.15, w:0.07 },
      { type:"svg", elementId:"puppy-3", x:0.68, y:0.15, w:0.07 },
      // Top divider
      { type:"svg", svg:`<svg viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="5" x2="195" y2="5" stroke="#c4a888" stroke-width="0.8"/></svg>`, x:0.15, y:0.28, w:0.7 },
      // Subtitle
      { type:"text", text:"A L W A Y S   R E M E M B E R", x:0.5, y:0.31, fontFamily:"'Montserrat', sans-serif", fontSize:18, fill:"#8b6e50", fontWeight:"400", textAlign:"center" },
      // Main heading
      { type:"text", text:"Choose\nYourself,\nEvery Day.", x:0.5, y:0.36, fontFamily:"'Playfair Display', serif", fontSize:80, fill:"#4a3728", fontWeight:"600", textAlign:"center" },
      // Center dot
      { type:"svg", svg:`<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="5" r="3.5" fill="#8b6e50"/></svg>`, x:0.48, y:0.55, w:0.02 },
      // Bottom divider
      { type:"svg", svg:`<svg viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="5" x2="195" y2="5" stroke="#c4a888" stroke-width="0.8"/></svg>`, x:0.15, y:0.57, w:0.7 },
      // Tagline
      { type:"text", text:"you deserve your own love first", x:0.5, y:0.60, fontFamily:"'Cormorant Garamond', serif", fontSize:26, fill:"#6b5040", fontStyle:"italic", textAlign:"center" },
      // Middle puppies
      { type:"svg", elementId:"puppy-1", x:0.18, y:0.65, w:0.09 },
      { type:"svg", elementId:"puppy-2", x:0.43, y:0.64, w:0.1 },
      { type:"svg", elementId:"puppy-3", x:0.7, y:0.65, w:0.09 },
      // Dashed line
      { type:"svg", svg:`<svg viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="5" x2="195" y2="5" stroke="#b8a070" stroke-width="1" stroke-dasharray="5,3"/></svg>`, x:0.1, y:0.77, w:0.8 },
      // Bottom text
      { type:"text", text:"your story is worth telling", x:0.5, y:0.80, fontFamily:"'Cormorant Garamond', serif", fontSize:22, fill:"#6b5040", fontStyle:"italic", textAlign:"center", charSpacing:150 },
      // Dots
      { type:"svg", elementId:"dots-row-pink", x:0.3, y:0.86, w:0.4 },
      // Caption
      { type:"text", text:"s e l f   l o v e   c o l l e c t i o n", x:0.5, y:0.91, fontFamily:"'Montserrat', sans-serif", fontSize:14, fill:"#c4a888", fontWeight:"300", textAlign:"center" },
    ],
  },
  {
    id: "minimal-quote",
    name: "Minimal Quote",
    description: "Clean centered design with botanical accents",
    backgroundColor: "#fdf6f0",
    elements: [
      { type:"svg", svg:`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="45" fill="#f0e4d4" opacity="0.3"/></svg>`, x:0.2, y:0.25, w:0.6 },
      { type:"svg", elementId:"eucalyptus-1", x:0.08, y:0.1, w:0.1 },
      { type:"svg", elementId:"olive-branch", x:0.82, y:0.1, w:0.1 },
      { type:"svg", svg:`<svg viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="5" x2="195" y2="5" stroke="#c4a888" stroke-width="0.8"/></svg>`, x:0.2, y:0.35, w:0.6 },
      { type:"text", text:"Be Still\n& Know", x:0.5, y:0.40, fontFamily:"'Playfair Display', serif", fontSize:90, fill:"#4a3728", fontWeight:"600", textAlign:"center" },
      { type:"svg", svg:`<svg viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="5" x2="195" y2="5" stroke="#c4a888" stroke-width="0.8"/></svg>`, x:0.2, y:0.60, w:0.6 },
      { type:"text", text:"that you are enough", x:0.5, y:0.65, fontFamily:"'Cormorant Garamond', serif", fontSize:24, fill:"#8b6e50", fontStyle:"italic", textAlign:"center" },
    ],
  },
  {
    id: "boho-floral",
    name: "Boho Floral",
    description: "Arch frame with earth-toned florals",
    backgroundColor: "#f5ece0",
    elements: [
      { type:"svg", svg:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg"><path d="M15 130 L15 40 Q15 8 50 8 Q85 8 85 40 L85 130" fill="none" stroke="#c4a888" stroke-width="0.8"/></svg>`, x:0.15, y:0.05, w:0.7 },
      { type:"svg", elementId:"cluster-mixed", x:0.12, y:0.08, w:0.18 },
      { type:"svg", elementId:"cluster-pink", x:0.68, y:0.08, w:0.18 },
      { type:"svg", elementId:"cherry-blossom", x:0.3, y:0.12, w:0.08 },
      { type:"svg", elementId:"wildflower-1", x:0.6, y:0.14, w:0.07 },
      { type:"text", text:"Bloom\nWhere You\nAre Planted", x:0.5, y:0.35, fontFamily:"'Playfair Display', serif", fontSize:72, fill:"#4a3728", fontWeight:"600", textAlign:"center" },
      { type:"svg", elementId:"wildflower-spray", x:0.2, y:0.65, w:0.1 },
      { type:"svg", elementId:"tulip-1", x:0.45, y:0.63, w:0.08 },
      { type:"svg", elementId:"wildflower-1", x:0.7, y:0.65, w:0.1 },
      { type:"text", text:"g r o w   w i t h   g r a c e", x:0.5, y:0.85, fontFamily:"'Montserrat', sans-serif", fontSize:14, fill:"#a09060", fontWeight:"300", textAlign:"center" },
    ],
  },
];

interface TemplatePanelProps {
  canvasRef: React.RefObject<CanvasHandle | null>;
  onBackgroundChange: (color: string) => void;
}

export default function TemplatePanel({ canvasRef, onBackgroundChange }: TemplatePanelProps) {
  const applyTemplate = (template: Template) => {
    const c = canvasRef.current;
    if (!c) return;

    c.clearCanvas();
    c.setBackgroundColor(template.backgroundColor);
    onBackgroundChange(template.backgroundColor);

    const { width: W, height: H } = c.getSize();

    template.elements.forEach((el, i) => {
      setTimeout(() => {
        if (el.type === "svg") {
          let svgString = el.svg;
          if (!svgString && el.elementId) {
            const found = ELEMENTS.find((e) => e.id === el.elementId);
            if (found) svgString = found.svg;
          }
          if (svgString) {
            c.addSvgElement(svgString, {
              left: el.x !== undefined ? el.x * W : undefined,
              top: el.y !== undefined ? el.y * H : undefined,
              scaleW: el.w !== undefined ? el.w * W : undefined,
            });
          }
        } else if (el.type === "text" && el.text) {
          c.addText(el.text, {
            left: el.x !== undefined ? el.x * W : W / 2,
            top: el.y !== undefined ? el.y * H : H / 2,
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
            className="w-full text-left p-3 rounded-xl border border-foreground/10 hover:border-gold/50 hover:shadow-sm transition-all cursor-pointer bg-transparent group"
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
              <div className="absolute top-2 left-2 w-3 h-1.5 rounded-full bg-amber-800/30 rotate-[-30deg]" />
              <div className="absolute top-2 right-2 w-3 h-1.5 rounded-full bg-amber-700/20 rotate-[30deg]" />
            </div>
            <div className="font-medium text-sm text-foreground/80 group-hover:text-foreground">{template.name}</div>
            <div className="text-[10px] text-foreground/40 mt-0.5">{template.description}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
