export interface ElementItem {
  id: string;
  name: string;
  category: string;
  svg: string;
  tags: string[];
}

export const ELEMENT_CATEGORIES = [
  { id: "flowers", name: "Flowers", icon: "🌸" },
  { id: "shapes", name: "Shapes", icon: "💗" },
  { id: "decorative", name: "Decorative", icon: "✨" },
  { id: "frames", name: "Frames", icon: "🖼️" },
  { id: "nature", name: "Nature", icon: "🌿" },
] as const;

export const ELEMENTS: ElementItem[] = [
  // === FLOWERS ===
  {
    id: "rose-1",
    name: "Rose",
    category: "flowers",
    tags: ["flower", "rose", "romantic"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 20c-8 0-15 7-15 15 0 5 3 9 7 12-4 3-7 8-7 14 0 10 8 18 18 18s18-8 18-18c0-6-3-11-7-14 4-3 7-7 7-12 0-8-7-15-15-15z" fill="#e8a0a0" opacity="0.8"/><path d="M50 25c-5 0-10 5-10 10 0 4 2 7 5 9-3 2-5 6-5 10 0 7 5 13 13 13s13-6 13-13c0-4-2-8-5-10 3-2 5-5 5-9 0-5-5-10-10-10z" fill="#f4c2c2" opacity="0.9"/><path d="M50 30c-3 0-6 3-6 6s3 6 6 6 6-3 6-6-3-6-6-6z" fill="#ffd1dc"/><line x1="50" y1="61" x2="50" y2="90" stroke="#7a9a6a" stroke-width="2.5"/><path d="M50 70c-5-3-10-2-13 1" fill="none" stroke="#7a9a6a" stroke-width="1.5"/><path d="M50 78c5-3 10-2 12 1" fill="none" stroke="#7a9a6a" stroke-width="1.5"/></svg>`,
  },
  {
    id: "daisy-1",
    name: "Daisy",
    category: "flowers",
    tags: ["flower", "daisy", "cute"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g transform="translate(50,40)"><ellipse cx="0" cy="-18" rx="5" ry="12" fill="white" stroke="#e8e0d0" stroke-width="0.5"/><ellipse cx="0" cy="-18" rx="5" ry="12" fill="white" stroke="#e8e0d0" stroke-width="0.5" transform="rotate(45)"/><ellipse cx="0" cy="-18" rx="5" ry="12" fill="white" stroke="#e8e0d0" stroke-width="0.5" transform="rotate(90)"/><ellipse cx="0" cy="-18" rx="5" ry="12" fill="white" stroke="#e8e0d0" stroke-width="0.5" transform="rotate(135)"/><ellipse cx="0" cy="-18" rx="5" ry="12" fill="white" stroke="#e8e0d0" stroke-width="0.5" transform="rotate(180)"/><ellipse cx="0" cy="-18" rx="5" ry="12" fill="white" stroke="#e8e0d0" stroke-width="0.5" transform="rotate(225)"/><ellipse cx="0" cy="-18" rx="5" ry="12" fill="white" stroke="#e8e0d0" stroke-width="0.5" transform="rotate(270)"/><ellipse cx="0" cy="-18" rx="5" ry="12" fill="white" stroke="#e8e0d0" stroke-width="0.5" transform="rotate(315)"/><circle cx="0" cy="0" r="8" fill="#f5d77a"/></g><line x1="50" y1="55" x2="50" y2="92" stroke="#7a9a6a" stroke-width="2.5"/></svg>`,
  },
  {
    id: "sunflower-1",
    name: "Sunflower",
    category: "flowers",
    tags: ["flower", "sunflower", "happy"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g transform="translate(50,42)"><ellipse cx="0" cy="-18" rx="6" ry="13" fill="#f5c542"/><ellipse cx="0" cy="-18" rx="6" ry="13" fill="#f5c542" transform="rotate(30)"/><ellipse cx="0" cy="-18" rx="6" ry="13" fill="#f5c542" transform="rotate(60)"/><ellipse cx="0" cy="-18" rx="6" ry="13" fill="#f5c542" transform="rotate(90)"/><ellipse cx="0" cy="-18" rx="6" ry="13" fill="#f5c542" transform="rotate(120)"/><ellipse cx="0" cy="-18" rx="6" ry="13" fill="#f5c542" transform="rotate(150)"/><ellipse cx="0" cy="-18" rx="6" ry="13" fill="#e8b030" transform="rotate(15)"/><ellipse cx="0" cy="-18" rx="6" ry="13" fill="#e8b030" transform="rotate(45)"/><ellipse cx="0" cy="-18" rx="6" ry="13" fill="#e8b030" transform="rotate(75)"/><ellipse cx="0" cy="-18" rx="6" ry="13" fill="#e8b030" transform="rotate(105)"/><ellipse cx="0" cy="-18" rx="6" ry="13" fill="#e8b030" transform="rotate(135)"/><ellipse cx="0" cy="-18" rx="6" ry="13" fill="#e8b030" transform="rotate(165)"/><circle cx="0" cy="0" r="10" fill="#5a3e1b"/></g><line x1="50" y1="58" x2="50" y2="95" stroke="#5a7a3a" stroke-width="3"/></svg>`,
  },
  {
    id: "cherry-blossom-1",
    name: "Cherry Blossom",
    category: "flowers",
    tags: ["flower", "cherry", "blossom", "japanese"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g transform="translate(50,45)"><path d="M0,-20 Q5,-12 0,-5 Q-5,-12 0,-20Z" fill="#ffb7c5" opacity="0.9"/><path d="M0,-20 Q5,-12 0,-5 Q-5,-12 0,-20Z" fill="#ffb7c5" opacity="0.9" transform="rotate(72)"/><path d="M0,-20 Q5,-12 0,-5 Q-5,-12 0,-20Z" fill="#ffb7c5" opacity="0.9" transform="rotate(144)"/><path d="M0,-20 Q5,-12 0,-5 Q-5,-12 0,-20Z" fill="#ffb7c5" opacity="0.9" transform="rotate(216)"/><path d="M0,-20 Q5,-12 0,-5 Q-5,-12 0,-20Z" fill="#ffb7c5" opacity="0.9" transform="rotate(288)"/><circle cx="0" cy="0" r="5" fill="#ff69b4" opacity="0.6"/><circle cx="0" cy="-3" r="1" fill="#c9184a"/><circle cx="2" cy="1" r="1" fill="#c9184a"/><circle cx="-2" cy="1" r="1" fill="#c9184a"/></g></svg>`,
  },
  {
    id: "tulip-1",
    name: "Tulip",
    category: "flowers",
    tags: ["flower", "tulip", "spring"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M45 40 Q42 25 50 15 Q58 25 55 40Z" fill="#e8a0a0"/><path d="M40 42 Q38 30 45 20" fill="none" stroke="#d48a8a" stroke-width="1"/><path d="M55 42 Q58 30 55 20" fill="none" stroke="#d48a8a" stroke-width="1"/><path d="M42 40 Q50 45 58 40 Q55 48 50 50 Q45 48 42 40Z" fill="#c98080"/><line x1="50" y1="50" x2="50" y2="88" stroke="#5a8a4a" stroke-width="2.5"/><path d="M50 65 Q40 60 35 65" fill="none" stroke="#5a8a4a" stroke-width="2"/><ellipse cx="35" cy="65" rx="6" ry="3" fill="#7aaa6a" opacity="0.7" transform="rotate(-20 35 65)"/></svg>`,
  },
  {
    id: "lavender-1",
    name: "Lavender",
    category: "flowers",
    tags: ["flower", "lavender", "purple"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="95" x2="50" y2="30" stroke="#6a8a5a" stroke-width="2"/><ellipse cx="50" cy="30" rx="3" ry="4" fill="#9b7cc4"/><ellipse cx="48" cy="35" rx="3" ry="4" fill="#a88cd0"/><ellipse cx="52" cy="35" rx="3" ry="4" fill="#a88cd0"/><ellipse cx="49" cy="41" rx="3" ry="4" fill="#b49cda"/><ellipse cx="51" cy="41" rx="3" ry="4" fill="#b49cda"/><ellipse cx="48" cy="47" rx="3" ry="4" fill="#c0ace4"/><ellipse cx="52" cy="47" rx="3" ry="4" fill="#c0ace4"/><ellipse cx="49" cy="53" rx="3" ry="4" fill="#ccbcee"/><ellipse cx="51" cy="53" rx="3" ry="4" fill="#ccbcee"/></svg>`,
  },
  {
    id: "wildflower-1",
    name: "Wildflower",
    category: "flowers",
    tags: ["flower", "wild", "meadow"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="90" x2="50" y2="40" stroke="#6a9a5a" stroke-width="1.5"/><line x1="50" y1="60" x2="35" y2="50" stroke="#6a9a5a" stroke-width="1.5"/><line x1="50" y1="70" x2="65" y2="58" stroke="#6a9a5a" stroke-width="1.5"/><g transform="translate(50,35)"><circle cx="0" cy="-6" r="3" fill="#f4c2c2"/><circle cx="5" cy="-2" r="3" fill="#f4c2c2"/><circle cx="3" cy="4" r="3" fill="#f4c2c2"/><circle cx="-3" cy="4" r="3" fill="#f4c2c2"/><circle cx="-5" cy="-2" r="3" fill="#f4c2c2"/><circle cx="0" cy="0" r="2.5" fill="#f5d77a"/></g><g transform="translate(35,46) scale(0.6)"><circle cx="0" cy="-6" r="3" fill="#e6e0f3"/><circle cx="5" cy="-2" r="3" fill="#e6e0f3"/><circle cx="3" cy="4" r="3" fill="#e6e0f3"/><circle cx="-3" cy="4" r="3" fill="#e6e0f3"/><circle cx="-5" cy="-2" r="3" fill="#e6e0f3"/><circle cx="0" cy="0" r="2.5" fill="#f5d77a"/></g><g transform="translate(65,53) scale(0.7)"><circle cx="0" cy="-6" r="3" fill="#ffd1dc"/><circle cx="5" cy="-2" r="3" fill="#ffd1dc"/><circle cx="3" cy="4" r="3" fill="#ffd1dc"/><circle cx="-3" cy="4" r="3" fill="#ffd1dc"/><circle cx="-5" cy="-2" r="3" fill="#ffd1dc"/><circle cx="0" cy="0" r="2.5" fill="#f5d77a"/></g></svg>`,
  },
  {
    id: "peony-1",
    name: "Peony",
    category: "flowers",
    tags: ["flower", "peony", "lush"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="45" r="22" fill="#f0b0c0" opacity="0.4"/><circle cx="45" cy="40" r="15" fill="#f4c2c2" opacity="0.6"/><circle cx="55" cy="40" r="15" fill="#f4c2c2" opacity="0.6"/><circle cx="50" cy="48" r="14" fill="#f4c2c2" opacity="0.6"/><circle cx="47" cy="43" r="10" fill="#ffd1dc" opacity="0.7"/><circle cx="53" cy="43" r="10" fill="#ffd1dc" opacity="0.7"/><circle cx="50" cy="46" r="8" fill="#ffe0e8" opacity="0.8"/><circle cx="50" cy="44" r="4" fill="#fff0f4"/><line x1="50" y1="65" x2="50" y2="92" stroke="#5a8a4a" stroke-width="2.5"/><path d="M50 75 Q40 70 38 75" fill="none" stroke="#5a8a4a" stroke-width="1.5"/></svg>`,
  },

  // === SHAPES ===
  {
    id: "heart-1",
    name: "Heart",
    category: "shapes",
    tags: ["heart", "love"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 85 C20 60 5 40 15 25 C25 10 40 15 50 30 C60 15 75 10 85 25 C95 40 80 60 50 85Z" fill="#f4c2c2"/></svg>`,
  },
  {
    id: "heart-outline",
    name: "Heart Outline",
    category: "shapes",
    tags: ["heart", "love", "outline"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 85 C20 60 5 40 15 25 C25 10 40 15 50 30 C60 15 75 10 85 25 C95 40 80 60 50 85Z" fill="none" stroke="#e8a0a0" stroke-width="2.5"/></svg>`,
  },
  {
    id: "star-1",
    name: "Star",
    category: "shapes",
    tags: ["star", "sparkle"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><polygon points="50,10 61,38 92,38 67,56 76,85 50,68 24,85 33,56 8,38 39,38" fill="#f5d77a" opacity="0.9"/></svg>`,
  },
  {
    id: "circle-1",
    name: "Circle",
    category: "shapes",
    tags: ["circle", "round"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="#ffd1dc" opacity="0.6"/></svg>`,
  },
  {
    id: "circle-outline",
    name: "Circle Outline",
    category: "shapes",
    tags: ["circle", "round", "outline"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="none" stroke="#d4a373" stroke-width="2"/></svg>`,
  },
  {
    id: "arch-1",
    name: "Arch",
    category: "shapes",
    tags: ["arch", "modern"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M20 90 L20 40 Q20 10 50 10 Q80 10 80 40 L80 90Z" fill="#e6e0f3" opacity="0.5"/></svg>`,
  },
  {
    id: "diamond-1",
    name: "Diamond",
    category: "shapes",
    tags: ["diamond", "gem"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><polygon points="50,10 85,50 50,90 15,50" fill="#c5d5c5" opacity="0.6"/></svg>`,
  },
  {
    id: "crescent-1",
    name: "Crescent Moon",
    category: "shapes",
    tags: ["moon", "crescent", "night"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M60 15 A35 35 0 1 0 60 85 A28 28 0 1 1 60 15Z" fill="#f5d77a" opacity="0.7"/></svg>`,
  },

  // === DECORATIVE ===
  {
    id: "leaf-1",
    name: "Leaf",
    category: "decorative",
    tags: ["leaf", "nature", "green"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 10 Q80 30 70 60 Q60 80 50 90 Q40 80 30 60 Q20 30 50 10Z" fill="#c5d5c5"/><line x1="50" y1="20" x2="50" y2="85" stroke="#a0b8a0" stroke-width="1.5"/><path d="M50 35 Q40 30 35 35" fill="none" stroke="#a0b8a0" stroke-width="1"/><path d="M50 45 Q60 40 65 45" fill="none" stroke="#a0b8a0" stroke-width="1"/><path d="M50 55 Q40 50 35 55" fill="none" stroke="#a0b8a0" stroke-width="1"/></svg>`,
  },
  {
    id: "branch-1",
    name: "Branch",
    category: "decorative",
    tags: ["branch", "nature"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M20 80 Q40 60 50 50 Q60 40 80 20" fill="none" stroke="#8a7a6a" stroke-width="2"/><ellipse cx="35" cy="58" rx="6" ry="3" fill="#c5d5c5" transform="rotate(-40 35 58)"/><ellipse cx="45" cy="45" rx="6" ry="3" fill="#c5d5c5" transform="rotate(-50 45 45)"/><ellipse cx="58" cy="38" rx="6" ry="3" fill="#c5d5c5" transform="rotate(-40 58 38)"/><ellipse cx="68" cy="28" rx="6" ry="3" fill="#c5d5c5" transform="rotate(-50 68 28)"/><ellipse cx="30" cy="65" rx="5" ry="3" fill="#b0c8a0" transform="rotate(-30 30 65)"/><ellipse cx="55" cy="32" rx="5" ry="3" fill="#b0c8a0" transform="rotate(-60 55 32)"/></svg>`,
  },
  {
    id: "butterfly-1",
    name: "Butterfly",
    category: "decorative",
    tags: ["butterfly", "insect", "pretty"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 50 Q30 25 15 35 Q5 45 25 55 Q35 60 50 50Z" fill="#e6e0f3" opacity="0.8"/><path d="M50 50 Q70 25 85 35 Q95 45 75 55 Q65 60 50 50Z" fill="#e6e0f3" opacity="0.8"/><path d="M50 50 Q35 60 25 70 Q20 78 35 75 Q45 70 50 55Z" fill="#ffd1dc" opacity="0.7"/><path d="M50 50 Q65 60 75 70 Q80 78 65 75 Q55 70 50 55Z" fill="#ffd1dc" opacity="0.7"/><line x1="50" y1="35" x2="50" y2="65" stroke="#8a7a6a" stroke-width="1.5"/><line x1="50" y1="38" x2="43" y2="28" stroke="#8a7a6a" stroke-width="1"/><line x1="50" y1="38" x2="57" y2="28" stroke="#8a7a6a" stroke-width="1"/></svg>`,
  },
  {
    id: "sparkle-1",
    name: "Sparkle",
    category: "decorative",
    tags: ["sparkle", "star", "shine"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 10 L53 42 L85 50 L53 58 L50 90 L47 58 L15 50 L47 42Z" fill="#f5d77a" opacity="0.8"/></svg>`,
  },
  {
    id: "ribbon-1",
    name: "Ribbon Bow",
    category: "decorative",
    tags: ["ribbon", "bow", "cute"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 45 Q30 25 20 35 Q10 45 30 50 Q10 55 20 65 Q30 75 50 55Z" fill="#f4c2c2"/><path d="M50 45 Q70 25 80 35 Q90 45 70 50 Q90 55 80 65 Q70 75 50 55Z" fill="#f4c2c2"/><circle cx="50" cy="50" r="5" fill="#e8a0a0"/><path d="M45 55 L40 80" stroke="#f4c2c2" stroke-width="3" stroke-linecap="round"/><path d="M55 55 L60 80" stroke="#f4c2c2" stroke-width="3" stroke-linecap="round"/></svg>`,
  },
  {
    id: "dots-1",
    name: "Dot Pattern",
    category: "decorative",
    tags: ["dots", "pattern"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="3" fill="#f4c2c2" opacity="0.6"/><circle cx="40" cy="20" r="3" fill="#e6e0f3" opacity="0.6"/><circle cx="60" cy="20" r="3" fill="#f4c2c2" opacity="0.6"/><circle cx="80" cy="20" r="3" fill="#e6e0f3" opacity="0.6"/><circle cx="30" cy="40" r="3" fill="#c5d5c5" opacity="0.6"/><circle cx="50" cy="40" r="3" fill="#f4c2c2" opacity="0.6"/><circle cx="70" cy="40" r="3" fill="#c5d5c5" opacity="0.6"/><circle cx="20" cy="60" r="3" fill="#e6e0f3" opacity="0.6"/><circle cx="40" cy="60" r="3" fill="#f4c2c2" opacity="0.6"/><circle cx="60" cy="60" r="3" fill="#e6e0f3" opacity="0.6"/><circle cx="80" cy="60" r="3" fill="#f4c2c2" opacity="0.6"/><circle cx="30" cy="80" r="3" fill="#f4c2c2" opacity="0.6"/><circle cx="50" cy="80" r="3" fill="#c5d5c5" opacity="0.6"/><circle cx="70" cy="80" r="3" fill="#f4c2c2" opacity="0.6"/></svg>`,
  },
  {
    id: "wreath-1",
    name: "Mini Wreath",
    category: "decorative",
    tags: ["wreath", "circle", "nature"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="30" fill="none" stroke="#7a9a6a" stroke-width="2"/><ellipse cx="25" cy="35" rx="6" ry="3" fill="#c5d5c5" transform="rotate(-60 25 35)"/><ellipse cx="22" cy="50" rx="6" ry="3" fill="#b0c8a0" transform="rotate(-80 22 50)"/><ellipse cx="25" cy="65" rx="6" ry="3" fill="#c5d5c5" transform="rotate(-120 25 65)"/><ellipse cx="35" cy="78" rx="6" ry="3" fill="#b0c8a0" transform="rotate(-150 35 78)"/><ellipse cx="50" cy="82" rx="6" ry="3" fill="#c5d5c5"/><ellipse cx="65" cy="78" rx="6" ry="3" fill="#b0c8a0" transform="rotate(150 65 78)"/><ellipse cx="75" cy="65" rx="6" ry="3" fill="#c5d5c5" transform="rotate(120 75 65)"/><ellipse cx="78" cy="50" rx="6" ry="3" fill="#b0c8a0" transform="rotate(80 78 50)"/><ellipse cx="75" cy="35" rx="6" ry="3" fill="#c5d5c5" transform="rotate(60 75 35)"/><ellipse cx="65" cy="22" rx="6" ry="3" fill="#b0c8a0" transform="rotate(30 65 22)"/><ellipse cx="50" cy="18" rx="6" ry="3" fill="#c5d5c5"/><ellipse cx="35" cy="22" rx="6" ry="3" fill="#b0c8a0" transform="rotate(-30 35 22)"/></svg>`,
  },
  {
    id: "cloud-1",
    name: "Cloud",
    category: "decorative",
    tags: ["cloud", "sky", "soft"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M25 65 Q10 65 10 55 Q10 45 22 45 Q22 35 35 32 Q48 25 55 35 Q60 28 70 32 Q82 35 80 48 Q90 50 90 58 Q90 65 78 65Z" fill="white" opacity="0.8" stroke="#e0d8d0" stroke-width="0.5"/></svg>`,
  },

  // === FRAMES ===
  {
    id: "frame-rect-1",
    name: "Rectangle Frame",
    category: "frames",
    tags: ["frame", "rectangle", "border"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="80" height="80" rx="2" fill="none" stroke="#d4a373" stroke-width="2"/><rect x="15" y="15" width="70" height="70" rx="1" fill="none" stroke="#d4a373" stroke-width="0.5"/></svg>`,
  },
  {
    id: "frame-ornate-1",
    name: "Ornate Frame",
    category: "frames",
    tags: ["frame", "ornate", "fancy"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="80" height="80" rx="3" fill="none" stroke="#d4a373" stroke-width="2"/><circle cx="10" cy="10" r="3" fill="#d4a373"/><circle cx="90" cy="10" r="3" fill="#d4a373"/><circle cx="10" cy="90" r="3" fill="#d4a373"/><circle cx="90" cy="90" r="3" fill="#d4a373"/><path d="M30 10 Q50 5 70 10" fill="none" stroke="#d4a373" stroke-width="1"/><path d="M30 90 Q50 95 70 90" fill="none" stroke="#d4a373" stroke-width="1"/><path d="M10 30 Q5 50 10 70" fill="none" stroke="#d4a373" stroke-width="1"/><path d="M90 30 Q95 50 90 70" fill="none" stroke="#d4a373" stroke-width="1"/></svg>`,
  },
  {
    id: "frame-arch-1",
    name: "Arch Frame",
    category: "frames",
    tags: ["frame", "arch"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M20 90 L20 35 Q20 10 50 10 Q80 10 80 35 L80 90" fill="none" stroke="#d4a373" stroke-width="2"/></svg>`,
  },
  {
    id: "banner-1",
    name: "Banner",
    category: "frames",
    tags: ["banner", "ribbon", "text"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M5 35 L15 35 L15 25 L85 25 L85 35 L95 35 L88 45 L95 55 L85 55 L85 65 L15 65 L15 55 L5 55 L12 45Z" fill="#ffd1dc" opacity="0.7" stroke="#e8a0a0" stroke-width="1"/></svg>`,
  },

  // === NATURE ===
  {
    id: "eucalyptus-1",
    name: "Eucalyptus",
    category: "nature",
    tags: ["eucalyptus", "green", "botanical"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 5 Q52 50 50 95" fill="none" stroke="#7a9a6a" stroke-width="1.5"/><ellipse cx="42" cy="18" rx="7" ry="5" fill="#a8c8a0" opacity="0.7" transform="rotate(-20 42 18)"/><ellipse cx="58" cy="28" rx="7" ry="5" fill="#b8d0a8" opacity="0.7" transform="rotate(20 58 28)"/><ellipse cx="42" cy="38" rx="7" ry="5" fill="#a8c8a0" opacity="0.7" transform="rotate(-20 42 38)"/><ellipse cx="58" cy="48" rx="7" ry="5" fill="#b8d0a8" opacity="0.7" transform="rotate(20 58 48)"/><ellipse cx="42" cy="58" rx="8" ry="5" fill="#a8c8a0" opacity="0.7" transform="rotate(-20 42 58)"/><ellipse cx="58" cy="68" rx="8" ry="5" fill="#b8d0a8" opacity="0.7" transform="rotate(20 58 68)"/><ellipse cx="42" cy="78" rx="9" ry="6" fill="#a8c8a0" opacity="0.7" transform="rotate(-20 42 78)"/></svg>`,
  },
  {
    id: "fern-1",
    name: "Fern",
    category: "nature",
    tags: ["fern", "green", "botanical"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 Q48 50 50 10" fill="none" stroke="#5a8a4a" stroke-width="1.5"/><path d="M50 20 Q35 15 30 20" fill="none" stroke="#7aaa6a" stroke-width="1"/><path d="M50 20 Q65 15 70 20" fill="none" stroke="#7aaa6a" stroke-width="1"/><path d="M50 30 Q32 24 25 30" fill="none" stroke="#7aaa6a" stroke-width="1"/><path d="M50 30 Q68 24 75 30" fill="none" stroke="#7aaa6a" stroke-width="1"/><path d="M50 40 Q30 33 22 40" fill="none" stroke="#7aaa6a" stroke-width="1"/><path d="M50 40 Q70 33 78 40" fill="none" stroke="#7aaa6a" stroke-width="1"/><path d="M50 50 Q28 42 20 50" fill="none" stroke="#7aaa6a" stroke-width="1"/><path d="M50 50 Q72 42 80 50" fill="none" stroke="#7aaa6a" stroke-width="1"/><path d="M50 60 Q30 52 22 60" fill="none" stroke="#7aaa6a" stroke-width="1"/><path d="M50 60 Q70 52 78 60" fill="none" stroke="#7aaa6a" stroke-width="1"/><path d="M50 70 Q35 63 28 70" fill="none" stroke="#7aaa6a" stroke-width="1"/><path d="M50 70 Q65 63 72 70" fill="none" stroke="#7aaa6a" stroke-width="1"/></svg>`,
  },
  {
    id: "mushroom-1",
    name: "Mushroom",
    category: "nature",
    tags: ["mushroom", "cute", "cottagecore"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="42" y="55" width="16" height="35" rx="4" fill="#f0e0d0"/><path d="M25 58 Q25 25 50 20 Q75 25 75 58Z" fill="#e8a0a0"/><circle cx="40" cy="38" r="4" fill="#ffd1dc" opacity="0.7"/><circle cx="55" cy="32" r="3" fill="#ffd1dc" opacity="0.7"/><circle cx="62" cy="45" r="3.5" fill="#ffd1dc" opacity="0.7"/><circle cx="35" cy="50" r="2.5" fill="#ffd1dc" opacity="0.7"/></svg>`,
  },
  {
    id: "rainbow-1",
    name: "Rainbow",
    category: "nature",
    tags: ["rainbow", "colorful", "happy"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M10 75 Q10 25 50 25 Q90 25 90 75" fill="none" stroke="#f4c2c2" stroke-width="4" opacity="0.6"/><path d="M18 75 Q18 33 50 33 Q82 33 82 75" fill="none" stroke="#f5d77a" stroke-width="4" opacity="0.5"/><path d="M26 75 Q26 41 50 41 Q74 41 74 75" fill="none" stroke="#c5d5c5" stroke-width="4" opacity="0.5"/><path d="M34 75 Q34 49 50 49 Q66 49 66 75" fill="none" stroke="#e6e0f3" stroke-width="4" opacity="0.5"/></svg>`,
  },
];

export const FONTS = [
  { name: "Playfair Display", style: "'Playfair Display', serif" },
  { name: "Dancing Script", style: "'Dancing Script', cursive" },
  { name: "Cormorant Garamond", style: "'Cormorant Garamond', serif" },
  { name: "Quicksand", style: "'Quicksand', sans-serif" },
  { name: "Lora", style: "'Lora', serif" },
  { name: "Caveat", style: "'Caveat', cursive" },
  { name: "Sacramento", style: "'Sacramento', cursive" },
  { name: "Great Vibes", style: "'Great Vibes', cursive" },
  { name: "Parisienne", style: "'Parisienne', cursive" },
  { name: "Montserrat", style: "'Montserrat', sans-serif" },
];

export const COLOR_PALETTES = {
  pastels: ["#ffd1dc", "#f4c2c2", "#ffe4e1", "#e6e0f3", "#c5d5c5", "#fff0db", "#d4e8f7", "#fce4ec"],
  earthy: ["#d4a373", "#a0845c", "#c9b99a", "#8a7a6a", "#b5a48c", "#dbc9a8", "#e8d5b7", "#6b5b4a"],
  blush: ["#ffc0cb", "#ff69b4", "#ff1493", "#c71585", "#db7093", "#ffb6c1", "#f08080", "#e8a0a0"],
  sage: ["#c5d5c5", "#a8c8a0", "#7aaa6a", "#5a8a4a", "#b8d0a8", "#d4e8d4", "#e0f0e0", "#6a9a5a"],
  lavender: ["#e6e0f3", "#d4c8e8", "#b49cda", "#9b7cc4", "#c0ace4", "#ccbcee", "#8a6ab8", "#e8e0f8"],
  neutral: ["#ffffff", "#f5f5f5", "#e0e0e0", "#cccccc", "#999999", "#666666", "#333333", "#000000"],
};

export const CANVAS_PRESETS = [
  { name: "A4 Portrait", width: 2480, height: 3508 },
  { name: "A4 Landscape", width: 3508, height: 2480 },
  { name: "A3 Portrait", width: 3508, height: 4961 },
  { name: "Square (Instagram)", width: 2160, height: 2160 },
  { name: "Phone Wallpaper", width: 1170, height: 2532 },
  { name: "Poster 18x24", width: 5400, height: 7200 },
  { name: "Desktop Wallpaper", width: 2560, height: 1440 },
];
