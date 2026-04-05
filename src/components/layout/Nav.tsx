'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import BrandLogo from '@/components/ui/BrandLogo'

const links = [
  { href: '/videos', label: 'Videos' },
  { href: '/blog', label: 'Blog' },
  { href: '/news', label: 'News' },
  { href: '/projects', label: 'Projects' },
  { href: '/resources', label: 'Resources' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

interface Props {
  siteName?: string
}

export default function Nav({ siteName = 'DevilOfTech' }: Props) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  if (pathname.startsWith('/admin')) return null

  return (
    <>
      <nav>
        <Link href="/" className="nav-brand">
          <BrandLogo size={36} />
          <span className="nav-brand-text">{siteName}</span>
        </Link>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={pathname.startsWith(l.href) ? 'active' : ''}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button className="nav-hamburger" onClick={() => setOpen(true)} aria-label="Open menu">
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div className={`nav-mobile ${open ? 'open' : ''}`}>
        <button
          onClick={() => setOpen(false)}
          style={{
            position: 'absolute', top: 24, right: 28,
            background: 'none', border: 'none',
            color: 'var(--parchment-dim)', fontSize: 28,
            cursor: 'pointer', fontFamily: 'var(--mono)',
          }}
        >
          ✕
        </button>
        <Link href="/" onClick={() => setOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <BrandLogo size={40} />
          <span style={{ fontFamily: 'var(--display)', fontSize: 18, color: 'var(--gold)' }}>{siteName}</span>
        </Link>
        {links.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className={pathname.startsWith(l.href) ? 'active' : ''}>
            {l.label}
          </Link>
        ))}
      </div>
    </>
  )
}
