"use client";

import { useEffect, useRef, useCallback, forwardRef, useImperativeHandle } from "react";
import * as fabric from "fabric";

export interface CanvasHandle {
  canvas: fabric.Canvas | null;
  addSvgElement: (svgString: string) => void;
  addText: (text: string, options?: Record<string, unknown>) => void;
  setBackgroundColor: (color: string) => void;
  exportPng: () => void;
  exportJpg: () => void;
  clearCanvas: () => void;
  undo: () => void;
  redo: () => void;
  deleteSelected: () => void;
  getCanvas: () => fabric.Canvas | null;
}

interface CanvasProps {
  width: number;
  height: number;
  backgroundColor: string;
  onSelectionChange?: (obj: fabric.FabricObject | null) => void;
}

const MAX_DISPLAY = 600;

const EditorCanvas = forwardRef<CanvasHandle, CanvasProps>(
  ({ width, height, backgroundColor, onSelectionChange }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const fabricRef = useRef<fabric.Canvas | null>(null);
    const historyRef = useRef<string[]>([]);
    const historyIndexRef = useRef(-1);
    const skipHistoryRef = useRef(false);

    const saveHistory = useCallback(() => {
      if (skipHistoryRef.current || !fabricRef.current) return;
      const json = JSON.stringify(fabricRef.current.toJSON());
      const idx = historyIndexRef.current;
      historyRef.current = historyRef.current.slice(0, idx + 1);
      historyRef.current.push(json);
      historyIndexRef.current = historyRef.current.length - 1;
      if (historyRef.current.length > 50) {
        historyRef.current.shift();
        historyIndexRef.current--;
      }
    }, []);

    useEffect(() => {
      if (!canvasRef.current || fabricRef.current) return;

      const scale = Math.min(MAX_DISPLAY / width, MAX_DISPLAY / height, 1);
      const displayW = width * scale;
      const displayH = height * scale;

      const canvas = new fabric.Canvas(canvasRef.current, {
        width: displayW,
        height: displayH,
        backgroundColor: backgroundColor,
        preserveObjectStacking: true,
      });

      canvas.setZoom(scale);

      canvas.on("object:modified", saveHistory);
      canvas.on("object:added", saveHistory);
      canvas.on("object:removed", saveHistory);

      canvas.on("selection:created", (e) => {
        onSelectionChange?.(e.selected?.[0] || null);
      });
      canvas.on("selection:updated", (e) => {
        onSelectionChange?.(e.selected?.[0] || null);
      });
      canvas.on("selection:cleared", () => {
        onSelectionChange?.(null);
      });

      fabricRef.current = canvas;
      saveHistory();

      return () => {
        canvas.dispose();
        fabricRef.current = null;
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Update canvas size when dimensions change
    useEffect(() => {
      const canvas = fabricRef.current;
      if (!canvas) return;

      const scale = Math.min(MAX_DISPLAY / width, MAX_DISPLAY / height, 1);
      canvas.setDimensions({
        width: width * scale,
        height: height * scale,
      });
      canvas.setZoom(scale);
      canvas.backgroundColor = backgroundColor;
      canvas.renderAll();
    }, [width, height, backgroundColor]);

    useImperativeHandle(ref, () => ({
      canvas: fabricRef.current,

      getCanvas: () => fabricRef.current,

      addSvgElement: (svgString: string) => {
        const canvas = fabricRef.current;
        if (!canvas) return;

        fabric.loadSVGFromString(svgString).then((result) => {
          const group = fabric.util.groupSVGElements(
            result.objects.filter(Boolean) as fabric.FabricObject[],
            result.options
          );
          group.scaleToWidth(120);
          group.set({
            left: width / 2 - 60,
            top: height / 2 - 60,
          });
          canvas.add(group);
          canvas.setActiveObject(group);
          canvas.renderAll();
        });
      },

      addText: (text: string, options?: Record<string, unknown>) => {
        const canvas = fabricRef.current;
        if (!canvas) return;

        const itext = new fabric.IText(text, {
          left: width / 2 - 100,
          top: height / 2 - 20,
          fontFamily: "'Playfair Display', serif",
          fontSize: 36,
          fill: "#4a3728",
          textAlign: "center",
          ...options,
        });
        canvas.add(itext);
        canvas.setActiveObject(itext);
        canvas.renderAll();
      },

      setBackgroundColor: (color: string) => {
        const canvas = fabricRef.current;
        if (!canvas) return;
        canvas.backgroundColor = color;
        canvas.renderAll();
        saveHistory();
      },

      exportPng: () => {
        const canvas = fabricRef.current;
        if (!canvas) return;

        const zoom = canvas.getZoom();
        canvas.setZoom(1);
        canvas.setDimensions({ width, height });

        const dataUrl = canvas.toDataURL({
          format: "png",
          quality: 1,
          multiplier: 1,
        });

        canvas.setZoom(zoom);
        const scale = Math.min(MAX_DISPLAY / width, MAX_DISPLAY / height, 1);
        canvas.setDimensions({ width: width * scale, height: height * scale });

        const link = document.createElement("a");
        link.download = "wall-art.png";
        link.href = dataUrl;
        link.click();
      },

      exportJpg: () => {
        const canvas = fabricRef.current;
        if (!canvas) return;

        const zoom = canvas.getZoom();
        canvas.setZoom(1);
        canvas.setDimensions({ width, height });

        const dataUrl = canvas.toDataURL({
          format: "jpeg",
          quality: 0.95,
          multiplier: 1,
        });

        canvas.setZoom(zoom);
        const scale = Math.min(MAX_DISPLAY / width, MAX_DISPLAY / height, 1);
        canvas.setDimensions({ width: width * scale, height: height * scale });

        const link = document.createElement("a");
        link.download = "wall-art.jpg";
        link.href = dataUrl;
        link.click();
      },

      clearCanvas: () => {
        const canvas = fabricRef.current;
        if (!canvas) return;
        canvas.clear();
        canvas.backgroundColor = backgroundColor;
        canvas.renderAll();
        saveHistory();
      },

      undo: () => {
        const canvas = fabricRef.current;
        if (!canvas || historyIndexRef.current <= 0) return;

        skipHistoryRef.current = true;
        historyIndexRef.current--;
        const json = historyRef.current[historyIndexRef.current];
        canvas.loadFromJSON(JSON.parse(json)).then(() => {
          canvas.renderAll();
          skipHistoryRef.current = false;
        });
      },

      redo: () => {
        const canvas = fabricRef.current;
        if (!canvas || historyIndexRef.current >= historyRef.current.length - 1) return;

        skipHistoryRef.current = true;
        historyIndexRef.current++;
        const json = historyRef.current[historyIndexRef.current];
        canvas.loadFromJSON(JSON.parse(json)).then(() => {
          canvas.renderAll();
          skipHistoryRef.current = false;
        });
      },

      deleteSelected: () => {
        const canvas = fabricRef.current;
        if (!canvas) return;
        const active = canvas.getActiveObjects();
        if (active.length) {
          active.forEach((obj) => canvas.remove(obj));
          canvas.discardActiveObject();
          canvas.renderAll();
          saveHistory();
        }
      },
    }));

    return (
      <div className="flex items-center justify-center">
        <div className="canvas-container bg-white rounded-lg overflow-hidden">
          <canvas ref={canvasRef} />
        </div>
      </div>
    );
  }
);

EditorCanvas.displayName = "EditorCanvas";
export default EditorCanvas;
