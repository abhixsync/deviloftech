'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface RecentPost { _id: string; title: string; published: boolean; createdAt?: string; category?: string }
interface RecentVideo { _id: string; title: string; published: boolean; publishedAt?: string; category?: string }
interface RecentNews { _id: string; headline: string; published: boolean; publishedAt?: string; sourceName?: string }
interface RecentResource { _id: string; name: string; published: boolean; category?: string; isFree?: boolean }

interface DashboardData {
  counts: { posts: number; videos: number; news: number; resources: number }
  recent: {
    posts: RecentPost[]
    videos: RecentVideo[]
    news: RecentNews[]
    resources: RecentResource[]
  }
}

const tiles = [
  { label: 'Blog Posts', key: 'posts' as const, href: '/admin/posts', newHref: '/admin/posts/new', icon: '✍', color: 'var(--ember)' },
  { label: 'Videos', key: 'videos' as const, href: '/admin/videos', newHref: '/admin/videos/new', icon: '▶', color: 'var(--gold)' },
  { label: 'News Items', key: 'news' as const, href: '/admin/news', newHref: '/admin/news/new', icon: '📡', color: '#4a9eff' },
  { label: 'Resources', key: 'resources' as const, href: '/admin/resources', newHref: '/admin/resources/new', icon: '🔧', color: '#7c5cbf' },
]

