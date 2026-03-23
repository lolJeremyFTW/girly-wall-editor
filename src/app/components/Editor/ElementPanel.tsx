"use client";

import { useState } from "react";
import { ELEMENTS, ELEMENT_CATEGORIES, ElementItem } from "@/app/lib/elements";
import { CanvasHandle } from "./Canvas";

interface ElementPanelProps {
  canvasRef: React.RefObject<CanvasHandle | null>;
}

export default function ElementPanel({ canvasRef }: ElementPanelProps) {
  const [activeCategory, setActiveCategory] = useState<string>("flowers");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredElements = ELEMENTS.filter((el) => {
    const matchesCategory = el.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      el.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      el.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return searchQuery ? matchesSearch : matchesCategory;
  });

  const handleAddElement = (element: ElementItem) => {
    canvasRef.current?.addSvgElement(element.svg);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="px-3 pt-3 pb-2">
        <h3 className="text-sm font-semibold text-foreground/80 mb-2">Elements</h3>
        <input
          type="text"
          placeholder="Search elements..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-3 py-1.5 text-sm rounded-lg border border-pink/30 bg-cream/50
                     focus:outline-none focus:border-pink focus:ring-1 focus:ring-pink/30
                     placeholder:text-foreground/30"
        />
      </div>

      {!searchQuery && (
        <div className="flex gap-1 px-3 pb-2 flex-wrap">
          {ELEMENT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-2 py-1 text-xs rounded-full transition-all cursor-pointer border-none ${
                activeCategory === cat.id
                  ? "bg-pink text-foreground font-medium"
                  : "bg-cream/50 text-foreground/60 hover:bg-pink/30"
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>
      )}

      <div className="flex-1 overflow-y-auto px-3 pb-3">
        <div className="grid grid-cols-3 gap-2">
          {filteredElements.map((el) => (
            <button
              key={el.id}
              onClick={() => handleAddElement(el)}
              className="group flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-pink/20
                         transition-all cursor-pointer border border-transparent hover:border-pink/30 bg-transparent"
              title={el.name}
            >
              <div
                className="w-12 h-12 flex items-center justify-center"
                dangerouslySetInnerHTML={{ __html: el.svg }}
              />
              <span className="text-[10px] text-foreground/50 group-hover:text-foreground/80 truncate w-full text-center">
                {el.name}
              </span>
            </button>
          ))}
        </div>
        {filteredElements.length === 0 && (
          <p className="text-center text-sm text-foreground/40 mt-8">
            No elements found
          </p>
        )}
      </div>
    </div>
  );
}
