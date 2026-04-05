import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Skill } from '@/lib/models/Skill'

export async function GET() {
  await connectDB()
  const items = await Skill.find({}).sort({ sortOrder: 1 }).lean()
  return NextResponse.json(JSON.parse(JSON.stringify(items)))
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { clusterTitle, tags, sortOrder } = body

    if (!clusterTitle) {
      return NextResponse.json({ error: 'clusterTitle is required' }, { status: 400 })
    }

    await connectDB()
    const item = await Skill.create({
      clusterTitle,
      tags: tags || [],
      sortOrder: sortOrder ?? 0,
    })

    return NextResponse.json(JSON.parse(JSON.stringify(item)), { status: 201 })
  } catch (err: unknown) {
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
