import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { BlogPost } from '@/lib/models/BlogPost'
import { NewsItem } from '@/lib/models/NewsItem'
import { Resource } from '@/lib/models/Resource'
import { Video } from '@/lib/models/Video'

export async function GET(req: NextRequest) {
  try {
    const q = req.nextUrl.searchParams.get('q') ?? ''

    if (!q || q.length < 2) {
      return NextResponse.json({ results: [] })
    }

    await connectDB()

    const regex = new RegExp(q, 'i')

    const [posts, news, resources, videos] = await Promise.all([
      BlogPost.find({
        published: true,
        $or: [{ title: regex }, { excerpt: regex }, { tags: regex }],
      })
        .limit(5)
        .lean(),

      NewsItem.find({
        published: true,
        $or: [{ headline: regex }, { summary: regex }],
      })
        .limit(5)
        .lean(),

      Resource.find({
        published: true,
        $or: [{ name: regex }, { description: regex }],
      })
        .limit(5)
        .lean(),

      Video.find({
        published: true,
        $or: [{ title: regex }, { description: regex }],
      })
        .limit(5)
        .lean(),
    ])

    type SearchResult = {
      type: 'post' | 'news' | 'resource' | 'video'
      title: string
      excerpt: string
      url: string
      category: string
    }

    const results: SearchResult[] = [
      ...posts.map((p) => ({
        type: 'post' as const,
        title: p.title as string,
        excerpt: p.excerpt as string,
        url: `/blog/${p.slug as string}`,
        category: p.category as string,
      })),
      ...news.map((n) => ({
        type: 'news' as const,
        title: n.headline as string,
        excerpt: n.summary as string,
        url: n.sourceUrl as string,
        category: n.category as string,
      })),
      ...resources.map((r) => ({
        type: 'resource' as const,
        title: r.name as string,
        excerpt: r.description as string,
        url: (r.fileUrl as string | undefined) || (r.url as string | undefined) || '#',
        category: r.category as string,
      })),
      ...videos.map((v) => ({
        type: 'video' as const,
        title: v.title as string,
        excerpt: v.description as string,
        url: `https://youtube.com/watch?v=${v.youtubeId as string}`,
        category: v.category as string,
      })),
    ]

    return NextResponse.json({ results })
  } catch (err: unknown) {
    console.error('Search error:', err)
    return NextResponse.json({ error: 'Search failed' }, { status: 500 })
  }
}
