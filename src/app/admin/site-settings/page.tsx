'use client'

import { useState, useEffect } from 'react'
import { AdminField, AdminInput, AdminTextarea } from '@/components/admin/AdminForm'

export default function AdminSiteSettingsPage() {
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [saved, setSaved] = useState(false)
  const [form, setForm] = useState({
    siteName: '',
    metaTitle: '',
    metaTitleTemplate: '',
    metaDescription: '',
    metaKeywords: '',
    ogImageUrl: '',
    copyrightName: '',
  })

  useEffect(() => {
    fetch('/api/admin/site-settings').then(r => r.json()).then(d => {
      if (!d) return
      setForm({
        siteName:          d.siteName ?? '',
        metaTitle:         d.metaTitle ?? '',
        metaTitleTemplate: d.metaTitleTemplate ?? '',
        metaDescription:   d.metaDescription ?? '',
        metaKeywords:      (d.metaKeywords ?? []).join(', '),
        ogImageUrl:        d.ogImageUrl ?? '',
        copyrightName:     d.copyrightName ?? '',
      })
    })
  }, [])

  function set(field: string, value: string) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError('')
    setSaved(false)
    try {
      const res = await fetch('/api/admin/site-settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          siteName:          form.siteName,
          metaTitle:         form.metaTitle,
          metaTitleTemplate: form.metaTitleTemplate,
          metaDescription:   form.metaDescription,
          metaKeywords:      form.metaKeywords.split(',').map(k => k.trim()).filter(Boolean),
          ogImageUrl:        form.ogImageUrl,
          copyrightName:     form.copyrightName,
        }),
      })
      if (!res.ok) throw new Error('Save failed')
      setSaved(true)
      setTimeout(() => setSaved(false), 2500)
    } catch {
      setError('Failed to save settings.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div>
      <h1 style={{ fontFamily: 'var(--cinzel)', fontSize: 22, fontWeight: 900, color: 'var(--parchment)', marginBottom: 8 }}>
        Site Settings
      </h1>
      <p style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--parchment-dim)', letterSpacing: '0.15em', marginBottom: 32 }}>
        GLOBAL IDENTITY · SEO · METADATA
      </p>

      <form onSubmit={handleSubmit} style={{ maxWidth: 640, display: 'flex', flexDirection: 'column', gap: 20 }}>

        <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.2em', color: 'var(--ember)', textTransform: 'uppercase', paddingBottom: 8, borderBottom: '1px solid rgba(212,56,13,0.2)' }}>
          Identity
        </div>

        <AdminField label="Site Name">
          <AdminInput value={form.siteName} onChange={v => set('siteName', v)} placeholder="DevilOfTech" />
        </AdminField>

        <AdminField label="Copyright Line">
          <AdminInput value={form.copyrightName} onChange={v => set('copyrightName', v)} placeholder="DevilOfTech · Abhishek" />
        </AdminField>

        <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.2em', color: 'var(--ember)', textTransform: 'uppercase', paddingBottom: 8, borderBottom: '1px solid rgba(212,56,13,0.2)', marginTop: 8 }}>
          SEO & Metadata
        </div>

        <AdminField label="Meta Title (homepage)">
          <AdminInput value={form.metaTitle} onChange={v => set('metaTitle', v)} placeholder="DevilOfTech — Tech, AI & Coding" />
        </AdminField>

        <AdminField label="Title Template (inner pages — %s = page name)">
          <AdminInput value={form.metaTitleTemplate} onChange={v => set('metaTitleTemplate', v)} placeholder="%s | DevilOfTech" />
        </AdminField>

        <AdminField label="Meta Description">
          <AdminTextarea value={form.metaDescription} onChange={v => set('metaDescription', v)} rows={3} placeholder="Your go-to source for tech news..." />
        </AdminField>

        <AdminField label="Keywords (comma-separated)">
          <AdminInput value={form.metaKeywords} onChange={v => set('metaKeywords', v)} placeholder="tech, AI, coding, youtube, deviloftech" />
        </AdminField>

        <AdminField label="OG Image URL">
          <AdminInput value={form.ogImageUrl} onChange={v => set('ogImageUrl', v)} placeholder="/og-default.png" />
        </AdminField>

        {error && (
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ember)' }}>{error}</div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 8 }}>
          <button type="submit" className="btn-primary" disabled={saving} style={{ fontSize: 10 }}>
            {saving ? 'Saving…' : 'Save Settings'}
          </button>
          {saved && (
            <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--circuit)', letterSpacing: '0.15em' }}>
              ✓ Saved
            </span>
          )}
        </div>
      </form>
    </div>
  )
}
