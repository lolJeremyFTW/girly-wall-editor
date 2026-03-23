export interface SiteConfig {
  version: number;
  timestamp: string;
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    [key: string]: string;
  };
  defaultFonts: string[];
  canvasDefaults: {
    width: number;
    height: number;
    backgroundColor: string;
  };
  quoteCategories: string[];
  chatbotPersonality: string;
}

export const DEFAULT_CONFIG: SiteConfig = {
  version: 1,
  timestamp: new Date().toISOString(),
  theme: {
    primary: "#f4c2c2",
    secondary: "#fff0f5",
    accent: "#d4a373",
    background: "#fdf6f0",
    text: "#4a3728",
  },
  defaultFonts: ["Playfair Display", "Dancing Script", "Quicksand"],
  canvasDefaults: {
    width: 2480,
    height: 3508,
    backgroundColor: "#fff8f0",
  },
  quoteCategories: [
    "self-love",
    "motivation",
    "nature",
    "friendship",
    "gratitude",
    "aesthetic",
  ],
  chatbotPersonality: "friendly, girly, encouraging, creative",
};

const STORAGE_KEY = "girly-editor-config";
const VERSIONS_KEY = "girly-editor-versions";

export function loadConfig(): SiteConfig {
  if (typeof window === "undefined") return DEFAULT_CONFIG;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return DEFAULT_CONFIG;
}

export function saveConfig(config: SiteConfig): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(config));

  // Save to version history
  const versions = loadVersionHistory();
  versions.push(config);
  localStorage.setItem(VERSIONS_KEY, JSON.stringify(versions));
}

export function loadVersionHistory(): SiteConfig[] {
  if (typeof window === "undefined") return [DEFAULT_CONFIG];
  try {
    const stored = localStorage.getItem(VERSIONS_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return [DEFAULT_CONFIG];
}

export function rollbackToVersion(version: number): SiteConfig | null {
  const versions = loadVersionHistory();
  const target = versions.find((v) => v.version === version);
  if (target) {
    const restored = { ...target, timestamp: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(restored));
    return restored;
  }
  return null;
}

export function applyConfigChanges(
  current: SiteConfig,
  changes: Record<string, unknown>
): SiteConfig {
  const newConfig: SiteConfig = {
    ...current,
    version: current.version + 1,
    timestamp: new Date().toISOString(),
  };

  if (changes.theme && typeof changes.theme === "object") {
    newConfig.theme = { ...current.theme, ...(changes.theme as Record<string, string>) };
  }
  if (Array.isArray(changes.defaultFonts)) {
    newConfig.defaultFonts = changes.defaultFonts as string[];
  }
  if (changes.canvasDefaults && typeof changes.canvasDefaults === "object") {
    newConfig.canvasDefaults = {
      ...current.canvasDefaults,
      ...(changes.canvasDefaults as Record<string, unknown>),
    } as SiteConfig["canvasDefaults"];
  }
  if (Array.isArray(changes.quoteCategories)) {
    newConfig.quoteCategories = changes.quoteCategories as string[];
  }
  if (typeof changes.chatbotPersonality === "string") {
    newConfig.chatbotPersonality = changes.chatbotPersonality;
  }

  return newConfig;
}

export function parseConfigFromResponse(response: string): Record<string, unknown> | null {
  const match = response.match(/```config\s*\n([\s\S]*?)\n```/);
  if (match) {
    try {
      return JSON.parse(match[1]);
    } catch {
      return null;
    }
  }
  return null;
}
