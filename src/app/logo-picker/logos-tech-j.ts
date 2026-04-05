import type { Logo } from './logos'

export const LOGOS_J: Logo[] = [
  {
    id: 91,
    group: 'J',
    groupName: 'Cyber / Neon',
    label: 'Glitch Split Devil',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="j91glow">
      <feGaussianBlur stdDeviation="2.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="j91glowStrong">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <clipPath id="j91top"><rect x="0" y="30" width="200" height="40"/></clipPath>
    <clipPath id="j91mid"><rect x="0" y="70" width="200" height="46"/></clipPath>
    <clipPath id="j91bot"><rect x="0" y="116" width="200" height="44"/></clipPath>
  </defs>
  <!-- Background -->
  <rect width="200" height="200" fill="#0D0A07"/>
  <!-- Scanline artifacts -->
  <rect x="0" y="68" width="200" height="2" fill="#00ffff" opacity="0.12"/>
  <rect x="0" y="114" width="200" height="2" fill="#D4380D" opacity="0.18"/>
  <rect x="10" y="85" width="35" height="1" fill="#00ffff" opacity="0.25"/>
  <rect x="155" y="100" width="28" height="1" fill="#D4380D" opacity="0.3"/>
  <rect x="0" y="52" width="15" height="1" fill="#C9A84C" opacity="0.4"/>
  <rect x="180" y="130" width="20" height="1" fill="#00ffff" opacity="0.2"/>

  <!-- TOP BAND (ember-red tint) — offset +8px right -->
  <g clip-path="url(#j91top)" transform="translate(8,0)" filter="url(#j91glow)">
    <circle cx="100" cy="88" r="50" fill="#3d0a02" stroke="#D4380D" stroke-width="1.5" opacity="0.9"/>
    <path d="M74 44 Q62 20 70 10 Q78 26 80 42Z" fill="#D4380D" opacity="0.85"/>
    <path d="M126 44 Q138 20 130 10 Q122 26 120 42Z" fill="#D4380D" opacity="0.85"/>
    <ellipse cx="84" cy="82" rx="7" ry="8" fill="#D4380D" opacity="0.95"/>
    <ellipse cx="116" cy="82" rx="7" ry="8" fill="#D4380D" opacity="0.95"/>
  </g>

  <!-- MIDDLE BAND (normal gold) — no offset -->
  <g clip-path="url(#j91mid)" filter="url(#j91glow)">
    <circle cx="100" cy="88" r="50" fill="#2a1a08" stroke="#C9A84C" stroke-width="1.5"/>
    <path d="M74 44 Q62 20 70 10 Q78 26 80 42Z" fill="#C9A84C"/>
    <path d="M126 44 Q138 20 130 10 Q122 26 120 42Z" fill="#C9A84C"/>
    <ellipse cx="84" cy="82" rx="7" ry="8" fill="#C9A84C"/>
    <ellipse cx="116" cy="82" rx="7" ry="8" fill="#C9A84C"/>
    <ellipse cx="84" cy="84" rx="3.5" ry="4" fill="#0D0A07"/>
    <ellipse cx="116" cy="84" rx="3.5" ry="4" fill="#0D0A07"/>
    <path d="M78 104 Q100 122 122 104" fill="none" stroke="#f5edd8" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M82 104 Q86 110 90 107 M110 104 Q114 110 118 107" fill="none" stroke="#f5edd8" stroke-width="2" stroke-linecap="round"/>
  </g>

  <!-- BOTTOM BAND (cyan tint) — offset -8px left -->
  <g clip-path="url(#j91bot)" transform="translate(-8,0)" filter="url(#j91glow)">
    <circle cx="100" cy="88" r="50" fill="#011a1a" stroke="#00ffff" stroke-width="1.5" opacity="0.9"/>
    <path d="M78 104 Q100 122 122 104" fill="none" stroke="#00ffff" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>
    <path d="M82 104 Q86 110 90 107 M110 104 Q114 110 118 107" fill="none" stroke="#00ffff" stroke-width="2" stroke-linecap="round" opacity="0.9"/>
  </g>

  <!-- Glitched wordmark — three offset layers -->
  <text x="103" y="157" text-anchor="middle" font-family="'Courier New', monospace" font-size="11" font-weight="bold" fill="#D4380D" opacity="0.7" letter-spacing="2">DEVILOFTECH</text>
  <text x="100" y="157" text-anchor="middle" font-family="'Courier New', monospace" font-size="11" font-weight="bold" fill="#C9A84C" letter-spacing="2">DEVILOFTECH</text>
  <text x="97" y="157" text-anchor="middle" font-family="'Courier New', monospace" font-size="11" font-weight="bold" fill="#00ffff" opacity="0.5" letter-spacing="2">DEVILOFTECH</text>

  <!-- Glitch chunk artifacts on text -->
  <rect x="52" y="149" width="18" height="8" fill="#0D0A07" opacity="0.85"/>
  <text x="61" y="156" text-anchor="middle" font-family="'Courier New', monospace" font-size="11" font-weight="bold" fill="#00ffff" letter-spacing="2">DEV</text>
  <rect x="130" y="149" width="22" height="8" fill="#0D0A07" opacity="0.85"/>
  <text x="141" y="156" text-anchor="middle" font-family="'Courier New', monospace" font-size="11" font-weight="bold" fill="#D4380D" letter-spacing="2">ECH</text>

  <!-- Corner ID -->
  <text x="8" y="193" font-family="'Courier New', monospace" font-size="7" fill="#C9A84C" opacity="0.5">GLT_91</text>
</svg>`,
  },
  {
    id: 92,
    group: 'J',
    groupName: 'Cyber / Neon',
    label: 'Wireframe Devil',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="j92glow">
      <feGaussianBlur stdDeviation="1.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="j92glowFaint">
      <feGaussianBlur stdDeviation="0.8" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <!-- Dark background -->
  <rect width="200" height="200" fill="#100C08"/>

  <!-- Subtle grid -->
  <g stroke="#C9A84C" stroke-width="0.3" opacity="0.08">
    <line x1="0" y1="50" x2="200" y2="50"/>
    <line x1="0" y1="100" x2="200" y2="100"/>
    <line x1="0" y1="150" x2="200" y2="150"/>
    <line x1="50" y1="0" x2="50" y2="200"/>
    <line x1="100" y1="0" x2="100" y2="200"/>
    <line x1="150" y1="0" x2="150" y2="200"/>
  </g>

  <!-- Vanishing point lines from VP at bottom center (100,190) -->
  <g stroke="#C9A84C" stroke-width="0.5" opacity="0.25" filter="url(#j92glowFaint)">
    <line x1="100" y1="190" x2="60" y2="30"/>
    <line x1="100" y1="190" x2="80" y2="30"/>
    <line x1="100" y1="190" x2="100" y2="20"/>
    <line x1="100" y1="190" x2="120" y2="30"/>
    <line x1="100" y1="190" x2="140" y2="30"/>
    <line x1="100" y1="190" x2="50" y2="90"/>
    <line x1="100" y1="190" x2="150" y2="90"/>
  </g>

  <!-- 3D wireframe face oval — front ellipse -->
  <ellipse cx="100" cy="90" rx="52" ry="58" fill="none" stroke="#C9A84C" stroke-width="1.2" filter="url(#j92glow)"/>
  <!-- Back ellipse (perspective) — slightly smaller, shifted up -->
  <ellipse cx="104" cy="82" rx="44" ry="50" fill="none" stroke="#C9A84C" stroke-width="0.6" opacity="0.45" filter="url(#j92glowFaint)"/>

  <!-- Connecting edges front-to-back -->
  <g stroke="#C9A84C" stroke-width="0.6" opacity="0.4" filter="url(#j92glowFaint)">
    <line x1="100" y1="32" x2="104" y2="32"/>
    <line x1="148" y1="90" x2="148" y2="82"/>
    <line x1="52" y1="90" x2="60" y2="82"/>
    <line x1="100" y1="148" x2="104" y2="132"/>
  </g>

  <!-- Cheekbone lines -->
  <path d="M60 100 Q80 95 100 97 Q120 95 140 100" fill="none" stroke="#C9A84C" stroke-width="0.8" opacity="0.6" filter="url(#j92glowFaint)"/>
  <!-- Depth cheekbone back -->
  <path d="M66 92 Q84 88 104 90 Q122 88 142 92" fill="none" stroke="#C9A84C" stroke-width="0.5" opacity="0.3"/>

  <!-- Eye socket left — front -->
  <ellipse cx="83" cy="82" rx="10" ry="11" fill="none" stroke="#C9A84C" stroke-width="1" filter="url(#j92glow)"/>
  <!-- Eye socket left — back (perspective) -->
  <ellipse cx="85" cy="77" rx="8" ry="9" fill="none" stroke="#C9A84C" stroke-width="0.5" opacity="0.35"/>
  <!-- Eye socket right — front -->
  <ellipse cx="117" cy="82" rx="10" ry="11" fill="none" stroke="#C9A84C" stroke-width="1" filter="url(#j92glow)"/>
  <!-- Eye socket right — back -->
  <ellipse cx="119" cy="77" rx="8" ry="9" fill="none" stroke="#C9A84C" stroke-width="0.5" opacity="0.35"/>

  <!-- Nose bridge lines -->
  <line x1="100" y1="68" x2="100" y2="98" stroke="#C9A84C" stroke-width="0.7" opacity="0.5"/>
  <line x1="90" y1="98" x2="110" y2="98" stroke="#C9A84C" stroke-width="0.7" opacity="0.5"/>

  <!-- Grin wireframe -->
  <path d="M78 112 Q100 132 122 112" fill="none" stroke="#C9A84C" stroke-width="1" filter="url(#j92glow)"/>
  <path d="M78 112 Q100 118 122 112" fill="none" stroke="#C9A84C" stroke-width="0.6" opacity="0.4"/>
  <!-- Teeth lines -->
  <line x1="88" y1="112" x2="87" y2="122" stroke="#C9A84C" stroke-width="0.7" opacity="0.5"/>
  <line x1="96" y1="114" x2="95" y2="126" stroke="#C9A84C" stroke-width="0.7" opacity="0.5"/>
  <line x1="104" y1="114" x2="105" y2="126" stroke="#C9A84C" stroke-width="0.7" opacity="0.5"/>
  <line x1="112" y1="112" x2="113" y2="122" stroke="#C9A84C" stroke-width="0.7" opacity="0.5"/>

  <!-- Forehead structure lines -->
  <path d="M72 55 Q88 48 100 46 Q112 48 128 55" fill="none" stroke="#C9A84C" stroke-width="0.7" opacity="0.55" filter="url(#j92glowFaint)"/>

  <!-- Left horn wireframe -->
  <line x1="75" y1="45" x2="63" y2="12" stroke="#C9A84C" stroke-width="1" filter="url(#j92glow)"/>
  <line x1="81" y1="40" x2="70" y2="10" stroke="#C9A84C" stroke-width="0.6" opacity="0.5"/>
  <line x1="63" y1="12" x2="70" y2="10" stroke="#C9A84C" stroke-width="0.8" opacity="0.7" filter="url(#j92glowFaint)"/>
  <line x1="75" y1="45" x2="81" y2="40" stroke="#C9A84C" stroke-width="0.8" opacity="0.6"/>
  <!-- Right horn wireframe -->
  <line x1="125" y1="45" x2="137" y2="12" stroke="#C9A84C" stroke-width="1" filter="url(#j92glow)"/>
  <line x1="119" y1="40" x2="130" y2="10" stroke="#C9A84C" stroke-width="0.6" opacity="0.5"/>
  <line x1="137" y1="12" x2="130" y2="10" stroke="#C9A84C" stroke-width="0.8" opacity="0.7" filter="url(#j92glowFaint)"/>
  <line x1="125" y1="45" x2="119" y2="40" stroke="#C9A84C" stroke-width="0.8" opacity="0.6"/>
  <!-- Horn cross-sections -->
  <line x1="67" y1="28" x2="73" y2="27" stroke="#C9A84C" stroke-width="0.5" opacity="0.45"/>
  <line x1="127" y1="28" x2="133" y2="27" stroke="#C9A84C" stroke-width="0.5" opacity="0.45"/>

  <!-- Wordmark -->
  <text x="100" y="168" text-anchor="middle" font-family="'Courier New', monospace" font-size="9" fill="#C9A84C" letter-spacing="2.5" filter="url(#j92glowFaint)">DEVILOFTECH</text>
  <line x1="30" y1="172" x2="170" y2="172" stroke="#C9A84C" stroke-width="0.4" opacity="0.4"/>

  <!-- Corner markers -->
  <text x="8" y="12" font-family="'Courier New', monospace" font-size="7" fill="#C9A84C" opacity="0.4">WF</text>
  <text x="178" y="12" font-family="'Courier New', monospace" font-size="7" fill="#C9A84C" opacity="0.4">92</text>
</svg>`,
  },
  {
    id: 93,
    group: 'J',
    groupName: 'Cyber / Neon',
    label: 'Neon Tube Devil',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Gold neon glow -->
    <filter id="j93goldNeon" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="4" result="blur1"/>
      <feGaussianBlur stdDeviation="8" result="blur2"/>
      <feGaussianBlur stdDeviation="14" result="blur3"/>
      <feMerge>
        <feMergeNode in="blur3"/>
        <feMergeNode in="blur2"/>
        <feMergeNode in="blur1"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <!-- Ember neon glow -->
    <filter id="j93emberNeon" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="5" result="blur1"/>
      <feGaussianBlur stdDeviation="10" result="blur2"/>
      <feGaussianBlur stdDeviation="16" result="blur3"/>
      <feMerge>
        <feMergeNode in="blur3"/>
        <feMergeNode in="blur2"/>
        <feMergeNode in="blur1"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <!-- Text glow -->
    <filter id="j93textGlow">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <!-- Background — deep dark -->
  <rect width="200" height="200" fill="#050302"/>

  <!-- Outer bloom rings (background light bleeding) -->
  <circle cx="100" cy="88" r="68" fill="none" stroke="#D4380D" stroke-width="20" opacity="0.05"/>
  <circle cx="100" cy="88" r="68" fill="none" stroke="#D4380D" stroke-width="12" opacity="0.07"/>

  <!-- Main face circle — ember neon tube -->
  <circle cx="100" cy="88" r="52" fill="none" stroke="#D4380D" stroke-width="3.5" filter="url(#j93emberNeon)"/>
  <!-- Inner bright core of tube -->
  <circle cx="100" cy="88" r="52" fill="none" stroke="#f5edd8" stroke-width="1" opacity="0.85"/>

  <!-- Left horn — gold neon -->
  <path d="M75 45 Q64 22 71 10 Q78 27 80 43" fill="none" stroke="#C9A84C" stroke-width="3" filter="url(#j93goldNeon)" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M75 45 Q64 22 71 10 Q78 27 80 43" fill="none" stroke="#fff8e0" stroke-width="1" opacity="0.8" stroke-linecap="round"/>

  <!-- Right horn — gold neon -->
  <path d="M125 45 Q136 22 129 10 Q122 27 120 43" fill="none" stroke="#C9A84C" stroke-width="3" filter="url(#j93goldNeon)" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M125 45 Q136 22 129 10 Q122 27 120 43" fill="none" stroke="#fff8e0" stroke-width="1" opacity="0.8" stroke-linecap="round"/>

  <!-- Left eye — gold neon almond -->
  <path d="M76 82 Q84 74 92 82 Q84 90 76 82Z" fill="none" stroke="#C9A84C" stroke-width="2.5" filter="url(#j93goldNeon)" stroke-linecap="round"/>
  <path d="M76 82 Q84 74 92 82 Q84 90 76 82Z" fill="none" stroke="#fff8e0" stroke-width="0.8" opacity="0.9"/>

  <!-- Right eye — gold neon almond -->
  <path d="M108 82 Q116 74 124 82 Q116 90 108 82Z" fill="none" stroke="#C9A84C" stroke-width="2.5" filter="url(#j93goldNeon)" stroke-linecap="round"/>
  <path d="M108 82 Q116 74 124 82 Q116 90 108 82Z" fill="none" stroke="#fff8e0" stroke-width="0.8" opacity="0.9"/>

  <!-- Grin arc — ember neon -->
  <path d="M78 108 Q100 128 122 108" fill="none" stroke="#D4380D" stroke-width="3" filter="url(#j93emberNeon)" stroke-linecap="round"/>
  <path d="M78 108 Q100 128 122 108" fill="none" stroke="#f5edd8" stroke-width="1" opacity="0.85" stroke-linecap="round"/>

  <!-- Teeth nubs — ember neon -->
  <path d="M84 108 L82 118 M92 110 L91 121 M100 111 L100 122 M108 110 L109 121 M116 108 L118 118" fill="none" stroke="#D4380D" stroke-width="2" filter="url(#j93emberNeon)" stroke-linecap="round"/>

  <!-- Nose bridge — gold neon flicker -->
  <line x1="100" y1="72" x2="100" y2="96" stroke="#C9A84C" stroke-width="1.5" filter="url(#j93goldNeon)" stroke-linecap="round" opacity="0.7"/>

  <!-- Wordmark with neon glow -->
  <text x="100" y="162" text-anchor="middle" font-family="'Courier New', monospace" font-size="10" font-weight="bold" fill="#C9A84C" letter-spacing="2" filter="url(#j93textGlow)">DEVILOFTECH</text>
  <text x="100" y="162" text-anchor="middle" font-family="'Courier New', monospace" font-size="10" font-weight="bold" fill="#fff8e0" letter-spacing="2" opacity="0.6">DEVILOFTECH</text>
</svg>`,
  },
  {
    id: 94,
    group: 'J',
    groupName: 'Cyber / Neon',
    label: 'HUD Devil',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="j94glow">
      <feGaussianBlur stdDeviation="2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="j94softGlow">
      <feGaussianBlur stdDeviation="1" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <!-- Scanline pattern -->
    <pattern id="j94scan" x="0" y="0" width="200" height="4" patternUnits="userSpaceOnUse">
      <rect x="0" y="0" width="200" height="2" fill="transparent"/>
      <rect x="0" y="2" width="200" height="2" fill="#000" opacity="0.18"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="200" height="200" fill="#080602"/>

  <!-- Scanlines overlay -->
  <rect width="200" height="200" fill="url(#j94scan)"/>

  <!-- Devil face -->
  <circle cx="100" cy="88" r="48" fill="#1a0d04" stroke="#D4380D" stroke-width="1.5" filter="url(#j94softGlow)"/>
  <!-- Left horn -->
  <path d="M74 46 Q63 22 70 10 Q78 26 80 42Z" fill="#C9A84C" filter="url(#j94softGlow)"/>
  <!-- Right horn -->
  <path d="M126 46 Q137 22 130 10 Q122 26 120 42Z" fill="#C9A84C" filter="url(#j94softGlow)"/>
  <!-- Eyes -->
  <ellipse cx="84" cy="82" rx="7" ry="8" fill="#C9A84C" filter="url(#j94glow)"/>
  <ellipse cx="116" cy="82" rx="7" ry="8" fill="#C9A84C" filter="url(#j94glow)"/>
  <ellipse cx="84" cy="83" rx="3.5" ry="4" fill="#0D0A07"/>
  <ellipse cx="116" cy="83" rx="3.5" ry="4" fill="#0D0A07"/>
  <!-- Grin -->
  <path d="M78 106 Q100 124 122 106" fill="none" stroke="#f5edd8" stroke-width="2" stroke-linecap="round"/>
  <path d="M82 106 Q86 112 90 109 M110 106 Q114 112 118 109" fill="none" stroke="#f5edd8" stroke-width="1.5" stroke-linecap="round"/>

  <!-- Targeting reticle circles (ember) -->
  <circle cx="100" cy="88" r="60" fill="none" stroke="#D4380D" stroke-width="0.8" stroke-dasharray="4 8" filter="url(#j94softGlow)" opacity="0.7"/>
  <circle cx="100" cy="88" r="70" fill="none" stroke="#D4380D" stroke-width="0.5" stroke-dasharray="2 10" opacity="0.4"/>

  <!-- Corner bracket marks — top-left ⌐ -->
  <path d="M16 26 L16 16 L26 16" fill="none" stroke="#C9A84C" stroke-width="1.5" filter="url(#j94softGlow)"/>
  <!-- top-right ¬ -->
  <path d="M184 26 L184 16 L174 16" fill="none" stroke="#C9A84C" stroke-width="1.5" filter="url(#j94softGlow)"/>
  <!-- bottom-left -->
  <path d="M16 174 L16 184 L26 184" fill="none" stroke="#C9A84C" stroke-width="1.5" filter="url(#j94softGlow)"/>
  <!-- bottom-right -->
  <path d="M184 174 L184 184 L174 184" fill="none" stroke="#C9A84C" stroke-width="1.5" filter="url(#j94softGlow)"/>

  <!-- Crosshair lines from face edge to corners -->
  <line x1="40" y1="88" x2="16" y2="88" stroke="#D4380D" stroke-width="0.6" stroke-dasharray="3 4" opacity="0.6"/>
  <line x1="160" y1="88" x2="184" y2="88" stroke="#D4380D" stroke-width="0.6" stroke-dasharray="3 4" opacity="0.6"/>
  <line x1="100" y1="30" x2="100" y2="16" stroke="#D4380D" stroke-width="0.6" stroke-dasharray="3 4" opacity="0.6"/>
  <line x1="100" y1="146" x2="100" y2="153" stroke="#D4380D" stroke-width="0.6" stroke-dasharray="3 4" opacity="0.6"/>

  <!-- THREAT LVL above -->
  <text x="100" y="22" text-anchor="middle" font-family="'Courier New', monospace" font-size="7.5" fill="#D4380D" letter-spacing="1" filter="url(#j94softGlow)">[THREAT LVL: 666]</text>

  <!-- LOCKED ON below face -->
  <text x="100" y="158" text-anchor="middle" font-family="'Courier New', monospace" font-size="7.5" fill="#C9A84C" letter-spacing="1" filter="url(#j94softGlow)">[LOCKED ON: TECH]</text>

  <!-- Corner coordinates -->
  <text x="8" y="194" font-family="'Courier New', monospace" font-size="5.5" fill="#C9A84C" opacity="0.5">37.5N 122.4W</text>
  <text x="140" y="194" font-family="'Courier New', monospace" font-size="5.5" fill="#C9A84C" opacity="0.5">ALT: 0666m</text>
  <text x="8" y="10" font-family="'Courier New', monospace" font-size="5.5" fill="#C9A84C" opacity="0.5">X:1024 Y:0512</text>
  <text x="148" y="10" font-family="'Courier New', monospace" font-size="5.5" fill="#C9A84C" opacity="0.5">SYS:ONLINE</text>

  <!-- Status bar bottom -->
  <rect x="0" y="168" width="200" height="1" fill="#D4380D" opacity="0.3"/>
  <rect x="0" y="30" width="200" height="1" fill="#D4380D" opacity="0.3"/>
</svg>`,
  },
  {
    id: 95,
    group: 'J',
    groupName: 'Cyber / Neon',
    label: 'Devil.exe',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="j95glow">
      <feGaussianBlur stdDeviation="2.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="j95softGlow">
      <feGaussianBlur stdDeviation="1.2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <linearGradient id="j95fileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e1208"/>
      <stop offset="100%" stop-color="#0f0a05"/>
    </linearGradient>
    <linearGradient id="j95cornerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2a1a08"/>
      <stop offset="100%" stop-color="#1a1008"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="200" height="200" fill="#0D0A07"/>

  <!-- File icon body — rounded rect with folded corner -->
  <path d="M46 24 L140 24 L140 24 L162 46 L162 176 Q162 182 156 182 L44 182 Q38 182 38 176 L38 30 Q38 24 44 24Z" fill="url(#j95fileGrad)" stroke="#D4380D" stroke-width="1.5" filter="url(#j95softGlow)"/>

  <!-- Folded corner triangle -->
  <path d="M140 24 L140 46 L162 46 Z" fill="url(#j95cornerGrad)" stroke="#D4380D" stroke-width="1" opacity="0.8"/>
  <!-- Fold crease line -->
  <line x1="140" y1="24" x2="162" y2="46" stroke="#D4380D" stroke-width="0.8" opacity="0.5"/>

  <!-- Devil skull inside file — simplified, ember -->
  <!-- Skull head circle -->
  <circle cx="100" cy="94" r="32" fill="#2a0c04" stroke="#D4380D" stroke-width="1.5" filter="url(#j95softGlow)"/>
  <!-- Mini horns -->
  <path d="M82 68 Q76 54 80 46 Q85 56 86 66Z" fill="#D4380D" filter="url(#j95glow)"/>
  <path d="M118 68 Q124 54 120 46 Q115 56 114 66Z" fill="#D4380D" filter="url(#j95glow)"/>
  <!-- Eyes -->
  <ellipse cx="88" cy="88" rx="6" ry="7" fill="#C9A84C" filter="url(#j95glow)"/>
  <ellipse cx="112" cy="88" rx="6" ry="7" fill="#C9A84C" filter="url(#j95glow)"/>
  <ellipse cx="88" cy="89" rx="3" ry="3.5" fill="#0D0A07"/>
  <ellipse cx="112" cy="89" rx="3" ry="3.5" fill="#0D0A07"/>
  <!-- Grin -->
  <path d="M82 108 Q100 122 118 108" fill="none" stroke="#f5edd8" stroke-width="2" stroke-linecap="round"/>
  <path d="M86 108 Q89 114 92 111 M108 108 Q111 114 114 111" fill="none" stroke="#f5edd8" stroke-width="1.5" stroke-linecap="round"/>

  <!-- .exe label bold monospace gold -->
  <text x="100" y="148" text-anchor="middle" font-family="'Courier New', monospace" font-size="18" font-weight="bold" fill="#C9A84C" letter-spacing="1" filter="url(#j95glow)">.exe</text>

  <!-- "Run as Admin" shield icon — bottom right of file -->
  <!-- Shield outline -->
  <path d="M149 153 L149 153 Q149 148 154 148 L158 148 L162 148 Q167 148 167 153 L167 160 Q167 167 158 170 Q149 167 149 160 Z" fill="#1a1208" stroke="#C9A84C" stroke-width="1" filter="url(#j95softGlow)"/>
  <!-- Shield checkmark / UAC icon -->
  <text x="158" y="163" text-anchor="middle" font-family="Arial" font-size="9" fill="#C9A84C" font-weight="bold">✓</text>

  <!-- File name at very bottom of icon -->
  <text x="100" y="175" text-anchor="middle" font-family="'Courier New', monospace" font-size="7" fill="#f5edd8" opacity="0.6" letter-spacing="0.5">devil_of_tech.exe</text>

  <!-- Outer label below icon -->
  <text x="100" y="194" text-anchor="middle" font-family="'Courier New', monospace" font-size="8" fill="#C9A84C" letter-spacing="1.5" filter="url(#j95softGlow)">DEVILOFTECH</text>
</svg>`,
  },
  {
    id: 96,
    group: 'J',
    groupName: 'Cyber / Neon',
    label: 'Scanline CRT',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Scanline pattern -->
    <pattern id="j96scanlines" x="0" y="0" width="200" height="4" patternUnits="userSpaceOnUse">
      <rect x="0" y="0" width="200" height="2" fill="transparent"/>
      <rect x="0" y="2" width="200" height="2" fill="#000" opacity="0.35"/>
    </pattern>
    <!-- Phosphor glow -->
    <filter id="j96phosphor" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feColorMatrix type="matrix" values="1.2 0.3 0 0 0  0.4 1.0 0 0 0  0 0 0.2 0 0  0 0 0 1 0" in="blur" result="colored"/>
      <feMerge><feMergeNode in="colored"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <!-- Subtle glow -->
    <filter id="j96glow">
      <feGaussianBlur stdDeviation="2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <!-- Radial vignette -->
    <radialGradient id="j96vignette" cx="50%" cy="50%" r="55%">
      <stop offset="55%" stop-color="transparent"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0.75"/>
    </radialGradient>
    <!-- CRT screen bg -->
    <radialGradient id="j96screenBg" cx="50%" cy="45%" r="52%">
      <stop offset="0%" stop-color="#261608"/>
      <stop offset="100%" stop-color="#0a0602"/>
    </radialGradient>
  </defs>

  <!-- CRT outer bezel -->
  <rect x="4" y="4" width="192" height="192" rx="18" ry="18" fill="#111" stroke="#333" stroke-width="2"/>
  <!-- CRT screen area with warm bg -->
  <rect x="14" y="14" width="172" height="172" rx="12" ry="12" fill="url(#j96screenBg)"/>

  <!-- Devil face — drawn normally -->
  <g filter="url(#j96phosphor)">
    <!-- Face circle -->
    <circle cx="100" cy="90" r="50" fill="#4a1a06" stroke="#D4380D" stroke-width="2"/>
    <!-- Horns -->
    <path d="M74 46 Q62 22 70 10 Q78 26 80 42Z" fill="#C9A84C"/>
    <path d="M126 46 Q138 22 130 10 Q122 26 120 42Z" fill="#C9A84C"/>
    <!-- Eyes -->
    <ellipse cx="84" cy="84" rx="8" ry="9" fill="#f5c842"/>
    <ellipse cx="116" cy="84" rx="8" ry="9" fill="#f5c842"/>
    <ellipse cx="84" cy="85" rx="4" ry="5" fill="#1a0000"/>
    <ellipse cx="116" cy="85" rx="4" ry="5" fill="#1a0000"/>
    <!-- Grin -->
    <path d="M78 108 Q100 126 122 108" fill="none" stroke="#f5edd8" stroke-width="3" stroke-linecap="round"/>
    <path d="M82 108 Q86 114 90 111 M110 108 Q114 114 118 111" fill="none" stroke="#f5edd8" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Nostril hint -->
    <ellipse cx="96" cy="100" rx="2.5" ry="2" fill="#2a0800" opacity="0.7"/>
    <ellipse cx="104" cy="100" rx="2.5" ry="2" fill="#2a0800" opacity="0.7"/>
    <!-- Wordmark -->
    <text x="100" y="158" text-anchor="middle" font-family="'Courier New', monospace" font-size="10" font-weight="bold" fill="#C9A84C" letter-spacing="2">DEVILOFTECH</text>
  </g>

  <!-- Scanlines overlay -->
  <rect x="14" y="14" width="172" height="172" rx="12" ry="12" fill="url(#j96scanlines)"/>

  <!-- Vignette -->
  <rect x="14" y="14" width="172" height="172" rx="12" ry="12" fill="url(#j96vignette)"/>

  <!-- Phosphor bloom streaks on bright spots -->
  <ellipse cx="84" cy="84" rx="14" ry="16" fill="#f5c842" opacity="0.06" filter="url(#j96glow)"/>
  <ellipse cx="116" cy="84" rx="14" ry="16" fill="#f5c842" opacity="0.06" filter="url(#j96glow)"/>

  <!-- CRT power indicator dot -->
  <circle cx="18" cy="18" r="2.5" fill="#D4380D" opacity="0.8"/>
</svg>`,
  },
  {
    id: 97,
    group: 'J',
    groupName: 'Cyber / Neon',
    label: 'Laser Eye Devil',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Laser beam glow -->
    <filter id="j97laserGlow" x="-80%" y="-200%" width="260%" height="500%">
      <feGaussianBlur stdDeviation="3.5" result="blur1"/>
      <feGaussianBlur stdDeviation="7" result="blur2"/>
      <feMerge>
        <feMergeNode in="blur2"/>
        <feMergeNode in="blur1"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <!-- Face glow -->
    <filter id="j97faceGlow">
      <feGaussianBlur stdDeviation="2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <!-- Lens flare filter -->
    <filter id="j97flare">
      <feGaussianBlur stdDeviation="5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <radialGradient id="j97faceBg" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#3d0e04"/>
      <stop offset="100%" stop-color="#1a0603"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="200" height="200" fill="#080504"/>

  <!-- LEFT LASER BEAM — from left eye outward -->
  <!-- Beam going left (out of frame) -->
  <rect x="0" y="82" width="76" height="3" fill="#D4380D" opacity="0.9" filter="url(#j97laserGlow)"/>
  <rect x="0" y="83" width="76" height="1" fill="#f5edd8" opacity="0.95"/>
  <!-- Tapering outer glow -->
  <rect x="0" y="79" width="76" height="9" fill="#D4380D" opacity="0.15"/>

  <!-- RIGHT LASER BEAM — from right eye outward -->
  <rect x="124" y="82" width="76" height="3" fill="#D4380D" opacity="0.9" filter="url(#j97laserGlow)"/>
  <rect x="124" y="83" width="76" height="1" fill="#f5edd8" opacity="0.95"/>
  <rect x="124" y="79" width="76" height="9" fill="#D4380D" opacity="0.15"/>

  <!-- Devil face -->
  <circle cx="100" cy="88" r="48" fill="url(#j97faceBg)" stroke="#D4380D" stroke-width="2" filter="url(#j97faceGlow)"/>
  <!-- Horns -->
  <path d="M74 46 Q62 22 70 10 Q78 26 80 42Z" fill="#C9A84C" filter="url(#j97faceGlow)"/>
  <path d="M126 46 Q138 22 130 10 Q122 26 120 42Z" fill="#C9A84C" filter="url(#j97faceGlow)"/>

  <!-- Left eye — laser source — bright core -->
  <ellipse cx="84" cy="84" rx="8" ry="9" fill="#D4380D" filter="url(#j97faceGlow)"/>
  <!-- Lens flare on left eye -->
  <circle cx="84" cy="84" r="12" fill="#D4380D" opacity="0.18" filter="url(#j97flare)"/>
  <circle cx="84" cy="84" r="4" fill="#fff" opacity="0.9"/>
  <!-- Flare ring -->
  <circle cx="84" cy="84" r="9" fill="none" stroke="#D4380D" stroke-width="0.8" opacity="0.5"/>
  <circle cx="84" cy="84" r="14" fill="none" stroke="#D4380D" stroke-width="0.5" opacity="0.25"/>

  <!-- Right eye — laser source -->
  <ellipse cx="116" cy="84" rx="8" ry="9" fill="#D4380D" filter="url(#j97faceGlow)"/>
  <circle cx="116" cy="84" r="12" fill="#D4380D" opacity="0.18" filter="url(#j97flare)"/>
  <circle cx="116" cy="84" r="4" fill="#fff" opacity="0.9"/>
  <circle cx="116" cy="84" r="9" fill="none" stroke="#D4380D" stroke-width="0.8" opacity="0.5"/>
  <circle cx="116" cy="84" r="14" fill="none" stroke="#D4380D" stroke-width="0.5" opacity="0.25"/>

  <!-- Grin -->
  <path d="M78 108 Q100 126 122 108" fill="none" stroke="#f5edd8" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M82 108 Q86 114 90 111 M110 108 Q114 114 118 111" fill="none" stroke="#f5edd8" stroke-width="2" stroke-linecap="round"/>

  <!-- HUD targeting text -->
  <text x="100" y="155" text-anchor="middle" font-family="'Courier New', monospace" font-size="8" fill="#D4380D" letter-spacing="1" filter="url(#j97faceGlow)">[TARGETING: TECH]</text>
  <text x="100" y="167" text-anchor="middle" font-family="'Courier New', monospace" font-size="7" fill="#C9A84C" letter-spacing="0.5" opacity="0.7">OUTPUT: 9000 TW</text>

  <!-- Energy level bar -->
  <rect x="40" y="172" width="120" height="3" fill="#1a0a04" stroke="#D4380D" stroke-width="0.5"/>
  <rect x="40" y="172" width="108" height="3" fill="#D4380D" opacity="0.85" filter="url(#j97faceGlow)"/>

  <!-- Wordmark -->
  <text x="100" y="188" text-anchor="middle" font-family="'Courier New', monospace" font-size="8" fill="#C9A84C" letter-spacing="2">DEVILOFTECH</text>
</svg>`,
  },
  {
    id: 98,
    group: 'J',
    groupName: 'Cyber / Neon',
    label: 'Cyber Half Devil',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="j98glow">
      <feGaussianBlur stdDeviation="2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="j98circuitGlow">
      <feGaussianBlur stdDeviation="1.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <clipPath id="j98leftClip"><rect x="0" y="0" width="100" height="200"/></clipPath>
    <clipPath id="j98rightClip"><rect x="100" y="0" width="100" height="200"/></clipPath>
    <radialGradient id="j98leftBg" cx="40%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#3d0e04"/>
      <stop offset="100%" stop-color="#1a0603"/>
    </radialGradient>
    <radialGradient id="j98rightBg" cx="60%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#081a14"/>
      <stop offset="100%" stop-color="#020c09"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="200" height="200" fill="#0D0A07"/>

  <!-- LEFT HALF — organic devil -->
  <g clip-path="url(#j98leftClip)">
    <!-- Face fill -->
    <circle cx="100" cy="88" r="52" fill="url(#j98leftBg)" stroke="#D4380D" stroke-width="2" filter="url(#j98glow)"/>
    <!-- Left horn -->
    <path d="M74 46 Q62 22 70 10 Q78 26 80 42Z" fill="#C9A84C" filter="url(#j98glow)"/>
    <!-- Left eye -->
    <ellipse cx="84" cy="84" rx="8" ry="9" fill="#C9A84C" filter="url(#j98glow)"/>
    <ellipse cx="84" cy="85" rx="4" ry="4.5" fill="#0D0A07"/>
    <!-- Left grin -->
    <path d="M78 108 Q94 124 100 118" fill="none" stroke="#f5edd8" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M82 108 Q86 114 90 111" fill="none" stroke="#f5edd8" stroke-width="2" stroke-linecap="round"/>
    <!-- Cheek texture mark -->
    <path d="M60 95 Q68 92 76 95" fill="none" stroke="#D4380D" stroke-width="1" opacity="0.5"/>
  </g>

  <!-- RIGHT HALF — mechanical/circuit -->
  <g clip-path="url(#j98rightClip)">
    <!-- Face fill — mechanical dark -->
    <circle cx="100" cy="88" r="52" fill="url(#j98rightBg)" stroke="#C9A84C" stroke-width="1.5" filter="url(#j98circuitGlow)"/>
    <!-- Right horn — circuit/angular version -->
    <path d="M126 46 L134 28 L128 12 L132 10 L138 28 L130 46Z" fill="none" stroke="#C9A84C" stroke-width="1.5" filter="url(#j98circuitGlow)"/>
    <!-- Horn circuit traces -->
    <line x1="132" y1="22" x2="136" y2="22" stroke="#C9A84C" stroke-width="0.8" opacity="0.6"/>
    <line x1="131" y1="30" x2="135" y2="30" stroke="#C9A84C" stroke-width="0.8" opacity="0.6"/>
    <circle cx="136" cy="22" r="1.5" fill="#C9A84C" opacity="0.8"/>
    <circle cx="135" cy="30" r="1.5" fill="#C9A84C" opacity="0.8"/>

    <!-- Right eye — mechanical lens rings -->
    <circle cx="116" cy="84" r="10" fill="#0a1a12" stroke="#C9A84C" stroke-width="1.5" filter="url(#j98circuitGlow)"/>
    <circle cx="116" cy="84" r="6" fill="none" stroke="#C9A84C" stroke-width="0.8" opacity="0.7"/>
    <circle cx="116" cy="84" r="2.5" fill="#C9A84C"/>
    <!-- Lens crosshair -->
    <line x1="106" y1="84" x2="111" y2="84" stroke="#C9A84C" stroke-width="0.6" opacity="0.6"/>
    <line x1="121" y1="84" x2="126" y2="84" stroke="#C9A84C" stroke-width="0.6" opacity="0.6"/>
    <line x1="116" y1="74" x2="116" y2="79" stroke="#C9A84C" stroke-width="0.6" opacity="0.6"/>
    <line x1="116" y1="89" x2="116" y2="94" stroke="#C9A84C" stroke-width="0.6" opacity="0.6"/>

    <!-- Right grin — mechanical teeth lines -->
    <path d="M100 118 Q106 124 122 108" fill="none" stroke="#C9A84C" stroke-width="2" stroke-linecap="square" filter="url(#j98circuitGlow)"/>
    <line x1="107" y1="117" x2="107" y2="124" stroke="#C9A84C" stroke-width="1.2" opacity="0.6"/>
    <line x1="114" y1="114" x2="114" y2="120" stroke="#C9A84C" stroke-width="1.2" opacity="0.6"/>
    <line x1="120" y1="110" x2="120" y2="115" stroke="#C9A84C" stroke-width="1.2" opacity="0.6"/>

    <!-- Circuit traces on right face -->
    <path d="M110 60 L118 60 L118 68 L130 68" fill="none" stroke="#C9A84C" stroke-width="0.8" opacity="0.5" filter="url(#j98circuitGlow)"/>
    <circle cx="118" cy="60" r="1.5" fill="#C9A84C" opacity="0.6"/>
    <circle cx="130" cy="68" r="1.5" fill="#C9A84C" opacity="0.6"/>
    <path d="M138 90 L145 90 L145 100 L140 100" fill="none" stroke="#C9A84C" stroke-width="0.8" opacity="0.45"/>
    <circle cx="140" cy="100" r="1.5" fill="#C9A84C" opacity="0.5"/>
    <!-- Component symbol — small resistor -->
    <rect x="122" y="98" width="10" height="5" fill="none" stroke="#C9A84C" stroke-width="0.8" opacity="0.5"/>
    <line x1="118" y1="100.5" x2="122" y2="100.5" stroke="#C9A84C" stroke-width="0.7" opacity="0.5"/>
    <line x1="132" y1="100.5" x2="136" y2="100.5" stroke="#C9A84C" stroke-width="0.7" opacity="0.5"/>
  </g>

  <!-- SEAM LINE — gold vertical center -->
  <line x1="100" y1="10" x2="100" y2="145" stroke="#C9A84C" stroke-width="2" filter="url(#j98glow)"/>
  <!-- Seam rivets -->
  <circle cx="100" cy="38" r="2.5" fill="#C9A84C" filter="url(#j98glow)"/>
  <circle cx="100" cy="88" r="2.5" fill="#C9A84C" filter="url(#j98glow)"/>
  <circle cx="100" cy="135" r="2.5" fill="#C9A84C" filter="url(#j98glow)"/>

  <!-- Wordmark -->
  <text x="100" y="164" text-anchor="middle" font-family="'Courier New', monospace" font-size="9" fill="#C9A84C" letter-spacing="2" filter="url(#j98circuitGlow)">DEVILOFTECH</text>
  <!-- Half label -->
  <text x="50" y="180" text-anchor="middle" font-family="'Courier New', monospace" font-size="6.5" fill="#D4380D" opacity="0.6">ORGANIC</text>
  <text x="150" y="180" text-anchor="middle" font-family="'Courier New', monospace" font-size="6.5" fill="#C9A84C" opacity="0.6">MACHINE</text>
</svg>`,
  },
  {
    id: 99,
    group: 'J',
    groupName: 'Cyber / Neon',
    label: 'Pixel Sprite Devil',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="j99glow">
      <feGaussianBlur stdDeviation="1.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="200" height="200" fill="#0D0A07"/>

  <!-- Pixel grid helper — sprite is 16x16 logical pixels, each = 7px rendered, centered -->
  <!-- Sprite origin: x=28, y=14. Each pixel cell = 7x7 px -->

  <!-- HORNS ROW — row 0, cols 3-4 (left) and 8-9 (right) -->
  <!-- Left horn tip -->
  <rect x="49" y="14" width="7" height="7" fill="#C9A84C" filter="url(#j99glow)"/>
  <!-- Left horn base -->
  <rect x="42" y="21" width="7" height="7" fill="#C9A84C" filter="url(#j99glow)"/>
  <rect x="49" y="21" width="7" height="7" fill="#C9A84C" filter="url(#j99glow)"/>
  <!-- Right horn tip -->
  <rect x="140" y="14" width="7" height="7" fill="#C9A84C" filter="url(#j99glow)"/>
  <!-- Right horn base -->
  <rect x="140" y="21" width="7" height="7" fill="#C9A84C" filter="url(#j99glow)"/>
  <rect x="147" y="21" width="7" height="7" fill="#C9A84C" filter="url(#j99glow)"/>

  <!-- HEAD rows 2–3 (y=28–41) — full face row -->
  <rect x="49" y="28" width="98" height="7" fill="#D4380D"/>
  <rect x="42" y="35" width="112" height="7" fill="#D4380D"/>

  <!-- FACE ROWS 4–7 (y=42–69) -->
  <rect x="35" y="42" width="126" height="7" fill="#D4380D"/>
  <rect x="35" y="49" width="126" height="7" fill="#D4380D"/>
  <rect x="35" y="56" width="126" height="7" fill="#D4380D"/>
  <rect x="35" y="63" width="126" height="7" fill="#D4380D"/>

  <!-- EYES ROW (y=70) — gold squares on face -->
  <rect x="35" y="70" width="126" height="7" fill="#D4380D"/>
  <!-- Left eye whites -->
  <rect x="56" y="70" width="14" height="7" fill="#C9A84C" filter="url(#j99glow)"/>
  <rect x="70" y="70" width="7" height="7" fill="#C9A84C" filter="url(#j99glow)"/>
  <!-- Right eye whites -->
  <rect x="119" y="70" width="14" height="7" fill="#C9A84C" filter="url(#j99glow)"/>
  <rect x="133" y="70" width="7" height="7" fill="#C9A84C" filter="url(#j99glow)"/>

  <!-- EYE PUPILS ROW (y=77) -->
  <rect x="35" y="77" width="126" height="7" fill="#D4380D"/>
  <!-- Left pupil dark -->
  <rect x="63" y="77" width="7" height="7" fill="#0D0A07"/>
  <!-- Right pupil dark -->
  <rect x="126" y="77" width="7" height="7" fill="#0D0A07"/>
  <!-- Eye glow dots -->
  <rect x="56" y="77" width="7" height="7" fill="#C9A84C" opacity="0.6"/>
  <rect x="133" y="77" width="7" height="7" fill="#C9A84C" opacity="0.6"/>

  <!-- NOSE/CHEEK ROW (y=84) -->
  <rect x="35" y="84" width="126" height="7" fill="#D4380D"/>
  <!-- Nose pixels -->
  <rect x="91" y="84" width="7" height="7" fill="#8B1a04"/>
  <rect x="98" y="84" width="7" height="7" fill="#8B1a04"/>

  <!-- UPPER LIP ROW (y=91) -->
  <rect x="35" y="91" width="126" height="7" fill="#D4380D"/>

  <!-- MOUTH ROW (y=98) — teeth -->
  <rect x="35" y="98" width="126" height="7" fill="#D4380D"/>
  <!-- Teeth pixels — parchment white -->
  <rect x="56" y="98" width="7" height="7" fill="#f5edd8"/>
  <rect x="63" y="98" width="7" height="7" fill="#f5edd8"/>
  <rect x="77" y="98" width="7" height="7" fill="#f5edd8"/>
  <rect x="84" y="98" width="7" height="7" fill="#f5edd8"/>
  <rect x="98" y="98" width="7" height="7" fill="#f5edd8"/>
  <rect x="112" y="98" width="7" height="7" fill="#f5edd8"/>
  <rect x="119" y="98" width="7" height="7" fill="#f5edd8"/>
  <rect x="126" y="98" width="7" height="7" fill="#f5edd8"/>
  <!-- Teeth gaps (dark) -->
  <rect x="70" y="98" width="7" height="7" fill="#1a0603"/>
  <rect x="91" y="98" width="7" height="7" fill="#1a0603"/>
  <rect x="105" y="98" width="7" height="7" fill="#1a0603"/>

  <!-- LOWER FACE ROWS (y=105–111) -->
  <rect x="42" y="105" width="112" height="7" fill="#D4380D"/>
  <rect x="49" y="112" width="98" height="7" fill="#D4380D"/>

  <!-- CHIN ROW (y=119) — tapers -->
  <rect x="63" y="119" width="70" height="7" fill="#D4380D"/>

  <!-- Pixel grid overlay (very subtle) -->
  <g stroke="#0D0A07" stroke-width="0.5" opacity="0.3">
    <line x1="35" y1="14" x2="35" y2="126"/>
    <line x1="42" y1="14" x2="42" y2="126"/>
    <line x1="49" y1="14" x2="49" y2="126"/>
    <line x1="56" y1="14" x2="56" y2="126"/>
    <line x1="63" y1="14" x2="63" y2="126"/>
    <line x1="70" y1="14" x2="70" y2="126"/>
    <line x1="77" y1="14" x2="77" y2="126"/>
    <line x1="84" y1="14" x2="84" y2="126"/>
    <line x1="91" y1="14" x2="91" y2="126"/>
    <line x1="98" y1="14" x2="98" y2="126"/>
    <line x1="105" y1="14" x2="105" y2="126"/>
    <line x1="112" y1="14" x2="112" y2="126"/>
    <line x1="119" y1="14" x2="119" y2="126"/>
    <line x1="126" y1="14" x2="126" y2="126"/>
    <line x1="133" y1="14" x2="133" y2="126"/>
    <line x1="140" y1="14" x2="140" y2="126"/>
    <line x1="147" y1="14" x2="147" y2="126"/>
    <line x1="154" y1="14" x2="154" y2="126"/>
    <line x1="161" y1="14" x2="161" y2="126"/>
  </g>

  <!-- PRESS START text — pixel style using monospace -->
  <text x="100" y="148" text-anchor="middle" font-family="'Courier New', monospace" font-size="9" fill="#f5edd8" letter-spacing="1">PRESS START</text>
  <!-- Blinking cursor effect -->
  <rect x="164" y="140" width="5" height="8" fill="#f5edd8" opacity="0.8"/>

  <!-- Wordmark -->
  <text x="100" y="164" text-anchor="middle" font-family="'Courier New', monospace" font-size="9" fill="#C9A84C" letter-spacing="2" filter="url(#j99glow)">DEVILOFTECH</text>

  <!-- Score display style -->
  <text x="28" y="180" font-family="'Courier New', monospace" font-size="7" fill="#D4380D" opacity="0.6">1UP</text>
  <text x="100" y="180" text-anchor="middle" font-family="'Courier New', monospace" font-size="7" fill="#f5edd8" opacity="0.5">SCORE 006660</text>
  <text x="170" y="180" text-anchor="end" font-family="'Courier New', monospace" font-size="7" fill="#D4380D" opacity="0.6">2UP</text>

  <!-- Level indicator -->
  <text x="100" y="193" text-anchor="middle" font-family="'Courier New', monospace" font-size="6.5" fill="#C9A84C" opacity="0.5">LVL 99 &gt; BOSS: TECH</text>
</svg>`,
  },
  {
    id: 100,
    group: 'J',
    groupName: 'Cyber / Neon',
    label: 'Omega Devil',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Multi-layer ember inner glow -->
    <filter id="j100emberGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="3" result="blur1"/>
      <feGaussianBlur stdDeviation="7" result="blur2"/>
      <feGaussianBlur stdDeviation="13" result="blur3"/>
      <feMerge>
        <feMergeNode in="blur3"/>
        <feMergeNode in="blur2"/>
        <feMergeNode in="blur1"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <!-- Gold outer bloom -->
    <filter id="j100goldBloom" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="4" result="blur1"/>
      <feGaussianBlur stdDeviation="9" result="blur2"/>
      <feGaussianBlur stdDeviation="16" result="blur3"/>
      <feMerge>
        <feMergeNode in="blur3"/>
        <feMergeNode in="blur2"/>
        <feMergeNode in="blur1"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <!-- Neural node glow -->
    <filter id="j100nodeGlow">
      <feGaussianBlur stdDeviation="2.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <!-- Spark glow -->
    <filter id="j100spark">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <!-- Text glow -->
    <filter id="j100textGlow">
      <feGaussianBlur stdDeviation="2.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <!-- Face radial gradient -->
    <radialGradient id="j100faceBg" cx="50%" cy="38%" r="55%">
      <stop offset="0%" stop-color="#5c1505"/>
      <stop offset="60%" stop-color="#2d0a03"/>
      <stop offset="100%" stop-color="#0f0401"/>
    </radialGradient>
    <!-- Neural halo ring gradient -->
    <radialGradient id="j100haloBg" cx="50%" cy="50%" r="50%">
      <stop offset="75%" stop-color="transparent"/>
      <stop offset="90%" stop-color="#C9A84C" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="transparent"/>
    </radialGradient>
    <!-- Circuit bg gradient -->
    <radialGradient id="j100circuitBg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1a1008" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="#0D0A07" stop-opacity="0"/>
    </radialGradient>
    <!-- Horn tip spark gradient -->
    <radialGradient id="j100sparkL" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fff8c0"/>
      <stop offset="40%" stop-color="#C9A84C"/>
      <stop offset="100%" stop-color="transparent"/>
    </radialGradient>
    <radialGradient id="j100sparkR" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fff8c0"/>
      <stop offset="40%" stop-color="#C9A84C"/>
      <stop offset="100%" stop-color="transparent"/>
    </radialGradient>
  </defs>

  <!-- ═══ BACKGROUND ═══ -->
  <rect width="200" height="200" fill="#080504"/>

  <!-- Deep bg glow — ember halo behind everything -->
  <circle cx="100" cy="90" r="88" fill="#D4380D" opacity="0.04"/>
  <circle cx="100" cy="90" r="72" fill="#D4380D" opacity="0.04"/>

  <!-- ═══ CIRCUIT BOARD TRACES (bg) ═══ -->
  <g stroke="#C9A84C" stroke-width="0.5" opacity="0.15" fill="none">
    <!-- Horizontal traces -->
    <path d="M10 40 L30 40 L30 55 L45 55"/>
    <path d="M190 40 L170 40 L170 55 L155 55"/>
    <path d="M10 140 L32 140 L32 125 L48 125"/>
    <path d="M190 140 L168 140 L168 125 L152 125"/>
    <path d="M8 90 L22 90 L22 75 L35 75"/>
    <path d="M192 90 L178 90 L178 75 L165 75"/>
    <!-- Small pads -->
    <circle cx="30" cy="55" r="2" fill="#C9A84C" opacity="0.4"/>
    <circle cx="170" cy="55" r="2" fill="#C9A84C" opacity="0.4"/>
    <circle cx="32" cy="125" r="2" fill="#C9A84C" opacity="0.4"/>
    <circle cx="168" cy="125" r="2" fill="#C9A84C" opacity="0.4"/>
    <circle cx="22" cy="75" r="2" fill="#C9A84C" opacity="0.4"/>
    <circle cx="178" cy="75" r="2" fill="#C9A84C" opacity="0.4"/>
    <!-- More traces -->
    <path d="M45 55 L45 62"/>
    <path d="M155 55 L155 62"/>
    <path d="M48 125 L48 118"/>
    <path d="M152 125 L152 118"/>
  </g>

  <!-- ═══ NEURAL NETWORK HALO ═══ -->
  <!-- Outer halo ring background glow -->
  <circle cx="100" cy="88" r="80" fill="url(#j100haloBg)"/>

  <!-- Neural arc connections — gold lines between nodes on the ring -->
  <g stroke="#C9A84C" stroke-width="0.7" opacity="0.45" filter="url(#j100nodeGlow)" fill="none">
    <!-- Ring arcs connecting nodes at 12 positions around radius 74 -->
    <!-- Node positions at 30° intervals: 0°,30°,60°,90°,120°,150°,180°,210°,240°,270°,300°,330° -->
    <!-- 0°:   (100+74,  88)   = (174, 88)  -->
    <!-- 30°:  (100+64,  88-37) = (164, 51) -->
    <!-- 60°:  (100+37,  88-64) = (137, 24) -->
    <!-- 90°:  (100,     88-74) = (100, 14) -->
    <!-- 120°: (100-37,  88-64) = (63,  24) -->
    <!-- 150°: (100-64,  88-37) = (36,  51) -->
    <!-- 180°: (100-74,  88)    = (26,  88) -->
    <!-- 210°: (100-64,  88+37) = (36, 125) -->
    <!-- 240°: (100-37,  88+64) = (63, 152) -->
    <!-- 270°: (100,     88+74) = (100,162) -->
    <!-- 300°: (100+37,  88+64) = (137,152) -->
    <!-- 330°: (100+64,  88+37) = (164,125) -->

    <!-- Adjacent arcs (rim of halo) -->
    <path d="M174 88 Q169 69 164 51" stroke-width="0.6"/>
    <path d="M164 51 Q150 37 137 24" stroke-width="0.6"/>
    <path d="M137 24 Q118 19 100 14" stroke-width="0.6"/>
    <path d="M100 14 Q82 19 63 24" stroke-width="0.6"/>
    <path d="M63 24 Q50 37 36 51" stroke-width="0.6"/>
    <path d="M36 51 Q31 69 26 88" stroke-width="0.6"/>
    <path d="M26 88 Q31 107 36 125" stroke-width="0.6"/>
    <path d="M36 125 Q50 143 63 152" stroke-width="0.6"/>
    <path d="M63 152 Q82 157 100 162" stroke-width="0.6"/>
    <path d="M100 162 Q118 157 137 152" stroke-width="0.6"/>
    <path d="M137 152 Q150 143 164 125" stroke-width="0.6"/>
    <path d="M164 125 Q169 107 174 88" stroke-width="0.6"/>

    <!-- Cross-connections (skip-one) -->
    <line x1="174" y1="88"  x2="137" y2="24"  opacity="0.25"/>
    <line x1="164" y1="51"  x2="100" y2="14"  opacity="0.25"/>
    <line x1="137" y1="24"  x2="36"  y2="51"  opacity="0.2"/>
    <line x1="100" y1="14"  x2="26"  y2="88"  opacity="0.2"/>
    <line x1="63"  y1="24"  x2="36"  y2="125" opacity="0.2"/>
    <line x1="36"  y1="51"  x2="63"  y2="152" opacity="0.18"/>
    <line x1="26"  y1="88"  x2="100" y2="162" opacity="0.18"/>
    <line x1="36"  y1="125" x2="164" y2="125" opacity="0.15"/>
    <line x1="63"  y1="152" x2="164" y2="51"  opacity="0.15"/>
    <line x1="174" y1="88"  x2="63"  y2="152" opacity="0.15"/>
    <line x1="164" y1="51"  x2="137" y2="152" opacity="0.15"/>
    <!-- Node to center connections -->
    <line x1="100" y1="14"  x2="100" y2="88"  opacity="0.12"/>
    <line x1="174" y1="88"  x2="100" y2="88"  opacity="0.12"/>
    <line x1="26"  y1="88"  x2="100" y2="88"  opacity="0.12"/>
    <line x1="100" y1="162" x2="100" y2="88"  opacity="0.12"/>
  </g>

  <!-- Neural nodes — circles at each ring position -->
  <g fill="#C9A84C" filter="url(#j100nodeGlow)">
    <circle cx="174" cy="88"  r="3"/>
    <circle cx="164" cy="51"  r="3"/>
    <circle cx="137" cy="24"  r="3"/>
    <circle cx="100" cy="14"  r="2.5"/>
    <circle cx="63"  cy="24"  r="3"/>
    <circle cx="36"  cy="51"  r="3"/>
    <circle cx="26"  cy="88"  r="3"/>
    <circle cx="36"  cy="125" r="3"/>
    <circle cx="63"  cy="152" r="3"/>
    <circle cx="100" cy="162" r="2.5"/>
    <circle cx="137" cy="152" r="3"/>
    <circle cx="164" cy="125" r="3"/>
  </g>
  <!-- Node bright cores -->
  <g fill="#fff8e0" opacity="0.9">
    <circle cx="174" cy="88"  r="1.2"/>
    <circle cx="164" cy="51"  r="1.2"/>
    <circle cx="137" cy="24"  r="1.2"/>
    <circle cx="63"  cy="24"  r="1.2"/>
    <circle cx="36"  cy="51"  r="1.2"/>
    <circle cx="26"  cy="88"  r="1.2"/>
    <circle cx="36"  cy="125" r="1.2"/>
    <circle cx="63"  cy="152" r="1.2"/>
    <circle cx="137" cy="152" r="1.2"/>
    <circle cx="164" cy="125" r="1.2"/>
  </g>

  <!-- ═══ DEVIL FACE ═══ -->
  <!-- Outer ember bloom (behind face) -->
  <circle cx="100" cy="88" r="54" fill="#D4380D" opacity="0.08" filter="url(#j100emberGlow)"/>

  <!-- Face circle -->
  <circle cx="100" cy="88" r="50" fill="url(#j100faceBg)" stroke="#D4380D" stroke-width="2.5" filter="url(#j100emberGlow)"/>
  <!-- Inner face rim -->
  <circle cx="100" cy="88" r="50" fill="none" stroke="#f5edd8" stroke-width="0.6" opacity="0.4"/>

  <!-- Brow ridge -->
  <path d="M68 68 Q84 62 100 64 Q116 62 132 68" fill="none" stroke="#8B1a04" stroke-width="2" opacity="0.6"/>

  <!-- Left horn — powerful, double-edged -->
  <path d="M74 46 Q58 16 66 4 Q74 20 78 36 L80 44Z" fill="#C9A84C" filter="url(#j100goldBloom)"/>
  <path d="M74 46 Q58 16 66 4 Q74 20 78 36 L80 44Z" fill="none" stroke="#fff8c0" stroke-width="0.8" opacity="0.7"/>
  <!-- Left horn inner edge highlight -->
  <path d="M76 44 Q66 22 69 8" fill="none" stroke="#fff8c0" stroke-width="0.5" opacity="0.5"/>

  <!-- Right horn — powerful, double-edged -->
  <path d="M126 46 Q142 16 134 4 Q126 20 122 36 L120 44Z" fill="#C9A84C" filter="url(#j100goldBloom)"/>
  <path d="M126 46 Q142 16 134 4 Q126 20 122 36 L120 44Z" fill="none" stroke="#fff8c0" stroke-width="0.8" opacity="0.7"/>
  <path d="M124 44 Q134 22 131 8" fill="none" stroke="#fff8c0" stroke-width="0.5" opacity="0.5"/>

  <!-- ═══ HORN TIP SPARKS ═══ -->
  <!-- Left horn tip spark -->
  <circle cx="66" cy="4"  r="7" fill="url(#j100sparkL)" filter="url(#j100spark)"/>
  <circle cx="66" cy="4"  r="2.5" fill="#fff8c0" opacity="0.95"/>
  <!-- Spark rays left -->
  <line x1="66" y1="4"  x2="60" y2="-3"  stroke="#C9A84C" stroke-width="0.8" opacity="0.7" filter="url(#j100spark)"/>
  <line x1="66" y1="4"  x2="72" y2="-3"  stroke="#C9A84C" stroke-width="0.8" opacity="0.7" filter="url(#j100spark)"/>
  <line x1="66" y1="4"  x2="58" y2="7"   stroke="#C9A84C" stroke-width="0.6" opacity="0.5"/>
  <line x1="66" y1="4"  x2="74" y2="7"   stroke="#C9A84C" stroke-width="0.6" opacity="0.5"/>
  <!-- Right horn tip spark -->
  <circle cx="134" cy="4" r="7" fill="url(#j100sparkR)" filter="url(#j100spark)"/>
  <circle cx="134" cy="4" r="2.5" fill="#fff8c0" opacity="0.95"/>
  <!-- Spark rays right -->
  <line x1="134" y1="4"  x2="128" y2="-3" stroke="#C9A84C" stroke-width="0.8" opacity="0.7" filter="url(#j100spark)"/>
  <line x1="134" y1="4"  x2="140" y2="-3" stroke="#C9A84C" stroke-width="0.8" opacity="0.7" filter="url(#j100spark)"/>
  <line x1="134" y1="4"  x2="126" y2="7"  stroke="#C9A84C" stroke-width="0.6" opacity="0.5"/>
  <line x1="134" y1="4"  x2="142" y2="7"  stroke="#C9A84C" stroke-width="0.6" opacity="0.5"/>

  <!-- ═══ EYES — premium layered ═══ -->
  <!-- Eye glow halos -->
  <ellipse cx="84" cy="82" rx="14" ry="15" fill="#C9A84C" opacity="0.1" filter="url(#j100goldBloom)"/>
  <ellipse cx="116" cy="82" rx="14" ry="15" fill="#C9A84C" opacity="0.1" filter="url(#j100goldBloom)"/>
  <!-- Eye whites -->
  <ellipse cx="84" cy="82" rx="9" ry="10" fill="#C9A84C" filter="url(#j100goldBloom)"/>
  <ellipse cx="116" cy="82" rx="9" ry="10" fill="#C9A84C" filter="url(#j100goldBloom)"/>
  <!-- Eye pupils -->
  <ellipse cx="84"  cy="83" rx="5" ry="5.5" fill="#0D0A07"/>
  <ellipse cx="116" cy="83" rx="5" ry="5.5" fill="#0D0A07"/>
  <!-- Eye shine -->
  <circle cx="81" cy="79" r="1.5" fill="#fff8c0" opacity="0.9"/>
  <circle cx="113" cy="79" r="1.5" fill="#fff8c0" opacity="0.9"/>
  <!-- Iris ring -->
  <ellipse cx="84"  cy="82" rx="7" ry="7.5" fill="none" stroke="#D4380D" stroke-width="0.8" opacity="0.6"/>
  <ellipse cx="116" cy="82" rx="7" ry="7.5" fill="none" stroke="#D4380D" stroke-width="0.8" opacity="0.6"/>

  <!-- Nose bridge and nostrils -->
  <path d="M100 72 L98 98 M100 72 L102 98" fill="none" stroke="#8B1a04" stroke-width="1.2" opacity="0.5"/>
  <ellipse cx="96" cy="99" rx="3" ry="2.5" fill="#1a0603" opacity="0.7"/>
  <ellipse cx="104" cy="99" rx="3" ry="2.5" fill="#1a0603" opacity="0.7"/>

  <!-- ═══ GRIN — premium ═══ -->
  <path d="M72 112 Q100 136 128 112" fill="none" stroke="#D4380D" stroke-width="3.5" stroke-linecap="round" filter="url(#j100emberGlow)"/>
  <path d="M72 112 Q100 136 128 112" fill="none" stroke="#f5edd8" stroke-width="1" opacity="0.8" stroke-linecap="round"/>
  <!-- Teeth -->
  <path d="M79 112 L77 124 M87 115 L86 127 M95 117 L95 129 M100 117 L100 129 M105 117 L105 129 M113 115 L114 127 M121 112 L123 124" fill="none" stroke="#f5edd8" stroke-width="2" stroke-linecap="round" filter="url(#j100emberGlow)"/>
  <!-- Tooth highlights -->
  <path d="M79 112 L77 124 M87 115 L86 127 M95 117 L95 129 M105 117 L105 129 M113 115 L114 127 M121 112 L123 124" fill="none" stroke="#fff" stroke-width="0.5" opacity="0.5" stroke-linecap="round"/>

  <!-- ═══ OMEGA TEXT ARC ═══ -->
  <!-- Arc text path — bottom arc  -->
  <defs>
    <path id="j100arcPath" d="M 30 148 A 74 74 0 0 0 170 148"/>
  </defs>
  <text font-family="Georgia, 'Times New Roman', serif" font-size="11" font-weight="bold" fill="#C9A84C" letter-spacing="3" filter="url(#j100textGlow)">
    <textPath href="#j100arcPath" startOffset="50%" text-anchor="middle">&#x221E; DEVILOFTECH &#x221E;</textPath>
  </text>
  <!-- Arc underline -->
  <path d="M 34 152 A 70 70 0 0 0 166 152" fill="none" stroke="#C9A84C" stroke-width="0.5" opacity="0.4"/>

  <!-- ═══ OUTER RING ═══ -->
  <!-- Thin gold outer ring -->
  <circle cx="100" cy="88" r="92" fill="none" stroke="#C9A84C" stroke-width="0.5" opacity="0.2" stroke-dasharray="6 6"/>

  <!-- Corner micro-tags -->
  <text x="8" y="10" font-family="'Courier New', monospace" font-size="5.5" fill="#C9A84C" opacity="0.4">&#x3A9;</text>
  <text x="186" y="10" text-anchor="end" font-family="'Courier New', monospace" font-size="5.5" fill="#C9A84C" opacity="0.4">100</text>
</svg>`,
  },
]
