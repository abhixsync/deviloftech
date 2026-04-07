'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import type { IRoadmapItem } from '@/types'

const STATUS_COLORS: Record<string, string> = {
  'in-progress': 'var(--ember)',
  'planned': 'var(--gold)',
  'shipped': '#4caf50',
}

export default function AdminRoadmapPage() {
  const [items, setItems] = useState<IRoadmapItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/admin/roadmap').then(r => r.json()).then(data => {
      setItems(Array.isArray(data) ? data : [])
      setLoading(false)
    })
  }, [])

  async function deleteItem(id: string, title: string) {
    if (!confirm(`Delete "${title}"?`)) return
    await fetch(`/api/admin/roadmap/${id}`, { method: 'DELETE' })
    setItems(items.filter(i => i._id !== id))
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 }}>
        <div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.22em', color: 'var(--ember)', marginBottom: 8 }}>CONTENT</div>
          <h1 style={{ fontFamily: 'var(--cinzel)', fontSize: 24, fontWeight: 900, color: 'var(--parchment)' }}>Roadmap</h1>
        </div>
        <Link href="/admin/roadmap/new" className="btn-primary">+ Add Item</Link>
      </div>

      {loading && <div style={{ color: 'var(--parchment-dim)', fontFamily: 'var(--mono)', fontSize: 12 }}>Loading...</div>}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 14 }}>
        {items.map((item) => (
          <div key={item._id} style={{
            background: 'rgba(44,36,32,0.4)', border: '1px solid rgba(201,168,76,0.12)',
            borderRadius: 4, padding: '16px 18px',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
              <div style={{ fontFamily: 'var(--cinzel)', fontSize: 13, color: 'var(--parchment)' }}>{item.title}</div>
              <div style={{ display: 'flex', gap: 10, flexShrink: 0, marginLeft: 12 }}>
                <Link href={`/admin/roadmap/${item._id}`} style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--gold)', textDecoration: 'none' }}>Edit</Link>
                <button onClick={() => deleteItem(item._id!, item.title)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(212,56,13,0.7)' }}>Delete</button>
              </div>
            </div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 13, color: 'var(--parchment-dim)', marginBottom: 10, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              {item.description}
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: STATUS_COLORS[item.status] ?? 'var(--parchment-dim)', letterSpacing: '0.15em' }}>
                {item.status.toUpperCase()}
              </span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--ember)', letterSpacing: '0.15em' }}>{item.category?.toUpperCase()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
