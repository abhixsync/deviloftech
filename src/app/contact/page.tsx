export const dynamic = 'force-dynamic'

import { connectDB } from '@/lib/mongodb'
import { Profile } from '@/lib/models/Profile'
import ContactForm from '@/components/contact/ContactForm'
import type { IProfile } from '@/types'

async function getProfile(): Promise<IProfile | null> {
  await connectDB()
  const doc = await Profile.findOne({}).lean()
  if (!doc) return null
  return JSON.parse(JSON.stringify(doc))
}

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with DevilOfTech for collaborations, questions, or just to say hello.',
}

export default async function ContactPage() {
  const profile = await getProfile()
  const links = profile?.socialLinks

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="section-eyebrow">Contact</div>
          <div className="section-title" style={{ marginBottom: 0 }}>Let&apos;s Build Something</div>
        </div>
      </div>

      <section style={{ position: 'relative' }}>
        {/* Sigil deco */}
        <svg className="sigil-deco" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="95" stroke="rgba(212,56,13,1)" strokeWidth="1.5" />
          <polygon points="100,8 122,70 190,70 136,114 158,176 100,134 42,176 64,114 10,70 78,70"
            stroke="rgba(212,56,13,1)" strokeWidth="1.5" fill="none" />
          <circle cx="100" cy="100" r="40" stroke="rgba(201,168,76,1)" strokeWidth="1" />
        </svg>

        <div className="container">
          <div className="contact-inner" style={{ maxWidth: 720 }}>
            <div className="contact-title">Let&apos;s Build Something<br />That Won&apos;t Break</div>
            <p className="contact-sub">
              Open to high-impact roles, consulting, and collaboration. If you&apos;re building
              something serious — let&apos;s talk.
            </p>

            {/* Social Links */}
            <div className="contact-links">
              {links?.email && (
                <a href={`mailto:${links.email}`} className="contact-link">✉ Email Me</a>
              )}
              {links?.linkedin && (
                <a href={links.linkedin} className="contact-link" target="_blank" rel="noopener noreferrer">↗ LinkedIn</a>
              )}
              {links?.github && (
                <a href={links.github} className="contact-link" target="_blank" rel="noopener noreferrer">⌥ GitHub</a>
              )}
              {links?.website && (
                <a href={links.website} className="contact-link" target="_blank" rel="noopener noreferrer">🌐 WrenForge</a>
              )}
              {links?.youtube && (
                <a href={links.youtube} className="contact-link" target="_blank" rel="noopener noreferrer">▶ YouTube</a>
              )}
              {links?.instagram && (
                <a href={links.instagram} className="contact-link" target="_blank" rel="noopener noreferrer">◈ Instagram</a>
              )}
            </div>

            <div className="divider" style={{ width: '100%', margin: '8px 0' }} />

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
