"use client";

import { CanvasHandle } from "./Canvas";

interface ToolbarProps {
  canvasRef: React.RefObject<CanvasHandle | null>;
}

export default function Toolbar({ canvasRef }: ToolbarProps) {
  const addText = () => {
    canvasRef.current?.addText("Your text here");
  };

  return (
    <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-xl px-3 py-2 shadow-sm border border-pink/30">
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

      <button onClick={addText} className="toolbar-btn" title="Add Text">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7V4h16v3M9 20h6M12 4v16"/></svg>
        <span className="text-xs ml-1">Text</span>
      </button>

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
          background: #ffd1dc40;
          color: #c9184a;
        }
      `}</style>
    </div>
  );
}
