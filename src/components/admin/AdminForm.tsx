'use client'

import Link from 'next/link'

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '10px 14px',
  background: 'rgba(16,12,8,0.6)', border: '1px solid rgba(201,168,76,0.2)',
  borderRadius: 3, color: 'var(--parchment)', fontSize: 13,
  outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s',
}

export function AdminFormShell({
  title, backHref, onSubmit, saving, error, children,
}: {
  title: string
  backHref: string
  onSubmit: (e: React.FormEvent) => void
  saving: boolean
  error: string
  children: React.ReactNode
}) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
        <Link href={backHref} style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--parchment-dim)', textDecoration: 'none' }}>
          ← Back
        </Link>
        <h1 style={{ fontFamily: 'var(--cinzel)', fontSize: 22, fontWeight: 900, color: 'var(--parchment)' }}>{title}</h1>
      </div>

      <form onSubmit={onSubmit} style={{ maxWidth: 720, display: 'flex', flexDirection: 'column', gap: 20 }}>
        {children}

        {error && (
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ember)', padding: '10px 14px', background: 'rgba(212,56,13,0.1)', borderRadius: 3 }}>
            ✕ {error}
          </div>
        )}

        <div style={{ display: 'flex', gap: 12, paddingTop: 8 }}>
          <button type="submit" disabled={saving} className="btn-primary">
            {saving ? 'Saving...' : 'Save'}
          </button>
          <Link href={backHref} className="btn-ghost">Cancel</Link>
        </div>
      </form>
    </div>
  )
}

export function AdminField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.18em', color: 'var(--parchment-dim)', marginBottom: 8, textTransform: 'uppercase' }}>
        {label}
      </label>
      {children}
    </div>
  )
}

export function AdminInput({ value, onChange, placeholder, mono, type = 'text' }: {
  value: string; onChange: (v: string) => void; placeholder?: string; mono?: boolean; type?: string
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      style={{ ...inputStyle, fontFamily: mono ? 'var(--mono)' : 'var(--serif)' }}
    />
  )
}

export function AdminTextarea({ value, onChange, placeholder, rows = 6, mono }: {
  value: string; onChange: (v: string) => void; placeholder?: string; rows?: number; mono?: boolean
}) {
  return (
    <textarea
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      style={{ ...inputStyle, fontFamily: mono ? 'var(--mono)' : 'var(--serif)', resize: 'vertical', lineHeight: 1.6 }}
    />
  )
}

export function AdminSelect({ value, onChange, options }: {
  value: string; onChange: (v: string) => void; options: string[]
}) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      style={{ ...inputStyle, fontFamily: 'var(--mono)', cursor: 'pointer' }}
    >
      {options.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
  )
}

export function AdminToggle({ label, checked, onChange }: {
  label: string; checked: boolean; onChange: (v: boolean) => void
}) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}>
      <div style={{
        width: 40, height: 22, borderRadius: 11, position: 'relative', transition: 'background 0.2s',
        background: checked ? 'var(--ember)' : 'rgba(201,168,76,0.2)',
      }}>
        <div style={{
          position: 'absolute', top: 3, left: checked ? 21 : 3,
          width: 16, height: 16, borderRadius: '50%', background: 'var(--parchment)',
          transition: 'left 0.2s',
        }} />
        <input type="checkbox" checked={checked} onChange={e => onChange(e.target.checked)} style={{ display: 'none' }} />
      </div>
      <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.15em', color: 'var(--parchment-dim)' }}>
        {label.toUpperCase()}
      </span>
    </label>
  )
}
