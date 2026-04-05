import type { Logo } from './logos'

export const LOGOS_H: Logo[] = [
  {
    id: 71,
    group: 'H',
    groupName: 'AI / Neural Net',
    label: 'Neural Net Devil',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="h71bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1a1410"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </radialGradient>
    <filter id="h71glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="2.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="h71glowsoft" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="3.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="200" height="200" fill="url(#h71bg)"/>
  <!-- Input layer nodes (4 nodes, left x=30) -->
  <!-- Node centers: y=42, y=68, y=94, y=120 -->
  <!-- Hidden layer (5 nodes, center x=100) -->
  <!-- y=28(horn-left), y=52(horn-right), y=78, y=104, y=130 -->
  <!-- Output layer (4 nodes, right x=170) -->
  <!-- y=42, y=68, y=94, y=120 -->

  <!-- Connection lines: input → hidden (ember, thin) -->
  <g stroke="#D4380D" stroke-width="0.7" opacity="0.55">
    <!-- From in0(30,42) -->
    <line x1="30" y1="42" x2="100" y2="30"/>
    <line x1="30" y1="42" x2="100" y2="54"/>
    <line x1="30" y1="42" x2="100" y2="80"/>
    <line x1="30" y1="42" x2="100" y2="106"/>
    <line x1="30" y1="42" x2="100" y2="130"/>
    <!-- From in1(30,68) -->
    <line x1="30" y1="68" x2="100" y2="30"/>
    <line x1="30" y1="68" x2="100" y2="54"/>
    <line x1="30" y1="68" x2="100" y2="80"/>
    <line x1="30" y1="68" x2="100" y2="106"/>
    <line x1="30" y1="68" x2="100" y2="130"/>
    <!-- From in2(30,94) -->
    <line x1="30" y1="94" x2="100" y2="30"/>
    <line x1="30" y1="94" x2="100" y2="54"/>
    <line x1="30" y1="94" x2="100" y2="80"/>
    <line x1="30" y1="94" x2="100" y2="106"/>
    <line x1="30" y1="94" x2="100" y2="130"/>
    <!-- From in3(30,120) -->
    <line x1="30" y1="120" x2="100" y2="30"/>
    <line x1="30" y1="120" x2="100" y2="54"/>
    <line x1="30" y1="120" x2="100" y2="80"/>
    <line x1="30" y1="120" x2="100" y2="106"/>
    <line x1="30" y1="120" x2="100" y2="130"/>
  </g>
  <!-- Connection lines: hidden → output (gold, thin) -->
  <g stroke="#C9A84C" stroke-width="0.7" opacity="0.55">
    <!-- From hid0(100,30) -->
    <line x1="100" y1="30" x2="170" y2="42"/>
    <line x1="100" y1="30" x2="170" y2="68"/>
    <line x1="100" y1="30" x2="170" y2="94"/>
    <line x1="100" y1="30" x2="170" y2="120"/>
    <!-- From hid1(100,54) -->
    <line x1="100" y1="54" x2="170" y2="42"/>
    <line x1="100" y1="54" x2="170" y2="68"/>
    <line x1="100" y1="54" x2="170" y2="94"/>
    <line x1="100" y1="54" x2="170" y2="120"/>
    <!-- From hid2(100,80) -->
    <line x1="100" y1="80" x2="170" y2="42"/>
    <line x1="100" y1="80" x2="170" y2="68"/>
    <line x1="100" y1="80" x2="170" y2="94"/>
    <line x1="100" y1="80" x2="170" y2="120"/>
    <!-- From hid3(100,106) -->
    <line x1="100" y1="106" x2="170" y2="42"/>
    <line x1="100" y1="106" x2="170" y2="68"/>
    <line x1="100" y1="106" x2="170" y2="94"/>
    <line x1="100" y1="106" x2="170" y2="120"/>
    <!-- From hid4(100,130) -->
    <line x1="100" y1="130" x2="170" y2="42"/>
    <line x1="100" y1="130" x2="170" y2="68"/>
    <line x1="100" y1="130" x2="170" y2="94"/>
    <line x1="100" y1="130" x2="170" y2="120"/>
  </g>
  <!-- Input layer nodes -->
  <g filter="url(#h71glow)">
    <circle cx="30" cy="42" r="7" fill="#D4380D" stroke="#C9A84C" stroke-width="1.5"/>
    <circle cx="30" cy="68" r="7" fill="#D4380D" stroke="#C9A84C" stroke-width="1.5"/>
    <circle cx="30" cy="94" r="7" fill="#D4380D" stroke="#C9A84C" stroke-width="1.5"/>
    <circle cx="30" cy="120" r="7" fill="#D4380D" stroke="#C9A84C" stroke-width="1.5"/>
  </g>
  <!-- Hidden layer nodes — top two are "horn" nodes (slightly raised) -->
  <g filter="url(#h71glowsoft)">
    <circle cx="100" cy="30" r="8" fill="#D4380D" stroke="#C9A84C" stroke-width="2"/>
    <circle cx="100" cy="54" r="8" fill="#D4380D" stroke="#C9A84C" stroke-width="2"/>
    <circle cx="100" cy="80" r="7" fill="#D4380D" stroke="#C9A84C" stroke-width="1.5"/>
    <circle cx="100" cy="106" r="7" fill="#D4380D" stroke="#C9A84C" stroke-width="1.5"/>
    <circle cx="100" cy="130" r="7" fill="#D4380D" stroke="#C9A84C" stroke-width="1.5"/>
  </g>
  <!-- Horn marks on top two hidden nodes -->
  <path d="M94 24 Q100 14 106 24" fill="none" stroke="#C9A84C" stroke-width="1.5" stroke-linecap="round"/>
  <!-- Output layer nodes -->
  <g filter="url(#h71glow)">
    <circle cx="170" cy="42" r="7" fill="#D4380D" stroke="#C9A84C" stroke-width="1.5"/>
    <circle cx="170" cy="68" r="7" fill="#D4380D" stroke="#C9A84C" stroke-width="1.5"/>
    <circle cx="170" cy="94" r="7" fill="#D4380D" stroke="#C9A84C" stroke-width="1.5"/>
    <circle cx="170" cy="120" r="7" fill="#D4380D" stroke="#C9A84C" stroke-width="1.5"/>
  </g>
  <!-- Layer labels -->
  <text x="30" y="140" text-anchor="middle" font-family="monospace" font-size="7" fill="#C9A84C" opacity="0.7">IN</text>
  <text x="100" y="148" text-anchor="middle" font-family="monospace" font-size="7" fill="#C9A84C" opacity="0.7">HID</text>
  <text x="170" y="140" text-anchor="middle" font-family="monospace" font-size="7" fill="#C9A84C" opacity="0.7">OUT</text>
  <!-- Wordmark -->
  <text x="100" y="172" text-anchor="middle" font-family="Georgia, serif" font-size="11" font-weight="bold" fill="#C9A84C" letter-spacing="1.5">DevilOfTech</text>
  <line x1="30" y1="178" x2="170" y2="178" stroke="#C9A84C" stroke-width="0.4" opacity="0.4"/>
</svg>`,
  },
  {
    id: 72,
    group: 'H',
    groupName: 'AI / Neural Net',
    label: 'AI Eye',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="h72iris" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#D4380D"/>
      <stop offset="40%" stop-color="#8B2500"/>
      <stop offset="80%" stop-color="#3a1a00"/>
      <stop offset="100%" stop-color="#1a0800"/>
    </radialGradient>
    <radialGradient id="h72bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1a1410"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </radialGradient>
    <filter id="h72glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="h72outerGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <clipPath id="h72eyeClip">
      <ellipse cx="100" cy="100" rx="82" ry="50"/>
    </clipPath>
  </defs>
  <rect width="200" height="200" fill="url(#h72bg)"/>
  <!-- Eyelashes as circuit traces (top) -->
  <g stroke="#C9A84C" stroke-width="1" opacity="0.5" fill="none">
    <path d="M40 80 L30 62 M52 68 L46 50 M66 60 L64 42 M82 56 L82 38 M100 54 L100 36 M118 56 L118 38 M134 60 L136 42 M148 68 L154 50 M160 80 L170 62"/>
    <!-- Circuit dots on traces -->
    <circle cx="30" cy="62" r="2" fill="#C9A84C"/>
    <circle cx="46" cy="50" r="2" fill="#C9A84C"/>
    <circle cx="64" cy="42" r="2" fill="#C9A84C"/>
    <circle cx="82" cy="38" r="2" fill="#C9A84C"/>
    <circle cx="100" cy="36" r="2" fill="#C9A84C"/>
    <circle cx="118" cy="38" r="2" fill="#C9A84C"/>
    <circle cx="136" cy="42" r="2" fill="#C9A84C"/>
    <circle cx="154" cy="50" r="2" fill="#C9A84C"/>
    <circle cx="170" cy="62" r="2" fill="#C9A84C"/>
    <!-- Bottom lashes -->
    <path d="M40 120 L30 138 M60 130 L56 148 M82 134 L82 152 M100 136 L100 154 M118 134 L118 152 M140 130 L144 148 M160 120 L170 138"/>
    <circle cx="30" cy="138" r="2" fill="#C9A84C"/>
    <circle cx="56" cy="148" r="2" fill="#C9A84C"/>
    <circle cx="82" cy="152" r="2" fill="#C9A84C"/>
    <circle cx="100" cy="154" r="2" fill="#C9A84C"/>
    <circle cx="118" cy="152" r="2" fill="#C9A84C"/>
    <circle cx="144" cy="148" r="2" fill="#C9A84C"/>
    <circle cx="170" cy="138" r="2" fill="#C9A84C"/>
  </g>
  <!-- Eye white (almond shape) -->
  <ellipse cx="100" cy="100" rx="82" ry="50" fill="#100C08" stroke="#C9A84C" stroke-width="2" filter="url(#h72outerGlow)"/>
  <!-- Iris fill -->
  <circle cx="100" cy="100" r="42" fill="url(#h72iris)" clip-path="url(#h72eyeClip)"/>
  <!-- Neural network radial pattern inside iris -->
  <g clip-path="url(#h72eyeClip)">
    <!-- Concentric rings of nodes -->
    <!-- Ring 1 (r=14) -->
    <g stroke="#C9A84C" stroke-width="0.6" opacity="0.6" fill="none">
      <circle cx="100" cy="100" r="14"/>
      <circle cx="100" cy="100" r="26"/>
      <circle cx="100" cy="100" r="38"/>
    </g>
    <!-- Ring 1 nodes (8 nodes) -->
    <g fill="#C9A84C" opacity="0.8">
      <circle cx="114" cy="100" r="2.5"/>
      <circle cx="110" cy="110" r="2.5"/>
      <circle cx="100" cy="114" r="2.5"/>
      <circle cx="90" cy="110" r="2.5"/>
      <circle cx="86" cy="100" r="2.5"/>
      <circle cx="90" cy="90" r="2.5"/>
      <circle cx="100" cy="86" r="2.5"/>
      <circle cx="110" cy="90" r="2.5"/>
    </g>
    <!-- Ring 2 nodes (8 nodes, r=26) -->
    <g fill="#D4380D" opacity="0.9">
      <circle cx="126" cy="100" r="2.5"/>
      <circle cx="118" cy="118" r="2.5"/>
      <circle cx="100" cy="126" r="2.5"/>
      <circle cx="82" cy="118" r="2.5"/>
      <circle cx="74" cy="100" r="2.5"/>
      <circle cx="82" cy="82" r="2.5"/>
      <circle cx="100" cy="74" r="2.5"/>
      <circle cx="118" cy="82" r="2.5"/>
    </g>
    <!-- Radial connection lines from center -->
    <g stroke="#C9A84C" stroke-width="0.5" opacity="0.35">
      <line x1="100" y1="100" x2="114" y2="100"/>
      <line x1="100" y1="100" x2="110" y2="110"/>
      <line x1="100" y1="100" x2="100" y2="114"/>
      <line x1="100" y1="100" x2="90" y2="110"/>
      <line x1="100" y1="100" x2="86" y2="100"/>
      <line x1="100" y1="100" x2="90" y2="90"/>
      <line x1="100" y1="100" x2="100" y2="86"/>
      <line x1="100" y1="100" x2="110" y2="90"/>
      <line x1="100" y1="100" x2="126" y2="100"/>
      <line x1="100" y1="100" x2="118" y2="118"/>
      <line x1="100" y1="100" x2="100" y2="126"/>
      <line x1="100" y1="100" x2="82" y2="118"/>
      <line x1="100" y1="100" x2="74" y2="100"/>
      <line x1="100" y1="100" x2="82" y2="82"/>
      <line x1="100" y1="100" x2="100" y2="74"/>
      <line x1="100" y1="100" x2="118" y2="82"/>
    </g>
  </g>
  <!-- Outer iris glow ring -->
  <circle cx="100" cy="100" r="42" fill="none" stroke="#C9A84C" stroke-width="2.5" opacity="0.7" filter="url(#h72glow)" clip-path="url(#h72eyeClip)"/>
  <!-- Pupil with letter D -->
  <circle cx="100" cy="100" r="11" fill="#0D0A07" filter="url(#h72glow)"/>
  <text x="100" y="104" text-anchor="middle" font-family="Georgia, serif" font-size="13" font-weight="bold" fill="#D4380D" filter="url(#h72glow)">D</text>
  <!-- Eye outline highlight -->
  <ellipse cx="100" cy="100" rx="82" ry="50" fill="none" stroke="#C9A84C" stroke-width="1.5" opacity="0.9"/>
</svg>`,
  },
  {
    id: 73,
    group: 'H',
    groupName: 'AI / Neural Net',
    label: 'Robot Devil',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="h73metal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3a2e20"/>
      <stop offset="50%" stop-color="#1a1410"/>
      <stop offset="100%" stop-color="#0a0806"/>
    </linearGradient>
    <linearGradient id="h73hornGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#e8c86a"/>
      <stop offset="100%" stop-color="#8a6420"/>
    </linearGradient>
    <filter id="h73eyeGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="h73edgeGlow" x="-10%" y="-10%" width="120%" height="120%">
      <feGaussianBlur stdDeviation="2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="200" height="200" fill="#0D0A07"/>
  <!-- Robot head body (rounded rect) -->
  <rect x="38" y="50" width="124" height="110" rx="16" ry="16" fill="url(#h73metal)" stroke="#C9A84C" stroke-width="1.5"/>
  <!-- Inner panel bevel -->
  <rect x="44" y="56" width="112" height="98" rx="12" ry="12" fill="none" stroke="#C9A84C" stroke-width="0.6" opacity="0.35"/>
  <!-- Rivets at corners -->
  <g fill="#C9A84C" opacity="0.8">
    <circle cx="50" cy="62" r="3"/>
    <circle cx="150" cy="62" r="3"/>
    <circle cx="50" cy="148" r="3"/>
    <circle cx="150" cy="148" r="3"/>
  </g>
  <!-- Devil horn left (gold, tapered upward from head top-left) -->
  <path d="M68 52 Q58 20 70 8 Q76 20 74 50Z" fill="url(#h73hornGrad)" stroke="#8a6420" stroke-width="1"/>
  <!-- Devil horn right -->
  <path d="M132 52 Q142 20 130 8 Q124 20 126 50Z" fill="url(#h73hornGrad)" stroke="#8a6420" stroke-width="1"/>
  <!-- Horn highlight lines -->
  <line x1="70" y1="48" x2="68" y2="16" stroke="#f5edd8" stroke-width="0.8" opacity="0.5"/>
  <line x1="130" y1="48" x2="132" y2="16" stroke="#f5edd8" stroke-width="0.8" opacity="0.5"/>
  <!-- LED Eyes (rectangular, ember) -->
  <rect x="60" y="82" width="30" height="20" rx="4" fill="#D4380D" filter="url(#h73eyeGlow)"/>
  <rect x="110" y="82" width="30" height="20" rx="4" fill="#D4380D" filter="url(#h73eyeGlow)"/>
  <!-- Eye inner glow detail -->
  <rect x="63" y="85" width="24" height="14" rx="3" fill="#ff6633" opacity="0.6"/>
  <rect x="113" y="85" width="24" height="14" rx="3" fill="#ff6633" opacity="0.6"/>
  <!-- Eye pupils (dark slits) -->
  <rect x="72" y="88" width="7" height="10" rx="2" fill="#0D0A07" opacity="0.8"/>
  <rect x="122" y="88" width="7" height="10" rx="2" fill="#0D0A07" opacity="0.8"/>
  <!-- Pixel mouth showing >_ cursor -->
  <rect x="58" y="115" width="84" height="22" rx="4" fill="#0a0806" stroke="#C9A84C" stroke-width="1"/>
  <text x="100" y="131" text-anchor="middle" font-family="monospace" font-size="13" fill="#C9A84C" letter-spacing="2">&gt;_</text>
  <!-- D.T. nameplate on chest area -->
  <rect x="74" y="144" width="52" height="14" rx="3" fill="#1a1410" stroke="#C9A84C" stroke-width="0.8"/>
  <text x="100" y="154" text-anchor="middle" font-family="monospace" font-size="9" fill="#C9A84C" letter-spacing="2">D.T.</text>
  <!-- Antenna base connector -->
  <rect x="84" y="46" width="32" height="6" rx="2" fill="#C9A84C" opacity="0.4"/>
  <!-- Top edge scanline detail -->
  <g stroke="#C9A84C" stroke-width="0.4" opacity="0.2">
    <line x1="44" y1="70" x2="156" y2="70"/>
    <line x1="44" y1="76" x2="156" y2="76"/>
  </g>
</svg>`,
  },
  {
    id: 74,
    group: 'H',
    groupName: 'AI / Neural Net',
    label: 'Attention Devil',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="h74bg" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#1a1410"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </radialGradient>
    <radialGradient id="h74face" cx="50%" cy="45%" r="50%">
      <stop offset="0%" stop-color="#8B2500"/>
      <stop offset="100%" stop-color="#4a1200"/>
    </radialGradient>
    <filter id="h74glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="2.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="h74softglow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="200" height="200" fill="url(#h74bg)"/>

  <!-- Token positions at equal angles (6 tokens, r≈76 from center 100,100) -->
  <!-- Angles: 270°(top), 330°, 30°, 90°(bot), 150°, 210° -->
  <!-- Token D at top: (100, 24) -->
  <!-- Token E at 330°: (162, 62) -->
  <!-- Token V at 30°:  (162, 138) -->
  <!-- Token I at 90°:  (100, 176) -->
  <!-- Token L at 150°: (38, 138) -->
  <!-- Token T at 210°: (38, 62) -->

  <!-- Attention arcs from devil face to each token (varying opacity) -->
  <!-- D (top) - strong attention -->
  <path d="M100 72 Q100 44 100 30" fill="none" stroke="#D4380D" stroke-width="2" opacity="0.9" stroke-dasharray="3,2"/>
  <!-- E (top-right) - medium-high -->
  <path d="M120 86 Q148 62 156 64" fill="none" stroke="#C9A84C" stroke-width="1.8" opacity="0.75" stroke-dasharray="3,2"/>
  <!-- V (bot-right) - medium -->
  <path d="M120 114 Q148 138 156 136" fill="none" stroke="#C9A84C" stroke-width="1.5" opacity="0.55" stroke-dasharray="3,2"/>
  <!-- I (bottom) - low-medium -->
  <path d="M100 128 Q100 156 100 170" fill="none" stroke="#D4380D" stroke-width="1.2" opacity="0.4" stroke-dasharray="3,3"/>
  <!-- L (bot-left) - low -->
  <path d="M80 114 Q52 138 44 136" fill="none" stroke="#C9A84C" stroke-width="1" opacity="0.3" stroke-dasharray="2,3"/>
  <!-- T (top-left) - medium-low -->
  <path d="M80 86 Q52 62 44 64" fill="none" stroke="#C9A84C" stroke-width="1.3" opacity="0.5" stroke-dasharray="3,2"/>

  <!-- Token boxes -->
  <g font-family="monospace" font-size="11" font-weight="bold">
    <!-- D -->
    <rect x="84" y="20" width="32" height="22" rx="4" fill="#1a1410" stroke="#D4380D" stroke-width="1.5"/>
    <text x="100" y="36" text-anchor="middle" fill="#D4380D">D</text>
    <!-- E -->
    <rect x="146" y="52" width="32" height="22" rx="4" fill="#1a1410" stroke="#C9A84C" stroke-width="1.2"/>
    <text x="162" y="68" text-anchor="middle" fill="#C9A84C">E</text>
    <!-- V -->
    <rect x="146" y="126" width="32" height="22" rx="4" fill="#1a1410" stroke="#C9A84C" stroke-width="1.2"/>
    <text x="162" y="142" text-anchor="middle" fill="#C9A84C">V</text>
    <!-- I -->
    <rect x="84" y="168" width="32" height="22" rx="4" fill="#1a1410" stroke="#C9A84C" stroke-width="1"/>
    <text x="100" y="184" text-anchor="middle" fill="#C9A84C">I</text>
    <!-- L -->
    <rect x="22" y="126" width="32" height="22" rx="4" fill="#1a1410" stroke="#C9A84C" stroke-width="1"/>
    <text x="38" y="142" text-anchor="middle" fill="#C9A84C">L</text>
    <!-- T -->
    <rect x="22" y="52" width="32" height="22" rx="4" fill="#1a1410" stroke="#C9A84C" stroke-width="1.2"/>
    <text x="38" y="68" text-anchor="middle" fill="#C9A84C">T</text>
  </g>

  <!-- Central devil face -->
  <circle cx="100" cy="100" r="30" fill="url(#h74face)" stroke="#C9A84C" stroke-width="1.5" filter="url(#h74glow)"/>
  <!-- Devil eyes -->
  <ellipse cx="91" cy="96" rx="5" ry="6" fill="#C9A84C" filter="url(#h74glow)"/>
  <ellipse cx="109" cy="96" rx="5" ry="6" fill="#C9A84C" filter="url(#h74glow)"/>
  <ellipse cx="91" cy="97" rx="2.5" ry="3" fill="#0D0A07"/>
  <ellipse cx="109" cy="97" rx="2.5" ry="3" fill="#0D0A07"/>
  <!-- Devil horns (mini) -->
  <path d="M89 72 Q84 60 88 55 Q93 62 92 70Z" fill="#C9A84C"/>
  <path d="M111 72 Q116 60 112 55 Q107 62 108 70Z" fill="#C9A84C"/>
  <!-- Devil grin -->
  <path d="M86 108 Q100 118 114 108" fill="none" stroke="#f5edd8" stroke-width="2" stroke-linecap="round"/>
</svg>`,
  },
  {
    id: 75,
    group: 'H',
    groupName: 'AI / Neural Net',
    label: 'Token Stream',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="h75bg" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#1a1410"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </radialGradient>
    <radialGradient id="h75face" cx="50%" cy="44%" r="50%">
      <stop offset="0%" stop-color="#8B2500"/>
      <stop offset="100%" stop-color="#3a1200"/>
    </radialGradient>
    <filter id="h75tokglow" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="h75glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="200" height="200" fill="url(#h75bg)"/>

  <!-- Token row: "DEVILOFTECH" — 11 chars, evenly spaced -->
  <!-- Each token box 14px wide, gap 4px. Total = 11*14 + 10*4 = 194. Start x=3 -->
  <!-- Token box positions: x = 3, 21, 39, 57, 75, 93, 111, 129, 147, 165, 183 -->
  <!-- Wait — let's fit better: 11 tokens at 16px each with 2px gap = 11*16+10*2 = 196. Start x=2 -->
  <!-- Actually: center them. 11 * 15 + 10*2 = 185. offset=(200-185)/2=7.5 -->
  <g font-family="monospace" font-size="9" font-weight="bold">
    <!-- D -->
    <rect x="7" y="22" width="15" height="18" rx="2" fill="#1a1410" stroke="#D4380D" stroke-width="1" filter="url(#h75tokglow)"/>
    <text x="14.5" y="35" text-anchor="middle" fill="#D4380D">D</text>
    <!-- E -->
    <rect x="25" y="22" width="15" height="18" rx="2" fill="#1a1410" stroke="#D4380D" stroke-width="1" filter="url(#h75tokglow)"/>
    <text x="32.5" y="35" text-anchor="middle" fill="#D4380D">E</text>
    <!-- V -->
    <rect x="43" y="22" width="15" height="18" rx="2" fill="#1a1410" stroke="#C9A84C" stroke-width="1"/>
    <text x="50.5" y="35" text-anchor="middle" fill="#C9A84C">V</text>
    <!-- I -->
    <rect x="61" y="22" width="15" height="18" rx="2" fill="#1a1410" stroke="#C9A84C" stroke-width="1"/>
    <text x="68.5" y="35" text-anchor="middle" fill="#C9A84C">I</text>
    <!-- L -->
    <rect x="79" y="22" width="15" height="18" rx="2" fill="#1a1410" stroke="#C9A84C" stroke-width="1"/>
    <text x="86.5" y="35" text-anchor="middle" fill="#C9A84C">L</text>
    <!-- O -->
    <rect x="97" y="22" width="15" height="18" rx="2" fill="#1a1410" stroke="#C9A84C" stroke-width="1"/>
    <text x="104.5" y="35" text-anchor="middle" fill="#C9A84C">O</text>
    <!-- F -->
    <rect x="115" y="22" width="15" height="18" rx="2" fill="#1a1410" stroke="#C9A84C" stroke-width="1"/>
    <text x="122.5" y="35" text-anchor="middle" fill="#C9A84C">F</text>
    <!-- T -->
    <rect x="133" y="22" width="15" height="18" rx="2" fill="#1a1410" stroke="#C9A84C" stroke-width="1"/>
    <text x="140.5" y="35" text-anchor="middle" fill="#C9A84C">T</text>
    <!-- E -->
    <rect x="151" y="22" width="15" height="18" rx="2" fill="#1a1410" stroke="#D4380D" stroke-width="1" filter="url(#h75tokglow)"/>
    <text x="158.5" y="35" text-anchor="middle" fill="#D4380D">E</text>
    <!-- C -->
    <rect x="169" y="22" width="15" height="18" rx="2" fill="#1a1410" stroke="#D4380D" stroke-width="1" filter="url(#h75tokglow)"/>
    <text x="176.5" y="35" text-anchor="middle" fill="#D4380D">C</text>
    <!-- H -->
    <rect x="7" y="44" width="15" height="18" rx="2" fill="#1a1410" stroke="#D4380D" stroke-width="1" filter="url(#h75tokglow)"/>
    <text x="14.5" y="57" text-anchor="middle" fill="#D4380D">H</text>
  </g>

  <!-- Processing arcs from devil face to token row -->
  <g stroke="#D4380D" stroke-width="0.8" fill="none" opacity="0.6" stroke-dasharray="4,3">
    <path d="M72 118 Q40 80 14.5 40"/>
    <path d="M85 112 Q85 72 32.5 40"/>
    <path d="M94 108 Q78 72 50.5 40"/>
    <path d="M100 106 Q100 72 68.5 40"/>
    <path d="M106 108 Q114 72 86.5 40"/>
  </g>
  <g stroke="#C9A84C" stroke-width="0.8" fill="none" opacity="0.45" stroke-dasharray="4,3">
    <path d="M112 112 Q130 72 104.5 40"/>
    <path d="M118 114 Q146 72 122.5 40"/>
    <path d="M124 118 Q162 72 140.5 40"/>
    <path d="M128 124 Q168 68 158.5 40"/>
    <path d="M128 130 Q172 64 176.5 40"/>
  </g>

  <!-- Devil face circle (processing center) -->
  <circle cx="100" cy="138" r="36" fill="url(#h75face)" stroke="#C9A84C" stroke-width="1.5" filter="url(#h75glow)"/>
  <!-- Eyes -->
  <ellipse cx="89" cy="132" rx="6" ry="7" fill="#C9A84C" filter="url(#h75glow)"/>
  <ellipse cx="111" cy="132" rx="6" ry="7" fill="#C9A84C" filter="url(#h75glow)"/>
  <ellipse cx="89" cy="133" rx="3" ry="3.5" fill="#0D0A07"/>
  <ellipse cx="111" cy="133" rx="3" ry="3.5" fill="#0D0A07"/>
  <!-- Horns -->
  <path d="M87 104 Q80 90 84 83 Q90 90 90 102Z" fill="#C9A84C"/>
  <path d="M113 104 Q120 90 116 83 Q110 90 110 102Z" fill="#C9A84C"/>
  <!-- Grin -->
  <path d="M82 148 Q100 162 118 148" fill="none" stroke="#f5edd8" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M86 148 Q89 154 92 151 M108 148 Q111 154 114 151" fill="none" stroke="#f5edd8" stroke-width="1.5" stroke-linecap="round"/>
  <!-- "processing" label -->
  <text x="100" y="186" text-anchor="middle" font-family="monospace" font-size="7" fill="#C9A84C" letter-spacing="1" opacity="0.7">processing...</text>
</svg>`,
  },
  {
    id: 76,
    group: 'H',
    groupName: 'AI / Neural Net',
    label: 'Brain Horns',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="h76bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1a1410"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </radialGradient>
    <filter id="h76glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="h76synapse" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="200" height="200" fill="url(#h76bg)"/>

  <!-- Devil horns growing from top of brain -->
  <!-- Left horn -->
  <path d="M74 72 Q60 44 66 26 Q74 40 78 68Z" fill="#D4380D" stroke="#8B2500" stroke-width="1" filter="url(#h76glow)"/>
  <!-- Right horn -->
  <path d="M126 72 Q140 44 134 26 Q126 40 122 68Z" fill="#D4380D" stroke="#8B2500" stroke-width="1" filter="url(#h76glow)"/>
  <!-- Horn highlight -->
  <line x1="69" y1="66" x2="67" y2="32" stroke="#f5edd8" stroke-width="0.8" opacity="0.4"/>
  <line x1="131" y1="66" x2="133" y2="32" stroke="#f5edd8" stroke-width="0.8" opacity="0.4"/>

  <!-- Brain silhouette — left hemisphere -->
  <path d="M100 72
    Q74 66 60 74
    Q44 82 42 100
    Q40 118 52 130
    Q62 140 78 142
    Q90 144 100 140
    Z"
    fill="none" stroke="#C9A84C" stroke-width="2" stroke-linejoin="round"/>
  <!-- Brain sulci (fold lines) left -->
  <path d="M58 88 Q68 82 76 88 Q82 94 76 100" fill="none" stroke="#C9A84C" stroke-width="1" opacity="0.5"/>
  <path d="M50 106 Q62 102 70 108 Q76 114 70 120" fill="none" stroke="#C9A84C" stroke-width="1" opacity="0.5"/>
  <path d="M60 124 Q70 120 80 126" fill="none" stroke="#C9A84C" stroke-width="1" opacity="0.45"/>
  <path d="M64 94 Q60 106 64 116" fill="none" stroke="#C9A84C" stroke-width="0.8" opacity="0.4"/>

  <!-- Brain silhouette — right hemisphere -->
  <path d="M100 72
    Q126 66 140 74
    Q156 82 158 100
    Q160 118 148 130
    Q138 140 122 142
    Q110 144 100 140
    Z"
    fill="none" stroke="#C9A84C" stroke-width="2" stroke-linejoin="round"/>
  <!-- Brain sulci right -->
  <path d="M142 88 Q132 82 124 88 Q118 94 124 100" fill="none" stroke="#C9A84C" stroke-width="1" opacity="0.5"/>
  <path d="M150 106 Q138 102 130 108 Q124 114 130 120" fill="none" stroke="#C9A84C" stroke-width="1" opacity="0.5"/>
  <path d="M140 124 Q130 120 120 126" fill="none" stroke="#C9A84C" stroke-width="1" opacity="0.45"/>
  <path d="M136 94 Q140 106 136 116" fill="none" stroke="#C9A84C" stroke-width="0.8" opacity="0.4"/>

  <!-- Center divide line -->
  <line x1="100" y1="72" x2="100" y2="140" stroke="#C9A84C" stroke-width="0.8" opacity="0.3" stroke-dasharray="3,3"/>

  <!-- Synapse dots inside brain -->
  <g filter="url(#h76synapse)">
    <circle cx="72" cy="98" r="4" fill="#D4380D"/>
    <circle cx="88" cy="114" r="3.5" fill="#C9A84C"/>
    <circle cx="64" cy="118" r="3" fill="#D4380D"/>
    <circle cx="128" cy="98" r="4" fill="#D4380D"/>
    <circle cx="112" cy="114" r="3.5" fill="#C9A84C"/>
    <circle cx="136" cy="118" r="3" fill="#D4380D"/>
    <circle cx="100" cy="106" r="4" fill="#C9A84C"/>
  </g>
  <!-- Synapse connection lines -->
  <g stroke="#C9A84C" stroke-width="0.7" opacity="0.4">
    <line x1="72" y1="98" x2="88" y2="114"/>
    <line x1="72" y1="98" x2="64" y2="118"/>
    <line x1="88" y1="114" x2="100" y2="106"/>
    <line x1="128" y1="98" x2="112" y2="114"/>
    <line x1="128" y1="98" x2="136" y2="118"/>
    <line x1="112" y1="114" x2="100" y2="106"/>
  </g>

  <!-- Arc text "DEVILOFTECH" below -->
  <path id="h76arc" d="M 28 158 A 78 78 0 0 0 172 158" fill="none"/>
  <text font-family="Georgia, serif" font-size="11" font-weight="bold" fill="#C9A84C" letter-spacing="2">
    <textPath href="#h76arc" startOffset="8%">DEVILOFTECH</textPath>
  </text>
</svg>`,
  },
  {
    id: 77,
    group: 'H',
    groupName: 'AI / Neural Net',
    label: 'Deep Net Layers',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="h77bg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#100C08"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </linearGradient>
    <filter id="h77glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="3.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="h77softglow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="200" height="200" fill="url(#h77bg)"/>

  <!-- Vertical layout: INPUT (top) → HIDDEN (middle) → OUTPUT (bottom) -->
  <!-- INPUT layer: 4 nodes at y=38, x = 60,84,116,140 -->
  <!-- HIDDEN layer: 5 nodes at y=100, x = 48,72,100,128,152 -->
  <!-- OUTPUT layer: 2 nodes at y=162, x = 80,120 -->

  <!-- Connection lines INPUT → HIDDEN (gold, thin) -->
  <g stroke="#C9A84C" stroke-width="0.6" opacity="0.45">
    <line x1="60" y1="38" x2="48" y2="100"/>
    <line x1="60" y1="38" x2="72" y2="100"/>
    <line x1="60" y1="38" x2="100" y2="100"/>
    <line x1="60" y1="38" x2="128" y2="100"/>
    <line x1="60" y1="38" x2="152" y2="100"/>
    <line x1="84" y1="38" x2="48" y2="100"/>
    <line x1="84" y1="38" x2="72" y2="100"/>
    <line x1="84" y1="38" x2="100" y2="100"/>
    <line x1="84" y1="38" x2="128" y2="100"/>
    <line x1="84" y1="38" x2="152" y2="100"/>
    <line x1="116" y1="38" x2="48" y2="100"/>
    <line x1="116" y1="38" x2="72" y2="100"/>
    <line x1="116" y1="38" x2="100" y2="100"/>
    <line x1="116" y1="38" x2="128" y2="100"/>
    <line x1="116" y1="38" x2="152" y2="100"/>
    <line x1="140" y1="38" x2="48" y2="100"/>
    <line x1="140" y1="38" x2="72" y2="100"/>
    <line x1="140" y1="38" x2="100" y2="100"/>
    <line x1="140" y1="38" x2="128" y2="100"/>
    <line x1="140" y1="38" x2="152" y2="100"/>
  </g>

  <!-- Connection lines HIDDEN → OUTPUT (ember, thin) -->
  <g stroke="#D4380D" stroke-width="0.8" opacity="0.55">
    <line x1="48" y1="100" x2="80" y2="162"/>
    <line x1="48" y1="100" x2="120" y2="162"/>
    <line x1="72" y1="100" x2="80" y2="162"/>
    <line x1="72" y1="100" x2="120" y2="162"/>
    <line x1="100" y1="100" x2="80" y2="162"/>
    <line x1="100" y1="100" x2="120" y2="162"/>
    <line x1="128" y1="100" x2="80" y2="162"/>
    <line x1="128" y1="100" x2="120" y2="162"/>
    <line x1="152" y1="100" x2="80" y2="162"/>
    <line x1="152" y1="100" x2="120" y2="162"/>
  </g>

  <!-- INPUT nodes -->
  <g filter="url(#h77softglow)">
    <circle cx="60" cy="38" r="6" fill="#1a1410" stroke="#C9A84C" stroke-width="1.5"/>
    <circle cx="84" cy="38" r="6" fill="#1a1410" stroke="#C9A84C" stroke-width="1.5"/>
    <circle cx="116" cy="38" r="6" fill="#1a1410" stroke="#C9A84C" stroke-width="1.5"/>
    <circle cx="140" cy="38" r="6" fill="#1a1410" stroke="#C9A84C" stroke-width="1.5"/>
  </g>

  <!-- HIDDEN nodes -->
  <g filter="url(#h77softglow)">
    <circle cx="48" cy="100" r="6" fill="#1a1410" stroke="#C9A84C" stroke-width="1.5"/>
    <circle cx="72" cy="100" r="6" fill="#1a1410" stroke="#C9A84C" stroke-width="1.5"/>
    <circle cx="100" cy="100" r="6" fill="#1a1410" stroke="#C9A84C" stroke-width="1.5"/>
    <circle cx="128" cy="100" r="6" fill="#1a1410" stroke="#C9A84C" stroke-width="1.5"/>
    <circle cx="152" cy="100" r="6" fill="#1a1410" stroke="#C9A84C" stroke-width="1.5"/>
  </g>

  <!-- OUTPUT nodes — larger, ember glow, labelled D and T -->
  <g filter="url(#h77glow)">
    <circle cx="80" cy="162" r="11" fill="#D4380D" stroke="#C9A84C" stroke-width="2"/>
    <circle cx="120" cy="162" r="11" fill="#D4380D" stroke="#C9A84C" stroke-width="2"/>
  </g>
  <text x="80" y="167" text-anchor="middle" font-family="Georgia, serif" font-size="12" font-weight="bold" fill="#f5edd8">D</text>
  <text x="120" y="167" text-anchor="middle" font-family="Georgia, serif" font-size="12" font-weight="bold" fill="#f5edd8">T</text>

  <!-- Layer labels -->
  <text x="100" y="17" text-anchor="middle" font-family="monospace" font-size="8" fill="#C9A84C" letter-spacing="2" opacity="0.8">INPUT</text>
  <text x="100" y="80" text-anchor="middle" font-family="monospace" font-size="8" fill="#C9A84C" letter-spacing="2" opacity="0.8">HIDDEN</text>
  <text x="100" y="192" text-anchor="middle" font-family="monospace" font-size="8" fill="#C9A84C" letter-spacing="2" opacity="0.8">OUTPUT</text>

  <!-- Layer separator arrows -->
  <g stroke="#C9A84C" stroke-width="1" opacity="0.4" fill="#C9A84C">
    <line x1="100" y1="50" x2="100" y2="86"/>
    <polygon points="96,86 100,94 104,86"/>
    <line x1="100" y1="112" x2="100" y2="144"/>
    <polygon points="96,144 100,152 104,144"/>
  </g>
</svg>`,
  },
  {
    id: 78,
    group: 'H',
    groupName: 'AI / Neural Net',
    label: 'Weight Matrix',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="h78bg" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#1a1410"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </radialGradient>
    <filter id="h78glow" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="200" height="200" fill="url(#h78bg)"/>

  <!-- DOT label top -->
  <text x="100" y="18" text-anchor="middle" font-family="monospace" font-size="10" font-weight="bold" fill="#C9A84C" letter-spacing="3" opacity="0.9">DOT</text>

  <!-- 10x10 weight matrix grid -->
  <!-- Grid: x from 10 to 190 (10 cols, each 18px), y from 24 to 150 (10 rows, each 12.6px) -->
  <!-- Cell centers: col 0=19, col 1=37, col 2=55 ... col 9=181 -->
  <!-- row 0=30, row 1=43, row 2=56 ... row 9=143 -->
  <!-- Devil face pattern formed by bright squares -->
  <!-- Face outline (oval), eyes, horns, grin -->

  <!-- All cells (dark base) -->
  <g fill="#100C08" stroke="#C9A84C" stroke-width="0.3" opacity="0.4">
    <!-- Row 0 -->
    <rect x="10" y="24" width="16" height="11"/><rect x="28" y="24" width="16" height="11"/><rect x="46" y="24" width="16" height="11"/><rect x="64" y="24" width="16" height="11"/><rect x="82" y="24" width="16" height="11"/><rect x="100" y="24" width="16" height="11"/><rect x="118" y="24" width="16" height="11"/><rect x="136" y="24" width="16" height="11"/><rect x="154" y="24" width="16" height="11"/><rect x="172" y="24" width="16" height="11"/>
    <!-- Row 1 -->
    <rect x="10" y="37" width="16" height="11"/><rect x="28" y="37" width="16" height="11"/><rect x="46" y="37" width="16" height="11"/><rect x="64" y="37" width="16" height="11"/><rect x="82" y="37" width="16" height="11"/><rect x="100" y="37" width="16" height="11"/><rect x="118" y="37" width="16" height="11"/><rect x="136" y="37" width="16" height="11"/><rect x="154" y="37" width="16" height="11"/><rect x="172" y="37" width="16" height="11"/>
    <!-- Row 2 -->
    <rect x="10" y="50" width="16" height="11"/><rect x="28" y="50" width="16" height="11"/><rect x="46" y="50" width="16" height="11"/><rect x="64" y="50" width="16" height="11"/><rect x="82" y="50" width="16" height="11"/><rect x="100" y="50" width="16" height="11"/><rect x="118" y="50" width="16" height="11"/><rect x="136" y="50" width="16" height="11"/><rect x="154" y="50" width="16" height="11"/><rect x="172" y="50" width="16" height="11"/>
    <!-- Row 3 -->
    <rect x="10" y="63" width="16" height="11"/><rect x="28" y="63" width="16" height="11"/><rect x="46" y="63" width="16" height="11"/><rect x="64" y="63" width="16" height="11"/><rect x="82" y="63" width="16" height="11"/><rect x="100" y="63" width="16" height="11"/><rect x="118" y="63" width="16" height="11"/><rect x="136" y="63" width="16" height="11"/><rect x="154" y="63" width="16" height="11"/><rect x="172" y="63" width="16" height="11"/>
    <!-- Row 4 -->
    <rect x="10" y="76" width="16" height="11"/><rect x="28" y="76" width="16" height="11"/><rect x="46" y="76" width="16" height="11"/><rect x="64" y="76" width="16" height="11"/><rect x="82" y="76" width="16" height="11"/><rect x="100" y="76" width="16" height="11"/><rect x="118" y="76" width="16" height="11"/><rect x="136" y="76" width="16" height="11"/><rect x="154" y="76" width="16" height="11"/><rect x="172" y="76" width="16" height="11"/>
    <!-- Row 5 -->
    <rect x="10" y="89" width="16" height="11"/><rect x="28" y="89" width="16" height="11"/><rect x="46" y="89" width="16" height="11"/><rect x="64" y="89" width="16" height="11"/><rect x="82" y="89" width="16" height="11"/><rect x="100" y="89" width="16" height="11"/><rect x="118" y="89" width="16" height="11"/><rect x="136" y="89" width="16" height="11"/><rect x="154" y="89" width="16" height="11"/><rect x="172" y="89" width="16" height="11"/>
    <!-- Row 6 -->
    <rect x="10" y="102" width="16" height="11"/><rect x="28" y="102" width="16" height="11"/><rect x="46" y="102" width="16" height="11"/><rect x="64" y="102" width="16" height="11"/><rect x="82" y="102" width="16" height="11"/><rect x="100" y="102" width="16" height="11"/><rect x="118" y="102" width="16" height="11"/><rect x="136" y="102" width="16" height="11"/><rect x="154" y="102" width="16" height="11"/><rect x="172" y="102" width="16" height="11"/>
    <!-- Row 7 -->
    <rect x="10" y="115" width="16" height="11"/><rect x="28" y="115" width="16" height="11"/><rect x="46" y="115" width="16" height="11"/><rect x="64" y="115" width="16" height="11"/><rect x="82" y="115" width="16" height="11"/><rect x="100" y="115" width="16" height="11"/><rect x="118" y="115" width="16" height="11"/><rect x="136" y="115" width="16" height="11"/><rect x="154" y="115" width="16" height="11"/><rect x="172" y="115" width="16" height="11"/>
    <!-- Row 8 -->
    <rect x="10" y="128" width="16" height="11"/><rect x="28" y="128" width="16" height="11"/><rect x="46" y="128" width="16" height="11"/><rect x="64" y="128" width="16" height="11"/><rect x="82" y="128" width="16" height="11"/><rect x="100" y="128" width="16" height="11"/><rect x="118" y="128" width="16" height="11"/><rect x="136" y="128" width="16" height="11"/><rect x="154" y="128" width="16" height="11"/><rect x="172" y="128" width="16" height="11"/>
    <!-- Row 9 -->
    <rect x="10" y="141" width="16" height="11"/><rect x="28" y="141" width="16" height="11"/><rect x="46" y="141" width="16" height="11"/><rect x="64" y="141" width="16" height="11"/><rect x="82" y="141" width="16" height="11"/><rect x="100" y="141" width="16" height="11"/><rect x="118" y="141" width="16" height="11"/><rect x="136" y="141" width="16" height="11"/><rect x="154" y="141" width="16" height="11"/><rect x="172" y="141" width="16" height="11"/>
  </g>

  <!-- Devil face pattern — ember (high positive weight) cells -->
  <!-- Face oval outline: rows 1-8, cols forming oval -->
  <!-- Left horn: row0 col2, row0 col3 (ember) -->
  <rect x="46" y="24" width="16" height="11" fill="#D4380D" opacity="0.9" filter="url(#h78glow)"/>
  <rect x="64" y="24" width="16" height="11" fill="#D4380D" opacity="0.9" filter="url(#h78glow)"/>
  <!-- Right horn: row0 col6, row0 col7 -->
  <rect x="118" y="24" width="16" height="11" fill="#D4380D" opacity="0.9" filter="url(#h78glow)"/>
  <rect x="136" y="24" width="16" height="11" fill="#D4380D" opacity="0.9" filter="url(#h78glow)"/>
  <!-- Face outline row1: cols 3,4,5,6 -->
  <rect x="64" y="37" width="16" height="11" fill="#C9A84C" opacity="0.85"/>
  <rect x="82" y="37" width="16" height="11" fill="#C9A84C" opacity="0.85"/>
  <rect x="100" y="37" width="16" height="11" fill="#C9A84C" opacity="0.85"/>
  <rect x="118" y="37" width="16" height="11" fill="#C9A84C" opacity="0.85"/>
  <!-- row2: cols 2,7 (sides) -->
  <rect x="46" y="50" width="16" height="11" fill="#C9A84C" opacity="0.7"/>
  <rect x="136" y="50" width="16" height="11" fill="#C9A84C" opacity="0.7"/>
  <!-- row3: left eye col2-3, right eye col6-7 -->
  <rect x="46" y="63" width="16" height="11" fill="#D4380D" opacity="0.95" filter="url(#h78glow)"/>
  <rect x="64" y="63" width="16" height="11" fill="#D4380D" opacity="0.95" filter="url(#h78glow)"/>
  <rect x="118" y="63" width="16" height="11" fill="#D4380D" opacity="0.95" filter="url(#h78glow)"/>
  <rect x="136" y="63" width="16" height="11" fill="#D4380D" opacity="0.95" filter="url(#h78glow)"/>
  <!-- row4: sides -->
  <rect x="46" y="76" width="16" height="11" fill="#C9A84C" opacity="0.7"/>
  <rect x="136" y="76" width="16" height="11" fill="#C9A84C" opacity="0.7"/>
  <!-- row5: grin cols 3,4,5,6 (gold = high negative) -->
  <rect x="64" y="89" width="16" height="11" fill="#C9A84C" opacity="0.9"/>
  <rect x="82" y="89" width="16" height="11" fill="#1a1410" opacity="0.9" stroke="#C9A84C" stroke-width="0.6"/>
  <rect x="100" y="89" width="16" height="11" fill="#1a1410" opacity="0.9" stroke="#C9A84C" stroke-width="0.6"/>
  <rect x="118" y="89" width="16" height="11" fill="#C9A84C" opacity="0.9"/>
  <!-- row6: sides -->
  <rect x="46" y="102" width="16" height="11" fill="#C9A84C" opacity="0.65"/>
  <rect x="136" y="102" width="16" height="11" fill="#C9A84C" opacity="0.65"/>
  <!-- row7: bottom face cols 3-6 -->
  <rect x="64" y="115" width="16" height="11" fill="#C9A84C" opacity="0.7"/>
  <rect x="82" y="115" width="16" height="11" fill="#C9A84C" opacity="0.7"/>
  <rect x="100" y="115" width="16" height="11" fill="#C9A84C" opacity="0.7"/>
  <rect x="118" y="115" width="16" height="11" fill="#C9A84C" opacity="0.7"/>

  <!-- Legend / labels -->
  <g font-family="monospace" font-size="7" fill="#C9A84C" opacity="0.7">
    <rect x="12" y="162" width="8" height="8" fill="#D4380D"/>
    <text x="24" y="170">+weight</text>
    <rect x="68" y="162" width="8" height="8" fill="#C9A84C"/>
    <text x="80" y="170">-weight</text>
  </g>
  <!-- Sum label -->
  <text x="100" y="185" text-anchor="middle" font-family="monospace" font-size="10" fill="#f5edd8" opacity="0.8">&#x2211; Weights</text>
  <line x1="20" y1="190" x2="180" y2="190" stroke="#C9A84C" stroke-width="0.4" opacity="0.3"/>
</svg>`,
  },
  {
    id: 79,
    group: 'H',
    groupName: 'AI / Neural Net',
    label: 'Vector Space',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="h79bg" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#1a1410"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </radialGradient>
    <filter id="h79pointGlow" x="-80%" y="-80%" width="360%" height="360%">
      <feGaussianBlur stdDeviation="5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="h79axisGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="1.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <marker id="h79arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#C9A84C"/>
    </marker>
    <marker id="h79arrEmber" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#D4380D"/>
    </marker>
  </defs>
  <rect width="200" height="200" fill="url(#h79bg)"/>

  <!-- 3D coordinate system in perspective — origin at ~(80, 130) -->
  <!-- X axis: goes right and slightly down (perspective) -->
  <!-- Y axis: goes straight up -->
  <!-- Z axis: goes left and down (depth) -->

  <!-- Z axis (going back-left) -->
  <line x1="80" y1="130" x2="32" y2="158" stroke="#C9A84C" stroke-width="1.2" marker-end="url(#h79arr)" opacity="0.7" filter="url(#h79axisGlow)"/>
  <!-- X axis (going right) -->
  <line x1="80" y1="130" x2="168" y2="130" stroke="#C9A84C" stroke-width="1.4" marker-end="url(#h79arr)" filter="url(#h79axisGlow)"/>
  <!-- Y axis (going up) -->
  <line x1="80" y1="130" x2="80" y2="28" stroke="#C9A84C" stroke-width="1.4" marker-end="url(#h79arr)" filter="url(#h79axisGlow)"/>

  <!-- Axis labels -->
  <text x="172" y="134" font-family="monospace" font-size="10" fill="#C9A84C" font-weight="bold">x</text>
  <text x="76" y="22" font-family="monospace" font-size="10" fill="#C9A84C" font-weight="bold">y</text>
  <text x="22" y="166" font-family="monospace" font-size="10" fill="#C9A84C" font-weight="bold">z</text>

  <!-- Axis tick marks -->
  <g stroke="#C9A84C" stroke-width="0.8" opacity="0.5">
    <line x1="104" y1="127" x2="104" y2="133"/>
    <line x1="128" y1="127" x2="128" y2="133"/>
    <line x1="152" y1="127" x2="152" y2="133"/>
    <line x1="77" y1="100" x2="83" y2="100"/>
    <line x1="77" y1="70" x2="83" y2="70"/>
    <line x1="56" y1="148" x2="60" y2="144"/>
  </g>

  <!-- Grid lines on XY plane (faint) -->
  <g stroke="#C9A84C" stroke-width="0.4" opacity="0.18">
    <line x1="104" y1="130" x2="104" y2="50"/>
    <line x1="128" y1="130" x2="128" y2="50"/>
    <line x1="80" y1="100" x2="160" y2="100"/>
    <line x1="80" y1="70" x2="160" y2="70"/>
  </g>

  <!-- The glowing point in 3D space at approx x=6.66 → col ~3 → x≈148, y=∞ → top, z=0 → z-axis origin -->
  <!-- Place point at (148, 62) to be visually striking top-right -->
  <circle cx="148" cy="62" r="7" fill="#D4380D" filter="url(#h79pointGlow)"/>
  <circle cx="148" cy="62" r="3.5" fill="#ff7744"/>

  <!-- Dotted projection lines from point to axes -->
  <g stroke="#D4380D" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.5">
    <!-- down to x-axis -->
    <line x1="148" y1="62" x2="148" y2="130"/>
    <!-- left to y-axis -->
    <line x1="148" y1="62" x2="80" y2="62"/>
  </g>

  <!-- Coordinates label -->
  <rect x="106" y="38" width="72" height="32" rx="4" fill="#100C08" stroke="#D4380D" stroke-width="0.8" opacity="0.9"/>
  <text x="142" y="52" text-anchor="middle" font-family="monospace" font-size="7" fill="#D4380D" font-weight="bold">x = 6.66</text>
  <text x="142" y="62" text-anchor="middle" font-family="monospace" font-size="7" fill="#C9A84C">y = &#x221E;</text>
  <text x="142" y="72" text-anchor="middle" font-family="monospace" font-size="7" fill="#C9A84C">z = 0</text>

  <!-- Gothic D T near point -->
  <text x="148" y="54" text-anchor="middle" font-family="Georgia, serif" font-size="11" font-weight="bold" fill="#f5edd8" opacity="0.9">&#x1D507;&#x1D517;</text>

  <!-- Gradient symbol ∇ near point -->
  <text x="128" y="76" font-family="Georgia, serif" font-size="14" fill="#C9A84C" opacity="0.7">&#x2207;</text>

  <!-- DevilOfTech label -->
  <text x="100" y="188" text-anchor="middle" font-family="Georgia, serif" font-size="11" font-weight="bold" fill="#C9A84C" letter-spacing="1.5">DevilOfTech</text>
  <line x1="30" y1="193" x2="170" y2="193" stroke="#C9A84C" stroke-width="0.4" opacity="0.3"/>
</svg>`,
  },
  {
    id: 80,
    group: 'H',
    groupName: 'AI / Neural Net',
    label: 'LLM Scroll',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="h80scrollGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2a1e0a"/>
      <stop offset="12%" stop-color="#e8d4a0"/>
      <stop offset="88%" stop-color="#e8d4a0"/>
      <stop offset="100%" stop-color="#2a1e0a"/>
    </linearGradient>
    <linearGradient id="h80curlL" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1a1200"/>
      <stop offset="100%" stop-color="#C9A84C"/>
    </linearGradient>
    <linearGradient id="h80curlR" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#C9A84C"/>
      <stop offset="100%" stop-color="#1a1200"/>
    </linearGradient>
    <linearGradient id="h80bg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#100C08"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </linearGradient>
    <filter id="h80scrollGlow" x="-5%" y="-10%" width="110%" height="120%">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="h80devilGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <clipPath id="h80scrollClip">
      <rect x="24" y="38" width="152" height="128"/>
    </clipPath>
  </defs>
  <rect width="200" height="200" fill="url(#h80bg)"/>

  <!-- Scroll body -->
  <rect x="24" y="38" width="152" height="128" rx="4" fill="url(#h80scrollGrad)" filter="url(#h80scrollGlow)"/>

  <!-- Devil face watermark (subtle, inside scroll) -->
  <g clip-path="url(#h80scrollClip)" opacity="0.12">
    <circle cx="100" cy="102" r="36" fill="#D4380D" filter="url(#h80devilGlow)"/>
    <path d="M86 88 Q80 70 84 62 Q90 72 90 86Z" fill="#8B2500"/>
    <path d="M114 88 Q120 70 116 62 Q110 72 110 86Z" fill="#8B2500"/>
    <ellipse cx="88" cy="96" rx="7" ry="8" fill="#100C08"/>
    <ellipse cx="112" cy="96" rx="7" ry="8" fill="#100C08"/>
    <path d="M82 112 Q100 124 118 112" fill="none" stroke="#100C08" stroke-width="3"/>
  </g>

  <!-- Scroll content: token rows and transformer labels -->
  <g clip-path="url(#h80scrollClip)" font-family="monospace" font-size="5.5" fill="#2a1800">

    <!-- Row 1: token boxes -->
    <rect x="30" y="44" width="11" height="7" rx="1" fill="none" stroke="#8B4000" stroke-width="0.5"/><text x="35.5" y="50" text-anchor="middle">D</text>
    <rect x="43" y="44" width="11" height="7" rx="1" fill="none" stroke="#8B4000" stroke-width="0.5"/><text x="48.5" y="50" text-anchor="middle">E</text>
    <rect x="56" y="44" width="11" height="7" rx="1" fill="none" stroke="#8B4000" stroke-width="0.5"/><text x="61.5" y="50" text-anchor="middle">V</text>
    <rect x="69" y="44" width="11" height="7" rx="1" fill="none" stroke="#8B4000" stroke-width="0.5"/><text x="74.5" y="50" text-anchor="middle">I</text>
    <rect x="82" y="44" width="11" height="7" rx="1" fill="none" stroke="#8B4000" stroke-width="0.5"/><text x="87.5" y="50" text-anchor="middle">L</text>
    <rect x="95" y="44" width="11" height="7" rx="1" fill="none" stroke="#8B4000" stroke-width="0.5"/><text x="100.5" y="50" text-anchor="middle">O</text>
    <rect x="108" y="44" width="11" height="7" rx="1" fill="none" stroke="#8B4000" stroke-width="0.5"/><text x="113.5" y="50" text-anchor="middle">F</text>
    <rect x="121" y="44" width="11" height="7" rx="1" fill="none" stroke="#8B4000" stroke-width="0.5"/><text x="126.5" y="50" text-anchor="middle">T</text>
    <rect x="134" y="44" width="11" height="7" rx="1" fill="none" stroke="#8B4000" stroke-width="0.5"/><text x="139.5" y="50" text-anchor="middle">E</text>
    <rect x="147" y="44" width="11" height="7" rx="1" fill="none" stroke="#8B4000" stroke-width="0.5"/><text x="152.5" y="50" text-anchor="middle">C</text>
    <rect x="160" y="44" width="11" height="7" rx="1" fill="none" stroke="#8B4000" stroke-width="0.5"/><text x="165.5" y="50" text-anchor="middle">H</text>

    <!-- Layer label row 1 -->
    <text x="30" y="62" fill="#D4380D" font-size="5" opacity="0.8" font-weight="bold">[LAYER_1.00]</text>
    <!-- Attention weight numbers -->
    <text x="100" y="62" text-anchor="middle" fill="#5a3800" font-size="4.5">0.91 0.03 0.66 0.12 0.88 0.44</text>

    <!-- Row 2: token boxes -->
    <rect x="30" y="65" width="11" height="7" rx="1" fill="none" stroke="#8B4000" stroke-width="0.5"/><text x="35.5" y="71" text-anchor="middle">AI</text>
    <rect x="43" y="65" width="11" height="7" rx="1" fill="none" stroke="#8B4000" stroke-width="0.5"/><text x="48.5" y="71" text-anchor="middle">NE</text>
    <rect x="56" y="65" width="11" height="7" rx="1" fill="none" stroke="#8B4000" stroke-width="0.5"/><text x="61.5" y="71" text-anchor="middle">UR</text>
    <rect x="69" y="65" width="11" height="7" rx="1" fill="none" stroke="#8B4000" stroke-width="0.5"/><text x="74.5" y="71" text-anchor="middle">AL</text>
    <rect x="82" y="65" width="11" height="7" rx="1" fill="none" stroke="#8B4000" stroke-width="0.5"/><text x="87.5" y="71" text-anchor="middle">##</text>
    <rect x="95" y="65" width="11" height="7" rx="1" fill="none" stroke="#8B4000" stroke-width="0.5"/><text x="100.5" y="71" text-anchor="middle">DE</text>
    <rect x="108" y="65" width="11" height="7" rx="1" fill="none" stroke="#8B4000" stroke-width="0.5"/><text x="113.5" y="71" text-anchor="middle">VIL</text>
    <rect x="121" y="65" width="11" height="7" rx="1" fill="none" stroke="#8B4000" stroke-width="0.5"/><text x="126.5" y="71" text-anchor="middle">##</text>

    <!-- Layer label row 2 -->
    <text x="30" y="82" fill="#D4380D" font-size="5" opacity="0.8" font-weight="bold">[LAYER_3.33]</text>
    <text x="100" y="82" text-anchor="middle" fill="#5a3800" font-size="4.5">0.77 0.22 0.55 0.99 0.11 0.66</text>

    <!-- Row 3: more tokens -->
    <rect x="30" y="85" width="11" height="7" rx="1" fill="none" stroke="#C9A84C" stroke-width="0.6"/><text x="35.5" y="91" text-anchor="middle" fill="#8B4000">D</text>
    <rect x="43" y="85" width="11" height="7" rx="1" fill="none" stroke="#C9A84C" stroke-width="0.6"/><text x="48.5" y="91" text-anchor="middle" fill="#8B4000">T</text>
    <rect x="56" y="85" width="11" height="7" rx="1" fill="none" stroke="#8B4000" stroke-width="0.5"/><text x="61.5" y="91" text-anchor="middle">666</text>
    <rect x="69" y="85" width="11" height="7" rx="1" fill="none" stroke="#8B4000" stroke-width="0.5"/><text x="74.5" y="91" text-anchor="middle">∞</text>
    <rect x="82" y="85" width="11" height="7" rx="1" fill="none" stroke="#8B4000" stroke-width="0.5"/><text x="87.5" y="91" text-anchor="middle">0</text>
    <rect x="95" y="85" width="11" height="7" rx="1" fill="none" stroke="#8B4000" stroke-width="0.5"/><text x="100.5" y="91" text-anchor="middle">π</text>
    <rect x="108" y="85" width="11" height="7" rx="1" fill="none" stroke="#8B4000" stroke-width="0.5"/><text x="113.5" y="91" text-anchor="middle">∑</text>
    <rect x="121" y="85" width="11" height="7" rx="1" fill="none" stroke="#8B4000" stroke-width="0.5"/><text x="126.5" y="91" text-anchor="middle">∇</text>

    <!-- Layer label HIGHLIGHT -->
    <text x="30" y="102" fill="#D4380D" font-size="5.5" opacity="0.95" font-weight="bold">[LAYER_6.66]</text>
    <text x="100" y="102" text-anchor="middle" fill="#5a3800" font-size="4.5">1.00 0.00 0.93 0.66 0.13 0.88</text>

    <!-- Row 4 -->
    <rect x="30" y="105" width="11" height="7" rx="1" fill="none" stroke="#8B4000" stroke-width="0.5"/><text x="35.5" y="111" text-anchor="middle">LO</text>
    <rect x="43" y="105" width="11" height="7" rx="1" fill="none" stroke="#8B4000" stroke-width="0.5"/><text x="48.5" y="111" text-anchor="middle">SS</text>
    <rect x="56" y="105" width="11" height="7" rx="1" fill="none" stroke="#8B4000" stroke-width="0.5"/><text x="61.5" y="111" text-anchor="middle">=</text>
    <rect x="69" y="105" width="11" height="7" rx="1" fill="none" stroke="#8B4000" stroke-width="0.5"/><text x="74.5" y="111" text-anchor="middle">0.6</text>
    <rect x="82" y="105" width="11" height="7" rx="1" fill="none" stroke="#8B4000" stroke-width="0.5"/><text x="87.5" y="111" text-anchor="middle">6</text>
    <rect x="95" y="105" width="11" height="7" rx="1" fill="none" stroke="#8B4000" stroke-width="0.5"/><text x="100.5" y="111" text-anchor="middle">6</text>

    <!-- Final layer label -->
    <text x="30" y="122" fill="#D4380D" font-size="5" opacity="0.7" font-weight="bold">[LAYER_9.99]</text>
    <text x="100" y="122" text-anchor="middle" fill="#5a3800" font-size="4.5">0.42 0.86 0.07 0.55 0.31 0.74</text>

    <!-- Bottom separator line on scroll -->
    <line x1="30" y1="127" x2="170" y2="127" stroke="#8B4000" stroke-width="0.5" opacity="0.5"/>
    <text x="100" y="135" text-anchor="middle" fill="#3a2000" font-size="5.5" font-weight="bold" letter-spacing="1">DevilOfTech · LLM v6.66</text>
    <text x="100" y="143" text-anchor="middle" fill="#5a3800" font-size="4.5">context_window=&#x221E; · temperature=0.666</text>
    <text x="100" y="152" text-anchor="middle" fill="#5a3800" font-size="4.5">heads=13 · layers=66 · params=6.66B</text>
    <text x="100" y="161" text-anchor="middle" fill="#3a2000" font-size="4.5" opacity="0.6">&#x2663; summoned from the depths &#x2663;</text>
  </g>

  <!-- Scroll top curl (left) -->
  <ellipse cx="24" cy="38" rx="10" ry="14" fill="url(#h80curlL)" stroke="#C9A84C" stroke-width="0.8"/>
  <ellipse cx="24" cy="38" rx="6" ry="9" fill="#1a1200" stroke="#C9A84C" stroke-width="0.5" opacity="0.7"/>
  <!-- Scroll top curl (right) -->
  <ellipse cx="176" cy="38" rx="10" ry="14" fill="url(#h80curlR)" stroke="#C9A84C" stroke-width="0.8"/>
  <ellipse cx="176" cy="38" rx="6" ry="9" fill="#1a1200" stroke="#C9A84C" stroke-width="0.5" opacity="0.7"/>
  <!-- Scroll bottom curl (left) -->
  <ellipse cx="24" cy="166" rx="10" ry="14" fill="url(#h80curlL)" stroke="#C9A84C" stroke-width="0.8"/>
  <ellipse cx="24" cy="166" rx="6" ry="9" fill="#1a1200" stroke="#C9A84C" stroke-width="0.5" opacity="0.7"/>
  <!-- Scroll bottom curl (right) -->
  <ellipse cx="176" cy="166" rx="10" ry="14" fill="url(#h80curlR)" stroke="#C9A84C" stroke-width="0.8"/>
  <ellipse cx="176" cy="166" rx="6" ry="9" fill="#1a1200" stroke="#C9A84C" stroke-width="0.5" opacity="0.7"/>

  <!-- Scroll edge lines -->
  <line x1="24" y1="38" x2="176" y2="38" stroke="#C9A84C" stroke-width="0.8" opacity="0.6"/>
  <line x1="24" y1="166" x2="176" y2="166" stroke="#C9A84C" stroke-width="0.8" opacity="0.6"/>
</svg>`,
  },
]
