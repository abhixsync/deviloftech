'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { AdminFormShell, AdminField, AdminInput, AdminTextarea } from '@/components/admin/AdminForm'

export default function EditAchievementPage() {
  const router = useRouter()
  const { id } = useParams<{ id: string }>()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    icon: '', title: '', description: '', year: '', sortOrder: '0',
  })

  useEffect(() => {
    fetch(`/api/admin/achievements/${id}`).then(r => r.json()).then(item => {
      setForm({
        icon: item.icon || '',
        title: item.title || '',
        description: item.description || '',
        year: item.year || '',
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
    const res = await fetch(`/api/admin/achievements/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, sortOrder: Number(form.sortOrder) || 0 }),
    })
    if (res.ok) {
      router.push('/admin/achievements')
    } else {
      const data = await res.json()
      setError(data.error || 'Failed to save')
      setSaving(false)
    }
  }

  return (
    <AdminFormShell title="Edit Achievement" backHref="/admin/achievements" onSubmit={handleSubmit} saving={saving} error={error}>
      <AdminField label="Icon">
        <AdminInput value={form.icon} onChange={v => set('icon', v)} placeholder="🏅" />
      </AdminField>
      <AdminField label="Title">
        <AdminInput value={form.title} onChange={v => set('title', v)} placeholder="Achievement title" />
      </AdminField>
      <AdminField label="Description">
        <AdminTextarea value={form.description} onChange={v => set('description', v)} placeholder="Describe this achievement..." rows={3} />
      </AdminField>
      <AdminField label="Year">
        <AdminInput value={form.year} onChange={v => set('year', v)} placeholder="2024" />
      </AdminField>
      <AdminField label="Sort Order">
        <AdminInput value={form.sortOrder} onChange={v => set('sortOrder', v)} placeholder="0" />
      </AdminField>
    </AdminFormShell>
  )
}
