'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import type { IResource } from '@/types'

export default function AdminResourcesPage() {
  const [resources, setResources] = useState<IResource[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/admin/resources').then(r => r.json()).then(data => {
      setResources(Array.isArray(data) ? data : [])
      setLoading(false)
    })
  }, [])

  async function deleteResource(id: string, name: string) {
    if (!confirm(`Delete "${name}"?`)) return
    await fetch(`/api/admin/resources/${id}`, { method: 'DELETE' })
    setResources(resources.filter(r => r._id !== id))
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 }}>
        <div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.22em', color: 'var(--ember)', marginBottom: 8 }}>CONTENT</div>
          <h1 style={{ fontFamily: 'var(--cinzel)', fontSize: 24, fontWeight: 900, color: 'var(--parchment)' }}>Resources</h1>
        </div>
        <Link href="/admin/resources/new" className="btn-primary">+ Add Resource</Link>
      </div>

      {loading && <div style={{ color: 'var(--parchment-dim)', fontFamily: 'var(--mono)', fontSize: 12 }}>Loading...</div>}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 14 }}>
        {resources.map((res) => (
          <div key={res._id} style={{
            background: 'rgba(44,36,32,0.4)', border: '1px solid rgba(201,168,76,0.12)',
            borderRadius: 4, padding: '16px 18px',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
              <div style={{ fontFamily: 'var(--cinzel)', fontSize: 13, color: 'var(--parchment)' }}>{res.name}</div>
              <div style={{ display: 'flex', gap: 10, flexShrink: 0, marginLeft: 12 }}>
                <Link href={`/admin/resources/${res._id}`} style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--gold)', textDecoration: 'none' }}>Edit</Link>
                <button onClick={() => deleteResource(res._id!, res.name)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(212,56,13,0.7)' }}>Delete</button>
              </div>
            </div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 13, color: 'var(--parchment-dim)', marginBottom: 10, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              {res.description}
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--ember)', letterSpacing: '0.15em' }}>{res.category?.toUpperCase()}</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: res.isFree ? '#4caf50' : 'var(--gold)' }}>{res.isFree ? 'FREE' : 'PAID'}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
