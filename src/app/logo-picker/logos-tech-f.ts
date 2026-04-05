import type { Logo } from './logos'

export const LOGOS_F: Logo[] = [
  {
    id: 51,
    group: 'F',
    groupName: 'Circuit / PCB',
    label: 'PCB Trace Horns',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="f51glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="2.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <radialGradient id="f51bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1a1410"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </radialGradient>
  </defs>
  <!-- Background -->
  <rect width="200" height="200" fill="url(#f51bg)"/>
  <!-- Dot grid (PCB style) -->
  <g opacity="0.18" fill="#C9A84C">
    <circle cx="20" cy="20" r="1"/><circle cx="40" cy="20" r="1"/><circle cx="60" cy="20" r="1"/><circle cx="80" cy="20" r="1"/><circle cx="100" cy="20" r="1"/><circle cx="120" cy="20" r="1"/><circle cx="140" cy="20" r="1"/><circle cx="160" cy="20" r="1"/><circle cx="180" cy="20" r="1"/>
    <circle cx="20" cy="40" r="1"/><circle cx="40" cy="40" r="1"/><circle cx="60" cy="40" r="1"/><circle cx="80" cy="40" r="1"/><circle cx="100" cy="40" r="1"/><circle cx="120" cy="40" r="1"/><circle cx="140" cy="40" r="1"/><circle cx="160" cy="40" r="1"/><circle cx="180" cy="40" r="1"/>
    <circle cx="20" cy="60" r="1"/><circle cx="40" cy="60" r="1"/><circle cx="60" cy="60" r="1"/><circle cx="80" cy="60" r="1"/><circle cx="100" cy="60" r="1"/><circle cx="120" cy="60" r="1"/><circle cx="140" cy="60" r="1"/><circle cx="160" cy="60" r="1"/><circle cx="180" cy="60" r="1"/>
    <circle cx="20" cy="80" r="1"/><circle cx="40" cy="80" r="1"/><circle cx="60" cy="80" r="1"/><circle cx="80" cy="80" r="1"/><circle cx="100" cy="80" r="1"/><circle cx="120" cy="80" r="1"/><circle cx="140" cy="80" r="1"/><circle cx="160" cy="80" r="1"/><circle cx="180" cy="80" r="1"/>
    <circle cx="20" cy="100" r="1"/><circle cx="40" cy="100" r="1"/><circle cx="60" cy="100" r="1"/><circle cx="80" cy="100" r="1"/><circle cx="100" cy="100" r="1"/><circle cx="120" cy="100" r="1"/><circle cx="140" cy="100" r="1"/><circle cx="160" cy="100" r="1"/><circle cx="180" cy="100" r="1"/>
    <circle cx="20" cy="120" r="1"/><circle cx="40" cy="120" r="1"/><circle cx="60" cy="120" r="1"/><circle cx="80" cy="120" r="1"/><circle cx="100" cy="120" r="1"/><circle cx="120" cy="120" r="1"/><circle cx="140" cy="120" r="1"/><circle cx="160" cy="120" r="1"/><circle cx="180" cy="120" r="1"/>
    <circle cx="20" cy="140" r="1"/><circle cx="40" cy="140" r="1"/><circle cx="60" cy="140" r="1"/><circle cx="80" cy="140" r="1"/><circle cx="100" cy="140" r="1"/><circle cx="120" cy="140" r="1"/><circle cx="140" cy="140" r="1"/><circle cx="160" cy="140" r="1"/><circle cx="180" cy="140" r="1"/>
    <circle cx="20" cy="160" r="1"/><circle cx="40" cy="160" r="1"/><circle cx="60" cy="160" r="1"/><circle cx="80" cy="160" r="1"/><circle cx="100" cy="160" r="1"/><circle cx="120" cy="160" r="1"/><circle cx="140" cy="160" r="1"/><circle cx="160" cy="160" r="1"/><circle cx="180" cy="160" r="1"/>
  </g>
  <!-- Devil face circle -->
  <circle cx="100" cy="105" r="38" fill="#2a0a04" stroke="#D4380D" stroke-width="2.5"/>
  <!-- Eyes -->
  <ellipse cx="88" cy="100" rx="5" ry="6" fill="#D4380D" opacity="0.9"/>
  <ellipse cx="112" cy="100" rx="5" ry="6" fill="#D4380D" opacity="0.9"/>
  <!-- Grin -->
  <path d="M82 116 Q100 130 118 116" fill="none" stroke="#f5edd8" stroke-width="2" stroke-linecap="round"/>
  <line x1="88" y1="116" x2="88" y2="122" stroke="#f5edd8" stroke-width="1.5"/>
  <line x1="100" y1="118" x2="100" y2="125" stroke="#f5edd8" stroke-width="1.5"/>
  <line x1="112" y1="116" x2="112" y2="122" stroke="#f5edd8" stroke-width="1.5"/>
  <!-- Left horn PCB trace: up then left then up -->
  <g filter="url(#f51glow)" stroke="#D4380D" stroke-width="2.5" fill="none" stroke-linecap="square">
    <polyline points="82,67 82,52 60,52 60,22"/>
  </g>
  <!-- Right horn PCB trace: up then right then up -->
  <g filter="url(#f51glow)" stroke="#D4380D" stroke-width="2.5" fill="none" stroke-linecap="square">
    <polyline points="118,67 118,52 140,52 140,22"/>
  </g>
  <!-- Solder pads: joints and endpoints -->
  <g fill="#C9A84C">
    <circle cx="82" cy="52" r="4"/>
    <circle cx="60" cy="52" r="4"/>
    <circle cx="60" cy="22" r="4"/>
    <circle cx="118" cy="52" r="4"/>
    <circle cx="140" cy="52" r="4"/>
    <circle cx="140" cy="22" r="4"/>
  </g>
  <!-- Wordmark -->
  <text x="100" y="162" text-anchor="middle" font-family="Courier New, monospace" font-size="9" font-weight="700" fill="#C9A84C" letter-spacing="2">DEVILOFTECH</text>
</svg>`,
  },
  {
    id: 52,
    group: 'F',
    groupName: 'Circuit / PCB',
    label: 'IC Chip Devil',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="f52bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1a1410"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </radialGradient>
    <filter id="f52glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="1.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <!-- Background -->
  <rect width="200" height="200" fill="url(#f52bg)"/>
  <!-- IC chip body -->
  <rect x="55" y="38" width="90" height="120" rx="4" ry="4" fill="#0D0A07" stroke="#C9A84C" stroke-width="2"/>
  <!-- Notch at top center -->
  <circle cx="100" cy="38" r="8" fill="#0D0A07" stroke="#C9A84C" stroke-width="2"/>
  <!-- Left pins (5) -->
  <g fill="#C9A84C">
    <rect x="38" y="52" width="17" height="8" rx="1"/>
    <rect x="38" y="68" width="17" height="8" rx="1"/>
    <rect x="38" y="84" width="17" height="8" rx="1"/>
    <rect x="38" y="100" width="17" height="8" rx="1"/>
    <rect x="38" y="116" width="17" height="8" rx="1"/>
  </g>
  <!-- Right pins (5) -->
  <g fill="#C9A84C">
    <rect x="145" y="52" width="17" height="8" rx="1"/>
    <rect x="145" y="68" width="17" height="8" rx="1"/>
    <rect x="145" y="84" width="17" height="8" rx="1"/>
    <rect x="145" y="100" width="17" height="8" rx="1"/>
    <rect x="145" y="116" width="17" height="8" rx="1"/>
  </g>
  <!-- Devil face inside chip -->
  <!-- Horns -->
  <path d="M86 62 Q80 50 84 44 Q88 52 90 60Z" fill="#D4380D"/>
  <path d="M114 62 Q120 50 116 44 Q112 52 110 60Z" fill="#D4380D"/>
  <!-- Face circle -->
  <circle cx="100" cy="88" r="28" fill="#1a0502" stroke="#D4380D" stroke-width="1.5"/>
  <!-- Eyes -->
  <ellipse cx="90" cy="84" rx="5" ry="6" fill="#D4380D" filter="url(#f52glow)"/>
  <ellipse cx="110" cy="84" rx="5" ry="6" fill="#D4380D" filter="url(#f52glow)"/>
  <ellipse cx="91" cy="85" rx="2.5" ry="3" fill="#0D0A07"/>
  <ellipse cx="111" cy="85" rx="2.5" ry="3" fill="#0D0A07"/>
  <!-- Grin -->
  <path d="M84 98 Q100 112 116 98" fill="none" stroke="#f5edd8" stroke-width="2" stroke-linecap="round"/>
  <line x1="90" y1="98" x2="90" y2="103" stroke="#f5edd8" stroke-width="1.2"/>
  <line x1="100" y1="100" x2="100" y2="106" stroke="#f5edd8" stroke-width="1.2"/>
  <line x1="110" y1="98" x2="110" y2="103" stroke="#f5edd8" stroke-width="1.2"/>
  <!-- Chip label -->
  <text x="100" y="146" text-anchor="middle" font-family="Courier New, monospace" font-size="8" font-weight="700" fill="#C9A84C" letter-spacing="1.5">DOT-666</text>
</svg>`,
  },
  {
    id: 53,
    group: 'F',
    groupName: 'Circuit / PCB',
    label: 'Minimal Trace Horns',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="f53bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#100C08"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </radialGradient>
  </defs>
  <!-- Background -->
  <rect width="200" height="200" fill="url(#f53bg)"/>
  <!-- Left horn: up then left then up -->
  <polyline points="76,110 76,80 52,80 52,40"
    fill="none" stroke="#D4380D" stroke-width="3" stroke-linecap="square" stroke-linejoin="miter"/>
  <!-- Right horn: up then right then up -->
  <polyline points="124,110 124,80 148,80 148,40"
    fill="none" stroke="#D4380D" stroke-width="3" stroke-linecap="square" stroke-linejoin="miter"/>
  <!-- Solder pads at joints -->
  <g fill="#C9A84C">
    <circle cx="76" cy="80" r="5"/>
    <circle cx="52" cy="80" r="5"/>
    <circle cx="52" cy="40" r="5"/>
    <circle cx="124" cy="80" r="5"/>
    <circle cx="148" cy="80" r="5"/>
    <circle cx="148" cy="40" r="5"/>
  </g>
  <!-- "DT" large gold monospace -->
  <text x="100" y="122" text-anchor="middle" font-family="Courier New, monospace" font-size="36" font-weight="700" fill="#C9A84C" letter-spacing="4">DT</text>
  <!-- Gold divider line -->
  <line x1="40" y1="136" x2="160" y2="136" stroke="#C9A84C" stroke-width="0.8" opacity="0.6"/>
  <!-- Wordmark -->
  <text x="100" y="152" text-anchor="middle" font-family="Courier New, monospace" font-size="9" font-weight="700" fill="rgba(201,168,76,0.7)" letter-spacing="2.5">DEVILOFTECH</text>
</svg>`,
  },
  {
    id: 54,
    group: 'F',
    groupName: 'Circuit / PCB',
    label: 'Hex Chip Face',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="f54bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1a1410"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </radialGradient>
    <filter id="f54glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <clipPath id="f54hex">
      <polygon points="100,12 183,57 183,143 100,188 17,143 17,57"/>
    </clipPath>
  </defs>
  <!-- Background -->
  <rect width="200" height="200" fill="url(#f54bg)"/>
  <!-- Hex grid behind face (very faint) -->
  <g clip-path="url(#f54hex)" fill="none" stroke="#C9A84C" stroke-width="0.5" opacity="0.1">
    <polygon points="100,40 121,52 121,76 100,88 79,76 79,52"/>
    <polygon points="142,64 163,76 163,100 142,112 121,100 121,76"/>
    <polygon points="58,64 79,76 79,100 58,112 37,100 37,76"/>
    <polygon points="100,88 121,100 121,124 100,136 79,124 79,100"/>
    <polygon points="142,112 163,124 163,148 142,160 121,148 121,124"/>
    <polygon points="58,112 79,124 79,148 58,160 37,148 37,124"/>
    <polygon points="100,136 121,148 121,172 100,184 79,172 79,148"/>
  </g>
  <!-- Hex border -->
  <polygon points="100,12 183,57 183,143 100,188 17,143 17,57"
    fill="none" stroke="#C9A84C" stroke-width="3"/>
  <!-- Horns -->
  <path d="M84 76 Q76 56 80 46 Q86 58 88 72Z" fill="#D4380D"/>
  <path d="M116 76 Q124 56 120 46 Q114 58 112 72Z" fill="#D4380D"/>
  <!-- Face circle -->
  <circle cx="100" cy="106" r="46" fill="#150805" stroke="#D4380D" stroke-width="1.5"/>
  <!-- Eyes -->
  <ellipse cx="86" cy="100" rx="7" ry="8" fill="#D4380D" filter="url(#f54glow)"/>
  <ellipse cx="114" cy="100" rx="7" ry="8" fill="#D4380D" filter="url(#f54glow)"/>
  <ellipse cx="87" cy="101" rx="3.5" ry="4" fill="#0D0A07"/>
  <ellipse cx="115" cy="101" rx="3.5" ry="4" fill="#0D0A07"/>
  <!-- Gold horns accent -->
  <path d="M84 76 Q76 56 80 46" fill="none" stroke="#C9A84C" stroke-width="1" opacity="0.6"/>
  <path d="M116 76 Q124 56 120 46" fill="none" stroke="#C9A84C" stroke-width="1" opacity="0.6"/>
  <!-- Grin -->
  <path d="M78 118 Q100 138 122 118" fill="none" stroke="#f5edd8" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="86" y1="118" x2="86" y2="125" stroke="#f5edd8" stroke-width="1.5"/>
  <line x1="100" y1="121" x2="100" y2="129" stroke="#f5edd8" stroke-width="1.5"/>
  <line x1="114" y1="118" x2="114" y2="125" stroke="#f5edd8" stroke-width="1.5"/>
  <!-- Version label -->
  <text x="100" y="178" text-anchor="middle" font-family="Courier New, monospace" font-size="8" font-weight="700" fill="#C9A84C" letter-spacing="1.5" opacity="0.8">v6.6.6</text>
</svg>`,
  },
  {
    id: 55,
    group: 'F',
    groupName: 'Circuit / PCB',
    label: 'Circuit Pitchfork',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="f55bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1a1410"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </radialGradient>
    <filter id="f55glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <!-- Background -->
  <rect width="200" height="200" fill="url(#f55bg)"/>
  <!-- Faint grid -->
  <g stroke="#C9A84C" stroke-width="0.4" opacity="0.08">
    <line x1="40" y1="0" x2="40" y2="200"/><line x1="80" y1="0" x2="80" y2="200"/>
    <line x1="120" y1="0" x2="120" y2="200"/><line x1="160" y1="0" x2="160" y2="200"/>
    <line x1="0" y1="40" x2="200" y2="40"/><line x1="0" y1="80" x2="200" y2="80"/>
    <line x1="0" y1="120" x2="200" y2="120"/><line x1="0" y1="160" x2="200" y2="160"/>
  </g>
  <!-- PCB pitchfork traces (gold, right-angle) -->
  <!-- Handle: vertical -->
  <line x1="100" y1="160" x2="100" y2="100" stroke="#C9A84C" stroke-width="4" stroke-linecap="square" filter="url(#f55glow)"/>
  <!-- Horizontal split at top of handle -->
  <line x1="60" y1="100" x2="140" y2="100" stroke="#C9A84C" stroke-width="4" stroke-linecap="square" filter="url(#f55glow)"/>
  <!-- Left prong: down from 60,100 to 60,80 then up -->
  <line x1="60" y1="100" x2="60" y2="24" stroke="#C9A84C" stroke-width="4" stroke-linecap="square" filter="url(#f55glow)"/>
  <!-- Center prong: straight up from 100,100 -->
  <line x1="100" y1="100" x2="100" y2="24" stroke="#C9A84C" stroke-width="4" stroke-linecap="square" filter="url(#f55glow)"/>
  <!-- Right prong: up from 140,100 -->
  <line x1="140" y1="100" x2="140" y2="24" stroke="#C9A84C" stroke-width="4" stroke-linecap="square" filter="url(#f55glow)"/>
  <!-- Solder pads at all joints and tips -->
  <g fill="#C9A84C">
    <!-- Tips -->
    <circle cx="60" cy="24" r="5.5"/>
    <circle cx="100" cy="24" r="5.5"/>
    <circle cx="140" cy="24" r="5.5"/>
    <!-- Split joints -->
    <circle cx="60" cy="100" r="5.5"/>
    <circle cx="100" cy="100" r="5.5"/>
    <circle cx="140" cy="100" r="5.5"/>
    <!-- Handle base -->
    <circle cx="100" cy="160" r="5.5"/>
  </g>
  <!-- Ember glow on tips -->
  <g fill="#D4380D" opacity="0.5" filter="url(#f55glow)">
    <circle cx="60" cy="24" r="3"/>
    <circle cx="100" cy="24" r="3"/>
    <circle cx="140" cy="24" r="3"/>
  </g>
  <!-- Wordmark -->
  <text x="100" y="184" text-anchor="middle" font-family="Courier New, monospace" font-size="9" font-weight="700" fill="#C9A84C" letter-spacing="2">DEVILOFTECH</text>
</svg>`,
  },
  {
    id: 56,
    group: 'F',
    groupName: 'Circuit / PCB',
    label: 'GPIO Pin Devil',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="f56bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1a1410"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </radialGradient>
    <filter id="f56glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="1.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <!-- Background -->
  <rect width="200" height="200" fill="url(#f56bg)"/>
  <!-- GPIO header: 2 rows × 8 cols of pins above face -->
  <!-- Row 1 -->
  <g fill="#C9A84C">
    <rect x="30" y="16" width="14" height="10" rx="1"/>
    <rect x="50" y="16" width="14" height="10" rx="1"/>
    <rect x="70" y="16" width="14" height="10" rx="1"/>
    <rect x="90" y="16" width="14" height="10" rx="1"/>
    <rect x="110" y="16" width="14" height="10" rx="1"/>
    <rect x="130" y="16" width="14" height="10" rx="1"/>
    <rect x="150" y="16" width="14" height="10" rx="1"/>
    <rect x="170" y="16" width="14" height="10" rx="1"/>
  </g>
  <!-- Row 2 -->
  <g fill="#C9A84C" opacity="0.65">
    <rect x="30" y="30" width="14" height="10" rx="1"/>
    <rect x="50" y="30" width="14" height="10" rx="1"/>
    <rect x="70" y="30" width="14" height="10" rx="1"/>
    <rect x="90" y="30" width="14" height="10" rx="1"/>
    <rect x="110" y="30" width="14" height="10" rx="1"/>
    <rect x="130" y="30" width="14" height="10" rx="1"/>
    <rect x="150" y="30" width="14" height="10" rx="1"/>
    <rect x="170" y="30" width="14" height="10" rx="1"/>
  </g>
  <!-- Pin labels left side -->
  <g font-family="Courier New, monospace" font-size="6" fill="rgba(201,168,76,0.5)">
    <text x="24" y="23">1</text>
    <text x="24" y="37">2</text>
  </g>
  <!-- Face oval -->
  <ellipse cx="100" cy="118" rx="56" ry="60" fill="#150805" stroke="#D4380D" stroke-width="2"/>
  <!-- Horns -->
  <path d="M80 68 Q70 50 74 38 Q80 52 84 66Z" fill="#C9A84C"/>
  <path d="M120 68 Q130 50 126 38 Q120 52 116 66Z" fill="#C9A84C"/>
  <!-- Eyes -->
  <ellipse cx="84" cy="106" rx="8" ry="9" fill="#D4380D" filter="url(#f56glow)"/>
  <ellipse cx="116" cy="106" rx="8" ry="9" fill="#D4380D" filter="url(f56glow)"/>
  <ellipse cx="85" cy="107" rx="4" ry="5" fill="#0D0A07"/>
  <ellipse cx="117" cy="107" rx="4" ry="5" fill="#0D0A07"/>
  <!-- Grin -->
  <path d="M74 126 Q100 148 126 126" fill="none" stroke="#f5edd8" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="84" y1="126" x2="84" y2="133" stroke="#f5edd8" stroke-width="1.5"/>
  <line x1="100" y1="129" x2="100" y2="137" stroke="#f5edd8" stroke-width="1.5"/>
  <line x1="116" y1="126" x2="116" y2="133" stroke="#f5edd8" stroke-width="1.5"/>
  <!-- Label -->
  <text x="100" y="190" text-anchor="middle" font-family="Courier New, monospace" font-size="9" font-weight="700" fill="#C9A84C" letter-spacing="2">DEVIL.GPIO</text>
</svg>`,
  },
  {
    id: 57,
    group: 'F',
    groupName: 'Circuit / PCB',
    label: 'Copper Pour Devil',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="f57bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1a1410"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </radialGradient>
    <!-- Diagonal hatch pattern for copper pour -->
    <pattern id="f57hatch" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="8" stroke="#D4380D" stroke-width="2" opacity="0.7"/>
      <line x1="4" y1="0" x2="4" y2="8" stroke="#C9A84C" stroke-width="1.2" opacity="0.5"/>
    </pattern>
    <!-- Clip to devil silhouette -->
    <clipPath id="f57clip">
      <!-- Devil head: round face + horns -->
      <path d="M72 82 Q66 58 70 44 Q78 60 82 78
               A46 46 0 0 1 100 68
               A46 46 0 0 1 118 78
               Q122 60 130 44 Q134 58 128 82
               A46 46 0 1 1 72 82Z"/>
    </clipPath>
  </defs>
  <!-- Background -->
  <rect width="200" height="200" fill="url(#f57bg)"/>
  <!-- PCB traces off edges (outside silhouette) -->
  <g stroke="#C9A84C" stroke-width="2" fill="none" stroke-linecap="square" opacity="0.5">
    <polyline points="0,80 30,80 30,60"/>
    <polyline points="0,120 25,120 25,140 40,140"/>
    <polyline points="200,70 172,70 172,50"/>
    <polyline points="200,130 175,130 175,150 160,150"/>
    <polyline points="80,200 80,178 60,178"/>
    <polyline points="120,200 120,175 140,175"/>
  </g>
  <!-- Solder pads on trace joints -->
  <g fill="#C9A84C" opacity="0.5">
    <circle cx="30" cy="80" r="3"/><circle cx="30" cy="60" r="3"/>
    <circle cx="25" cy="120" r="3"/><circle cx="25" cy="140" r="3"/>
    <circle cx="172" cy="70" r="3"/><circle cx="172" cy="50" r="3"/>
    <circle cx="175" cy="130" r="3"/><circle cx="175" cy="150" r="3"/>
    <circle cx="80" cy="178" r="3"/><circle cx="60" cy="178" r="3"/>
    <circle cx="120" cy="175" r="3"/><circle cx="140" cy="175" r="3"/>
  </g>
  <!-- Devil silhouette filled with copper pour hatch -->
  <path d="M72 82 Q66 58 70 44 Q78 60 82 78
           A46 46 0 0 1 100 68
           A46 46 0 0 1 118 78
           Q122 60 130 44 Q134 58 128 82
           A46 46 0 1 1 72 82Z"
    fill="url(#f57hatch)" stroke="#C9A84C" stroke-width="2"/>
  <!-- Hatching inner fill for more density using clip -->
  <rect x="0" y="0" width="200" height="200" fill="url(#f57hatch)" clip-path="url(#f57clip)" opacity="0.3"/>
</svg>`,
  },
  {
    id: 58,
    group: 'F',
    groupName: 'Circuit / PCB',
    label: 'SMD Eyes Devil',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="f58bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1a1410"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </radialGradient>
    <filter id="f58glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <!-- Background -->
  <rect width="200" height="200" fill="url(#f58bg)"/>
  <!-- Horns (gold) -->
  <path d="M80 72 Q72 52 76 38 Q84 54 86 70Z" fill="#C9A84C"/>
  <path d="M120 72 Q128 52 124 38 Q116 54 114 70Z" fill="#C9A84C"/>
  <!-- Face circle -->
  <circle cx="100" cy="112" r="56" fill="#150805" stroke="#D4380D" stroke-width="2"/>
  <!-- SMD Resistor left eye: gold rectangle + connection pads -->
  <g filter="url(f58glow)">
    <rect x="68" y="98" width="24" height="14" rx="2" fill="#C9A84C"/>
    <rect x="62" y="101" width="6" height="8" rx="1" fill="#C9A84C" opacity="0.8"/>
    <rect x="92" y="101" width="6" height="8" rx="1" fill="#C9A84C" opacity="0.8"/>
    <!-- Resistor body detail -->
    <line x1="74" y1="103" x2="74" y2="110" stroke="#0D0A07" stroke-width="1.5"/>
    <line x1="80" y1="103" x2="80" y2="110" stroke="#0D0A07" stroke-width="1.5"/>
    <line x1="86" y1="103" x2="86" y2="110" stroke="#0D0A07" stroke-width="1.5"/>
  </g>
  <!-- SMD Resistor right eye -->
  <g filter="url(f58glow)">
    <rect x="108" y="98" width="24" height="14" rx="2" fill="#C9A84C"/>
    <rect x="102" y="101" width="6" height="8" rx="1" fill="#C9A84C" opacity="0.8"/>
    <rect x="132" y="101" width="6" height="8" rx="1" fill="#C9A84C" opacity="0.8"/>
    <line x1="114" y1="103" x2="114" y2="110" stroke="#0D0A07" stroke-width="1.5"/>
    <line x1="120" y1="103" x2="120" y2="110" stroke="#0D0A07" stroke-width="1.5"/>
    <line x1="126" y1="103" x2="126" y2="110" stroke="#0D0A07" stroke-width="1.5"/>
  </g>
  <!-- Capacitor nose: two parallel lines -->
  <g stroke="#f5edd8" stroke-width="2.5" stroke-linecap="round">
    <line x1="91" y1="122" x2="109" y2="122"/>
    <line x1="91" y1="128" x2="109" y2="128"/>
  </g>
  <!-- Transistor mouth (3-terminal symbol) -->
  <!-- Base line vertical -->
  <line x1="100" y1="138" x2="100" y2="152" stroke="#f5edd8" stroke-width="2"/>
  <!-- Collector -->
  <line x1="100" y1="140" x2="116" y2="133" stroke="#f5edd8" stroke-width="2" stroke-linecap="round"/>
  <!-- Emitter with arrow -->
  <line x1="100" y1="148" x2="116" y2="155" stroke="#f5edd8" stroke-width="2" stroke-linecap="round"/>
  <polygon points="116,155 110,150 112,157" fill="#f5edd8"/>
  <!-- Base terminal -->
  <line x1="84" y1="144" x2="100" y2="144" stroke="#f5edd8" stroke-width="2"/>
</svg>`,
  },
  {
    id: 59,
    group: 'F',
    groupName: 'Circuit / PCB',
    label: 'PCB Badge Circle',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="f59bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1a1410"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </radialGradient>
    <radialGradient id="f59face" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#2a0a04"/>
      <stop offset="100%" stop-color="#150302"/>
    </radialGradient>
    <filter id="f59glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="2.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <!-- Background -->
  <rect width="200" height="200" fill="url(#f59bg)"/>
  <!-- Outer ring -->
  <circle cx="100" cy="100" r="92" fill="none" stroke="#C9A84C" stroke-width="2.5"/>
  <!-- PCB routing traces on outer ring (8 pads around circumference) -->
  <!-- Top -->
  <circle cx="100" cy="10" r="4" fill="#C9A84C"/>
  <!-- Top-right -->
  <circle cx="165" cy="35" r="4" fill="#C9A84C"/>
  <!-- Right -->
  <circle cx="190" cy="100" r="4" fill="#C9A84C"/>
  <!-- Bottom-right -->
  <circle cx="165" cy="165" r="4" fill="#C9A84C"/>
  <!-- Bottom -->
  <circle cx="100" cy="190" r="4" fill="#C9A84C"/>
  <!-- Bottom-left -->
  <circle cx="35" cy="165" r="4" fill="#C9A84C"/>
  <!-- Left -->
  <circle cx="10" cy="100" r="4" fill="#C9A84C"/>
  <!-- Top-left -->
  <circle cx="35" cy="35" r="4" fill="#C9A84C"/>
  <!-- Connecting trace segments between pads -->
  <g stroke="#C9A84C" stroke-width="1.5" fill="none" opacity="0.5">
    <line x1="100" y1="10" x2="100" y2="14"/>
    <line x1="165" y1="35" x2="162" y2="38"/>
    <line x1="190" y1="100" x2="186" y2="100"/>
    <line x1="165" y1="165" x2="162" y2="162"/>
    <line x1="100" y1="190" x2="100" y2="186"/>
    <line x1="35" y1="165" x2="38" y2="162"/>
    <line x1="10" y1="100" x2="14" y2="100"/>
    <line x1="35" y1="35" x2="38" y2="38"/>
  </g>
  <!-- Inner circle for face -->
  <circle cx="100" cy="100" r="68" fill="url(#f59face)" stroke="#D4380D" stroke-width="1.5"/>
  <!-- Devil horns inside -->
  <path d="M83 68 Q76 52 80 40 Q86 54 88 66Z" fill="#D4380D"/>
  <path d="M117 68 Q124 52 120 40 Q114 54 112 66Z" fill="#D4380D"/>
  <!-- Eyes with ember glow -->
  <ellipse cx="86" cy="88" rx="7" ry="8" fill="#D4380D" filter="url(#f59glow)"/>
  <ellipse cx="114" cy="88" rx="7" ry="8" fill="#D4380D" filter="url(#f59glow)"/>
  <ellipse cx="87" cy="89" rx="3.5" ry="4" fill="#0D0A07"/>
  <ellipse cx="115" cy="89" rx="3.5" ry="4" fill="#0D0A07"/>
  <!-- Grin -->
  <path d="M78 108 Q100 128 122 108" fill="none" stroke="#f5edd8" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="87" y1="108" x2="87" y2="115" stroke="#f5edd8" stroke-width="1.5"/>
  <line x1="100" y1="111" x2="100" y2="119" stroke="#f5edd8" stroke-width="1.5"/>
  <line x1="113" y1="108" x2="113" y2="115" stroke="#f5edd8" stroke-width="1.5"/>
  <!-- Top arc text: PCB.v2 -->
  <path id="f59topArc" d="M 28,100 A 72,72 0 0,1 172,100" fill="none"/>
  <text font-family="Courier New, monospace" font-size="9" font-weight="700" fill="#C9A84C" letter-spacing="3">
    <textPath href="#f59topArc" startOffset="18%">PCB.v2</textPath>
  </text>
  <!-- Bottom arc text: DEVILOFTECH -->
  <path id="f59botArc" d="M 22,100 A 78,78 0 0,0 178,100" fill="none"/>
  <text font-family="Courier New, monospace" font-size="9" font-weight="700" fill="#C9A84C" letter-spacing="2">
    <textPath href="#f59botArc" startOffset="10%">DEVILOFTECH</textPath>
  </text>
</svg>`,
  },
  {
    id: 60,
    group: 'F',
    groupName: 'Circuit / PCB',
    label: 'Dev Board Stamp',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="f60bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1a1410"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </radialGradient>
    <filter id="f60glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="1.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <!-- Background -->
  <rect width="200" height="200" fill="url(#f60bg)"/>
  <!-- Board stamp border (rounded rectangle) -->
  <rect x="14" y="22" width="172" height="156" rx="10" ry="10" fill="#0D0A07" stroke="#C9A84C" stroke-width="2.5"/>
  <!-- Corner mounting holes -->
  <circle cx="30" cy="38" r="5" fill="#0D0A07" stroke="#C9A84C" stroke-width="1.5"/>
  <circle cx="170" cy="38" r="5" fill="#0D0A07" stroke="#C9A84C" stroke-width="1.5"/>
  <circle cx="30" cy="162" r="5" fill="#0D0A07" stroke="#C9A84C" stroke-width="1.5"/>
  <circle cx="170" cy="162" r="5" fill="#0D0A07" stroke="#C9A84C" stroke-width="1.5"/>
  <!-- Small devil face top-left -->
  <circle cx="50" cy="56" r="14" fill="#1a0502" stroke="#D4380D" stroke-width="1.5"/>
  <!-- Mini horns -->
  <path d="M44 44 Q40 36 42 30 Q46 36 47 43Z" fill="#D4380D" filter="url(#f60glow)"/>
  <path d="M56 44 Q60 36 58 30 Q54 36 53 43Z" fill="#D4380D" filter="url(#f60glow)"/>
  <!-- Mini eyes -->
  <ellipse cx="46" cy="53" rx="3" ry="3.5" fill="#D4380D" filter="url(#f60glow)"/>
  <ellipse cx="54" cy="53" rx="3" ry="3.5" fill="#D4380D" filter="url(#f60glow)"/>
  <!-- Mini grin -->
  <path d="M42 62 Q50 70 58 62" fill="none" stroke="#f5edd8" stroke-width="1.5" stroke-linecap="round"/>
  <!-- Board name: DEVIL-OF-TECH -->
  <text x="100" y="100" text-anchor="middle" font-family="Courier New, monospace" font-size="16" font-weight="700" fill="#f5edd8" letter-spacing="1">DEVIL-OF-TECH</text>
  <!-- Divider line -->
  <line x1="36" y1="110" x2="164" y2="110" stroke="#C9A84C" stroke-width="0.8" opacity="0.5"/>
  <!-- Specs -->
  <text x="100" y="128" text-anchor="middle" font-family="Courier New, monospace" font-size="10" fill="#C9A84C" letter-spacing="0.5">MCU: 666 MHz</text>
  <text x="100" y="144" text-anchor="middle" font-family="Courier New, monospace" font-size="10" fill="#C9A84C" letter-spacing="0.5">RAM: &#x221E;</text>
  <!-- Version bottom-right -->
  <text x="158" y="172" text-anchor="end" font-family="Courier New, monospace" font-size="8" fill="rgba(201,168,76,0.6)" letter-spacing="1">v1.0</text>
  <!-- Decorative PCB edge traces -->
  <g stroke="#C9A84C" stroke-width="1" opacity="0.25" fill="none" stroke-linecap="square">
    <polyline points="14,80 6,80 6,60 14,60"/>
    <polyline points="186,80 194,80 194,60 186,60"/>
    <polyline points="14,130 6,130 6,150 14,150"/>
    <polyline points="186,130 194,130 194,150 186,150"/>
  </g>
</svg>`,
  },
]
