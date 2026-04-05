import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { BlogPost } from '@/lib/models/BlogPost'
import { Video } from '@/lib/models/Video'
import { NewsItem } from '@/lib/models/NewsItem'
import { Resource } from '@/lib/models/Resource'

export async function GET() {
  await connectDB()

  const [
    postsCount, postsRecent,
    videosCount, videosRecent,
    newsCount, newsRecent,
    resourcesCount, resourcesRecent,
  ] = await Promise.all([
    BlogPost.countDocuments(),
    BlogPost.find({}).sort({ createdAt: -1 }).limit(3).select('_id title published createdAt category').lean(),
    Video.countDocuments(),
    Video.find({}).sort({ publishedAt: -1 }).limit(3).select('_id title published publishedAt category').lean(),
    NewsItem.countDocuments(),
    NewsItem.find({}).sort({ publishedAt: -1 }).limit(3).select('_id headline published publishedAt sourceName').lean(),
    Resource.countDocuments(),
    Resource.find({}).sort({ createdAt: -1 }).limit(3).select('_id name published category isFree').lean(),
  ])

  return NextResponse.json({
    counts: {
      posts: postsCount,
      videos: videosCount,
      news: newsCount,
      resources: resourcesCount,
    },
    recent: {
      posts: JSON.parse(JSON.stringify(postsRecent)),
      videos: JSON.parse(JSON.stringify(videosRecent)),
      news: JSON.parse(JSON.stringify(newsRecent)),
      resources: JSON.parse(JSON.stringify(resourcesRecent)),
    },
  })
}
