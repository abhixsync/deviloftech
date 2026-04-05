'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { IProject } from '@/types'

type Filter = 'all' | 'current' | 'past' | 'upcoming'

const STATUS_LABEL: Record<string, string> = {
  current: '● Current',
  past: '◆ Past',
  upcoming: '◈ Upcoming',
}

export default function ProjectsGrid({ projects }: { projects: IProject[] }) {
  const [filter, setFilter] = useState<Filter>('all')

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.status === filter)

  return (
    <>
      <div className="filter-tabs">
        {(['all', 'current', 'past', 'upcoming'] as Filter[]).map((f) => (
          <button
            key={f}
            className={`filter-tab${filter === f ? ' active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f === 'all' ? '◉ All' : STATUS_LABEL[f]}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map((project) => (
          <Link
            key={String(project._id)}
            href={`/projects/${project.slug}`}
            className={`project-card${project.isFeatured ? ' featured' : ''}`}
            style={{ textDecoration: 'none' }}
          >
            <div>
              <div className="project-num">{project.num}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                <div className="project-tag">{project.tag}</div>
                <span className={`status-badge ${project.status}`}>
                  {project.status === 'upcoming' ? '◈ Upcoming' : project.status === 'current' ? '● Live' : '◆ Past'}
                </span>
              </div>
              <div className="project-name">{project.name}</div>
              <p className="project-desc">{project.description}</p>
              {project.impact && <div className="project-impact">{project.impact}</div>}
              <div className="project-stack">
                {project.stack.map((tech, i) => (
                  <span key={i} className="project-tech">{tech}</span>
                ))}
              </div>
            </div>

            {/* Featured side stats */}
            {project.isFeatured && project.sideStats && project.sideStats.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 220 }}>
                {project.sideStats.map((stat, i) => (
                  <div
                    key={i}
                    style={{
                      background: i === 0 ? 'rgba(212,56,13,0.08)' : 'rgba(201,168,76,0.07)',
                      border: `1px solid ${i === 0 ? 'rgba(212,56,13,0.2)' : 'rgba(201,168,76,0.18)'}`,
                      borderRadius: 4,
                      padding: '16px 18px',
                    }}
                  >
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.18em', color: i === 0 ? 'var(--ember)' : 'var(--gold)', textTransform: 'uppercase', marginBottom: 6 }}>
                      {stat.label}
                    </div>
                    <div style={{ fontFamily: 'var(--display)', fontSize: 28, color: 'var(--parchment)' }}>
                      {stat.value}
                    </div>
                    {stat.sub && <div style={{ fontSize: 12, color: 'var(--parchment-dim)' }}>{stat.sub}</div>}
                  </div>
                ))}
              </div>
            )}
          </Link>
        ))}

        {filtered.length === 0 && (
          <div style={{ gridColumn: 'span 2', textAlign: 'center', padding: '60px 0', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.18em', color: 'rgba(245,237,216,0.3)', textTransform: 'uppercase' }}>
            No projects in this category yet — the forge is still hot.
          </div>
        )}
      </div>
    </>
  )
}
