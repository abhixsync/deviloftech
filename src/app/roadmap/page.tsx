export const dynamic = 'force-dynamic'

import { connectDB } from '@/lib/mongodb'
import { RoadmapItem } from '@/lib/models/RoadmapItem'
import type { IRoadmapItem } from '@/types'

async function getRoadmapItems(): Promise<IRoadmapItem[]> {
  await connectDB()
  const docs = await RoadmapItem.find({ published: true }).sort({ sortOrder: 1, createdAt: -1 }).lean()
  return JSON.parse(JSON.stringify(docs))
}

export const metadata = {
  title: 'Roadmap',
  description: "What we're building and what's coming next",
}

const STATUS_ORDER = ['in-progress', 'planned', 'shipped']
const STATUS_LABELS: Record<string, string> = {
  'in-progress': 'In Progress',
  'planned': 'Planned',
  'shipped': 'Shipped',
}
const STATUS_COLORS: Record<string, string> = {
  'in-progress': 'var(--ember)',
  'planned': 'var(--gold)',
  'shipped': '#4caf50',
}

function formatDate(date: Date | string | undefined): string {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

export default async function RoadmapPage() {
  const items = await getRoadmapItems()

  const grouped = STATUS_ORDER.reduce<Record<string, IRoadmapItem[]>>((acc, status) => {
    acc[status] = items.filter(i => i.status === status)
    return acc
  }, {})

  return (
    <section style={{ minHeight: '100vh', paddingTop: 120, paddingBottom: 80 }}>
      <div className="container">
        <div className="section-eyebrow">Transparency</div>
        <div className="section-title">Roadmap</div>
        <p style={{ fontFamily: 'var(--serif)', fontSize: 17, color: 'var(--parchment-dim)', maxWidth: 560, marginBottom: 64, marginTop: -24 }}>
          What we&apos;re building and what&apos;s coming next.
        </p>

        {STATUS_ORDER.map(status => {
          const group = grouped[status]
          if (!group || group.length === 0) return null
          return (
            <div key={status} style={{ marginBottom: 56 }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24,
              }}>
                <span style={{
                  width: 10, height: 10, borderRadius: '50%',
                  background: STATUS_COLORS[status], display: 'inline-block', flexShrink: 0,
                }} />
                <h2 style={{
                  fontFamily: 'var(--cinzel)', fontSize: 18, fontWeight: 700,
                  color: STATUS_COLORS[status], margin: 0,
                }}>
                  {STATUS_LABELS[status]}
                </h2>
                <span style={{
                  fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--parchment-dim)',
                  letterSpacing: '0.15em',
                }}>
                  {group.length} {group.length === 1 ? 'item' : 'items'}
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {group.map(item => (
                  <div key={item._id} style={{
                    background: 'rgba(44,36,32,0.35)',
                    border: `1px solid ${STATUS_COLORS[item.status]}22`,
                    borderLeft: `3px solid ${STATUS_COLORS[item.status]}`,
                    borderRadius: 4,
                    padding: '18px 22px',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
                      <h3 style={{
                        fontFamily: 'var(--cinzel)', fontSize: 15, fontWeight: 700,
                        color: 'var(--parchment)', margin: 0,
                      }}>
                        {item.title}
                      </h3>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0 }}>
                        <span style={{
                          fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.15em',
                          color: 'var(--parchment-dim)',
                          background: 'rgba(245,237,216,0.06)',
                          padding: '2px 7px', borderRadius: 2,
                        }}>
                          {item.category.toUpperCase()}
                        </span>
                        <span style={{
                          fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.15em',
                          color: STATUS_COLORS[item.status],
                          background: `${STATUS_COLORS[item.status]}18`,
                          padding: '2px 7px', borderRadius: 2,
                        }}>
                          {item.status.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <p style={{
                      fontFamily: 'var(--serif)', fontSize: 14, color: 'var(--parchment-dim)',
                      margin: 0, lineHeight: 1.6,
                    }}>
                      {item.description}
                    </p>
                    {item.status === 'shipped' && item.shippedAt && (
                      <div style={{
                        fontFamily: 'var(--mono)', fontSize: 10, color: '#4caf50',
                        letterSpacing: '0.12em', marginTop: 10,
                      }}>
                        Shipped {formatDate(item.shippedAt)}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )
        })}

        {items.length === 0 && (
          <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--parchment-dim)', textAlign: 'center', paddingTop: 60 }}>
            Nothing here yet. Check back soon.
          </div>
        )}
      </div>
    </section>
  )
}
