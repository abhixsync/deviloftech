import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Resource } from '@/lib/models/Resource'

export async function GET(req: NextRequest) {
  await connectDB()
  const limit = req.nextUrl.searchParams.get('limit')
  let query = Resource.find({}).sort({ sortOrder: 1, createdAt: -1 })
  if (limit && Number(limit) > 0) query = query.limit(Number(limit))
  const resources = await query.lean()
  return NextResponse.json(JSON.parse(JSON.stringify(resources)))
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, description, url, category, icon, isFree, published } = body

    if (!name || !description || !url) {
      return NextResponse.json({ error: 'name, description, and url are required' }, { status: 400 })
    }

    await connectDB()
    const resource = await Resource.create({
      name,
      description,
      url,
      category: category || 'tool',
      icon: icon || '',
      isFree: isFree ?? true,
      published: published ?? true,
    })

    return NextResponse.json(JSON.parse(JSON.stringify(resource)), { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
