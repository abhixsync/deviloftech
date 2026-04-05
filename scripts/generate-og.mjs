/**
 * generate-og.mjs
 * Generates public/og-default.png (1200×630) for DevilOfTech brand.
 * Run: node scripts/generate-og.mjs
 *
 * Uses sharp (bundled with Next.js) to convert SVG → PNG.
 * No external dependencies beyond what Next.js already ships.
 */

import { createRequire } from 'module'
import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'

// ─── Find latest profile photo from uploads ───────────────────────────────────
const __dirnameTmp = path.dirname(fileURLToPath(import.meta.url))
const uploadsDir = path.resolve(__dirnameTmp, '../public/uploads')
let profilePhotoDataUri = null
try {
  const files = fs.readdirSync(uploadsDir)
    .filter(f => /\.(png|jpg|jpeg|webp)$/i.test(f))
    .sort()
    .reverse()
  if (files.length > 0) {
    const latest = path.join(uploadsDir, files[0])
    const ext = path.extname(files[0]).slice(1).toLowerCase().replace('jpg', 'jpeg')
    const b64 = fs.readFileSync(latest).toString('base64')
    profilePhotoDataUri = `data:image/${ext};base64,${b64}`
    console.log(`Using profile photo: ${files[0]}`)
  }
} catch (e) {
  console.log('No uploads found, using DT monogram fallback')
}

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const require   = createRequire(import.meta.url)

// Resolve sharp from the Next.js bundle location first, then fallback to local
let sharp
try {
  sharp = require('sharp')
} catch {
  // Try Next.js vendor location
  const vendorPath = path.resolve(__dirname, '../node_modules/next/node_modules/sharp')
  sharp = require(vendorPath)
}

// ─── Brand tokens ────────────────────────────────────────────────────────────
const BLOOD    = '#8B0000'
const EMBER    = '#d4380d'
const GOLD     = '#c9a84c'
const GOLD_LT  = '#f0d080'
const ASH      = '#1a1410'
const SMOKE    = '#2C2420'
const PARCH    = '#f5edd8'

