export const dynamic = 'force-dynamic'

import { connectDB } from '@/lib/mongodb'
import { BlogPost } from '@/lib/models/BlogPost'
import BlogGrid from '@/components/content/BlogGrid'
import type { IBlogPost } from '@/types'

async function getPosts(): Promise<IBlogPost[]> {
  await connectDB()
  const docs = await BlogPost.find({ published: true }).sort({ publishedAt: -1 }).lean()
  return JSON.parse(JSON.stringify(docs))
}

export const metadata = {
  title: 'Blog',
  description: 'Articles on AI, coding tutorials, tech news, and software engineering insights.',
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <section style={{ minHeight: '100vh', paddingTop: 120 }}>
      <div className="container">
        <div className="section-eyebrow">Knowledge</div>
        <div className="section-title">Blog & Articles</div>
        <BlogGrid posts={posts} />
      </div>
    </section>
  )
}
