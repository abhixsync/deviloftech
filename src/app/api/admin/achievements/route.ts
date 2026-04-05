import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Achievement } from '@/lib/models/Achievement'

export async function GET() {
  await connectDB()
  const items = await Achievement.find({}).sort({ sortOrder: 1 }).lean()
  return NextResponse.json(JSON.parse(JSON.stringify(items)))
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { icon, title, description, year, sortOrder } = body

    if (!icon || !title || !description || !year) {
      return NextResponse.json({ error: 'icon, title, description, and year are required' }, { status: 400 })
    }

    await connectDB()
    const item = await Achievement.create({
      icon,
      title,
      description,
      year,
      sortOrder: sortOrder ?? 0,
    })

    return NextResponse.json(JSON.parse(JSON.stringify(item)), { status: 201 })
  } catch (err: unknown) {
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
