export const dynamic = 'force-dynamic'

import { connectDB } from '@/lib/mongodb'
import { BlogPost } from '@/lib/models/BlogPost'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { IBlogPost } from '@/types'

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

async function getPostsByTag(tag: string): Promise<IBlogPost[]> {
  await connectDB()
  const docs = await BlogPost.find({
    published: true,
    tags: { $regex: new RegExp(`^${tag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, 'i') },
  })
    .sort({ publishedAt: -1 })
    .lean()
  return JSON.parse(JSON.stringify(docs))
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }) {
  const { tag: rawTag } = await params
  const tag = decodeURIComponent(rawTag)
  return {
    title: `#${tag}`,
    description: `Articles tagged with ${tag}`,
  }
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag: rawTag } = await params
  const tag = decodeURIComponent(rawTag)

  const posts = await getPostsByTag(tag)

  if (posts.length === 0) {
    // Still render the page with empty state rather than 404
  }

  return (
    <section style={{ minHeight: '100vh', paddingTop: 120, paddingBottom: 100 }}>
      <div className="container">
        {/* Back link */}
        <Link
          href="/tags"
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 10,
            letterSpacing: '0.16em',
            color: 'var(--parchment-dim)',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 40,
          }}
        >
          ← All Tags
        </Link>

        <div className="section-eyebrow">Tag</div>
        <div className="section-title">#{tag}</div>

        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--parchment-dim)', marginBottom: 48 }}>
          {posts.length} {posts.length === 1 ? 'article' : 'articles'}
        </div>

        {posts.length === 0 ? (
          <div style={{ color: 'var(--parchment-dim)', fontFamily: 'var(--mono)', fontSize: 13, textAlign: 'center', padding: '60px 0' }}>
            No articles tagged with &apos;{tag}&apos; yet.
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
            {posts.map((post) => (
              <Link key={post._id} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                <article style={{
                  background: 'rgba(44,36,32,0.4)',
                  border: '1px solid rgba(201,168,76,0.12)',
                  borderRadius: 6,
                  overflow: 'hidden',
                  height: '100%',
                }}>
                  {post.thumbnail && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={post.thumbnail} alt={post.title} style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block' }} />
                  )}
                  <div style={{ padding: '20px 22px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                      <span style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.18em', color: CATEGORY_COLORS[post.category] || 'var(--ember)', textTransform: 'uppercase' }}>
                        {post.category}
                      </span>
                      <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(245,237,216,0.35)' }}>
                        {formatDate(post.publishedAt)}
                      </span>
                    </div>
                    <h2 style={{ fontFamily: 'var(--cinzel)', fontSize: 16, fontWeight: 700, color: 'var(--parchment)', lineHeight: 1.4, marginBottom: 10 }}>
                      {post.title}
                    </h2>
                    <p style={{ fontFamily: 'var(--serif)', fontSize: 14, color: 'var(--parchment-dim)', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
