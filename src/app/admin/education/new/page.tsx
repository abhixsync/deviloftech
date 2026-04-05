'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AdminFormShell, AdminField, AdminInput } from '@/components/admin/AdminForm'

export default function NewEducationPage() {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    badge: '', degree: '', institution: '', year: '', sortOrder: '0',
  })

  function set(field: string, value: string) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError('')
    const res = await fetch('/api/admin/education', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, sortOrder: Number(form.sortOrder) || 0 }),
    })
    if (res.ok) {
      router.push('/admin/education')
    } else {
      const data = await res.json()
      setError(data.error || 'Failed to save')
      setSaving(false)
    }
  }

  return (
    <AdminFormShell title="New Education" backHref="/admin/education" onSubmit={handleSubmit} saving={saving} error={error}>
      <AdminField label="Badge">
        <AdminInput value={form.badge} onChange={v => set('badge', v)} placeholder="🎓" />
      </AdminField>
      <AdminField label="Degree">
        <AdminInput value={form.degree} onChange={v => set('degree', v)} placeholder="B.Tech Computer Science" />
      </AdminField>
      <AdminField label="Institution">
        <AdminInput value={form.institution} onChange={v => set('institution', v)} placeholder="University name" />
      </AdminField>
      <AdminField label="Year">
        <AdminInput value={form.year} onChange={v => set('year', v)} placeholder="2020" />
      </AdminField>
      <AdminField label="Sort Order">
        <AdminInput value={form.sortOrder} onChange={v => set('sortOrder', v)} placeholder="0" />
      </AdminField>
    </AdminFormShell>
  )
}
