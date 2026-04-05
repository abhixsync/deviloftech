'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { AdminFormShell, AdminField, AdminInput, AdminTextarea, AdminSelect, AdminToggle } from '@/components/admin/AdminForm'

export default function EditVideoPage() {
  const router = useRouter()
  const { id } = useParams<{ id: string }>()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    youtubeId: '', title: '', description: '', thumbnail: '',
    category: 'coding', duration: '', published: true,
  })

  useEffect(() => {
    fetch(`/api/admin/videos/${id}`).then(r => r.json()).then(v => {
      setForm({
        youtubeId: v.youtubeId || '',
        title: v.title || '',
        description: v.description || '',
        thumbnail: v.thumbnail || '',
        category: v.category || 'coding',
        duration: v.duration || '',
        published: v.published ?? true,
      })
    })
  }, [id])

  function set(field: string, value: string | boolean) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    const res = await fetch(`/api/admin/videos/${id}`, {
      method: 'PUT',
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
    <AdminFormShell title="Edit Video" backHref="/admin/videos" onSubmit={handleSubmit} saving={saving} error={error}>
      <AdminField label="YouTube ID">
        <AdminInput value={form.youtubeId} onChange={v => set('youtubeId', v)} placeholder="dQw4w9WgXcQ" mono />
      </AdminField>
      <AdminField label="Title">
        <AdminInput value={form.title} onChange={v => set('title', v)} placeholder="Video title" />
      </AdminField>
      <AdminField label="Description">
        <AdminTextarea value={form.description} onChange={v => set('description', v)} rows={3} />
      </AdminField>
      <AdminField label="Thumbnail URL">
        <AdminInput value={form.thumbnail} onChange={v => set('thumbnail', v)} />
      </AdminField>
      <AdminField label="Category">
        <AdminSelect value={form.category} onChange={v => set('category', v)} options={['ai', 'coding', 'tutorial', 'shorts', 'news']} />
      </AdminField>
      <AdminField label="Duration">
        <AdminInput value={form.duration} onChange={v => set('duration', v)} placeholder="12:34" mono />
      </AdminField>
      <AdminToggle label="Published" checked={form.published} onChange={v => set('published', v)} />
    </AdminFormShell>
  )
}
