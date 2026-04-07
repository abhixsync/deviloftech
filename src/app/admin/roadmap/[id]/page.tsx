'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { AdminFormShell, AdminField, AdminInput, AdminTextarea, AdminSelect, AdminToggle } from '@/components/admin/AdminForm'

export default function EditRoadmapItemPage() {
  const router = useRouter()
  const { id } = useParams<{ id: string }>()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    title: '', description: '', status: 'planned', category: 'feature',
    shippedAt: '', sortOrder: 0, published: true,
  })

  useEffect(() => {
    fetch(`/api/admin/roadmap/${id}`)
      .then(r => { if (!r.ok) throw new Error('Failed to load'); return r.json() })
      .then(item => {
        setForm({
          title: item.title || '',
          description: item.description || '',
          status: item.status || 'planned',
          category: item.category || 'feature',
          shippedAt: item.shippedAt ? item.shippedAt.slice(0, 10) : '',
          sortOrder: item.sortOrder ?? 0,
          published: item.published ?? true,
        })
      })
      .catch(() => setError('Failed to load item'))
  }, [id])

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
    const res = await fetch(`/api/admin/roadmap/${id}`, {
      method: 'PUT',
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
    <AdminFormShell title="Edit Roadmap Item" backHref="/admin/roadmap" onSubmit={handleSubmit} saving={saving} error={error}>
      <AdminField label="Title">
        <AdminInput value={form.title} onChange={v => set('title', v)} />
      </AdminField>
      <AdminField label="Description">
        <AdminTextarea value={form.description} onChange={v => set('description', v)} rows={3} />
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
