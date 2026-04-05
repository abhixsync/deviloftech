'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import type { IProject } from '@/types'

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<IProject[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/admin/projects').then(r => r.json()).then(data => {
      setProjects(Array.isArray(data) ? data : [])
      setLoading(false)
    })
  }, [])

  async function deleteProject(id: string, name: string) {
    if (!confirm(`Delete "${name}"?`)) return
    await fetch(`/api/admin/projects/${id}`, { method: 'DELETE' })
    setProjects(projects.filter(p => p._id !== id))
  }

  const STATUS_COLOR: Record<string, string> = {
    current: '#4caf50',
    past: 'var(--parchment-dim)',
    upcoming: 'var(--gold)',
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 }}>
        <div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.22em', color: 'var(--ember)', marginBottom: 8 }}>CONTENT</div>
          <h1 style={{ fontFamily: 'var(--cinzel)', fontSize: 24, fontWeight: 900, color: 'var(--parchment)' }}>Projects</h1>
        </div>
        <Link href="/admin/projects/new" className="btn-primary">+ New Project</Link>
      </div>

      {loading && <div style={{ color: 'var(--parchment-dim)', fontFamily: 'var(--mono)', fontSize: 12 }}>Loading...</div>}

      {!loading && projects.length === 0 && (
        <div style={{ color: 'var(--parchment-dim)', fontFamily: 'var(--mono)', fontSize: 12 }}>No projects yet. Create your first one.</div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {projects.map((project) => (
          <div key={project._id} style={{
            background: 'rgba(44,36,32,0.4)', border: '1px solid rgba(201,168,76,0.12)',
            borderRadius: 4, padding: '16px 20px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
          }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: 'var(--cinzel)', fontSize: 14, color: 'var(--parchment)', marginBottom: 4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {project.name}
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--ember)', letterSpacing: '0.15em' }}>{project.tag?.toUpperCase()}</span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.12em', color: STATUS_COLOR[project.status] }}>
                  {project.status === 'current' ? '● LIVE' : project.status === 'upcoming' ? '◈ UPCOMING' : '◆ PAST'}
                </span>
                {project.isFeatured && (
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.12em', color: 'var(--gold)' }}>★ FEATURED</span>
                )}
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
              <Link href={`/admin/projects/${project._id}`} style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--gold)', textDecoration: 'none' }}>Edit</Link>
              <button onClick={() => deleteProject(project._id!, project.name)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(212,56,13,0.7)' }}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
