'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { AdminFormShell, AdminField, AdminInput, AdminTextarea, AdminSelect, AdminToggle } from '@/components/admin/AdminForm'

export default function EditNewsPage() {
  const router = useRouter()
  const { id } = useParams<{ id: string }>()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    headline: '', sourceUrl: '', sourceName: '', summary: '',
    myTake: '', category: 'tech', published: true,
  })

  useEffect(() => {
    fetch(`/api/admin/news/${id}`).then(r => r.json()).then(n => {
      setForm({
        headline: n.headline || '',
        sourceUrl: n.sourceUrl || '',
        sourceName: n.sourceName || '',
        summary: n.summary || '',
        myTake: n.myTake || '',
        category: n.category || 'tech',
        published: n.published ?? true,
      })
    })
  }, [id])

  function set(field: string, value: string | boolean) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    const res = await fetch(`/api/admin/news/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) {
      router.push('/admin/news')
    } else {
      const data = await res.json()
      setError(data.error || 'Failed to save')
      setSaving(false)
    }
  }

  return (
    <AdminFormShell title="Edit News Item" backHref="/admin/news" onSubmit={handleSubmit} saving={saving} error={error}>
      <AdminField label="Headline">
        <AdminInput value={form.headline} onChange={v => set('headline', v)} />
      </AdminField>
      <AdminField label="Source URL">
        <AdminInput value={form.sourceUrl} onChange={v => set('sourceUrl', v)} mono />
      </AdminField>
      <AdminField label="Source Name">
        <AdminInput value={form.sourceName} onChange={v => set('sourceName', v)} />
      </AdminField>
      <AdminField label="Summary">
        <AdminTextarea value={form.summary} onChange={v => set('summary', v)} rows={3} />
      </AdminField>
      <AdminField label="My Take">
        <AdminTextarea value={form.myTake} onChange={v => set('myTake', v)} rows={3} />
      </AdminField>
      <AdminField label="Category">
        <AdminSelect value={form.category} onChange={v => set('category', v)} options={['ai', 'coding', 'tech', 'industry']} />
      </AdminField>
      <AdminToggle label="Published" checked={form.published} onChange={v => set('published', v)} />
    </AdminFormShell>
  )
}
