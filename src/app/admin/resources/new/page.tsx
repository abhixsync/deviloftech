'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AdminFormShell, AdminField, AdminInput, AdminTextarea, AdminSelect, AdminToggle } from '@/components/admin/AdminForm'
import FileUpload from '@/components/admin/FileUpload'

export default function NewResourcePage() {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '', description: '', url: '', fileUrl: '', category: 'tool',
    icon: '', isFree: true, published: true,
  })

  function set(field: string, value: string | boolean) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.url && !form.fileUrl) {
      setError('Provide either a URL or upload a file')
      return
    }
    setSaving(true)
    setError('')
    const res = await fetch('/api/admin/resources', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) {
      router.push('/admin/resources')
    } else {
      const data = await res.json()
      setError(data.error || 'Failed to save')
      setSaving(false)
    }
  }

  return (
    <AdminFormShell title="Add Resource" backHref="/admin/resources" onSubmit={handleSubmit} saving={saving} error={error}>
      <AdminField label="Name">
        <AdminInput value={form.name} onChange={v => set('name', v)} placeholder="Cursor, Vercel, etc." />
      </AdminField>
      <AdminField label="Description">
        <AdminTextarea value={form.description} onChange={v => set('description', v)} placeholder="What is it and why it's useful..." rows={3} />
      </AdminField>
      <AdminField label="Category">
        <AdminSelect value={form.category} onChange={v => set('category', v)} options={['tool', 'course', 'book', 'channel', 'library', 'guide', 'cheatsheet', 'template', 'roadmap', 'podcast', 'community', 'docs', 'other']} />
      </AdminField>

      <AdminField label="Upload File (PDF, DOCX, MD, etc.)">
        <FileUpload value={form.fileUrl} onChange={v => set('fileUrl', v)} folder="resources" />
      </AdminField>

      <AdminField label="External URL (or paste URL if no file upload)">
        <AdminInput value={form.url} onChange={v => set('url', v)} placeholder="https://..." mono />
      </AdminField>

      <AdminField label="Icon / Emoji (optional)">
        <AdminInput value={form.icon} onChange={v => set('icon', v)} placeholder="🛠 or URL" />
      </AdminField>
      <AdminToggle label="Free" checked={form.isFree} onChange={v => set('isFree', v)} />
      <AdminToggle label="Published" checked={form.published} onChange={v => set('published', v)} />
    </AdminFormShell>
  )
}
