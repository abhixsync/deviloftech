import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { ContactSubmission } from '@/lib/models/ContactSubmission'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    // Save to MongoDB
    await connectDB()
    await ContactSubmission.create({ name, email, subject, message })

    // Send email via Resend
    if (process.env.RESEND_API_KEY && process.env.CONTACT_EMAIL_TO) {
      await resend.emails.send({
        from: 'DevilOfTech Contact <onboarding@resend.dev>',
        to: process.env.CONTACT_EMAIL_TO,
        subject: `[DevilOfTech] ${subject} — from ${name}`,
        html: `
          <div style="font-family:monospace;max-width:600px;margin:0 auto;background:#100c08;color:#F5EDD8;padding:32px;border:1px solid rgba(201,168,76,0.2);border-radius:4px;">
            <h2 style="color:#C9A84C;font-size:18px;margin-bottom:24px;">New Contact from DevilOfTech</h2>
            <p><strong style="color:#D4380D;">Name:</strong> ${name}</p>
            <p><strong style="color:#D4380D;">Email:</strong> ${email}</p>
            <p><strong style="color:#D4380D;">Subject:</strong> ${subject}</p>
            <hr style="border-color:rgba(201,168,76,0.2);margin:20px 0;" />
            <p style="white-space:pre-wrap;color:rgba(245,237,216,0.8);">${message}</p>
          </div>
        `,
      })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
