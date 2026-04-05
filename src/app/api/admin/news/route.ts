import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { NewsItem } from '@/lib/models/NewsItem'

export async function GET(req: NextRequest) {
  await connectDB()
  const limit = req.nextUrl.searchParams.get('limit')
  let query = NewsItem.find({}).sort({ publishedAt: -1 })
  if (limit && Number(limit) > 0) query = query.limit(Number(limit))
  const items = await query.lean()
  return NextResponse.json(JSON.parse(JSON.stringify(items)))
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { headline, sourceUrl, sourceName, summary, myTake, category, published } = body

    if (!headline || !sourceUrl || !sourceName || !summary) {
      return NextResponse.json({ error: 'headline, sourceUrl, sourceName, and summary are required' }, { status: 400 })
    }

    await connectDB()
    const item = await NewsItem.create({
      headline,
      sourceUrl,
      sourceName,
      summary,
      myTake: myTake || '',
      category: category || 'tech',
      published: published ?? true,
      publishedAt: new Date(),
    })

    return NextResponse.json(JSON.parse(JSON.stringify(item)), { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
