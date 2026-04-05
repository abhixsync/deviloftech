'use client'

import { useState, useCallback } from 'react'
import { LOGOS, GROUP_NAMES, type Logo } from './logos'

const DESIGNER_NOTES = [
  {
    heading: 'Strongest Logos',
    items: [
      '**#7 — Red Circle Badge:** The most complete brand mark. Circle + horns + arc text = professional and scalable. Works at any size.',
      '**#31 — Circular Badge Arc:** Full badge treatment with devil face + "DEVIL OF TECH" arc text. Closest to classic brand identity.',
      '**#22 — Pitchfork/Trident:** Clean icon, instantly readable at favicon size. Gold on black is premium and distinctive.',
      '**#30 — Equalizer Flame:** The most original design — a flame made of EQ bars bridges "tech audio/signal" + "fire" aesthetics perfectly.',
      '**#44 — devil.of.tech terminal:** Strong brand alignment with the content creator / developer audience.',
    ],
  },
  {
    heading: 'Best Favicon Candidates (simple at 16×16)',
    items: [
      '**#21 — Minimal Devil Horns:** Two clean curves. Reads clearly at 16px.',
      '**#22 — Pitchfork:** Solid gold trident. Unmistakable silhouette.',
      '**#6 — Minimal Line Devil:** Horns + two dots + grin. Simplest face mark.',
      '**#26 — Lightning Devil Tail:** Bold single-path bolt shape.',
      '**Avoid for favicon:** Badges (#31–40), text-forward (#41–50), and complex pixel art.',
    ],
  },
  {
    heading: 'Best Brand Identity Match',
    items: [
      'The existing brand (red circle devil + blocky white text) maps closest to **#7** and **#31**.',
      'For evolution toward a more premium/dark-medieval feel: **#10 (Devil Skull)** or **#38 (Coin/Medal)** represent an upmarket direction.',
      'For the tech-creator audience: **#44 (terminal)** or **#45 (@deviloftech CLI)** signal authenticity to developer viewers.',
    ],
  },
]

