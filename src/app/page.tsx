export const dynamic = 'force-dynamic'

import Link from 'next/link'
import { connectDB } from '@/lib/mongodb'
import { Profile } from '@/lib/models/Profile'
import { Video } from '@/lib/models/Video'
import { BlogPost } from '@/lib/models/BlogPost'
import { NewsItem } from '@/lib/models/NewsItem'
import HeroFlames from '@/components/home/HeroFlames'
import RevealWrapper from '@/components/ui/RevealWrapper'
import type { IProfile, IVideo, IBlogPost, INewsItem } from '@/types'

async function getData() {
  await connectDB()
  const [profileDoc, videoDoc, postDocs, newsDocs] = await Promise.all([
    Profile.findOne({}).lean(),
    Video.findOne({ published: true }).sort({ publishedAt: -1 }).lean(),
    BlogPost.find({ published: true }).sort({ publishedAt: -1 }).limit(3).lean(),
    NewsItem.find({ published: true }).sort({ publishedAt: -1 }).limit(3).lean(),
  ])
  return {
    profile: profileDoc ? (JSON.parse(JSON.stringify(profileDoc)) as IProfile) : null,
    video: videoDoc ? (JSON.parse(JSON.stringify(videoDoc)) as IVideo) : null,
    posts: JSON.parse(JSON.stringify(postDocs)) as IBlogPost[],
    news: JSON.parse(JSON.stringify(newsDocs)) as INewsItem[],
  }
}

