import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Video } from '@/lib/models/Video'

export async function GET(req: NextRequest) {
  await connectDB()
  const limit = req.nextUrl.searchParams.get('limit')
  let query = Video.find({}).sort({ publishedAt: -1 })
  if (limit && Number(limit) > 0) query = query.limit(Number(limit))
  const videos = await query.lean()
  return NextResponse.json(JSON.parse(JSON.stringify(videos)))
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { youtubeId, title, description, thumbnail, category, duration, published } = body

    if (!youtubeId || !title || !thumbnail) {
      return NextResponse.json({ error: 'youtubeId, title, and thumbnail are required' }, { status: 400 })
    }

    await connectDB()
    const video = await Video.create({
      youtubeId,
      title,
      description: description || '',
      thumbnail,
      category: category || 'coding',
      duration: duration || '',
      published: published ?? true,
      publishedAt: new Date(),
    })

    return NextResponse.json(JSON.parse(JSON.stringify(video)), { status: 201 })
  } catch (err: unknown) {
    if (err instanceof Error && err.message.includes('duplicate')) {
      return NextResponse.json({ error: 'Video already exists' }, { status: 409 })
    }
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
