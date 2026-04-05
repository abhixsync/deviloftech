export const dynamic = 'force-dynamic'

import { connectDB } from '@/lib/mongodb'
import { Video } from '@/lib/models/Video'
import VideosGrid from '@/components/content/VideosGrid'
import type { IVideo } from '@/types'

async function getVideos(): Promise<IVideo[]> {
  await connectDB()
  const docs = await Video.find({ published: true }).sort({ publishedAt: -1 }).lean()
  return JSON.parse(JSON.stringify(docs))
}

export const metadata = {
  title: 'Videos',
  description: 'Watch DevilOfTech videos — deep dives, tutorials, and tech news breakdowns.',
}

export default async function VideosPage() {
  const videos = await getVideos()

  return (
    <section style={{ minHeight: '100vh', paddingTop: 120 }}>
      <div className="container">
        <div className="section-eyebrow">Content</div>
        <div className="section-title">Videos</div>
        <VideosGrid videos={videos} />
      </div>
    </section>
  )
}
