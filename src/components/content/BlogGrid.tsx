'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { IBlogPost } from '@/types'

const CATEGORIES = ['all', 'ai', 'coding', 'news', 'tutorial', 'opinion']

const CATEGORY_COLORS: Record<string, string> = {
  ai: 'var(--ember)',
  coding: 'var(--gold)',
  news: '#4a9eff',
  tutorial: '#4caf50',
  opinion: '#e040fb',
}

function formatDate(d?: Date | string) {
  if (!d) return ''
  return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

export default function BlogGrid({ posts }: { posts: IBlogPost[] }) {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all' ? posts : posts.filter(p => p.category === filter)

  return (
    <>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 40 }}>
        {CATEGORIES.filter(c => c === 'all' || posts.some(p => p.category === c)).map(cat => (
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
          No posts yet. Check back soon.
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
        {filtered.map((post) => (
          <Link key={post._id} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
            <article style={{
              background: 'rgba(44,36,32,0.4)', border: '1px solid rgba(201,168,76,0.12)',
              borderRadius: 6, overflow: 'hidden', height: '100%',
              transition: 'transform 0.2s, border-color 0.2s',
            }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-4px)'; el.style.borderColor = 'rgba(212,56,13,0.4)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(0)'; el.style.borderColor = 'rgba(201,168,76,0.12)' }}
            >
              {post.thumbnail && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={post.thumbnail} alt={post.title} style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block' }} />
              )}
              <div style={{ padding: '20px 22px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.18em', color: CATEGORY_COLORS[post.category] || 'var(--ember)', textTransform: 'uppercase' }}>
                    {post.category}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(245,237,216,0.35)' }}>
                      {formatDate(post.publishedAt)}
                    </span>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(245,237,216,0.35)' }}>
                      👁 {post.views || 0}
                    </span>
                  </span>
                </div>
                <h2 style={{ fontFamily: 'var(--cinzel)', fontSize: 16, fontWeight: 700, color: 'var(--parchment)', lineHeight: 1.4, marginBottom: 10 }}>
                  {post.title}
                </h2>
                <p style={{ fontFamily: 'var(--serif)', fontSize: 14, color: 'var(--parchment-dim)', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {post.excerpt}
                </p>
                {post.tags && post.tags.length > 0 && (
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 14 }}>
                    {post.tags.slice(0, 3).map(tag => (
                      <span key={tag} style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.1em', color: 'var(--parchment-dim)', background: 'rgba(201,168,76,0.08)', padding: '3px 8px', borderRadius: 2 }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </>
  )
}
