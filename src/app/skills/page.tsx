export const dynamic = 'force-dynamic'

import { connectDB } from '@/lib/mongodb'
import { Skill } from '@/lib/models/Skill'
import RevealWrapper from '@/components/ui/RevealWrapper'
import type { ISkill } from '@/types'

async function getSkills(): Promise<ISkill[]> {
  await connectDB()
  const docs = await Skill.find({}).sort({ sortOrder: 1 }).lean()
  return JSON.parse(JSON.stringify(docs))
}

export const metadata = {
  title: 'Skills',
  description: 'Technical skills and tools used by DevilOfTech — from React and Node to AI and cloud.',
}

export default async function SkillsPage() {
  const skills = await getSkills()

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="section-eyebrow">Skills</div>
          <div className="section-title" style={{ marginBottom: 0 }}>The Arsenal</div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="skills-grid">
            {skills.map((cluster) => (
              <RevealWrapper key={String(cluster._id)}>
                <div className="skill-cluster">
                  <div className="cluster-title">{cluster.clusterTitle}</div>
                  <div className="skill-tags">
                    {cluster.tags.map((tag, i) => (
                      <span key={i} className={`skill-tag${tag.isHot ? ' hot' : ''}`}>
                        {tag.name}
                      </span>
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
