import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { ContactSubmission } from '@/lib/models/ContactSubmission'

export async function GET() {
  await connectDB()
  const items = await ContactSubmission.find({}).sort({ createdAt: -1 }).lean()
  return NextResponse.json(JSON.parse(JSON.stringify(items)))
}
