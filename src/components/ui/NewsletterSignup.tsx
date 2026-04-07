'use client'

import { useState } from 'react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Something went wrong')
      } else {
        setSuccess(true)
        setEmail('')
      }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      background: 'rgba(26,20,16,0.8)',
      border: '1px solid rgba(201,168,76,0.15)',
      borderRadius: 6,
      padding: '36px 40px',
      maxWidth: 520,
      margin: '0 auto',
    }}>
      <div style={{
        fontFamily: 'var(--mono)',
        fontSize: 9,
        letterSpacing: '0.22em',
        color: 'var(--ember)',
        marginBottom: 12,
      }}>
        STAY IN THE LOOP
      </div>

      <h2 style={{
        fontFamily: 'var(--cinzel)',
        fontSize: 22,
        fontWeight: 900,
        color: 'var(--parchment)',
        marginBottom: 10,
        lineHeight: 1.3,
      }}>
        Get the latest in AI &amp; Tech
      </h2>

      <p style={{
        fontFamily: 'var(--serif)',
        fontSize: 15,
        color: 'var(--parchment-dim)',
        marginBottom: 24,
        lineHeight: 1.6,
      }}>
        No spam. Just signal.
      </p>

      {success ? (
        <div style={{
          fontFamily: 'var(--cinzel)',
          fontSize: 16,
          color: 'var(--gold)',
          textAlign: 'center',
          padding: '16px 0',
        }}>
          You&apos;re in! 🔥
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 10 }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            disabled={loading}
            style={{
              flex: 1,
              background: 'rgba(0,0,0,0.3)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: 3,
              padding: '10px 14px',
              fontFamily: 'var(--mono)',
              fontSize: 12,
              color: 'var(--parchment)',
              outline: 'none',
            }}
          />
          <button
            type="submit"
            disabled={loading}
            className="btn-primary"
            style={{ fontSize: 11, whiteSpace: 'nowrap', opacity: loading ? 0.6 : 1 }}
          >
            {loading ? 'Subscribing…' : 'Subscribe'}
          </button>
        </form>
      )}

      {error && (
        <div style={{
          fontFamily: 'var(--mono)',
          fontSize: 10,
          color: 'var(--ember)',
          marginTop: 10,
          letterSpacing: '0.08em',
        }}>
          {error}
        </div>
      )}
    </div>
  )
}
