import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { ContactSubmission } from '@/lib/models/ContactSubmission'

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const body = await req.json()
  await connectDB()
  const item = await ContactSubmission.findByIdAndUpdate(
    id,
    { read: Boolean(body.read) },
    { new: true }
  ).lean()
  if (!item) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(JSON.parse(JSON.stringify(item)))
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  await connectDB()
  await ContactSubmission.findByIdAndDelete(id)
  return NextResponse.json({ success: true })
}
