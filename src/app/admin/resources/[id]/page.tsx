'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { AdminFormShell, AdminField, AdminInput, AdminTextarea, AdminSelect, AdminToggle } from '@/components/admin/AdminForm'

export default function EditResourcePage() {
  const router = useRouter()
  const { id } = useParams<{ id: string }>()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '', description: '', url: '', category: 'tool',
    icon: '', isFree: true, published: true,
  })

  useEffect(() => {
    fetch(`/api/admin/resources/${id}`).then(r => r.json()).then(r => {
      setForm({
        name: r.name || '',
        description: r.description || '',
        url: r.url || '',
        category: r.category || 'tool',
        icon: r.icon || '',
        isFree: r.isFree ?? true,
        published: r.published ?? true,
      })
    })
  }, [id])

  function set(field: string, value: string | boolean) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    const res = await fetch(`/api/admin/resources/${id}`, {
      method: 'PUT',
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
    <AdminFormShell title="Edit Resource" backHref="/admin/resources" onSubmit={handleSubmit} saving={saving} error={error}>
      <AdminField label="Name">
        <AdminInput value={form.name} onChange={v => set('name', v)} />
      </AdminField>
      <AdminField label="Description">
        <AdminTextarea value={form.description} onChange={v => set('description', v)} rows={3} />
      </AdminField>
      <AdminField label="URL">
        <AdminInput value={form.url} onChange={v => set('url', v)} mono />
      </AdminField>
      <AdminField label="Category">
        <AdminSelect value={form.category} onChange={v => set('category', v)} options={['tool', 'course', 'book', 'channel', 'library', 'other']} />
      </AdminField>
      <AdminField label="Icon / Emoji">
        <AdminInput value={form.icon} onChange={v => set('icon', v)} />
      </AdminField>
      <AdminToggle label="Free" checked={form.isFree} onChange={v => set('isFree', v)} />
      <AdminToggle label="Published" checked={form.published} onChange={v => set('published', v)} />
    </AdminFormShell>
  )
}
