export const dynamic = 'force-dynamic'

import { connectDB } from '@/lib/mongodb'
import { BlogPost } from '@/lib/models/BlogPost'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { IBlogPost } from '@/types'
import MarkdownRenderer from '@/components/content/MarkdownRenderer'

async function getPost(slug: string): Promise<IBlogPost | null> {
  await connectDB()
  const doc = await BlogPost.findOne({ slug, published: true }).lean()
  if (!doc) return null
  return JSON.parse(JSON.stringify(doc))
}

function formatDate(d?: Date | string) {
  if (!d) return ''
  return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

const CATEGORY_COLORS: Record<string, string> = {
  ai: 'var(--ember)', coding: 'var(--gold)', news: '#4a9eff', tutorial: '#4caf50', opinion: '#e040fb',
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) {
    return { title: 'Post Not Found', description: 'This article could not be found.' }
  }
  const description = post.excerpt ? post.excerpt.slice(0, 160) : undefined
  const ogImages = post.thumbnail
    ? [{ url: post.thumbnail, width: 1200, height: 630, alt: post.title }]
    : [{ url: '/og-default.png', width: 1200, height: 630, alt: 'DevilOfTech' }]
  return {
    title: post.title,
    description,
    openGraph: {
      type: 'article' as const,
      title: post.title,
      description,
      images: ogImages,
      publishedTime: post.publishedAt ? new Date(post.publishedAt).toISOString() : undefined,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: post.title,
      description,
      images: ogImages.map((img) => img.url),
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  return (
    <article style={{ minHeight: '100vh', paddingTop: 120, paddingBottom: 100 }}>
      <div className="container" style={{ maxWidth: 780 }}>
        {/* Back */}
        <Link href="/blog" style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--parchment-dim)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 40 }}>
          ← All Articles
        </Link>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.2em', color: CATEGORY_COLORS[post.category] || 'var(--ember)', textTransform: 'uppercase', padding: '4px 10px', border: `1px solid ${CATEGORY_COLORS[post.category] || 'var(--ember)'}`, borderRadius: 2, opacity: 0.8 }}>
              {post.category}
            </span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(245,237,216,0.4)' }}>
              {formatDate(post.publishedAt)}
            </span>
          </div>

          <h1 style={{ fontFamily: 'var(--cinzel)', fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 900, color: 'var(--parchment)', lineHeight: 1.2, marginBottom: 20 }}>
            {post.title}
          </h1>

          <p style={{ fontFamily: 'var(--serif)', fontSize: 18, color: 'var(--parchment-dim)', lineHeight: 1.7, fontStyle: 'italic' }}>
            {post.excerpt}
          </p>
        </div>

        {/* Thumbnail */}
        {post.thumbnail && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.thumbnail} alt={post.title} style={{ width: '100%', borderRadius: 6, marginBottom: 48, display: 'block', border: '1px solid rgba(201,168,76,0.15)' }} />
        )}

        <div className="divider" style={{ marginBottom: 48 }} />

        {/* Content */}
        <MarkdownRenderer content={post.content} />

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div style={{ marginTop: 60, paddingTop: 32, borderTop: '1px solid rgba(201,168,76,0.12)' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.2em', color: 'var(--parchment-dim)', marginBottom: 14 }}>TAGS</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {post.tags.map(tag => (
                <span key={tag} style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--parchment-dim)', background: 'rgba(201,168,76,0.08)', padding: '5px 12px', borderRadius: 2, border: '1px solid rgba(201,168,76,0.15)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: 48 }}>
          <Link href="/blog" className="btn-ghost">← Back to Articles</Link>
        </div>
      </div>
    </article>
  )
}
