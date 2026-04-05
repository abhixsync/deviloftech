'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { AdminFormShell, AdminField, AdminInput, AdminToggle } from '@/components/admin/AdminForm'

interface Tag {
  name: string
  isHot: boolean
}

export default function EditSkillPage() {
  const router = useRouter()
  const { id } = useParams<{ id: string }>()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [clusterTitle, setClusterTitle] = useState('')
  const [sortOrder, setSortOrder] = useState('0')
  const [tags, setTags] = useState<Tag[]>([])
  const [newTagName, setNewTagName] = useState('')
  const [newTagHot, setNewTagHot] = useState(false)

  useEffect(() => {
    fetch(`/api/admin/skills/${id}`).then(r => r.json()).then(item => {
      setClusterTitle(item.clusterTitle || '')
      setSortOrder(String(item.sortOrder ?? 0))
      setTags(item.tags || [])
    })
  }, [id])

  function addTag() {
    const name = newTagName.trim()
    if (!name) return
    setTags(prev => [...prev, { name, isHot: newTagHot }])
    setNewTagName('')
    setNewTagHot(false)
  }

  function removeTag(index: number) {
    setTags(prev => prev.filter((_, i) => i !== index))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError('')
    const res = await fetch(`/api/admin/skills/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ clusterTitle, tags, sortOrder: Number(sortOrder) || 0 }),
    })
    if (res.ok) {
      router.push('/admin/skills')
    } else {
      const data = await res.json()
      setError(data.error || 'Failed to save')
      setSaving(false)
    }
  }

  return (
    <AdminFormShell title="Edit Skill Cluster" backHref="/admin/skills" onSubmit={handleSubmit} saving={saving} error={error}>
      <AdminField label="Cluster Title">
        <AdminInput value={clusterTitle} onChange={setClusterTitle} placeholder="Frontend, Backend, DevOps..." />
      </AdminField>
      <AdminField label="Sort Order">
        <AdminInput value={sortOrder} onChange={setSortOrder} placeholder="0" />
      </AdminField>

      <AdminField label="Tags">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {tags.map((tag, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 10px', background: 'rgba(201,168,76,0.06)', borderRadius: 3 }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--parchment)', flex: 1 }}>
                {tag.name}
                {tag.isHot && <span style={{ marginLeft: 6, color: 'var(--ember)' }}>🔥</span>}
              </span>
              <button
                type="button"
                onClick={() => removeTag(i)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(212,56,13,0.7)' }}
              >
                ✕
              </button>
            </div>
          ))}

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 4 }}>
            <div style={{ flex: 1 }}>
              <AdminInput value={newTagName} onChange={setNewTagName} placeholder="Tag name..." />
            </div>
            <AdminToggle label="Hot" checked={newTagHot} onChange={setNewTagHot} />
            <button
              type="button"
              onClick={addTag}
              style={{
                background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.3)',
                borderRadius: 3, padding: '6px 14px', cursor: 'pointer',
                fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--gold)', letterSpacing: '0.1em',
              }}
            >
              Add
            </button>
          </div>
        </div>
      </AdminField>
    </AdminFormShell>
  )
}
