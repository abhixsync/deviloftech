'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AdminFormShell, AdminField, AdminInput, AdminTextarea, AdminSelect, AdminToggle } from '@/components/admin/AdminForm'

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export default function NewProjectPage() {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '', slug: '', tag: '', description: '', impact: '',
    stack: '', status: 'past', isFeatured: false,
    github: '', live: '', sortOrder: '0',
  })

  function set(field: string, value: string | boolean) {
    setForm(prev => {
      const next = { ...prev, [field]: value }
      if (field === 'name' && typeof value === 'string') next.slug = slugify(value)
      return next
    })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError('')
    const payload = {
      name: form.name,
      slug: form.slug,
      tag: form.tag,
      description: form.description,
      impact: form.impact,
      stack: form.stack.split(',').map(s => s.trim()).filter(Boolean),
      status: form.status,
      isFeatured: form.isFeatured,
      links: { github: form.github, live: form.live },
      sortOrder: parseInt(form.sortOrder) || 0,
    }
    const res = await fetch('/api/admin/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (res.ok) {
      router.push('/admin/projects')
    } else {
      const data = await res.json()
      setError(data.error || 'Failed to save')
      setSaving(false)
    }
  }

  return (
    <AdminFormShell title="New Project" backHref="/admin/projects" onSubmit={handleSubmit} saving={saving} error={error}>
      <AdminField label="Project Name">
        <AdminInput value={form.name} onChange={v => set('name', v)} placeholder="FsBankAPI — 25-Bank Gateway" />
      </AdminField>
      <AdminField label="Slug">
        <AdminInput value={form.slug} onChange={v => set('slug', v)} placeholder="auto-generated" mono />
      </AdminField>
      <AdminField label="Tag / Category">
        <AdminInput value={form.tag} onChange={v => set('tag', v)} placeholder="Fintech · Payment Infrastructure" />
      </AdminField>
      <AdminField label="Description">
        <AdminTextarea value={form.description} onChange={v => set('description', v)} placeholder="What did you build and how?" rows={4} />
      </AdminField>
      <AdminField label="Impact">
        <AdminInput value={form.impact} onChange={v => set('impact', v)} placeholder="↑ Reduced integration time from weeks to hours" />
      </AdminField>
      <AdminField label="Tech Stack (comma separated)">
        <AdminInput value={form.stack} onChange={v => set('stack', v)} placeholder="Node.js, TypeScript, PostgreSQL, Redis" />
      </AdminField>
      <AdminField label="Status">
        <AdminSelect value={form.status} onChange={v => set('status', v)} options={['past', 'current', 'upcoming']} />
      </AdminField>
      <AdminField label="GitHub URL">
        <AdminInput value={form.github} onChange={v => set('github', v)} placeholder="https://github.com/..." mono />
      </AdminField>
      <AdminField label="Live URL">
        <AdminInput value={form.live} onChange={v => set('live', v)} placeholder="https://..." mono />
      </AdminField>
      <AdminField label="Sort Order">
        <AdminInput value={form.sortOrder} onChange={v => set('sortOrder', v)} placeholder="0" mono />
      </AdminField>
      <AdminToggle label="Featured" checked={form.isFeatured} onChange={v => set('isFeatured', v)} />
    </AdminFormShell>
  )
}
