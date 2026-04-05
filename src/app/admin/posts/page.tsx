'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import type { IBlogPost } from '@/types'

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<IBlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/admin/posts').then(r => r.json()).then(data => {
      setPosts(Array.isArray(data) ? data : [])
      setLoading(false)
    })
  }, [])

  async function deletePost(id: string, title: string) {
    if (!confirm(`Delete "${title}"?`)) return
    await fetch(`/api/admin/posts/${id}`, { method: 'DELETE' })
    setPosts(posts.filter(p => p._id !== id))
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 }}>
        <div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.22em', color: 'var(--ember)', marginBottom: 8 }}>CONTENT</div>
          <h1 style={{ fontFamily: 'var(--cinzel)', fontSize: 24, fontWeight: 900, color: 'var(--parchment)' }}>Blog Posts</h1>
        </div>
        <Link href="/admin/posts/new" className="btn-primary">+ New Post</Link>
      </div>

      {loading && <div style={{ color: 'var(--parchment-dim)', fontFamily: 'var(--mono)', fontSize: 12 }}>Loading...</div>}

      {!loading && posts.length === 0 && (
        <div style={{ color: 'var(--parchment-dim)', fontFamily: 'var(--mono)', fontSize: 12 }}>No posts yet. Create your first one.</div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {posts.map((post) => (
          <div key={post._id} style={{
            background: 'rgba(44,36,32,0.4)', border: '1px solid rgba(201,168,76,0.12)',
            borderRadius: 4, padding: '16px 20px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
          }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: 'var(--cinzel)', fontSize: 14, color: 'var(--parchment)', marginBottom: 4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {post.title}
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--ember)', letterSpacing: '0.15em' }}>{post.category?.toUpperCase()}</span>
                <span style={{
                  fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.12em',
                  color: post.published ? '#4caf50' : 'var(--parchment-dim)',
                }}>
                  {post.published ? '● PUBLISHED' : '○ DRAFT'}
                </span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
              <Link href={`/admin/posts/${post._id}`} style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--gold)', textDecoration: 'none' }}>Edit</Link>
              <button onClick={() => deletePost(post._id!, post.title)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(212,56,13,0.7)' }}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
