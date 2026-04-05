'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push('/admin')
    } else {
      setError('Incorrect password')
      setLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'var(--ash)',
    }}>
      <div style={{
        width: 360,
        background: 'rgba(44,36,32,0.5)',
        border: '1px solid rgba(201,168,76,0.18)',
        borderRadius: 6,
        padding: '40px 36px',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 3,
          background: 'linear-gradient(90deg, var(--blood), var(--ember), var(--gold))',
          borderRadius: '6px 6px 0 0',
        }} />

        <div style={{ fontFamily: 'var(--display)', fontSize: 20, color: 'var(--ember)', marginBottom: 4 }}>
          Devil<span style={{ color: 'var(--gold)' }}>OfTech</span>
        </div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--parchment-dim)', letterSpacing: '0.22em', marginBottom: 32 }}>
          ADMIN ACCESS
        </div>

        <form onSubmit={handleSubmit}>
          <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', color: 'var(--parchment-dim)', marginBottom: 8 }}>
            PASSWORD
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            style={{
              width: '100%', padding: '12px 14px', marginBottom: 20,
              background: 'rgba(16,12,8,0.6)', border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: 3, color: 'var(--parchment)', fontFamily: 'var(--mono)',
              fontSize: 13, outline: 'none', boxSizing: 'border-box',
            }}
          />

          {error && (
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ember)', marginBottom: 16 }}>
              ✕ {error}
            </div>
          )}

          <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            {loading ? 'Verifying...' : 'Enter the Forge'}
          </button>
        </form>
      </div>
    </div>
  )
}
