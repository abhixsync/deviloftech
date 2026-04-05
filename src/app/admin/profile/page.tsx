'use client'

import { useState, useEffect, useRef } from 'react'
import { AdminField, AdminInput, AdminTextarea } from '@/components/admin/AdminForm'

export default function AdminProfilePage() {
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const [saved, setSaved] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [form, setForm] = useState({
    name: '', tagline: '', bio: '', photo: '',
    youtube: '', instagram: '', github: '', linkedin: '', website: '', email: '',
  })

  useEffect(() => {
    fetch('/api/admin/profile').then(r => r.json()).then(p => {
      if (!p) return
      setForm({
        name: p.name || '', tagline: p.tagline || '',
        bio: p.bio || '', photo: p.photo || '',
        youtube: p.socialLinks?.youtube || '',
        instagram: p.socialLinks?.instagram || '',
        github: p.socialLinks?.github || '',
        linkedin: p.socialLinks?.linkedin || '',
        website: p.socialLinks?.website || '',
        email: p.socialLinks?.email || '',
      })
    })
  }, [])

  function set(field: string, value: string) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  function buildPayload(photoOverride?: string) {
    return {
      name: form.name, tagline: form.tagline, bio: form.bio,
      photo: photoOverride ?? form.photo,
      socialLinks: {
        youtube: form.youtube, instagram: form.instagram, github: form.github,
        linkedin: form.linkedin, website: form.website, email: form.email,
      },
    }
  }

  async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    setError('')
    const fd = new FormData()
    fd.append('file', file)
    const res = await fetch('/api/admin/upload', { method: 'POST', body: fd })
    const data = await res.json()
    if (res.ok) {
      set('photo', data.url)
      // Persist only the photo field — don't risk overwriting other fields with stale form state
      const saveRes = await fetch('/api/admin/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ photo: data.url }),
      })
      if (!saveRes.ok) setError('Photo uploaded but failed to save — click Save Profile')
    } else {
      setError(data.error || 'Upload failed')
    }
    setUploading(false)
    // reset input so same file can be re-selected
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError('')
    setSaved(false)
    const res = await fetch('/api/admin/profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(buildPayload()),
    })
    if (res.ok) {
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } else {
      const data = await res.json()
      setError(data.error || 'Failed to save')
    }
    setSaving(false)
  }

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.22em', color: 'var(--ember)', marginBottom: 8 }}>SETTINGS</div>
        <h1 style={{ fontFamily: 'var(--cinzel)', fontSize: 24, fontWeight: 900, color: 'var(--parchment)' }}>Profile</h1>
      </div>

      <form onSubmit={handleSubmit} style={{ maxWidth: 720, display: 'flex', flexDirection: 'column', gap: 20 }}>

        {/* ── Photo section ── */}
        <div style={{ background: 'rgba(44,36,32,0.4)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: 6, padding: '24px 22px' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.2em', color: 'var(--ember)', marginBottom: 16 }}>PROFILE PHOTO</div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 20 }}>
            {/* Preview */}
            <div style={{ width: 90, height: 90, borderRadius: '50%', flexShrink: 0, overflow: 'hidden', border: '2px solid rgba(212,56,13,0.4)', background: 'rgba(16,12,8,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {form.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={form.photo} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <span style={{ fontFamily: 'var(--display)', fontSize: 22, color: 'var(--ember)' }}>DT</span>
              )}
            </div>

            {/* Upload + URL options */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp,image/gif"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                className="btn-primary"
                style={{ fontSize: 10, alignSelf: 'flex-start' }}
              >
                {uploading ? 'Uploading...' : '⬆ Upload from Computer'}
              </button>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(245,237,216,0.3)', letterSpacing: '0.1em' }}>
                JPG, PNG, WEBP or GIF · max 5MB
              </div>
            </div>
          </div>

          <AdminField label="Or paste an image URL">
            <AdminInput value={form.photo} onChange={v => set('photo', v)} placeholder="https://example.com/your-photo.jpg" mono />
          </AdminField>
        </div>

        <div style={{ height: 1, background: 'rgba(201,168,76,0.1)' }} />

        <AdminField label="Display Name">
          <AdminInput value={form.name} onChange={v => set('name', v)} placeholder="Abhishek" />
        </AdminField>
        <AdminField label="Tagline">
          <AdminInput value={form.tagline} onChange={v => set('tagline', v)} placeholder="Tech Content Creator · Software Engineer" />
        </AdminField>
        <AdminField label="Bio">
          <AdminTextarea value={form.bio} onChange={v => set('bio', v)} placeholder="Tell your story..." rows={5} />
        </AdminField>

        <div style={{ height: 1, background: 'rgba(201,168,76,0.1)' }} />
        <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.2em', color: 'var(--ember)' }}>SOCIAL LINKS</div>

        <AdminField label="YouTube URL">
          <AdminInput value={form.youtube} onChange={v => set('youtube', v)} placeholder="https://youtube.com/@deviloftech" mono />
        </AdminField>
        <AdminField label="Instagram URL">
          <AdminInput value={form.instagram} onChange={v => set('instagram', v)} placeholder="https://instagram.com/deviloftech" mono />
        </AdminField>
        <AdminField label="GitHub URL">
          <AdminInput value={form.github} onChange={v => set('github', v)} placeholder="https://github.com/yourusername" mono />
        </AdminField>
        <AdminField label="LinkedIn URL">
          <AdminInput value={form.linkedin} onChange={v => set('linkedin', v)} placeholder="https://linkedin.com/in/yourusername" mono />
        </AdminField>
        <AdminField label="Email">
          <AdminInput value={form.email} onChange={v => set('email', v)} placeholder="you@email.com" type="email" />
        </AdminField>

        {error && (
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ember)', padding: '10px 14px', background: 'rgba(212,56,13,0.1)', borderRadius: 3 }}>
            ✕ {error}
          </div>
        )}
        {saved && (
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: '#4caf50', padding: '10px 14px', background: 'rgba(76,175,80,0.1)', borderRadius: 3 }}>
            ✓ Saved successfully
          </div>
        )}

        <div style={{ paddingTop: 8 }}>
          <button type="submit" disabled={saving || uploading} className="btn-primary">
            {saving ? 'Saving...' : 'Save Profile'}
          </button>
        </div>
      </form>
    </div>
  )
}
