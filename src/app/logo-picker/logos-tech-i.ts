import type { Logo } from './logos'

export const LOGOS_I: Logo[] = [
  {
    id: 81,
    group: 'I',
    groupName: 'Binary / Matrix',
    label: 'Binary Devil Face',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="i81bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1a1410"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </radialGradient>
    <clipPath id="i81faceClip">
      <circle cx="100" cy="105" r="58"/>
    </clipPath>
    <clipPath id="i81lhornClip">
      <polygon points="62,80 72,18 88,72"/>
    </clipPath>
    <clipPath id="i81rhornClip">
      <polygon points="112,72 128,18 138,80"/>
    </clipPath>
    <filter id="i81glow">
      <feGaussianBlur stdDeviation="1.2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <!-- Background -->
  <rect width="200" height="200" fill="url(#i81bg)"/>
  <!-- Face fill: binary rows inside clip -->
  <circle cx="100" cy="105" r="58" fill="#0D0A07" stroke="#D4380D" stroke-width="1.5"/>
  <!-- Binary text rows clipped to face -->
  <g clip-path="url(#i81faceClip)" font-family="Courier New, monospace" font-size="6.2" fill="#C9A84C" opacity="0.82" filter="url(#i81glow)">
    <text x="46" y="52">0 1 0 1 0 0 0 1 0 0 1 1</text>
    <text x="44" y="59">1 0 1 1 0 1 0 0 1 0 1 0 1</text>
    <text x="44" y="66">0 1 0 0 0 1 0 0 0 1 0 1 0 1</text>
    <text x="43" y="73">1 0 1 1 0 1 0 0 1 0 1 0 1 0 1</text>
    <text x="42" y="80">0 1 0 0 0 1 0 1 0 0 0 1 0 0 1 0</text>
    <text x="42" y="87" fill="#D4380D">0 1 1 0 0 1 0 1 0 1 1 0 0 1 0 1</text>
    <text x="42" y="94">1 0 0 1 0 1 0 0 1 0 1 0 0 1 0 1 0</text>
    <text x="42" y="101">0 1 0 1 0 0 0 1 0 1 0 1 0 0 1 0 1</text>
    <text x="42" y="108">1 0 1 0 0 1 0 1 0 0 1 0 1 0 0 1 0</text>
    <text x="42" y="115">0 0 1 0 1 0 1 0 1 0 0 1 0 1 0 0 1</text>
    <text x="42" y="122" fill="#D4380D">1 0 0 1 0 0 1 0 1 0 1 0 1 0 0 1 0</text>
    <text x="42" y="129">0 1 0 1 0 1 0 0 0 1 0 1 0 1 0 0 1</text>
    <text x="43" y="136">1 0 1 0 0 1 0 1 0 1 0 0 1 0 1 0</text>
    <text x="44" y="143">0 1 0 0 1 0 1 0 0 1 0 1 0 0 1</text>
    <text x="45" y="150">1 0 1 0 0 1 0 1 0 1 0 1 0</text>
    <text x="47" y="157">0 0 1 0 1 0 0 1 0 1 0</text>
  </g>
  <!-- Left horn filled with binary -->
  <polygon points="62,80 72,18 88,72" fill="#0D0A07" stroke="#D4380D" stroke-width="1.2"/>
  <g clip-path="url(#i81lhornClip)" font-family="Courier New, monospace" font-size="5.5" fill="#D4380D" opacity="0.9">
    <text x="63" y="32">101</text>
    <text x="62" y="40">0 1 0</text>
    <text x="61" y="48">1 0 1 1</text>
    <text x="61" y="56">0 1 0 1 0</text>
    <text x="61" y="64">1 0 0 1 0 1</text>
    <text x="61" y="72">0 1 0 1 0 0 1</text>
  </g>
  <!-- Right horn filled with binary -->
  <polygon points="112,72 128,18 138,80" fill="#0D0A07" stroke="#D4380D" stroke-width="1.2"/>
  <g clip-path="url(#i81rhornClip)" font-family="Courier New, monospace" font-size="5.5" fill="#D4380D" opacity="0.9">
    <text x="119" y="32">101</text>
    <text x="117" y="40">0 1 0</text>
    <text x="115" y="48">1 0 1 1</text>
    <text x="114" y="56">0 1 0 1 0</text>
    <text x="113" y="64">1 0 0 1 0 1</text>
    <text x="112" y="72">0 1 0 1 0 0 1</text>
  </g>
  <!-- Eye cutouts (dark ellipses over binary so they read clearly) -->
  <ellipse cx="82" cy="98" rx="11" ry="12" fill="#0D0A07" opacity="0.92"/>
  <ellipse cx="118" cy="98" rx="11" ry="12" fill="#0D0A07" opacity="0.92"/>
  <!-- Glowing eyes -->
  <ellipse cx="82" cy="98" rx="8" ry="9" fill="#D4380D" filter="url(#i81glow)"/>
  <ellipse cx="118" cy="98" rx="8" ry="9" fill="#D4380D" filter="url(#i81glow)"/>
  <ellipse cx="82" cy="99" rx="4" ry="5" fill="#0D0A07"/>
  <ellipse cx="118" cy="99" rx="4" ry="5" fill="#0D0A07"/>
  <!-- Grin line -->
  <path d="M76 122 Q100 138 124 122" fill="none" stroke="#C9A84C" stroke-width="2" stroke-linecap="round"/>
  <!-- Outer face circle border -->
  <circle cx="100" cy="105" r="58" fill="none" stroke="#D4380D" stroke-width="1.8" opacity="0.7"/>
</svg>`,
  },
  {
    id: 82,
    group: 'I',
    groupName: 'Binary / Matrix',
    label: 'Hex Devil',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="i82bg" cx="50%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#1a1410"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </radialGradient>
    <filter id="i82glow">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="i82softglow">
      <feGaussianBlur stdDeviation="1.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <!-- Background -->
  <rect width="200" height="200" fill="url(#i82bg)"/>
  <!-- Subtle grid lines -->
  <line x1="0" y1="100" x2="200" y2="100" stroke="#D4380D" stroke-width="0.3" opacity="0.15"/>
  <line x1="100" y1="0" x2="100" y2="200" stroke="#D4380D" stroke-width="0.3" opacity="0.15"/>
  <!-- The "0x" prefix in ember with devil horns on top -->
  <text x="16" y="96" font-family="Courier New, monospace" font-size="36" font-weight="bold" fill="#D4380D" filter="url(#i82softglow)">0x</text>
  <!-- Devil horns on "0" -->
  <path d="M19 48 Q14 34 20 26 Q26 38 24 50Z" fill="#D4380D" opacity="0.9"/>
  <path d="M38 48 Q42 34 38 26 Q33 38 34 50Z" fill="#D4380D" opacity="0.9"/>
  <!-- DEV1L in gold, larger -->
  <text x="100" y="100" text-anchor="middle" font-family="Courier New, monospace" font-size="42" font-weight="bold" fill="#C9A84C" filter="url(#i82glow)" letter-spacing="1">DEV1L</text>
  <!-- Separator line -->
  <line x1="18" y1="110" x2="182" y2="110" stroke="#D4380D" stroke-width="0.8" opacity="0.5"/>
  <!-- Comment line -->
  <text x="100" y="128" text-anchor="middle" font-family="Courier New, monospace" font-size="11" fill="#D4380D" opacity="0.85" letter-spacing="0.5">// undefined behavior</text>
  <!-- Bottom hex glow bar -->
  <rect x="18" y="148" width="164" height="1.5" fill="#C9A84C" opacity="0.18"/>
  <!-- Decorative corner brackets -->
  <text x="18" y="170" font-family="Courier New, monospace" font-size="9" fill="#C9A84C" opacity="0.4">&lt;deviloftech&gt;</text>
  <text x="100" y="186" text-anchor="middle" font-family="Courier New, monospace" font-size="7.5" fill="#D4380D" opacity="0.55" letter-spacing="2">0xD4380D  0xC9A84C</text>
</svg>`,
  },
  {
    id: 83,
    group: 'I',
    groupName: 'Binary / Matrix',
    label: 'Matrix Rain Devil',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="i83col1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#C9A84C" stop-opacity="0.9"/>
      <stop offset="60%" stop-color="#D4380D" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#D4380D" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="i83col2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#D4380D" stop-opacity="0.85"/>
      <stop offset="70%" stop-color="#C9A84C" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#C9A84C" stop-opacity="0.02"/>
    </linearGradient>
    <filter id="i83glow">
      <feGaussianBlur stdDeviation="1" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <!-- Background -->
  <rect width="200" height="200" fill="#0D0A07"/>
  <!-- Rain columns — staggered vertical streams -->
  <!-- Col 1 -->
  <text x="8"  y="14" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.9">1</text>
  <text x="8"  y="23" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.75">0</text>
  <text x="8"  y="32" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.6">D</text>
  <text x="8"  y="41" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.45">1</text>
  <text x="8"  y="50" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.3">0</text>
  <text x="8"  y="130" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.5">1</text>
  <text x="8"  y="139" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.35">0</text>
  <text x="8"  y="148" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.2">1</text>
  <!-- Col 2 -->
  <text x="22" y="28" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.9">4</text>
  <text x="22" y="37" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.75">0</text>
  <text x="22" y="46" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.6">1</text>
  <text x="22" y="55" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.4">E</text>
  <text x="22" y="140" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.45">0</text>
  <text x="22" y="149" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.3">1</text>
  <text x="22" y="158" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.15">0</text>
  <!-- Col 3 -->
  <text x="36" y="10" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.85">V</text>
  <text x="36" y="19" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.7">1</text>
  <text x="36" y="28" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.55">0</text>
  <text x="36" y="37" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.4">1</text>
  <text x="36" y="120" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.5">3</text>
  <text x="36" y="129" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.35">8</text>
  <text x="36" y="138" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.2">0</text>
  <!-- Col 4 -->
  <text x="50" y="20" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.9">I</text>
  <text x="50" y="29" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.75">0</text>
  <text x="50" y="38" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.6">D</text>
  <text x="50" y="47" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.45">1</text>
  <text x="50" y="56" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.3">0</text>
  <text x="50" y="145" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.4">L</text>
  <text x="50" y="154" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.25">1</text>
  <!-- Col 5 (center-left, BRIGHT — part of devil face) -->
  <text x="64" y="8"  font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.4">0</text>
  <text x="64" y="17" font-family="Courier New, monospace" font-size="8" fill="#f5edd8" opacity="0.95" filter="url(#i83glow)">1</text>
  <text x="64" y="26" font-family="Courier New, monospace" font-size="9" fill="#f5edd8" opacity="1"   filter="url(#i83glow)">^</text>
  <text x="64" y="35" font-family="Courier New, monospace" font-size="9" fill="#f5edd8" opacity="1"   filter="url(#i83glow)">1</text>
  <text x="64" y="44" font-family="Courier New, monospace" font-size="9" fill="#f5edd8" opacity="0.9" filter="url(#i83glow)">0</text>
  <text x="64" y="53" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.75">D</text>
  <text x="64" y="62" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.55">1</text>
  <text x="64" y="71" font-family="Courier New, monospace" font-size="9" fill="#f5edd8" opacity="1"   filter="url(#i83glow)">o</text>
  <text x="64" y="80" font-family="Courier New, monospace" font-size="9" fill="#f5edd8" opacity="0.9" filter="url(#i83glow)">1</text>
  <text x="64" y="89" font-family="Courier New, monospace" font-size="9" fill="#f5edd8" opacity="0.8" filter="url(#i83glow)">\</text>
  <text x="64" y="110" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.5">0</text>
  <text x="64" y="119" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.35">1</text>
  <!-- Col 6 (center, BRIGHT) -->
  <text x="78" y="12" font-family="Courier New, monospace" font-size="9" fill="#f5edd8" opacity="0.95" filter="url(#i83glow)">^</text>
  <text x="78" y="21" font-family="Courier New, monospace" font-size="9" fill="#f5edd8" opacity="1"   filter="url(#i83glow)">1</text>
  <text x="78" y="30" font-family="Courier New, monospace" font-size="9" fill="#f5edd8" opacity="1"   filter="url(#i83glow)">0</text>
  <text x="78" y="39" font-family="Courier New, monospace" font-size="9" fill="#f5edd8" opacity="0.9" filter="url(#i83glow)">D</text>
  <text x="78" y="48" font-family="Courier New, monospace" font-size="9" fill="#f5edd8" opacity="0.85" filter="url(#i83glow)">1</text>
  <text x="78" y="57" font-family="Courier New, monospace" font-size="9" fill="#f5edd8" opacity="0.9" filter="url(#i83glow)">@</text>
  <text x="78" y="66" font-family="Courier New, monospace" font-size="9" fill="#f5edd8" opacity="0.8" filter="url(#i83glow)">0</text>
  <text x="78" y="75" font-family="Courier New, monospace" font-size="9" fill="#f5edd8" opacity="0.75" filter="url(#i83glow)">1</text>
  <text x="78" y="84" font-family="Courier New, monospace" font-size="9" fill="#f5edd8" opacity="0.65" filter="url(#i83glow)">~</text>
  <text x="78" y="110" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.45">0</text>
  <text x="78" y="119" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.3">1</text>
  <!-- Col 7 (center-right, BRIGHT) -->
  <text x="92" y="16" font-family="Courier New, monospace" font-size="9" fill="#f5edd8" opacity="0.9"  filter="url(#i83glow)">^</text>
  <text x="92" y="25" font-family="Courier New, monospace" font-size="9" fill="#f5edd8" opacity="0.95" filter="url(#i83glow)">1</text>
  <text x="92" y="34" font-family="Courier New, monospace" font-size="9" fill="#f5edd8" opacity="1"    filter="url(#i83glow)">o</text>
  <text x="92" y="43" font-family="Courier New, monospace" font-size="9" fill="#f5edd8" opacity="0.9"  filter="url(#i83glow)">0</text>
  <text x="92" y="52" font-family="Courier New, monospace" font-size="9" fill="#f5edd8" opacity="0.8"  filter="url(#i83glow)">1</text>
  <text x="92" y="61" font-family="Courier New, monospace" font-size="9" fill="#f5edd8" opacity="0.75" filter="url(#i83glow)">/</text>
  <text x="92" y="70" font-family="Courier New, monospace" font-size="9" fill="#f5edd8" opacity="0.65" filter="url(#i83glow)">0</text>
  <text x="92" y="79" font-family="Courier New, monospace" font-size="9" fill="#f5edd8" opacity="0.55" filter="url(#i83glow)">~</text>
  <text x="92" y="112" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.45">1</text>
  <!-- Col 8 -->
  <text x="106" y="22" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.8">0</text>
  <text x="106" y="31" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.65">1</text>
  <text x="106" y="40" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.5">T</text>
  <text x="106" y="49" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.4">0</text>
  <text x="106" y="58" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.3">1</text>
  <text x="106" y="130" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.5">0</text>
  <text x="106" y="139" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.35">1</text>
  <!-- Col 9 -->
  <text x="120" y="15" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.85">1</text>
  <text x="120" y="24" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.7">0</text>
  <text x="120" y="33" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.55">E</text>
  <text x="120" y="42" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.4">1</text>
  <text x="120" y="51" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.28">0</text>
  <text x="120" y="140" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.45">C</text>
  <text x="120" y="149" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.3">1</text>
  <!-- Col 10 -->
  <text x="134" y="10" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.9">H</text>
  <text x="134" y="19" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.75">0</text>
  <text x="134" y="28" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.6">1</text>
  <text x="134" y="37" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.45">0</text>
  <text x="134" y="46" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.3">1</text>
  <text x="134" y="120" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.5">1</text>
  <text x="134" y="129" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.35">0</text>
  <!-- Col 11 -->
  <text x="148" y="18" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.85">0</text>
  <text x="148" y="27" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.7">1</text>
  <text x="148" y="36" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.55">0</text>
  <text x="148" y="45" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.4">D</text>
  <text x="148" y="54" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.28">1</text>
  <text x="148" y="135" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.45">0</text>
  <text x="148" y="144" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.3">1</text>
  <!-- Col 12 -->
  <text x="162" y="25" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.8">1</text>
  <text x="162" y="34" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.65">0</text>
  <text x="162" y="43" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.5">1</text>
  <text x="162" y="52" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.35">0</text>
  <text x="162" y="125" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.5">1</text>
  <text x="162" y="134" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.35">0</text>
  <!-- Col 13 -->
  <text x="176" y="12" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.75">0</text>
  <text x="176" y="21" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.6">1</text>
  <text x="176" y="30" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.45">0</text>
  <text x="176" y="39" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.3">6</text>
  <text x="176" y="130" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.45">1</text>
  <text x="176" y="139" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.3">0</text>
  <!-- Devil face label (bright center) -->
  <text x="100" y="102" text-anchor="middle" font-family="Courier New, monospace" font-size="11" font-weight="bold" fill="#f5edd8" filter="url(#i83glow)" opacity="0.95">^(o.o)^</text>
  <!-- Bottom label -->
  <text x="100" y="178" text-anchor="middle" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.6" letter-spacing="2">MATRIX DEVIL</text>
  <line x1="30" y1="183" x2="170" y2="183" stroke="#D4380D" stroke-width="0.5" opacity="0.3"/>
</svg>`,
  },
  {
    id: 84,
    group: 'I',
    groupName: 'Binary / Matrix',
    label: 'Binary Horns',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="i84bg" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#1a1410"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </radialGradient>
    <clipPath id="i84lhorn">
      <polygon points="18,130 50,14 82,130"/>
    </clipPath>
    <clipPath id="i84rhorn">
      <polygon points="118,130 150,14 182,130"/>
    </clipPath>
    <filter id="i84glow">
      <feGaussianBlur stdDeviation="2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <!-- Background -->
  <rect width="200" height="200" fill="url(#i84bg)"/>
  <!-- Left horn shape -->
  <polygon points="18,130 50,14 82,130" fill="#0D0A07" stroke="#D4380D" stroke-width="1.5"/>
  <!-- Right horn shape -->
  <polygon points="118,130 150,14 182,130" fill="#0D0A07" stroke="#D4380D" stroke-width="1.5"/>
  <!-- Binary "1"s filling left horn -->
  <g clip-path="url(#i84lhorn)" font-family="Courier New, monospace" font-size="7" fill="#D4380D" font-weight="bold">
    <text x="47" y="26">1</text>
    <text x="43" y="35">1 1</text>
    <text x="39" y="44">1 1 1</text>
    <text x="35" y="53">1 1 1 1</text>
    <text x="31" y="62">1 1 1 1 1</text>
    <text x="27" y="71">1 1 1 1 1 1</text>
    <text x="23" y="80">1 1 1 1 1 1 1</text>
    <text x="21" y="89">1 1 1 1 1 1 1 1</text>
    <text x="20" y="98">1 1 1 1 1 1 1 1 1</text>
    <text x="19" y="107">1 1 1 1 1 1 1 1 1 1</text>
    <text x="19" y="116">1 1 1 1 1 1 1 1 1 1</text>
    <text x="19" y="125">1 1 1 1 1 1 1 1 1 1</text>
  </g>
  <!-- Binary "1"s filling right horn -->
  <g clip-path="url(#i84rhorn)" font-family="Courier New, monospace" font-size="7" fill="#D4380D" font-weight="bold">
    <text x="147" y="26">1</text>
    <text x="143" y="35">1 1</text>
    <text x="139" y="44">1 1 1</text>
    <text x="135" y="53">1 1 1 1</text>
    <text x="131" y="62">1 1 1 1 1</text>
    <text x="127" y="71">1 1 1 1 1 1</text>
    <text x="123" y="80">1 1 1 1 1 1 1</text>
    <text x="121" y="89">1 1 1 1 1 1 1 1</text>
    <text x="120" y="98">1 1 1 1 1 1 1 1 1</text>
    <text x="119" y="107">1 1 1 1 1 1 1 1 1 1</text>
    <text x="119" y="116">1 1 1 1 1 1 1 1 1 1</text>
    <text x="119" y="125">1 1 1 1 1 1 1 1 1 1</text>
  </g>
  <!-- Center DT between horns -->
  <text x="100" y="112" text-anchor="middle" font-family="Courier New, monospace" font-size="38" font-weight="bold" fill="#C9A84C" filter="url(#i84glow)">DT</text>
  <!-- Binary for D and T -->
  <text x="100" y="155" text-anchor="middle" font-family="Courier New, monospace" font-size="8.5" fill="#D4380D" opacity="0.85" letter-spacing="1.5">01000100  01010100</text>
  <!-- Labels under binary -->
  <text x="72" y="166" font-family="Courier New, monospace" font-size="6.5" fill="#C9A84C" opacity="0.55">"D"</text>
  <text x="121" y="166" font-family="Courier New, monospace" font-size="6.5" fill="#C9A84C" opacity="0.55">"T"</text>
  <!-- Divider -->
  <line x1="30" y1="172" x2="170" y2="172" stroke="#C9A84C" stroke-width="0.5" opacity="0.3"/>
  <text x="100" y="184" text-anchor="middle" font-family="Courier New, monospace" font-size="7" fill="#C9A84C" opacity="0.4" letter-spacing="2">DEVILOFTECH</text>
</svg>`,
  },
  {
    id: 85,
    group: 'I',
    groupName: 'Binary / Matrix',
    label: 'Bit Flag Devil',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="i85bg" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#1a1410"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </radialGradient>
    <filter id="i85glow">
      <feGaussianBlur stdDeviation="2.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="i85softglow">
      <feGaussianBlur stdDeviation="1" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <!-- Background -->
  <rect width="200" height="200" fill="url(#i85bg)"/>
  <!-- Devil face above bits -->
  <!-- Left horn -->
  <path d="M76 62 Q68 44 74 36 Q80 48 80 60Z" fill="#D4380D"/>
  <!-- Right horn -->
  <path d="M124 62 Q132 44 126 36 Q120 48 120 60Z" fill="#D4380D"/>
  <!-- Face circle -->
  <circle cx="100" cy="72" r="22" fill="#1a1410" stroke="#D4380D" stroke-width="1.5"/>
  <!-- Eyes -->
  <ellipse cx="92" cy="70" rx="4" ry="4.5" fill="#C9A84C" filter="url(#i85softglow)"/>
  <ellipse cx="108" cy="70" rx="4" ry="4.5" fill="#C9A84C" filter="url(#i85softglow)"/>
  <ellipse cx="92" cy="71" rx="2" ry="2.5" fill="#0D0A07"/>
  <ellipse cx="108" cy="71" rx="2" ry="2.5" fill="#0D0A07"/>
  <!-- Grin -->
  <path d="M88 80 Q100 88 112 80" fill="none" stroke="#C9A84C" stroke-width="1.5" stroke-linecap="round"/>
  <!-- Register header -->
  <text x="100" y="110" text-anchor="middle" font-family="Courier New, monospace" font-size="7.5" fill="#C9A84C" opacity="0.6" letter-spacing="3">BIT REGISTER</text>
  <!-- 8 bit squares: pattern 11010100 -->
  <!-- Bit 7 = 1 (ember) -->
  <rect x="13"  y="118" width="18" height="18" rx="2" fill="#D4380D" stroke="#C9A84C" stroke-width="0.8" filter="url(#i85softglow)"/>
  <text x="22"  y="130" text-anchor="middle" font-family="Courier New, monospace" font-size="8" font-weight="bold" fill="#f5edd8">1</text>
  <!-- Bit 6 = 1 (ember) -->
  <rect x="35"  y="118" width="18" height="18" rx="2" fill="#D4380D" stroke="#C9A84C" stroke-width="0.8" filter="url(#i85softglow)"/>
  <text x="44"  y="130" text-anchor="middle" font-family="Courier New, monospace" font-size="8" font-weight="bold" fill="#f5edd8">1</text>
  <!-- Bit 5 = 0 (dark) -->
  <rect x="57"  y="118" width="18" height="18" rx="2" fill="#100C08" stroke="#C9A84C" stroke-width="0.8" opacity="0.7"/>
  <text x="66"  y="130" text-anchor="middle" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.5">0</text>
  <!-- Bit 4 = 1 (ember) -->
  <rect x="79"  y="118" width="18" height="18" rx="2" fill="#D4380D" stroke="#C9A84C" stroke-width="0.8" filter="url(#i85softglow)"/>
  <text x="88"  y="130" text-anchor="middle" font-family="Courier New, monospace" font-size="8" font-weight="bold" fill="#f5edd8">1</text>
  <!-- Bit 3 = 0 (dark) -->
  <rect x="101" y="118" width="18" height="18" rx="2" fill="#100C08" stroke="#C9A84C" stroke-width="0.8" opacity="0.7"/>
  <text x="110" y="130" text-anchor="middle" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.5">0</text>
  <!-- Bit 2 = 1 (ember) -->
  <rect x="123" y="118" width="18" height="18" rx="2" fill="#D4380D" stroke="#C9A84C" stroke-width="0.8" filter="url(#i85softglow)"/>
  <text x="132" y="130" text-anchor="middle" font-family="Courier New, monospace" font-size="8" font-weight="bold" fill="#f5edd8">1</text>
  <!-- Bit 1 = 0 (dark) -->
  <rect x="145" y="118" width="18" height="18" rx="2" fill="#100C08" stroke="#C9A84C" stroke-width="0.8" opacity="0.7"/>
  <text x="154" y="130" text-anchor="middle" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.5">0</text>
  <!-- Bit 0 = 0 (dark) -->
  <rect x="167" y="118" width="18" height="18" rx="2" fill="#100C08" stroke="#C9A84C" stroke-width="0.8" opacity="0.7"/>
  <text x="176" y="130" text-anchor="middle" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.5">0</text>
  <!-- Bit position labels -->
  <text x="22"  y="144" text-anchor="middle" font-family="Courier New, monospace" font-size="5.5" fill="#C9A84C" opacity="0.4">7</text>
  <text x="44"  y="144" text-anchor="middle" font-family="Courier New, monospace" font-size="5.5" fill="#C9A84C" opacity="0.4">6</text>
  <text x="66"  y="144" text-anchor="middle" font-family="Courier New, monospace" font-size="5.5" fill="#C9A84C" opacity="0.4">5</text>
  <text x="88"  y="144" text-anchor="middle" font-family="Courier New, monospace" font-size="5.5" fill="#C9A84C" opacity="0.4">4</text>
  <text x="110" y="144" text-anchor="middle" font-family="Courier New, monospace" font-size="5.5" fill="#C9A84C" opacity="0.4">3</text>
  <text x="132" y="144" text-anchor="middle" font-family="Courier New, monospace" font-size="5.5" fill="#C9A84C" opacity="0.4">2</text>
  <text x="154" y="144" text-anchor="middle" font-family="Courier New, monospace" font-size="5.5" fill="#C9A84C" opacity="0.4">1</text>
  <text x="176" y="144" text-anchor="middle" font-family="Courier New, monospace" font-size="5.5" fill="#C9A84C" opacity="0.4">0</text>
  <!-- Decimal value -->
  <text x="100" y="164" text-anchor="middle" font-family="Courier New, monospace" font-size="9" fill="#C9A84C" opacity="0.7" letter-spacing="1">dec: <tspan fill="#C9A84C" font-weight="bold" font-size="14">212</tspan></text>
  <!-- Hex tribute note -->
  <text x="100" y="178" text-anchor="middle" font-family="Courier New, monospace" font-size="6.5" fill="#D4380D" opacity="0.6" letter-spacing="1">0xD4 — ember tribute</text>
  <line x1="20" y1="184" x2="180" y2="184" stroke="#C9A84C" stroke-width="0.4" opacity="0.3"/>
</svg>`,
  },
  {
    id: 86,
    group: 'I',
    groupName: 'Binary / Matrix',
    label: 'ASCII Box Devil',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="i86bg" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#1a1410"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </radialGradient>
    <filter id="i86glow">
      <feGaussianBlur stdDeviation="1.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <!-- Background -->
  <rect width="200" height="200" fill="url(#i86bg)"/>
  <!-- Box-drawing border -->
  <!-- Top line -->
  <text x="22" y="42" font-family="Courier New, monospace" font-size="11" fill="#D4380D" filter="url(#i86glow)">╔══════════════╗</text>
  <!-- Row 1 content -->
  <text x="22" y="56" font-family="Courier New, monospace" font-size="11" fill="#D4380D">║</text>
  <text x="33" y="56" font-family="Courier New, monospace" font-size="11" fill="#C9A84C" font-weight="bold" letter-spacing="0.5">DEVILOFTECH</text>
  <text x="166" y="56" font-family="Courier New, monospace" font-size="11" fill="#D4380D">║</text>
  <!-- Row 2 content -->
  <text x="22" y="70" font-family="Courier New, monospace" font-size="11" fill="#D4380D">║</text>
  <text x="33" y="70" font-family="Courier New, monospace" font-size="11" fill="#C9A84C">&gt;_</text>
  <text x="52" y="70" font-family="Courier New, monospace" font-size="11" fill="#D4380D" font-weight="bold">666</text>
  <text x="90" y="70" font-family="Courier New, monospace" font-size="11" fill="#D4380D" opacity="0.5">      </text>
  <text x="166" y="70" font-family="Courier New, monospace" font-size="11" fill="#D4380D">║</text>
  <!-- Row 3 content -->
  <text x="22" y="84" font-family="Courier New, monospace" font-size="11" fill="#D4380D">║</text>
  <text x="33" y="84" font-family="Courier New, monospace" font-size="11" fill="#C9A84C" opacity="0.55" font-size="9">v1.6.6  binary</text>
  <text x="166" y="84" font-family="Courier New, monospace" font-size="11" fill="#D4380D">║</text>
  <!-- Row 4: separator -->
  <text x="22" y="98" font-family="Courier New, monospace" font-size="11" fill="#D4380D">╠══════════════╣</text>
  <!-- Row 5: devil face area -->
  <text x="22" y="112" font-family="Courier New, monospace" font-size="11" fill="#D4380D">║</text>
  <text x="33" y="112" font-family="Courier New, monospace" font-size="10" fill="#f5edd8">  ^ o  o ^</text>
  <text x="166" y="112" font-family="Courier New, monospace" font-size="11" fill="#D4380D">║</text>
  <!-- Row 6 -->
  <text x="22" y="126" font-family="Courier New, monospace" font-size="11" fill="#D4380D">║</text>
  <text x="33" y="126" font-family="Courier New, monospace" font-size="10" fill="#f5edd8"> ( \___/ )</text>
  <text x="166" y="126" font-family="Courier New, monospace" font-size="11" fill="#D4380D">║</text>
  <!-- Row 7 -->
  <text x="22" y="140" font-family="Courier New, monospace" font-size="11" fill="#D4380D">║</text>
  <text x="33" y="140" font-family="Courier New, monospace" font-size="10" fill="#C9A84C">  ~~ W ~~</text>
  <text x="166" y="140" font-family="Courier New, monospace" font-size="11" fill="#D4380D">║</text>
  <!-- Bottom line -->
  <text x="22" y="154" font-family="Courier New, monospace" font-size="11" fill="#D4380D" filter="url(#i86glow)">╚══════════════╝</text>
  <!-- Small ASCII corner art -->
  <text x="26" y="172" font-family="Courier New, monospace" font-size="7.5" fill="#D4380D" opacity="0.5">// deviloftech.com</text>
  <text x="26" y="182" font-family="Courier New, monospace" font-size="7.5" fill="#C9A84C" opacity="0.4">/* &lt;(^.^)&gt; err:0x00 */</text>
</svg>`,
  },
  {
    id: 87,
    group: 'I',
    groupName: 'Binary / Matrix',
    label: 'Data Stream',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="i87bg" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#1a1410"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </radialGradient>
    <filter id="i87glow">
      <feGaussianBlur stdDeviation="2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <marker id="i87arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L0,6 L6,3 Z" fill="#D4380D" opacity="0.8"/>
    </marker>
  </defs>
  <!-- Background -->
  <rect width="200" height="200" fill="url(#i87bg)"/>
  <!-- Devil face "receiver" on right side -->
  <!-- Left horn -->
  <path d="M160 62 Q154 48 158 40 Q163 52 163 62Z" fill="#D4380D"/>
  <!-- Right horn -->
  <path d="M176 62 Q182 48 178 40 Q173 52 173 62Z" fill="#D4380D"/>
  <!-- Face circle -->
  <circle cx="168" cy="78" r="24" fill="#1a1410" stroke="#D4380D" stroke-width="1.8" filter="url(#i87glow)"/>
  <!-- Eyes -->
  <ellipse cx="160" cy="75" rx="4" ry="4.5" fill="#C9A84C"/>
  <ellipse cx="176" cy="75" rx="4" ry="4.5" fill="#C9A84C"/>
  <ellipse cx="160" cy="76" rx="2" ry="2.5" fill="#0D0A07"/>
  <ellipse cx="176" cy="76" rx="2" ry="2.5" fill="#0D0A07"/>
  <!-- Grin -->
  <path d="M157 84 Q168 92 179 84" fill="none" stroke="#C9A84C" stroke-width="1.5" stroke-linecap="round"/>
  <!-- Arrows pointing INTO the devil face (right-pointing) -->
  <line x1="108" y1="60" x2="140" y2="68" stroke="#D4380D" stroke-width="1.2" opacity="0.7" marker-end="url(#i87arrow)"/>
  <line x1="108" y1="78" x2="140" y2="78" stroke="#D4380D" stroke-width="1.2" opacity="0.7" marker-end="url(#i87arrow)"/>
  <line x1="108" y1="96" x2="140" y2="88" stroke="#D4380D" stroke-width="1.2" opacity="0.7" marker-end="url(#i87arrow)"/>
  <!-- Data packet rows — flowing left to right -->
  <!-- Stream row 1 -->
  <rect x="8"  y="48" width="34" height="14" rx="2" fill="#100C08" stroke="#D4380D" stroke-width="1"/>
  <text x="25"  y="58" text-anchor="middle" font-family="Courier New, monospace" font-size="7" fill="#D4380D" font-weight="bold">[0xDT]</text>
  <rect x="46" y="48" width="34" height="14" rx="2" fill="#100C08" stroke="#C9A84C" stroke-width="0.8"/>
  <text x="63"  y="58" text-anchor="middle" font-family="Courier New, monospace" font-size="7" fill="#C9A84C">[0x44]</text>
  <rect x="84" y="48" width="20" height="14" rx="2" fill="#100C08" stroke="#D4380D" stroke-width="0.6" opacity="0.5"/>
  <text x="94"  y="58" text-anchor="middle" font-family="Courier New, monospace" font-size="7" fill="#D4380D" opacity="0.5">···</text>
  <!-- Stream row 2 -->
  <rect x="8"  y="66" width="34" height="14" rx="2" fill="#100C08" stroke="#C9A84C" stroke-width="1"/>
  <text x="25"  y="76" text-anchor="middle" font-family="Courier New, monospace" font-size="7" fill="#C9A84C">[0x66]</text>
  <rect x="46" y="66" width="34" height="14" rx="2" fill="#100C08" stroke="#D4380D" stroke-width="0.8"/>
  <text x="63"  y="76" text-anchor="middle" font-family="Courier New, monospace" font-size="7" fill="#D4380D">[0x6F]</text>
  <rect x="84" y="66" width="20" height="14" rx="2" fill="#100C08" stroke="#C9A84C" stroke-width="0.6" opacity="0.5"/>
  <text x="94"  y="76" text-anchor="middle" font-family="Courier New, monospace" font-size="7" fill="#C9A84C" opacity="0.5">···</text>
  <!-- Stream row 3 -->
  <rect x="8"  y="84" width="34" height="14" rx="2" fill="#100C08" stroke="#D4380D" stroke-width="1"/>
  <text x="25"  y="94" text-anchor="middle" font-family="Courier New, monospace" font-size="7" fill="#D4380D">[0xD4]</text>
  <rect x="46" y="84" width="34" height="14" rx="2" fill="#100C08" stroke="#C9A84C" stroke-width="0.8"/>
  <text x="63"  y="94" text-anchor="middle" font-family="Courier New, monospace" font-size="7" fill="#C9A84C">[0x38]</text>
  <rect x="84" y="84" width="20" height="14" rx="2" fill="#100C08" stroke="#D4380D" stroke-width="0.6" opacity="0.5"/>
  <text x="94"  y="94" text-anchor="middle" font-family="Courier New, monospace" font-size="7" fill="#D4380D" opacity="0.5">···</text>
  <!-- Label below devil face -->
  <text x="168" y="114" text-anchor="middle" font-family="Courier New, monospace" font-size="6.5" fill="#C9A84C" opacity="0.6">ENDPOINT</text>
  <!-- Bottom section -->
  <line x1="10" y1="118" x2="190" y2="118" stroke="#D4380D" stroke-width="0.5" opacity="0.25"/>
  <text x="100" y="135" text-anchor="middle" font-family="Courier New, monospace" font-size="7.5" fill="#C9A84C" opacity="0.5" letter-spacing="1">DATA STREAM v0x01</text>
  <!-- Additional decorative packets below the line -->
  <rect x="10" y="143" width="26" height="10" rx="1.5" fill="#100C08" stroke="#D4380D" stroke-width="0.7" opacity="0.6"/>
  <text x="23" y="151" text-anchor="middle" font-family="Courier New, monospace" font-size="5.5" fill="#D4380D" opacity="0.6">ACK</text>
  <rect x="40" y="143" width="26" height="10" rx="1.5" fill="#100C08" stroke="#C9A84C" stroke-width="0.7" opacity="0.6"/>
  <text x="53" y="151" text-anchor="middle" font-family="Courier New, monospace" font-size="5.5" fill="#C9A84C" opacity="0.6">SYN</text>
  <rect x="70" y="143" width="26" height="10" rx="1.5" fill="#100C08" stroke="#D4380D" stroke-width="0.7" opacity="0.4"/>
  <text x="83" y="151" text-anchor="middle" font-family="Courier New, monospace" font-size="5.5" fill="#D4380D" opacity="0.4">EOF</text>
  <text x="10" y="170" font-family="Courier New, monospace" font-size="6.5" fill="#D4380D" opacity="0.35">0x000000 → 0xFFFFFF</text>
  <text x="10" y="181" font-family="Courier New, monospace" font-size="6.5" fill="#C9A84C" opacity="0.3">payload: deviloftech</text>
</svg>`,
  },
  {
    id: 88,
    group: 'I',
    groupName: 'Binary / Matrix',
    label: '8-Bit Pixel Devil',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="i88glow">
      <feGaussianBlur stdDeviation="1.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <!-- Background -->
  <rect width="200" height="200" fill="#0D0A07"/>
  <!-- Pixel grid: each pixel = 10x10, starting at x=30, y=20 for a 14-wide x 16-tall sprite -->
  <!-- Row 0 (y=20): horns -->
  <rect x="40"  y="20" width="10" height="10" fill="#D4380D" filter="url(#i88glow)"/>
  <rect x="50"  y="20" width="10" height="10" fill="#D4380D" filter="url(#i88glow)"/>
  <rect x="100" y="20" width="10" height="10" fill="#D4380D" filter="url(#i88glow)"/>
  <rect x="110" y="20" width="10" height="10" fill="#D4380D" filter="url(#i88glow)"/>
  <!-- Row 1 (y=30): horns wider -->
  <rect x="40"  y="30" width="10" height="10" fill="#D4380D" filter="url(#i88glow)"/>
  <rect x="50"  y="30" width="10" height="10" fill="#D4380D" filter="url(#i88glow)"/>
  <rect x="60"  y="30" width="10" height="10" fill="#D4380D" filter="url(#i88glow)"/>
  <rect x="90"  y="30" width="10" height="10" fill="#D4380D" filter="url(#i88glow)"/>
  <rect x="100" y="30" width="10" height="10" fill="#D4380D" filter="url(#i88glow)"/>
  <rect x="110" y="30" width="10" height="10" fill="#D4380D" filter="url(#i88glow)"/>
  <!-- Row 2 (y=40): top of face + base of horns -->
  <rect x="50"  y="40" width="10" height="10" fill="#D4380D"/>
  <rect x="60"  y="40" width="10" height="10" fill="#D4380D"/>
  <rect x="70"  y="40" width="10" height="10" fill="#D4380D"/>
  <rect x="80"  y="40" width="10" height="10" fill="#D4380D"/>
  <rect x="90"  y="40" width="10" height="10" fill="#D4380D"/>
  <rect x="100" y="40" width="10" height="10" fill="#D4380D"/>
  <rect x="110" y="40" width="10" height="10" fill="#D4380D"/>
  <!-- Row 3 (y=50): face -->
  <rect x="50"  y="50" width="10" height="10" fill="#D4380D"/>
  <rect x="60"  y="50" width="10" height="10" fill="#D4380D"/>
  <rect x="70"  y="50" width="10" height="10" fill="#D4380D"/>
  <rect x="80"  y="50" width="10" height="10" fill="#D4380D"/>
  <rect x="90"  y="50" width="10" height="10" fill="#D4380D"/>
  <rect x="100" y="50" width="10" height="10" fill="#D4380D"/>
  <rect x="110" y="50" width="10" height="10" fill="#D4380D"/>
  <rect x="120" y="50" width="10" height="10" fill="#D4380D"/>
  <!-- Row 4 (y=60): face with eye positions -->
  <rect x="40"  y="60" width="10" height="10" fill="#D4380D"/>
  <rect x="50"  y="60" width="10" height="10" fill="#D4380D"/>
  <rect x="60"  y="60" width="10" height="10" fill="#D4380D"/>
  <rect x="70"  y="60" width="10" height="10" fill="#D4380D"/>
  <rect x="80"  y="60" width="10" height="10" fill="#D4380D"/>
  <rect x="90"  y="60" width="10" height="10" fill="#D4380D"/>
  <rect x="100" y="60" width="10" height="10" fill="#D4380D"/>
  <rect x="110" y="60" width="10" height="10" fill="#D4380D"/>
  <rect x="120" y="60" width="10" height="10" fill="#D4380D"/>
  <rect x="130" y="60" width="10" height="10" fill="#D4380D"/>
  <!-- Row 5 (y=70): eyes in gold -->
  <rect x="40"  y="70" width="10" height="10" fill="#D4380D"/>
  <rect x="50"  y="70" width="10" height="10" fill="#D4380D"/>
  <rect x="60"  y="70" width="10" height="10" fill="#C9A84C" filter="url(#i88glow)"/>
  <rect x="70"  y="70" width="10" height="10" fill="#C9A84C" filter="url(#i88glow)"/>
  <rect x="80"  y="70" width="10" height="10" fill="#D4380D"/>
  <rect x="90"  y="70" width="10" height="10" fill="#D4380D"/>
  <rect x="100" y="70" width="10" height="10" fill="#C9A84C" filter="url(#i88glow)"/>
  <rect x="110" y="70" width="10" height="10" fill="#C9A84C" filter="url(#i88glow)"/>
  <rect x="120" y="70" width="10" height="10" fill="#D4380D"/>
  <rect x="130" y="70" width="10" height="10" fill="#D4380D"/>
  <!-- Row 6 (y=80): eye pupils (dark) -->
  <rect x="40"  y="80" width="10" height="10" fill="#D4380D"/>
  <rect x="50"  y="80" width="10" height="10" fill="#D4380D"/>
  <rect x="60"  y="80" width="10" height="10" fill="#C9A84C" filter="url(#i88glow)"/>
  <rect x="70"  y="80" width="10" height="10" fill="#0D0A07" stroke="#D4380D" stroke-width="0.5"/>
  <rect x="80"  y="80" width="10" height="10" fill="#D4380D"/>
  <rect x="90"  y="80" width="10" height="10" fill="#D4380D"/>
  <rect x="100" y="80" width="10" height="10" fill="#C9A84C" filter="url(#i88glow)"/>
  <rect x="110" y="80" width="10" height="10" fill="#0D0A07" stroke="#D4380D" stroke-width="0.5"/>
  <rect x="120" y="80" width="10" height="10" fill="#D4380D"/>
  <rect x="130" y="80" width="10" height="10" fill="#D4380D"/>
  <!-- Row 7 (y=90): nose area -->
  <rect x="40"  y="90" width="10" height="10" fill="#D4380D"/>
  <rect x="50"  y="90" width="10" height="10" fill="#D4380D"/>
  <rect x="60"  y="90" width="10" height="10" fill="#D4380D"/>
  <rect x="70"  y="90" width="10" height="10" fill="#D4380D"/>
  <rect x="80"  y="90" width="10" height="10" fill="#D4380D"/>
  <rect x="90"  y="90" width="10" height="10" fill="#D4380D"/>
  <rect x="100" y="90" width="10" height="10" fill="#D4380D"/>
  <rect x="110" y="90" width="10" height="10" fill="#D4380D"/>
  <rect x="120" y="90" width="10" height="10" fill="#D4380D"/>
  <rect x="130" y="90" width="10" height="10" fill="#D4380D"/>
  <!-- Row 8 (y=100): mouth row — smile with dark teeth gap -->
  <rect x="50"  y="100" width="10" height="10" fill="#D4380D"/>
  <rect x="60"  y="100" width="10" height="10" fill="#0D0A07" stroke="#D4380D" stroke-width="0.5"/>
  <rect x="70"  y="100" width="10" height="10" fill="#f5edd8"/>
  <rect x="80"  y="100" width="10" height="10" fill="#0D0A07" stroke="#D4380D" stroke-width="0.5"/>
  <rect x="90"  y="100" width="10" height="10" fill="#f5edd8"/>
  <rect x="100" y="100" width="10" height="10" fill="#0D0A07" stroke="#D4380D" stroke-width="0.5"/>
  <rect x="110" y="100" width="10" height="10" fill="#f5edd8"/>
  <rect x="120" y="100" width="10" height="10" fill="#D4380D"/>
  <!-- Row 9 (y=110): chin -->
  <rect x="60"  y="110" width="10" height="10" fill="#D4380D"/>
  <rect x="70"  y="110" width="10" height="10" fill="#D4380D"/>
  <rect x="80"  y="110" width="10" height="10" fill="#D4380D"/>
  <rect x="90"  y="110" width="10" height="10" fill="#D4380D"/>
  <rect x="100" y="110" width="10" height="10" fill="#D4380D"/>
  <rect x="110" y="110" width="10" height="10" fill="#D4380D"/>
  <!-- Row 10 (y=120): narrow chin -->
  <rect x="70"  y="120" width="10" height="10" fill="#D4380D"/>
  <rect x="80"  y="120" width="10" height="10" fill="#D4380D"/>
  <rect x="90"  y="120" width="10" height="10" fill="#D4380D"/>
  <rect x="100" y="120" width="10" height="10" fill="#D4380D"/>
  <!-- Label -->
  <text x="100" y="148" text-anchor="middle" font-family="Courier New, monospace" font-size="8" fill="#C9A84C" opacity="0.7" letter-spacing="2">8-BIT DEVIL</text>
  <text x="100" y="160" text-anchor="middle" font-family="Courier New, monospace" font-size="6.5" fill="#D4380D" opacity="0.5">16×16 sprite · 1985</text>
  <line x1="30" y1="166" x2="170" y2="166" stroke="#C9A84C" stroke-width="0.4" opacity="0.3"/>
</svg>`,
  },
  {
    id: 89,
    group: 'I',
    groupName: 'Binary / Matrix',
    label: 'QR Pattern Devil',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="i89bg" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#1a1410"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </radialGradient>
    <filter id="i89glow">
      <feGaussianBlur stdDeviation="1.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <!-- Background -->
  <rect width="200" height="200" fill="url(#i89bg)"/>
  <!-- QR border -->
  <rect x="18" y="18" width="164" height="164" rx="4" fill="#0D0A07" stroke="#D4380D" stroke-width="1.2" opacity="0.6"/>
  <!-- Finder pattern TL (top-left) -->
  <rect x="26" y="26" width="34" height="34" rx="2" fill="#D4380D" filter="url(#i89glow)"/>
  <rect x="31" y="31" width="24" height="24" rx="1" fill="#0D0A07"/>
  <rect x="35" y="35" width="16" height="16" rx="1" fill="#D4380D"/>
  <!-- Finder pattern TR (top-right) -->
  <rect x="140" y="26" width="34" height="34" rx="2" fill="#D4380D" filter="url(#i89glow)"/>
  <rect x="145" y="31" width="24" height="24" rx="1" fill="#0D0A07"/>
  <rect x="149" y="35" width="16" height="16" rx="1" fill="#D4380D"/>
  <!-- Finder pattern BL (bottom-left) -->
  <rect x="26" y="140" width="34" height="34" rx="2" fill="#D4380D" filter="url(#i89glow)"/>
  <rect x="31" y="145" width="24" height="24" rx="1" fill="#0D0A07"/>
  <rect x="35" y="149" width="16" height="16" rx="1" fill="#D4380D"/>
  <!-- Data modules — scattered ember/gold squares (QR aesthetic, not real) -->
  <!-- Row 1 of data area -->
  <rect x="70" y="26" width="5" height="5" fill="#D4380D" opacity="0.85"/>
  <rect x="78" y="26" width="5" height="5" fill="#C9A84C" opacity="0.7"/>
  <rect x="90" y="26" width="5" height="5" fill="#D4380D" opacity="0.9"/>
  <rect x="102" y="26" width="5" height="5" fill="#C9A84C" opacity="0.6"/>
  <rect x="114" y="26" width="5" height="5" fill="#D4380D" opacity="0.8"/>
  <rect x="126" y="26" width="5" height="5" fill="#C9A84C" opacity="0.75"/>
  <!-- Row 2 -->
  <rect x="74" y="34" width="5" height="5" fill="#C9A84C" opacity="0.65"/>
  <rect x="86" y="34" width="5" height="5" fill="#D4380D" opacity="0.8"/>
  <rect x="98" y="34" width="5" height="5" fill="#C9A84C" opacity="0.7"/>
  <rect x="110" y="34" width="5" height="5" fill="#D4380D" opacity="0.6"/>
  <rect x="122" y="34" width="5" height="5" fill="#C9A84C" opacity="0.55"/>
  <rect x="130" y="34" width="5" height="5" fill="#D4380D" opacity="0.7"/>
  <!-- Left side data strip -->
  <rect x="26" y="70" width="5" height="5" fill="#C9A84C" opacity="0.7"/>
  <rect x="26" y="78" width="5" height="5" fill="#D4380D" opacity="0.85"/>
  <rect x="26" y="90" width="5" height="5" fill="#C9A84C" opacity="0.6"/>
  <rect x="26" y="102" width="5" height="5" fill="#D4380D" opacity="0.75"/>
  <rect x="26" y="114" width="5" height="5" fill="#C9A84C" opacity="0.65"/>
  <rect x="26" y="126" width="5" height="5" fill="#D4380D" opacity="0.8"/>
  <!-- Right side data strip -->
  <rect x="169" y="70" width="5" height="5" fill="#D4380D" opacity="0.75"/>
  <rect x="169" y="82" width="5" height="5" fill="#C9A84C" opacity="0.6"/>
  <rect x="169" y="94" width="5" height="5" fill="#D4380D" opacity="0.85"/>
  <rect x="169" y="106" width="5" height="5" fill="#C9A84C" opacity="0.55"/>
  <rect x="169" y="118" width="5" height="5" fill="#D4380D" opacity="0.7"/>
  <rect x="169" y="130" width="5" height="5" fill="#C9A84C" opacity="0.65"/>
  <!-- Bottom data strip -->
  <rect x="70" y="169" width="5" height="5" fill="#D4380D" opacity="0.8"/>
  <rect x="82" y="169" width="5" height="5" fill="#C9A84C" opacity="0.65"/>
  <rect x="94" y="169" width="5" height="5" fill="#D4380D" opacity="0.7"/>
  <rect x="106" y="169" width="5" height="5" fill="#C9A84C" opacity="0.75"/>
  <rect x="118" y="169" width="5" height="5" fill="#D4380D" opacity="0.6"/>
  <rect x="130" y="169" width="5" height="5" fill="#C9A84C" opacity="0.8"/>
  <!-- Scattered interior modules -->
  <rect x="70" y="70" width="5" height="5" fill="#D4380D" opacity="0.6"/>
  <rect x="82" y="70" width="5" height="5" fill="#C9A84C" opacity="0.5"/>
  <rect x="118" y="70" width="5" height="5" fill="#D4380D" opacity="0.55"/>
  <rect x="130" y="70" width="5" height="5" fill="#C9A84C" opacity="0.65"/>
  <rect x="70" y="82" width="5" height="5" fill="#C9A84C" opacity="0.5"/>
  <rect x="130" y="82" width="5" height="5" fill="#D4380D" opacity="0.6"/>
  <rect x="118" y="130" width="5" height="5" fill="#D4380D" opacity="0.55"/>
  <rect x="82" y="130" width="5" height="5" fill="#C9A84C" opacity="0.6"/>
  <rect x="70" y="130" width="5" height="5" fill="#D4380D" opacity="0.5"/>
  <rect x="130" y="130" width="5" height="5" fill="#C9A84C" opacity="0.5"/>
  <!-- Devil face in CENTER of QR area -->
  <!-- Horns -->
  <path d="M89 84 Q84 74 87 68 Q91 76 92 83Z" fill="#D4380D" filter="url(#i89glow)"/>
  <path d="M111 84 Q116 74 113 68 Q109 76 108 83Z" fill="#D4380D" filter="url(#i89glow)"/>
  <!-- Face -->
  <circle cx="100" cy="100" r="18" fill="#100C08" stroke="#D4380D" stroke-width="1.2"/>
  <!-- Eyes -->
  <ellipse cx="93" cy="97" rx="3.5" ry="4" fill="#C9A84C"/>
  <ellipse cx="107" cy="97" rx="3.5" ry="4" fill="#C9A84C"/>
  <ellipse cx="93" cy="98" rx="1.8" ry="2" fill="#0D0A07"/>
  <ellipse cx="107" cy="98" rx="1.8" ry="2" fill="#0D0A07"/>
  <!-- Grin -->
  <path d="M89 106 Q100 114 111 106" fill="none" stroke="#C9A84C" stroke-width="1.2" stroke-linecap="round"/>
</svg>`,
  },
  {
    id: 90,
    group: 'I',
    groupName: 'Binary / Matrix',
    label: 'Binary DT',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="i90bg" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#1a1410"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </radialGradient>
    <filter id="i90glow">
      <feGaussianBlur stdDeviation="1.8" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="i90softglow">
      <feGaussianBlur stdDeviation="0.8" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <!-- Background -->
  <rect width="200" height="200" fill="url(#i90bg)"/>
  <!-- Top label -->
  <text x="100" y="24" text-anchor="middle" font-family="Courier New, monospace" font-size="7.5" fill="#C9A84C" opacity="0.5" letter-spacing="3">DevilOfTech</text>
  <line x1="18" y1="29" x2="182" y2="29" stroke="#D4380D" stroke-width="0.5" opacity="0.4"/>
  <!-- Register D — "D" = 0100 0100 -->
  <!-- Register D label -->
  <text x="22" y="58" font-family="Courier New, monospace" font-size="20" font-weight="bold" fill="#C9A84C" filter="url(#i90glow)">D</text>
  <!-- Register D box outline -->
  <rect x="42" y="40" width="140" height="26" rx="3" fill="#100C08" stroke="#C9A84C" stroke-width="0.8" opacity="0.6"/>
  <!-- Nibble separator line at center -->
  <line x1="112" y1="40" x2="112" y2="66" stroke="#C9A84C" stroke-width="0.5" opacity="0.3"/>
  <!-- Bits for "D" = 01000100 -->
  <!-- bit 7 = 0 -->
  <rect x="45"  y="43" width="15" height="20" rx="2" fill="#0D0A07" stroke="#C9A84C" stroke-width="0.7" opacity="0.7"/>
  <text x="52"  y="57" text-anchor="middle" font-family="Courier New, monospace" font-size="9" fill="#C9A84C" opacity="0.45">0</text>
  <!-- bit 6 = 1 -->
  <rect x="63"  y="43" width="15" height="20" rx="2" fill="#D4380D" stroke="#C9A84C" stroke-width="0.7" filter="url(#i90softglow)"/>
  <text x="70"  y="57" text-anchor="middle" font-family="Courier New, monospace" font-size="9" font-weight="bold" fill="#f5edd8">1</text>
  <!-- bit 5 = 0 -->
  <rect x="81"  y="43" width="15" height="20" rx="2" fill="#0D0A07" stroke="#C9A84C" stroke-width="0.7" opacity="0.7"/>
  <text x="88"  y="57" text-anchor="middle" font-family="Courier New, monospace" font-size="9" fill="#C9A84C" opacity="0.45">0</text>
  <!-- bit 4 = 0 -->
  <rect x="99"  y="43" width="15" height="20" rx="2" fill="#0D0A07" stroke="#C9A84C" stroke-width="0.7" opacity="0.7"/>
  <text x="106" y="57" text-anchor="middle" font-family="Courier New, monospace" font-size="9" fill="#C9A84C" opacity="0.45">0</text>
  <!-- (nibble gap) -->
  <!-- bit 3 = 0 -->
  <rect x="116" y="43" width="15" height="20" rx="2" fill="#0D0A07" stroke="#C9A84C" stroke-width="0.7" opacity="0.7"/>
  <text x="123" y="57" text-anchor="middle" font-family="Courier New, monospace" font-size="9" fill="#C9A84C" opacity="0.45">0</text>
  <!-- bit 2 = 1 -->
  <rect x="134" y="43" width="15" height="20" rx="2" fill="#D4380D" stroke="#C9A84C" stroke-width="0.7" filter="url(#i90softglow)"/>
  <text x="141" y="57" text-anchor="middle" font-family="Courier New, monospace" font-size="9" font-weight="bold" fill="#f5edd8">1</text>
  <!-- bit 1 = 0 -->
  <rect x="152" y="43" width="15" height="20" rx="2" fill="#0D0A07" stroke="#C9A84C" stroke-width="0.7" opacity="0.7"/>
  <text x="159" y="57" text-anchor="middle" font-family="Courier New, monospace" font-size="9" fill="#C9A84C" opacity="0.45">0</text>
  <!-- bit 0 = 0 -->
  <rect x="170" y="43" width="9" height="20" rx="2" fill="#0D0A07" stroke="#C9A84C" stroke-width="0.7" opacity="0.7"/>
  <text x="174" y="57" text-anchor="middle" font-family="Courier New, monospace" font-size="9" fill="#C9A84C" opacity="0.45">0</text>
  <!-- D bit position labels -->
  <text x="52"  y="72" text-anchor="middle" font-family="Courier New, monospace" font-size="5" fill="#C9A84C" opacity="0.35">7</text>
  <text x="70"  y="72" text-anchor="middle" font-family="Courier New, monospace" font-size="5" fill="#C9A84C" opacity="0.35">6</text>
  <text x="88"  y="72" text-anchor="middle" font-family="Courier New, monospace" font-size="5" fill="#C9A84C" opacity="0.35">5</text>
  <text x="106" y="72" text-anchor="middle" font-family="Courier New, monospace" font-size="5" fill="#C9A84C" opacity="0.35">4</text>
  <text x="123" y="72" text-anchor="middle" font-family="Courier New, monospace" font-size="5" fill="#C9A84C" opacity="0.35">3</text>
  <text x="141" y="72" text-anchor="middle" font-family="Courier New, monospace" font-size="5" fill="#C9A84C" opacity="0.35">2</text>
  <text x="159" y="72" text-anchor="middle" font-family="Courier New, monospace" font-size="5" fill="#C9A84C" opacity="0.35">1</text>
  <text x="174" y="72" text-anchor="middle" font-family="Courier New, monospace" font-size="5" fill="#C9A84C" opacity="0.35">0</text>
  <!-- Separator line between D and T registers -->
  <line x1="18" y1="84" x2="182" y2="84" stroke="#D4380D" stroke-width="0.8" opacity="0.45"/>
  <!-- Register T — "T" = 0101 0100 -->
  <!-- Register T label -->
  <text x="22" y="112" font-family="Courier New, monospace" font-size="20" font-weight="bold" fill="#C9A84C" filter="url(#i90glow)">T</text>
  <!-- Register T box outline -->
  <rect x="42" y="90" width="140" height="26" rx="3" fill="#100C08" stroke="#C9A84C" stroke-width="0.8" opacity="0.6"/>
  <!-- Nibble separator -->
  <line x1="112" y1="90" x2="112" y2="116" stroke="#C9A84C" stroke-width="0.5" opacity="0.3"/>
  <!-- Bits for "T" = 01010100 -->
  <!-- bit 7 = 0 -->
  <rect x="45"  y="93" width="15" height="20" rx="2" fill="#0D0A07" stroke="#C9A84C" stroke-width="0.7" opacity="0.7"/>
  <text x="52"  y="107" text-anchor="middle" font-family="Courier New, monospace" font-size="9" fill="#C9A84C" opacity="0.45">0</text>
  <!-- bit 6 = 1 -->
  <rect x="63"  y="93" width="15" height="20" rx="2" fill="#D4380D" stroke="#C9A84C" stroke-width="0.7" filter="url(#i90softglow)"/>
  <text x="70"  y="107" text-anchor="middle" font-family="Courier New, monospace" font-size="9" font-weight="bold" fill="#f5edd8">1</text>
  <!-- bit 5 = 0 -->
  <rect x="81"  y="93" width="15" height="20" rx="2" fill="#0D0A07" stroke="#C9A84C" stroke-width="0.7" opacity="0.7"/>
  <text x="88"  y="107" text-anchor="middle" font-family="Courier New, monospace" font-size="9" fill="#C9A84C" opacity="0.45">0</text>
  <!-- bit 4 = 1 -->
  <rect x="99"  y="93" width="15" height="20" rx="2" fill="#D4380D" stroke="#C9A84C" stroke-width="0.7" filter="url(#i90softglow)"/>
  <text x="106" y="107" text-anchor="middle" font-family="Courier New, monospace" font-size="9" font-weight="bold" fill="#f5edd8">1</text>
  <!-- bit 3 = 0 -->
  <rect x="116" y="93" width="15" height="20" rx="2" fill="#0D0A07" stroke="#C9A84C" stroke-width="0.7" opacity="0.7"/>
  <text x="123" y="107" text-anchor="middle" font-family="Courier New, monospace" font-size="9" fill="#C9A84C" opacity="0.45">0</text>
  <!-- bit 2 = 1 -->
  <rect x="134" y="93" width="15" height="20" rx="2" fill="#D4380D" stroke="#C9A84C" stroke-width="0.7" filter="url(#i90softglow)"/>
  <text x="141" y="107" text-anchor="middle" font-family="Courier New, monospace" font-size="9" font-weight="bold" fill="#f5edd8">1</text>
  <!-- bit 1 = 0 -->
  <rect x="152" y="93" width="15" height="20" rx="2" fill="#0D0A07" stroke="#C9A84C" stroke-width="0.7" opacity="0.7"/>
  <text x="159" y="107" text-anchor="middle" font-family="Courier New, monospace" font-size="9" fill="#C9A84C" opacity="0.45">0</text>
  <!-- bit 0 = 0 -->
  <rect x="170" y="93" width="9" height="20" rx="2" fill="#0D0A07" stroke="#C9A84C" stroke-width="0.7" opacity="0.7"/>
  <text x="174" y="107" text-anchor="middle" font-family="Courier New, monospace" font-size="9" fill="#C9A84C" opacity="0.45">0</text>
  <!-- T bit position labels -->
  <text x="52"  y="122" text-anchor="middle" font-family="Courier New, monospace" font-size="5" fill="#C9A84C" opacity="0.35">7</text>
  <text x="70"  y="122" text-anchor="middle" font-family="Courier New, monospace" font-size="5" fill="#C9A84C" opacity="0.35">6</text>
  <text x="88"  y="122" text-anchor="middle" font-family="Courier New, monospace" font-size="5" fill="#C9A84C" opacity="0.35">5</text>
  <text x="106" y="122" text-anchor="middle" font-family="Courier New, monospace" font-size="5" fill="#C9A84C" opacity="0.35">4</text>
  <text x="123" y="122" text-anchor="middle" font-family="Courier New, monospace" font-size="5" fill="#C9A84C" opacity="0.35">3</text>
  <text x="141" y="122" text-anchor="middle" font-family="Courier New, monospace" font-size="5" fill="#C9A84C" opacity="0.35">2</text>
  <text x="159" y="122" text-anchor="middle" font-family="Courier New, monospace" font-size="5" fill="#C9A84C" opacity="0.35">1</text>
  <text x="174" y="122" text-anchor="middle" font-family="Courier New, monospace" font-size="5" fill="#C9A84C" opacity="0.35">0</text>
  <!-- Bottom section -->
  <line x1="18" y1="134" x2="182" y2="134" stroke="#D4380D" stroke-width="0.5" opacity="0.35"/>
  <!-- Hex / ASCII annotations -->
  <text x="42" y="148" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.7">0x44 = 'D'</text>
  <text x="42" y="160" font-family="Courier New, monospace" font-size="8" fill="#D4380D" opacity="0.7">0x54 = 'T'</text>
  <text x="42" y="172" font-family="Courier New, monospace" font-size="7" fill="#C9A84C" opacity="0.4">ASCII · UTF-8 · 8N1</text>
  <!-- Bottom border line -->
  <line x1="18" y1="178" x2="182" y2="178" stroke="#C9A84C" stroke-width="0.5" opacity="0.2"/>
  <text x="100" y="190" text-anchor="middle" font-family="Courier New, monospace" font-size="6.5" fill="#C9A84C" opacity="0.35" letter-spacing="2">DEVILOFTECH</text>
</svg>`,
  },
]
