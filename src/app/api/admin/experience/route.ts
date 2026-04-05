import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Experience } from '@/lib/models/Experience'

export async function GET() {
  await connectDB()
  const items = await Experience.find({}).sort({ sortOrder: 1 }).lean()
  return NextResponse.json(JSON.parse(JSON.stringify(items)))
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { period, role, company, location, description, pills, sortOrder } = body

    if (!role || !company || !period || !description) {
      return NextResponse.json({ error: 'role, company, period, and description are required' }, { status: 400 })
    }

    await connectDB()
    const item = await Experience.create({
      period,
      role,
      company,
      location: location || '',
      description,
      pills: pills || [],
      sortOrder: sortOrder ?? 0,
    })

    return NextResponse.json(JSON.parse(JSON.stringify(item)), { status: 201 })
  } catch (err: unknown) {
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
