export const dynamic = 'force-dynamic'

import { connectDB } from '@/lib/mongodb'
import { Resource } from '@/lib/models/Resource'
import ResourcesGrid from '@/components/content/ResourcesGrid'
import type { IResource } from '@/types'

async function getResources(): Promise<IResource[]> {
  await connectDB()
  const docs = await Resource.find({ published: true }).sort({ sortOrder: 1, createdAt: -1 }).lean()
  return JSON.parse(JSON.stringify(docs))
}

export const metadata = {
  title: 'Resources',
  description: 'Curated tools, courses, and libraries recommended by DevilOfTech.',
}

export default async function ResourcesPage() {
  const resources = await getResources()

  return (
    <section style={{ minHeight: '100vh', paddingTop: 120 }}>
      <div className="container">
        <div className="section-eyebrow">Curated</div>
        <div className="section-title">Resources</div>
        <p style={{ fontFamily: 'var(--serif)', fontSize: 17, color: 'var(--parchment-dim)', maxWidth: 560, marginBottom: 48, marginTop: -24 }}>
          Tools, courses, books, and channels I personally use and recommend.
        </p>
        <ResourcesGrid resources={resources} />
      </div>
    </section>
  )
}
