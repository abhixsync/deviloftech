'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import BrandLogo from '@/components/ui/BrandLogo'

interface SocialLinks {
  youtube?: string
  instagram?: string
  github?: string
  linkedin?: string
  website?: string
  email?: string
}

interface Props {
  siteName?: string
  copyrightName?: string
  socialLinks?: SocialLinks | null
}

export default function Footer({ siteName = 'DevilOfTech', copyrightName = 'DevilOfTech · Abhishek', socialLinks }: Props) {
  const pathname = usePathname()
  if (pathname.startsWith('/admin')) return null

  const yt = socialLinks?.youtube || 'https://youtube.com/@deviloftech'
  const ig = socialLinks?.instagram || 'https://instagram.com/deviloftech'

  return (
    <footer>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 32, marginBottom: 40 }}>
        <div>
          <div className="footer-brand">
            <BrandLogo size={28} />
            {siteName}
          </div>
          <p style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--parchment-dim)', maxWidth: 260, lineHeight: 1.6, marginTop: 10, letterSpacing: '0.08em' }}>
            Tech, AI &amp; Coding — ORGANIC · MACHINE
          </p>
        </div>
        <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.2em', color: 'var(--ember)', marginBottom: 14, textTransform: 'uppercase' }}>Content</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[['Videos', '/videos'], ['Blog', '/blog'], ['News', '/news'], ['Resources', '/resources']].map(([label, href]) => (
                <Link key={href} href={href} style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--parchment-dim)', textDecoration: 'none', letterSpacing: '0.1em' }}>{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.2em', color: 'var(--ember)', marginBottom: 14, textTransform: 'uppercase' }}>Creator</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[['About', '/about'], ['Projects', '/projects'], ['Contact', '/contact']].map(([label, href]) => (
                <Link key={href} href={href} style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--parchment-dim)', textDecoration: 'none', letterSpacing: '0.1em' }}>{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.2em', color: 'var(--ember)', marginBottom: 14, textTransform: 'uppercase' }}>Follow</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href={yt} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--parchment-dim)', textDecoration: 'none', letterSpacing: '0.1em' }}>YouTube ↗</a>
              <a href={ig} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--parchment-dim)', textDecoration: 'none', letterSpacing: '0.1em' }}>Instagram ↗</a>
            </div>
          </div>
        </div>
      </div>
      <div className="divider" style={{ marginBottom: 24 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <div className="footer-copy">© {new Date().getFullYear()} {copyrightName}</div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(245,237,216,0.25)', letterSpacing: '0.14em' }}>ORGANIC · MACHINE</div>
      </div>
    </footer>
  )
}
