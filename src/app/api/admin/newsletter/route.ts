import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { NewsletterSubscriber } from '@/lib/models/NewsletterSubscriber'

export async function GET() {
  try {
    await connectDB()
    const subscribers = await NewsletterSubscriber.find({}).sort({ subscribedAt: -1 }).lean()
    return NextResponse.json({ subscribers: JSON.parse(JSON.stringify(subscribers)), count: subscribers.length })
  } catch (err) {
    console.error('Admin newsletter GET error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
