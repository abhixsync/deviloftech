'use client'

import { useState } from 'react'

type Mode = 'chat' | 'explain' | 'code' | 'summarize'

const MODES: { key: Mode; label: string }[] = [
  { key: 'chat', label: '💬 Chat' },
  { key: 'explain', label: '🔍 Explain' },
  { key: 'code', label: '💻 Code' },
  { key: 'summarize', label: '📋 Summarize' },
]

const EXAMPLES: Record<Mode, string[]> = {
  explain: [
    'What is a Large Language Model?',
    'Explain Docker in simple terms',
    'How does RAG work?',
  ],
  code: [
    'Write a Python script to fetch and parse JSON from an API',
    'Create a React custom hook for debouncing',
    'SQL query to find duplicate records',
  ],
  summarize: [
    'The rise of open-source AI models is changing the industry...',
    'Transformers architecture explained...',
    'Why most AI startups fail...',
  ],
  chat: [
    "What's the difference between AI and ML?",
    'What coding languages should I learn in 2025?',
    'How do I get started with LLMs?',
  ],
}

const MODE_LABELS: Record<Mode, string> = {
  chat: 'Chat',
  explain: 'Explanation',
  code: 'Code',
  summarize: 'Summary',
}

export default function AIPlayground() {
  const [mode, setMode] = useState<Mode>('chat')
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  async function handleGenerate() {
    if (!prompt.trim() || loading) return
    setError('')
    setResult('')
    setLoading(true)

    try {
      const res = await fetch('/api/playground', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: prompt.trim(), mode }),
      })
      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Something went wrong')
      } else {
        setResult(data.result || '')
      }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(result)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard not available
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      handleGenerate()
    }
  }

  return (
    <div style={{ maxWidth: 760, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <div className="section-eyebrow">Interactive</div>
        <div className="section-title">AI Playground</div>
        <p style={{
          fontFamily: 'var(--serif)',
          fontSize: 16,
          color: 'var(--parchment-dim)',
          lineHeight: 1.7,
          marginTop: 8,
        }}>
          Test AI capabilities live — powered by Claude
        </p>
      </div>

      {/* Mode selector */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
        {MODES.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setMode(key)}
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              letterSpacing: '0.08em',
              padding: '8px 16px',
              borderRadius: 3,
              cursor: 'pointer',
              border: mode === key
                ? '1px solid var(--ember)'
                : '1px solid rgba(201,168,76,0.2)',
              background: mode === key
                ? 'rgba(212,56,13,0.12)'
                : 'transparent',
              color: mode === key ? 'var(--parchment)' : 'var(--parchment-dim)',
              transition: 'all 0.15s ease',
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Example prompts */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
        {EXAMPLES[mode].map((example) => (
          <button
            key={example}
            onClick={() => setPrompt(example)}
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 9,
              letterSpacing: '0.08em',
              padding: '5px 12px',
              borderRadius: 20,
              cursor: 'pointer',
              border: '1px solid rgba(201,168,76,0.15)',
              background: 'rgba(201,168,76,0.05)',
              color: 'var(--gold)',
              transition: 'all 0.15s ease',
              textAlign: 'left',
            }}
          >
            {example.length > 52 ? example.slice(0, 52) + '…' : example}
          </button>
        ))}
      </div>

      {/* Input area */}
      <div style={{
        background: 'rgba(16,12,8,0.7)',
        border: '1px solid rgba(201,168,76,0.15)',
        borderRadius: 6,
        padding: '16px',
        marginBottom: 16,
      }}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={4}
          placeholder="Ask anything about tech, coding, or AI…"
          maxLength={1000}
          style={{
            width: '100%',
            background: 'transparent',
            border: 'none',
            outline: 'none',
            resize: 'vertical',
            fontFamily: 'var(--serif)',
            fontSize: 15,
            color: 'var(--parchment)',
            lineHeight: 1.6,
            boxSizing: 'border-box',
          }}
        />
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 12,
          paddingTop: 12,
          borderTop: '1px solid rgba(201,168,76,0.08)',
        }}>
          <span style={{
            fontFamily: 'var(--mono)',
            fontSize: 9,
            color: prompt.length > 900 ? 'var(--ember)' : 'rgba(245,237,216,0.3)',
            letterSpacing: '0.1em',
          }}>
            {prompt.length}/1000
          </span>
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="btn-primary"
            style={{
              fontSize: 11,
              opacity: loading || !prompt.trim() ? 0.5 : 1,
              cursor: loading || !prompt.trim() ? 'not-allowed' : 'pointer',
            }}
          >
            {loading ? 'Generating…' : 'Generate →'}
          </button>
        </div>
      </div>

      {/* Loading state */}
      {loading && (
        <div style={{
          fontFamily: 'var(--mono)',
          fontSize: 11,
          color: 'var(--gold)',
          letterSpacing: '0.12em',
          padding: '12px 0',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}>
          <span style={{ animation: 'pulse 1.2s ease-in-out infinite' }}>●</span>
          <span style={{ animation: 'pulse 1.2s ease-in-out infinite 0.2s' }}>●</span>
          <span style={{ animation: 'pulse 1.2s ease-in-out infinite 0.4s' }}>●</span>
          <span style={{ marginLeft: 4 }}>Generating...</span>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div style={{
          background: 'rgba(212,56,13,0.08)',
          border: '1px solid rgba(212,56,13,0.3)',
          borderRadius: 4,
          padding: '14px 18px',
          fontFamily: 'var(--mono)',
          fontSize: 11,
          color: 'var(--ember)',
          letterSpacing: '0.08em',
          marginBottom: 16,
        }}>
          {error}
        </div>
      )}

      {/* Output area */}
      {result && !loading && (
        <div style={{
          background: 'rgba(16,12,8,0.8)',
          border: '1px solid rgba(201,168,76,0.12)',
          borderLeft: '3px solid var(--ember)',
          borderRadius: 4,
          padding: '20px 24px',
          marginTop: 8,
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
          }}>
            <span style={{
              fontFamily: 'var(--mono)',
              fontSize: 9,
              letterSpacing: '0.2em',
              color: 'var(--ember)',
              textTransform: 'uppercase',
            }}>
              {MODE_LABELS[mode]}
            </span>
            <button
              onClick={handleCopy}
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 9,
                letterSpacing: '0.12em',
                padding: '4px 12px',
                borderRadius: 2,
                cursor: 'pointer',
                border: '1px solid rgba(201,168,76,0.2)',
                background: 'transparent',
                color: copied ? 'var(--gold)' : 'var(--parchment-dim)',
                transition: 'color 0.15s ease',
              }}
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>

          <p style={{
            fontFamily: 'var(--serif)',
            fontSize: 15,
            color: 'var(--parchment)',
            lineHeight: 1.7,
            whiteSpace: 'pre-wrap',
            margin: 0,
          }}>
            {result}
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: 16,
            paddingTop: 12,
            borderTop: '1px solid rgba(201,168,76,0.07)',
          }}>
            <span style={{
              fontFamily: 'var(--mono)',
              fontSize: 8,
              letterSpacing: '0.12em',
              color: 'rgba(245,237,216,0.2)',
            }}>
              Powered by Claude
            </span>
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
