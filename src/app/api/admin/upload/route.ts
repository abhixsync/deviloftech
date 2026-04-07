import { NextRequest, NextResponse } from 'next/server'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'

const allowedImageTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
const allowedDocTypes = [
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
const allowedTypes = [...allowedImageTypes, ...allowedDocTypes]

// Extensions allowed when browser sends empty MIME type (e.g. .md on some browsers)
const allowedImageExts = ['jpg', 'jpeg', 'png', 'webp', 'gif']
const allowedDocExts = ['pdf', 'doc', 'docx', 'md', 'txt', 'csv', 'xls', 'xlsx', 'zip', 'epub', 'ppt', 'pptx']
const allowedExts = [...allowedImageExts, ...allowedDocExts]

function hasR2Config(): boolean {
  return !!(
    process.env.R2_ACCOUNT_ID &&
    process.env.R2_ACCESS_KEY_ID &&
    process.env.R2_SECRET_ACCESS_KEY &&
    process.env.R2_BUCKET_NAME &&
    process.env.NEXT_PUBLIC_R2_PUBLIC_URL
  )
}

function createR2Client(): S3Client {
  return new S3Client({
    region: 'auto',
    endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY_ID!,
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
    },
  })
}

export async function POST(req: NextRequest) {
  try {
    // CRITICAL: sanitize folder param — only allow alphanumeric, hyphens, underscores
    const rawFolder = req.nextUrl.searchParams.get('folder') || ''
    const folder = rawFolder.replace(/[^a-zA-Z0-9_-]/g, '')

    const formData = await req.formData()
    const file = formData.get('file') as File | null

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    const ext = file.name.split('.').pop()?.toLowerCase() || ''

    // Validate by MIME type; fall back to extension check when browser sends empty MIME
    const mimeAllowed = allowedTypes.includes(file.type)
    const extAllowed = file.type === '' && allowedExts.includes(ext)
    if (!mimeAllowed && !extAllowed) {
      return NextResponse.json(
        { error: 'File type not allowed. Supported: JPG, PNG, WEBP, GIF, PDF, DOCX, DOC, MD, TXT, CSV, XLS, XLSX, ZIP, EPUB, PPT, PPTX' },
        { status: 400 }
      )
    }

    const isImage = allowedImageTypes.includes(file.type) || (file.type === '' && allowedImageExts.includes(ext))
    const maxSize = isImage ? 5 * 1024 * 1024 : 20 * 1024 * 1024
    if (file.size > maxSize) {
      return NextResponse.json({ error: `File too large (max ${isImage ? '5MB' : '20MB'})` }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const safeExt = ext || 'bin'
    const basename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${safeExt}`
    const key = folder ? `${folder}/${basename}` : basename

    // Sanitize filename for Content-Disposition header to prevent header injection
    const safeName = file.name.replace(/["\r\n]/g, '_')

    if (hasR2Config()) {
      const client = createR2Client()
      await client.send(
        new PutObjectCommand({
          Bucket: process.env.R2_BUCKET_NAME!,
          Key: key,
          Body: buffer,
          ContentType: file.type || 'application/octet-stream',
          ContentDisposition: isImage ? undefined : `attachment; filename="${safeName}"`,
        })
      )
      return NextResponse.json({ url: `${process.env.NEXT_PUBLIC_R2_PUBLIC_URL}/${key}` })
    }

    // Local fallback for development (when R2 env vars are not set)
    const uploadDir = join(process.cwd(), 'public', 'uploads', folder)
    await mkdir(uploadDir, { recursive: true })
    await writeFile(join(uploadDir, basename), buffer)
    return NextResponse.json({ url: folder ? `/uploads/${folder}/${basename}` : `/uploads/${basename}` })
  } catch (err) {
    console.error('Upload error:', err)
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
