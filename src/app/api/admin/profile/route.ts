import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Profile } from '@/lib/models/Profile'

export async function GET() {
  await connectDB()
  const profile = await Profile.findOne({}).lean()
  return NextResponse.json(JSON.parse(JSON.stringify(profile ?? {})))
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json()
    await connectDB()

    const profile = await Profile.findOneAndUpdate(
      {},
      { $set: body },
      { new: true, upsert: true }
    ).lean()

    return NextResponse.json(JSON.parse(JSON.stringify(profile)))
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to save' }, { status: 500 })
  }
}
