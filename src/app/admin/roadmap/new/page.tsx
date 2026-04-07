'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AdminFormShell, AdminField, AdminInput, AdminTextarea, AdminSelect, AdminToggle } from '@/components/admin/AdminForm'

export default function NewRoadmapItemPage() {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    title: '', description: '', status: 'planned', category: 'feature',
    shippedAt: '', sortOrder: 0, published: true,
  })

  function set(field: string, value: string | boolean | number) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError('')
    const body = {
      ...form,
      shippedAt: form.shippedAt || undefined,
    }
    const res = await fetch('/api/admin/roadmap', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    if (res.ok) {
      router.push('/admin/roadmap')
    } else {
      const data = await res.json()
      setError(data.error || 'Failed to save')
      setSaving(false)
    }
  }

  return (
    <AdminFormShell title="Add Roadmap Item" backHref="/admin/roadmap" onSubmit={handleSubmit} saving={saving} error={error}>
      <AdminField label="Title">
        <AdminInput value={form.title} onChange={v => set('title', v)} placeholder="e.g. Dark mode support" />
      </AdminField>
      <AdminField label="Description">
        <AdminTextarea value={form.description} onChange={v => set('description', v)} placeholder="What this item is about..." rows={3} />
      </AdminField>
      <AdminField label="Status">
        <AdminSelect value={form.status} onChange={v => set('status', v)} options={['planned', 'in-progress', 'shipped']} />
      </AdminField>
      <AdminField label="Category">
        <AdminSelect value={form.category} onChange={v => set('category', v)} options={['feature', 'improvement', 'fix', 'content', 'design']} />
      </AdminField>
      <AdminField label="Shipped At (optional)">
        <AdminInput value={form.shippedAt} onChange={v => set('shippedAt', v)} type="date" />
      </AdminField>
      <AdminField label="Sort Order">
        <AdminInput value={String(form.sortOrder)} onChange={v => set('sortOrder', Number(v))} type="number" />
      </AdminField>
      <AdminToggle label="Published" checked={form.published} onChange={v => set('published', v)} />
    </AdminFormShell>
  )
}
