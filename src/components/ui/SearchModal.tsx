'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'

type SearchResult = {
  type: 'post' | 'news' | 'resource' | 'video'
  title: string
  excerpt: string
  url: string
  category: string
}

const TYPE_COLORS: Record<SearchResult['type'], string> = {
  post: 'var(--gold)',
  news: '#4a9eff',
  resource: 'var(--ember)',
  video: '#4caf50',
}

interface Props {
  open: boolean
  onClose: () => void
}

export default function SearchModal({ open, onClose }: Props) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const router = useRouter()

  // Focus input when modal opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50)
    } else {
      setQuery('')
      setResults([])
      setLoading(false)
    }
  }, [open])

  // ESC closes modal
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  const search = useCallback(async (q: string) => {
    if (!q || q.length < 2) {
      setResults([])
      setLoading(false)
      return
    }
    setLoading(true)
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`)
      const data = await res.json()
      setResults(data.results ?? [])
    } catch {
      setResults([])
    } finally {
      setLoading(false)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setQuery(val)
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => search(val), 300)
  }

  const handleResultClick = (url: string) => {
    onClose()
    if (url.startsWith('http')) {
      window.open(url, '_blank', 'noopener,noreferrer')
    } else {
      router.push(url)
    }
  }

  if (!open) return null

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '10vh',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: 600,
          background: 'rgba(16,12,8,0.98)',
          border: '1px solid rgba(201,168,76,0.2)',
          borderRadius: 6,
          overflow: 'hidden',
          margin: '0 16px',
        }}
      >
        {/* Search input */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '12px 16px',
            borderBottom: '1px solid rgba(201,168,76,0.15)',
            gap: 10,
          }}
        >
          <span style={{ color: 'var(--parchment-dim)', fontSize: 16 }}>🔍</span>
          <input
            ref={inputRef}
            value={query}
            onChange={handleChange}
            placeholder="Search articles, news, resources..."
            style={{
              flex: 1,
              background: 'none',
              border: 'none',
              outline: 'none',
              color: 'var(--parchment)',
              fontFamily: 'var(--mono)',
              fontSize: 16,
              caretColor: 'var(--gold)',
            }}
          />
          {loading && (
            <span style={{ color: 'var(--parchment-dim)', fontSize: 12, fontFamily: 'var(--mono)' }}>
              ...
            </span>
          )}
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: 4,
              color: 'var(--parchment-dim)',
              fontFamily: 'var(--mono)',
              fontSize: 11,
              padding: '2px 6px',
              cursor: 'pointer',
            }}
          >
            ESC
          </button>
        </div>

        {/* Results */}
        {query.length >= 2 && !loading && results.length === 0 && (
          <div
            style={{
              padding: '24px 16px',
              textAlign: 'center',
              color: 'var(--parchment-dim)',
              fontFamily: 'var(--mono)',
              fontSize: 13,
            }}
          >
            No results for &apos;{query}&apos;
          </div>
        )}

        {results.length > 0 && (
          <ul style={{ listStyle: 'none', margin: 0, padding: '8px 0', maxHeight: 400, overflowY: 'auto' }}>
            {results.map((r, i) => (
              <li key={i}>
                <button
                  onClick={() => handleResultClick(r.url)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    padding: '10px 16px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                    borderBottom: i < results.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLButtonElement).style.background = 'rgba(201,168,76,0.07)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLButtonElement).style.background = 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span
                      style={{
                        fontFamily: 'var(--mono)',
                        fontSize: 10,
                        fontWeight: 700,
                        color: TYPE_COLORS[r.type],
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        border: `1px solid ${TYPE_COLORS[r.type]}`,
                        borderRadius: 3,
                        padding: '1px 5px',
                        flexShrink: 0,
                      }}
                    >
                      {r.type}
                    </span>
                    <span
                      style={{
                        color: 'var(--parchment)',
                        fontFamily: 'var(--serif)',
                        fontSize: 14,
                        fontWeight: 600,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {r.title}
                    </span>
                  </div>
                  {r.excerpt && (
                    <span
                      style={{
                        color: 'var(--parchment-dim)',
                        fontFamily: 'var(--serif)',
                        fontSize: 12,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        paddingLeft: 2,
                      }}
                    >
                      {r.excerpt}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Hint footer */}
        {query.length < 2 && (
          <div
            style={{
              padding: '12px 16px',
              color: 'var(--parchment-dim)',
              fontFamily: 'var(--mono)',
              fontSize: 11,
              opacity: 0.6,
            }}
          >
            Type at least 2 characters to search
          </div>
        )}
      </div>
    </div>
  )
}
