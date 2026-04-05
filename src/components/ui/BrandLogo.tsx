import type { CSSProperties } from 'react'

interface Props {
  size?: number
  style?: CSSProperties
}

export default function BrandLogo({ size = 40, style }: Props) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      style={{ display: 'block', flexShrink: 0, ...style }}
      aria-label="DevilOfTech"
    >
      <defs>
        <filter id="bl-glow">
          <feGaussianBlur stdDeviation="2" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="bl-ckt">
          <feGaussianBlur stdDeviation="1.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <clipPath id="bl-left"><rect x="0" y="0" width="100" height="200"/></clipPath>
        <clipPath id="bl-right"><rect x="100" y="0" width="100" height="200"/></clipPath>
        <radialGradient id="bl-lbg" cx="40%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#3d0e04"/>
          <stop offset="100%" stopColor="#1a0603"/>
        </radialGradient>
        <radialGradient id="bl-rbg" cx="60%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#081a14"/>
          <stop offset="100%" stopColor="#020c09"/>
        </radialGradient>
      </defs>

      <rect width="200" height="200" fill="#0D0A07"/>

      {/* Left half — organic devil */}
      <g clipPath="url(#bl-left)">
        <circle cx="100" cy="88" r="52" fill="url(#bl-lbg)" stroke="#D4380D" strokeWidth="2" filter="url(#bl-glow)"/>
        <path d="M74 46 Q62 22 70 10 Q78 26 80 42Z" fill="#C9A84C" filter="url(#bl-glow)"/>
        <ellipse cx="84" cy="84" rx="8" ry="9" fill="#C9A84C" filter="url(#bl-glow)"/>
        <ellipse cx="84" cy="85" rx="4" ry="4.5" fill="#0D0A07"/>
        <path d="M78 108 Q94 124 100 118" fill="none" stroke="#f5edd8" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M82 108 Q86 114 90 111" fill="none" stroke="#f5edd8" strokeWidth="2" strokeLinecap="round"/>
        <path d="M60 95 Q68 92 76 95" fill="none" stroke="#D4380D" strokeWidth="1" opacity="0.5"/>
      </g>

      {/* Right half — mechanical/circuit */}
      <g clipPath="url(#bl-right)">
        <circle cx="100" cy="88" r="52" fill="url(#bl-rbg)" stroke="#C9A84C" strokeWidth="1.5" filter="url(#bl-ckt)"/>
        <path d="M126 46 L134 28 L128 12 L132 10 L138 28 L130 46Z" fill="none" stroke="#C9A84C" strokeWidth="1.5" filter="url(#bl-ckt)"/>
        <line x1="132" y1="22" x2="136" y2="22" stroke="#C9A84C" strokeWidth="0.8" opacity="0.6"/>
        <line x1="131" y1="30" x2="135" y2="30" stroke="#C9A84C" strokeWidth="0.8" opacity="0.6"/>
        <circle cx="136" cy="22" r="1.5" fill="#C9A84C" opacity="0.8"/>
        <circle cx="135" cy="30" r="1.5" fill="#C9A84C" opacity="0.8"/>
        <circle cx="116" cy="84" r="10" fill="#0a1a12" stroke="#C9A84C" strokeWidth="1.5" filter="url(#bl-ckt)"/>
        <circle cx="116" cy="84" r="6" fill="none" stroke="#C9A84C" strokeWidth="0.8" opacity="0.7"/>
        <circle cx="116" cy="84" r="2.5" fill="#C9A84C"/>
        <line x1="106" y1="84" x2="111" y2="84" stroke="#C9A84C" strokeWidth="0.6" opacity="0.6"/>
        <line x1="121" y1="84" x2="126" y2="84" stroke="#C9A84C" strokeWidth="0.6" opacity="0.6"/>
        <line x1="116" y1="74" x2="116" y2="79" stroke="#C9A84C" strokeWidth="0.6" opacity="0.6"/>
        <line x1="116" y1="89" x2="116" y2="94" stroke="#C9A84C" strokeWidth="0.6" opacity="0.6"/>
        <path d="M100 118 Q106 124 122 108" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="square" filter="url(#bl-ckt)"/>
        <line x1="107" y1="117" x2="107" y2="124" stroke="#C9A84C" strokeWidth="1.2" opacity="0.6"/>
        <line x1="114" y1="114" x2="114" y2="120" stroke="#C9A84C" strokeWidth="1.2" opacity="0.6"/>
        <line x1="120" y1="110" x2="120" y2="115" stroke="#C9A84C" strokeWidth="1.2" opacity="0.6"/>
        <path d="M110 60 L118 60 L118 68 L130 68" fill="none" stroke="#C9A84C" strokeWidth="0.8" opacity="0.5" filter="url(#bl-ckt)"/>
        <circle cx="118" cy="60" r="1.5" fill="#C9A84C" opacity="0.6"/>
        <circle cx="130" cy="68" r="1.5" fill="#C9A84C" opacity="0.6"/>
      </g>

      {/* Gold seam */}
      <line x1="100" y1="10" x2="100" y2="145" stroke="#C9A84C" strokeWidth="2" filter="url(#bl-glow)"/>
      <circle cx="100" cy="38" r="2.5" fill="#C9A84C" filter="url(#bl-glow)"/>
      <circle cx="100" cy="88" r="2.5" fill="#C9A84C" filter="url(#bl-glow)"/>
      <circle cx="100" cy="135" r="2.5" fill="#C9A84C" filter="url(#bl-glow)"/>
    </svg>
  )
}
