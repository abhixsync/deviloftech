import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Project } from '@/lib/models/Project'

export async function GET() {
  await connectDB()
  const projects = await Project.find({}).sort({ sortOrder: 1 }).lean()
  return NextResponse.json(JSON.parse(JSON.stringify(projects)))
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    await connectDB()
    const project = await Project.create(body)
    return NextResponse.json(JSON.parse(JSON.stringify(project)), { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to create' }, { status: 500 })
  }
}