function formatDate(d?: Date | string) {
  if (!d) return ''
  return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

const CATEGORY_COLORS: Record<string, string> = {
  ai: 'var(--ember)', coding: 'var(--circuit)', news: 'var(--circuit)',
  tutorial: '#4caf50', opinion: '#e040fb', tech: 'var(--circuit)', industry: '#4caf50',
}

export default async function HomePage() {
  const { profile, video, posts, news } = await getData()

  const siteName  = profile?.name    ?? 'DevilOfTech'
  const heroTag   = profile?.tagline ?? 'ORGANIC · MACHINE'
  const heroRole  = profile?.roles?.length ? profile.roles.join(' · ') : 'YouTube · Instagram · Articles'
  const bio       = profile?.bio     ?? 'Your go-to source for tech news, AI insights, and coding knowledge — delivered straight to your feed.'
  const heroStats = profile?.heroStats?.length ? profile.heroStats : [
    { number: 'YT',  label: 'YouTube Channel', sub: '@deviloftech' },
    { number: 'IG',  label: 'Instagram',        sub: '@deviloftech' },
    { number: '∞',   label: 'Topics Covered',   sub: 'AI · Coding · Tech News' },
  ]
  const socialLinks = profile?.socialLinks

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section id="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-left">
              <div className="hero-tag">{heroTag}</div>
              <div className="hero-name">{siteName}</div>
              <div className="hero-role">{heroRole}</div>
              <p className="hero-bio">{bio}</p>
              <div className="hero-cta">
                <Link href="/videos" className="btn-primary">▶ Watch Videos</Link>
                <Link href="/blog" className="btn-ghost-circuit">⌨ Read Articles</Link>
              </div>
            </div>

            {/* Channel card */}
            <div className="hero-card">
              <div className="stat-row">
                {heroStats.map((stat, i) => (
                  <div key={i} className="stat-item">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                    {stat.sub && <div className="stat-sub">{stat.sub}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <HeroFlames />
      </section>

      <div className="divider" />

      {/* ═══ LATEST VIDEO ═══ */}
      {video && (
        <RevealWrapper>
          <section style={{ background: 'rgba(16,12,8,0.5)', padding: '80px 0' }}>
            <div className="container">
              <div className="section-eyebrow">Latest</div>
              <div className="section-title" style={{ marginBottom: 32 }}>Recent Video</div>
              <div className="latest-video-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 48, alignItems: 'start' }}>
                <div style={{ borderRadius: 6, overflow: 'hidden', border: '1px solid rgba(201,168,76,0.15)', boxShadow: '0 0 60px rgba(212,56,13,0.15)', position: 'relative', paddingTop: '56.25%', flex: 1 }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <div style={{ paddingTop: 8 }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.2em', color: CATEGORY_COLORS[video.category] || 'var(--ember)', textTransform: 'uppercase', padding: '4px 10px', border: `1px solid ${CATEGORY_COLORS[video.category] || 'var(--ember)'}`, borderRadius: 2, display: 'inline-block', marginBottom: 16, opacity: 0.8 }}>
                    {video.category}
                  </span>
                  <h2 style={{ fontFamily: 'var(--cinzel)', fontSize: 22, fontWeight: 900, color: 'var(--parchment)', lineHeight: 1.3, marginBottom: 16 }}>
                    {video.title}
                  </h2>
                  {video.description && (
                    <p style={{ fontFamily: 'var(--serif)', fontSize: 15, color: 'var(--parchment-dim)', lineHeight: 1.7, marginBottom: 24, display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {video.description}
                    </p>
                  )}
                  <div style={{ display: 'flex', gap: 12 }}>
                    <a href={`https://youtube.com/watch?v=${video.youtubeId}`} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 10 }}>
                      Watch on YouTube ↗
                    </a>
                    <Link href="/videos" className="btn-ghost" style={{ fontSize: 10 }}>All Videos</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealWrapper>
      )}

      <div className="divider" />

      {/* ═══ RECENT POSTS ═══ */}
      {posts.length > 0 && (
        <RevealWrapper>
          <section style={{ padding: '80px 0' }}>
            <div className="container">
              <div className="section-eyebrow">From the Blog</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 40 }}>
                <div className="section-title" style={{ marginBottom: 0 }}>Recent Articles</div>
                <Link href="/blog" style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', color: 'var(--gold)', textDecoration: 'none' }}>All Articles →</Link>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
                {posts.map((post) => (
                  <Link key={post._id} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                    <article className="content-card" style={{ background: 'rgba(44,36,32,0.4)', border: '1px solid rgba(201,168,76,0.12)', borderRadius: 6, padding: '22px 24px', height: '100%' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.18em', color: CATEGORY_COLORS[post.category] || 'var(--ember)', textTransform: 'uppercase' }}>{post.category}</span>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(245,237,216,0.3)' }}>{formatDate(post.publishedAt)}</span>
                      </div>
                      <h3 style={{ fontFamily: 'var(--cinzel)', fontSize: 15, fontWeight: 700, color: 'var(--parchment)', lineHeight: 1.4, marginBottom: 10 }}>{post.title}</h3>
                      <p style={{ fontFamily: 'var(--serif)', fontSize: 14, color: 'var(--parchment-dim)', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{post.excerpt}</p>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </RevealWrapper>
      )}

      <div className="divider" />

      {/* ═══ LATEST NEWS ═══ */}
      {news.length > 0 && (
        <RevealWrapper>
          <section style={{ background: 'rgba(16,12,8,0.4)', padding: '80px 0' }}>
            <div className="container">
              <div className="section-eyebrow">Tech & AI</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 40 }}>
                <div className="section-title" style={{ marginBottom: 0 }}>Latest News</div>
                <Link href="/news" style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', color: 'var(--gold)', textDecoration: 'none' }}>All News →</Link>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {news.map((item) => (
                  <div key={item._id} style={{ background: 'rgba(44,36,32,0.35)', border: '1px solid rgba(201,168,76,0.1)', borderRadius: 4, padding: '18px 24px', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                    <div style={{ width: 3, minHeight: 40, background: CATEGORY_COLORS[item.category] || 'var(--ember)', borderRadius: 2, flexShrink: 0, marginTop: 4 }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', gap: 12, marginBottom: 8 }}>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.15em', color: CATEGORY_COLORS[item.category] || 'var(--ember)', textTransform: 'uppercase' }}>{item.category}</span>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(245,237,216,0.3)' }}>{item.sourceName}</span>
                      </div>
                      <h3 style={{ fontFamily: 'var(--cinzel)', fontSize: 15, fontWeight: 700, color: 'var(--parchment)', lineHeight: 1.4, marginBottom: 8 }}>{item.headline}</h3>
                      <p style={{ fontFamily: 'var(--serif)', fontSize: 14, color: 'var(--parchment-dim)', lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.summary}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </RevealWrapper>
      )}

      <div className="divider" />

      {/* ═══ SOCIAL CTA ═══ */}
      <RevealWrapper>
        <section style={{ padding: '80px 0', textAlign: 'center' }}>
          <div className="container">
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Follow Along</div>
            <div className="section-title" style={{ textAlign: 'center' }}>Join the Community</div>
            <p style={{ fontFamily: 'var(--serif)', fontSize: 17, color: 'var(--parchment-dim)', maxWidth: 500, margin: '0 auto 40px', lineHeight: 1.7 }}>
              Stay updated with the latest in tech, AI breakthroughs, and coding tutorials — straight from the source.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={socialLinks?.youtube || 'https://youtube.com/@deviloftech'} target="_blank" rel="noopener noreferrer" className="btn-primary">
                ▶ Subscribe on YouTube
              </a>
              <a href={socialLinks?.instagram || 'https://instagram.com/deviloftech'} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                ◈ Follow on Instagram
              </a>
            </div>
          </div>
        </section>
      </RevealWrapper>

      <div className="divider" />

      {/* ═══ CONTENT TEASERS ═══ */}
      <section style={{ background: 'rgba(26,20,16,0.6)', padding: '80px 0' }}>
        <div className="container">
          <div className="section-eyebrow">Explore</div>
          <div className="section-title">Everything DevilOfTech</div>
          <div className="teasers-grid">
            <RevealWrapper>
              <Link href="/videos" className="teaser-card">
                <div className="teaser-num">▶</div>
                <div className="teaser-label">Watch</div>
                <div className="teaser-title">Videos</div>
                <p className="teaser-desc">Deep dives, tutorials, and news breakdowns — all on YouTube.</p>
                <div className="teaser-arrow">Watch Now →</div>
              </Link>
            </RevealWrapper>
            <RevealWrapper>
              <Link href="/news" className="teaser-card">
                <div className="teaser-num">📡</div>
                <div className="teaser-label">Stay Current</div>
                <div className="teaser-title">News</div>
                <p className="teaser-desc">Curated tech and AI news with my personal take on what matters.</p>
                <div className="teaser-arrow">Read News →</div>
              </Link>
            </RevealWrapper>
            <RevealWrapper>
              <Link href="/resources" className="teaser-card">
                <div className="teaser-num">🔧</div>
                <div className="teaser-label">Curated</div>
                <div className="teaser-title">Resources</div>
                <p className="teaser-desc">Tools, courses, and libraries I personally use and recommend.</p>
                <div className="teaser-arrow">Explore →</div>
              </Link>
            </RevealWrapper>
          </div>
        </div>
      </section>
    </>
  )
}
