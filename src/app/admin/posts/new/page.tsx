'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AdminFormShell, AdminField, AdminInput, AdminTextarea, AdminSelect, AdminToggle } from '@/components/admin/AdminForm'
import ThumbnailUpload from '@/components/admin/ThumbnailUpload'

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export default function NewPostPage() {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    title: '', slug: '', excerpt: '', content: '',
    category: 'coding', tags: '', thumbnail: '', published: false,
  })

  function set(field: string, value: string | boolean) {
    setForm(prev => {
      const next = { ...prev, [field]: value }
      if (field === 'title' && typeof value === 'string') next.slug = slugify(value)
      return next
    })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError('')
    const res = await fetch('/api/admin/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, tags: form.tags.split(',').map(t => t.trim()).filter(Boolean) }),
    })
    if (res.ok) {
      router.push('/admin/posts')
    } else {
      const data = await res.json()
      setError(data.error || 'Failed to save')
      setSaving(false)
    }
  }

  return (
    <AdminFormShell title="New Blog Post" backHref="/admin/posts" onSubmit={handleSubmit} saving={saving} error={error}>
      <AdminField label="Title">
        <AdminInput value={form.title} onChange={v => set('title', v)} placeholder="Your post title" />
      </AdminField>
      <AdminField label="Slug">
        <AdminInput value={form.slug} onChange={v => set('slug', v)} placeholder="auto-generated-from-title" mono />
      </AdminField>
      <AdminField label="Excerpt">
        <AdminTextarea value={form.excerpt} onChange={v => set('excerpt', v)} placeholder="Short summary shown in listings..." rows={2} />
      </AdminField>
      <AdminField label="Content (Markdown supported)">
        <AdminTextarea value={form.content} onChange={v => set('content', v)} placeholder="Write in Markdown... # Heading, **bold**, *italic*, `code`, [link](url)" rows={16} mono />
      </AdminField>
      <AdminField label="Category">
        <AdminSelect value={form.category} onChange={v => set('category', v)} options={['ai', 'coding', 'news', 'tutorial', 'opinion']} />
      </AdminField>
      <AdminField label="Tags (comma separated)">
        <AdminInput value={form.tags} onChange={v => set('tags', v)} placeholder="react, typescript, nextjs" />
      </AdminField>
      <AdminField label="Thumbnail">
        <ThumbnailUpload value={form.thumbnail} onChange={v => set('thumbnail', v)} />
      </AdminField>
      <AdminToggle label="Published" checked={form.published} onChange={v => set('published', v)} />
    </AdminFormShell>
  )
}
