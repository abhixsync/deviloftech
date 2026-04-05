import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { BlogPost } from '@/lib/models/BlogPost'

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  await connectDB()
  const post = await BlogPost.findById(id).lean()
  if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(JSON.parse(JSON.stringify(post)))
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const body = await req.json()

  await connectDB()
  if (body.published && !body.publishedAt) {
    body.publishedAt = new Date()
  }
  const post = await BlogPost.findByIdAndUpdate(id, body, { new: true }).lean()
  if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(JSON.parse(JSON.stringify(post)))
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  await connectDB()
  await BlogPost.findByIdAndDelete(id)
  return NextResponse.json({ success: true })
}
