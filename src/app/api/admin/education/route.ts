import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Education } from '@/lib/models/Education'

export async function GET() {
  await connectDB()
  const items = await Education.find({}).sort({ sortOrder: 1 }).lean()
  return NextResponse.json(JSON.parse(JSON.stringify(items)))
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { badge, degree, institution, year, sortOrder } = body

    if (!badge || !degree || !institution || !year) {
      return NextResponse.json({ error: 'badge, degree, institution, and year are required' }, { status: 400 })
    }

    await connectDB()
    const item = await Education.create({
      badge,
      degree,
      institution,
      year,
      sortOrder: sortOrder ?? 0,
    })

    return NextResponse.json(JSON.parse(JSON.stringify(item)), { status: 201 })
  } catch (err: unknown) {
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
