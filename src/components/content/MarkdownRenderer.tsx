'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { Components } from 'react-markdown'

const components: Components = {
  h1: ({ children }) => (
    <h1 style={{ fontFamily: 'var(--cinzel)', fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: 900, color: 'var(--parchment)', lineHeight: 1.25, margin: '2em 0 0.6em' }}>
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 style={{ fontFamily: 'var(--cinzel)', fontSize: 'clamp(18px, 2.8vw, 26px)', fontWeight: 700, color: 'var(--parchment)', lineHeight: 1.3, margin: '1.8em 0 0.5em' }}>
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 style={{ fontFamily: 'var(--cinzel)', fontSize: 'clamp(15px, 2.2vw, 20px)', fontWeight: 700, color: 'var(--ember)', lineHeight: 1.35, margin: '1.5em 0 0.4em' }}>
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 style={{ fontFamily: 'var(--cinzel)', fontSize: '16px', fontWeight: 700, color: 'var(--ember)', lineHeight: 1.4, margin: '1.3em 0 0.4em' }}>
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p style={{ fontFamily: 'var(--serif)', fontSize: 17, color: 'var(--parchment)', lineHeight: 1.85, margin: '0 0 1.2em' }}>
      {children}
    </p>
  ),
  a: ({ href, children }) => (
    <a href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined} style={{ color: 'var(--gold)', textDecoration: 'underline', textDecorationColor: 'rgba(201,168,76,0.4)', textUnderlineOffset: 3 }}>
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong style={{ fontWeight: 700, color: 'var(--parchment)' }}>{children}</strong>
  ),
  em: ({ children }) => (
    <em style={{ fontStyle: 'italic', color: 'rgba(245,237,216,0.85)' }}>{children}</em>
  ),
  code: ({ className, children, ...props }) => {
    const isBlock = !!className
    if (isBlock) {
      return (
        <code className={className} style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--gold)', display: 'block' }} {...props}>
          {children}
        </code>
      )
    }
    return (
      <code style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--gold)', background: 'rgba(201,168,76,0.12)', padding: '2px 6px', borderRadius: 3, border: '1px solid rgba(201,168,76,0.2)' }} {...props}>
        {children}
      </code>
    )
  },
  pre: ({ children }) => (
    <pre style={{ background: 'rgba(16,12,8,0.8)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 6, padding: '18px 20px', overflowX: 'auto', margin: '1.4em 0', fontFamily: 'var(--mono)', fontSize: 13, lineHeight: 1.7 }}>
      {children}
    </pre>
  ),
  blockquote: ({ children }) => (
    <blockquote style={{ borderLeft: '3px solid var(--ember)', paddingLeft: 20, margin: '1.4em 0', fontStyle: 'italic', color: 'rgba(245,237,216,0.65)' }}>
      {children}
    </blockquote>
  ),
  ul: ({ children }) => (
    <ul style={{ fontFamily: 'var(--serif)', fontSize: 17, color: 'var(--parchment)', lineHeight: 1.85, margin: '0 0 1.2em', paddingLeft: 24 }}>
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol style={{ fontFamily: 'var(--serif)', fontSize: 17, color: 'var(--parchment)', lineHeight: 1.85, margin: '0 0 1.2em', paddingLeft: 24 }}>
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li style={{ marginBottom: '0.3em', color: 'var(--parchment)' }}>{children}</li>
  ),
  hr: () => (
    <hr style={{ border: 'none', borderTop: '1px solid rgba(201,168,76,0.2)', margin: '2em 0' }} />
  ),
  img: ({ src, alt }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt || ''} style={{ maxWidth: '100%', borderRadius: 6, border: '1px solid rgba(201,168,76,0.15)', display: 'block', margin: '1.4em 0' }} />
  ),
  table: ({ children }) => (
    <div style={{ overflowX: 'auto', margin: '1.4em 0' }}>
      <table style={{ borderCollapse: 'collapse', width: '100%', fontFamily: 'var(--mono)', fontSize: 13 }}>
        {children}
      </table>
    </div>
  ),
  th: ({ children }) => (
    <th style={{ padding: '8px 14px', borderBottom: '1px solid rgba(201,168,76,0.35)', borderRight: '1px solid rgba(201,168,76,0.15)', color: 'var(--gold)', textAlign: 'left', letterSpacing: '0.08em', background: 'rgba(201,168,76,0.08)' }}>
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td style={{ padding: '8px 14px', borderBottom: '1px solid rgba(201,168,76,0.1)', borderRight: '1px solid rgba(201,168,76,0.1)', color: 'var(--parchment)' }}>
      {children}
    </td>
  ),
}

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div style={{ fontFamily: 'var(--serif)', fontSize: 17, color: 'var(--parchment)', lineHeight: 1.85 }}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  )
}
