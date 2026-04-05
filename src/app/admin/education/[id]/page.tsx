'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { AdminFormShell, AdminField, AdminInput } from '@/components/admin/AdminForm'

export default function EditEducationPage() {
  const router = useRouter()
  const { id } = useParams<{ id: string }>()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    badge: '', degree: '', institution: '', year: '', sortOrder: '0',
  })

  useEffect(() => {
    fetch(`/api/admin/education/${id}`).then(r => r.json()).then(item => {
      setForm({
        badge: item.badge || '',
        degree: item.degree || '',
        institution: item.institution || '',
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
    const res = await fetch(`/api/admin/education/${id}`, {
      method: 'PUT',
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
    <AdminFormShell title="Edit Education" backHref="/admin/education" onSubmit={handleSubmit} saving={saving} error={error}>
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
