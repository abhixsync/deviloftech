import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Resource } from '@/lib/models/Resource'

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    await connectDB()
    const resource = await Resource.findById(id).lean()
    if (!resource) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json(JSON.parse(JSON.stringify(resource)))
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const body = await req.json()

    // Whitelist fields — never pass raw body to Mongoose
    const { name, description, url, fileUrl, category, icon, isFree, published, sortOrder } = body
    const update = { name, description, url, fileUrl, category, icon, isFree, published, sortOrder }

    await connectDB()
    const resource = await Resource.findByIdAndUpdate(id, update, { new: true, runValidators: true }).lean()
    if (!resource) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json(JSON.parse(JSON.stringify(resource)))
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    await connectDB()
    await Resource.findByIdAndDelete(id)
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
