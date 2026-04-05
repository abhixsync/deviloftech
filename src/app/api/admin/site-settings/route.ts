import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { SiteSetting } from '@/lib/models/SiteSetting'

export async function GET() {
  await connectDB()
  let settings = await SiteSetting.findOne({}).lean()
  if (!settings) {
    settings = await SiteSetting.create({})
  }
  return NextResponse.json(JSON.parse(JSON.stringify(settings)))
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json()
    await connectDB()
    const settings = await SiteSetting.findOneAndUpdate(
      {},
      { $set: body },
      { new: true, upsert: true }
    ).lean()
    return NextResponse.json(JSON.parse(JSON.stringify(settings)))
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to save' }, { status: 500 })
  }
}
