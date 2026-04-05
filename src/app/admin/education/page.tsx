'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import type { IEducation } from '@/types'

export default function AdminEducationPage() {
  const [items, setItems] = useState<IEducation[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/admin/education').then(r => r.json()).then(data => {
      setItems(Array.isArray(data) ? data : [])
      setLoading(false)
    })
  }, [])

  async function deleteItem(id: string, degree: string) {
    if (!confirm(`Delete "${degree}"?`)) return
    await fetch(`/api/admin/education/${id}`, { method: 'DELETE' })
    setItems(items.filter(i => i._id !== id))
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 }}>
        <div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.22em', color: 'var(--ember)', marginBottom: 8 }}>CONTENT</div>
          <h1 style={{ fontFamily: 'var(--cinzel)', fontSize: 24, fontWeight: 900, color: 'var(--parchment)' }}>Education</h1>
        </div>
        <Link href="/admin/education/new" className="btn-primary">+ New Education</Link>
      </div>

      {loading && <div style={{ color: 'var(--parchment-dim)', fontFamily: 'var(--mono)', fontSize: 12 }}>Loading...</div>}

      {!loading && items.length === 0 && (
        <div style={{ color: 'var(--parchment-dim)', fontFamily: 'var(--mono)', fontSize: 12 }}>No education entries yet. Create your first one.</div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {items.map((item) => (
          <div key={item._id} style={{
            background: 'rgba(44,36,32,0.4)', border: '1px solid rgba(201,168,76,0.12)',
            borderRadius: 4, padding: '16px 20px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
          }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: 'var(--cinzel)', fontSize: 14, color: 'var(--parchment)', marginBottom: 4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {item.badge} {item.degree}
              </div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--ember)', letterSpacing: '0.15em' }}>
                {item.institution} · {item.year}
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
              <Link href={`/admin/education/${item._id}`} style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--gold)', textDecoration: 'none' }}>Edit</Link>
              <button onClick={() => deleteItem(item._id!, item.degree)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(212,56,13,0.7)' }}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
