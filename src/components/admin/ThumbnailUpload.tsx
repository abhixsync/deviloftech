'use client'

import { useRef, useState } from 'react'

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '10px 14px',
  background: 'rgba(16,12,8,0.6)', border: '1px solid rgba(201,168,76,0.2)',
  borderRadius: 3, color: 'var(--parchment)', fontSize: 13,
  outline: 'none', boxSizing: 'border-box',
  fontFamily: 'var(--mono)',
}

export default function ThumbnailUpload({ value, onChange }: { value: string; onChange: (url: string) => void }) {
  const fileRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    if (file.size > 5 * 1024 * 1024) {
      setUploadError('File too large (max 5MB)')
      return
    }

    setUploading(true)
    setUploadError('')
    try {
      const fd = new FormData()
      fd.append('file', file)
      const res = await fetch('/api/admin/upload', { method: 'POST', body: fd })
      const data = await res.json()
      if (!res.ok) {
        setUploadError(data.error || 'Upload failed')
      } else {
        onChange(data.url)
      }
    } catch {
      setUploadError('Upload failed')
    } finally {
      setUploading(false)
      if (fileRef.current) fileRef.current.value = ''
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {/* Preview */}
      {value ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={value}
          alt="Thumbnail preview"
          style={{ maxHeight: 200, borderRadius: 6, border: '1px solid rgba(201,168,76,0.25)', objectFit: 'cover', display: 'block' }}
        />
      ) : (
        <div style={{ height: 100, border: '1px dashed rgba(201,168,76,0.25)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(245,237,216,0.3)', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.1em' }}>
          NO THUMBNAIL
        </div>
      )}

      {/* Controls */}
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <button
          type="button"
          className="btn-ghost"
          onClick={() => fileRef.current?.click()}
          disabled={uploading}
          style={{ fontSize: 11, whiteSpace: 'nowrap', flexShrink: 0 }}
        >
          {uploading ? 'Uploading...' : 'Upload Image'}
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          onChange={handleFile}
          style={{ display: 'none' }}
        />
        <input
          type="text"
          value={value}
          onChange={e => { setUploadError(''); onChange(e.target.value) }}
          placeholder="or paste URL..."
          style={inputStyle}
        />
      </div>

      {/* Error */}
      {uploadError && (
        <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ember)', padding: '8px 12px', background: 'rgba(212,56,13,0.1)', borderRadius: 3 }}>
          {uploadError}
        </div>
      )}
    </div>
  )
}
