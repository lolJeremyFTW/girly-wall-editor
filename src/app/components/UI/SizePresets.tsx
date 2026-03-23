"use client";

import { CANVAS_PRESETS } from "@/app/lib/elements";

interface SizePresetsProps {
  currentWidth: number;
  currentHeight: number;
  onChange: (w: number, h: number) => void;
}

export default function SizePresets({
  currentWidth,
  currentHeight,
  onChange,
}: SizePresetsProps) {
  return (
    <div className="px-3 py-3 border-b border-pink/20">
      <label className="text-xs font-medium text-foreground/60 mb-2 block">
        Canvas Size
      </label>
      <select
        value={`${currentWidth}x${currentHeight}`}
        onChange={(e) => {
          const [w, h] = e.target.value.split("x").map(Number);
          onChange(w, h);
        }}
        className="w-full px-2 py-1.5 text-sm rounded-lg border border-pink/30 bg-cream/50
                   focus:outline-none focus:border-pink cursor-pointer"
      >
        {CANVAS_PRESETS.map((preset) => (
          <option key={preset.name} value={`${preset.width}x${preset.height}`}>
            {preset.name} ({preset.width}x{preset.height})
          </option>
        ))}
      </select>
    </div>
  );
}
