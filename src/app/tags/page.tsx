export const dynamic = 'force-dynamic'

import { connectDB } from '@/lib/mongodb'
import { BlogPost } from '@/lib/models/BlogPost'
import Link from 'next/link'
import type { IBlogPost } from '@/types'

export const metadata = {
  title: 'Tags',
  description: 'Browse articles by topic',
}

async function getTagsWithCounts(): Promise<{ tag: string; count: number }[]> {
  await connectDB()
  const docs = await BlogPost.find({ published: true }).select('tags').lean() as Pick<IBlogPost, 'tags'>[]
  const counts: Record<string, number> = {}
  for (const doc of docs) {
    if (doc.tags) {
      for (const tag of doc.tags) {
        counts[tag] = (counts[tag] || 0) + 1
      }
    }
  }
  return Object.entries(counts)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => a.tag.localeCompare(b.tag))
}

export default async function TagsPage() {
  const tags = await getTagsWithCounts()

  return (
    <section style={{ minHeight: '100vh', paddingTop: 120, paddingBottom: 100 }}>
      <style>{`
        .tag-pill {
          border-color: var(--gold) !important;
          transition: border-color 0.2s, color 0.2s;
        }
        .tag-pill:hover {
          border-color: var(--ember) !important;
          color: var(--parchment) !important;
        }
      `}</style>
      <div className="container">
        <div className="section-eyebrow">Browse by Topic</div>
        <div className="section-title">All Tags</div>

        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--parchment-dim)', marginBottom: 40 }}>
          {tags.length} {tags.length === 1 ? 'tag' : 'tags'} total
        </div>

        {tags.length === 0 ? (
          <div style={{ color: 'var(--parchment-dim)', fontFamily: 'var(--mono)', fontSize: 13, textAlign: 'center', padding: '60px 0' }}>
            No tags yet.
          </div>
        ) : (
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {tags.map(({ tag, count }) => (
              <Link
                key={tag}
                href={`/tags/${encodeURIComponent(tag)}`}
                className="tag-pill"
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 11,
                  letterSpacing: '0.12em',
                  color: 'var(--parchment-dim)',
                  background: 'rgba(20,16,14,0.7)',
                  border: '1px solid var(--gold)',
                  borderRadius: 20,
                  padding: '7px 16px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                {tag}
                <span style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 9,
                  color: 'var(--gold)',
                  background: 'rgba(201,168,76,0.12)',
                  borderRadius: 10,
                  padding: '1px 7px',
                }}>
                  {count}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
