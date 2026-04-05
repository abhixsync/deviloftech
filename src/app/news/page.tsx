export const dynamic = 'force-dynamic'

import { connectDB } from '@/lib/mongodb'
import { NewsItem } from '@/lib/models/NewsItem'
import NewsFeed from '@/components/content/NewsFeed'
import type { INewsItem } from '@/types'

async function getNews(): Promise<INewsItem[]> {
  await connectDB()
  const docs = await NewsItem.find({ published: true }).sort({ publishedAt: -1 }).lean()
  return JSON.parse(JSON.stringify(docs))
}

export const metadata = {
  title: 'News',
  description: 'Curated tech and AI news with commentary from DevilOfTech.',
}

export default async function NewsPage() {
  const items = await getNews()

  return (
    <section style={{ minHeight: '100vh', paddingTop: 120 }}>
      <div className="container">
        <div className="section-eyebrow">Stay Current</div>
        <div className="section-title">Tech & AI News</div>
        <NewsFeed items={items} />
      </div>
    </section>
  )
}
