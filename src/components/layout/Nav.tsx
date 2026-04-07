'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import BrandLogo from '@/components/ui/BrandLogo'
import SearchModal from '@/components/ui/SearchModal'

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
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen((v) => !v)
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

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

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button
            className="btn-ghost"
            onClick={() => setSearchOpen(true)}
            aria-label="Open search"
            style={{ fontSize: 11, fontFamily: 'var(--mono)', padding: '4px 8px' }}
          >
            <span className="nav-search-desktop">⌘K</span>
            <span className="nav-search-mobile">🔍</span>
          </button>
          <button className="nav-hamburger" onClick={() => setOpen(true)} aria-label="Open menu">
            <span />
            <span />
            <span />
          </button>
        </div>
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

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