// ─── SVG (1200 × 630) ────────────────────────────────────────────────────────
const svg = /* xml */ `<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  width="1200" height="630"
  viewBox="0 0 1200 630"
>
  <defs>

    <!-- ── Backgrounds & textures ── -->
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%"   stop-color="#100c08"/>
      <stop offset="50%"  stop-color="#1a1410"/>
      <stop offset="100%" stop-color="#0d0a07"/>
    </linearGradient>

    <!-- Diagonal cross-hatch texture -->
    <pattern id="hatch" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="60" stroke="#ffffff" stroke-width="0.3" stroke-opacity="0.04"/>
    </pattern>

    <!-- Fine grain noise pattern -->
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" result="noise"/>
      <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise"/>
      <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" result="blend"/>
      <feComponentTransfer in="blend">
        <feFuncA type="linear" slope="1"/>
      </feComponentTransfer>
    </filter>

    <!-- Ember glow behind DT circle -->
    <radialGradient id="emberGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%"   stop-color="#d4380d" stop-opacity="0.55"/>
      <stop offset="40%"  stop-color="#8B0000" stop-opacity="0.30"/>
      <stop offset="100%" stop-color="#8B0000" stop-opacity="0"/>
    </radialGradient>

    <!-- DT circle gradient -->
    <radialGradient id="dtCircle" cx="35%" cy="30%" r="70%">
      <stop offset="0%"   stop-color="#c0320a"/>
      <stop offset="50%"  stop-color="#8B0000"/>
      <stop offset="100%" stop-color="#4a0a00"/>
    </radialGradient>

    <!-- DT circle border glow -->
    <radialGradient id="dtBorder" cx="50%" cy="50%" r="50%">
      <stop offset="70%"  stop-color="transparent"/>
      <stop offset="85%"  stop-color="#d4380d" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="#d4380d" stop-opacity="0"/>
    </radialGradient>

    <!-- Gold text gradient -->
    <linearGradient id="goldText" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%"   stop-color="#fff8e1"/>
      <stop offset="35%"  stop-color="#f0d080"/>
      <stop offset="70%"  stop-color="#c9a84c"/>
      <stop offset="100%" stop-color="#9a7a30"/>
    </linearGradient>

    <!-- Right fire curtain -->
    <linearGradient id="fireEdge" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"   stop-color="#8B0000" stop-opacity="0"/>
      <stop offset="60%"  stop-color="#8B0000" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#d4380d" stop-opacity="0.35"/>
    </linearGradient>

    <!-- Bottom ember heat haze -->
    <linearGradient id="bottomHeat" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%"   stop-color="#8B0000" stop-opacity="0"/>
      <stop offset="100%" stop-color="#c03000" stop-opacity="0.40"/>
    </linearGradient>

    <!-- Top vignette -->
    <linearGradient id="topVig" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%"   stop-color="#000000" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </linearGradient>

    <!-- Left vignette -->
    <linearGradient id="leftVig" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"   stop-color="#000000" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </linearGradient>

    <!-- Glow filter for DT text inside circle -->
    <filter id="dtGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>

    <!-- Soft glow filter for title -->
    <filter id="titleGlow" x="-5%" y="-20%" width="110%" height="140%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="8" result="blur"/>
      <feFlood flood-color="#c9a84c" flood-opacity="0.4" result="color"/>
      <feComposite in="color" in2="blur" operator="in" result="shadow"/>
      <feComposite in="SourceGraphic" in2="shadow" operator="over"/>
    </filter>

    <!-- Ember particle glow -->
    <filter id="particleGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>

    <!-- Clip for DT circle interior -->
    <clipPath id="dtClip">
      <circle cx="215" cy="290" r="148"/>
    </clipPath>

    <!-- Horizontal rule gradient -->
    <linearGradient id="ruleGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"   stop-color="#d4380d" stop-opacity="0"/>
      <stop offset="15%"  stop-color="#d4380d" stop-opacity="0.9"/>
      <stop offset="50%"  stop-color="#c9a84c" stop-opacity="1"/>
      <stop offset="85%"  stop-color="#d4380d" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#d4380d" stop-opacity="0"/>
    </linearGradient>

    <!-- Diamond accent gradient -->
    <linearGradient id="diamondGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%"   stop-color="#f0d080"/>
      <stop offset="100%" stop-color="#8B0000"/>
    </linearGradient>

  </defs>

  <!-- ══════════════════════════════════════
       LAYER 1 — BASE BACKGROUND
  ══════════════════════════════════════ -->
  <rect width="1200" height="630" fill="url(#bgGrad)"/>
  <rect width="1200" height="630" fill="url(#hatch)"/>

  <!-- ══════════════════════════════════════
       LAYER 2 — ATMOSPHERIC LIGHTING
  ══════════════════════════════════════ -->

  <!-- Left ember heat bloom (behind DT monogram) -->
  <ellipse cx="215" cy="310" rx="280" ry="260" fill="url(#emberGlow)" opacity="0.9"/>

  <!-- Secondary ember bloom (mid-canvas) -->
  <ellipse cx="600" cy="630" rx="500" ry="200" fill="url(#bottomHeat)" opacity="1"/>

  <!-- Right fire curtain -->
  <rect x="700" y="0" width="500" height="630" fill="url(#fireEdge)"/>

  <!-- Top vignette -->
  <rect width="1200" height="200" fill="url(#topVig)"/>

  <!-- Left vignette -->
  <rect width="300" height="630" fill="url(#leftVig)"/>

  <!-- Corner darkness -->
  <rect x="900" y="0"   width="300" height="630" fill="#000000" opacity="0.25"/>
  <rect x="0"   y="530" width="1200" height="100" fill="#000000" opacity="0.35"/>

  <!-- ══════════════════════════════════════
       LAYER 3 — DECORATIVE DIAGONAL SLASHES
  ══════════════════════════════════════ -->

  <!-- Subtle diagonal accent lines (right side) -->
  <line x1="820" y1="0"    x2="1100" y2="630"  stroke="#d4380d" stroke-width="0.6" stroke-opacity="0.18"/>
  <line x1="880" y1="0"    x2="1160" y2="630"  stroke="#d4380d" stroke-width="0.4" stroke-opacity="0.10"/>
  <line x1="760" y1="0"    x2="1040" y2="630"  stroke="#c9a84c" stroke-width="0.5" stroke-opacity="0.12"/>
  <line x1="940" y1="0"    x2="1200" y2="560"  stroke="#8B0000" stroke-width="1.0" stroke-opacity="0.20"/>
  <line x1="700" y1="0"    x2="980"  y2="630"  stroke="#d4380d" stroke-width="0.3" stroke-opacity="0.08"/>

  <!-- Vertical accent lines (far right) -->
  <line x1="1150" y1="0"   x2="1150" y2="630"  stroke="#d4380d" stroke-width="0.5" stroke-opacity="0.15"/>
  <line x1="1170" y1="0"   x2="1170" y2="630"  stroke="#8B0000" stroke-width="1.5" stroke-opacity="0.25"/>
  <line x1="1190" y1="0"   x2="1190" y2="630"  stroke="#d4380d" stroke-width="0.8" stroke-opacity="0.30"/>

  <!-- ══════════════════════════════════════
       LAYER 4 — DT MONOGRAM CIRCLE
  ══════════════════════════════════════ -->

  <!-- Outer glow ring (3 layers) -->
  <circle cx="215" cy="290" r="175" fill="none" stroke="#d4380d" stroke-width="1" stroke-opacity="0.15"/>
  <circle cx="215" cy="290" r="165" fill="none" stroke="#d4380d" stroke-width="0.8" stroke-opacity="0.20"/>
  <circle cx="215" cy="290" r="158" fill="none" stroke="#c9a84c" stroke-width="0.6" stroke-opacity="0.15"/>

  <!-- Circle fill -->
  <circle cx="215" cy="290" r="150" fill="url(#dtCircle)"/>

  <!-- Inner ring accent -->
  <circle cx="215" cy="290" r="150" fill="none" stroke="#d4380d" stroke-width="2.5" stroke-opacity="0.6"/>
  <circle cx="215" cy="290" r="147" fill="none" stroke="#c9a84c" stroke-width="0.8" stroke-opacity="0.4"/>
  <circle cx="215" cy="290" r="144" fill="none" stroke="#8B0000" stroke-width="1" stroke-opacity="0.3"/>

  <!-- Internal texture lines (fire streaks clipped to circle) -->
  <g clip-path="url(#dtClip)" opacity="0.12">
    <line x1="65"  y1="140" x2="365" y2="440"  stroke="#ffffff" stroke-width="8"/>
    <line x1="95"  y1="140" x2="395" y2="440"  stroke="#ffffff" stroke-width="3"/>
    <line x1="35"  y1="140" x2="335" y2="440"  stroke="#ffffff" stroke-width="5"/>
  </g>

  <!-- ── Profile photo or DT fallback ── -->
  ${profilePhotoDataUri ? `
  <image
    href="${profilePhotoDataUri}"
    x="67" y="142" width="296" height="296"
    clip-path="url(#dtClip)"
    preserveAspectRatio="xMidYMid slice"
  />` : `
  <text x="215" y="330" text-anchor="middle"
    font-family="Georgia, 'Times New Roman', serif" font-weight="700"
    font-size="118" letter-spacing="-4" fill="#000000" opacity="0.5" dx="3" dy="3">DT</text>
  <text x="215" y="330" text-anchor="middle"
    font-family="Georgia, 'Times New Roman', serif" font-weight="700"
    font-size="118" letter-spacing="-4" fill="url(#goldText)" filter="url(#dtGlow)">DT</text>
  <line x1="145" y1="348" x2="285" y2="348" stroke="url(#goldText)" stroke-width="1.5" stroke-opacity="0.7"/>
  <text x="215" y="372" text-anchor="middle" font-family="Georgia, serif"
    font-size="10" font-weight="400" letter-spacing="5" fill="#c9a84c" opacity="0.75">DEVIL OF TECH</text>
  `}

  <!-- ══════════════════════════════════════
       LAYER 5 — EMBER PARTICLE ACCENTS
  ══════════════════════════════════════ -->

  <!-- Floating ember particles (scattered organically) -->
  <g filter="url(#particleGlow)">
    <!-- Large embers -->
    <circle cx="410" cy="180" r="2.5" fill="#d4380d" opacity="0.80"/>
    <circle cx="520" cy="145" r="1.8" fill="#f06030" opacity="0.70"/>
    <circle cx="650" cy="165" r="2.2" fill="#d4380d" opacity="0.65"/>
    <circle cx="780" cy="130" r="1.5" fill="#c9a84c" opacity="0.60"/>
    <circle cx="900" cy="155" r="2.0" fill="#d4380d" opacity="0.55"/>
    <circle cx="1050" cy="120" r="1.7" fill="#f06030" opacity="0.50"/>
    <circle cx="1120" cy="175" r="2.3" fill="#d4380d" opacity="0.60"/>

    <!-- Small embers -->
    <circle cx="445" cy="210" r="1.2" fill="#f06030" opacity="0.60"/>
    <circle cx="570" cy="190" r="1.0" fill="#c9a84c" opacity="0.55"/>
    <circle cx="700" cy="200" r="1.3" fill="#d4380d" opacity="0.50"/>
    <circle cx="830" cy="185" r="0.9" fill="#f06030" opacity="0.45"/>
    <circle cx="960" cy="140" r="1.1" fill="#c9a84c" opacity="0.50"/>
    <circle cx="1080" cy="195" r="1.4" fill="#d4380d" opacity="0.55"/>

    <!-- Micro embers -->
    <circle cx="480" cy="230" r="0.7" fill="#f06030" opacity="0.70"/>
    <circle cx="610" cy="218" r="0.6" fill="#d4380d" opacity="0.65"/>
    <circle cx="740" cy="222" r="0.8" fill="#c9a84c" opacity="0.60"/>
    <circle cx="870" cy="207" r="0.5" fill="#f06030" opacity="0.55"/>
    <circle cx="1000" cy="215" r="0.7" fill="#d4380d" opacity="0.50"/>

    <!-- Bottom embers -->
    <circle cx="430" cy="490" r="1.5" fill="#d4380d" opacity="0.40"/>
    <circle cx="590" cy="510" r="1.0" fill="#8B0000" opacity="0.35"/>
    <circle cx="750" cy="495" r="1.3" fill="#d4380d" opacity="0.30"/>
    <circle cx="920" cy="505" r="0.9" fill="#c9a84c" opacity="0.25"/>
  </g>

  <!-- ══════════════════════════════════════
       LAYER 6 — HORIZONTAL RULE
  ══════════════════════════════════════ -->

  <!-- Full-width separator rule -->
  <rect x="390" y="243" width="770" height="0.5" fill="url(#ruleGrad)" opacity="0.5"/>

  <!-- Diamond accent on rule left -->
  <polygon
    points="390,243  397,237  404,243  397,249"
    fill="url(#diamondGrad)"
    opacity="0.8"
  />
  <!-- Diamond accent on rule right -->
  <polygon
    points="1160,243  1153,237  1146,243  1153,249"
    fill="url(#diamondGrad)"
    opacity="0.6"
  />

  <!-- ══════════════════════════════════════
       LAYER 7 — MAIN BRAND TYPE
  ══════════════════════════════════════ -->

  <!-- ── "DevilOfTech" shadow ── -->
  <text
    x="412" y="360"
    font-family="Georgia, 'Times New Roman', serif"
    font-weight="700"
    font-size="96"
    letter-spacing="-1"
    fill="#000000"
    opacity="0.55"
    dx="4" dy="4"
  >DevilOfTech</text>

  <!-- ── "DevilOfTech" main title ── -->
  <text
    x="412" y="360"
    font-family="Georgia, 'Times New Roman', serif"
    font-weight="700"
    font-size="96"
    letter-spacing="-1"
    fill="url(#goldText)"
    filter="url(#titleGlow)"
  >DevilOfTech</text>

  <!-- ── Bottom rule under title ── -->
  <rect x="412" y="376" width="750" height="1" fill="url(#ruleGrad)" opacity="0.35"/>

  <!-- ── Tagline ── -->
  <text
    x="412" y="430"
    font-family="'Courier New', Courier, monospace"
    font-weight="400"
    font-size="20"
    letter-spacing="1.5"
    fill="#c9a84c"
    opacity="0.90"
  >Where Hell's Hottest Engineer Teaches Code</text>

  <!-- ══════════════════════════════════════
       LAYER 8 — BOTTOM META ROW
  ══════════════════════════════════════ -->

  <!-- Thin baseline separator -->
  <rect x="0" y="560" width="1200" height="0.5" fill="#d4380d" opacity="0.20"/>

  <!-- Left: channel handle -->
  <text
    x="412" y="595"
    font-family="'Courier New', Courier, monospace"
    font-size="15"
    letter-spacing="2"
    fill="#f5edd8"
    opacity="0.45"
  >@deviloftech</text>

  <!-- Separator dot -->
  <circle cx="560" cy="591" r="2" fill="#d4380d" opacity="0.50"/>

  <!-- Platform labels -->
  <text
    x="574" y="595"
    font-family="'Courier New', Courier, monospace"
    font-size="15"
    letter-spacing="2"
    fill="#f5edd8"
    opacity="0.45"
  >YouTube</text>

  <circle cx="666" cy="591" r="2" fill="#d4380d" opacity="0.50"/>

  <text
    x="680" y="595"
    font-family="'Courier New', Courier, monospace"
    font-size="15"
    letter-spacing="2"
    fill="#f5edd8"
    opacity="0.45"
  >Instagram</text>

  <!-- Right: URL -->
  <text
    x="1162" y="595"
    text-anchor="end"
    font-family="'Courier New', Courier, monospace"
    font-size="14"
    letter-spacing="1"
    fill="#c9a84c"
    opacity="0.55"
  >deviloftech.com</text>

  <!-- ══════════════════════════════════════
       LAYER 9 — TOP TRIM
  ══════════════════════════════════════ -->

  <!-- Top border strip -->
  <rect x="0" y="0" width="1200" height="3" fill="url(#ruleGrad)" opacity="0.7"/>
  <!-- Bottom border strip -->
  <rect x="0" y="627" width="1200" height="3" fill="url(#ruleGrad)" opacity="0.4"/>

  <!-- Top ornament diamonds -->
  <polygon points="600,0  607,7  600,14  593,7"  fill="#c9a84c" opacity="0.6"/>
  <polygon points="590,0  595,5  590,10  585,5"  fill="#d4380d" opacity="0.4"/>
  <polygon points="610,0  615,5  610,10  605,5"  fill="#d4380d" opacity="0.4"/>

  <!-- ══════════════════════════════════════
       LAYER 10 — FINAL GRAIN OVERLAY
  ══════════════════════════════════════ -->

  <!-- Subtle grain via rect with filter -->
  <rect width="1200" height="630" fill="#1a1410" opacity="0.04" filter="url(#grain)"/>

</svg>`

// ─── Output path ──────────────────────────────────────────────────────────────
const outPath = path.resolve(__dirname, '../public/og-default.png')

console.log('Generating og-default.png…')

try {
  await sharp(Buffer.from(svg))
    .png({ compressionLevel: 9, quality: 100 })
    .toFile(outPath)

  const { size } = fs.statSync(outPath)
  console.log(`✓  Saved: ${outPath}`)
  console.log(`   Size:  ${(size / 1024).toFixed(1)} KB`)
} catch (err) {
  console.error('✗  Generation failed:', err.message)
  process.exit(1)
}
