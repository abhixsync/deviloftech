'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { AdminFormShell, AdminField, AdminInput, AdminTextarea } from '@/components/admin/AdminForm'

export default function EditExperiencePage() {
  const router = useRouter()
  const { id } = useParams<{ id: string }>()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    period: '', role: '', company: '', location: '', description: '', pills: '', sortOrder: '0',
  })

  useEffect(() => {
    fetch(`/api/admin/experience/${id}`).then(r => r.json()).then(item => {
      setForm({
        period: item.period || '',
        role: item.role || '',
        company: item.company || '',
        location: item.location || '',
        description: item.description || '',
        pills: (item.pills || []).join(', '),
        sortOrder: String(item.sortOrder ?? 0),
      })
    })
  }, [id])

  function set(field: string, value: string) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError('')
    const res = await fetch(`/api/admin/experience/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        pills: form.pills.split(',').map(t => t.trim()).filter(Boolean),
        sortOrder: Number(form.sortOrder) || 0,
      }),
    })
    if (res.ok) {
      router.push('/admin/experience')
    } else {
      const data = await res.json()
      setError(data.error || 'Failed to save')
      setSaving(false)
    }
  }

  return (
    <AdminFormShell title="Edit Experience" backHref="/admin/experience" onSubmit={handleSubmit} saving={saving} error={error}>
      <AdminField label="Period">
        <AdminInput value={form.period} onChange={v => set('period', v)} placeholder="2023 - Present" />
      </AdminField>
      <AdminField label="Role">
        <AdminInput value={form.role} onChange={v => set('role', v)} placeholder="Senior Developer" />
      </AdminField>
      <AdminField label="Company">
        <AdminInput value={form.company} onChange={v => set('company', v)} placeholder="Acme Corp" />
      </AdminField>
      <AdminField label="Location">
        <AdminInput value={form.location} onChange={v => set('location', v)} placeholder="Remote" />
      </AdminField>
      <AdminField label="Description">
        <AdminTextarea value={form.description} onChange={v => set('description', v)} placeholder="Describe your responsibilities and impact..." rows={6} />
      </AdminField>
      <AdminField label="Pills (comma separated)">
        <AdminInput value={form.pills} onChange={v => set('pills', v)} placeholder="React, TypeScript, Node.js" />
      </AdminField>
      <AdminField label="Sort Order">
        <AdminInput value={form.sortOrder} onChange={v => set('sortOrder', v)} placeholder="0" />
      </AdminField>
    </AdminFormShell>
  )
}
