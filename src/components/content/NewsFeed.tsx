'use client'

import { useState } from 'react'
import type { INewsItem } from '@/types'

const CATEGORIES = ['all', 'ai', 'coding', 'tech', 'industry']

const CATEGORY_COLORS: Record<string, string> = {
  ai: 'var(--ember)', coding: 'var(--gold)', tech: '#4a9eff', industry: '#4caf50',
}

function timeAgo(d?: Date | string) {
  if (!d) return ''
  const diff = Date.now() - new Date(d).getTime()
  const days = Math.floor(diff / 86400000)
  if (days === 0) return 'Today'
  if (days === 1) return 'Yesterday'
  if (days < 7) return `${days}d ago`
  if (days < 30) return `${Math.floor(days / 7)}w ago`
  return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

export default function NewsFeed({ items }: { items: INewsItem[] }) {
  const [filter, setFilter] = useState('all')
  const [expanded, setExpanded] = useState<Set<string>>(new Set())

  const filtered = filter === 'all' ? items : items.filter(i => i.category === filter)

  function toggleExpand(id: string) {
    setExpanded(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 40 }}>
        {CATEGORIES.filter(c => c === 'all' || items.some(i => i.category === c)).map(cat => (
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
          No news yet. Check back soon.
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {filtered.map((item) => {
          const isExpanded = expanded.has(item._id!)
          return (
            <div key={item._id} style={{ border: '1px solid rgba(201,168,76,0.1)', borderRadius: 4, background: 'rgba(44,36,32,0.35)', overflow: 'hidden' }}>
              <div style={{ padding: '20px 24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 12 }}>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexShrink: 0 }}>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.15em', color: CATEGORY_COLORS[item.category] || 'var(--ember)', textTransform: 'uppercase' }}>
                      {item.category}
                    </span>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(245,237,216,0.3)' }}>
                      {timeAgo(item.publishedAt)}
                    </span>
                  </div>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(245,237,216,0.3)', textAlign: 'right' }}>
                    {item.sourceName}
                  </span>
                </div>

                <h2 style={{ fontFamily: 'var(--cinzel)', fontSize: 16, fontWeight: 700, color: 'var(--parchment)', lineHeight: 1.4, marginBottom: 10 }}>
                  {item.headline}
                </h2>
                <p style={{ fontFamily: 'var(--serif)', fontSize: 14, color: 'var(--parchment-dim)', lineHeight: 1.6 }}>
                  {item.summary}
                </p>

                {item.myTake && (
                  <button
                    onClick={() => toggleExpand(item._id!)}
                    style={{ marginTop: 14, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.14em', color: 'var(--gold)', padding: 0 }}
                  >
                    {isExpanded ? '▲ Hide my take' : '▼ My take'}
                  </button>
                )}

                {item.myTake && isExpanded && (
                  <div style={{ marginTop: 14, padding: '14px 16px', background: 'rgba(201,168,76,0.06)', borderLeft: '2px solid var(--gold)', borderRadius: '0 3px 3px 0' }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.16em', color: 'var(--gold)', marginBottom: 8 }}>MY TAKE</div>
                    <p style={{ fontFamily: 'var(--serif)', fontSize: 14, color: 'var(--parchment)', lineHeight: 1.6, fontStyle: 'italic' }}>{item.myTake}</p>
                  </div>
                )}

                <div style={{ marginTop: 16 }}>
                  <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.14em', color: 'rgba(245,237,216,0.4)', textDecoration: 'none' }}>
                    Read source ↗
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
