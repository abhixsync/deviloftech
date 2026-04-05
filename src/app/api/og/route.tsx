import { ImageResponse } from 'next/og'

export const runtime = 'edge'

// Brand tokens — match globals.css
const BLOOD  = '#8B0000'
const EMBER  = '#d4380d'
const GOLD   = '#c9a84c'
const GOLD_LT = '#f0d080'
const ASH    = '#1a1410'
const PARCH  = '#f5edd8'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          background: ASH,
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* ── Base gradient background ── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              radial-gradient(ellipse 55% 70% at 18% 105%, rgba(180,40,0,0.50) 0%, transparent 60%),
              radial-gradient(ellipse 80% 40% at 50% 110%, rgba(200,60,0,0.30) 0%, transparent 55%),
              radial-gradient(ellipse 40% 50% at 92% 50%,  rgba(139,0,0,0.25) 0%, transparent 60%),
              radial-gradient(ellipse 100% 100% at 50% 50%, #1a1410 0%, #100c08 100%)
            `,
            display: 'flex',
          }}
        />

        {/* ── Right fire curtain ── */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '420px',
            height: '630px',
            background: `linear-gradient(to right, transparent 0%, rgba(139,0,0,0.10) 40%, rgba(212,56,13,0.28) 100%)`,
            display: 'flex',
          }}
        />

        {/* ── Top vignette ── */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '1200px',
            height: '180px',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, transparent 100%)',
            display: 'flex',
          }}
        />

        {/* ── Bottom shadow ── */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '1200px',
            height: '140px',
            background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)',
            display: 'flex',
          }}
        />

        {/* ── Top border stripe ── */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '1200px',
            height: '3px',
            background: `linear-gradient(to right, transparent 0%, ${EMBER} 20%, ${GOLD} 50%, ${EMBER} 80%, transparent 100%)`,
            display: 'flex',
          }}
        />

        {/* ── Bottom border stripe ── */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '1200px',
            height: '3px',
            background: `linear-gradient(to right, transparent 0%, ${EMBER} 20%, ${GOLD} 50%, ${EMBER} 80%, transparent 100%)`,
            opacity: 0.5,
            display: 'flex',
          }}
        />

        {/* ════════════════════════════════
            DT MONOGRAM CIRCLE
        ════════════════════════════════ */}
        <div
          style={{
            position: 'absolute',
            left: '52px',
            top: '128px',
            width: '310px',
            height: '310px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Outer glow halo */}
          <div
            style={{
              position: 'absolute',
              inset: '-22px',
              borderRadius: '50%',
              background: `radial-gradient(circle, rgba(212,56,13,0.35) 0%, rgba(139,0,0,0.15) 50%, transparent 75%)`,
              display: 'flex',
            }}
          />

          {/* Outer ring */}
          <div
            style={{
              position: 'absolute',
              inset: '-6px',
              borderRadius: '50%',
              border: `1.5px solid rgba(212,56,13,0.25)`,
              display: 'flex',
            }}
          />

          {/* Main circle */}
          <div
            style={{
              width: '310px',
              height: '310px',
              borderRadius: '50%',
              background: `radial-gradient(circle at 35% 30%, #c0320a 0%, #8B0000 50%, #4a0a00 100%)`,
              border: `2.5px solid rgba(212,56,13,0.65)`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Inner shine */}
            <div
              style={{
                position: 'absolute',
                top: '-30px',
                left: '-30px',
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%)',
                display: 'flex',
              }}
            />

            {/* DT text */}
            <div
              style={{
                fontSize: '128px',
                fontWeight: 700,
                fontFamily: 'Georgia, serif',
                letterSpacing: '-4px',
                lineHeight: 1,
                color: GOLD_LT,
                textShadow: `0 0 40px rgba(201,168,76,0.6), 0 4px 8px rgba(0,0,0,0.8)`,
                display: 'flex',
                marginBottom: '4px',
              }}
            >
              DT
            </div>

            {/* Underline in circle */}
            <div
              style={{
                width: '130px',
                height: '1px',
                background: `linear-gradient(to right, transparent, ${GOLD}, transparent)`,
                opacity: 0.7,
                display: 'flex',
                marginBottom: '8px',
              }}
            />

            {/* Micro label */}
            <div
              style={{
                fontSize: '10px',
                fontFamily: 'Courier New, monospace',
                letterSpacing: '5px',
                color: GOLD,
                opacity: 0.75,
                display: 'flex',
              }}
            >
              DEVIL OF TECH
            </div>
          </div>
        </div>

        {/* ════════════════════════════════
            MAIN TYPE BLOCK
        ════════════════════════════════ */}
        <div
          style={{
            position: 'absolute',
            left: '400px',
            top: '108px',
            width: '760px',
            display: 'flex',
            flexDirection: 'column',
            gap: '0px',
          }}
        >
          {/* Top horizontal rule */}
          <div
            style={{
              width: '740px',
              height: '1px',
              background: `linear-gradient(to right, rgba(212,56,13,0.8) 0%, ${GOLD} 40%, rgba(212,56,13,0.4) 100%)`,
              marginBottom: '24px',
              display: 'flex',
            }}
          />

          {/* Main title — shadow layer */}
          <div
            style={{
              position: 'absolute',
              top: '29px',
              left: '4px',
              fontSize: '102px',
              fontWeight: 700,
              fontFamily: 'Georgia, serif',
              letterSpacing: '-2px',
              lineHeight: 1,
              color: 'rgba(0,0,0,0.6)',
              display: 'flex',
            }}
          >
            DevilOfTech
          </div>

          {/* Main title */}
          <div
            style={{
              fontSize: '102px',
              fontWeight: 700,
              fontFamily: 'Georgia, serif',
              letterSpacing: '-2px',
              lineHeight: 1,
              color: GOLD_LT,
              textShadow: `0 0 60px rgba(201,168,76,0.45), 0 2px 4px rgba(0,0,0,0.9)`,
              display: 'flex',
            }}
          >
            DevilOfTech
          </div>

          {/* Bottom rule under title */}
          <div
            style={{
              width: '740px',
              height: '1px',
              background: `linear-gradient(to right, rgba(212,56,13,0.6) 0%, ${GOLD} 35%, rgba(212,56,13,0.3) 100%)`,
              marginTop: '14px',
              marginBottom: '22px',
              opacity: 0.5,
              display: 'flex',
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: '21px',
              fontFamily: 'Courier New, monospace',
              fontWeight: 400,
              letterSpacing: '1.5px',
              color: GOLD,
              opacity: 0.92,
              display: 'flex',
            }}
          >
            Where Hell's Hottest Engineer Teaches Code
          </div>
        </div>

        {/* ════════════════════════════════
            BOTTOM META ROW
        ════════════════════════════════ */}

        {/* Thin baseline separator */}
        <div
          style={{
            position: 'absolute',
            bottom: '68px',
            left: '0px',
            width: '1200px',
            height: '0.5px',
            background: `rgba(212,56,13,0.18)`,
            display: 'flex',
          }}
        />

        {/* Left: handle + platforms */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            left: '400px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
          }}
        >
          <span
            style={{
              fontSize: '15px',
              fontFamily: 'Courier New, monospace',
              letterSpacing: '2px',
              color: PARCH,
              opacity: 0.45,
            }}
          >
            @deviloftech
          </span>
          <div
            style={{
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              background: EMBER,
              opacity: 0.5,
              display: 'flex',
            }}
          />
          <span
            style={{
              fontSize: '15px',
              fontFamily: 'Courier New, monospace',
              letterSpacing: '2px',
              color: PARCH,
              opacity: 0.45,
            }}
          >
            YouTube
          </span>
          <div
            style={{
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              background: EMBER,
              opacity: 0.5,
              display: 'flex',
            }}
          />
          <span
            style={{
              fontSize: '15px',
              fontFamily: 'Courier New, monospace',
              letterSpacing: '2px',
              color: PARCH,
              opacity: 0.45,
            }}
          >
            Instagram
          </span>
        </div>

        {/* Right: domain */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            right: '38px',
            fontSize: '14px',
            fontFamily: 'Courier New, monospace',
            letterSpacing: '1px',
            color: GOLD,
            opacity: 0.55,
            display: 'flex',
          }}
        >
          deviloftech.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
