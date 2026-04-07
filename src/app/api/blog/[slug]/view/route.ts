import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { BlogPost } from '@/lib/models/BlogPost'

export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    await connectDB()

    const post = await BlogPost.findOneAndUpdate(
      { slug, published: true },
      { $inc: { views: 1 } },
      { new: true, select: 'views' }
    ).lean()

    if (!post) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    return NextResponse.json({ views: (post as { views?: number }).views ?? 0 })
  } catch (err) {
    console.error('[POST /api/blog/[slug]/view]', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
