'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: '⚡' },
  { href: '/admin/posts', label: 'Blog Posts', icon: '✍' },
  { href: '/admin/videos', label: 'Videos', icon: '▶' },
  { href: '/admin/news', label: 'News', icon: '📡' },
  { href: '/admin/resources', label: 'Resources', icon: '🔧' },
  { href: '/admin/projects', label: 'Projects', icon: '⚙' },
  { href: '/admin/profile', label: 'Profile', icon: '👤' },
  { href: '/admin/experience', label: 'Experience', icon: '💼' },
  { href: '/admin/skills', label: 'Skills', icon: '⚡' },
  { href: '/admin/achievements', label: 'Achievements', icon: '🏆' },
  { href: '/admin/education', label: 'Education', icon: '🎓' },
  { href: '/admin/contact', label: 'Contact', icon: '📬' },
  { href: '/admin/newsletter', label: 'Newsletter', icon: '📧' },
  { href: '/admin/site-settings', label: 'Site Settings', icon: '⚙' },
]

function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  return (
    <aside style={{
      width: 220,
      minHeight: '100vh',
      background: 'rgba(26,20,16,0.95)',
      borderRight: '1px solid rgba(201,168,76,0.15)',
      display: 'flex',
      flexDirection: 'column',
      padding: '28px 0',
      position: 'sticky',
      top: 0,
      flexShrink: 0,
    }}>
      {/* Brand */}
      <div style={{ padding: '0 20px 28px', borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
        <div style={{ fontFamily: 'var(--display)', fontSize: 15, color: 'var(--ember)' }}>
          Devil<span style={{ color: 'var(--gold)' }}>OfTech</span>
        </div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--parchment-dim)', letterSpacing: '0.2em', marginTop: 4 }}>
          ADMIN PANEL
        </div>
      </div>

      {/* Nav */}
      <div role="navigation" style={{ padding: '20px 0', flex: 1 }}>
        {navItems.map((item) => {
          const active = item.href === '/admin'
            ? pathname === '/admin'
            : pathname.startsWith(item.href)
          return (
            <Link key={item.href} href={item.href} style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 20px',
              fontFamily: 'var(--mono)',
              fontSize: 11,
              letterSpacing: '0.12em',
              textDecoration: 'none',
              color: active ? 'var(--ember)' : 'var(--parchment-dim)',
              background: active ? 'rgba(212,56,13,0.08)' : 'transparent',
              borderLeft: active ? '2px solid var(--ember)' : '2px solid transparent',
              transition: 'all 0.2s',
            }}>
              <span>{item.icon}</span>
              {item.label}
            </Link>
          )
        })}
      </div>

      {/* Footer actions */}
      <div style={{ padding: '20px', borderTop: '1px solid rgba(201,168,76,0.1)', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Link href="/" target="_blank" style={{
          fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--gold)',
          textDecoration: 'none', letterSpacing: '0.12em',
        }}>
          ↗ View Site
        </Link>
        <button onClick={handleLogout} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(245,237,216,0.4)',
          letterSpacing: '0.12em', textAlign: 'left', padding: 0,
        }}>
          ⎋ Logout
        </button>
      </div>
    </aside>
  )
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLogin = pathname === '/admin/login'

  if (isLogin) {
    return <>{children}</>
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--ash)' }}>
      <AdminSidebar />
      <main style={{ flex: 1, padding: '36px 40px', overflowY: 'auto' }}>
        {children}
      </main>
    </div>
  )
}
