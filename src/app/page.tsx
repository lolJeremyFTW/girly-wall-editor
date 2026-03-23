"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import * as fabric from "fabric";
import dynamic from "next/dynamic";
import Toolbar from "./components/Editor/Toolbar";
import ElementPanel from "./components/Editor/ElementPanel";
import PropertyPanel from "./components/Editor/PropertyPanel";
import TemplatePanel from "./components/Editor/TemplatePanel";
import QuoteGenerator from "./components/AI/QuoteGenerator";
import Randomizer from "./components/AI/Randomizer";
import Chatbot from "./components/AI/Chatbot";
import SizePresets from "./components/UI/SizePresets";
import { SiteConfig, loadConfig, DEFAULT_CONFIG } from "./lib/versioning";
import type { CanvasHandle } from "./components/Editor/Canvas";

const EditorCanvas = dynamic(() => import("./components/Editor/Canvas"), {
  ssr: false,
});

type SidebarTab = "templates" | "elements" | "properties" | "ai";

export default function Home() {
  const canvasRef = useRef<CanvasHandle>(null);
  const [siteConfig, setSiteConfig] = useState<SiteConfig>(DEFAULT_CONFIG);
  const [canvasWidth, setCanvasWidth] = useState(2480);
  const [canvasHeight, setCanvasHeight] = useState(3508);
  const [backgroundColor, setBackgroundColor] = useState("#f5ece0");
  const [selectedObject, setSelectedObject] = useState<fabric.FabricObject | null>(null);
  const [activeTab, setActiveTab] = useState<SidebarTab>("templates");

  useEffect(() => {
    const config = loadConfig();
    setSiteConfig(config);
    setCanvasWidth(config.canvasDefaults.width);
    setCanvasHeight(config.canvasDefaults.height);
    setBackgroundColor(config.canvasDefaults.backgroundColor);
  }, []);

  const handleSelectionChange = useCallback((obj: fabric.FabricObject | null) => {
    setSelectedObject(obj);
    if (obj) setActiveTab("properties");
  }, []);

  const handlePresetChange = (w: number, h: number) => {
    setCanvasWidth(w);
    setCanvasHeight(h);
  };

  const handleConfigChange = (config: SiteConfig) => {
    setSiteConfig(config);
    setBackgroundColor(config.canvasDefaults.backgroundColor);
    canvasRef.current?.setBackgroundColor(config.canvasDefaults.backgroundColor);
  };

  const tabs: { id: SidebarTab; label: string; icon: string }[] = [
    { id: "templates", label: "Templates", icon: "📋" },
    { id: "elements", label: "Elements", icon: "🍂" },
    { id: "properties", label: "Style", icon: "🎨" },
    { id: "ai", label: "AI", icon: "💫" },
  ];

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-3 bg-white/60 backdrop-blur-sm border-b border-foreground/8">
        <div className="flex items-center gap-3">
          <h1
            className="text-xl font-semibold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span style={{ color: "#8b5e3c" }}>Girly</span>{" "}
            <span className="text-foreground/80">Wall Art</span>
          </h1>
          <span className="text-[10px] text-foreground/30 bg-cream px-2 py-0.5 rounded-full">
            v{siteConfig.version}
          </span>
        </div>
        <Toolbar canvasRef={canvasRef} />
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - Tabs */}
        <div className="w-64 bg-white/40 backdrop-blur-sm border-r border-foreground/8 flex flex-col">
          {/* Tab buttons */}
          <div className="flex border-b border-foreground/8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-2.5 text-[10px] font-medium transition-all cursor-pointer border-none ${
                  activeTab === tab.id
                    ? "bg-foreground/5 text-foreground"
                    : "text-foreground/40 hover:text-foreground/60 hover:bg-foreground/3 bg-transparent"
                }`}
                style={activeTab === tab.id ? { borderBottom: "2px solid #c4a888" } : {}}
              >
                <span className="block text-sm mb-0.5">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="flex-1 overflow-hidden">
            {activeTab === "templates" && (
              <div className="overflow-y-auto h-full">
                <TemplatePanel
                  canvasRef={canvasRef}
                  onBackgroundChange={setBackgroundColor}
                />
              </div>
            )}
            {activeTab === "elements" && (
              <ElementPanel canvasRef={canvasRef} />
            )}
            {activeTab === "properties" && (
              <div className="overflow-y-auto h-full">
                <SizePresets
                  currentWidth={canvasWidth}
                  currentHeight={canvasHeight}
                  onChange={handlePresetChange}
                />
                <PropertyPanel
                  selectedObject={selectedObject}
                  canvasRef={canvasRef}
                  canvasWidth={canvasWidth}
                  canvasHeight={canvasHeight}
                  backgroundColor={backgroundColor}
                  onCanvasPresetChange={handlePresetChange}
                  onBackgroundColorChange={setBackgroundColor}
                />
              </div>
            )}
            {activeTab === "ai" && (
              <div className="overflow-y-auto h-full">
                <QuoteGenerator canvasRef={canvasRef} siteConfig={siteConfig} />
                <div className="border-t border-foreground/8" />
                <Randomizer
                  canvasRef={canvasRef}
                  onBackgroundChange={setBackgroundColor}
                />
              </div>
            )}
          </div>
        </div>

        {/* Main Canvas Area */}
        <div className="flex-1 flex items-center justify-center bg-background overflow-auto p-8">
          <EditorCanvas
            ref={canvasRef}
            width={canvasWidth}
            height={canvasHeight}
            backgroundColor={backgroundColor}
            onSelectionChange={handleSelectionChange}
          />
        </div>
      </div>

      {/* AI Chatbot */}
      <Chatbot siteConfig={siteConfig} onConfigChange={handleConfigChange} />
    </div>
  );
}
