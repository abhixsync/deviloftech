export const dynamic = 'force-dynamic'

import { connectDB } from '@/lib/mongodb'
import { Achievement } from '@/lib/models/Achievement'
import RevealWrapper from '@/components/ui/RevealWrapper'
import type { IAchievement } from '@/types'

async function getAchievements(): Promise<IAchievement[]> {
  await connectDB()
  const docs = await Achievement.find({}).sort({ sortOrder: 1 }).lean()
  return JSON.parse(JSON.stringify(docs))
}

export const metadata = {
  title: 'Achievements',
  description: 'Key milestones and accomplishments from the DevilOfTech journey.',
}

export default async function AchievementsPage() {
  const achievements = await getAchievements()

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="section-eyebrow">Achievements</div>
          <div className="section-title" style={{ marginBottom: 0 }}>Seals of the Forge</div>
        </div>
      </div>

      <section style={{ background: 'rgba(26,20,16,0.6)' }}>
        <div className="container">
          <div className="achievements-grid">
            {achievements.map((ach) => (
              <RevealWrapper key={String(ach._id)}>
                <div className="achievement-card">
                  <div className="achievement-icon">{ach.icon}</div>
                  <div className="achievement-title">{ach.title}</div>
                  <div className="achievement-desc">{ach.description}</div>
                  <div className="achievement-year">{ach.year}</div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
