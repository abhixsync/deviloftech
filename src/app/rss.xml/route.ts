import { connectDB } from '@/lib/mongodb'
import { BlogPost } from '@/lib/models/BlogPost'
import { NewsItem } from '@/lib/models/NewsItem'

export const dynamic = 'force-dynamic'

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function GET() {
  try {
    await connectDB()

    const [posts, newsItems] = await Promise.all([
      BlogPost.find({ published: true })
        .sort({ publishedAt: -1 })
        .limit(50)
        .lean(),
      NewsItem.find({ published: true })
        .sort({ publishedAt: -1 })
        .limit(50)
        .lean(),
    ])

    type FeedItem = {
      title: string
      link: string
      guid: string
      description: string
      pubDate: string
      category: string
      date: Date
    }

    const blogFeedItems: FeedItem[] = (posts as Array<{
      title: string
      slug: string
      excerpt: string
      category: string
      publishedAt: Date
    }>).map((post) => ({
      title: escapeXml(post.title),
      link: `https://deviloftech.com/blog/${post.slug}`,
      guid: `https://deviloftech.com/blog/${post.slug}`,
      description: escapeXml(post.excerpt),
      pubDate: new Date(post.publishedAt).toUTCString(),
      category: escapeXml(post.category),
      date: new Date(post.publishedAt),
    }))

    const newsFeedItems: FeedItem[] = (newsItems as Array<{
      headline: string
      sourceUrl: string
      summary: string
      category: string
      publishedAt: Date
    }>).map((item) => ({
      title: escapeXml(item.headline),
      link: escapeXml(item.sourceUrl),
      guid: escapeXml(item.sourceUrl),
      description: escapeXml(item.summary),
      pubDate: new Date(item.publishedAt).toUTCString(),
      category: escapeXml(item.category),
      date: new Date(item.publishedAt),
    }))

    const allItems = [...blogFeedItems, ...newsFeedItems].sort(
      (a, b) => b.date.getTime() - a.date.getTime()
    )

    const itemsXml = allItems
      .map(
        (item) => `    <item>
      <title>${item.title}</title>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.guid}</guid>
      <description>${item.description}</description>
      <pubDate>${item.pubDate}</pubDate>
      <category>${item.category}</category>
    </item>`
      )
      .join('\n')

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>DevilOfTech</title>
    <link>https://deviloftech.com</link>
    <description>Tech, AI &amp; Coding — Articles, News and Resources</description>
    <language>en-us</language>
    <atom:link href="https://deviloftech.com/rss.xml" rel="self" type="application/rss+xml"/>
${itemsXml}
  </channel>
</rss>`

    return new Response(xml, {
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
      },
    })
  } catch (err) {
    console.error('RSS feed error:', err)
    return new Response('Internal Server Error', { status: 500 })
  }
}
