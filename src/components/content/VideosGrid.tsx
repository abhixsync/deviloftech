'use client'

import { useState } from 'react'
import type { IVideo } from '@/types'

const CATEGORIES = ['all', 'ai', 'coding', 'tutorial', 'shorts', 'news']

const CATEGORY_COLORS: Record<string, string> = {
  ai: 'var(--ember)',
  coding: 'var(--gold)',
  tutorial: '#4a9eff',
  shorts: '#e040fb',
  news: '#4caf50',
}

export default function VideosGrid({ videos }: { videos: IVideo[] }) {
  const [filter, setFilter] = useState('all')
  const [activeVideo, setActiveVideo] = useState<IVideo | null>(null)

  const filtered = filter === 'all' ? videos : videos.filter(v => v.category === filter)

  return (
    <>
      {/* Category filter */}
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 40 }}>
        {CATEGORIES.filter(c => c === 'all' || videos.some(v => v.category === c)).map(cat => (
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
          No videos yet. Check back soon.
        </div>
      )}

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
        {filtered.map((video) => (
          <div
            key={video._id}
            onClick={() => setActiveVideo(video)}
            style={{ cursor: 'pointer', borderRadius: 6, overflow: 'hidden', border: '1px solid rgba(201,168,76,0.12)', background: 'rgba(44,36,32,0.4)', transition: 'transform 0.2s, border-color 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(212,56,13,0.4)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(201,168,76,0.12)' }}
          >
            <div style={{ position: 'relative', paddingTop: '56.25%', background: '#0a0805' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={video.thumbnail} alt={video.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.2)' }}>
                <div style={{ width: 48, height: 48, background: 'rgba(212,56,13,0.85)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, boxShadow: '0 0 20px rgba(212,56,13,0.4)' }}>▶</div>
              </div>
              {video.duration && (
                <div style={{ position: 'absolute', bottom: 8, right: 8, background: 'rgba(0,0,0,0.75)', fontFamily: 'var(--mono)', fontSize: 10, color: '#fff', padding: '2px 6px', borderRadius: 2 }}>
                  {video.duration}
                </div>
              )}
            </div>
            <div style={{ padding: '14px 16px' }}>
              <div style={{ fontFamily: 'var(--cinzel)', fontSize: 14, color: 'var(--parchment)', lineHeight: 1.4, marginBottom: 10, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {video.title}
              </div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.15em', color: CATEGORY_COLORS[video.category] || 'var(--ember)', textTransform: 'uppercase' }}>
                {video.category}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.88)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}
        >
          <div onClick={e => e.stopPropagation()} style={{ width: '100%', maxWidth: 900, position: 'relative' }}>
            <button
              onClick={() => setActiveVideo(null)}
              style={{ position: 'absolute', top: -44, right: 0, background: 'none', border: 'none', color: 'var(--parchment-dim)', fontSize: 24, cursor: 'pointer', fontFamily: 'var(--mono)' }}
            >✕</button>
            <div style={{ paddingTop: '56.25%', position: 'relative', borderRadius: 6, overflow: 'hidden', boxShadow: '0 0 60px rgba(212,56,13,0.3)' }}>
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
            <div style={{ fontFamily: 'var(--cinzel)', fontSize: 16, color: 'var(--parchment)', marginTop: 16 }}>{activeVideo.title}</div>
          </div>
        </div>
      )}
    </>
  )
}
