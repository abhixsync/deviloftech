'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AdminFormShell, AdminField, AdminInput, AdminTextarea, AdminSelect, AdminToggle } from '@/components/admin/AdminForm'

export default function NewNewsPage() {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    headline: '', sourceUrl: '', sourceName: '', summary: '',
    myTake: '', category: 'tech', published: true,
  })

  function set(field: string, value: string | boolean) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError('')
    const res = await fetch('/api/admin/news', {
      method: 'POST',
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
    <AdminFormShell title="Add News Item" backHref="/admin/news" onSubmit={handleSubmit} saving={saving} error={error}>
      <AdminField label="Headline">
        <AdminInput value={form.headline} onChange={v => set('headline', v)} placeholder="OpenAI releases GPT-5..." />
      </AdminField>
      <AdminField label="Source URL">
        <AdminInput value={form.sourceUrl} onChange={v => set('sourceUrl', v)} placeholder="https://techcrunch.com/..." mono />
      </AdminField>
      <AdminField label="Source Name">
        <AdminInput value={form.sourceName} onChange={v => set('sourceName', v)} placeholder="TechCrunch" />
      </AdminField>
      <AdminField label="Summary">
        <AdminTextarea value={form.summary} onChange={v => set('summary', v)} placeholder="Brief summary of the news..." rows={3} />
      </AdminField>
      <AdminField label="My Take (optional)">
        <AdminTextarea value={form.myTake} onChange={v => set('myTake', v)} placeholder="Your personal commentary..." rows={3} />
      </AdminField>
      <AdminField label="Category">
        <AdminSelect value={form.category} onChange={v => set('category', v)} options={['ai', 'coding', 'tech', 'industry']} />
      </AdminField>
      <AdminToggle label="Published" checked={form.published} onChange={v => set('published', v)} />
    </AdminFormShell>
  )
}
