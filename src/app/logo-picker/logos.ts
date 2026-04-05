// 100 DevilOfTech SVG logos — all 200×200 viewBox, inline SVG strings
import { LOGOS_F } from './logos-tech-f'
import { LOGOS_G } from './logos-tech-g'
import { LOGOS_H } from './logos-tech-h'
import { LOGOS_I } from './logos-tech-i'
import { LOGOS_J } from './logos-tech-j'

export interface Logo {
  id: number
  group: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J'
  groupName: string
  label: string
  svg: string
}

const LOGOS_AE: Logo[] = [
  // ═══ GROUP A: Devil Face + Wordmark ═══
  {
    id: 1,
    group: 'A',
    groupName: 'Devil Face + Wordmark',
    label: 'Classic Red Circle',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="a1bg" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#c0200a"/>
      <stop offset="100%" stop-color="#6b0000"/>
    </radialGradient>
    <filter id="a1glow">
      <feGaussianBlur stdDeviation="2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <!-- Circle head -->
  <circle cx="100" cy="88" r="52" fill="url(#a1bg)" stroke="#8B0000" stroke-width="2"/>
  <!-- Left horn -->
  <path d="M72 44 Q60 18 68 8 Q76 24 78 40Z" fill="#f5edd8"/>
  <!-- Right horn -->
  <path d="M128 44 Q140 18 132 8 Q124 24 122 40Z" fill="#f5edd8"/>
  <!-- Eyes -->
  <ellipse cx="84" cy="82" rx="8" ry="9" fill="#fff700" filter="url(#a1glow)"/>
  <ellipse cx="116" cy="82" rx="8" ry="9" fill="#fff700" filter="url(#a1glow)"/>
  <ellipse cx="85" cy="84" rx="4" ry="5" fill="#1a0000"/>
  <ellipse cx="117" cy="84" rx="4" ry="5" fill="#1a0000"/>
  <!-- Grin -->
  <path d="M76 104 Q100 126 124 104" fill="none" stroke="#f5edd8" stroke-width="3" stroke-linecap="round"/>
  <path d="M80 104 Q84 112 88 108 M112 104 Q116 112 120 108" fill="none" stroke="#f5edd8" stroke-width="2" stroke-linecap="round"/>
  <!-- Wordmark -->
  <text x="100" y="158" text-anchor="middle" font-family="Georgia, serif" font-size="13" font-weight="bold" fill="#C9A84C" letter-spacing="1">DevilOfTech</text>
  <line x1="40" y1="164" x2="160" y2="164" stroke="#C9A84C" stroke-width="0.5" opacity="0.5"/>
</svg>`,
  },
  {
    id: 2,
    group: 'A',
    groupName: 'Devil Face + Wordmark',
    label: 'Geometric Low-Poly',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="a2grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D4380D"/>
      <stop offset="100%" stop-color="#C9A84C"/>
    </linearGradient>
  </defs>
  <!-- Poly face triangles -->
  <polygon points="100,30 130,75 70,75" fill="#8B0000"/>
  <polygon points="70,75 130,75 145,110 55,110" fill="url(#a2grad)"/>
  <polygon points="55,110 145,110 135,140 65,140" fill="#8B0000"/>
  <!-- Left horn triangle -->
  <polygon points="75,30 60,5 65,40" fill="#C9A84C"/>
  <!-- Right horn triangle -->
  <polygon points="125,30 140,5 135,40" fill="#C9A84C"/>
  <!-- Eyes -->
  <polygon points="80,82 88,75 96,82 88,89" fill="#fff700"/>
  <polygon points="104,82 112,75 120,82 112,89" fill="#fff700"/>
  <!-- Grin triangles -->
  <polygon points="72,118 80,112 80,125" fill="#f5edd8"/>
  <polygon points="90,112 100,120 110,112 100,126" fill="#f5edd8"/>
  <polygon points="120,118 120,125 128,118" fill="#f5edd8"/>
  <!-- DT text -->
  <text x="100" y="168" text-anchor="middle" font-family="Georgia, serif" font-size="22" font-weight="bold" fill="#C9A84C" letter-spacing="3">DT</text>
</svg>`,
  },
  {
    id: 3,
    group: 'A',
    groupName: 'Devil Face + Wordmark',
    label: 'Outlined Stroke Only',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Circle head outline -->
  <circle cx="100" cy="88" r="50" fill="none" stroke="#C9A84C" stroke-width="2.5"/>
  <!-- Left horn -->
  <path d="M73 46 Q62 22 70 10 Q77 26 79 42" fill="none" stroke="#C9A84C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- Right horn -->
  <path d="M127 46 Q138 22 130 10 Q123 26 121 42" fill="none" stroke="#C9A84C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- Eyes -->
  <ellipse cx="85" cy="82" rx="7" ry="8" fill="none" stroke="#C9A84C" stroke-width="2"/>
  <ellipse cx="115" cy="82" rx="7" ry="8" fill="none" stroke="#C9A84C" stroke-width="2"/>
  <!-- Pupils -->
  <circle cx="85" cy="84" r="2.5" fill="#C9A84C"/>
  <circle cx="115" cy="84" r="2.5" fill="#C9A84C"/>
  <!-- Grin -->
  <path d="M76 104 Q100 124 124 104" fill="none" stroke="#C9A84C" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Fangs -->
  <line x1="88" y1="104" x2="85" y2="114" stroke="#C9A84C" stroke-width="2"/>
  <line x1="112" y1="104" x2="115" y2="114" stroke="#C9A84C" stroke-width="2"/>
  <!-- Wordmark -->
  <text x="100" y="158" text-anchor="middle" font-family="Georgia, serif" font-size="11" font-weight="bold" fill="#C9A84C" letter-spacing="2">DevilOfTech</text>
</svg>`,
  },
  {
    id: 4,
    group: 'A',
    groupName: 'Devil Face + Wordmark',
    label: 'Fire Shapes Face',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="a4fire" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#8B0000"/>
      <stop offset="50%" stop-color="#D4380D"/>
      <stop offset="100%" stop-color="#C9A84C"/>
    </linearGradient>
  </defs>
  <!-- Fire-flame face shape -->
  <path d="M100 25 C80 25 55 45 52 75 C50 95 58 108 65 118 C72 128 75 135 75 140 C85 128 83 115 78 105 C90 118 92 130 90 140 C97 128 100 115 100 140 C100 115 103 128 110 140 C108 130 110 118 122 105 C117 115 115 128 125 140 C125 135 128 128 135 118 C142 108 150 95 148 75 C145 45 120 25 100 25Z" fill="url(#a4fire)"/>
  <!-- Horns -->
  <path d="M78 32 Q66 10 72 2 Q80 18 82 34Z" fill="#C9A84C"/>
  <path d="M122 32 Q134 10 128 2 Q120 18 118 34Z" fill="#C9A84C"/>
  <!-- Eyes -->
  <ellipse cx="84" cy="82" rx="9" ry="10" fill="#fff700" opacity="0.9"/>
  <ellipse cx="116" cy="82" rx="9" ry="10" fill="#fff700" opacity="0.9"/>
  <ellipse cx="84" cy="84" rx="4" ry="5" fill="#1a0000"/>
  <ellipse cx="116" cy="84" rx="4" ry="5" fill="#1a0000"/>
  <!-- Grin -->
  <path d="M76 105 Q100 128 124 105" fill="none" stroke="#f5edd8" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Wordmark -->
  <text x="100" y="172" text-anchor="middle" font-family="Georgia, serif" font-size="11" font-weight="bold" fill="#C9A84C" letter-spacing="1.5">DevilOfTech</text>
</svg>`,
  },
  {
    id: 5,
    group: 'A',
    groupName: 'Devil Face + Wordmark',
    label: 'Pixel Art Devil',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Pixel grid — 8px per "pixel" centered -->
  <!-- Horns -->
  <rect x="72" y="24" width="8" height="8" fill="#D4380D"/>
  <rect x="72" y="16" width="8" height="8" fill="#D4380D"/>
  <rect x="80" y="32" width="8" height="8" fill="#D4380D"/>
  <rect x="112" y="24" width="8" height="8" fill="#D4380D"/>
  <rect x="112" y="16" width="8" height="8" fill="#D4380D"/>
  <rect x="112" y="32" width="8" height="8" fill="#D4380D"/>
  <!-- Head -->
  <rect x="64" y="40" width="72" height="8" fill="#8B0000"/>
  <rect x="56" y="48" width="88" height="56" fill="#8B0000"/>
  <rect x="64" y="104" width="72" height="8" fill="#8B0000"/>
  <!-- Eyes -->
  <rect x="72" y="64" width="16" height="16" fill="#fff700"/>
  <rect x="112" y="64" width="16" height="16" fill="#fff700"/>
  <rect x="78" y="70" width="6" height="8" fill="#1a0000"/>
  <rect x="118" y="70" width="6" height="8" fill="#1a0000"/>
  <!-- Grin -->
  <rect x="72" y="92" width="8" height="8" fill="#f5edd8"/>
  <rect x="88" y="96" width="8" height="8" fill="#f5edd8"/>
  <rect x="104" y="96" width="8" height="8" fill="#f5edd8"/>
  <rect x="120" y="92" width="8" height="8" fill="#f5edd8"/>
  <!-- Fangs -->
  <rect x="88" y="104" width="6" height="8" fill="#f5edd8"/>
  <rect x="106" y="104" width="6" height="8" fill="#f5edd8"/>
  <!-- Text -->
  <text x="100" y="165" text-anchor="middle" font-family="'Courier New', monospace" font-size="10" font-weight="bold" fill="#D4380D" letter-spacing="3">DEVILOFTECH</text>
</svg>`,
  },
  {
    id: 6,
    group: 'A',
    groupName: 'Devil Face + Wordmark',
    label: 'Minimal Line Devil',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Two curved horns -->
  <path d="M82 58 Q74 28 80 14" fill="none" stroke="#D4380D" stroke-width="3" stroke-linecap="round"/>
  <path d="M118 58 Q126 28 120 14" fill="none" stroke="#D4380D" stroke-width="3" stroke-linecap="round"/>
  <!-- Minimal head circle -->
  <circle cx="100" cy="80" r="38" fill="none" stroke="#8B0000" stroke-width="1.5" opacity="0.4"/>
  <!-- Two dot eyes -->
  <circle cx="88" cy="76" r="4.5" fill="#C9A84C"/>
  <circle cx="112" cy="76" r="4.5" fill="#C9A84C"/>
  <!-- Curved grin -->
  <path d="M82 92 Q100 112 118 92" fill="none" stroke="#D4380D" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Tiny fangs -->
  <line x1="91" y1="92" x2="89" y2="100" stroke="#D4380D" stroke-width="1.5"/>
  <line x1="109" y1="92" x2="111" y2="100" stroke="#D4380D" stroke-width="1.5"/>
  <!-- Wordmark -->
  <text x="100" y="145" text-anchor="middle" font-family="Georgia, serif" font-size="14" font-weight="bold" fill="#f5edd8" letter-spacing="0.5">DevilOfTech</text>
  <line x1="50" y1="150" x2="150" y2="150" stroke="#C9A84C" stroke-width="0.5" opacity="0.6"/>
</svg>`,
  },
  {
    id: 7,
    group: 'A',
    groupName: 'Devil Face + Wordmark',
    label: 'Red Circle Badge',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Outer ring -->
  <circle cx="100" cy="100" r="92" fill="none" stroke="#C9A84C" stroke-width="3"/>
  <circle cx="100" cy="100" r="86" fill="none" stroke="#8B0000" stroke-width="1"/>
  <!-- Badge fill -->
  <circle cx="100" cy="100" r="83" fill="#1a0800"/>
  <!-- Devil face head -->
  <circle cx="100" cy="90" r="46" fill="#8B0000"/>
  <!-- Horns -->
  <path d="M76 52 Q66 26 74 14 Q81 30 82 48Z" fill="#D4380D"/>
  <path d="M124 52 Q134 26 126 14 Q119 30 118 48Z" fill="#D4380D"/>
  <!-- Eyes -->
  <ellipse cx="87" cy="84" rx="7" ry="8" fill="#fff700"/>
  <ellipse cx="113" cy="84" rx="7" ry="8" fill="#fff700"/>
  <ellipse cx="87" cy="86" rx="3.5" ry="4" fill="#1a0000"/>
  <ellipse cx="113" cy="86" rx="3.5" ry="4" fill="#1a0000"/>
  <!-- Grin -->
  <path d="M78 104 Q100 122 122 104" fill="none" stroke="#f5edd8" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="88" y1="104" x2="86" y2="112" stroke="#f5edd8" stroke-width="2"/>
  <line x1="112" y1="104" x2="114" y2="112" stroke="#f5edd8" stroke-width="2"/>
  <!-- Bottom arc text -->
  <path id="a7arc" d="M 18,100 A 82,82 0 0 0 182,100" fill="none"/>
  <text font-family="Georgia, serif" font-size="10" font-weight="bold" fill="#C9A84C" letter-spacing="3">
    <textPath href="#a7arc" startOffset="18%">DEVIL OF TECH</textPath>
  </text>
</svg>`,
  },
  {
    id: 8,
    group: 'A',
    groupName: 'Devil Face + Wordmark',
    label: 'Half-Face Split',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="a8shadow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#8B0000"/>
      <stop offset="50%" stop-color="#8B0000"/>
      <stop offset="100%" stop-color="#1a0800" stop-opacity="0"/>
    </linearGradient>
    <clipPath id="a8left">
      <rect x="0" y="0" width="100" height="200"/>
    </clipPath>
  </defs>
  <!-- Shadow right side -->
  <rect x="100" y="30" width="70" height="110" fill="url(#a8shadow)" opacity="0.6"/>
  <!-- Full face, clipped to left half -->
  <g clip-path="url(#a8left)">
    <circle cx="100" cy="88" r="54" fill="#8B0000"/>
    <!-- Left horn -->
    <path d="M72 42 Q58 14 68 4 Q77 22 78 40Z" fill="#D4380D"/>
    <!-- Left eye -->
    <ellipse cx="84" cy="82" rx="9" ry="10" fill="#fff700"/>
    <ellipse cx="85" cy="84" rx="4.5" ry="5.5" fill="#1a0000"/>
    <!-- Grin left half -->
    <path d="M75 106 Q100 128 100 128" fill="none" stroke="#f5edd8" stroke-width="3" stroke-linecap="round"/>
  </g>
  <!-- Center split line -->
  <line x1="100" y1="20" x2="100" y2="155" stroke="#C9A84C" stroke-width="1.5" opacity="0.8"/>
  <!-- Wordmark -->
  <text x="100" y="170" text-anchor="middle" font-family="Georgia, serif" font-size="12" font-weight="bold" fill="#C9A84C" letter-spacing="2">DevilOfTech</text>
</svg>`,
  },
  {
    id: 9,
    group: 'A',
    groupName: 'Devil Face + Wordmark',
    label: 'Devil with Sunglasses',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="a9lens" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D4380D" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#1a0800" stop-opacity="0.9"/>
    </linearGradient>
  </defs>
  <!-- Head -->
  <circle cx="100" cy="88" r="50" fill="#8B0000"/>
  <!-- Horns -->
  <path d="M74 46 Q63 20 71 8 Q79 26 80 43Z" fill="#C9A84C"/>
  <path d="M126 46 Q137 20 129 8 Q121 26 120 43Z" fill="#C9A84C"/>
  <!-- Sunglasses frame -->
  <rect x="68" y="72" width="28" height="22" rx="4" fill="url(#a9lens)" stroke="#C9A84C" stroke-width="1.5"/>
  <rect x="104" y="72" width="28" height="22" rx="4" fill="url(#a9lens)" stroke="#C9A84C" stroke-width="1.5"/>
  <!-- Bridge -->
  <line x1="96" y1="83" x2="104" y2="83" stroke="#C9A84C" stroke-width="1.5"/>
  <!-- Arms -->
  <line x1="68" y1="83" x2="55" y2="80" stroke="#C9A84C" stroke-width="1.5"/>
  <line x1="132" y1="83" x2="145" y2="80" stroke="#C9A84C" stroke-width="1.5"/>
  <!-- Lens shine -->
  <line x1="72" y1="76" x2="76" y2="80" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="108" y1="76" x2="112" y2="80" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" stroke-linecap="round"/>
  <!-- Grin -->
  <path d="M76 108 Q100 130 124 108" fill="none" stroke="#f5edd8" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="87" y1="108" x2="85" y2="116" stroke="#f5edd8" stroke-width="2"/>
  <line x1="113" y1="108" x2="115" y2="116" stroke="#f5edd8" stroke-width="2"/>
  <!-- Wordmark -->
  <text x="100" y="158" text-anchor="middle" font-family="Georgia, serif" font-size="11" font-weight="bold" fill="#C9A84C" letter-spacing="1.5">DevilOfTech</text>
</svg>`,
  },
  {
    id: 10,
    group: 'A',
    groupName: 'Devil Face + Wordmark',
    label: 'Devil Skull',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="a10skull" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" stop-color="#3a2e28"/>
      <stop offset="100%" stop-color="#1a1410"/>
    </linearGradient>
  </defs>
  <!-- Skull shape -->
  <path d="M100 22 C68 22 50 44 50 68 C50 88 58 100 68 108 L68 126 L132 126 L132 108 C142 100 150 88 150 68 C150 44 132 22 100 22Z" fill="url(#a10skull)" stroke="#8B0000" stroke-width="2"/>
  <!-- Devil horns on skull -->
  <path d="M72 30 Q58 6 66 -2 Q76 14 78 28Z" fill="#8B0000"/>
  <path d="M128 30 Q142 6 134 -2 Q124 14 122 28Z" fill="#8B0000"/>
  <!-- Skull eye sockets -->
  <ellipse cx="82" cy="72" rx="14" ry="16" fill="#100c08"/>
  <ellipse cx="118" cy="72" rx="14" ry="16" fill="#100c08"/>
  <!-- Glowing pupils -->
  <ellipse cx="82" cy="72" rx="6" ry="7" fill="#8B0000" opacity="0.8"/>
  <ellipse cx="118" cy="72" rx="6" ry="7" fill="#8B0000" opacity="0.8"/>
  <!-- Nose cavity -->
  <path d="M96 92 L100 100 L104 92Z" fill="#100c08"/>
  <!-- Teeth on jaw -->
  <rect x="72" y="112" width="10" height="14" rx="2" fill="#f5edd8"/>
  <rect x="86" y="112" width="10" height="16" rx="2" fill="#f5edd8"/>
  <rect x="100" y="112" width="10" height="14" rx="2" fill="#f5edd8"/>
  <rect x="114" y="112" width="10" height="16" rx="2" fill="#f5edd8"/>
  <!-- Wordmark -->
  <text x="100" y="158" text-anchor="middle" font-family="Georgia, serif" font-size="12" font-weight="bold" fill="#C9A84C" letter-spacing="1">DevilOfTech</text>
</svg>`,
  },

  // ═══ GROUP B: DT Monogram ═══
  {
    id: 11,
    group: 'B',
    groupName: 'DT Monogram',
    label: 'DT in Hexagon',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="b11fill" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D4380D"/>
      <stop offset="100%" stop-color="#8B0000"/>
    </linearGradient>
  </defs>
  <!-- Hexagon -->
  <polygon points="100,18 162,54 162,126 100,162 38,126 38,54" fill="url(#b11fill)" stroke="#C9A84C" stroke-width="3"/>
  <polygon points="100,28 152,58 152,122 100,152 48,122 48,58" fill="none" stroke="#C9A84C" stroke-width="0.8" opacity="0.5"/>
  <!-- DT letters -->
  <text x="76" y="110" font-family="Georgia, serif" font-size="56" font-weight="bold" fill="#C9A84C">D</text>
  <text x="118" y="110" font-family="Georgia, serif" font-size="56" font-weight="bold" fill="#f5edd8">T</text>
</svg>`,
  },
  {
    id: 12,
    group: 'B',
    groupName: 'DT Monogram',
    label: 'D+T Intertwined',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- D letter in blood red -->
  <path d="M55 45 L55 155 L90 155 C122 155 140 138 140 100 C140 62 122 45 90 45 Z" fill="none" stroke="#8B0000" stroke-width="12" stroke-linejoin="round"/>
  <!-- T letter in gold, overlapping -->
  <line x1="68" y1="60" x2="148" y2="60" stroke="#C9A84C" stroke-width="12" stroke-linecap="square"/>
  <line x1="108" y1="60" x2="108" y2="155" stroke="#C9A84C" stroke-width="12" stroke-linecap="square"/>
  <!-- Overlap highlight -->
  <rect x="102" y="45" width="12" height="30" fill="#D4380D" opacity="0.7"/>
</svg>`,
  },
  {
    id: 13,
    group: 'B',
    groupName: 'DT Monogram',
    label: 'DT Shield',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="b13shield" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" stop-color="#2C2420"/>
      <stop offset="100%" stop-color="#100c08"/>
    </linearGradient>
  </defs>
  <!-- Shield shape -->
  <path d="M100 16 L172 46 L172 110 C172 148 138 176 100 190 C62 176 28 148 28 110 L28 46 Z" fill="url(#b13shield)" stroke="#C9A84C" stroke-width="3"/>
  <path d="M100 26 L162 52 L162 110 C162 144 132 170 100 182 C68 170 38 144 38 110 L38 52 Z" fill="none" stroke="#8B0000" stroke-width="1.5"/>
  <!-- Center divider -->
  <line x1="100" y1="45" x2="100" y2="175" stroke="#C9A84C" stroke-width="1" opacity="0.4"/>
  <line x1="38" y1="100" x2="162" y2="100" stroke="#C9A84C" stroke-width="1" opacity="0.4"/>
  <!-- DT letters -->
  <text x="70" y="105" text-anchor="middle" font-family="Georgia, serif" font-size="42" font-weight="bold" fill="#D4380D">D</text>
  <text x="130" y="105" text-anchor="middle" font-family="Georgia, serif" font-size="42" font-weight="bold" fill="#C9A84C">T</text>
</svg>`,
  },
  {
    id: 14,
    group: 'B',
    groupName: 'DT Monogram',
    label: 'DT with Devil Horns',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- D letter -->
  <path d="M40 55 L40 145 L75 145 C104 145 120 130 120 100 C120 70 104 55 75 55 Z" fill="#8B0000"/>
  <!-- T letter -->
  <rect x="124" y="55" width="42" height="14" fill="#C9A84C"/>
  <rect x="138" y="69" width="14" height="76" fill="#C9A84C"/>
  <!-- Horn from D -->
  <path d="M52 55 Q44 28 50 18 Q58 34 60 52Z" fill="#D4380D"/>
  <!-- Horn from T crossbar -->
  <path d="M130 55 Q124 30 130 20 Q136 36 134 52Z" fill="#D4380D"/>
  <path d="M158 55 Q164 30 158 20 Q152 36 154 52Z" fill="#D4380D"/>
</svg>`,
  },
  {
    id: 15,
    group: 'B',
    groupName: 'DT Monogram',
    label: 'DT Circle + Fire',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="b15flame" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#8B0000"/>
      <stop offset="100%" stop-color="#C9A84C"/>
    </linearGradient>
  </defs>
  <!-- Outer circle -->
  <circle cx="100" cy="100" r="88" fill="none" stroke="#8B0000" stroke-width="2"/>
  <!-- Fire flames around circle -->
  <path d="M100 12 C94 4 92 12 98 18 C90 10 86 20 94 24 C88 18 88 30 100 28 C112 30 112 18 106 24 C114 20 110 10 102 18 C108 12 106 4 100 12Z" fill="url(#b15flame)"/>
  <path d="M168 58 C176 54 174 62 168 64 C178 62 180 72 172 72 C180 68 178 80 170 76 C176 84 168 84 166 76 C166 86 158 82 162 74 C154 80 154 68 162 70 C156 66 160 56 168 58Z" fill="url(#b15flame)" transform="rotate(60 168 58)"/>
  <path d="M168 142 C176 146 174 138 168 136 C178 138 180 128 172 128 C180 132 178 120 170 124 C176 116 168 116 166 124 C166 114 158 118 162 126 C154 120 154 132 162 130 C156 134 160 144 168 142Z" fill="url(#b15flame)" transform="rotate(120 168 142)"/>
  <path d="M100 188 C94 196 92 188 98 182 C90 190 86 180 94 176 C88 182 88 170 100 172 C112 170 112 182 106 176 C114 180 110 190 102 182 C108 188 106 196 100 188Z" fill="url(#b15flame)"/>
  <path d="M32 142 C24 146 26 138 32 136 C22 138 20 128 28 128 C20 132 22 120 30 124 C24 116 32 116 34 124 C34 114 42 118 38 126 C46 120 46 132 38 130 C44 134 40 144 32 142Z" fill="url(#b15flame)" transform="rotate(-120 32 142)"/>
  <path d="M32 58 C24 54 26 62 32 64 C22 62 20 72 28 72 C20 68 22 80 30 76 C24 84 32 84 34 76 C34 86 42 82 38 74 C46 80 46 68 38 70 C44 66 40 56 32 58Z" fill="url(#b15flame)" transform="rotate(-60 32 58)"/>
  <!-- DT inside -->
  <text x="82" y="112" font-family="Georgia, serif" font-size="52" font-weight="bold" fill="#D4380D">D</text>
  <text x="116" y="112" font-family="Georgia, serif" font-size="52" font-weight="bold" fill="#C9A84C">T</text>
</svg>`,
  },
  {
    id: 16,
    group: 'B',
    groupName: 'DT Monogram',
    label: 'DT Negative Space',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Solid rectangle background -->
  <rect x="20" y="30" width="160" height="140" rx="4" fill="#8B0000"/>
  <!-- Cut out D shape -->
  <path d="M38 52 L38 148 L74 148 C103 148 120 132 120 100 C120 68 103 52 74 52 Z" fill="#100c08"/>
  <!-- Cut out T shape -->
  <rect x="124" y="52" width="42" height="16" fill="#100c08"/>
  <rect x="138" y="68" width="14" height="80" fill="#100c08"/>
  <!-- Subtle gold border -->
  <rect x="20" y="30" width="160" height="140" rx="4" fill="none" stroke="#C9A84C" stroke-width="1.5"/>
</svg>`,
  },
  {
    id: 17,
    group: 'B',
    groupName: 'DT Monogram',
    label: 'DT Runic Style',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Runic/angular DT -->
  <!-- D — angular version -->
  <path d="M40 40 L40 160 L40 40Z" stroke="#C9A84C" stroke-width="8" stroke-linecap="square"/>
  <line x1="40" y1="40" x2="40" y2="160" stroke="#C9A84C" stroke-width="8" stroke-linecap="square"/>
  <line x1="40" y1="40" x2="90" y2="60" stroke="#C9A84C" stroke-width="8" stroke-linecap="square"/>
  <line x1="90" y1="60" x2="104" y2="100" stroke="#C9A84C" stroke-width="8" stroke-linecap="square"/>
  <line x1="104" y1="100" x2="90" y2="140" stroke="#C9A84C" stroke-width="8" stroke-linecap="square"/>
  <line x1="90" y1="140" x2="40" y2="160" stroke="#C9A84C" stroke-width="8" stroke-linecap="square"/>
  <!-- T — angular version -->
  <line x1="116" y1="40" x2="172" y2="40" stroke="#D4380D" stroke-width="8" stroke-linecap="square"/>
  <line x1="144" y1="40" x2="144" y2="160" stroke="#D4380D" stroke-width="8" stroke-linecap="square"/>
  <!-- Rune marks -->
  <line x1="116" y1="80" x2="128" y2="80" stroke="#8B0000" stroke-width="3"/>
  <line x1="116" y1="100" x2="128" y2="100" stroke="#8B0000" stroke-width="3"/>
  <line x1="156" y1="80" x2="168" y2="80" stroke="#8B0000" stroke-width="3"/>
</svg>`,
  },
  {
    id: 18,
    group: 'B',
    groupName: 'DT Monogram',
    label: 'D as Pitchfork, T as Fork',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Pitchfork handle — D vertical stroke -->
  <rect x="76" y="100" width="10" height="80" rx="3" fill="#8B0000"/>
  <!-- Pitchfork prongs — T crossbar adapted -->
  <line x1="58" y1="68" x2="126" y2="68" stroke="#C9A84C" stroke-width="8" stroke-linecap="round"/>
  <!-- Three prong tips -->
  <path d="M58 68 L52 40 L56 40 L62 65" fill="none" stroke="#C9A84C" stroke-width="6" stroke-linecap="round"/>
  <path d="M81 68 L79 36 L85 36 L83 65" fill="none" stroke="#C9A84C" stroke-width="6" stroke-linecap="round"/>
  <path d="M104 68 L102 36 L108 36 L106 65" fill="none" stroke="#C9A84C" stroke-width="6" stroke-linecap="round"/>
  <!-- D letter arc (decorative) -->
  <path d="M76 100 Q40 100 40 72 Q40 44 76 44" fill="none" stroke="#8B0000" stroke-width="8" stroke-linecap="round"/>
  <!-- Label -->
  <text x="100" y="195" text-anchor="middle" font-family="Georgia, serif" font-size="10" fill="#C9A84C" letter-spacing="2">DT</text>
</svg>`,
  },
  {
    id: 19,
    group: 'B',
    groupName: 'DT Monogram',
    label: 'DT Diamond Glow',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="b19glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#D4380D" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#D4380D" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <!-- Glow effect -->
  <ellipse cx="100" cy="100" rx="80" ry="80" fill="url(#b19glow)"/>
  <!-- Diamond shape -->
  <polygon points="100,16 172,100 100,184 28,100" fill="none" stroke="#8B0000" stroke-width="2"/>
  <polygon points="100,24 162,100 100,176 38,100" fill="#1a1410"/>
  <polygon points="100,24 162,100 100,176 38,100" fill="none" stroke="#C9A84C" stroke-width="1.5"/>
  <!-- Inner diamond -->
  <polygon points="100,40 148,100 100,160 52,100" fill="none" stroke="#8B0000" stroke-width="0.8" opacity="0.5"/>
  <!-- DT text -->
  <text x="78" y="110" font-family="Georgia, serif" font-size="46" font-weight="bold" fill="#D4380D">D</text>
  <text x="114" y="110" font-family="Georgia, serif" font-size="46" font-weight="bold" fill="#C9A84C">T</text>
</svg>`,
  },
  {
    id: 20,
    group: 'B',
    groupName: 'DT Monogram',
    label: 'DT Tall Rectangle Badge',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Tall rectangle badge -->
  <rect x="52" y="10" width="96" height="180" rx="4" fill="#1a1410" stroke="#C9A84C" stroke-width="2.5"/>
  <rect x="58" y="16" width="84" height="168" rx="2" fill="none" stroke="#8B0000" stroke-width="0.8"/>
  <!-- Top ornament -->
  <line x1="72" y1="30" x2="128" y2="30" stroke="#C9A84C" stroke-width="0.8" opacity="0.6"/>
  <circle cx="100" cy="30" r="4" fill="#8B0000"/>
  <!-- DT stacked -->
  <text x="100" y="90" text-anchor="middle" font-family="Georgia, serif" font-size="58" font-weight="bold" fill="#D4380D">D</text>
  <text x="100" y="148" text-anchor="middle" font-family="Georgia, serif" font-size="58" font-weight="bold" fill="#C9A84C">T</text>
  <!-- Bottom ornament -->
  <line x1="72" y1="170" x2="128" y2="170" stroke="#C9A84C" stroke-width="0.8" opacity="0.6"/>
  <circle cx="100" cy="170" r="4" fill="#8B0000"/>
</svg>`,
  },

  // ═══ GROUP C: Icon Only ═══
  {
    id: 21,
    group: 'C',
    groupName: 'Icon Only',
    label: 'Devil Horns Minimal',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Left horn — elegant curved -->
  <path d="M70 160 Q60 100 72 60 Q78 40 68 20 Q86 36 88 60 Q94 90 88 160Z" fill="#8B0000"/>
  <!-- Right horn -->
  <path d="M130 160 Q140 100 128 60 Q122 40 132 20 Q114 36 112 60 Q106 90 112 160Z" fill="#8B0000"/>
  <!-- Base connecting arc -->
  <path d="M88 158 Q100 168 112 158" fill="none" stroke="#C9A84C" stroke-width="2" stroke-linecap="round"/>
  <!-- Gold tips -->
  <circle cx="68" cy="20" r="4" fill="#C9A84C"/>
  <circle cx="132" cy="20" r="4" fill="#C9A84C"/>
</svg>`,
  },
  {
    id: 22,
    group: 'C',
    groupName: 'Icon Only',
    label: 'Pitchfork/Trident',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="c22gold" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#F0D080"/>
      <stop offset="100%" stop-color="#C9A84C"/>
    </linearGradient>
  </defs>
  <!-- Handle -->
  <rect x="94" y="90" width="12" height="100" rx="4" fill="url(#c22gold)"/>
  <!-- Crossbar -->
  <rect x="52" y="90" width="96" height="10" rx="3" fill="url(#c22gold)"/>
  <!-- Left prong -->
  <path d="M60 90 L56 50 Q54 36 62 30 Q70 36 68 50 L64 90Z" fill="url(#c22gold)"/>
  <!-- Center prong -->
  <path d="M94 90 L92 40 Q90 22 100 14 Q110 22 108 40 L106 90Z" fill="url(#c22gold)"/>
  <!-- Right prong -->
  <path d="M140 90 L144 50 Q146 36 138 30 Q130 36 132 50 L136 90Z" fill="url(#c22gold)"/>
  <!-- Base ornament -->
  <ellipse cx="100" cy="188" rx="16" ry="6" fill="url(#c22gold)"/>
</svg>`,
  },
  {
    id: 23,
    group: 'C',
    groupName: 'Icon Only',
    label: 'Flame with Devil Tail',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="c23flame" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#8B0000"/>
      <stop offset="40%" stop-color="#D4380D"/>
      <stop offset="100%" stop-color="#C9A84C"/>
    </linearGradient>
  </defs>
  <!-- Main flame -->
  <path d="M100 10 C84 30 60 50 60 80 C60 110 78 130 100 138 C122 130 140 110 140 80 C140 50 116 30 100 10Z" fill="url(#c23flame)"/>
  <!-- Inner flame -->
  <path d="M100 28 C90 44 76 60 76 82 C76 104 88 118 100 124 C112 118 124 104 124 82 C124 60 110 44 100 28Z" fill="#D4380D" opacity="0.6"/>
  <!-- Devil tail curl at base -->
  <path d="M100 138 C100 155 118 162 122 152 C126 142 116 136 108 142 C104 148 108 158 116 154" fill="none" stroke="#8B0000" stroke-width="5" stroke-linecap="round"/>
  <!-- Tail tip arrow -->
  <path d="M116 154 L122 148 L118 158Z" fill="#8B0000"/>
</svg>`,
  },
  {
    id: 24,
    group: 'C',
    groupName: 'Icon Only',
    label: 'Circuit Skull',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Skull outline -->
  <path d="M100 20 C68 20 46 44 46 72 C46 94 56 108 68 116 L68 136 L132 136 L132 116 C144 108 154 94 154 72 C154 44 132 20 100 20Z" fill="#1a1410" stroke="#C9A84C" stroke-width="2"/>
  <!-- Circuit traces on skull -->
  <line x1="68" y1="60" x2="90" y2="60" stroke="#D4380D" stroke-width="1.5"/>
  <line x1="90" y1="60" x2="90" y2="50" stroke="#D4380D" stroke-width="1.5"/>
  <line x1="110" y1="60" x2="132" y2="60" stroke="#D4380D" stroke-width="1.5"/>
  <line x1="110" y1="60" x2="110" y2="50" stroke="#D4380D" stroke-width="1.5"/>
  <circle cx="90" cy="48" r="3" fill="#D4380D"/>
  <circle cx="110" cy="48" r="3" fill="#D4380D"/>
  <!-- Eye sockets with circuit glow -->
  <ellipse cx="82" cy="80" rx="14" ry="16" fill="#100c08" stroke="#D4380D" stroke-width="1"/>
  <ellipse cx="118" cy="80" rx="14" ry="16" fill="#100c08" stroke="#D4380D" stroke-width="1"/>
  <ellipse cx="82" cy="80" rx="6" ry="7" fill="#D4380D" opacity="0.7"/>
  <ellipse cx="118" cy="80" rx="6" ry="7" fill="#D4380D" opacity="0.7"/>
  <!-- Nose -->
  <path d="M96 100 L100 108 L104 100Z" fill="#100c08"/>
  <!-- Teeth / jaw -->
  <rect x="76" y="122" width="10" height="14" rx="1" fill="#C9A84C"/>
  <rect x="90" y="122" width="10" height="16" rx="1" fill="#C9A84C"/>
  <rect x="104" y="122" width="10" height="14" rx="1" fill="#C9A84C"/>
  <rect x="118" y="122" width="10" height="16" rx="1" fill="#C9A84C"/>
  <!-- Extra circuit lines on jaw -->
  <line x1="68" y1="128" x2="76" y2="128" stroke="#D4380D" stroke-width="1"/>
  <line x1="132" y1="128" x2="128" y2="128" stroke="#D4380D" stroke-width="1"/>
  <circle cx="67" cy="128" r="2.5" fill="#D4380D"/>
  <circle cx="133" cy="128" r="2.5" fill="#D4380D"/>
</svg>`,
  },
  {
    id: 25,
    group: 'C',
    groupName: 'Icon Only',
    label: 'Eye with Flame Pupil',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="c25iris" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#D4380D"/>
      <stop offset="60%" stop-color="#8B0000"/>
      <stop offset="100%" stop-color="#1a0000"/>
    </radialGradient>
  </defs>
  <!-- Eye white / sclera -->
  <path d="M20 100 Q100 30 180 100 Q100 170 20 100Z" fill="#f5edd8" stroke="#C9A84C" stroke-width="2"/>
  <!-- Iris -->
  <circle cx="100" cy="100" r="38" fill="url(#c25iris)"/>
  <!-- Flame pupil -->
  <path d="M100 72 C92 80 84 92 84 102 C84 114 92 122 100 122 C108 122 116 114 116 102 C116 92 108 80 100 72Z" fill="#1a0000"/>
  <path d="M100 80 C96 86 92 94 92 104 C92 110 96 116 100 116" fill="none" stroke="#C9A84C" stroke-width="2" stroke-linecap="round"/>
  <!-- Eyelashes -->
  <line x1="44" y1="84" x2="38" y2="76" stroke="#C9A84C" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="64" y1="70" x2="60" y2="60" stroke="#C9A84C" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="156" y1="84" x2="162" y2="76" stroke="#C9A84C" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="136" y1="70" x2="140" y2="60" stroke="#C9A84C" stroke-width="1.5" stroke-linecap="round"/>
  <!-- Glint -->
  <circle cx="88" cy="88" r="5" fill="rgba(255,255,255,0.15)"/>
</svg>`,
  },
  {
    id: 26,
    group: 'C',
    groupName: 'Icon Only',
    label: 'Lightning Devil Tail',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="c26bolt" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C9A84C"/>
      <stop offset="100%" stop-color="#D4380D"/>
    </linearGradient>
  </defs>
  <!-- Lightning bolt with devil tail curl -->
  <path d="M120 10 L80 90 L106 90 L72 170 L80 170 L100 120" fill="none" stroke="url(#c26bolt)" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M120 10 L80 90 L106 90 L86 150" fill="url(#c26bolt)"/>
  <!-- Devil tail curl at bottom -->
  <path d="M86 150 C86 168 102 175 106 166 C110 157 100 150 94 156 C90 162 94 172 100 168" fill="none" stroke="#8B0000" stroke-width="5" stroke-linecap="round"/>
  <!-- Tail tip -->
  <polygon points="100,168 106,162 98,174" fill="#8B0000"/>
</svg>`,
  },
  {
    id: 27,
    group: 'C',
    groupName: 'Icon Only',
    label: 'Horns on Code Bracket',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Code curly braces -->
  <text x="100" y="128" text-anchor="middle" font-family="'Courier New', monospace" font-size="100" font-weight="bold" fill="#C9A84C" opacity="0.9">{ }</text>
  <!-- Left horn from { top -->
  <path d="M56 48 Q46 20 54 8 Q62 26 63 46Z" fill="#D4380D"/>
  <!-- Right horn from } top -->
  <path d="M144 48 Q154 20 146 8 Q138 26 137 46Z" fill="#D4380D"/>
  <!-- Ember glow behind -->
  <text x="100" y="128" text-anchor="middle" font-family="'Courier New', monospace" font-size="100" font-weight="bold" fill="none" stroke="#8B0000" stroke-width="0.5" opacity="0.4">{ }</text>
</svg>`,
  },
  {
    id: 28,
    group: 'C',
    groupName: 'Icon Only',
    label: 'Microchip with Horns',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Chip body -->
  <rect x="52" y="56" width="96" height="96" rx="6" fill="#1a1410" stroke="#C9A84C" stroke-width="2"/>
  <rect x="62" y="66" width="76" height="76" rx="4" fill="#2C2420" stroke="#8B0000" stroke-width="1"/>
  <!-- Pin connections left -->
  <rect x="32" y="74" width="20" height="5" rx="1" fill="#C9A84C"/>
  <rect x="32" y="88" width="20" height="5" rx="1" fill="#C9A84C"/>
  <rect x="32" y="102" width="20" height="5" rx="1" fill="#C9A84C"/>
  <rect x="32" y="116" width="20" height="5" rx="1" fill="#C9A84C"/>
  <rect x="32" y="130" width="20" height="5" rx="1" fill="#C9A84C"/>
  <!-- Pin connections right -->
  <rect x="148" y="74" width="20" height="5" rx="1" fill="#C9A84C"/>
  <rect x="148" y="88" width="20" height="5" rx="1" fill="#C9A84C"/>
  <rect x="148" y="102" width="20" height="5" rx="1" fill="#C9A84C"/>
  <rect x="148" y="116" width="20" height="5" rx="1" fill="#C9A84C"/>
  <rect x="148" y="130" width="20" height="5" rx="1" fill="#C9A84C"/>
  <!-- DT on chip -->
  <text x="100" y="112" text-anchor="middle" font-family="Georgia, serif" font-size="30" font-weight="bold" fill="#D4380D">DT</text>
  <!-- Devil horns on top -->
  <path d="M76 56 Q68 32 74 22 Q82 38 82 54Z" fill="#D4380D"/>
  <path d="M124 56 Q132 32 126 22 Q118 38 118 54Z" fill="#D4380D"/>
</svg>`,
  },
  {
    id: 29,
    group: 'C',
    groupName: 'Icon Only',
    label: 'Inverted Triangle Grin',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="c29tri" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" stop-color="#8B0000"/>
      <stop offset="100%" stop-color="#D4380D"/>
    </linearGradient>
  </defs>
  <!-- Inverted triangle -->
  <polygon points="100,180 12,24 188,24" fill="url(#c29tri)"/>
  <polygon points="100,180 12,24 188,24" fill="none" stroke="#C9A84C" stroke-width="2"/>
  <!-- Devil grin inside -->
  <path d="M68 90 Q100 128 132 90" fill="none" stroke="#f5edd8" stroke-width="3.5" stroke-linecap="round"/>
  <!-- Fang marks -->
  <line x1="80" y1="90" x2="76" y2="104" stroke="#f5edd8" stroke-width="2.5"/>
  <line x1="120" y1="90" x2="124" y2="104" stroke="#f5edd8" stroke-width="2.5"/>
  <!-- Eye dots -->
  <circle cx="78" cy="68" r="6" fill="#fff700"/>
  <circle cx="122" cy="68" r="6" fill="#fff700"/>
  <circle cx="78" cy="70" r="3" fill="#1a0000"/>
  <circle cx="122" cy="70" r="3" fill="#1a0000"/>
</svg>`,
  },
  {
    id: 30,
    group: 'C',
    groupName: 'Icon Only',
    label: 'Equalizer Flame',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="c30eq" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#8B0000"/>
      <stop offset="50%" stop-color="#D4380D"/>
      <stop offset="100%" stop-color="#C9A84C"/>
    </linearGradient>
  </defs>
  <!-- Flame shape made of stacked bars -->
  <!-- Bar 1 — widest at bottom -->
  <rect x="36" y="166" width="128" height="14" rx="3" fill="url(#c30eq)" opacity="0.95"/>
  <!-- Bar 2 -->
  <rect x="46" y="148" width="108" height="12" rx="3" fill="url(#c30eq)" opacity="0.9"/>
  <!-- Bar 3 -->
  <rect x="54" y="132" width="92" height="11" rx="3" fill="url(#c30eq)" opacity="0.85"/>
  <!-- Bar 4 -->
  <rect x="60" y="117" width="80" height="10" rx="3" fill="url(#c30eq)" opacity="0.8"/>
  <!-- Bar 5 -->
  <rect x="64" y="103" width="72" height="9" rx="3" fill="url(#c30eq)" opacity="0.78"/>
  <!-- Bar 6 -->
  <rect x="68" y="90" width="64" height="8" rx="3" fill="url(#c30eq)" opacity="0.75"/>
  <!-- Bar 7 -->
  <rect x="72" y="78" width="56" height="7" rx="3" fill="url(#c30eq)" opacity="0.7"/>
  <!-- Bar 8 -->
  <rect x="76" y="67" width="48" height="6" rx="3" fill="url(#c30eq)" opacity="0.65"/>
  <!-- Bar 9 -->
  <rect x="80" y="57" width="40" height="5" rx="3" fill="url(#c30eq)" opacity="0.6"/>
  <!-- Bar 10 — narrowest at tip -->
  <rect x="84" y="48" width="32" height="4" rx="2" fill="url(#c30eq)" opacity="0.55"/>
  <!-- Flame tip -->
  <rect x="88" y="40" width="24" height="3" rx="2" fill="#C9A84C" opacity="0.5"/>
  <rect x="92" y="33" width="16" height="3" rx="2" fill="#C9A84C" opacity="0.4"/>
  <rect x="96" y="27" width="8" height="3" rx="2" fill="#C9A84C" opacity="0.3"/>
</svg>`,
  },

  // ═══ GROUP D: Badge/Emblem ═══
  {
    id: 31,
    group: 'D',
    groupName: 'Badge / Emblem',
    label: 'Circular Badge Arc',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Outer rings -->
  <circle cx="100" cy="100" r="94" fill="#100c08" stroke="#C9A84C" stroke-width="3"/>
  <circle cx="100" cy="100" r="88" fill="none" stroke="#8B0000" stroke-width="1"/>
  <circle cx="100" cy="100" r="78" fill="none" stroke="#C9A84C" stroke-width="0.5" opacity="0.4"/>
  <!-- Devil face top -->
  <circle cx="100" cy="82" r="38" fill="#8B0000"/>
  <!-- Horns -->
  <path d="M78 50 Q68 26 76 14 Q84 32 85 48Z" fill="#D4380D"/>
  <path d="M122 50 Q132 26 124 14 Q116 32 115 48Z" fill="#D4380D"/>
  <!-- Eyes -->
  <ellipse cx="88" cy="76" rx="6" ry="7" fill="#fff700"/>
  <ellipse cx="112" cy="76" rx="6" ry="7" fill="#fff700"/>
  <ellipse cx="88" cy="78" rx="3" ry="3.5" fill="#1a0000"/>
  <ellipse cx="112" cy="78" rx="3" ry="3.5" fill="#1a0000"/>
  <!-- Grin -->
  <path d="M80 96 Q100 112 120 96" fill="none" stroke="#f5edd8" stroke-width="2" stroke-linecap="round"/>
  <!-- Arc text bottom -->
  <path id="d31bottom" d="M 14,100 A 86,86 0 0 0 186,100" fill="none"/>
  <text font-family="Georgia, serif" font-size="11" font-weight="bold" fill="#C9A84C" letter-spacing="3">
    <textPath href="#d31bottom" startOffset="12%">DEVIL OF TECH</textPath>
  </text>
</svg>`,
  },
  {
    id: 32,
    group: 'D',
    groupName: 'Badge / Emblem',
    label: 'Hexagonal Badge',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Hex outer -->
  <polygon points="100,6 180,50 180,138 100,182 20,138 20,50" fill="#100c08" stroke="#C9A84C" stroke-width="3"/>
  <polygon points="100,16 170,56 170,132 100,172 30,132 30,56" fill="none" stroke="#8B0000" stroke-width="1"/>
  <!-- DT center -->
  <text x="76" y="118" font-family="Georgia, serif" font-size="60" font-weight="bold" fill="#D4380D">D</text>
  <text x="116" y="118" font-family="Georgia, serif" font-size="60" font-weight="bold" fill="#C9A84C">T</text>
  <!-- Top text arc -->
  <path id="d32top" d="M 30,80 A 74,74 0 0 1 170,80" fill="none"/>
  <text font-family="'Courier New', monospace" font-size="8" fill="#C9A84C" letter-spacing="2" opacity="0.8">
    <textPath href="#d32top" startOffset="12%">DEVILOFTECH</textPath>
  </text>
  <!-- Bottom text arc -->
  <path id="d32bot" d="M 30,120 A 74,74 0 0 0 170,120" fill="none"/>
  <text font-family="'Courier New', monospace" font-size="8" fill="#C9A84C" letter-spacing="2" opacity="0.8">
    <textPath href="#d32bot" startOffset="16%">EST · 2024</textPath>
  </text>
</svg>`,
  },
  {
    id: 33,
    group: 'D',
    groupName: 'Badge / Emblem',
    label: 'Shield Emblem Horns',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Shield -->
  <path d="M100 12 L176 44 L176 112 C176 152 140 182 100 194 C60 182 24 152 24 112 L24 44 Z" fill="#1a1410" stroke="#C9A84C" stroke-width="2.5"/>
  <path d="M100 22 L166 50 L166 112 C166 148 134 174 100 184 C66 174 34 148 34 112 L34 50 Z" fill="none" stroke="#8B0000" stroke-width="1"/>
  <!-- Horns at top -->
  <path d="M82 28 Q72 6 80 -2 Q88 14 88 26Z" fill="#D4380D"/>
  <path d="M118 28 Q128 6 120 -2 Q112 14 112 26Z" fill="#D4380D"/>
  <!-- DT center -->
  <text x="72" y="120" font-family="Georgia, serif" font-size="52" font-weight="bold" fill="#D4380D">D</text>
  <text x="112" y="120" font-family="Georgia, serif" font-size="52" font-weight="bold" fill="#C9A84C">T</text>
  <!-- Bottom banner -->
  <rect x="40" y="158" width="120" height="22" rx="2" fill="#8B0000"/>
  <text x="100" y="174" text-anchor="middle" font-family="Georgia, serif" font-size="9" font-weight="bold" fill="#f5edd8" letter-spacing="2">DEVILOFTECH</text>
</svg>`,
  },
  {
    id: 34,
    group: 'D',
    groupName: 'Badge / Emblem',
    label: 'Wax Seal Style',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="d34seal" cx="40%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#c0200a"/>
      <stop offset="100%" stop-color="#6b0000"/>
    </radialGradient>
  </defs>
  <!-- Wax seal irregular edge -->
  <path d="M100 8 L116 14 L130 8 L140 20 L154 18 L158 32 L170 36 L168 50 L178 58 L172 70 L180 82 L170 90 L174 104 L162 110 L162 124 L150 126 L144 140 L132 138 L124 150 L112 146 L100 156 L88 146 L76 150 L68 138 L56 140 L50 126 L38 124 L38 110 L26 104 L30 90 L20 82 L28 70 L22 58 L32 50 L30 36 L42 32 L46 18 L60 20 L70 8 L84 14 Z" fill="url(#d34seal)"/>
  <!-- Inner seal ring -->
  <circle cx="100" cy="100" r="62" fill="none" stroke="#C9A84C" stroke-width="1.5" opacity="0.5"/>
  <!-- Devil face impression -->
  <circle cx="100" cy="86" r="32" fill="#6b0000"/>
  <path d="M82 62 Q74 46 80 38 Q86 50 86 60Z" fill="#8B0000"/>
  <path d="M118 62 Q126 46 120 38 Q114 50 114 60Z" fill="#8B0000"/>
  <ellipse cx="90" cy="82" rx="5" ry="6" fill="#C9A84C" opacity="0.8"/>
  <ellipse cx="110" cy="82" rx="5" ry="6" fill="#C9A84C" opacity="0.8"/>
  <path d="M82 96 Q100 110 118 96" fill="none" stroke="#f5edd8" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
  <!-- EST text -->
  <text x="100" y="138" text-anchor="middle" font-family="Georgia, serif" font-size="8" fill="#C9A84C" letter-spacing="3">EST. 2024</text>
</svg>`,
  },
  {
    id: 35,
    group: 'D',
    groupName: 'Badge / Emblem',
    label: 'Rectangle Stamp',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Outer frame -->
  <rect x="10" y="38" width="180" height="130" rx="4" fill="#100c08" stroke="#D4380D" stroke-width="3"/>
  <rect x="18" y="46" width="164" height="114" rx="2" fill="none" stroke="#C9A84C" stroke-width="1"/>
  <rect x="24" y="52" width="152" height="102" rx="1" fill="none" stroke="#8B0000" stroke-width="0.5" opacity="0.6"/>
  <!-- Main text -->
  <text x="100" y="96" text-anchor="middle" font-family="Georgia, serif" font-size="22" font-weight="bold" fill="#D4380D" letter-spacing="2">DEVIL OF</text>
  <text x="100" y="124" text-anchor="middle" font-family="Georgia, serif" font-size="22" font-weight="bold" fill="#C9A84C" letter-spacing="2">TECH</text>
  <!-- Divider line -->
  <line x1="40" y1="104" x2="160" y2="104" stroke="#C9A84C" stroke-width="0.8" opacity="0.5"/>
  <!-- Corner devil marks -->
  <path d="M24 52 L32 52 L32 60" fill="none" stroke="#8B0000" stroke-width="1.5"/>
  <path d="M176 52 L168 52 L168 60" fill="none" stroke="#8B0000" stroke-width="1.5"/>
  <path d="M24 154 L32 154 L32 146" fill="none" stroke="#8B0000" stroke-width="1.5"/>
  <path d="M176 154 L168 154 L168 146" fill="none" stroke="#8B0000" stroke-width="1.5"/>
  <!-- Small devil mark bottom right -->
  <path d="M158 145 Q164 138 160 133 Q156 140 157 145Z" fill="#8B0000"/>
  <path d="M168 145 Q174 138 170 133 Q166 140 167 145Z" fill="#8B0000"/>
</svg>`,
  },
  {
    id: 36,
    group: 'D',
    groupName: 'Badge / Emblem',
    label: 'Star/Sunburst DT',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Sunburst rays -->
  <g opacity="0.6">
    <line x1="100" y1="10" x2="100" y2="40" stroke="#C9A84C" stroke-width="2"/>
    <line x1="100" y1="160" x2="100" y2="190" stroke="#C9A84C" stroke-width="2"/>
    <line x1="10" y1="100" x2="40" y2="100" stroke="#C9A84C" stroke-width="2"/>
    <line x1="160" y1="100" x2="190" y2="100" stroke="#C9A84C" stroke-width="2"/>
    <line x1="29" y1="29" x2="50" y2="50" stroke="#C9A84C" stroke-width="1.5"/>
    <line x1="150" y1="50" x2="171" y2="29" stroke="#C9A84C" stroke-width="1.5"/>
    <line x1="29" y1="171" x2="50" y2="150" stroke="#C9A84C" stroke-width="1.5"/>
    <line x1="150" y1="150" x2="171" y2="171" stroke="#C9A84C" stroke-width="1.5"/>
    <line x1="18" y1="62" x2="42" y2="72" stroke="#C9A84C" stroke-width="1"/>
    <line x1="158" y1="72" x2="182" y2="62" stroke="#C9A84C" stroke-width="1"/>
    <line x1="18" y1="138" x2="42" y2="128" stroke="#C9A84C" stroke-width="1"/>
    <line x1="158" y1="128" x2="182" y2="138" stroke="#C9A84C" stroke-width="1"/>
  </g>
  <!-- Center star -->
  <polygon points="100,50 113,87 152,87 120,110 132,147 100,126 68,147 80,110 48,87 87,87" fill="#8B0000" stroke="#C9A84C" stroke-width="1.5"/>
  <!-- DT inside star -->
  <text x="80" y="114" font-family="Georgia, serif" font-size="36" font-weight="bold" fill="#C9A84C">D</text>
  <text x="109" y="114" font-family="Georgia, serif" font-size="36" font-weight="bold" fill="#f5edd8">T</text>
</svg>`,
  },
  {
    id: 37,
    group: 'D',
    groupName: 'Badge / Emblem',
    label: 'Heraldic Crest',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Shield crest split -->
  <path d="M100 14 L174 42 L174 108 C174 148 140 178 100 192 C60 178 26 148 26 108 L26 42 Z" fill="#1a1410" stroke="#C9A84C" stroke-width="2"/>
  <!-- Left panel - devil face -->
  <rect x="26" y="42" width="74" height="150" fill="none"/>
  <clipPath id="d37left"><path d="M26 42 L100 42 L100 192 C76 184 50 164 36 138 L26 108 Z"/></clipPath>
  <g clip-path="url(#d37left)">
    <circle cx="66" cy="100" r="34" fill="#8B0000"/>
    <path d="M52 72 Q44 52 50 42 Q58 58 59 70Z" fill="#D4380D"/>
    <path d="M80 72 Q88 52 82 42 Q74 58 73 70Z" fill="#D4380D"/>
    <ellipse cx="58" cy="96" rx="5" ry="6" fill="#fff700"/>
    <ellipse cx="74" cy="96" rx="5" ry="6" fill="#fff700"/>
    <path d="M50 112 Q66 124 82 112" fill="none" stroke="#f5edd8" stroke-width="1.5" stroke-linecap="round"/>
  </g>
  <!-- Right panel - code brackets -->
  <clipPath id="d37right"><path d="M100 42 L174 42 L174 108 C174 148 140 178 100 192 Z"/></clipPath>
  <g clip-path="url(#d37right)">
    <text x="134" y="120" text-anchor="middle" font-family="'Courier New', monospace" font-size="44" font-weight="bold" fill="#C9A84C">{ }</text>
  </g>
  <!-- Center divider -->
  <line x1="100" y1="42" x2="100" y2="185" stroke="#C9A84C" stroke-width="1.5"/>
  <!-- Banner -->
  <rect x="30" y="162" width="140" height="22" rx="2" fill="#8B0000"/>
  <path d="M30 162 L18 173 L30 184" fill="#6b0000"/>
  <path d="M170 162 L182 173 L170 184" fill="#6b0000"/>
  <text x="100" y="178" text-anchor="middle" font-family="Georgia, serif" font-size="8.5" font-weight="bold" fill="#f5edd8" letter-spacing="2">DEVILOFTECH</text>
</svg>`,
  },
  {
    id: 38,
    group: 'D',
    groupName: 'Badge / Emblem',
    label: 'Coin/Medal Relief',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="d38coin" cx="40%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#F0D080"/>
      <stop offset="50%" stop-color="#C9A84C"/>
      <stop offset="100%" stop-color="#7a6020"/>
    </radialGradient>
  </defs>
  <!-- Coin -->
  <circle cx="100" cy="100" r="90" fill="url(#d38coin)"/>
  <circle cx="100" cy="100" r="84" fill="none" stroke="#7a6020" stroke-width="2"/>
  <circle cx="100" cy="100" r="78" fill="none" stroke="#F0D080" stroke-width="0.8" opacity="0.6"/>
  <!-- Raised devil face relief -->
  <circle cx="100" cy="88" r="44" fill="#C9A84C" stroke="#7a6020" stroke-width="1.5"/>
  <!-- Horns relief -->
  <path d="M78 50 Q68 26 76 16 Q84 32 84 48Z" fill="#C9A84C" stroke="#7a6020" stroke-width="1"/>
  <path d="M122 50 Q132 26 124 16 Q116 32 116 48Z" fill="#C9A84C" stroke="#7a6020" stroke-width="1"/>
  <!-- Eyes raised -->
  <ellipse cx="88" cy="82" rx="8" ry="9" fill="#7a6020"/>
  <ellipse cx="112" cy="82" rx="8" ry="9" fill="#7a6020"/>
  <!-- Grin -->
  <path d="M78 100 Q100 118 122 100" fill="none" stroke="#7a6020" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Bottom text arc -->
  <path id="d38arc" d="M 18,100 A 82,82 0 0 0 182,100" fill="none"/>
  <text font-family="Georgia, serif" font-size="10" font-weight="bold" fill="#7a6020" letter-spacing="3">
    <textPath href="#d38arc" startOffset="14%">DEVIL OF TECH</textPath>
  </text>
</svg>`,
  },
  {
    id: 39,
    group: 'D',
    groupName: 'Badge / Emblem',
    label: 'Triangle Badge',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Triangle pointing up -->
  <polygon points="100,10 188,176 12,176" fill="#1a1410" stroke="#C9A84C" stroke-width="2.5"/>
  <polygon points="100,22 178,170 22,170" fill="none" stroke="#8B0000" stroke-width="1"/>
  <!-- Horns at tip -->
  <path d="M92 22 Q84 4 90 -4 Q96 10 95 20Z" fill="#D4380D"/>
  <path d="M108 22 Q116 4 110 -4 Q104 10 105 20Z" fill="#D4380D"/>
  <!-- DT inside -->
  <text x="72" y="128" font-family="Georgia, serif" font-size="52" font-weight="bold" fill="#D4380D">D</text>
  <text x="114" y="128" font-family="Georgia, serif" font-size="52" font-weight="bold" fill="#C9A84C">T</text>
  <!-- Bottom text -->
  <text x="100" y="158" text-anchor="middle" font-family="Georgia, serif" font-size="8" fill="#C9A84C" letter-spacing="2">DEVIL OF TECH</text>
</svg>`,
  },
  {
    id: 40,
    group: 'D',
    groupName: 'Badge / Emblem',
    label: 'Pentagon Badge',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Pentagon -->
  <polygon points="100,8 188,70 158,168 42,168 12,70" fill="#1a1410" stroke="#C9A84C" stroke-width="2.5"/>
  <polygon points="100,18 178,74 150,160 50,160 22,74" fill="none" stroke="#8B0000" stroke-width="1"/>
  <!-- Devil icon top -->
  <circle cx="100" cy="70" r="32" fill="#8B0000"/>
  <path d="M82 44 Q74 24 80 14 Q87 30 87 42Z" fill="#D4380D"/>
  <path d="M118 44 Q126 24 120 14 Q113 30 113 42Z" fill="#D4380D"/>
  <ellipse cx="90" cy="66" rx="5.5" ry="6.5" fill="#fff700"/>
  <ellipse cx="110" cy="66" rx="5.5" ry="6.5" fill="#fff700"/>
  <ellipse cx="90" cy="68" rx="2.5" ry="3" fill="#1a0000"/>
  <ellipse cx="110" cy="68" rx="2.5" ry="3" fill="#1a0000"/>
  <path d="M82 84 Q100 98 118 84" fill="none" stroke="#f5edd8" stroke-width="2" stroke-linecap="round"/>
  <!-- Text below -->
  <text x="100" y="126" text-anchor="middle" font-family="Georgia, serif" font-size="11" font-weight="bold" fill="#D4380D" letter-spacing="1">DEVIL OF</text>
  <text x="100" y="144" text-anchor="middle" font-family="Georgia, serif" font-size="11" font-weight="bold" fill="#C9A84C" letter-spacing="1">TECH</text>
</svg>`,
  },

  // ═══ GROUP E: Wordmark / Text-Forward ═══
  {
    id: 41,
    group: 'E',
    groupName: 'Wordmark / Text-Forward',
    label: 'Elegant Gold Serif',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Decorative top line -->
  <line x1="30" y1="70" x2="170" y2="70" stroke="#C9A84C" stroke-width="0.8" opacity="0.5"/>
  <line x1="50" y1="74" x2="150" y2="74" stroke="#C9A84C" stroke-width="0.3" opacity="0.4"/>
  <!-- Diamond ornament top center -->
  <polygon points="100,60 104,70 100,80 96,70" fill="#C9A84C" opacity="0.6"/>
  <!-- Main wordmark -->
  <text x="100" y="110" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="22" font-weight="bold" fill="#C9A84C" letter-spacing="1">DevilOfTech</text>
  <!-- Thin underline -->
  <line x1="30" y1="118" x2="170" y2="118" stroke="#8B0000" stroke-width="0.8"/>
  <!-- Tagline -->
  <text x="100" y="136" text-anchor="middle" font-family="Georgia, serif" font-size="8" fill="rgba(245,237,216,0.5)" letter-spacing="4">TECH · AI · CODING</text>
  <!-- Bottom ornament -->
  <line x1="50" y1="148" x2="150" y2="148" stroke="#C9A84C" stroke-width="0.3" opacity="0.4"/>
  <line x1="30" y1="152" x2="170" y2="152" stroke="#C9A84C" stroke-width="0.8" opacity="0.5"/>
  <polygon points="100,142 104,152 100,162 96,152" fill="#C9A84C" opacity="0.6"/>
</svg>`,
  },
  {
    id: 42,
    group: 'E',
    groupName: 'Wordmark / Text-Forward',
    label: 'DEVIL large, of tech small',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- DEVIL in ember large -->
  <text x="100" y="100" text-anchor="middle" font-family="Georgia, serif" font-size="46" font-weight="bold" fill="#D4380D" letter-spacing="3">DEVIL</text>
  <!-- OF TECH in gold smaller -->
  <text x="100" y="134" text-anchor="middle" font-family="Georgia, serif" font-size="20" font-weight="bold" fill="#C9A84C" letter-spacing="6">OF TECH</text>
  <!-- Thin rule between -->
  <line x1="46" y1="108" x2="154" y2="108" stroke="#C9A84C" stroke-width="0.6" opacity="0.5"/>
  <!-- Top ornament dots -->
  <circle cx="54" cy="66" r="2" fill="#8B0000" opacity="0.6"/>
  <circle cx="100" cy="60" r="2.5" fill="#C9A84C" opacity="0.7"/>
  <circle cx="146" cy="66" r="2" fill="#8B0000" opacity="0.6"/>
</svg>`,
  },
  {
    id: 43,
    group: 'E',
    groupName: 'Wordmark / Text-Forward',
    label: 'D·T with Flame Dot',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- D letter -->
  <text x="52" y="122" font-family="'Courier New', monospace" font-size="80" font-weight="bold" fill="#C9A84C">D</text>
  <!-- Flame dot separator -->
  <path d="M100 88 C96 94 90 102 90 108 C90 116 95 120 100 120 C105 120 110 116 110 108 C110 102 104 94 100 88Z" fill="#D4380D"/>
  <!-- T letter -->
  <text x="110" y="122" font-family="'Courier New', monospace" font-size="80" font-weight="bold" fill="#f5edd8">T</text>
  <!-- Subtitle -->
  <text x="100" y="150" text-anchor="middle" font-family="'Courier New', monospace" font-size="8" fill="#C9A84C" letter-spacing="3" opacity="0.7">DEVILOFTECH</text>
</svg>`,
  },
  {
    id: 44,
    group: 'E',
    groupName: 'Wordmark / Text-Forward',
    label: 'devil.of.tech lowercase',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Code-style background hint -->
  <rect x="14" y="82" width="172" height="42" rx="3" fill="rgba(26,20,16,0.8)" stroke="#2C2420" stroke-width="1"/>
  <!-- Cursor line on left -->
  <rect x="20" y="88" width="3" height="30" rx="1" fill="#D4380D"/>
  <!-- devil -->
  <text x="32" y="112" font-family="'Courier New', monospace" font-size="18" fill="#D4380D">devil</text>
  <!-- .of. -->
  <text x="94" y="112" font-family="'Courier New', monospace" font-size="18" fill="#C9A84C">.of.</text>
  <!-- tech -->
  <text x="130" y="112" font-family="'Courier New', monospace" font-size="18" fill="#f5edd8">tech</text>
  <!-- Top comment -->
  <text x="100" y="72" text-anchor="middle" font-family="'Courier New', monospace" font-size="9" fill="rgba(201,168,76,0.4)" letter-spacing="1">// your brand domain</text>
  <!-- Bottom hint -->
  <text x="100" y="144" text-anchor="middle" font-family="'Courier New', monospace" font-size="8" fill="rgba(212,56,13,0.5)" letter-spacing="1">deviloftech.com</text>
</svg>`,
  },
  {
    id: 45,
    group: 'E',
    groupName: 'Wordmark / Text-Forward',
    label: '@deviloftech Terminal',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Terminal window -->
  <rect x="10" y="44" width="180" height="120" rx="6" fill="#100c08" stroke="#2C2420" stroke-width="1.5"/>
  <!-- Title bar -->
  <rect x="10" y="44" width="180" height="22" rx="6" fill="#1a1410"/>
  <rect x="10" y="56" width="180" height="10" fill="#1a1410"/>
  <!-- Traffic lights -->
  <circle cx="26" cy="55" r="4" fill="#8B0000"/>
  <circle cx="40" cy="55" r="4" fill="#7a6020"/>
  <circle cx="54" cy="55" r="4" fill="#2C2420"/>
  <!-- Prompt line -->
  <text x="22" y="88" font-family="'Courier New', monospace" font-size="10" fill="#D4380D">$</text>
  <text x="34" y="88" font-family="'Courier New', monospace" font-size="10" fill="#C9A84C">@deviloftech</text>
  <!-- Cursor blink placeholder -->
  <rect x="130" y="78" width="7" height="12" rx="1" fill="#C9A84C" opacity="0.9"/>
  <!-- Second line -->
  <text x="22" y="112" font-family="'Courier New', monospace" font-size="9" fill="rgba(245,237,216,0.4)">→ Tech, AI &amp; Coding</text>
  <!-- Third line -->
  <text x="22" y="132" font-family="'Courier New', monospace" font-size="9" fill="rgba(212,56,13,0.6)">_ deviloftech.com</text>
</svg>`,
  },
  {
    id: 46,
    group: 'E',
    groupName: 'Wordmark / Text-Forward',
    label: 'O replaced by Devil Face',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- DEVIL -->
  <text x="8" y="88" font-family="Georgia, serif" font-size="28" font-weight="bold" fill="#D4380D" letter-spacing="1">DEVIL</text>
  <!-- OF with devil face O -->
  <text x="8" y="124" font-family="Georgia, serif" font-size="28" font-weight="bold" fill="#C9A84C" letter-spacing="1"> F TECH</text>
  <!-- Devil face circle O -->
  <circle cx="20" cy="110" r="13" fill="#8B0000"/>
  <path d="M14 100 Q10 92 13 88 Q16 94 16 100Z" fill="#D4380D"/>
  <path d="M26 100 Q30 92 27 88 Q24 94 24 100Z" fill="#D4380D"/>
  <circle cx="16" cy="107" r="2" fill="#fff700"/>
  <circle cx="24" cy="107" r="2" fill="#fff700"/>
  <path d="M14 115 Q20 121 26 115" fill="none" stroke="#f5edd8" stroke-width="1.5" stroke-linecap="round"/>
  <!-- Decorative underline -->
  <line x1="8" y1="130" x2="192" y2="130" stroke="#8B0000" stroke-width="0.8" opacity="0.5"/>
</svg>`,
  },
  {
    id: 47,
    group: 'E',
    groupName: 'Wordmark / Text-Forward',
    label: 'Letters Made of Fire',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="e47fire" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#8B0000"/>
      <stop offset="50%" stop-color="#D4380D"/>
      <stop offset="100%" stop-color="#C9A84C"/>
    </linearGradient>
    <filter id="e47blur">
      <feGaussianBlur stdDeviation="1" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <!-- Fire-textured wordmark — base text with glow -->
  <text x="100" y="110" text-anchor="middle" font-family="Georgia, serif" font-size="26" font-weight="bold" fill="#8B0000" filter="url(#e47blur)" letter-spacing="0.5">DevilOfTech</text>
  <text x="100" y="110" text-anchor="middle" font-family="Georgia, serif" font-size="26" font-weight="bold" fill="#D4380D" letter-spacing="0.5">DevilOfTech</text>
  <text x="100" y="110" text-anchor="middle" font-family="Georgia, serif" font-size="26" font-weight="bold" fill="none" stroke="#C9A84C" stroke-width="0.4" opacity="0.6" letter-spacing="0.5">DevilOfTech</text>
  <!-- Flame wisps above letters -->
  <path d="M42 94 C40 86 44 82 42 76 C46 82 44 88 48 92" fill="none" stroke="#C9A84C" stroke-width="1" opacity="0.6" stroke-linecap="round"/>
  <path d="M78 90 C76 82 80 78 78 70 C82 76 80 84 84 88" fill="none" stroke="#D4380D" stroke-width="1" opacity="0.5" stroke-linecap="round"/>
  <path d="M118 90 C116 80 120 76 118 68 C122 74 120 82 124 88" fill="none" stroke="#C9A84C" stroke-width="1" opacity="0.5" stroke-linecap="round"/>
  <path d="M158 92 C156 84 160 80 158 72 C162 78 160 86 164 90" fill="none" stroke="#D4380D" stroke-width="1" opacity="0.4" stroke-linecap="round"/>
  <!-- Ember line base -->
  <line x1="30" y1="118" x2="170" y2="118" stroke="#8B0000" stroke-width="1" opacity="0.5"/>
</svg>`,
  },
  {
    id: 48,
    group: 'E',
    groupName: 'Wordmark / Text-Forward',
    label: 'DT Massive, devil tiny',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Massive DT -->
  <text x="16" y="140" font-family="Georgia, serif" font-size="128" font-weight="bold" fill="#8B0000" opacity="0.15">DT</text>
  <text x="16" y="140" font-family="Georgia, serif" font-size="128" font-weight="bold" fill="none" stroke="#D4380D" stroke-width="0.8">DT</text>
  <!-- Small wordmark below -->
  <text x="100" y="165" text-anchor="middle" font-family="Georgia, serif" font-size="10" fill="#C9A84C" letter-spacing="3">devil of tech</text>
  <!-- Gold line above small text -->
  <line x1="40" y1="155" x2="160" y2="155" stroke="#C9A84C" stroke-width="0.5" opacity="0.5"/>
</svg>`,
  },
  {
    id: 49,
    group: 'E',
    groupName: 'Wordmark / Text-Forward',
    label: 'DEVIL Split with Fire',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="e49fire" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#8B0000"/>
      <stop offset="100%" stop-color="#C9A84C"/>
    </linearGradient>
    <clipPath id="e49top">
      <rect x="0" y="0" width="200" height="95"/>
    </clipPath>
    <clipPath id="e49bot">
      <rect x="0" y="96" width="200" height="104"/>
    </clipPath>
  </defs>
  <!-- Top half of DEVIL -->
  <text x="100" y="112" text-anchor="middle" clip-path="url(#e49top)" font-family="Georgia, serif" font-size="56" font-weight="bold" fill="#f5edd8">DEVIL</text>
  <!-- Bottom half of DEVIL — shifted to show crack -->
  <text x="102" y="112" text-anchor="middle" clip-path="url(#e49bot)" font-family="Georgia, serif" font-size="56" font-weight="bold" fill="#f5edd8">DEVIL</text>
  <!-- Fire in the crack -->
  <rect x="0" y="92" width="200" height="8" fill="#100c08"/>
  <path d="M30 96 C34 90 36 96 38 92 C40 88 42 96 44 92 C46 88 48 96 50 92 C52 88 54 96 56 92 C58 88 60 96 62 92 C64 88 66 96 68 92 C70 88 72 96 74 92 C76 88 78 96 80 92 C82 88 84 96 86 92 C88 88 90 96 92 92 C94 88 96 96 98 92 C100 88 102 96 104 92 C106 88 108 96 110 92 C112 88 114 96 116 92 C118 88 120 96 122 92 C124 88 126 96 128 92 C130 88 132 96 134 92 C136 88 138 96 140 92 C142 88 144 96 146 92 C148 88 150 96 152 92 C154 88 156 96 158 92 C160 88 162 96 164 92 C166 88 168 96 170 100" fill="none" stroke="url(#e49fire)" stroke-width="3"/>
  <!-- Subtitle -->
  <text x="100" y="148" text-anchor="middle" font-family="'Courier New', monospace" font-size="10" fill="#C9A84C" letter-spacing="3">OF TECH</text>
</svg>`,
  },
  {
    id: 50,
    group: 'E',
    groupName: 'Wordmark / Text-Forward',
    label: 'DevilOfTech Flame Trail',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="e50trail" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#8B0000"/>
      <stop offset="60%" stop-color="#D4380D"/>
      <stop offset="100%" stop-color="#C9A84C"/>
    </linearGradient>
  </defs>
  <!-- Wordmark -->
  <text x="100" y="106" text-anchor="middle" font-family="Georgia, serif" font-size="22" font-weight="bold" fill="#f5edd8" letter-spacing="0.5">DevilOfTech</text>
  <!-- Flame trail underline -->
  <path d="M22 116 C40 110 55 118 70 112 C85 106 100 114 115 108 C130 102 145 110 160 106 C168 103 174 110 178 116" fill="none" stroke="url(#e50trail)" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Flame wisp at end -->
  <path d="M178 116 C182 108 186 100 180 94 C184 100 184 108 182 118Z" fill="#C9A84C" opacity="0.7"/>
  <!-- Small ember dots along trail -->
  <circle cx="40" cy="112" r="1.5" fill="#D4380D" opacity="0.6"/>
  <circle cx="80" cy="110" r="1.5" fill="#D4380D" opacity="0.6"/>
  <circle cx="120" cy="108" r="1.5" fill="#C9A84C" opacity="0.7"/>
  <circle cx="155" cy="107" r="1.5" fill="#C9A84C" opacity="0.7"/>
  <!-- Top tagline -->
  <text x="100" y="80" text-anchor="middle" font-family="'Courier New', monospace" font-size="8" fill="rgba(212,56,13,0.5)" letter-spacing="4">TECH · AI · CODING</text>
  <!-- Bottom domain -->
  <text x="100" y="140" text-anchor="middle" font-family="'Courier New', monospace" font-size="8" fill="rgba(201,168,76,0.4)" letter-spacing="2">deviloftech.com</text>
</svg>`,
  },
]

export const LOGOS: Logo[] = [
  ...LOGOS_AE,
  ...LOGOS_F,
  ...LOGOS_G,
  ...LOGOS_H,
  ...LOGOS_I,
  ...LOGOS_J,
]

export const GROUP_NAMES: Record<string, string> = {
  A: 'Devil Face + Wordmark',
  B: 'DT Monogram',
  C: 'Icon Only',
  D: 'Badge / Emblem',
  E: 'Wordmark / Text-Forward',
  F: 'Circuit / PCB',
  G: 'Terminal / Code',
  H: 'AI / Neural Net',
  I: 'Binary / Matrix',
  J: 'Cyber / Neon',
}
