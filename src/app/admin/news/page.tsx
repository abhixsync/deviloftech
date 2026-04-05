'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import type { INewsItem } from '@/types'

export default function AdminNewsPage() {
  const [items, setItems] = useState<INewsItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/admin/news').then(r => r.json()).then(data => {
      setItems(Array.isArray(data) ? data : [])
      setLoading(false)
    })
  }, [])

  async function deleteItem(id: string, headline: string) {
    if (!confirm(`Delete "${headline}"?`)) return
    await fetch(`/api/admin/news/${id}`, { method: 'DELETE' })
    setItems(items.filter(n => n._id !== id))
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 }}>
        <div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.22em', color: 'var(--ember)', marginBottom: 8 }}>CONTENT</div>
          <h1 style={{ fontFamily: 'var(--cinzel)', fontSize: 24, fontWeight: 900, color: 'var(--parchment)' }}>News Items</h1>
        </div>
        <Link href="/admin/news/new" className="btn-primary">+ Add News</Link>
      </div>

      {loading && <div style={{ color: 'var(--parchment-dim)', fontFamily: 'var(--mono)', fontSize: 12 }}>Loading...</div>}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((item) => (
          <div key={item._id} style={{
            background: 'rgba(44,36,32,0.4)', border: '1px solid rgba(201,168,76,0.12)',
            borderRadius: 4, padding: '14px 18px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
          }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: 'var(--cinzel)', fontSize: 13, color: 'var(--parchment)', marginBottom: 4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {item.headline}
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--ember)', letterSpacing: '0.15em' }}>{item.category?.toUpperCase()}</span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--parchment-dim)' }}>{item.sourceName}</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
              <Link href={`/admin/news/${item._id}`} style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--gold)', textDecoration: 'none' }}>Edit</Link>
              <button onClick={() => deleteItem(item._id!, item.headline)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(212,56,13,0.7)' }}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
