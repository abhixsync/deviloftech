'use client'

import { useState } from 'react'
import type { IResource } from '@/types'

const CATEGORIES = ['all', 'tool', 'course', 'book', 'channel', 'library', 'guide', 'cheatsheet', 'template', 'roadmap', 'podcast', 'community', 'docs', 'other']

const CATEGORY_COLORS: Record<string, string> = {
  tool: 'var(--ember)',
  course: 'var(--gold)',
  book: '#4a9eff',
  channel: '#4caf50',
  library: '#e040fb',
  guide: '#ff9800',
  cheatsheet: '#00bcd4',
  template: '#8bc34a',
  roadmap: '#ff5722',
  podcast: '#9c27b0',
  community: '#03a9f4',
  docs: '#607d8b',
  other: 'var(--parchment-dim)',
}

export default function ResourcesGrid({ resources }: { resources: IResource[] }) {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all' ? resources : resources.filter(r => r.category === filter)

  return (
    <>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 40 }}>
        {CATEGORIES.filter(c => c === 'all' || resources.some(r => r.category === c)).map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.16em',
              textTransform: 'uppercase', padding: '8px 18px', borderRadius: 3, cursor: 'pointer',
              border: filter === cat ? '1px solid var(--ember)' : '1px solid rgba(201,168,76,0.2)',
              background: filter === cat ? 'rgba(212,56,13,0.12)' : 'transparent',
              color: filter === cat ? 'var(--ember)' : 'var(--parchment-dim)',
              transition: 'all 0.2s',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ color: 'var(--parchment-dim)', fontFamily: 'var(--mono)', fontSize: 13, textAlign: 'center', padding: '60px 0' }}>
          No resources yet. Check back soon.
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
        {filtered.map((res) => (
          <a
            key={res._id}
            href={res.fileUrl || res.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <div style={{
              background: 'rgba(44,36,32,0.4)', border: '1px solid rgba(201,168,76,0.12)',
              borderRadius: 6, padding: '22px 22px', height: '100%',
              transition: 'transform 0.2s, border-color 0.2s',
              display: 'flex', flexDirection: 'column', gap: 12,
            }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-3px)'; el.style.borderColor = 'rgba(212,56,13,0.35)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(0)'; el.style.borderColor = 'rgba(201,168,76,0.12)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  {res.icon && <span style={{ fontSize: 22 }}>{res.icon}</span>}
                  <h3 style={{ fontFamily: 'var(--cinzel)', fontSize: 15, fontWeight: 700, color: 'var(--parchment)' }}>
                    {res.name}
                  </h3>
                </div>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 8, letterSpacing: '0.12em', color: res.isFree ? '#4caf50' : 'var(--gold)', border: `1px solid ${res.isFree ? '#4caf50' : 'var(--gold)'}`, padding: '3px 7px', borderRadius: 2, opacity: 0.75, flexShrink: 0 }}>
                  {res.isFree ? 'FREE' : 'PAID'}
                </span>
              </div>

              <p style={{ fontFamily: 'var(--serif)', fontSize: 14, color: 'var(--parchment-dim)', lineHeight: 1.6, flex: 1 }}>
                {res.description}
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.15em', color: CATEGORY_COLORS[res.category] || 'var(--ember)', textTransform: 'uppercase' }}>
                  {res.category}
                </span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(245,237,216,0.3)' }}>
                  {res.fileUrl ? '↓ Download' : '↗ Visit'}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  )
}
