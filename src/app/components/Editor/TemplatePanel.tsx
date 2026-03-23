"use client";

import { TEMPLATES, ELEMENTS, Template } from "@/app/lib/elements";
import { CanvasHandle } from "./Canvas";

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

    // Add elements with a small delay between each to avoid race conditions
    template.elements.forEach((el, i) => {
      setTimeout(() => {
        if (el.type === "svg") {
          let svgString = el.svg;
          if (!svgString && el.elementId) {
            const found = ELEMENTS.find((e) => e.id === el.elementId);
            if (found) svgString = found.svg;
          }
          if (svgString) {
            canvas.addSvgElement(svgString);
          }
        } else if (el.type === "text" && el.text) {
          canvas.addText(el.text, {
            left: el.x,
            top: el.y,
            fontFamily: el.fontFamily || "'Playfair Display', serif",
            fontSize: el.fontSize || 36,
            fill: el.fill || "#4a3728",
            fontWeight: el.fontWeight,
            fontStyle: el.fontStyle,
            textAlign: el.textAlign || "center",
            charSpacing: el.letterSpacing,
          });
        }
      }, i * 80);
    });
  };

  return (
    <div className="px-3 py-3">
      <h3 className="text-sm font-semibold text-foreground/80 mb-2">Templates</h3>
      <p className="text-xs text-foreground/40 mb-3">
        Start with a pre-made design, then customize everything
      </p>

      <div className="space-y-3">
        {TEMPLATES.map((template) => (
          <button
            key={template.id}
            onClick={() => applyTemplate(template)}
            className="w-full text-left p-3 rounded-xl border border-foreground/10
                       hover:border-gold/50 hover:shadow-sm transition-all cursor-pointer bg-transparent group"
          >
            {/* Mini preview */}
            <div
              className="w-full h-28 rounded-lg mb-2 flex items-center justify-center overflow-hidden relative"
              style={{ backgroundColor: template.backgroundColor }}
            >
              {/* Simplified visual preview */}
              <div className="text-center">
                <div className="w-10 h-10 rounded-full mx-auto mb-1" style={{ backgroundColor: "#f0e4d4", opacity: 0.5 }} />
                <div className="w-16 h-1.5 rounded-full mx-auto" style={{ backgroundColor: "#c4a888", opacity: 0.5 }} />
                <div className="w-20 h-3 rounded mx-auto mt-1" style={{ backgroundColor: "#4a3728", opacity: 0.15 }} />
                <div className="w-12 h-1 rounded-full mx-auto mt-1" style={{ backgroundColor: "#c4a888", opacity: 0.4 }} />
              </div>

              {/* Corner decorations */}
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
              {template.thumbnail}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