function formatDate(d?: string) {
  if (!d) return ''
  return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function PublishedDot({ published }: { published: boolean }) {
  return (
    <span style={{
      display: 'inline-block', width: 7, height: 7, borderRadius: '50%',
      background: published ? '#4caf50' : 'rgba(245,237,216,0.2)',
      flexShrink: 0,
    }} />
  )
}

export default function AdminDashboard() {
  const [data, setData] = useState<DashboardData | null>(null)

  useEffect(() => {
    fetch('/api/admin/dashboard').then(r => r.json()).then(setData)
  }, [])

  const counts = data?.counts ?? { posts: 0, videos: 0, news: 0, resources: 0 }

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 36 }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.22em', color: 'var(--ember)', marginBottom: 8 }}>
          ADMIN DASHBOARD
        </div>
        <h1 style={{ fontFamily: 'var(--cinzel)', fontSize: 28, fontWeight: 900, color: 'var(--parchment)' }}>
          The Forge Control Room
        </h1>
      </div>

      {/* Count tiles */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 20, marginBottom: 48 }}>
        {tiles.map((tile) => (
          <Link key={tile.key} href={tile.href} style={{ textDecoration: 'none' }}>
            <div style={{
              background: 'rgba(44,36,32,0.5)', border: '1px solid rgba(201,168,76,0.15)',
              borderRadius: 6, padding: '24px 20px', position: 'relative', overflow: 'hidden',
              transition: 'border-color 0.2s',
            }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{tile.icon}</div>
              <div style={{ fontFamily: 'var(--display)', fontSize: 32, fontWeight: 900, color: tile.color, lineHeight: 1 }}>
                {counts[tile.key]}
              </div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.15em', color: 'var(--parchment-dim)', marginTop: 6 }}>
                {tile.label.toUpperCase()}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Recent Activity */}
      <div style={{ marginBottom: 48 }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.22em', color: 'var(--parchment-dim)', marginBottom: 20 }}>
          RECENT ACTIVITY
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>

          {/* Recent Posts */}
          <div style={{ background: 'rgba(44,36,32,0.5)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: 6, padding: '20px 18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.18em', color: 'var(--ember)' }}>BLOG POSTS</span>
              <Link href="/admin/posts/new" style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--gold)', textDecoration: 'none' }}>+ New Post</Link>
            </div>
            {!data ? (
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(245,237,216,0.3)' }}>Loading...</div>
            ) : data.recent.posts.length === 0 ? (
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(245,237,216,0.3)' }}>No items yet</div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {data.recent.posts.map(post => (
                  <Link key={post._id} href={`/admin/posts/${post._id}`} style={{ textDecoration: 'none', display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <PublishedDot published={post.published} />
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontFamily: 'var(--serif)', fontSize: 13, color: 'var(--parchment)', lineHeight: 1.3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{post.title}</div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(245,237,216,0.4)', marginTop: 2 }}>{formatDate(post.createdAt)}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
            <Link href="/admin/posts" style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(245,237,216,0.4)', textDecoration: 'none', marginTop: 14, letterSpacing: '0.12em' }}>View all →</Link>
          </div>

          {/* Recent Videos */}
          <div style={{ background: 'rgba(44,36,32,0.5)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: 6, padding: '20px 18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.18em', color: 'var(--gold)' }}>VIDEOS</span>
              <Link href="/admin/videos/new" style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--gold)', textDecoration: 'none' }}>+ New Video</Link>
            </div>
            {!data ? (
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(245,237,216,0.3)' }}>Loading...</div>
            ) : data.recent.videos.length === 0 ? (
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(245,237,216,0.3)' }}>No items yet</div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {data.recent.videos.map(video => (
                  <Link key={video._id} href={`/admin/videos/${video._id}`} style={{ textDecoration: 'none', display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <PublishedDot published={video.published} />
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontFamily: 'var(--serif)', fontSize: 13, color: 'var(--parchment)', lineHeight: 1.3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{video.title}</div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(245,237,216,0.4)', marginTop: 2 }}>{formatDate(video.publishedAt)}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
            <Link href="/admin/videos" style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(245,237,216,0.4)', textDecoration: 'none', marginTop: 14, letterSpacing: '0.12em' }}>View all →</Link>
          </div>

          {/* Recent News */}
          <div style={{ background: 'rgba(44,36,32,0.5)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: 6, padding: '20px 18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.18em', color: '#4a9eff' }}>NEWS</span>
              <Link href="/admin/news/new" style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--gold)', textDecoration: 'none' }}>+ New News</Link>
            </div>
            {!data ? (
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(245,237,216,0.3)' }}>Loading...</div>
            ) : data.recent.news.length === 0 ? (
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(245,237,216,0.3)' }}>No items yet</div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {data.recent.news.map(item => (
                  <Link key={item._id} href={`/admin/news/${item._id}`} style={{ textDecoration: 'none', display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <PublishedDot published={item.published} />
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontFamily: 'var(--serif)', fontSize: 13, color: 'var(--parchment)', lineHeight: 1.3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.headline}</div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(245,237,216,0.4)', marginTop: 2 }}>{item.sourceName ? `${item.sourceName} · ` : ''}{formatDate(item.publishedAt)}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
            <Link href="/admin/news" style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(245,237,216,0.4)', textDecoration: 'none', marginTop: 14, letterSpacing: '0.12em' }}>View all →</Link>
          </div>

          {/* Recent Resources */}
          <div style={{ background: 'rgba(44,36,32,0.5)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: 6, padding: '20px 18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.18em', color: '#7c5cbf' }}>RESOURCES</span>
              <Link href="/admin/resources/new" style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--gold)', textDecoration: 'none' }}>+ New Resource</Link>
            </div>
            {!data ? (
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(245,237,216,0.3)' }}>Loading...</div>
            ) : data.recent.resources.length === 0 ? (
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(245,237,216,0.3)' }}>No items yet</div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {data.recent.resources.map(res => (
                  <Link key={res._id} href={`/admin/resources/${res._id}`} style={{ textDecoration: 'none', display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <PublishedDot published={res.published} />
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontFamily: 'var(--serif)', fontSize: 13, color: 'var(--parchment)', lineHeight: 1.3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{res.name}</div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(245,237,216,0.4)', marginTop: 2 }}>
                        {res.category}{res.isFree !== undefined ? ` · ${res.isFree ? 'Free' : 'Paid'}` : ''}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
            <Link href="/admin/resources" style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(245,237,216,0.4)', textDecoration: 'none', marginTop: 14, letterSpacing: '0.12em' }}>View all →</Link>
          </div>

        </div>
      </div>

      {/* Quick add buttons */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 12 }}>
        {tiles.map((tile) => (
          <Link key={tile.key} href={tile.newHref} className="btn-ghost" style={{ justifyContent: 'center', fontSize: 10 }}>
            + New {tile.label.replace(' Items', '').replace(' Posts', ' Post')}
          </Link>
        ))}
      </div>
    </div>
  )
}
