'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AdminFormShell, AdminField, AdminInput, AdminTextarea, AdminSelect, AdminToggle } from '@/components/admin/AdminForm'

export default function NewVideoPage() {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [fetching, setFetching] = useState(false)
  const [youtubeUrl, setYoutubeUrl] = useState('')
  const [form, setForm] = useState({
    youtubeId: '', title: '', description: '', thumbnail: '',
    category: 'coding', duration: '', published: true,
  })

  function set(field: string, value: string | boolean) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function fetchMeta() {
    if (!youtubeUrl) return
    setFetching(true)
    setError('')
    const res = await fetch(`/api/admin/videos/fetch-meta?url=${encodeURIComponent(youtubeUrl)}`)
    const data = await res.json()
    if (res.ok) {
      setForm(prev => ({
        ...prev,
        youtubeId: data.youtubeId,
        title: data.title,
        thumbnail: data.thumbnail,
      }))
    } else {
      setError(data.error || 'Could not fetch video info')
    }
    setFetching(false)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError('')
    const res = await fetch('/api/admin/videos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) {
      router.push('/admin/videos')
    } else {
      const data = await res.json()
      setError(data.error || 'Failed to save')
      setSaving(false)
    }
  }

  return (
    <AdminFormShell title="Add Video" backHref="/admin/videos" onSubmit={handleSubmit} saving={saving} error={error}>
      {/* YouTube URL fetcher */}
      <div style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 4, padding: '16px 18px' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.18em', color: 'var(--gold)', marginBottom: 10, textTransform: 'uppercase' }}>
          Auto-fill from YouTube URL
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <input
            type="text"
            value={youtubeUrl}
            onChange={e => setYoutubeUrl(e.target.value)}
            placeholder="https://www.youtube.com/watch?v=..."
            style={{
              flex: 1, padding: '9px 12px', background: 'rgba(16,12,8,0.6)',
              border: '1px solid rgba(201,168,76,0.2)', borderRadius: 3,
              color: 'var(--parchment)', fontFamily: 'var(--mono)', fontSize: 12, outline: 'none',
            }}
          />
          <button type="button" onClick={fetchMeta} disabled={fetching} className="btn-ghost" style={{ padding: '9px 18px', fontSize: 10 }}>
            {fetching ? '...' : 'Fetch'}
          </button>
        </div>
        {form.thumbnail && (
          <div style={{ marginTop: 12, display: 'flex', gap: 12, alignItems: 'center' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={form.thumbnail} alt="" style={{ width: 120, height: 68, objectFit: 'cover', borderRadius: 3 }} />
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--parchment-dim)' }}>{form.title}</div>
          </div>
        )}
      </div>

      <AdminField label="YouTube ID">
        <AdminInput value={form.youtubeId} onChange={v => set('youtubeId', v)} placeholder="dQw4w9WgXcQ" mono />
      </AdminField>
      <AdminField label="Title">
        <AdminInput value={form.title} onChange={v => set('title', v)} placeholder="Video title" />
      </AdminField>
      <AdminField label="Description">
        <AdminTextarea value={form.description} onChange={v => set('description', v)} placeholder="What is this video about..." rows={3} />
      </AdminField>
      <AdminField label="Thumbnail URL">
        <AdminInput value={form.thumbnail} onChange={v => set('thumbnail', v)} placeholder="Auto-filled above" />
      </AdminField>
      <AdminField label="Category">
        <AdminSelect value={form.category} onChange={v => set('category', v)} options={['ai', 'coding', 'tutorial', 'shorts', 'news']} />
      </AdminField>
      <AdminField label="Duration (optional)">
        <AdminInput value={form.duration} onChange={v => set('duration', v)} placeholder="12:34" mono />
      </AdminField>
      <AdminToggle label="Published" checked={form.published} onChange={v => set('published', v)} />
    </AdminFormShell>
  )
}
