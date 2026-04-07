'use client'

import { useRef, useState } from 'react'

const ACCEPTED_MIME = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'text/markdown',
  'text/plain',
  'text/csv',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/zip',
  'application/x-zip-compressed',
  'application/epub+zip',
  'application/vnd.ms-powerpoint',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
]

const ACCEPT_STRING = '.pdf,.doc,.docx,.md,.txt,.csv,.xls,.xlsx,.zip,.epub,.ppt,.pptx'
const MAX_SIZE = 20 * 1024 * 1024

function getFileIcon(name: string): string {
  const ext = name.split('.').pop()?.toLowerCase()
  switch (ext) {
    case 'pdf': return '📄'
    case 'doc': case 'docx': return '📝'
    case 'md': return '📋'
    case 'txt': return '📃'
    case 'csv': case 'xls': case 'xlsx': return '📊'
    case 'zip': return '📦'
    case 'epub': return '📖'
    case 'ppt': case 'pptx': return '📑'
    default: return '📁'
  }
}

function getFilenameFromUrl(url: string): string {
  return decodeURIComponent(url.split('/').pop() || url)
}

export default function FileUpload({
  value,
  onChange,
  folder = 'resources',
}: {
  value: string
  onChange: (url: string) => void
  folder?: string
}) {
  const fileRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    if (!ACCEPTED_MIME.includes(file.type) && file.type !== '') {
      setUploadError('Unsupported file type')
      return
    }

    if (file.size > MAX_SIZE) {
      setUploadError('File too large (max 20MB)')
      return
    }

    setUploading(true)
    setUploadError('')
    try {
      const fd = new FormData()
      fd.append('file', file)
      const res = await fetch(`/api/admin/upload?folder=${encodeURIComponent(folder)}`, { method: 'POST', body: fd })
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

  const displayName = value ? getFilenameFromUrl(value) : null

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {displayName ? (
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '10px 14px', background: 'rgba(16,12,8,0.6)',
          border: '1px solid rgba(201,168,76,0.3)', borderRadius: 3,
        }}>
          <span style={{ fontSize: 18 }}>{getFileIcon(displayName)}</span>
          <span style={{
            fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--parchment)',
            flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          }}>
            {displayName}
          </span>
          <button
            type="button"
            onClick={() => { setUploadError(''); onChange('') }}
            style={{ background: 'none', border: 'none', color: 'rgba(245,237,216,0.4)', cursor: 'pointer', fontSize: 14, padding: 0, flexShrink: 0 }}
          >
            ✕
          </button>
        </div>
      ) : (
        <div style={{
          height: 72, border: '1px dashed rgba(201,168,76,0.2)', borderRadius: 4,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'rgba(245,237,216,0.25)', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.1em',
        }}>
          NO FILE UPLOADED
        </div>
      )}

      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <button
          type="button"
          className="btn-ghost"
          onClick={() => fileRef.current?.click()}
          disabled={uploading}
          style={{ fontSize: 11, whiteSpace: 'nowrap', flexShrink: 0 }}
        >
          {uploading ? 'Uploading...' : 'Upload File'}
        </button>
        <input ref={fileRef} type="file" accept={ACCEPT_STRING} onChange={handleFile} style={{ display: 'none' }} />
        <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(245,237,216,0.25)', lineHeight: 1.5 }}>
          PDF · DOCX · DOC · MD · TXT · CSV · XLS · XLSX · ZIP · EPUB · PPT · PPTX
          <br />max 20MB
        </span>
      </div>

      {uploadError && (
        <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ember)', padding: '8px 12px', background: 'rgba(212,56,13,0.1)', borderRadius: 3 }}>
          {uploadError}
        </div>
      )}
    </div>
  )
}
