"use client";

import { useState, useEffect, useCallback } from "react";
import * as fabric from "fabric";
import { FONTS, COLOR_PALETTES } from "@/app/lib/elements";
import { CanvasHandle } from "./Canvas";

interface PropertyPanelProps {
  selectedObject: fabric.FabricObject | null;
  canvasRef: React.RefObject<CanvasHandle | null>;
  canvasWidth: number;
  canvasHeight: number;
  backgroundColor: string;
  onCanvasPresetChange: (w: number, h: number) => void;
  onBackgroundColorChange: (color: string) => void;
}

export default function PropertyPanel({
  selectedObject,
  canvasRef,
  backgroundColor,
  onBackgroundColorChange,
}: PropertyPanelProps) {
  const [activePalette, setActivePalette] = useState<string>("pastels");
  const [opacity, setOpacity] = useState(100);
  const [fontSize, setFontSize] = useState(36);
  const [fontFamily, setFontFamily] = useState("Playfair Display");
  const [fillColor, setFillColor] = useState("#4a3728");

  const updateFromSelection = useCallback(() => {
    if (!selectedObject) return;
    setOpacity(Math.round((selectedObject.opacity || 1) * 100));
    if (selectedObject instanceof fabric.IText) {
      setFontSize(selectedObject.fontSize || 36);
      const ff = selectedObject.fontFamily || "Playfair Display";
      setFontFamily(ff.replace(/'/g, ""));
      setFillColor((selectedObject.fill as string) || "#4a3728");
    }
  }, [selectedObject]);

  useEffect(() => {
    updateFromSelection();
  }, [updateFromSelection]);

  const updateObject = (props: Record<string, unknown>) => {
    if (!selectedObject) return;
    selectedObject.set(props);
    canvasRef.current?.getCanvas()?.renderAll();
  };

  const handleOpacityChange = (val: number) => {
    setOpacity(val);
    updateObject({ opacity: val / 100 });
  };

  const handleFontSizeChange = (val: number) => {
    setFontSize(val);
    updateObject({ fontSize: val });
  };

  const handleFontChange = (font: string) => {
    setFontFamily(font);
    const style = FONTS.find((f) => f.name === font)?.style || font;
    updateObject({ fontFamily: style });
  };

  const handleColorChange = (color: string) => {
    setFillColor(color);
    updateObject({ fill: color });
  };

  const isText = selectedObject instanceof fabric.IText;

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <div className="px-3 pt-3 pb-2">
        <h3 className="text-sm font-semibold text-foreground/80 mb-3">Properties</h3>
      </div>

      {/* Background color */}
      <div className="px-3 pb-3 border-b border-pink/20">
        <label className="text-xs font-medium text-foreground/60 mb-1 block">
          Canvas Background
        </label>
        <div className="flex items-center gap-2">
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) => {
              onBackgroundColorChange(e.target.value);
              canvasRef.current?.setBackgroundColor(e.target.value);
            }}
            className="w-8 h-8 rounded-lg border border-pink/30 cursor-pointer"
          />
          <span className="text-xs text-foreground/40">{backgroundColor}</span>
        </div>
      </div>

      {/* Color palettes */}
      <div className="px-3 py-3 border-b border-pink/20">
        <label className="text-xs font-medium text-foreground/60 mb-2 block">
          Color Palettes
        </label>
        <div className="flex gap-1 mb-2 flex-wrap">
          {Object.keys(COLOR_PALETTES).map((name) => (
            <button
              key={name}
              onClick={() => setActivePalette(name)}
              className={`px-2 py-0.5 text-[10px] rounded-full capitalize cursor-pointer border-none ${
                activePalette === name
                  ? "bg-pink text-foreground font-medium"
                  : "bg-cream/50 text-foreground/60 hover:bg-pink/30"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
        <div className="flex gap-1 flex-wrap">
          {COLOR_PALETTES[activePalette as keyof typeof COLOR_PALETTES]?.map(
            (color) => (
              <button
                key={color}
                onClick={() => {
                  if (selectedObject) {
                    handleColorChange(color);
                  } else {
                    onBackgroundColorChange(color);
                    canvasRef.current?.setBackgroundColor(color);
                  }
                }}
                className="w-6 h-6 rounded-full border border-foreground/10 cursor-pointer
                           hover:scale-110 transition-transform hover:border-foreground/30"
                style={{ backgroundColor: color }}
                title={color}
              />
            )
          )}
        </div>
      </div>

      {/* Object properties */}
      {selectedObject && (
        <div className="px-3 py-3 border-b border-pink/20">
          <label className="text-xs font-medium text-foreground/60 mb-2 block">
            Opacity: {opacity}%
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={opacity}
            onChange={(e) => handleOpacityChange(Number(e.target.value))}
            className="w-full accent-pink"
          />
        </div>
      )}

      {/* Text properties */}
      {isText && (
        <>
          <div className="px-3 py-3 border-b border-pink/20">
            <label className="text-xs font-medium text-foreground/60 mb-2 block">
              Font
            </label>
            <select
              value={fontFamily}
              onChange={(e) => handleFontChange(e.target.value)}
              className="w-full px-2 py-1.5 text-sm rounded-lg border border-pink/30 bg-cream/50
                         focus:outline-none focus:border-pink cursor-pointer"
              style={{ fontFamily: FONTS.find(f => f.name === fontFamily)?.style }}
            >
              {FONTS.map((font) => (
                <option
                  key={font.name}
                  value={font.name}
                  style={{ fontFamily: font.style }}
                >
                  {font.name}
                </option>
              ))}
            </select>
          </div>

          <div className="px-3 py-3 border-b border-pink/20">
            <label className="text-xs font-medium text-foreground/60 mb-2 block">
              Font Size: {fontSize}px
            </label>
            <input
              type="range"
              min="8"
              max="200"
              value={fontSize}
              onChange={(e) => handleFontSizeChange(Number(e.target.value))}
              className="w-full accent-pink"
            />
          </div>

          <div className="px-3 py-3 border-b border-pink/20">
            <label className="text-xs font-medium text-foreground/60 mb-1 block">
              Text Color
            </label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={fillColor}
                onChange={(e) => handleColorChange(e.target.value)}
                className="w-8 h-8 rounded-lg border border-pink/30 cursor-pointer"
              />
              <span className="text-xs text-foreground/40">{fillColor}</span>
            </div>
          </div>

          <div className="px-3 py-3 border-b border-pink/20">
            <label className="text-xs font-medium text-foreground/60 mb-2 block">
              Text Alignment
            </label>
            <div className="flex gap-1">
              {(["left", "center", "right"] as const).map((align) => (
                <button
                  key={align}
                  onClick={() => updateObject({ textAlign: align })}
                  className="px-3 py-1 text-xs rounded-lg border border-pink/30 hover:bg-pink/20 capitalize cursor-pointer bg-transparent"
                >
                  {align}
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Layer controls */}
      {selectedObject && (
        <div className="px-3 py-3">
          <label className="text-xs font-medium text-foreground/60 mb-2 block">
            Layer Order
          </label>
          <div className="flex gap-1">
            <button
              onClick={() => {
                const canvas = canvasRef.current?.getCanvas();
                if (canvas && selectedObject) {
                  canvas.bringObjectToFront(selectedObject);
                  canvas.renderAll();
                }
              }}
              className="px-2 py-1 text-xs rounded-lg border border-pink/30 hover:bg-pink/20 cursor-pointer bg-transparent"
            >
              Front
            </button>
            <button
              onClick={() => {
                const canvas = canvasRef.current?.getCanvas();
                if (canvas && selectedObject) {
                  canvas.sendObjectToBack(selectedObject);
                  canvas.renderAll();
                }
              }}
              className="px-2 py-1 text-xs rounded-lg border border-pink/30 hover:bg-pink/20 cursor-pointer bg-transparent"
            >
              Back
            </button>
          </div>
        </div>
      )}

      {!selectedObject && (
        <div className="px-3 py-8 text-center text-foreground/30 text-xs">
          Select an element on the canvas to edit its properties
        </div>
      )}
    </div>
  );
}
