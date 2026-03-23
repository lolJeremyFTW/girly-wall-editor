"use client";

import { useState, useRef, useEffect } from "react";
import {
  SiteConfig,
  saveConfig,
  applyConfigChanges,
  parseConfigFromResponse,
  loadVersionHistory,
  rollbackToVersion,
} from "@/app/lib/versioning";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  configApplied?: boolean;
}

interface ChatbotProps {
  siteConfig: SiteConfig;
  onConfigChange: (config: SiteConfig) => void;
}

export default function Chatbot({ siteConfig, onConfigChange }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showVersions, setShowVersions] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm your design assistant. Ask me anything about design, or tell me to change the site's colors, fonts, or settings!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            role: m.role,
            content: m.content,
          })),
          siteConfig,
        }),
      });
      const data = await res.json();

      if (data.error) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: `Oops! ${data.error}` },
        ]);
      } else {
        const responseText = data.message;
        const configChanges = parseConfigFromResponse(responseText);

        if (configChanges) {
          const newConfig = applyConfigChanges(siteConfig, configChanges);
          saveConfig(newConfig);
          onConfigChange(newConfig);

          // Clean the response (remove config block)
          const cleanResponse = responseText
            .replace(/```config[\s\S]*?```/g, "")
            .trim();

          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content:
                cleanResponse +
                `\n\n(Applied changes - v${newConfig.version})`,
              configApplied: true,
            },
          ]);
        } else {
          setMessages((prev) => [
            ...prev,
            { role: "assistant", content: responseText },
          ]);
        }
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I couldn't connect to the AI service right now.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const versions = loadVersionHistory();

  const handleRollback = (version: number) => {
    const restored = rollbackToVersion(version);
    if (restored) {
      onConfigChange(restored);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Rolled back to version ${version}! Refresh might be needed for full effect.`,
          configApplied: true,
        },
      ]);
      setShowVersions(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-pink to-dusty-rose
                   text-white shadow-lg hover:shadow-xl transition-all z-50 flex items-center justify-center
                   cursor-pointer border-none hover:scale-105"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-[500px] bg-white rounded-2xl shadow-2xl z-50
                        flex flex-col overflow-hidden border border-pink/20">
          {/* Header */}
          <div className="bg-gradient-to-r from-pink to-lavender px-4 py-3 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Design Assistant</h3>
              <p className="text-[10px] text-foreground/60">
                v{siteConfig.version} &middot; Powered by MiniMax
              </p>
            </div>
            <button
              onClick={() => setShowVersions(!showVersions)}
              className="text-xs px-2 py-1 rounded-lg bg-white/50 hover:bg-white/80
                         text-foreground/70 cursor-pointer border-none transition-all"
            >
              {showVersions ? "Chat" : "Versions"}
            </button>
          </div>

          {showVersions ? (
            /* Version history */
            <div className="flex-1 overflow-y-auto p-3">
              <h4 className="text-xs font-medium text-foreground/60 mb-2">
                Version History
              </h4>
              {versions.map((v, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-cream/50 mb-1"
                >
                  <div>
                    <span className="text-xs font-medium">v{v.version}</span>
                    <span className="text-[10px] text-foreground/40 ml-2">
                      {new Date(v.timestamp).toLocaleDateString()}
                    </span>
                  </div>
                  {v.version !== siteConfig.version && (
                    <button
                      onClick={() => handleRollback(v.version)}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-pink/20 hover:bg-pink/40
                                 text-foreground/60 cursor-pointer border-none"
                    >
                      Rollback
                    </button>
                  )}
                  {v.version === siteConfig.version && (
                    <span className="text-[10px] text-sage font-medium">Current</span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-3 space-y-3">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] px-3 py-2 rounded-2xl text-xs leading-relaxed ${
                        msg.role === "user"
                          ? "bg-pink text-foreground rounded-br-md"
                          : "bg-cream text-foreground/80 rounded-bl-md"
                      } ${msg.configApplied ? "border-2 border-sage/50" : ""}`}
                    >
                      {msg.content}
                      {msg.configApplied && (
                        <span className="block text-[9px] text-sage mt-1 font-medium">
                          Site updated
                        </span>
                      )}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-cream px-3 py-2 rounded-2xl rounded-bl-md text-xs text-foreground/50">
                      Thinking...
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Input */}
              <div className="p-3 border-t border-pink/20">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Ask me anything..."
                    className="flex-1 px-3 py-2 text-xs rounded-xl border border-pink/30 bg-cream/30
                               focus:outline-none focus:border-pink focus:ring-1 focus:ring-pink/30
                               placeholder:text-foreground/30"
                  />
                  <button
                    onClick={sendMessage}
                    disabled={loading || !input.trim()}
                    className="px-3 py-2 bg-pink hover:bg-pink-dark rounded-xl text-xs font-medium
                               text-foreground transition-all disabled:opacity-40 cursor-pointer border-none"
                  >
                    Send
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
