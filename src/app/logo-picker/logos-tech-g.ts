import type { Logo } from './logos'

export const LOGOS_G: Logo[] = [
  {
    id: 61,
    group: 'G',
    groupName: 'Terminal / Code',
    label: 'JSX Devil Tag',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="g61bg" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#1a1410"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </radialGradient>
    <filter id="g61glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="2.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="200" height="200" fill="url(#g61bg)"/>
  <!-- Subtle grid lines -->
  <line x1="0" y1="100" x2="200" y2="100" stroke="#C9A84C" stroke-width="0.25" opacity="0.12"/>
  <line x1="100" y1="0" x2="100" y2="200" stroke="#C9A84C" stroke-width="0.25" opacity="0.12"/>
  <!-- Left angle bracket < in ember red -->
  <text x="10" y="115" font-family="'Courier New', Courier, monospace" font-size="52" font-weight="bold" fill="#D4380D" filter="url(#g61glow)">&lt;</text>
  <!-- Devil horns on top of the < bracket -->
  <path d="M18 52 Q14 38 20 30 Q26 40 24 52Z" fill="#D4380D" opacity="0.9"/>
  <path d="M30 52 Q34 36 40 28 Q42 40 38 52Z" fill="#D4380D" opacity="0.9"/>
  <!-- DevilOfTech in gold -->
  <text x="56" y="115" font-family="'Courier New', Courier, monospace" font-size="18" font-weight="bold" fill="#C9A84C" letter-spacing="0.5">DevilOfTech</text>
  <!-- Closing /> in ember red -->
  <text x="128" y="148" font-family="'Courier New', Courier, monospace" font-size="20" font-weight="bold" fill="#D4380D">/&gt;</text>
  <!-- Bottom label -->
  <text x="100" y="178" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-size="7" fill="#f5edd8" letter-spacing="2" opacity="0.45">JSX · COMPONENT · TAG</text>
</svg>`,
  },
  {
    id: 62,
    group: 'G',
    groupName: 'Terminal / Code',
    label: 'Terminal Prompt',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="g62bg" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#100C08"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </radialGradient>
  </defs>
  <rect width="200" height="200" fill="url(#g62bg)"/>
  <!-- Terminal window frame -->
  <rect x="14" y="28" width="172" height="148" rx="6" fill="#100C08" stroke="#C9A84C" stroke-width="0.8" stroke-opacity="0.35"/>
  <!-- Title bar -->
  <rect x="14" y="28" width="172" height="22" rx="6" fill="#1a1410"/>
  <rect x="14" y="39" width="172" height="11" fill="#1a1410"/>
  <!-- Ember accent line under title bar -->
  <line x1="14" y1="50" x2="186" y2="50" stroke="#D4380D" stroke-width="1" opacity="0.6"/>
  <!-- Title bar dots -->
  <circle cx="28" cy="39" r="3.5" fill="#D4380D" opacity="0.8"/>
  <circle cx="40" cy="39" r="3.5" fill="#C9A84C" opacity="0.6"/>
  <circle cx="52" cy="39" r="3.5" fill="#f5edd8" opacity="0.25"/>
  <!-- Title text -->
  <text x="100" y="43" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-size="7" fill="#f5edd8" opacity="0.4" letter-spacing="1">deviloftech — bash</text>
  <!-- Line 1: prompt in parchment -->
  <text x="22" y="73" font-family="'Courier New', Courier, monospace" font-size="9" fill="#f5edd8">user@deviloftech:~$</text>
  <!-- Line 2: command in gold -->
  <text x="22" y="95" font-family="'Courier New', Courier, monospace" font-size="9" fill="#C9A84C">&gt; run --mode=evil</text>
  <!-- Line 3: loading bar in ember -->
  <text x="22" y="117" font-family="'Courier New', Courier, monospace" font-size="9" fill="#D4380D">&gt; loading... &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2591;&#x2591;</text>
  <!-- Line 4: output dim -->
  <text x="22" y="139" font-family="'Courier New', Courier, monospace" font-size="8" fill="#C9A84C" opacity="0.55">[ daemon active ] pid=666</text>
  <!-- Cursor block (static, simulating blink at "on" state) -->
  <rect x="22" y="150" width="7" height="11" fill="#f5edd8" opacity="0.85"/>
  <!-- Bottom label -->
  <text x="100" y="190" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-size="6.5" fill="#C9A84C" letter-spacing="2" opacity="0.5">TERMINAL · PROMPT</text>
</svg>`,
  },
  {
    id: 63,
    group: 'G',
    groupName: 'Terminal / Code',
    label: 'Arrow Function Devil',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="g63bg" cx="50%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#1a1410"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </radialGradient>
    <filter id="g63glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="200" height="200" fill="url(#g63bg)"/>
  <!-- Editor line numbers gutter hint -->
  <rect x="0" y="0" width="18" height="200" fill="#100C08"/>
  <text x="9" y="78" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-size="6" fill="#C9A84C" opacity="0.3">1</text>
  <text x="9" y="103" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-size="6" fill="#C9A84C" opacity="0.3">2</text>
  <text x="9" y="128" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-size="6" fill="#C9A84C" opacity="0.3">3</text>
  <!-- Line 1: const keyword in ember -->
  <text x="24" y="78" font-family="'Courier New', Courier, monospace" font-size="11" fill="#D4380D" font-weight="bold">const</text>
  <!-- D with horns — drawn separately -->
  <!-- D letter body -->
  <text x="71" y="78" font-family="'Courier New', Courier, monospace" font-size="11" fill="#f5edd8" font-weight="bold"> D</text>
  <!-- Small devil horns on top of D -->
  <path d="M77 58 Q74 50 77 44 Q81 50 80 58Z" fill="#C9A84C"/>
  <path d="M85 58 Q88 49 92 44 Q93 51 90 58Z" fill="#C9A84C"/>
  <!-- rest of line 1 -->
  <text x="91" y="78" font-family="'Courier New', Courier, monospace" font-size="11" fill="#f5edd8"> = () </text>
  <!-- Arrow => in gold -->
  <text x="136" y="78" font-family="'Courier New', Courier, monospace" font-size="11" fill="#C9A84C" font-weight="bold" filter="url(#g63glow)">=&gt;</text>
  <!-- Opening brace in parchment -->
  <text x="161" y="78" font-family="'Courier New', Courier, monospace" font-size="11" fill="#f5edd8"> {'{'}  </text>
  <!-- Line 2: body -->
  <text x="30" y="103" font-family="'Courier New', Courier, monospace" font-size="9" fill="#C9A84C" opacity="0.7">  // evil logic here</text>
  <!-- Line 3: closing brace in parchment -->
  <text x="24" y="128" font-family="'Courier New', Courier, monospace" font-size="11" fill="#f5edd8">{'}'}</text>
  <!-- Bottom separator -->
  <line x1="20" y1="148" x2="180" y2="148" stroke="#C9A84C" stroke-width="0.4" opacity="0.25"/>
  <text x="100" y="165" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-size="7" fill="#C9A84C" letter-spacing="1.5" opacity="0.5">ARROW · FUNCTION</text>
  <text x="100" y="178" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-size="6" fill="#D4380D" opacity="0.4">DevilOfTech</text>
</svg>`,
  },
  {
    id: 64,
    group: 'G',
    groupName: 'Terminal / Code',
    label: 'Curly Brace Horns',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="g64bg" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#1a1410"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </radialGradient>
    <filter id="g64glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="200" height="200" fill="url(#g64bg)"/>
  <!-- Left giant { in gold — devil horn -->
  <text x="4" y="140" font-family="'Courier New', Courier, monospace" font-size="110" fill="#C9A84C" font-weight="bold" filter="url(#g64glow)" opacity="0.9">{'{'}</text>
  <!-- Right giant } in gold — devil horn -->
  <text x="122" y="140" font-family="'Courier New', Courier, monospace" font-size="110" fill="#C9A84C" font-weight="bold" filter="url(#g64glow)" opacity="0.9">{'}'}</text>
  <!-- Devil face in center -->
  <!-- Left eye -->
  <ellipse cx="82" cy="88" rx="7" ry="8" fill="#D4380D" opacity="0.95"/>
  <ellipse cx="83" cy="90" rx="3" ry="4" fill="#0D0A07"/>
  <!-- Right eye -->
  <ellipse cx="118" cy="88" rx="7" ry="8" fill="#D4380D" opacity="0.95"/>
  <ellipse cx="119" cy="90" rx="3" ry="4" fill="#0D0A07"/>
  <!-- Grin -->
  <path d="M76 110 Q100 130 124 110" fill="none" stroke="#D4380D" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>
  <!-- Teeth hints -->
  <line x1="90" y1="110" x2="90" y2="118" stroke="#f5edd8" stroke-width="1.5" opacity="0.6"/>
  <line x1="100" y1="112" x2="100" y2="120" stroke="#f5edd8" stroke-width="1.5" opacity="0.6"/>
  <line x1="110" y1="110" x2="110" y2="118" stroke="#f5edd8" stroke-width="1.5" opacity="0.6"/>
  <!-- DT text at bottom -->
  <text x="100" y="174" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-size="10" fill="#f5edd8" letter-spacing="3" opacity="0.6" font-weight="bold">DT</text>
</svg>`,
  },
  {
    id: 65,
    group: 'G',
    groupName: 'Terminal / Code',
    label: 'Git Branch Devil',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="g65bg" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#100C08"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </radialGradient>
    <filter id="g65glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="200" height="200" fill="url(#g65bg)"/>
  <!-- main branch horizontal line -->
  <line x1="22" y1="130" x2="178" y2="130" stroke="#f5edd8" stroke-width="2" opacity="0.7"/>
  <!-- feature branch diagonal line forking up -->
  <line x1="70" y1="130" x2="155" y2="58" stroke="#D4380D" stroke-width="2" opacity="0.85"/>
  <!-- Commit dots on main branch in gold -->
  <circle cx="40" cy="130" r="5" fill="#C9A84C"/>
  <circle cx="100" cy="130" r="5" fill="#C9A84C"/>
  <circle cx="160" cy="130" r="5" fill="#C9A84C"/>
  <!-- Commit dots on feature branch in gold -->
  <circle cx="112" cy="94" r="4" fill="#C9A84C" opacity="0.8"/>
  <!-- Fork/merge point: devil face circle -->
  <circle cx="70" cy="130" r="12" fill="#1a1410" stroke="#D4380D" stroke-width="1.5" filter="url(#g65glow)"/>
  <!-- Tiny devil face at fork -->
  <ellipse cx="66" cy="128" rx="3" ry="3.5" fill="#D4380D"/>
  <ellipse cx="74" cy="128" rx="3" ry="3.5" fill="#D4380D"/>
  <path d="M63 135 Q70 141 77 135" fill="none" stroke="#C9A84C" stroke-width="1.2" stroke-linecap="round"/>
  <!-- Tiny horns on fork circle -->
  <path d="M65 118 Q62 111 65 107 Q68 112 67 118Z" fill="#C9A84C" opacity="0.9"/>
  <path d="M75 118 Q78 111 75 107 Q72 112 73 118Z" fill="#C9A84C" opacity="0.9"/>
  <!-- Branch labels -->
  <text x="100" y="148" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-size="8" fill="#f5edd8" opacity="0.7">main</text>
  <text x="133" y="72" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-size="7.5" fill="#D4380D">feature/666</text>
  <!-- End point marker for feature branch -->
  <circle cx="155" cy="58" r="5" fill="#D4380D" opacity="0.8"/>
  <!-- Bottom label -->
  <line x1="30" y1="176" x2="170" y2="176" stroke="#C9A84C" stroke-width="0.4" opacity="0.2"/>
  <text x="100" y="190" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-size="7" fill="#C9A84C" letter-spacing="2" opacity="0.45">GIT · BRANCH · DEVIL</text>
</svg>`,
  },
  {
    id: 66,
    group: 'G',
    groupName: 'Terminal / Code',
    label: 'Comment Block Devil',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="g66bg" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#1a1410"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </radialGradient>
  </defs>
  <rect width="200" height="200" fill="url(#g66bg)"/>
  <!-- Code comment block background -->
  <rect x="16" y="44" width="168" height="118" rx="4" fill="#100C08" stroke="#D4380D" stroke-width="0.6" stroke-opacity="0.3"/>
  <!-- Left border accent -->
  <rect x="16" y="44" width="3" height="118" rx="2" fill="#D4380D" opacity="0.5"/>
  <!-- Line 1: /* ─────────────── */ -->
  <text x="26" y="68" font-family="'Courier New', Courier, monospace" font-size="9" fill="#D4380D">/*</text>
  <text x="46" y="68" font-family="'Courier New', Courier, monospace" font-size="9" fill="#D4380D">&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;</text>
  <text x="162" y="68" font-family="'Courier New', Courier, monospace" font-size="9" fill="#D4380D">*/</text>
  <!-- Line 2: /*  DEVILOFTECH    */ -->
  <text x="26" y="90" font-family="'Courier New', Courier, monospace" font-size="9" fill="#D4380D">/*</text>
  <text x="46" y="90" font-family="'Courier New', Courier, monospace" font-size="9" fill="#C9A84C" font-weight="bold" letter-spacing="1">  DEVILOFTECH</text>
  <text x="162" y="90" font-family="'Courier New', Courier, monospace" font-size="9" fill="#D4380D">*/</text>
  <!-- Line 3: /*  EST. 666       */ -->
  <text x="26" y="112" font-family="'Courier New', Courier, monospace" font-size="9" fill="#D4380D">/*</text>
  <text x="46" y="112" font-family="'Courier New', Courier, monospace" font-size="9" fill="#C9A84C" letter-spacing="1">  EST. 666</text>
  <text x="162" y="112" font-family="'Courier New', Courier, monospace" font-size="9" fill="#D4380D">*/</text>
  <!-- Line 4: /* ─────────────── */ -->
  <text x="26" y="134" font-family="'Courier New', Courier, monospace" font-size="9" fill="#D4380D">/*</text>
  <text x="46" y="134" font-family="'Courier New', Courier, monospace" font-size="9" fill="#D4380D">&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;&#x2500;</text>
  <text x="162" y="134" font-family="'Courier New', Courier, monospace" font-size="9" fill="#D4380D">*/</text>
  <!-- Line 5: closing comment -->
  <text x="26" y="154" font-family="'Courier New', Courier, monospace" font-size="9" fill="#D4380D" opacity="0.6">/* @author devil */</text>
  <!-- Bottom label -->
  <text x="100" y="184" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-size="7" fill="#f5edd8" letter-spacing="2" opacity="0.35">COMMENT · BLOCK</text>
</svg>`,
  },
  {
    id: 67,
    group: 'G',
    groupName: 'Terminal / Code',
    label: 'HTML Devil',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="g67bg" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#100C08"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </radialGradient>
  </defs>
  <rect width="200" height="200" fill="url(#g67bg)"/>
  <!-- Code background panel -->
  <rect x="10" y="20" width="180" height="162" rx="5" fill="#100C08" stroke="#C9A84C" stroke-width="0.5" stroke-opacity="0.2"/>
  <rect x="10" y="20" width="180" height="16" rx="5" fill="#1a1410"/>
  <rect x="10" y="28" width="180" height="8" fill="#1a1410"/>
  <text x="100" y="32" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-size="6" fill="#f5edd8" opacity="0.3">index.devil.html</text>
  <!-- HTML lines -->
  <!-- <!DOCTYPE devil> -->
  <text x="18" y="54" font-family="'Courier New', Courier, monospace" font-size="8.5" fill="#D4380D">&lt;!DOCTYPE</text>
  <text x="90" y="54" font-family="'Courier New', Courier, monospace" font-size="8.5" fill="#f5edd8"> devil&gt;</text>
  <!-- <html lang="666"> -->
  <text x="18" y="70" font-family="'Courier New', Courier, monospace" font-size="8.5" fill="#D4380D">&lt;html</text>
  <text x="54" y="70" font-family="'Courier New', Courier, monospace" font-size="8.5" fill="#C9A84C"> lang=</text>
  <text x="89" y="70" font-family="'Courier New', Courier, monospace" font-size="8.5" fill="#f5edd8">"666"</text>
  <text x="117" y="70" font-family="'Courier New', Courier, monospace" font-size="8.5" fill="#D4380D">&gt;</text>
  <!-- <body class="evil"> -->
  <text x="26" y="86" font-family="'Courier New', Courier, monospace" font-size="8.5" fill="#D4380D">  &lt;body</text>
  <text x="72" y="86" font-family="'Courier New', Courier, monospace" font-size="8.5" fill="#C9A84C"> class=</text>
  <text x="110" y="86" font-family="'Courier New', Courier, monospace" font-size="8.5" fill="#f5edd8">"evil"</text>
  <text x="144" y="86" font-family="'Courier New', Courier, monospace" font-size="8.5" fill="#D4380D">&gt;</text>
  <!-- <DT/> -->
  <text x="36" y="104" font-family="'Courier New', Courier, monospace" font-size="9" fill="#D4380D" font-weight="bold">    &lt;DT/&gt;</text>
  <!-- </body> -->
  <text x="26" y="122" font-family="'Courier New', Courier, monospace" font-size="8.5" fill="#D4380D">  &lt;/body&gt;</text>
  <!-- </html> -->
  <text x="18" y="138" font-family="'Courier New', Courier, monospace" font-size="8.5" fill="#D4380D">&lt;/html&gt;</text>
  <!-- Separator -->
  <line x1="18" y1="150" x2="182" y2="150" stroke="#C9A84C" stroke-width="0.4" opacity="0.2"/>
  <!-- Dim status bar -->
  <rect x="10" y="158" width="180" height="24" rx="3" fill="#1a1410"/>
  <text x="18" y="174" font-family="'Courier New', Courier, monospace" font-size="6.5" fill="#D4380D" opacity="0.7">HTML5</text>
  <text x="100" y="174" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-size="6.5" fill="#C9A84C" opacity="0.5">UTF-8 · LF · devil.html</text>
</svg>`,
  },
  {
    id: 68,
    group: 'G',
    groupName: 'Terminal / Code',
    label: 'Lambda Devil',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="g68bg" cx="50%" cy="45%" r="60%">
      <stop offset="0%" stop-color="#1a1410"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </radialGradient>
    <radialGradient id="g68lambdaglow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#D4380D" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#D4380D" stop-opacity="0"/>
    </radialGradient>
    <filter id="g68glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="200" height="200" fill="url(#g68bg)"/>
  <!-- Glow halo behind lambda -->
  <ellipse cx="100" cy="108" rx="52" ry="62" fill="url(#g68lambdaglow)"/>
  <!-- Lambda λ in ember red — main symbol, drawn as path for control -->
  <!-- Left arm going down-left, right arm going down-right, apex at top -->
  <path d="M100 34 L58 150 L78 150 L100 88 L122 150 L142 150 Z" fill="#D4380D" filter="url(#g68glow)"/>
  <!-- Inner cutout to make it look like λ not filled triangle -->
  <polygon points="100,34 89,66 111,66" fill="#0D0A07" opacity="0.5"/>
  <!-- Devil horns extending from top tip of lambda in gold -->
  <path d="M96 34 Q88 18 92 8 Q98 20 99 34Z" fill="#C9A84C"/>
  <path d="M104 34 Q112 18 108 8 Q102 20 101 34Z" fill="#C9A84C"/>
  <!-- DevilOfTech text below -->
  <text x="100" y="174" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="10" fill="#f5edd8" letter-spacing="3" font-weight="bold" opacity="0.8">DEVILOFTECH</text>
  <line x1="36" y1="163" x2="164" y2="163" stroke="#C9A84C" stroke-width="0.5" opacity="0.3"/>
  <!-- Small lambda label -->
  <text x="100" y="192" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-size="6.5" fill="#C9A84C" letter-spacing="2" opacity="0.4">LAMBDA · FUNCTION</text>
</svg>`,
  },
  {
    id: 69,
    group: 'G',
    groupName: 'Terminal / Code',
    label: 'Debug Breakpoint',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="g69bg" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#100C08"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </radialGradient>
    <radialGradient id="g69bp" cx="40%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#e84422"/>
      <stop offset="100%" stop-color="#8B1A00"/>
    </radialGradient>
    <radialGradient id="g69bpglow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#D4380D" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#D4380D" stop-opacity="0"/>
    </radialGradient>
    <filter id="g69glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="200" height="200" fill="url(#g69bg)"/>
  <!-- Glow aura around breakpoint -->
  <circle cx="100" cy="90" r="68" fill="url(#g69bpglow)"/>
  <!-- Breakpoint circle -->
  <circle cx="100" cy="90" r="56" fill="url(#g69bp)" filter="url(#g69glow)"/>
  <circle cx="100" cy="90" r="56" fill="none" stroke="#f5edd8" stroke-width="1" stroke-opacity="0.2"/>
  <!-- Devil face inside breakpoint -->
  <!-- Horns -->
  <path d="M84 46 Q79 34 83 26 Q89 36 88 46Z" fill="#f5edd8" opacity="0.75"/>
  <path d="M116 46 Q121 34 117 26 Q111 36 112 46Z" fill="#f5edd8" opacity="0.75"/>
  <!-- Eyes -->
  <ellipse cx="86" cy="78" rx="8" ry="9" fill="#1a0000"/>
  <ellipse cx="114" cy="78" rx="8" ry="9" fill="#1a0000"/>
  <ellipse cx="87" cy="79" rx="3.5" ry="4" fill="#D4380D"/>
  <ellipse cx="115" cy="79" rx="3.5" ry="4" fill="#D4380D"/>
  <!-- Grin -->
  <path d="M80 100 Q100 118 120 100" fill="none" stroke="#f5edd8" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="91" y1="100" x2="91" y2="108" stroke="#f5edd8" stroke-width="1.5" opacity="0.7"/>
  <line x1="100" y1="102" x2="100" y2="110" stroke="#f5edd8" stroke-width="1.5" opacity="0.7"/>
  <line x1="109" y1="100" x2="109" y2="108" stroke="#f5edd8" stroke-width="1.5" opacity="0.7"/>
  <!-- Bottom label: line 666 -->
  <text x="100" y="168" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-size="9" fill="#C9A84C" letter-spacing="1">&#x25B6; line 666</text>
  <text x="100" y="184" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-size="6.5" fill="#f5edd8" letter-spacing="2" opacity="0.3">BREAKPOINT · ACTIVE</text>
</svg>`,
  },
  {
    id: 70,
    group: 'G',
    groupName: 'Terminal / Code',
    label: 'Regex Devil',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="g70bg" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#1a1410"/>
      <stop offset="100%" stop-color="#0D0A07"/>
    </radialGradient>
    <filter id="g70glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="200" height="200" fill="url(#g70bg)"/>
  <!-- Subtle background match highlight band -->
  <rect x="36" y="84" width="116" height="32" rx="3" fill="#C9A84C" opacity="0.08"/>
  <!-- Left / slash styled as devil horn (extended upward) -->
  <!-- Horn extension up from the slash top -->
  <path d="M42 84 Q36 60 44 44 Q50 62 52 84Z" fill="#D4380D" opacity="0.8"/>
  <!-- Left slash -->
  <text x="32" y="116" font-family="'Courier New', Courier, monospace" font-size="36" font-weight="bold" fill="#D4380D" filter="url(#g70glow)">/</text>
  <!-- d3v1l matched text in gold — center -->
  <text x="60" y="116" font-family="'Courier New', Courier, monospace" font-size="28" font-weight="bold" fill="#C9A84C">d3v1l</text>
  <!-- Right / slash styled as devil horn (extended upward) -->
  <path d="M152 84 Q148 60 156 44 Q162 62 160 84Z" fill="#D4380D" opacity="0.8"/>
  <!-- Right slash -->
  <text x="144" y="116" font-family="'Courier New', Courier, monospace" font-size="36" font-weight="bold" fill="#D4380D" filter="url(#g70glow)">/</text>
  <!-- gi flags in ember -->
  <text x="168" y="116" font-family="'Courier New', Courier, monospace" font-size="18" font-weight="bold" fill="#D4380D">gi</text>
  <!-- Match count indicator -->
  <rect x="56" y="124" width="88" height="10" rx="2" fill="#C9A84C" opacity="0.12"/>
  <text x="100" y="132" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-size="6.5" fill="#C9A84C" opacity="0.7">1 match found</text>
  <!-- Bottom label -->
  <line x1="30" y1="154" x2="170" y2="154" stroke="#C9A84C" stroke-width="0.4" opacity="0.2"/>
  <text x="100" y="168" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-size="7" fill="#C9A84C" letter-spacing="2" opacity="0.5">REGEX · PATTERN · MATCH</text>
  <text x="100" y="182" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-size="6" fill="#D4380D" opacity="0.35">DevilOfTech</text>
</svg>`,
  },
]
