export const dynamic = 'force-dynamic'

import { connectDB } from '@/lib/mongodb'
import { Experience } from '@/lib/models/Experience'
import RevealWrapper from '@/components/ui/RevealWrapper'
import type { IExperience } from '@/types'

async function getExperiences(): Promise<IExperience[]> {
  await connectDB()
  const docs = await Experience.find({}).sort({ sortOrder: 1 }).lean()
  return JSON.parse(JSON.stringify(docs))
}

export const metadata = {
  title: 'Experience',
  description: 'Professional experience and career timeline of the engineer behind DevilOfTech.',
}

export default async function ExperiencePage() {
  const experiences = await getExperiences()

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="section-eyebrow">Experience</div>
          <div className="section-title" style={{ marginBottom: 0 }}>The Journey</div>
        </div>
      </div>

      <section style={{ background: 'rgba(26,20,16,0.6)' }}>
        <div className="container">
          <div className="timeline">
            {experiences.map((exp) => (
              <RevealWrapper key={String(exp._id)}>
                <div className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-period">{exp.period}</div>
                  <div className="timeline-role">{exp.role}</div>
                  <div className="timeline-company">{exp.company} · {exp.location}</div>
                  <p className="timeline-desc">{exp.description}</p>
                  <div className="timeline-pills">
                    {exp.pills.map((pill, i) => (
                      <span key={i} className="timeline-pill">{pill}</span>
                    ))}
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
