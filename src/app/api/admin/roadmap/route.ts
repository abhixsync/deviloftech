import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { RoadmapItem } from '@/lib/models/RoadmapItem'

export async function GET() {
  await connectDB()
  const items = await RoadmapItem.find({}).sort({ sortOrder: 1, createdAt: -1 }).lean()
  return NextResponse.json(JSON.parse(JSON.stringify(items)))
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { title, description, status, category, shippedAt, sortOrder, published } = body

    if (!title || !description) {
      return NextResponse.json({ error: 'title and description are required' }, { status: 400 })
    }

    await connectDB()
    const item = await RoadmapItem.create({
      title,
      description,
      status: status || 'planned',
      category: category || 'feature',
      shippedAt: shippedAt || undefined,
      sortOrder: sortOrder ?? 0,
      published: published ?? true,
    })

    return NextResponse.json(JSON.parse(JSON.stringify(item)), { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
