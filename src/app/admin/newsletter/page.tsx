import { connectDB } from '@/lib/mongodb'
import { NewsletterSubscriber } from '@/lib/models/NewsletterSubscriber'

interface Subscriber {
  _id: string
  email: string
  subscribedAt?: string | Date
  active: boolean
}

async function getSubscribers(): Promise<{ subscribers: Subscriber[]; count: number }> {
  await connectDB()
  const docs = await NewsletterSubscriber.find({}).sort({ subscribedAt: -1 }).lean()
  const subscribers = JSON.parse(JSON.stringify(docs)) as Subscriber[]
  return { subscribers, count: subscribers.length }
}

function formatDate(d?: string | Date) {
  if (!d) return ''
  return new Date(d).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export default async function AdminNewsletterPage() {
  const { subscribers, count } = await getSubscribers()

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.22em', color: 'var(--ember)', marginBottom: 8 }}>
          SUBSCRIBERS
        </div>
        <h1 style={{ fontFamily: 'var(--cinzel)', fontSize: 24, fontWeight: 900, color: 'var(--parchment)', marginBottom: 8 }}>
          Newsletter
        </h1>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--gold)', letterSpacing: '0.12em' }}>
          {count} subscriber{count !== 1 ? 's' : ''} total
        </div>
      </div>

      {subscribers.length === 0 ? (
        <div style={{ color: 'var(--parchment-dim)', fontFamily: 'var(--mono)', fontSize: 12 }}>
          No subscribers yet.
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {subscribers.map((sub) => (
            <div
              key={sub._id}
              style={{
                background: 'rgba(44,36,32,0.4)',
                border: '1px solid rgba(201,168,76,0.12)',
                borderRadius: 4,
                padding: '14px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 16,
              }}
            >
              <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--parchment)' }}>
                {sub.email}
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
                {!sub.active && (
                  <span style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 8,
                    letterSpacing: '0.15em',
                    color: 'rgba(212,56,13,0.8)',
                    background: 'rgba(212,56,13,0.1)',
                    padding: '2px 6px',
                    borderRadius: 2,
                  }}>
                    INACTIVE
                  </span>
                )}
                <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(245,237,216,0.35)' }}>
                  {formatDate(sub.subscribedAt)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
