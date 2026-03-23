export interface ElementItem {
  id: string;
  name: string;
  category: string;
  svg: string;
  tags: string[];
}

export const ELEMENT_CATEGORIES = [
  { id: "cute", name: "Cute", icon: "🐶" },
  { id: "leaves", name: "Leaves", icon: "🍂" },
  { id: "dividers", name: "Dividers", icon: "〰️" },
  { id: "shapes", name: "Shapes", icon: "●" },
  { id: "flowers", name: "Flowers", icon: "🌸" },
  { id: "frames", name: "Frames", icon: "▢" },
  { id: "dots", name: "Dots", icon: "•••" },
] as const;

export const ELEMENTS: ElementItem[] = [
  // === CUTE ANIMAL FACES (matching the example's puppy faces) ===
  {
    id: "puppy-face-1",
    name: "Puppy Face",
    category: "cute",
    tags: ["puppy", "dog", "cute", "face"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="55" rx="22" ry="20" fill="#f0dcc8"/>
      <ellipse cx="30" cy="40" rx="12" ry="16" fill="#c49a6c" transform="rotate(-15 30 40)"/>
      <ellipse cx="70" cy="40" rx="12" ry="16" fill="#c49a6c" transform="rotate(15 70 40)"/>
      <ellipse cx="33" cy="42" rx="9" ry="13" fill="#dbb896" transform="rotate(-15 33 42)"/>
      <ellipse cx="67" cy="42" rx="9" ry="13" fill="#dbb896" transform="rotate(15 67 42)"/>
      <circle cx="42" cy="52" r="3.5" fill="#5a3e28"/>
      <circle cx="58" cy="52" r="3.5" fill="#5a3e28"/>
      <circle cx="43" cy="51" r="1.2" fill="white"/>
      <circle cx="59" cy="51" r="1.2" fill="white"/>
      <ellipse cx="50" cy="60" rx="5" ry="3.5" fill="#c49a6c"/>
      <circle cx="50" cy="59" r="2.5" fill="#8b5e3c"/>
      <path d="M47 63 Q50 66 53 63" fill="none" stroke="#8b5e3c" stroke-width="1.2" stroke-linecap="round"/>
      <circle cx="36" cy="58" r="4" fill="#e8b4a0" opacity="0.4"/>
      <circle cx="64" cy="58" r="4" fill="#e8b4a0" opacity="0.4"/>
    </svg>`,
  },
  {
    id: "puppy-face-2",
    name: "Puppy Side",
    category: "cute",
    tags: ["puppy", "dog", "cute"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="55" rx="20" ry="18" fill="#e8d4c0"/>
      <ellipse cx="32" cy="38" rx="10" ry="15" fill="#b8845c" transform="rotate(-20 32 38)"/>
      <ellipse cx="68" cy="38" rx="10" ry="15" fill="#b8845c" transform="rotate(20 68 38)"/>
      <ellipse cx="35" cy="40" rx="7" ry="11" fill="#d4b896" transform="rotate(-20 35 40)"/>
      <ellipse cx="65" cy="40" rx="7" ry="11" fill="#d4b896" transform="rotate(20 65 40)"/>
      <circle cx="43" cy="52" r="3" fill="#4a3020"/>
      <circle cx="57" cy="52" r="3" fill="#4a3020"/>
      <circle cx="44" cy="51" r="1" fill="white"/>
      <circle cx="58" cy="51" r="1" fill="white"/>
      <circle cx="50" cy="59" r="2.8" fill="#9a6040"/>
      <path d="M46 62 Q50 65 54 62" fill="none" stroke="#9a6040" stroke-width="1" stroke-linecap="round"/>
      <circle cx="37" cy="57" r="3.5" fill="#e0a090" opacity="0.35"/>
      <circle cx="63" cy="57" r="3.5" fill="#e0a090" opacity="0.35"/>
    </svg>`,
  },
  {
    id: "puppy-face-3",
    name: "Puppy Small",
    category: "cute",
    tags: ["puppy", "dog", "small"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="52" rx="18" ry="16" fill="#f0dcc8"/>
      <ellipse cx="34" cy="40" rx="9" ry="13" fill="#d4a878" transform="rotate(-12 34 40)"/>
      <ellipse cx="66" cy="40" rx="9" ry="13" fill="#d4a878" transform="rotate(12 66 40)"/>
      <circle cx="44" cy="50" r="2.5" fill="#5a3e28"/>
      <circle cx="56" cy="50" r="2.5" fill="#5a3e28"/>
      <circle cx="50" cy="56" r="2.2" fill="#9a6848"/>
      <path d="M47 59 Q50 61 53 59" fill="none" stroke="#9a6848" stroke-width="1" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: "bunny-face",
    name: "Bunny Face",
    category: "cute",
    tags: ["bunny", "rabbit", "cute"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="40" cy="25" rx="7" ry="18" fill="#f0dcc8"/>
      <ellipse cx="60" cy="25" rx="7" ry="18" fill="#f0dcc8"/>
      <ellipse cx="40" cy="25" rx="4" ry="12" fill="#e8b4a0" opacity="0.5"/>
      <ellipse cx="60" cy="25" rx="4" ry="12" fill="#e8b4a0" opacity="0.5"/>
      <ellipse cx="50" cy="55" rx="20" ry="18" fill="#f0dcc8"/>
      <circle cx="43" cy="52" r="2.5" fill="#5a3e28"/>
      <circle cx="57" cy="52" r="2.5" fill="#5a3e28"/>
      <ellipse cx="50" cy="58" rx="3" ry="2" fill="#e0a090"/>
      <path d="M47 60 Q50 63 53 60" fill="none" stroke="#c49080" stroke-width="1" stroke-linecap="round"/>
      <circle cx="37" cy="56" r="3.5" fill="#e8b4a0" opacity="0.3"/>
      <circle cx="63" cy="56" r="3.5" fill="#e8b4a0" opacity="0.3"/>
    </svg>`,
  },
  {
    id: "cat-face",
    name: "Cat Face",
    category: "cute",
    tags: ["cat", "kitty", "cute"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="55" rx="22" ry="20" fill="#f0dcc8"/>
      <polygon points="30,35 25,12 42,30" fill="#d4b090"/>
      <polygon points="70,35 75,12 58,30" fill="#d4b090"/>
      <polygon points="32,33 28,18 40,30" fill="#e8c8b0"/>
      <polygon points="68,33 72,18 60,30" fill="#e8c8b0"/>
      <circle cx="42" cy="52" r="3" fill="#5a3e28"/>
      <circle cx="58" cy="52" r="3" fill="#5a3e28"/>
      <ellipse cx="50" cy="58" rx="3" ry="2" fill="#d4a090"/>
      <path d="M44 60 L50 62 L56 60" fill="none" stroke="#c49080" stroke-width="1"/>
      <path d="M30 55 L42 57" stroke="#c4a088" stroke-width="0.5"/>
      <path d="M30 58 L42 58" stroke="#c4a088" stroke-width="0.5"/>
      <path d="M58 57 L70 55" stroke="#c4a088" stroke-width="0.5"/>
      <path d="M58 58 L70 58" stroke="#c4a088" stroke-width="0.5"/>
    </svg>`,
  },

  // === LEAVES (earthy brown/olive/pink tones matching example) ===
  {
    id: "leaf-brown-1",
    name: "Brown Leaf",
    category: "leaves",
    tags: ["leaf", "brown", "earthy"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="50" rx="12" ry="30" fill="#8b5e3c" transform="rotate(-30 50 50)"/>
    </svg>`,
  },
  {
    id: "leaf-brown-2",
    name: "Dark Leaf",
    category: "leaves",
    tags: ["leaf", "brown", "dark"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="50" rx="10" ry="25" fill="#6b4028" transform="rotate(20 50 50)"/>
    </svg>`,
  },
  {
    id: "leaf-olive-1",
    name: "Olive Leaf",
    category: "leaves",
    tags: ["leaf", "olive", "green"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="50" rx="11" ry="28" fill="#a09060" transform="rotate(-20 50 50)"/>
    </svg>`,
  },
  {
    id: "leaf-olive-2",
    name: "Sage Leaf",
    category: "leaves",
    tags: ["leaf", "sage", "muted"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="50" rx="10" ry="24" fill="#b8a878" transform="rotate(35 50 50)"/>
    </svg>`,
  },
  {
    id: "leaf-pink-1",
    name: "Pink Leaf",
    category: "leaves",
    tags: ["leaf", "pink", "blush"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="50" rx="11" ry="26" fill="#d4a090" transform="rotate(-25 50 50)"/>
    </svg>`,
  },
  {
    id: "leaf-pink-2",
    name: "Rose Leaf",
    category: "leaves",
    tags: ["leaf", "rose", "dusty"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="50" rx="9" ry="22" fill="#c89080" transform="rotate(15 50 50)"/>
    </svg>`,
  },
  {
    id: "leaf-cluster-brown",
    name: "Brown Cluster",
    category: "leaves",
    tags: ["leaf", "cluster", "brown", "corner"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="40" cy="35" rx="9" ry="22" fill="#8b5e3c" transform="rotate(-40 40 35)"/>
      <ellipse cx="55" cy="30" rx="8" ry="20" fill="#6b4028" transform="rotate(-15 55 30)"/>
      <ellipse cx="60" cy="50" rx="9" ry="22" fill="#a07050" transform="rotate(10 60 50)"/>
    </svg>`,
  },
  {
    id: "leaf-cluster-olive",
    name: "Olive Cluster",
    category: "leaves",
    tags: ["leaf", "cluster", "olive", "corner"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="55" cy="35" rx="9" ry="22" fill="#a09060" transform="rotate(30 55 35)"/>
      <ellipse cx="40" cy="30" rx="8" ry="20" fill="#b8a878" transform="rotate(10 40 30)"/>
      <ellipse cx="45" cy="55" rx="9" ry="22" fill="#c0a868" transform="rotate(-10 45 55)"/>
    </svg>`,
  },
  {
    id: "leaf-cluster-mixed",
    name: "Mixed Cluster",
    category: "leaves",
    tags: ["leaf", "cluster", "mixed", "corner"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="35" cy="40" rx="8" ry="20" fill="#8b5e3c" transform="rotate(-35 35 40)"/>
      <ellipse cx="55" cy="30" rx="7" ry="18" fill="#d4a090" transform="rotate(-10 55 30)"/>
      <ellipse cx="50" cy="55" rx="8" ry="20" fill="#a09060" transform="rotate(15 50 55)"/>
      <ellipse cx="65" cy="45" rx="7" ry="16" fill="#c89080" transform="rotate(30 65 45)"/>
    </svg>`,
  },
  {
    id: "eucalyptus-stem",
    name: "Eucalyptus",
    category: "leaves",
    tags: ["eucalyptus", "stem", "botanical"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="10" x2="50" y2="90" stroke="#8a7a5a" stroke-width="1.5"/>
      <ellipse cx="42" cy="20" rx="7" ry="4" fill="#b8a878" transform="rotate(-20 42 20)"/>
      <ellipse cx="58" cy="30" rx="7" ry="4" fill="#a09060" transform="rotate(20 58 30)"/>
      <ellipse cx="42" cy="40" rx="7" ry="4" fill="#b8a878" transform="rotate(-20 42 40)"/>
      <ellipse cx="58" cy="50" rx="8" ry="4.5" fill="#a09060" transform="rotate(20 58 50)"/>
      <ellipse cx="42" cy="60" rx="8" ry="4.5" fill="#b8a878" transform="rotate(-20 42 60)"/>
      <ellipse cx="58" cy="70" rx="9" ry="5" fill="#a09060" transform="rotate(20 58 70)"/>
      <ellipse cx="42" cy="80" rx="9" ry="5" fill="#b8a878" transform="rotate(-20 42 80)"/>
    </svg>`,
  },

  // === DIVIDERS & LINES ===
  {
    id: "line-thin",
    name: "Thin Line",
    category: "dividers",
    tags: ["line", "divider", "thin"],
    svg: `<svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="10" x2="190" y2="10" stroke="#c4a888" stroke-width="1"/>
    </svg>`,
  },
  {
    id: "line-double",
    name: "Double Line",
    category: "dividers",
    tags: ["line", "divider", "double"],
    svg: `<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="10" x2="190" y2="10" stroke="#c4a888" stroke-width="1"/>
      <line x1="10" y1="18" x2="190" y2="18" stroke="#c4a888" stroke-width="1"/>
    </svg>`,
  },
  {
    id: "line-dashed",
    name: "Dashed Line",
    category: "dividers",
    tags: ["line", "divider", "dashed"],
    svg: `<svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="10" x2="190" y2="10" stroke="#b8a070" stroke-width="1.5" stroke-dasharray="6,4"/>
    </svg>`,
  },
  {
    id: "line-dots",
    name: "Dotted Line",
    category: "dividers",
    tags: ["line", "divider", "dotted"],
    svg: `<svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="10" x2="190" y2="10" stroke="#c4a888" stroke-width="1.5" stroke-dasharray="2,6"/>
    </svg>`,
  },
  {
    id: "line-dot-center",
    name: "Line with Dot",
    category: "dividers",
    tags: ["line", "divider", "dot", "center"],
    svg: `<svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="10" x2="90" y2="10" stroke="#c4a888" stroke-width="1"/>
      <circle cx="100" cy="10" r="2.5" fill="#c4a888"/>
      <line x1="110" y1="10" x2="190" y2="10" stroke="#c4a888" stroke-width="1"/>
    </svg>`,
  },
  {
    id: "line-ornament",
    name: "Ornament Line",
    category: "dividers",
    tags: ["line", "divider", "ornament"],
    svg: `<svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="10" x2="85" y2="10" stroke="#c4a888" stroke-width="0.8"/>
      <circle cx="92" cy="10" r="2" fill="#c4a888"/>
      <circle cx="100" cy="10" r="3" fill="#c4a888"/>
      <circle cx="108" cy="10" r="2" fill="#c4a888"/>
      <line x1="115" y1="10" x2="180" y2="10" stroke="#c4a888" stroke-width="0.8"/>
    </svg>`,
  },
  {
    id: "vertical-lines",
    name: "Vertical Lines",
    category: "dividers",
    tags: ["vertical", "lines", "decoration"],
    svg: `<svg viewBox="0 0 30 100" xmlns="http://www.w3.org/2000/svg">
      <line x1="12" y1="10" x2="12" y2="90" stroke="#6b5040" stroke-width="1.5"/>
      <line x1="18" y1="10" x2="18" y2="90" stroke="#6b5040" stroke-width="1.5"/>
    </svg>`,
  },

  // === SHAPES ===
  {
    id: "circle-cream",
    name: "Cream Circle",
    category: "shapes",
    tags: ["circle", "cream", "background"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="42" fill="#f0e4d4" opacity="0.6"/>
    </svg>`,
  },
  {
    id: "circle-blush",
    name: "Blush Circle",
    category: "shapes",
    tags: ["circle", "blush", "pink"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="42" fill="#f0d0c0" opacity="0.4"/>
    </svg>`,
  },
  {
    id: "heart-1",
    name: "Heart",
    category: "shapes",
    tags: ["heart", "love"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 85 C20 60 5 40 15 25 C25 10 40 15 50 30 C60 15 75 10 85 25 C95 40 80 60 50 85Z" fill="#d4a090" opacity="0.7"/>
    </svg>`,
  },
  {
    id: "heart-outline",
    name: "Heart Outline",
    category: "shapes",
    tags: ["heart", "outline"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 85 C20 60 5 40 15 25 C25 10 40 15 50 30 C60 15 75 10 85 25 C95 40 80 60 50 85Z" fill="none" stroke="#c49080" stroke-width="1.5"/>
    </svg>`,
  },
  {
    id: "star-1",
    name: "Star",
    category: "shapes",
    tags: ["star", "sparkle"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,15 58,40 85,40 63,55 72,80 50,65 28,80 37,55 15,40 42,40" fill="#d4a878" opacity="0.7"/>
    </svg>`,
  },
  {
    id: "arch-1",
    name: "Arch",
    category: "shapes",
    tags: ["arch", "modern", "boho"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 90 L25 45 Q25 15 50 15 Q75 15 75 45 L75 90Z" fill="#f0e4d4" opacity="0.4"/>
    </svg>`,
  },
  {
    id: "crescent-1",
    name: "Crescent Moon",
    category: "shapes",
    tags: ["moon", "crescent"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 15 A35 35 0 1 0 60 85 A28 28 0 1 1 60 15Z" fill="#d4a878" opacity="0.5"/>
    </svg>`,
  },

  // === FLOWERS (earthy/boho style) ===
  {
    id: "cherry-blossom-1",
    name: "Cherry Blossom",
    category: "flowers",
    tags: ["flower", "cherry", "blossom", "pink"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(50,50)">
        <ellipse cx="0" cy="-15" rx="6" ry="12" fill="#e8c0b0" opacity="0.8"/>
        <ellipse cx="0" cy="-15" rx="6" ry="12" fill="#e8c0b0" opacity="0.8" transform="rotate(72)"/>
        <ellipse cx="0" cy="-15" rx="6" ry="12" fill="#e8c0b0" opacity="0.8" transform="rotate(144)"/>
        <ellipse cx="0" cy="-15" rx="6" ry="12" fill="#e8c0b0" opacity="0.8" transform="rotate(216)"/>
        <ellipse cx="0" cy="-15" rx="6" ry="12" fill="#e8c0b0" opacity="0.8" transform="rotate(288)"/>
        <circle cx="0" cy="0" r="5" fill="#c49070"/>
      </g>
    </svg>`,
  },
  {
    id: "daisy-earthy",
    name: "Earthy Daisy",
    category: "flowers",
    tags: ["flower", "daisy", "earthy"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(50,50)">
        <ellipse cx="0" cy="-16" rx="5" ry="12" fill="#f0e0d0"/>
        <ellipse cx="0" cy="-16" rx="5" ry="12" fill="#f0e0d0" transform="rotate(45)"/>
        <ellipse cx="0" cy="-16" rx="5" ry="12" fill="#f0e0d0" transform="rotate(90)"/>
        <ellipse cx="0" cy="-16" rx="5" ry="12" fill="#f0e0d0" transform="rotate(135)"/>
        <ellipse cx="0" cy="-16" rx="5" ry="12" fill="#f0e0d0" transform="rotate(180)"/>
        <ellipse cx="0" cy="-16" rx="5" ry="12" fill="#f0e0d0" transform="rotate(225)"/>
        <ellipse cx="0" cy="-16" rx="5" ry="12" fill="#f0e0d0" transform="rotate(270)"/>
        <ellipse cx="0" cy="-16" rx="5" ry="12" fill="#f0e0d0" transform="rotate(315)"/>
        <circle cx="0" cy="0" r="7" fill="#c4a060"/>
      </g>
    </svg>`,
  },
  {
    id: "rose-earthy",
    name: "Earthy Rose",
    category: "flowers",
    tags: ["flower", "rose", "earthy"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="20" fill="#d4a090" opacity="0.4"/>
      <circle cx="48" cy="47" r="14" fill="#c89080" opacity="0.5"/>
      <circle cx="52" cy="48" r="12" fill="#d4a090" opacity="0.5"/>
      <circle cx="50" cy="50" r="8" fill="#e0b8a8" opacity="0.6"/>
      <circle cx="50" cy="49" r="4" fill="#e8c8b8"/>
    </svg>`,
  },
  {
    id: "wildflower-boho",
    name: "Boho Wildflower",
    category: "flowers",
    tags: ["flower", "boho", "wild"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="90" x2="50" y2="45" stroke="#8a7a5a" stroke-width="1.5"/>
      <line x1="50" y1="65" x2="35" y2="55" stroke="#8a7a5a" stroke-width="1"/>
      <line x1="50" y1="75" x2="65" y2="62" stroke="#8a7a5a" stroke-width="1"/>
      <g transform="translate(50,38)">
        <circle cx="0" cy="-5" r="3" fill="#d4a090"/>
        <circle cx="4" cy="-1" r="3" fill="#d4a090"/>
        <circle cx="2" cy="4" r="3" fill="#d4a090"/>
        <circle cx="-2" cy="4" r="3" fill="#d4a090"/>
        <circle cx="-4" cy="-1" r="3" fill="#d4a090"/>
        <circle cx="0" cy="0" r="2" fill="#c4a060"/>
      </g>
      <ellipse cx="35" cy="53" rx="5" ry="3" fill="#a09060" transform="rotate(-30 35 53)"/>
      <ellipse cx="65" cy="60" rx="5" ry="3" fill="#a09060" transform="rotate(25 65 60)"/>
    </svg>`,
  },

  // === FRAMES ===
  {
    id: "frame-thin",
    name: "Thin Frame",
    category: "frames",
    tags: ["frame", "border", "thin"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="84" height="84" rx="1" fill="none" stroke="#c4a888" stroke-width="1"/>
    </svg>`,
  },
  {
    id: "frame-double",
    name: "Double Frame",
    category: "frames",
    tags: ["frame", "border", "double"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="90" height="90" rx="1" fill="none" stroke="#c4a888" stroke-width="0.8"/>
      <rect x="10" y="10" width="80" height="80" rx="1" fill="none" stroke="#c4a888" stroke-width="0.5"/>
    </svg>`,
  },
  {
    id: "frame-arch",
    name: "Arch Frame",
    category: "frames",
    tags: ["frame", "arch"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 90 L25 40 Q25 12 50 12 Q75 12 75 40 L75 90" fill="none" stroke="#c4a888" stroke-width="1.5"/>
    </svg>`,
  },

  // === DOTS & ACCENTS ===
  {
    id: "dots-row-pink",
    name: "Pink Dots",
    category: "dots",
    tags: ["dots", "pink", "accent"],
    svg: `<svg viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="10" r="3" fill="#d4a090" opacity="0.5"/>
      <circle cx="42" cy="10" r="2" fill="#c49080" opacity="0.4"/>
      <circle cx="52" cy="10" r="3.5" fill="#d4a090" opacity="0.6"/>
      <circle cx="64" cy="10" r="2" fill="#c49080" opacity="0.4"/>
      <circle cx="74" cy="10" r="3" fill="#d4a090" opacity="0.5"/>
    </svg>`,
  },
  {
    id: "dots-scattered",
    name: "Scattered Dots",
    category: "dots",
    tags: ["dots", "scattered", "accent"],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="30" r="2" fill="#d4a090" opacity="0.4"/>
      <circle cx="45" cy="15" r="1.5" fill="#c4a060" opacity="0.3"/>
      <circle cx="70" cy="25" r="2.5" fill="#d4a090" opacity="0.5"/>
      <circle cx="30" cy="60" r="1.5" fill="#c49080" opacity="0.3"/>
      <circle cx="55" cy="50" r="2" fill="#c4a060" opacity="0.4"/>
      <circle cx="80" cy="55" r="1.5" fill="#d4a090" opacity="0.3"/>
      <circle cx="25" cy="80" r="2" fill="#c4a060" opacity="0.4"/>
      <circle cx="60" cy="78" r="2.5" fill="#d4a090" opacity="0.5"/>
      <circle cx="75" cy="85" r="1.5" fill="#c49080" opacity="0.3"/>
    </svg>`,
  },
  {
    id: "single-dot",
    name: "Single Dot",
    category: "dots",
    tags: ["dot", "accent", "single"],
    svg: `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="4" fill="#8b6e50"/>
    </svg>`,
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
  earthy: ["#8b5e3c", "#6b4028", "#a07050", "#c49a6c", "#d4a878", "#dbb896", "#f0dcc8", "#f5ece0"],
  blush: ["#d4a090", "#c89080", "#e8b4a0", "#e8c0b0", "#f0d0c0", "#e0a090", "#c49080", "#b87060"],
  olive: ["#a09060", "#b8a878", "#c0a868", "#8a7a5a", "#6b6040", "#d0c098", "#e0d8c0", "#504830"],
  cream: ["#f5ece0", "#f0e4d4", "#e8dcc8", "#fff8f0", "#fdf6f0", "#f0dcc8", "#e8d4c0", "#ffffff"],
  brown: ["#4a3020", "#5a3e28", "#6b5040", "#8b6e50", "#a08060", "#b89878", "#c4a888", "#d4b898"],
  neutral: ["#ffffff", "#f5f5f0", "#e8e0d8", "#d0c8c0", "#a09890", "#807068", "#605048", "#3a2820"],
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

// === TEXT PRESETS ===
export interface TextPreset {
  id: string;
  name: string;
  fontFamily: string;
  fontSize: number;
  fill: string;
  letterSpacing?: number;
  fontWeight?: string;
  fontStyle?: string;
  textAlign?: string;
  text: string;
}

export const TEXT_PRESETS: TextPreset[] = [
  {
    id: "heading-large",
    name: "Large Heading",
    fontFamily: "'Playfair Display', serif",
    fontSize: 72,
    fill: "#4a3728",
    fontWeight: "600",
    textAlign: "center",
    text: "Your Title Here",
  },
  {
    id: "heading-accent",
    name: "Accent Heading",
    fontFamily: "'Playfair Display', serif",
    fontSize: 72,
    fill: "#c49a6c",
    fontWeight: "600",
    fontStyle: "italic",
    textAlign: "center",
    text: "Accent Word",
  },
  {
    id: "subtitle-spaced",
    name: "Spaced Subtitle",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 18,
    fill: "#8b6e50",
    letterSpacing: 600,
    fontWeight: "400",
    textAlign: "center",
    text: "A L W A Y S   R E M E M B E R",
  },
  {
    id: "body-italic",
    name: "Italic Body",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 24,
    fill: "#6b5040",
    fontStyle: "italic",
    textAlign: "center",
    text: "you deserve your own love first",
  },
  {
    id: "caption-spaced",
    name: "Spaced Caption",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 14,
    fill: "#c4a888",
    letterSpacing: 500,
    fontWeight: "300",
    textAlign: "center",
    text: "s e l f   l o v e   c o l l e c t i o n",
  },
  {
    id: "script-large",
    name: "Script Text",
    fontFamily: "'Dancing Script', cursive",
    fontSize: 48,
    fill: "#8b5e3c",
    textAlign: "center",
    text: "Beautiful",
  },
  {
    id: "quote-elegant",
    name: "Elegant Quote",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 28,
    fill: "#5a3e28",
    fontStyle: "italic",
    textAlign: "center",
    text: "your story is worth telling",
  },
];

// === TEMPLATES ===
export interface Template {
  id: string;
  name: string;
  thumbnail: string; // description for now
  backgroundColor: string;
  elements: Array<{
    type: "svg" | "text";
    elementId?: string;
    svg?: string;
    text?: string;
    x: number;
    y: number;
    scale?: number;
    fontFamily?: string;
    fontSize?: number;
    fill?: string;
    fontWeight?: string;
    fontStyle?: string;
    textAlign?: string;
    letterSpacing?: number;
  }>;
}

export const TEMPLATES: Template[] = [
  {
    id: "self-love-poster",
    name: "Self Love Poster",
    thumbnail: "Earthy tones with puppy faces and leaf decorations",
    backgroundColor: "#f5ece0",
    elements: [
      // Big cream circle background
      { type: "svg", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="45" fill="#f0e4d4" opacity="0.5"/></svg>`, x: 740, y: 400, scale: 6 },
      // Double border frame
      { type: "svg", svg: `<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="94" height="134" rx="1" fill="none" stroke="#c4a888" stroke-width="0.6"/></svg>`, x: 100, y: 100, scale: 22 },
      // Top left leaf cluster
      { type: "svg", elementId: "leaf-cluster-brown", x: 140, y: 150, scale: 1.8 },
      // Top right leaf cluster
      { type: "svg", elementId: "leaf-cluster-olive", x: 2050, y: 150, scale: 1.8 },
      // Bottom left leaf cluster
      { type: "svg", elementId: "leaf-cluster-mixed", x: 140, y: 2900, scale: 1.5 },
      // Bottom right leaf cluster
      { type: "svg", elementId: "leaf-cluster-olive", x: 2050, y: 2900, scale: 1.5 },
      // Puppy faces
      { type: "svg", elementId: "puppy-face-1", x: 1100, y: 500, scale: 0.9 },
      { type: "svg", elementId: "puppy-face-2", x: 500, y: 700, scale: 0.8 },
      { type: "svg", elementId: "puppy-face-3", x: 1700, y: 700, scale: 0.8 },
      // Vertical accent lines
      { type: "svg", svg: `<svg viewBox="0 0 10 100" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="0" x2="3" y2="100" stroke="#5a4030" stroke-width="1.2"/><line x1="7" y1="0" x2="7" y2="100" stroke="#5a4030" stroke-width="1.2"/></svg>`, x: 220, y: 200, scale: 2.5 },
      { type: "svg", svg: `<svg viewBox="0 0 10 100" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="0" x2="3" y2="100" stroke="#5a4030" stroke-width="1.2"/><line x1="7" y1="0" x2="7" y2="100" stroke="#5a4030" stroke-width="1.2"/></svg>`, x: 2180, y: 200, scale: 2.5 },
      // "ALWAYS REMEMBER" text
      { type: "text", text: "A L W A Y S   R E M E M B E R", x: 600, y: 1050, fontFamily: "'Montserrat', sans-serif", fontSize: 20, fill: "#8b6e50", fontWeight: "400", textAlign: "center" },
      // Main heading
      { type: "text", text: "Choose\nYourself,\nEvery Day.", x: 500, y: 1150, fontFamily: "'Playfair Display', serif", fontSize: 90, fill: "#4a3728", fontWeight: "600", textAlign: "center" },
      // Divider dot
      { type: "svg", svg: `<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="5" r="3" fill="#8b6e50"/></svg>`, x: 1220, y: 1650, scale: 0.8 },
      // Subtitle
      { type: "text", text: "you deserve your own love first", x: 550, y: 1750, fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fill: "#6b5040", fontStyle: "italic", textAlign: "center" },
      // Middle row of puppies
      { type: "svg", elementId: "puppy-face-1", x: 500, y: 2000, scale: 1.0 },
      { type: "svg", elementId: "puppy-face-2", x: 1100, y: 2000, scale: 1.1 },
      { type: "svg", elementId: "puppy-face-3", x: 1700, y: 2000, scale: 1.0 },
      // Dashed line
      { type: "svg", svg: `<svg viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="5" x2="200" y2="5" stroke="#b8a070" stroke-width="1.2" stroke-dasharray="6,4"/></svg>`, x: 300, y: 2350, scale: 8 },
      // "your story is worth telling"
      { type: "text", text: "y o u r   s t o r y   i s   w o r t h   t e l l i n g", x: 450, y: 2500, fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fill: "#6b5040", fontStyle: "italic", textAlign: "center" },
      // Bottom dots
      { type: "svg", elementId: "dots-row-pink", x: 800, y: 2700, scale: 2.5 },
      // "self love collection"
      { type: "text", text: "s e l f   l o v e   c o l l e c t i o n", x: 650, y: 2900, fontFamily: "'Montserrat', sans-serif", fontSize: 16, fill: "#c4a888", fontWeight: "300", textAlign: "center" },
    ],
  },
  {
    id: "minimal-quote",
    name: "Minimal Quote",
    thumbnail: "Clean minimal design with centered quote",
    backgroundColor: "#fdf6f0",
    elements: [
      { type: "svg", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="#f0e4d4" opacity="0.3"/></svg>`, x: 740, y: 1100, scale: 10 },
      { type: "svg", elementId: "eucalyptus-stem", x: 200, y: 200, scale: 2.0 },
      { type: "svg", elementId: "eucalyptus-stem", x: 2100, y: 200, scale: 2.0 },
      { type: "svg", svg: `<svg viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="5" x2="190" y2="5" stroke="#c4a888" stroke-width="0.8"/></svg>`, x: 600, y: 1300, scale: 6 },
      { type: "text", text: "Be Still\n& Know", x: 600, y: 1400, fontFamily: "'Playfair Display', serif", fontSize: 100, fill: "#4a3728", fontWeight: "600", textAlign: "center" },
      { type: "svg", svg: `<svg viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="5" x2="190" y2="5" stroke="#c4a888" stroke-width="0.8"/></svg>`, x: 600, y: 1900, scale: 6 },
      { type: "text", text: "that you are enough", x: 700, y: 2000, fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fill: "#8b6e50", fontStyle: "italic", textAlign: "center" },
    ],
  },
  {
    id: "boho-floral",
    name: "Boho Floral",
    thumbnail: "Bohemian style with earth-toned florals",
    backgroundColor: "#f5ece0",
    elements: [
      { type: "svg", svg: `<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg"><path d="M20 130 L20 40 Q20 10 50 10 Q80 10 80 40 L80 130" fill="none" stroke="#c4a888" stroke-width="0.8"/></svg>`, x: 500, y: 400, scale: 15 },
      { type: "svg", elementId: "leaf-cluster-mixed", x: 400, y: 500, scale: 2.0 },
      { type: "svg", elementId: "leaf-cluster-brown", x: 1700, y: 500, scale: 2.0 },
      { type: "svg", elementId: "cherry-blossom-1", x: 700, y: 600, scale: 1.2 },
      { type: "svg", elementId: "cherry-blossom-1", x: 1500, y: 650, scale: 1.0 },
      { type: "text", text: "Bloom\nWhere You\nAre Planted", x: 600, y: 1200, fontFamily: "'Playfair Display', serif", fontSize: 80, fill: "#4a3728", fontWeight: "600", textAlign: "center" },
      { type: "svg", elementId: "wildflower-boho", x: 500, y: 2200, scale: 1.5 },
      { type: "svg", elementId: "wildflower-boho", x: 1100, y: 2100, scale: 1.8 },
      { type: "svg", elementId: "wildflower-boho", x: 1700, y: 2200, scale: 1.5 },
      { type: "text", text: "g r o w   w i t h   g r a c e", x: 700, y: 2800, fontFamily: "'Montserrat', sans-serif", fontSize: 16, fill: "#a09060", fontWeight: "300", textAlign: "center" },
    ],
  },
];
