import type { Metadata } from 'next'
import { Cinzel_Decorative, Cinzel, Crimson_Pro, JetBrains_Mono } from 'next/font/google'
import { cache } from 'react'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { connectDB } from '@/lib/mongodb'
import { SiteSetting } from '@/lib/models/SiteSetting'
import { Profile } from '@/lib/models/Profile'

const cinzelDecorative = Cinzel_Decorative({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-cinzel-decorative',
  display: 'swap',
})

const cinzel = Cinzel({
  weight: ['400', '600', '900'],
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
})

const crimsonPro = Crimson_Pro({
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-crimson-pro',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const getSiteSetting = cache(async () => {
  try {
    await connectDB()
    let s = await SiteSetting.findOne({}).lean() as Record<string, unknown> | null
    if (!s) s = await SiteSetting.create({})
    return JSON.parse(JSON.stringify(s))
  } catch {
    return null
  }
})

const getProfile = cache(async () => {
  try {
    await connectDB()
    const p = await Profile.findOne({}).lean()
    return p ? JSON.parse(JSON.stringify(p)) : null
  } catch {
    return null
  }
})

export async function generateMetadata(): Promise<Metadata> {
  const s = await getSiteSetting()
  const title    = s?.metaTitle        ?? 'DevilOfTech — Tech, AI & Coding'
  const template = s?.metaTitleTemplate ?? '%s | DevilOfTech'
  const desc     = s?.metaDescription  ?? 'Your go-to source for tech news, AI insights, and coding knowledge. Videos, articles, and curated resources from DevilOfTech.'
  const keywords = (s?.metaKeywords as string[] | undefined) ?? ['tech', 'AI', 'coding', 'youtube', 'deviloftech', 'software engineering']
  const ogImg    = (s?.ogImageUrl as string | undefined) ?? '/og-default.png'
  const siteName = (s?.siteName as string | undefined) ?? 'DevilOfTech'

  return {
    metadataBase: new URL('https://deviloftech.com'),
    title: { default: title, template },
    description: desc,
    keywords,
    openGraph: {
      type: 'website',
      siteName,
      locale: 'en_US',
      images: [{ url: ogImg, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      images: [ogImg],
    },
    robots: { index: true, follow: true },
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [s, profile] = await Promise.all([getSiteSetting(), getProfile()])
  const siteName     = (s?.siteName as string | undefined) ?? 'DevilOfTech'
  const copyrightName = (s?.copyrightName as string | undefined) ?? 'DevilOfTech · Abhishek'
  const socialLinks  = profile?.socialLinks ?? null

  return (
    <html
      lang="en"
      className={`${cinzelDecorative.variable} ${cinzel.variable} ${crimsonPro.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Nav siteName={siteName} />
        <main style={{ position: 'relative', zIndex: 1 }}>{children}</main>
        <Footer siteName={siteName} copyrightName={copyrightName} socialLinks={socialLinks} />
      </body>
    </html>
  )
}
