import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { BlogPost } from '@/lib/models/BlogPost'

export async function GET(req: NextRequest) {
  await connectDB()
  const limit = req.nextUrl.searchParams.get('limit')
  let query = BlogPost.find({}).sort({ createdAt: -1 })
  if (limit && Number(limit) > 0) query = query.limit(Number(limit))
  const posts = await query.lean()
  return NextResponse.json(JSON.parse(JSON.stringify(posts)))
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { title, slug, excerpt, content, category, tags, thumbnail, published } = body

    if (!title || !slug || !excerpt || !content) {
      return NextResponse.json({ error: 'title, slug, excerpt, and content are required' }, { status: 400 })
    }

    await connectDB()
    const post = await BlogPost.create({
      title,
      slug,
      excerpt,
      content,
      category: category || 'coding',
      tags: tags || [],
      thumbnail: thumbnail || '',
      published: published ?? false,
      publishedAt: published ? new Date() : undefined,
    })

    return NextResponse.json(JSON.parse(JSON.stringify(post)), { status: 201 })
  } catch (err: unknown) {
    if (err instanceof Error && err.message.includes('duplicate')) {
      return NextResponse.json({ error: 'Slug already exists' }, { status: 409 })
    }
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