function NotesSection() {
  const [open, setOpen] = useState(false)
  return (
    <div style={{
      border: '1px solid rgba(201,168,76,0.2)',
      borderRadius: 6,
      marginBottom: 40,
      overflow: 'hidden',
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%',
          background: 'rgba(44,36,32,0.6)',
          border: 'none',
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          color: 'var(--gold)',
          fontFamily: 'var(--cinzel)',
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: '0.08em',
        }}
      >
        <span>Designer Notes</span>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ember)', opacity: 0.8 }}>
          {open ? '[ collapse ]' : '[ expand ]'}
        </span>
      </button>
      {open && (
        <div style={{ padding: '24px 24px 20px', background: 'rgba(26,20,16,0.7)' }}>
          {DESIGNER_NOTES.map(section => (
            <div key={section.heading} style={{ marginBottom: 24 }}>
              <div style={{
                fontFamily: 'var(--mono)',
                fontSize: 9,
                letterSpacing: '0.22em',
                color: 'var(--ember)',
                textTransform: 'uppercase',
                marginBottom: 12,
              }}>
                {section.heading}
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {section.items.map((item, i) => {
                  const parts = item.split(/\*\*([^*]+)\*\*/g)
                  return (
                    <li key={i} style={{
                      fontFamily: 'var(--serif)',
                      fontSize: 14,
                      color: 'rgba(245,237,216,0.75)',
                      lineHeight: 1.6,
                      display: 'flex',
                      gap: 10,
                    }}>
                      <span style={{ color: 'var(--ember)', flexShrink: 0 }}>›</span>
                      <span>
                        {parts.map((p, j) =>
                          j % 2 === 1
                            ? <strong key={j} style={{ color: 'var(--gold)', fontWeight: 700 }}>{p}</strong>
                            : p
                        )}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

const GROUP_COLORS: Record<string, string> = {
  A: '#D4380D',
  B: '#C9A84C',
  C: '#8B6FBF',
  D: '#4a9eff',
  E: '#4caf50',
}

function LogoCard({ logo, selected, onClick }: { logo: Logo; selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      title={logo.label}
      style={{
        background: selected ? 'rgba(201,168,76,0.08)' : 'rgba(26,20,16,0.7)',
        border: selected
          ? '2px solid #C9A84C'
          : '1px solid rgba(201,168,76,0.12)',
        borderRadius: 6,
        padding: 12,
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        transition: 'all 0.18s ease',
        transform: selected ? 'scale(1.04)' : 'scale(1)',
        boxShadow: selected ? '0 0 18px rgba(201,168,76,0.2)' : 'none',
        position: 'relative',
      }}
    >
      {/* Group label badge */}
      <span style={{
        position: 'absolute',
        top: 6,
        left: 6,
        fontFamily: 'var(--mono)',
        fontSize: 8,
        fontWeight: 700,
        color: GROUP_COLORS[logo.group],
        letterSpacing: '0.05em',
        opacity: 0.9,
      }}>
        {logo.group}
      </span>
      {/* Logo number */}
      <span style={{
        position: 'absolute',
        top: 6,
        right: 8,
        fontFamily: 'var(--mono)',
        fontSize: 8,
        color: 'rgba(245,237,216,0.3)',
      }}>
        #{logo.id}
      </span>
      {/* SVG display */}
      <div
        style={{ width: 80, height: 80 }}
        dangerouslySetInnerHTML={{ __html: logo.svg }}
      />
      {/* Label */}
      <span style={{
        fontFamily: 'var(--mono)',
        fontSize: 7.5,
        color: selected ? 'var(--gold)' : 'rgba(245,237,216,0.45)',
        textAlign: 'center',
        lineHeight: 1.3,
        maxWidth: 90,
      }}>
        {logo.label}
      </span>
    </button>
  )
}

function PreviewPanel({ logo, onCopy, onDownload, copyFeedback }: {
  logo: Logo
  onCopy: () => void
  onDownload: () => void
  copyFeedback: boolean
}) {
  return (
    <div style={{
      background: 'rgba(16,12,8,0.85)',
      border: '1px solid rgba(201,168,76,0.2)',
      borderRadius: 8,
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
    }}>
      {/* Group label + number */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{
          fontFamily: 'var(--mono)',
          fontSize: 9,
          letterSpacing: '0.2em',
          color: GROUP_COLORS[logo.group],
          textTransform: 'uppercase',
          padding: '3px 10px',
          border: `1px solid ${GROUP_COLORS[logo.group]}`,
          borderRadius: 2,
          opacity: 0.85,
        }}>
          Group {logo.group} — {GROUP_NAMES[logo.group]}
        </span>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(245,237,216,0.3)' }}>
          #{logo.id} / 50
        </span>
      </div>

      {/* Large SVG preview */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(26,20,16,0.6)',
        border: '1px solid rgba(44,36,32,0.8)',
        borderRadius: 6,
        padding: 24,
        minHeight: 240,
      }}>
        <div
          style={{ width: 200, height: 200 }}
          dangerouslySetInnerHTML={{ __html: logo.svg }}
        />
      </div>

      {/* Label */}
      <div>
        <div style={{
          fontFamily: 'var(--cinzel)',
          fontSize: 16,
          fontWeight: 700,
          color: 'var(--parchment)',
          marginBottom: 4,
        }}>
          {logo.label}
        </div>
        <div style={{
          fontFamily: 'var(--mono)',
          fontSize: 9,
          color: 'var(--parchment-dim)',
          letterSpacing: '0.1em',
        }}>
          Logo #{logo.id} · Group {logo.group}
        </div>
      </div>

      {/* Action buttons */}
      <div style={{ display: 'flex', gap: 10 }}>
        <button
          onClick={onCopy}
          style={{
            flex: 1,
            padding: '10px 16px',
            background: copyFeedback ? 'rgba(201,168,76,0.25)' : 'rgba(212,56,13,0.15)',
            border: copyFeedback ? '1px solid #C9A84C' : '1px solid rgba(212,56,13,0.4)',
            borderRadius: 4,
            color: copyFeedback ? '#C9A84C' : 'var(--ember)',
            fontFamily: 'var(--mono)',
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: '0.15em',
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
        >
          {copyFeedback ? '✓ COPIED' : 'COPY SVG'}
        </button>
        <button
          onClick={onDownload}
          style={{
            flex: 1,
            padding: '10px 16px',
            background: 'rgba(26,20,16,0.8)',
            border: '1px solid rgba(201,168,76,0.25)',
            borderRadius: 4,
            color: 'var(--gold)',
            fontFamily: 'var(--mono)',
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: '0.15em',
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
        >
          DOWNLOAD SVG
        </button>
      </div>
    </div>
  )
}

export default function LogoPickerPage() {
  const [selected, setSelected] = useState<Logo>(LOGOS[6]) // default: #7
  const [filterGroup, setFilterGroup] = useState<string>('ALL')
  const [copyFeedback, setCopyFeedback] = useState(false)

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(selected.svg).then(() => {
      setCopyFeedback(true)
      setTimeout(() => setCopyFeedback(false), 1800)
    })
  }, [selected.svg])

  const handleDownload = useCallback(() => {
    const blob = new Blob([selected.svg], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `deviloftech-logo-${selected.id}.svg`
    a.click()
    URL.revokeObjectURL(url)
  }, [selected])

  const filteredLogos = filterGroup === 'ALL'
    ? LOGOS
    : LOGOS.filter(l => l.group === filterGroup)

  return (
    <div style={{ minHeight: '100vh', paddingTop: 60, paddingBottom: 80 }}>
      <div className="container">

        {/* ─── Header ─── */}
        <div style={{ marginBottom: 8 }}>
          <div className="section-eyebrow">Brand Identity</div>
          <h1 className="section-title" style={{ marginBottom: 8 }}>
            Logo Picker
          </h1>
          <p style={{
            fontFamily: 'var(--serif)',
            fontSize: 16,
            color: 'var(--parchment-dim)',
            marginBottom: 32,
            maxWidth: 560,
          }}>
            50 unique SVG logo concepts for the DevilOfTech brand. Click any logo to preview it at full size, then copy or download the raw SVG.
          </p>
        </div>

        {/* ─── Designer Notes ─── */}
        <NotesSection />

        {/* ─── Main layout: grid + panel ─── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 280px',
          gap: 32,
          alignItems: 'start',
        }}
        className="logo-picker-layout"
        >

          {/* Left: filter + grid */}
          <div>
            {/* Group filter tabs */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
              {['ALL', 'A', 'B', 'C', 'D', 'E'].map(g => (
                <button
                  key={g}
                  onClick={() => setFilterGroup(g)}
                  style={{
                    padding: '5px 14px',
                    background: filterGroup === g ? 'rgba(212,56,13,0.2)' : 'transparent',
                    border: filterGroup === g
                      ? '1px solid var(--ember)'
                      : '1px solid rgba(201,168,76,0.18)',
                    borderRadius: 3,
                    color: filterGroup === g ? 'var(--ember)' : 'rgba(245,237,216,0.5)',
                    fontFamily: 'var(--mono)',
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    cursor: 'pointer',
                    transition: 'all 0.14s ease',
                  }}
                >
                  {g === 'ALL' ? 'ALL 50' : `${g} — ${GROUP_NAMES[g]}`}
                </button>
              ))}
            </div>

            {/* Count indicator */}
            <div style={{
              fontFamily: 'var(--mono)',
              fontSize: 9,
              color: 'rgba(245,237,216,0.3)',
              letterSpacing: '0.15em',
              marginBottom: 16,
            }}>
              Showing {filteredLogos.length} logo{filteredLogos.length !== 1 ? 's' : ''}
            </div>

            {/* Logo grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: 10,
            }}
            className="logo-grid"
            >
              {filteredLogos.map(logo => (
                <LogoCard
                  key={logo.id}
                  logo={logo}
                  selected={selected.id === logo.id}
                  onClick={() => setSelected(logo)}
                />
              ))}
            </div>
          </div>

          {/* Right: preview panel */}
          <div style={{ position: 'sticky', top: 80 }}>
            <PreviewPanel
              logo={selected}
              onCopy={handleCopy}
              onDownload={handleDownload}
              copyFeedback={copyFeedback}
            />

            {/* Selected indicator -->  */}
            <div style={{
              marginTop: 16,
              padding: '12px 16px',
              background: 'rgba(139,0,0,0.1)',
              border: '1px solid rgba(139,0,0,0.25)',
              borderRadius: 4,
            }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 8, color: 'var(--ember)', letterSpacing: '0.2em', marginBottom: 4 }}>
                SELECTED
              </div>
              <div style={{ fontFamily: 'var(--cinzel)', fontSize: 13, color: 'var(--parchment)', fontWeight: 700 }}>
                #{selected.id} — {selected.label}
              </div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 8, color: 'var(--parchment-dim)', marginTop: 2 }}>
                Group {selected.group}: {GROUP_NAMES[selected.group]}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Responsive styles ─── */}
      <style>{`
        @media (max-width: 900px) {
          .logo-picker-layout {
            grid-template-columns: 1fr !important;
          }
          .logo-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          .logo-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        .logo-picker-layout > div:last-child {
          order: -1;
        }
        @media (min-width: 901px) {
          .logo-picker-layout > div:last-child {
            order: unset;
          }
        }
      `}</style>
    </div>
  )
}
