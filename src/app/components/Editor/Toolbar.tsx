"use client";

import { useState } from "react";
import { CanvasHandle } from "./Canvas";
import { TEXT_PRESETS } from "@/app/lib/elements";

interface ToolbarProps {
  canvasRef: React.RefObject<CanvasHandle | null>;
}

export default function Toolbar({ canvasRef }: ToolbarProps) {
  const [showTextMenu, setShowTextMenu] = useState(false);

  return (
    <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-xl px-3 py-2 shadow-sm border border-pink/30 relative">
      <button
        onClick={() => canvasRef.current?.undo()}
        className="toolbar-btn"
        title="Undo"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 10h10a5 5 0 0 1 0 10H7"/><path d="M3 10l4-4M3 10l4 4"/></svg>
      </button>
      <button
        onClick={() => canvasRef.current?.redo()}
        className="toolbar-btn"
        title="Redo"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10H11a5 5 0 0 0 0 10h6"/><path d="M21 10l-4-4M21 10l-4 4"/></svg>
      </button>

      <div className="w-px h-6 bg-pink/30 mx-1" />

      {/* Text dropdown */}
      <div className="relative">
        <button
          onClick={() => setShowTextMenu(!showTextMenu)}
          className="toolbar-btn"
          title="Add Text"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7V4h16v3M9 20h6M12 4v16"/></svg>
          <span className="text-xs ml-1">Text</span>
          <svg width="10" height="10" viewBox="0 0 12 12" className="ml-0.5 opacity-50"><path d="M3 5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
        </button>

        {showTextMenu && (
          <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-pink/20 py-2 z-50">
            <button
              onClick={() => {
                canvasRef.current?.addText("Your text here");
                setShowTextMenu(false);
              }}
              className="w-full text-left px-3 py-2 text-sm hover:bg-cream/50 text-foreground/70 cursor-pointer border-none bg-transparent"
            >
              Plain Text
            </button>
            <div className="h-px bg-pink/15 my-1" />
            {TEXT_PRESETS.map((preset) => (
              <button
                key={preset.id}
                onClick={() => {
                  canvasRef.current?.addText(preset.text, {
                    fontFamily: preset.fontFamily,
                    fontSize: preset.fontSize,
                    fill: preset.fill,
                    fontWeight: preset.fontWeight,
                    fontStyle: preset.fontStyle,
                    textAlign: preset.textAlign,
                    charSpacing: preset.letterSpacing,
                  });
                  setShowTextMenu(false);
                }}
                className="w-full text-left px-3 py-1.5 hover:bg-cream/50 cursor-pointer border-none bg-transparent"
              >
                <span
                  className="text-sm block truncate"
                  style={{
                    fontFamily: preset.fontFamily,
                    color: preset.fill,
                    fontStyle: preset.fontStyle,
                    fontWeight: preset.fontWeight,
                  }}
                >
                  {preset.name}
                </span>
                <span className="text-[10px] text-foreground/30">{preset.text.slice(0, 30)}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="w-px h-6 bg-pink/30 mx-1" />

      <button
        onClick={() => canvasRef.current?.deleteSelected()}
        className="toolbar-btn text-rose/70 hover:text-rose"
        title="Delete Selected"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>
      </button>

      <button
        onClick={() => {
          if (confirm("Clear entire canvas?")) canvasRef.current?.clearCanvas();
        }}
        className="toolbar-btn text-rose/70 hover:text-rose"
        title="Clear All"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>
      </button>

      <div className="w-px h-6 bg-pink/30 mx-1" />

      <button
        onClick={() => canvasRef.current?.exportPng()}
        className="toolbar-btn"
        title="Export PNG"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 15V3M12 15l-4-4M12 15l4-4"/><path d="M2 17l.62 2.48A2 2 0 0 0 4.56 21h14.88a2 2 0 0 0 1.94-1.52L22 17"/></svg>
        <span className="text-xs ml-1">PNG</span>
      </button>

      <button
        onClick={() => canvasRef.current?.exportJpg()}
        className="toolbar-btn"
        title="Export JPG"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 15V3M12 15l-4-4M12 15l4-4"/><path d="M2 17l.62 2.48A2 2 0 0 0 4.56 21h14.88a2 2 0 0 0 1.94-1.52L22 17"/></svg>
        <span className="text-xs ml-1">JPG</span>
      </button>

      <style jsx>{`
        .toolbar-btn {
          display: flex;
          align-items: center;
          padding: 6px 8px;
          border-radius: 8px;
          font-size: 13px;
          color: #4a3728;
          transition: all 0.15s;
          cursor: pointer;
          border: none;
          background: none;
        }
        .toolbar-btn:hover {
          background: #f0dcc840;
          color: #8b5e3c;
        }
      `}</style>
    </div>
  );
}
