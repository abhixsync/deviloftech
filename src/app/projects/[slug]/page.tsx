import { notFound } from 'next/navigation'
import Link from 'next/link'
import { connectDB } from '@/lib/mongodb'
import { Project } from '@/lib/models/Project'
import type { IProject } from '@/types'

export const dynamic = 'force-dynamic'

async function getProject(slug: string): Promise<IProject | null> {
  await connectDB()
  const doc = await Project.findOne({ slug }).lean()
  if (!doc) return null
  return JSON.parse(JSON.stringify(doc))
}


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await getProject(slug)
  if (!project) {
    return { title: 'Project Not Found', description: 'This project could not be found.' }
  }
  const description = project.description ? project.description.slice(0, 160) : undefined
  const ogImages =
    project.images && project.images.length > 0
      ? [{ url: project.images[0], width: 1200, height: 630, alt: project.name }]
      : [{ url: '/og-default.png', width: 1200, height: 630, alt: 'DevilOfTech' }]
  return {
    title: project.name,
    description,
    openGraph: {
      type: 'website' as const,
      title: project.name,
      description,
      images: ogImages,
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: project.name,
      description,
      images: ogImages.map((img) => img.url),
    },
  }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await getProject(slug)
  if (!project) notFound()

  return (
    <>
      {/* Header */}
      <div className="project-detail-header">
        <div className="container">
          <Link href="/projects" style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ember)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 32 }}>
            ← Back to Projects
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
            <div className="project-tag">{project.tag}</div>
            <span className={`status-badge ${project.status}`}>
              {project.status === 'upcoming' ? '◈ Upcoming' : project.status === 'current' ? '● Live' : '◆ Past'}
            </span>
          </div>
          <h1 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(28px,4vw,52px)', fontWeight: 900, color: 'transparent', background: 'linear-gradient(160deg,#fff8e1 0%,#f5c842 30%,#c9871c 65%,#7a4500 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', filter: 'drop-shadow(0 0 24px rgba(212,140,0,0.4))', lineHeight: 1.1, marginBottom: 16 }}>
            {project.name}
          </h1>
          {project.impact && (
            <div className="project-impact" style={{ maxWidth: 640 }}>{project.impact}</div>
          )}
          {/* Links */}
          {(project.links?.github || project.links?.live) && (
            <div className="project-links">
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  ⌥ GitHub
                </a>
              )}
              {project.links.live && (
                <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  ↗ View Live
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="project-detail-body">
        <div className="container">
          <div className="project-detail-grid">
            {/* Left: Description */}
            <div>
              <div className="detail-section-title">About this Project</div>
              <p style={{ color: 'var(--parchment-dim)', fontSize: 17, lineHeight: 1.8, marginBottom: 40 }}>
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="detail-section-title">Tech Stack</div>
              <div className="project-stack" style={{ marginTop: 0 }}>
                {project.stack.map((tech, i) => (
                  <span key={i} className="project-tech" style={{ fontSize: 11, padding: '6px 12px' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Side stats */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {project.sideStats && project.sideStats.length > 0 && (
                <>
                  <div className="detail-section-title">At a Glance</div>
                  {project.sideStats.map((stat, i) => (
                    <div key={i} style={{ background: 'rgba(44,36,32,0.5)', border: '1px solid rgba(201,168,76,0.18)', borderRadius: 4, padding: '20px 22px' }}>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.18em', color: 'var(--ember)', textTransform: 'uppercase', marginBottom: 8 }}>
                        {stat.label}
                      </div>
                      <div style={{ fontFamily: 'var(--display)', fontSize: 32, color: 'var(--parchment)', lineHeight: 1 }}>
                        {stat.value}
                      </div>
                      {stat.sub && <div style={{ fontSize: 13, color: 'var(--parchment-dim)', marginTop: 4 }}>{stat.sub}</div>}
                    </div>
                  ))}
                </>
              )}

              {/* Project number */}
              <div style={{ background: 'rgba(44,36,32,0.3)', border: '1px solid rgba(201,168,76,0.1)', borderRadius: 4, padding: '20px 22px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--display)', fontSize: 64, color: 'rgba(212,56,13,0.2)', lineHeight: 1 }}>
                  {project.num}
                </div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.18em', color: 'rgba(245,237,216,0.25)', textTransform: 'uppercase' }}>
                  Project Number
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
