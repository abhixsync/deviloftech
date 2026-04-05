'use client'

import { useEffect, useState } from 'react'
import type { IContactSubmission } from '@/types'

export default function AdminContactPage() {
  const [items, setItems] = useState<IContactSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/admin/contact').then(r => r.json()).then(data => {
      setItems(Array.isArray(data) ? data : [])
      setLoading(false)
    })
  }, [])

  async function toggleRead(id: string, current: boolean) {
    const res = await fetch(`/api/admin/contact/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ read: !current }),
    })
    if (res.ok) {
      setItems(prev => prev.map(i => i._id === id ? { ...i, read: !current } : i))
    }
  }

  async function deleteItem(id: string, name: string) {
    if (!confirm(`Delete message from "${name}"?`)) return
    await fetch(`/api/admin/contact/${id}`, { method: 'DELETE' })
    setItems(prev => prev.filter(i => i._id !== id))
    if (expanded === id) setExpanded(null)
  }

  function formatDate(date?: Date | string) {
    if (!date) return ''
    return new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })
  }

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.22em', color: 'var(--ember)', marginBottom: 8 }}>INBOX</div>
        <h1 style={{ fontFamily: 'var(--cinzel)', fontSize: 24, fontWeight: 900, color: 'var(--parchment)' }}>Contact Messages</h1>
      </div>

      {loading && <div style={{ color: 'var(--parchment-dim)', fontFamily: 'var(--mono)', fontSize: 12 }}>Loading...</div>}

      {!loading && items.length === 0 && (
        <div style={{ color: 'var(--parchment-dim)', fontFamily: 'var(--mono)', fontSize: 12 }}>No messages yet.</div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {items.map((item) => (
          <div
            key={item._id}
            style={{
              background: 'rgba(44,36,32,0.4)',
              border: '1px solid rgba(201,168,76,0.12)',
              borderLeft: item.read ? '2px solid rgba(201,168,76,0.12)' : '2px solid var(--ember)',
              borderRadius: 4,
              overflow: 'hidden',
            }}
          >
            {/* Card header — click to expand */}
            <div
              onClick={() => setExpanded(expanded === item._id ? null : item._id!)}
              style={{ padding: '16px 20px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                  {!item.read && (
                    <span style={{ fontFamily: 'var(--mono)', fontSize: 8, color: 'var(--ember)', letterSpacing: '0.15em', background: 'rgba(212,56,13,0.12)', padding: '2px 6px', borderRadius: 2 }}>NEW</span>
                  )}
                  <span style={{ fontFamily: 'var(--cinzel)', fontSize: 13, color: 'var(--parchment)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.name}
                  </span>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--parchment-dim)' }}>·</span>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--gold)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.subject}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--parchment-dim)' }}>{item.email}</span>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(245,237,216,0.3)' }}>{formatDate(item.createdAt)}</span>
                </div>
                {expanded !== item._id && (
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--parchment-dim)', marginTop: 6, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.message}
                  </div>
                )}
              </div>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(245,237,216,0.3)', flexShrink: 0 }}>
                {expanded === item._id ? '▲' : '▼'}
              </span>
            </div>

            {/* Expanded message body */}
            {expanded === item._id && (
              <div style={{ padding: '0 20px 16px' }}>
                <div style={{
                  fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--parchment-dim)',
                  lineHeight: 1.7, whiteSpace: 'pre-wrap',
                  padding: '12px 16px', background: 'rgba(0,0,0,0.2)', borderRadius: 3,
                  marginBottom: 12,
                }}>
                  {item.message}
                </div>
              </div>
            )}

            {/* Actions */}
            <div style={{ padding: '8px 20px 12px', display: 'flex', gap: 16, borderTop: '1px solid rgba(201,168,76,0.06)' }}>
              <button
                onClick={() => toggleRead(item._id!, item.read)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--gold)', letterSpacing: '0.1em', padding: 0 }}
              >
                {item.read ? 'Mark Unread' : 'Mark Read'}
              </button>
              <button
                onClick={() => deleteItem(item._id!, item.name)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(212,56,13,0.7)', letterSpacing: '0.1em', padding: 0 }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
